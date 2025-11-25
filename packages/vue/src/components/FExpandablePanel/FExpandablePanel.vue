<script setup lang="ts">
import { computed } from "vue";
import { ElementIdService } from "@fkui/logic";
import { useSlotUtils } from "../../composables";
import { useTranslate } from "../../plugins";
import { FExpand } from "../FExpand";
import { FIcon } from "../FIcon";

const {
    expanded,
    headerTag = "h2",
    id = ElementIdService.generateElementId(),
    notifications = 0,
    screenReaderNotificationTemplate = "Du har %VALUE% notifieringar.",
} = defineProps<{
    /**
     * Toggle expanded/collapsed state
     */
    expanded?: boolean;
    /**
     * Element to render for the header element inside the expandable panel.
     * 'h1', 'h2', 'h3', 'h4', 'h5' and 'h6' is valid.
     */
    headerTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    /**
     * The id for the content id attribute.
     * If the prop is not set the id will be generated.
     */
    id?: string;
    /**
     * Number of notifications present in panel.
     *
     * If set to zero (default) no notification badge will be displayed.
     */
    notifications?: number;
    /**
     * Text template for the screen reader notification text.
     * Use `%VALUE%` as a placeholder for the number of notifications.
     */
    screenReaderNotificationTemplate?: string;
}>();

const emit = defineEmits<{
    /**
     * Emitted when panel heading is clicked.
     */
    toggle: [MouseEvent];
}>();

defineOptions({
    inheritAttrs: false,
});

const $t = useTranslate();
const { hasSlot } = useSlotUtils();

const expandedClass = computed(() => (expanded ? "expandable-panel--expanded" : "expandable-panel--collapsed"));
const hasOutsideSlot = computed(() => hasSlot("outside"));
const haveNotifications = computed(() => notifications > 0);

const screenReaderNotificationText = computed(() =>
    screenReaderNotificationTemplate.replace("%VALUE%", notifications.toString()),
);

const notificationTitle = computed(() => {
    /** Title text for notification */
    return $t("fkui.expandable-panel.notification.title", "{{ count }} notifiering{{ suffix }}", {
        count: notifications,
        suffix: notifications > 1 ? "ar" : "",
    });
});

function onClickHeadingButton(event: MouseEvent): void {
    emit("toggle", event);
}
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
