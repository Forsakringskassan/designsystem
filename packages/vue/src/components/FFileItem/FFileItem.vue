<script lang="ts">
import { defineComponent } from "vue";
import { ElementIdService, isSet } from "@fkui/logic";
import FIcon from "../FIcon/FIcon.vue";
import { type IconName } from "./icon-name";

/* default icon used when no mimetype matches */
const DEFAULT_ICON: IconName = "file";

/* map mimetype -> icon */
const iconMap: Record<string, IconName> = {
    "image/*": "pic",
    "application/msword": "doc",
    "application/pdf": "pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "doc",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.template": "doc",
};

export default defineComponent({
    name: "FFileItem",
    components: { FIcon },
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
         * The file name.
         */
        fileName: {
            type: String,
            required: true,
        },
        /**
         * The mime type, can be changed if i.e server change the name.
         */
        mimeType: {
            type: String,
            required: false,
            default: undefined,
        },
        /**
         * The name of the file uploaded
         */
        originalMimeType: {
            type: String,
            required: false,
            default: undefined,
        },
        /**
         * If file name changed, this info will be displayed, placeholder %before% and %after% will be replaced with originalMimeType and mimeType
         */
        changedMimeTypeText: {
            type: String,
            required: false,
            default: undefined,
        },
    },
    computed: {
        isMimeTypeChanged(): boolean {
            return isSet(this.originalMimeType) && this.originalMimeType !== this.mimeType;
        },
        mimeTypeChangedText(): string {
            const originalMimeType = (this.originalMimeType || "").split("/").pop() || "";
            const currentMimeType = (this.mimeType || "").split("/").pop() || "";
            const localChangedMimeTypeText =
                this.changedMimeTypeText ??
                this.$t("fkui.file-item.changed-mime-type.text", "(%before% ändrad till %after%)");
            return localChangedMimeTypeText.replace("%before%", originalMimeType).replace("%after%", currentMimeType);
        },
        iconName(): IconName {
            const { mimeType } = this;

            /* use default icon when mimetype is empty/missing */
            if (!mimeType) {
                return DEFAULT_ICON;
            }

            /* search literal match */
            if (iconMap[mimeType]) {
                return iconMap[mimeType];
            }

            /* search with subtype wildcard, e.g. image/* */
            const p = mimeType.split("/", 1);
            const wildcard = [p[0], "*"].join("/");
            if (iconMap[wildcard]) {
                return iconMap[wildcard];
            }

            /* default to file */
            return DEFAULT_ICON;
        },
    },
});
</script>

<template>
    <div class="file-item">
        <div class="file-item__row">
            <a :id="id" class="file-item__file-open" v-bind="$attrs">
                <div class="icon-stack button__icon icon-stack--new-window">
                    <f-icon name="new-window"></f-icon>
                    <f-icon :name="iconName"></f-icon>
                </div>
                <span class="file-item__file-name">{{ fileName }}</span>
                <span class="sr-only">&nbsp;{{ $t("fkui.file-item.file-open", "öppnas i nytt fönster") }}</span>
            </a>

            <!--
            @slot Slot for any content that should be placed beside the file icon and file name. If several elements is placed, they will be spaced evenly, for more information see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content.
            -->
            <slot name="row"></slot>
        </div>
        <!-- @slot Slot for any type of content. Elements placed in this slot will be position after the file icon and file name. -->
        <slot></slot>
        <div v-if="isMimeTypeChanged" class="file-item__change-info">{{ mimeTypeChangedText }}</div>
        <hr class="file-item__separator" />
    </div>
</template>
