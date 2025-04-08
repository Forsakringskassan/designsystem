<script lang="ts">
import { defineComponent } from "vue";
import { ElementIdService } from "@fkui/logic";
import { FIcon } from "../FIcon";
import { hasSlot } from "../../utils";
import { FExpand } from "../FExpand";

export default defineComponent({
    name: "FExpandableParagraph",
    components: {
        FIcon,
        FExpand,
    },
    inheritAttrs: false,
    props: {
        /**
         * Toggle expanded/collapsed state
         */
        expanded: {
            type: Boolean,
            required: false,
            default: false,
        },
        /**
         * Element to render for the button elmement
         * 'span', 'h1', 'h2', 'h3', 'h4', 'h5' and 'h6' is valid.
         */
        headerTag: {
            default: "span",
            required: false,
            validator(value: string): boolean {
                return ["h1", "h2", "h3", "h4", "h5", "h6", "span"].includes(value);
            },
        },
        /**
         * Visual header size for the button element.
         * 'h1', 'h2', 'h3', 'h4', 'h5' and 'h6' is valid.
         * If not used, the default styling will be h4
         */
        headerVisualTag: {
            type: String,
            default: "",
            required: false,
            validator(value: string): boolean {
                return ["", "h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
            },
        },
        /**
         * Toggle list style of component
         */
        list: {
            type: Boolean,
            default: false,
            required: false,
        },
        /**
         * The id for the content id attribute.
         * If the prop is not set the id will be generated.
         */
        id: {
            type: String,
            required: false,
            default: () => ElementIdService.generateElementId(),
        },
    },
    emits: ["toggle"],
    computed: {
        expandedClass(): string {
            return this.expanded ? "expandable-paragraph--open" : "expandable-paragraph--closed";
        },
        listClass(): string {
            return this.list ? "expandable-paragraph--list" : "";
        },
        relatedClass(): string {
            return this.hasRelatedSlot ? "expandable-paragraph--related-information" : "";
        },
        hasRelatedSlot(): boolean {
            return hasSlot(this, "related");
        },
        headerVisualClass(): string {
            return `heading--${this.headerVisualTag || "h4"}`;
        },
    },
    methods: {
        onClickMinimize(event: MouseEvent): void {
            /**
             * Emitted when heading is clicked.
             * @type {MouseEvent}
             */
            this.$emit("toggle", event);
        },
    },
});
</script>

<template>
    <div class="expandable-paragraph" :class="[expandedClass, listClass]">
        <div :class="relatedClass">
            <component :is="headerTag" class="expandable-paragraph__heading" :class="headerVisualClass">
                <button
                    type="button"
                    class="expandable-paragraph__button"
                    :aria-expanded="expanded ? 'true' : 'false'"
                    :aria-controls="id"
                    v-bind="$attrs"
                    @click="onClickMinimize"
                >
                    <span class="expandable-paragraph__icon">
                        <span class="icon-stack">
                            <f-icon name="dash"></f-icon>
                            <f-icon name="dash"></f-icon>
                        </span>
                    </span>
                    <!-- @slot Slot used for title content -->
                    <slot name="title"></slot>
                </button>
            </component>
            <div v-if="hasRelatedSlot" class="expandable-paragraph__related-information">
                <!-- @slot Slot used for related information besides the header element -->
                <slot name="related"></slot>
            </div>
        </div>
        <f-expand>
            <div v-show="expanded" :id="id" class="expandable-paragraph__container">
                <div class="expandable-paragraph__content">
                    <!-- @slot Slot used for content shown when expanded -->
                    <slot></slot>
                </div>
                <div v-if="!list" class="expandable-paragraph__separator"></div>
            </div>
        </f-expand>
    </div>
</template>
