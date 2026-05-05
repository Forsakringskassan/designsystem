<script setup lang="ts">
import { FButton } from "@fkui/vue";

async function asyncOperation(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 5000));
}
</script>

<template>
    <div class="root-wrapper">
        <span>Alla knappar använder FButton.</span>
        <div>
            <h2>Primary</h2>
            <div>
                <f-button variant="primary" size="large">Large</f-button>
                <f-button variant="primary" size="medium">Medium</f-button>
                <f-button variant="primary" size="small">Small</f-button>
            </div>
            <div>
                <f-button variant="primary" size="large" icon-left="pen">Large</f-button>
                <f-button variant="primary" size="medium" icon-left="pen">Medium</f-button>
                <f-button variant="primary" size="small" icon-left="pen">Small</f-button>
            </div>
            <div>
                <f-button variant="primary" size="large" icon-right="pen">Large</f-button>
                <f-button variant="primary" size="medium" icon-right="pen">Medium</f-button>
                <f-button variant="primary" size="small" icon-right="pen">Small</f-button>
            </div>
            <div>
                <f-button variant="primary" size="medium" @click="asyncOperation">Medium Async</f-button>
                <f-button variant="primary" size="medium" icon-left="pen" @click="asyncOperation">
                    Medium Async
                </f-button>
                <f-button variant="primary" size="medium" icon-right="pen" @click="asyncOperation">
                    Medium Async
                </f-button>
            </div>
            <div>
                <f-button variant="primary" size="large" disabled>Large Disabled</f-button>
                <f-button variant="primary" size="medium" disabled>Medium Disabled</f-button>
                <f-button variant="primary" size="small" disabled>Small Disabled</f-button>
            </div>
            <div>
                <f-button variant="primary" size="medium" mobile-full-width>Medium MobileFullWidth</f-button>
            </div>
        </div>
        <div>
            <h2>Secondary</h2>
            <div>
                <f-button variant="secondary" size="large">Large</f-button>
                <f-button variant="secondary" size="medium">Medium</f-button>
                <f-button variant="secondary" size="small">Small</f-button>
            </div>
            <div>
                <f-button variant="secondary" size="large" icon-left="pen">Large</f-button>
                <f-button variant="secondary" size="medium" icon-left="pen">Medium</f-button>
                <f-button variant="secondary" size="small" icon-left="pen">Small</f-button>
            </div>
            <div>
                <f-button variant="secondary" size="large" icon-right="pen">Large</f-button>
                <f-button variant="secondary" size="medium" icon-right="pen">Medium</f-button>
                <f-button variant="secondary" size="small" icon-right="pen">Small</f-button>
            </div>
            <div>
                <f-button variant="secondary" size="medium" @click="asyncOperation">Medium Async</f-button>
                <f-button variant="secondary" size="medium" icon-left="pen" @click="asyncOperation">
                    Medium Async
                </f-button>
                <f-button variant="secondary" size="medium" icon-right="pen" @click="asyncOperation">
                    Medium Async
                </f-button>
            </div>
            <div>
                <f-button variant="secondary" size="large" disabled>Large Disabled</f-button>
                <f-button variant="secondary" size="medium" disabled>Medium Disabled</f-button>
                <f-button variant="secondary" size="small" disabled>Small Disabled</f-button>
            </div>
            <div>
                <f-button variant="secondary" size="medium" mobile-full-width>Medium MobileFullWidth</f-button>
            </div>
        </div>
        <div>
            <h2>Tertiary Standard</h2>
            <div>
                <f-button variant="tertiary" size="large" tertiary-style="standard">Large</f-button>
                <f-button variant="tertiary" size="medium" tertiary-style="standard">Medium</f-button>
                <f-button variant="tertiary" size="small" tertiary-style="standard">Small</f-button>
            </div>
            <div>
                <f-button variant="tertiary" size="large" tertiary-style="standard" icon-left="pen">Large</f-button>
                <f-button variant="tertiary" size="medium" tertiary-style="standard" icon-left="pen">Medium</f-button>
                <f-button variant="tertiary" size="small" tertiary-style="standard" icon-left="pen">Small</f-button>
            </div>
            <div>
                <f-button variant="tertiary" size="large" tertiary-style="standard" icon-right="pen">Large</f-button>
                <f-button variant="tertiary" size="medium" tertiary-style="standard" icon-right="pen">Medium</f-button>
                <f-button variant="tertiary" size="small" tertiary-style="standard" icon-right="pen">Small</f-button>
            </div>
            <div>
                <f-button variant="tertiary" size="medium" tertiary-style="standard" @click="asyncOperation"
                    >Medium Async</f-button
                >
                <f-button
                    variant="tertiary"
                    size="medium"
                    tertiary-style="standard"
                    icon-left="pen"
                    @click="asyncOperation"
                >
                    Medium Async
                </f-button>
                <f-button
                    variant="tertiary"
                    size="medium"
                    tertiary-style="standard"
                    icon-right="pen"
                    @click="asyncOperation"
                >
                    Medium Async
                </f-button>
            </div>
            <div>
                <f-button variant="tertiary" size="large" tertiary-style="standard" disabled>Large Disabled</f-button>
                <f-button variant="tertiary" size="medium" tertiary-style="standard" disabled>Medium Disabled</f-button>
                <f-button variant="tertiary" size="small" tertiary-style="standard" disabled>Small Disabled</f-button>
            </div>
            <div>
                <f-button variant="tertiary" size="medium" tertiary-style="standard" mobile-full-width
                    >Medium MobileFullWidth</f-button
                >
            </div>

            <h2>Tertiary Black</h2>
            <div>
                <f-button variant="tertiary" size="large" tertiary-style="black">Large</f-button>
                <f-button variant="tertiary" size="medium" tertiary-style="black">Medium</f-button>
                <f-button variant="tertiary" size="small" tertiary-style="black">Small</f-button>
            </div>
            <div>
                <f-button variant="tertiary" size="large" tertiary-style="black" icon-left="pen">Large</f-button>
                <f-button variant="tertiary" size="medium" tertiary-style="black" icon-left="pen">Medium</f-button>
                <f-button variant="tertiary" size="small" tertiary-style="black" icon-left="pen">Small</f-button>
            </div>
            <div>
                <f-button variant="tertiary" size="large" tertiary-style="black" icon-right="pen">Large</f-button>
                <f-button variant="tertiary" size="medium" tertiary-style="black" icon-right="pen">Medium</f-button>
                <f-button variant="tertiary" size="small" tertiary-style="black" icon-right="pen">Small</f-button>
            </div>
            <div>
                <f-button variant="tertiary" size="medium" tertiary-style="black" @click="asyncOperation"
                    >Medium Async</f-button
                >
                <f-button
                    variant="tertiary"
                    size="medium"
                    tertiary-style="black"
                    icon-left="pen"
                    @click="asyncOperation"
                >
                    Medium Async
                </f-button>
                <f-button
                    variant="tertiary"
                    size="medium"
                    tertiary-style="black"
                    icon-right="pen"
                    @click="asyncOperation"
                >
                    Medium Async
                </f-button>
            </div>
            <div>
                <f-button variant="tertiary" size="large" tertiary-style="black" disabled>Large Disabled</f-button>
                <f-button variant="tertiary" size="medium" tertiary-style="black" disabled>Medium Disabled</f-button>
                <f-button variant="tertiary" size="small" tertiary-style="black" disabled>Small Disabled</f-button>
            </div>
            <div>
                <f-button variant="tertiary" size="medium" tertiary-style="black" mobile-full-width
                    >Medium MobileFullWidth</f-button
                >
            </div>

            <h2>Tertiary Inverted</h2>
            <div class="inverted-wrapper">
                <div>
                    <f-button variant="tertiary" size="large" tertiary-style="inverted">Large</f-button>
                    <f-button variant="tertiary" size="medium" tertiary-style="inverted">Medium</f-button>
                    <f-button variant="tertiary" size="small" tertiary-style="inverted">Small</f-button>
                </div>
                <div>
                    <f-button variant="tertiary" size="large" tertiary-style="inverted" icon-left="pen">Large</f-button>
                    <f-button variant="tertiary" size="medium" tertiary-style="inverted" icon-left="pen"
                        >Medium</f-button
                    >
                    <f-button variant="tertiary" size="small" tertiary-style="inverted" icon-left="pen">Small</f-button>
                </div>
                <div>
                    <f-button variant="tertiary" size="large" tertiary-style="inverted" icon-right="pen"
                        >Large</f-button
                    >
                    <f-button variant="tertiary" size="medium" tertiary-style="inverted" icon-right="pen"
                        >Medium</f-button
                    >
                    <f-button variant="tertiary" size="small" tertiary-style="inverted" icon-right="pen"
                        >Small</f-button
                    >
                </div>
                <div>
                    <f-button variant="tertiary" size="medium" tertiary-style="inverted" @click="asyncOperation"
                        >Medium Async</f-button
                    >
                    <f-button
                        variant="tertiary"
                        size="medium"
                        tertiary-style="inverted"
                        icon-left="pen"
                        @click="asyncOperation"
                    >
                        Medium Async
                    </f-button>
                    <f-button
                        variant="tertiary"
                        size="medium"
                        tertiary-style="inverted"
                        icon-right="pen"
                        @click="asyncOperation"
                    >
                        Medium Async
                    </f-button>
                </div>
                <div>
                    <f-button variant="tertiary" size="large" tertiary-style="inverted" disabled
                        >Large Disabled</f-button
                    >
                    <f-button variant="tertiary" size="medium" tertiary-style="inverted" disabled
                        >Medium Disabled</f-button
                    >
                    <f-button variant="tertiary" size="small" tertiary-style="inverted" disabled
                        >Small Disabled</f-button
                    >
                </div>
                <div>
                    <f-button variant="tertiary" size="medium" tertiary-style="inverted" mobile-full-width
                        >Medium MobileFullWidth</f-button
                    >
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.root-wrapper {
    margin: 1rem;
}

.inverted-wrapper {
    background-color: #333;
    padding: 1rem;
}
</style>
