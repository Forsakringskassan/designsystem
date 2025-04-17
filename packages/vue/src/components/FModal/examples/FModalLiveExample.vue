<script lang="ts">
import { defineComponent } from "vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { FCheckboxField, FModal, FSelectField } from "@fkui/vue";

export default defineComponent({
    name: "FModalLiveExample",
    components: {
        LiveExample,
        FSelectField,
        FCheckboxField,
    },
    data() {
        return {
            modalType: "",
            modalSize: "small",
            modalFullscreen: false,
        };
    },
    computed: {
        components(): object {
            return { FModal };
        },
        livedata(): object {
            return {
                isOpen: false,
            };
        },
        type(): string {
            return this.modalType ? `type="${this.modalType}"` : "";
        },
        size(): string {
            return `size="${this.modalSize}"`;
        },
        fullscreen(): string {
            return this.modalFullscreen ? "fullscreen" : "";
        },
        button(): string {
            return /* HTML */ `
                <button type="button" class="button button--secondary" @click="isOpen = !isOpen">
                    Öppna modal
                </button>
            `;
        },
        footer(): string {
            return /* HTML */ `
                <template #footer>
                    <div class="button-group">
                        <button
                            type="button"
                            class="button button--primary button-group__item button--large"
                            @click="isOpen = false"
                        >
                            Stäng
                        </button>
                    </div>
                </template>
            `;
        },
        template(): string {
            return /* HTML */ `
                ${this.button}
                <!-- Example using modal with deprecated template method. This is not recommended. -->
                <f-modal
                    :is-open="isOpen"
                    ${this.type}
                    ${this.size}
                    ${this.fullscreen}
                    @close="isOpen = false"
                >
                    <template #header> Rubrik </template>
                    <template #content> Innehåll </template>
                    ${this.footer}
                </f-modal>
            `;
        },
    },
});
</script>

<template>
    <live-example :components="components" :template="template" :livedata="livedata">
        <f-select-field v-model="modalType">
            <template #label> Typ </template>
            <option value="">Standard</option>
            <option value="information">Informationsmodal</option>
            <option value="warning">Varningsmodal</option>
            <option value="error">Felmodal</option>
        </f-select-field>
        <f-select-field v-model="modalSize">
            <template #label> Storlek </template>
            <option value="small">Liten</option>
            <option value="medium">Medium</option>
            <option value="large">Stor</option>
            <option value="fullwidth">Fullbredd</option>
        </f-select-field>
        <f-checkbox-field v-model="modalFullscreen" :value="true">
            Fullskärm i mobilläge
        </f-checkbox-field>
    </live-example>
</template>
