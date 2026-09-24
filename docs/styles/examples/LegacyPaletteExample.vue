<script setup lang="ts">
import { ref } from "vue";
import { FCheckboxField, FMessageBox } from "@fkui/vue";

const palettes = [
    { id: "current", title: "Nuvarande palett", className: "" },
    { id: "legacy", title: "Legacy-palett", className: "docs-legacy-palette" },
];

const selected = ref<Record<string, boolean>>({ current: true, legacy: true });
</script>

<template>
    <div class="row">
        <div
            v-for="palette in palettes"
            :key="palette.id"
            class="col col--md-6 legacy-palette-example"
            :class="palette.className"
        >
            <h3>{{ palette.title }}</h3>
            <f-message-box type="info" layout="short">
                <p>Informationsmeddelande med semantiska färger.</p>
            </f-message-box>
            <div class="button-group">
                <button type="button" class="button button-group__item button--primary">
                    Primär
                </button>
                <button type="button" class="button button-group__item button--secondary">
                    Sekundär
                </button>
            </div>
            <f-checkbox-field v-model="selected[palette.id]" :value="true">
                Kryssruta
            </f-checkbox-field>
            <p><a href="#" class="anchor">Länk</a></p>
        </div>
    </div>
</template>

<style scoped>
.legacy-palette-example {
    padding: 1rem;
    background: var(--fkds-color-background-primary);
    color: var(--fkds-color-text-primary);
}
</style>
