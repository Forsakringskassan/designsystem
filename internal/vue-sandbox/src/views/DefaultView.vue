<script setup lang="ts">
import { FButton } from "@fkui/vue";

async function asyncOperation(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 5000));
}
</script>

<template>
    <div style="margin: 1rem">
        <div>
            <span>Alla knappar använder FButton och använder props för att ändra typ.</span>
            <h2>Default</h2>
            <f-button>Knapp</f-button>
        </div>
        <div>
            <h2>Primary</h2>
            <div>
                <f-button class="button-group__item" variant="primary" size="large">Large</f-button>
                <f-button class="button-group__item" variant="primary" size="medium">Medium</f-button>
                <f-button class="button-group__item" variant="primary" size="small">Small</f-button>
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
                <f-button variant="primary" size="medium" disabled>Medium Disabled</f-button>
                <f-button variant="primary" size="medium" icon-left="pen" disabled>Medium Disabled</f-button>
                <f-button variant="primary" size="medium" icon-right="pen" disabled>Medium Disabled</f-button>
            </div>
            <div>
                <f-button variant="primary" size="medium" mobile-full-width>Medium MobileFullWidth</f-button>
            </div>
        </div>
        <div>
            <h2>Secondary</h2>
            <f-button variant="secondary" size="large">Large</f-button>
            <f-button variant="secondary" size="medium">Medium</f-button>
            <f-button variant="secondary" size="small">Small</f-button>
            <br />
            <f-button variant="secondary" size="large" icon-left="pen">Large</f-button>
            <f-button variant="secondary" size="medium" icon-left="pen">Medium</f-button>
            <f-button variant="secondary" size="small" icon-left="pen">Small</f-button>
            <br />
            <f-button variant="secondary" size="large" icon-right="pen">Large</f-button>
            <f-button variant="secondary" size="medium" icon-right="pen">Medium</f-button>
            <f-button variant="secondary" size="small" icon-right="pen">Small</f-button>
            <br />
            <f-button variant="secondary" size="medium" @click="asyncOperation">Async Medium</f-button>
            <f-button variant="secondary" size="medium" disabled>Disabled Medium</f-button>

            <div>
                <f-button variant="secondary" size="medium" mobile-full-width>Medium MobileFullWidth</f-button>
            </div>
        </div>
        <div>
            <h2>Tertiary Default</h2>
            <f-button variant="tertiary" size="large">Large</f-button>
            <f-button variant="tertiary" size="medium">Medium</f-button>
            <f-button variant="tertiary" size="small">Small</f-button>
            <br />
            <f-button variant="tertiary" size="large" icon-left="pen">Large</f-button>
            <f-button variant="tertiary" size="medium" icon-left="pen">Medium</f-button>
            <f-button variant="tertiary" size="small" icon-left="pen">Small</f-button>
            <br />
            <f-button variant="tertiary" size="large" icon-right="pen">Large</f-button>
            <f-button variant="tertiary" size="medium" icon-right="pen">Medium</f-button>
            <f-button variant="tertiary" size="small" icon-right="pen">Small</f-button>
            <br />
            <f-button variant="tertiary" size="medium" @click="asyncOperation">Async Medium</f-button>
            <f-button variant="tertiary" size="medium" disabled>Disabled Medium</f-button>
            <div>
                <f-button variant="tertiary" size="medium" mobile-full-width>Medium MobileFullWidth</f-button>
            </div>

            <h2>Tertiary Standard</h2>
            <f-button variant="tertiary" size="large" tertiary-style="standard">Large Standard</f-button>
            <f-button variant="tertiary" size="medium" tertiary-style="standard">Medium Standard</f-button>
            <f-button variant="tertiary" size="small" tertiary-style="standard">Small Standard</f-button>
            <br />
            <f-button variant="tertiary" size="large" tertiary-style="standard" icon-left="pen">
                Large Standard
            </f-button>
            <f-button variant="tertiary" size="medium" tertiary-style="standard" icon-left="pen">
                Medium Standard
            </f-button>
            <f-button variant="tertiary" size="small" tertiary-style="standard" icon-left="pen">
                Small Standard
            </f-button>
            <br />
            <f-button variant="tertiary" size="large" tertiary-style="standard" icon-right="pen">
                Large Standard
            </f-button>
            <f-button variant="tertiary" size="medium" tertiary-style="standard" icon-right="pen">
                Medium Standard
            </f-button>
            <f-button variant="tertiary" size="small" tertiary-style="standard" icon-right="pen">
                Small Standard
            </f-button>
            <br />
            <f-button variant="tertiary" size="medium" tertiary-style="standard" @click="asyncOperation">
                Medium Standard Async
            </f-button>
            <f-button variant="tertiary" size="medium" tertiary-style="standard" disabled>
                Medium Standard Disabled
            </f-button>
            <div>
                <f-button variant="tertiary" size="medium" tertiary-style="standard" mobile-full-width>
                    Medium Standard MobileFullWidth
                </f-button>
            </div>

            <h2>Tertiary Black</h2>
            <f-button variant="tertiary" size="large" tertiary-style="black">Large Black</f-button>
            <f-button variant="tertiary" size="medium" tertiary-style="black">Medium Black</f-button>
            <f-button variant="tertiary" size="small" tertiary-style="black">Small Black</f-button>
            <br />
            <f-button variant="tertiary" size="large" tertiary-style="black" icon-left="pen">Large Black</f-button>
            <f-button variant="tertiary" size="medium" tertiary-style="black" icon-left="pen">Medium Black</f-button>
            <f-button variant="tertiary" size="small" tertiary-style="black" icon-left="pen">Small Black</f-button>
            <br />
            <f-button variant="tertiary" size="large" tertiary-style="black" icon-right="pen">Large Black</f-button>
            <f-button variant="tertiary" size="medium" tertiary-style="black" icon-right="pen">Medium Black</f-button>
            <f-button variant="tertiary" size="small" tertiary-style="black" icon-right="pen">Small Black</f-button>
            <br />
            <f-button variant="tertiary" size="medium" tertiary-style="black" @click="asyncOperation">
                Medium Black Async
            </f-button>
            <f-button variant="tertiary" size="medium" tertiary-style="black" disabled>
                Medium Black Disabled
            </f-button>
            <div>
                <f-button variant="tertiary" size="medium" tertiary-style="black" mobile-full-width>
                    Medium Black MobileFullWidth
                </f-button>
            </div>

            <h2>Tertiary Inverted</h2>
            <div style="background-color: #333; padding: 1rem">
                <f-button variant="tertiary" size="large" tertiary-style="inverted">Large Inverted</f-button>
                <f-button variant="tertiary" size="medium" tertiary-style="inverted">Medium Inverted</f-button>
                <f-button variant="tertiary" size="small" tertiary-style="inverted">Small Inverted</f-button>
                <br />
                <f-button variant="tertiary" size="large" tertiary-style="inverted" icon-left="pen">
                    Large Inverted
                </f-button>
                <f-button variant="tertiary" size="medium" tertiary-style="inverted" icon-left="pen">
                    Medium Inverted
                </f-button>
                <f-button variant="tertiary" size="small" tertiary-style="inverted" icon-left="pen">
                    Small Inverted
                </f-button>
                <br />
                <f-button variant="tertiary" size="large" tertiary-style="inverted" icon-right="pen">
                    Large Inverted
                </f-button>
                <f-button variant="tertiary" size="medium" tertiary-style="inverted" icon-right="pen">
                    Medium Inverted
                </f-button>
                <f-button variant="tertiary" size="small" tertiary-style="inverted" icon-right="pen">
                    Small Inverted
                </f-button>
                <br />
                <f-button variant="tertiary" size="medium" tertiary-style="inverted" @click="asyncOperation">
                    Medium Inverted Async
                </f-button>
                <f-button variant="tertiary" size="medium" tertiary-style="inverted" disabled>
                    Medium Inverted Disabled
                </f-button>
                <div>
                    <f-button variant="tertiary" size="medium" tertiary-style="inverted" mobile-full-width>
                        Medium Inverted MobileFullWidth
                    </f-button>
                </div>
            </div>
        </div>
    </div>
</template>
