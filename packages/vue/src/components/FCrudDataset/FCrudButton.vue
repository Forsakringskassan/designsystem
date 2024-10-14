<template>
    <button type="button" class="button button--small button--tertiary" @click="executeAction">
        <f-icon v-if="icon" class="button__icon" :name="iconName"></f-icon>
        <span v-if="!label" class="sr-only">
            <slot> {{ buttonText }} </slot>
        </span>
        <slot v-if="label"> {{ buttonText }} </slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FIcon } from "../FIcon";
import { TranslationMixin } from "../../plugins";
import { FCrudDatasetInjected, FCrudDatasetInterface } from "./FCrudDatasetInterface";

export default defineComponent({
    name: "FCrudButton",
    components: { FIcon },
    mixins: [TranslationMixin],
    props: {
        action: {
            type: String,
            required: true,
            validator(value: string) {
                return ["delete", "modify"].includes(value);
            },
        },
        icon: {
            type: Boolean,
            default: false,
        },
        item: {
            type: Object,
            required: true,
        },
        label: {
            type: Boolean,
            default: false,
        },
    },
    setup(): FCrudDatasetInterface {
        return FCrudDatasetInjected();
    },
    computed: {
        iconName(): string {
            if (this.action === "delete") {
                return "trashcan";
            } else {
                return "pen";
            }
        },
        buttonText(): string {
            if (this.action === "delete") {
                return this.$t("fkui.crud-button.delete", "Ta bort");
            } else {
                return this.$t("fkui.crud-button.modify", "Ändra");
            }
        },
    },
    methods: {
        executeAction(): void {
            if (this.action === "delete") {
                this.delete(this.item);
            } else {
                this.modify(this.item);
            }
        },
    },
});
</script>
