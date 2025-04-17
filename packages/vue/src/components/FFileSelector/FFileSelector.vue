<script lang="ts">
import { defineComponent } from "vue";
import { ElementIdService } from "@fkui/logic";
import FIcon from "../FIcon/FIcon.vue";

export default defineComponent({
    name: "FFileSelector",
    components: {
        FIcon,
    },
    inheritAttrs: false,
    model: {
        prop: "files",
        event: "change",
    },
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
         * Disables the file selector.
         */
        disabled: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    emits: ["change"],
    computed: {
        attrs(): Record<string, unknown> {
            return {
                ...this.$attrs,
                id: this.id,
                onChange: (event: Event) => {
                    if (event.target instanceof HTMLInputElement) {
                        /**
                         * V-model event.
                         *
                         * @event input
                         * @type {FileList}
                         */
                        this.$emit("change", event.target.files);
                    }
                },
            };
        },

        labelClass(): string {
            return this.disabled ? "disabled" : "enabled";
        },
        labelId(): string {
            return `${this.id}_label`;
        },
        ariaDisabled(): string | undefined {
            return this.disabled ? "true" : undefined;
        },
    },
    methods: {
        onClick(event: Event) {
            if (this.disabled) {
                event.preventDefault();
                return;
            }

            const input = this.$refs["file-selector"] as HTMLInputElement;
            input.value = "";
        },
    },
});
</script>

<template>
    <div class="file-selector">
        <input
            :id="id"
            ref="file-selector"
            type="file"
            :aria-labelledby="labelId"
            :aria-disabled="ariaDisabled ? 'true' : undefined"
            v-bind="attrs"
            @click="onClick"
        />
        <label
            :id="labelId"
            role="button"
            :class="labelClass"
            :for="id"
            class="button button--tertiary button--medium"
            aria-hidden="true"
        >
            <f-icon class="button__icon" name="paper-clip"></f-icon>
            <slot></slot>
        </label>
    </div>
</template>
