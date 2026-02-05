<script setup lang="ts" generic="T, K extends keyof T">
import { computed, nextTick, onMounted, ref, useId, useTemplateRef, watchEffect } from "vue";
import {
    type ValidationResult,
    type ValidityEvent,
    type ValidityNativeEvent,
    ValidationService,
    assertRef,
} from "@fkui/logic";
import { type ComponentValidityEvent, FIcon, IPopupError, dispatchComponentValidityEvent } from "@fkui/vue";
import { useElementHover, useEventListener, useFocusWithin } from "@vueuse/core";
import { type PopupError } from "./PopupEror";
import { addInputValidators } from "./input-validators";
import { isAlphanumeric } from "./is-alphanumeric";
import { useStartStopEdit } from "./start-stop-edit";
import { type NormalizedTableColumnText } from "./table-column";

interface ValidationFacade {
    validateElement(element: string | Element | null): Promise<ValidationResult>;
    dispatchComponentValidityEvent: (element: Element, detail: ComponentValidityEvent) => void;
}

const {
    row,
    column,
    activeErrorAnchor = undefined,
} = defineProps<{
    row: T;
    column: NormalizedTableColumnText<T, K>;
    activeErrorAnchor?: HTMLElement;
}>();

const emit = defineEmits<{
    onError: [error: PopupError];
    closeError: [error: PopupError];
}>();

const viewValue = ref("");
const inEdit = ref(false);
const cellId = useId();
const inputId = useId();

const validity = ref<Pick<ValidityEvent, "isValid" | "validationMessage" | "validityMode">>({
    isValid: true,
    validationMessage: "",
    validityMode: "INITIAL",
});

let validationFacade: ValidationFacade = {
    validateElement: () => Promise.resolve({ isValid: true, error: "", isSubmitted: false, isTouched: false }),
    dispatchComponentValidityEvent: () => undefined,
};

const hasError = computed(() => validity.value.validityMode === "ERROR");
const viewModeAriaInvalid = computed(() => (!inEdit.value && hasError.value ? true : undefined));
const viewModeErrorMessage = computed(() =>
    !inEdit.value && hasError.value ? validity.value.validationMessage : undefined,
);

const divClasses = computed(() => {
    return {
        "table-ng__editable": true,
        "table-ng__editable__numeric": column.tnum,
    };
});

const wrapperClasses = computed(() => {
    return {
        "table-ng__cell": true,
        "table-ng__cell--text": true,
        "table-ng__cell--valid": !hasError.value,
        "table-ng__cell--error": hasError.value,
        "table-ng__cell--align-left": column.align === "left",
        "table-ng__cell--align-right": column.align === "right",
    };
});

const staticClasses = computed(() => {
    return {
        "table-ng__cell": true,
        "table-ng__cell--static": true,
        "table-ng__cell--align-left": column.align === "left",
        "table-ng__cell--align-right": column.align === "right",
    };
});

const inputClasses = computed(() => {
    return {
        "table-ng__textedit": true,
    };
});

const ariaLabel = computed(() => {
    let value = column.label(row);

    if (hasError.value) {
        value = `${value} ${validity.value.validationMessage}`;
    }

    return value.length > 0 ? value : undefined;
});

const tdElement = useTemplateRef("td");
const inputElement = useTemplateRef("input");
const penElement = useTemplateRef("pen");
const { stopEdit } = useStartStopEdit();
const isHovered = useElementHover(tdElement, { delayEnter: 200 });
const { focused } = useFocusWithin(tdElement);

const openPopupError = computed(() => {
    if (!tdElement.value) {
        return false;
    }
    return tdElement.value === activeErrorAnchor;
});

let initialViewValue = "";
let pendingStopEditReason: "enter" | "tab" | "shift-tab" | null = null;

function setUpValidation(el: HTMLInputElement): void {
    addInputValidators(el, column.type);
    ValidationService.addValidatorsToElement(el, column.validation);

    validationFacade = {
        validateElement: (el) => ValidationService.validateElement(el),
        dispatchComponentValidityEvent,
    };
}

function setUpFakeValidation(el: HTMLInputElement): void {
    assertRef(inputElement);
    const nativeEvents: ValidityNativeEvent[] = ["change", "blur"];

    nativeEvents.forEach((nativeEvent) => {
        useEventListener(el, nativeEvent, () => {
            const fakeEvent = new CustomEvent<ValidityEvent>("validity", {
                detail: {
                    isValid: true,
                    nativeEvent,
                    validityMode: "INITIAL",
                    validationMessage: "",
                    target: inputElement.value,
                    elementId: String(inputElement.value.id),
                },
            });

            onValidity(fakeEvent);
        });
    });

    useEventListener(el, "input", onPendingValidity);
    useEventListener(el, "component-validity", (e) => {
        e.stopPropagation();
    });
}

onMounted(() => {
    if (inputElement.value) {
        viewValue.value = fromColumnValue();

        if (column.hasValidation) {
            setUpValidation(inputElement.value);
        } else {
            setUpFakeValidation(inputElement.value);
        }

        void nextTick().then(() => validationFacade.validateElement(inputElement.value)); // wait for .value to be set before validation
    }
});

watchEffect(() => {
    if (hasError.value) {
        emit("onError", {
            anchor: tdElement.value ?? undefined,
            arrowAnchor: penElement.value ?? undefined,
            message: validity.value.validationMessage,
            hasFocus: focused.value,
            hasHover: isHovered.value,
            inEdit: inEdit.value,
        });
    } else {
        emit("closeError", {
            anchor: tdElement.value ?? undefined,
            arrowAnchor: penElement.value ?? undefined,
            message: validity.value.validationMessage,
            hasFocus: focused.value,
            hasHover: isHovered.value,
            inEdit: inEdit.value,
        });
    }
});

function onStartEdit(value: string): void {
    if (inEdit.value) {
        return;
    }

    inEdit.value = true;
    assertRef(tdElement);
    assertRef(inputElement);

    const { width } = tdElement.value.getBoundingClientRect();
    initialViewValue = viewValue.value;
    viewValue.value = value;
    tdElement.value.style.setProperty("width", `${String(width)}px`);

    inputElement.value.tabIndex = 0;
    inputElement.value.focus();
}

function onStopEdit(options: { reason: "enter" | "escape" | "tab" | "shift-tab" | "blur" }): void {
    const { reason } = options;
    inEdit.value = false;
    assertRef(inputElement);
    inputElement.value.tabIndex = -1;

    assertRef(tdElement);
    tdElement.value.style.removeProperty("width");

    void stopEdit(inputElement.value, reason);
}

function fromColumnValue(): string {
    assertRef(validity);
    const value = column.value(row);

    if (validity.value.isValid) {
        return column.formatter(value) ?? value;
    }

    return value;
}

function toColumnValue(value: string): string {
    assertRef(validity);

    if (validity.value.isValid) {
        return column.parser(value) ?? value;
    }

    return value;
}

function updateColumnValue(): void {
    const oldValue = column.value(row);
    const newValue = toColumnValue(viewValue.value);

    if (oldValue !== newValue) {
        column.update(row, newValue, oldValue);
    }
}

function onClickCell(event: MouseEvent): void {
    assertRef(tdElement);

    if (tdElement.value.contains(event.target as Node)) {
        onStartEdit(fromColumnValue());
    }
}

function onViewingKeydown(event: KeyboardEvent): void {
    if (isAlphanumeric(event)) {
        event.stopPropagation();
        onStartEdit("");
    }

    if (event.key === "Enter") {
        event.stopPropagation();
        onStartEdit(fromColumnValue());
    }
}

function onEditingKeydown(event: KeyboardEvent): void {
    assertRef(inputElement);
    event.stopPropagation();

    if (event.key === "Enter") {
        if (viewValue.value === initialViewValue) {
            onStopEdit({ reason: "enter" });
        } else {
            pendingStopEditReason = "enter";
        }
    } else if (event.key === "Escape") {
        onStopEdit({ reason: "escape" });
        viewValue.value = initialViewValue;
        inputElement.value.value = initialViewValue; // required for validationservice to pick up value instantly
        void validationFacade.validateElement(inputElement.value);
    } else if (event.key === "Tab") {
        pendingStopEditReason = event.shiftKey ? "shift-tab" : "tab";
    }
}

function onKeydown(event: KeyboardEvent): void {
    const editing = document.activeElement === inputElement.value;

    if (editing) {
        onEditingKeydown(event);
    } else {
        onViewingKeydown(event);
    }
}

function updateValidity(eventDetail: ValidityEvent): void {
    const { isValid, validationMessage, validityMode } = eventDetail;
    validity.value = { isValid, validationMessage, validityMode };

    assertRef(inputElement);
    validationFacade.dispatchComponentValidityEvent(inputElement.value, {
        ...eventDetail,
        errorMessage: validationMessage,
        focusElementId: cellId,
    });
}

function onValidity(event: CustomEvent<ValidityEvent>): void {
    const nativeEvent = event.detail.nativeEvent;
    const reason = pendingStopEditReason ?? (nativeEvent === "blur" ? "blur" : null);
    pendingStopEditReason = null;

    if (inEdit.value && reason) {
        onStopEdit({ reason });
        updateValidity(event.detail);
        updateColumnValue();
        return;
    }

    if (nativeEvent === "input") {
        updateValidity(event.detail);
        updateColumnValue();
        return;
    }

    if (nativeEvent === "validate") {
        updateValidity(event.detail);
    }
}

function onPendingValidity(): void {
    assertRef(validity);
    validity.value.validityMode = "INITIAL";
}
</script>

<template>
    <td
        v-if="column.editable(row)"
        :id="cellId"
        ref="td"
        tabindex="-1"
        :class="wrapperClasses"
        :aria-invalid="viewModeAriaInvalid"
        @click.stop="onClickCell"
        @keydown="onKeydown"
    >
        <div :class="divClasses">
            <span class="table-ng__editable__text">{{ fromColumnValue() }}</span>
            <span v-if="viewModeErrorMessage" class="sr-only">{{ viewModeErrorMessage }}</span>
            <input
                :id="inputId"
                ref="input"
                v-model="viewValue"
                :class="inputClasses"
                type="text"
                maxlength="40"
                tabindex="-1"
                :aria-label
                @validity="onValidity"
                @pending-validity="onPendingValidity"
            />
            <div ref="pen">
                <f-icon name="pen" class="table-ng__editable__icon"></f-icon>
            </div>
        </div>
        <i-popup-error
            :anchor="tdElement"
            :is-open="openPopupError"
            :error-message="validity.validationMessage"
            :arrow-anchor="penElement"
            layout="f-table"
        ></i-popup-error>
    </td>
    <td v-else ref="td" tabindex="-1" :class="staticClasses">
        {{ fromColumnValue() }}
    </td>
</template>
