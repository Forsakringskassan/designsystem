<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import { FButton, ICloseButton, IPopup, findHTMLElementFromVueRef } from "@fkui/vue";

const isOpen = ref(false);
const popupAnchor = useTemplateRef("popupAnchor");
</script>

<template>
    <div>
        <f-button
            ref="popupAnchor"
            variant="secondary"
            size="small"
            :aria-expanded="isOpen"
            @click="isOpen = true"
        >
            Öppna popup
        </f-button>

        <i-popup
            :is-open
            :anchor="findHTMLElementFromVueRef(popupAnchor)"
            focus
            keyboard-trap
            @close="isOpen = false"
        >
            <div class="popup-content">
                <p>Innehåll i popupen.</p>
                <div class="popup-actions">
                    <i-close-button aria-label="Stäng popupen" @click="isOpen = false"
                        >Stäng</i-close-button
                    >
                </div>
            </div>
        </i-popup>
    </div>
</template>

<style scoped>
.popup-content {
    background-color: var(--fkds-color-background-primary);
    color: var(--fkds-color-text-primary);
    padding-block-start: 1rem;
}

.popup-content > p {
    padding-inline: 1rem;
}

.popup-actions {
    display: flex;
    justify-content: flex-end;
    white-space: nowrap;
}
</style>
