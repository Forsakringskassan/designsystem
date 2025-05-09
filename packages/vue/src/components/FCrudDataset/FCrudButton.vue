<script setup lang="ts">
import { computed } from "vue";
import { FIcon } from "../FIcon";
import { useTranslate } from "../../plugins";
import { FCrudDatasetInjected } from "./FCrudDatasetInterface";

const props = defineProps({
    /**
     * The action to be performed by the button.
     * Must be one of the following values: "delete" or "modify".
     */
    action: {
        type: String,
        required: true,
        validator(value: string) {
            return ["delete", "modify"].includes(value);
        },
    },
    /**
     * Determines if an icon should be displayed on the button.
     */
    icon: {
        type: Boolean,
        default: false,
    },
    /**
     * The item that the action will be performed on.
     */
    item: {
        type: Object,
        required: true,
    },
    /**
     * Determines if the button should display a label.
     * If false, the button will use a visually hidden text for accessibility.
     */
    label: {
        type: Boolean,
        default: false,
    },
});

const $t = useTranslate();

const crud = FCrudDatasetInjected();

const iconName = computed((): string | undefined => {
    if (!props.icon) {
        return undefined;
    }
    if (props.action === "delete") {
        return "trashcan";
    } else {
        return "pen";
    }
});

const buttonText = computed((): string => {
    if (props.action === "delete") {
        /** Button label when action is "delete" */
        return $t("fkui.crud-button.delete", "Ta bort");
    } else {
        /** Button label when action is "modify" */
        return $t("fkui.crud-button.modify", "Ändra");
    }
});

function executeAction(): void {
    if (props.action === "delete") {
        crud.delete(props.item);
    } else {
        crud.modify(props.item);
    }
}
</script>

<template>
    <button type="button" class="button button--small button--tertiary" @click="executeAction">
        <f-icon v-if="iconName" class="button__icon" :name="iconName"></f-icon>
        <span v-if="!props.label" class="sr-only">
            <!--
                 @slot Slot used to provide custom content for the button text.
            -->
            <slot> {{ buttonText }} </slot>
        </span>
        <slot v-if="props.label"> {{ buttonText }} </slot>
    </button>
</template>
