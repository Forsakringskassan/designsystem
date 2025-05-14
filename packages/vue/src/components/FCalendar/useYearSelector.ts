import {
    type ShallowRef,
    type Ref,
    computed,
    nextTick,
    ref,
    shallowRef,
    watchEffect,
} from "vue";
import { FDate, FYear, clamp, range } from "@fkui/date";
import { assertRef, focus } from "@fkui/logic";
import { useEventListener } from "@vueuse/core";
import { getHTMLElementsFromVueRef } from "../../utils";

/**
 * @internal
 */
export interface UseYearSelector {
    readonly activeYear: Ref<FYear>;
    readonly yearSelectorOpen: Ref<boolean>;
    readonly selectableYears: Readonly<ShallowRef<FYear[]>>;
    onClickSelectYear(year: FYear): void;
}

/**
 * @internal
 */
export interface UseYearSelectorOptions {
    readonly modelValue: ShallowRef<FDate>;
    readonly yearElements: Readonly<ShallowRef<unknown>>;
    readonly yearSelector: Readonly<ShallowRef<HTMLElement | null>>;
    readonly minDate: Readonly<ShallowRef<FDate>>;
    readonly maxDate: Readonly<ShallowRef<FDate>>;
    /** called when the date is changed */
    onChangeDate(date: FDate): void;
    /** called just after year selector is closed */
    onClose(): void;
}

/**
 * @internal
 */
export function onKeyDown(
    event: KeyboardEvent,
    options: {
        activeYear: ShallowRef<FYear>;
        firstYear: FYear;
        lastYear: FYear;
        focus(year: FYear): void;
        close(): void;
        select(year: FYear): void;
    },
): void {
    const { activeYear, firstYear, lastYear, focus, close, select } = options;

    if (event.ctrlKey) {
        return;
    }

    switch (event.key) {
        case "ArrowUp":
            event.preventDefault();
            activeYear.value = activeYear.value.equals(firstYear)
                ? lastYear
                : activeYear.value.previous();
            focus(activeYear.value);
            break;
        case "ArrowDown":
            event.preventDefault();
            activeYear.value = activeYear.value.equals(lastYear)
                ? firstYear
                : activeYear.value.next();
            focus(activeYear.value);
            break;
        case "Enter":
        case " ":
            event.preventDefault();
            select(activeYear.value);
            close();
            break;
        default:
            break;
    }
}

/**
 * @internal
 */
export function useYearSelector(
    options: UseYearSelectorOptions,
): UseYearSelector {
    const yearSelectorOpen = ref(false);
    const activeYear = shallowRef(FYear.fromYear("invalid"));
    const { minDate, maxDate, modelValue, yearSelector } = options;

    const minYear = computed(() => FYear.fromDate(minDate.value));
    const maxYear = computed(() => FYear.fromDate(maxDate.value));
    const currentYear = computed(() => FYear.fromDate(modelValue.value));
    const selectableYears = computed(() =>
        Array.from(range(minYear.value, maxYear.value)),
    );

    watchEffect(async () => {
        if (!yearSelectorOpen.value) {
            return;
        }

        await nextTick();

        activeYear.value = currentYear.value;
        focusOnYear(activeYear.value);
    });

    useEventListener(yearSelector, "keydown", (event) => {
        if (!yearSelectorOpen.value) {
            return;
        }

        onKeyDown(event, {
            activeYear,
            firstYear: minYear.value,
            lastYear: maxYear.value,
            focus: focusOnYear,
            close: closeYearSelector,
            select: selectYear,
        });
    });

    return {
        yearSelectorOpen,
        activeYear,
        selectableYears,
        onClickSelectYear,
    };

    function focusOnYear(year: FYear): void {
        const index = selectableYears.value.findIndex((it) => it.equals(year));
        const yearElements = getHTMLElementsFromVueRef(
            options.yearElements.value,
        );
        const activeElement = yearElements[index];
        focus(activeElement);

        assertRef(yearSelector);
        const wrapperElement = yearSelector.value;
        const wrapperHeight = wrapperElement.getBoundingClientRect().height;
        const activeElementHeight =
            activeElement.getBoundingClientRect().height;
        const centerPosition =
            activeElement.offsetTop - (wrapperHeight - activeElementHeight) / 2;

        // Scroll activeElement to center of wrapper.
        wrapperElement.scrollTo({
            top: centerPosition,
            behavior: "instant",
        });
    }

    function onClickSelectYear(year: FYear): void {
        activeYear.value = year;
        selectYear(year);
        closeYearSelector();
    }

    function selectYear(year: FYear): void {
        const offset = year.value - currentYear.value.value;
        const updatedDate = modelValue.value.addYears(offset);
        options.onChangeDate(clamp(updatedDate, minDate.value, maxDate.value));
    }

    function closeYearSelector(): void {
        yearSelectorOpen.value = false;
        options.onClose();
    }
}
