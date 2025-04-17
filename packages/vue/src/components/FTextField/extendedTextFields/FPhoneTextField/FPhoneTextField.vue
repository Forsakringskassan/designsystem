<script lang="ts">
import { defineComponent } from "vue";
import { type ValidatorConfigs, type ValidityEvent, ValidationService, ElementIdService } from "@fkui/logic";
import { FTextField } from "../..";
import { TranslationMixin } from "../../../../plugins";
import { renderSlotText, dispatchComponentValidityEvent } from "../../../../utils";

export default defineComponent({
    name: "FPhoneTextField",
    components: { FTextField },
    mixins: [TranslationMixin],
    inheritAttrs: false,
    props: {
        /**
         * The id for the input id attribute.
         * The id for the label for attribute.
         * If the prop is not set a random value will be generated.
         */
        id: {
            type: String,
            required: false,
            default: () => ElementIdService.generateElementId(),
        },
        /**
         * The value for the input.
         * If the prop is not used or set to undefined
         * or null then the default value will be used.
         * @model
         */
        modelValue: {
            type: [String, null],
            required: false,
            default: undefined,
        },
        maxLength: {
            type: Number,
            default: 80,
        },
        extendedValidation: { type: Boolean, default: false },
    },
    emits: ["blur", "change", "update:modelValue"],
    data() {
        return {
            validityMode: "INITIAL" as string,
            secondPhone: "",
            defaultText: this.$t("fkui.phone-text-field.label", "Telefonnummer"),
        };
    },
    mounted() {
        this.configureValidators();
    },
    methods: {
        onChange(event: Event): void {
            /**
             * @event change
             * @type {string | number}
             */
            this.$emit("change", event);
        },
        onBlur(event: Event): void {
            /**
             * @event blur
             * @type {string | number}
             */
            this.$emit("blur", event);
        },
        onUpdate(event: Event): void {
            /**
             * V-model event.
             * @event update:modelValue
             * @type {string}
             */
            this.$emit("update:modelValue", event);
        },
        onValidity({ detail }: CustomEvent<ValidityEvent>): void {
            this.validityMode = detail.validityMode;
            const errorMessage = renderSlotText(this.$slots.default) ?? this.defaultText;
            const element = this.$el.querySelector(`#${detail.elementId}`);
            if (element) {
                dispatchComponentValidityEvent(element, {
                    ...detail,
                    errorMessage,
                    focusElementId: detail.elementId,
                });
            }
        },
        onPendingValidity(): void {
            this.validityMode = "INITIAL";
        },
        configureValidators(): void {
            const elements: HTMLInputElement[] = Array.from(this.$el.querySelectorAll("input"));
            const validatorPhoneConfig: ValidatorConfigs = {
                phoneNumber: {},
            };
            /*
             * Since this is an extended component the third argument "isBaseConfigs" for addValidatorsToElement() is set to true
             * in order to keep the base configuration set in this constructor when the application code adds its own validators, for example:
             * <f-phone-text-field v-validation.required>
             */
            ValidationService.addValidatorsToElement(elements[0], validatorPhoneConfig, true);

            if (this.extendedValidation) {
                this.configureExtendedValidation(elements);
            }
        },
        configureExtendedValidation(elements: HTMLInputElement[]): void {
            const validatorPhoneMatchesConfig: ValidatorConfigs = {
                required: {
                    enabled: elements[0].hasAttribute("required"),
                },
                phoneNumber: {},
                matches: {
                    id: elements[0].id,
                },
            };
            ValidationService.addValidatorsToElement(elements[1], validatorPhoneMatchesConfig, true);
        },
    },
});
</script>

<template>
    <div>
        <f-text-field
            :id="id"
            type="tel"
            :maxlength="maxLength"
            v-bind="$attrs"
            :model-value="modelValue"
            @change="onChange"
            @blur="onBlur"
            @update:model-value="onUpdate"
            @validity="onValidity"
            @pending-validity="onPendingValidity"
            ><slot name="default">{{ defaultText }}</slot></f-text-field
        >
        <f-text-field v-if="extendedValidation" v-model="secondPhone" type="tel" :maxlength="maxLength">
            <slot name="extendedLabel">{{
                $t("fkui.phone-text-field.label.repeat", "Upprepa telefonnumret")
            }}</slot></f-text-field
        >
    </div>
</template>
