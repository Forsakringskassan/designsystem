<script setup lang="ts">
import { FButton, FCard } from "@fkui/vue";
</script>

<template>
    <div class="sandbox-root">
        <div>
            <h2>FButton</h2>

            <div>
                <f-button variant="primary" size="large">Large</f-button>
                <f-button variant="secondary" size="large">Large</f-button>
                <f-button variant="tertiary" size="large">Large</f-button>
            </div>

            <div>
                <f-button variant="primary" size="medium">Medium</f-button>
                <f-button variant="secondary" size="medium">Medium</f-button>
                <f-button variant="tertiary" size="medium">Medium</f-button>
            </div>

            <div>
                <f-button variant="primary" size="small">Small</f-button>
                <f-button variant="secondary" size="small">Small</f-button>
                <f-button variant="tertiary" size="small">Small</f-button>
            </div>

            <h2>FButton with icon</h2>

            <div>
                <f-button variant="primary" size="large" icon-left="pen">Large</f-button>
                <f-button variant="secondary" size="large" icon-left="pen">Large</f-button>
                <f-button variant="tertiary" size="large" icon-left="pen">Large</f-button>
            </div>

            <div>
                <f-button variant="primary" size="medium" icon-left="pen">Medium</f-button>
                <f-button variant="secondary" size="medium" icon-left="pen">Medium</f-button>
                <f-button variant="tertiary" size="medium" icon-left="pen">Medium</f-button>
            </div>

            <div>
                <f-button variant="primary" size="small" icon-left="pen">Small</f-button>
                <f-button variant="secondary" size="small" icon-left="pen">Small</f-button>
                <f-button variant="tertiary" size="small" icon-left="pen">Small</f-button>
            </div>

            <h2>FButton in Button Group</h2>

            <div class="button-group">
                <f-button variant="primary" size="large" class="button-group__item">Large</f-button>
                <f-button variant="secondary" size="large" class="button-group__item">Large</f-button>
                <f-button variant="tertiary" size="large" class="button-group__item">Large</f-button>
            </div>

            <div>
                <f-button variant="primary" size="medium" class="button-group__item">Medium</f-button>
                <f-button variant="secondary" size="medium" class="button-group__item">Medium</f-button>
                <f-button variant="tertiary" size="medium" class="button-group__item">Medium</f-button>
            </div>

            <div>
                <f-button variant="primary" size="small" class="button-group__item">Small</f-button>
                <f-button variant="secondary" size="small" class="button-group__item">Small</f-button>
                <f-button variant="tertiary" size="small" class="button-group__item">Small</f-button>
            </div>

            <h2>CSS Button without size</h2>

            <button type="button" class="button button--primary">Button</button>
            <button type="button" class="button button--secondary">Button</button>
            <button type="button" class="button button--tertiary">Button</button>

            <h2>FCard</h2>

            <f-card>
                <template #header="{ headingSlotClass }">
                    <h3 :class="headingSlotClass">Arbete</h3>
                </template>
                <template #default>
                    <p>Large</p>
                </template>
                <template #footer>
                    <div class="button-group">
                        <f-button variant="tertiary" size="large" align-text class="button-group__item" icon-left="pen">
                            Ändra
                        </f-button>
                        <f-button
                            variant="tertiary"
                            size="large"
                            align-text
                            class="button-group__item"
                            icon-left="trashcan"
                        >
                            Ta bort
                        </f-button>
                    </div>
                </template>
            </f-card>
            <f-card>
                <template #header="{ headingSlotClass }">
                    <h3 :class="headingSlotClass">Arbete</h3>
                </template>
                <template #default>
                    <p>Medium</p>
                </template>
                <template #footer>
                    <div class="button-group">
                        <f-button
                            variant="tertiary"
                            size="medium"
                            align-text
                            class="button-group__item"
                            icon-left="pen"
                        >
                            Ändra
                        </f-button>
                        <f-button
                            variant="tertiary"
                            size="medium"
                            align-text
                            class="button-group__item"
                            icon-left="trashcan"
                        >
                            Ta bort
                        </f-button>
                    </div>
                </template>
            </f-card>

            <f-card>
                <template #header="{ headingSlotClass }">
                    <h3 :class="headingSlotClass">Arbete</h3>
                </template>
                <template #default>
                    <p>Small</p>
                </template>
                <template #footer>
                    <div class="button-group">
                        <f-button variant="tertiary" size="small" align-text class="button-group__item" icon-left="pen">
                            Ändra
                        </f-button>
                        <f-button
                            variant="tertiary"
                            size="small"
                            align-text
                            class="button-group__item"
                            icon-left="trashcan"
                        >
                            Ta bort
                        </f-button>
                    </div>
                </template>
            </f-card>
        </div>
    </div>
</template>
<style>
.sandbox-root {
    width: min(100% - 2rem, 80ch);
    margin: auto;
}

h1 {
    margin-top: 2rem;
}

hr {
    margin-bottom: 2rem;
}
</style>
