<script lang="ts">
import { defineComponent } from "vue";
import { ElementIdService } from "@fkui/logic";
import { TranslationMixin } from "../../plugins";
import { hasSlot } from "../../utils";
import { FExpand } from "../FExpand";
import { FIcon } from "../FIcon";

export default defineComponent({
    name: "FExpandablePanel",
    components: {
        FIcon,
        FExpand,
    },
    mixins: [TranslationMixin],
    inheritAttrs: false,
    props: {
        /**
         * Toggle expanded/collapsed state
         */
        expanded: {
            type: Boolean,
            required: false,
        },
        /**
         * Element to render for the header element inside the expandable panel.
         * 'h1', 'h2', 'h3', 'h4', 'h5' and 'h6' is valid.
         */
        headerTag: {
            default: "h2",
            required: false,
            validator(value: string): boolean {
                return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
            },
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

        /**
         * Number of notifications present in panel.
         *
         * If set to zero (default) no notification badge will be displayed.
         */
        notifications: {
            type: Number,
            required: false,
            default: 0,
        },
        /**
         * Text template for the screen reader notification text.
         * Use `%VALUE%` as a placeholder for the number of notifications.
         */
        screenReaderNotificationTemplate: {
            type: String,
            required: false,
            default: "Du har %VALUE% notifieringar.",
        },
    },
    emits: [
        /**
         * Emitted when panel heading is clicked.
         * @type {MouseEvent}
         */
        "toggle",
    ],
    computed: {
        expandedClass(): string {
            return this.expanded ? "expandable-panel--expanded" : "expandable-panel--collapsed";
        },
        hasOutsideSlot(): boolean {
            return hasSlot(this, "outside");
        },
        haveNotifications(): boolean {
            return this.notifications > 0;
        },
        screenReaderNotificationText(): string {
            return this.screenReaderNotificationTemplate.replace("%VALUE%", this.notifications.toString());
        },
        notificationTitle(): string {
            /** Title text for notification */
            return this.$t("fkui.expandable-panel.notification.title", "{{ count }} notifiering{{ suffix }}", {
                count: this.notifications,
                suffix: this.notifications > 1 ? "ar" : "",
            });
        },
    },
    methods: {
        onClickHeadingButton(event: MouseEvent): void {
            this.$emit("toggle", event);
        },
    },
});
</script>

<template>
    <div class="expandable-panel" :class="expandedClass">
        <component :is="headerTag" class="expandable-panel__heading">
            <button
                type="button"
                :aria-expanded="expanded ? 'true' : 'false'"
                :aria-controls="id"
                v-bind="$attrs"
                @click="onClickHeadingButton"
            >
                <span class="expandable-panel__title">
                    <!-- @slot Slot used for title content -->
                    <span class="expandable-panel__title__text">
                        <slot name="title"></slot>
                    </span>

                    <span v-if="haveNotifications" class="expandable-panel__notification" :title="notificationTitle">
                        <span class="sr-only">{{ screenReaderNotificationText }}</span>
                        <f-icon name="bell"></f-icon>
                    </span>
                </span>

                <span class="expandable-panel__icon">
                    <f-icon name="arrow-down"></f-icon>
                </span>
            </button>
        </component>

        <f-expand>
            <div v-show="expanded" :id class="expandable-panel__content">
                <div class="expandable-panel__body">
                    <!-- @slot Slot used for content shown when panel is expanded -->
                    <slot></slot>
                </div>
                <div v-if="hasOutsideSlot" class="expandable-panel__outside">
                    <!-- @slot Slot used for optional content rendered below panel when expanded -->
                    <slot name="outside"></slot>
                </div>
            </div>
        </f-expand>
    </div>
</template>
