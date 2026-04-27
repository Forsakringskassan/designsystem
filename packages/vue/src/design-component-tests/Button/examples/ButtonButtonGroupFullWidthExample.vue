<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { FButton } from "@fkui/vue";

export default defineComponent({
    components: { FButton },
    props: {
        useFullWidth: {
            type: Boolean,
            required: false,
        },
    },
});
</script>

<template>
    <!-- [html-validate-disable-next no-inline-style] -->
    <div style="background-color: beige; padding: 20px">
        <!-- [html-validate-disable-next no-inline-style] -->
        <div class="button-group" style="border: 1px black dotted">
            <f-button class="button-group__item" :mobile-full-width="useFullWidth" size="small">
                Primary
            </f-button>
            <f-button
                class="button-group__item"
                :mobile-full-width="useFullWidth"
                size="small"
                variant="secondary"
            >
                Secondary
            </f-button>
            <f-button
                class="button-group__item"
                icon-left="paper-clip"
                :mobile-full-width="useFullWidth"
                size="small"
                variant="tertiary"
            >
                Tertiary
            </f-button>
        </div>
        <!-- [html-validate-disable-next no-inline-style] -->
        <div class="button-group" style="border: 1px black dotted">
            <f-button class="button-group__item" :mobile-full-width="useFullWidth">
                Primary
            </f-button>
            <f-button
                class="button-group__item"
                :mobile-full-width="useFullWidth"
                variant="secondary"
            >
                Secondary
            </f-button>
            <f-button
                class="button-group__item"
                icon-left="paper-clip"
                :mobile-full-width="useFullWidth"
                variant="tertiary"
            >
                Tertiary
            </f-button>
        </div>
        <!-- [html-validate-disable-next no-inline-style] -->
        <div class="button-group" style="border: 1px black dotted">
            <f-button class="button-group__item" :mobile-full-width="useFullWidth" size="large">
                Primary
            </f-button>
            <f-button
                class="button-group__item"
                :mobile-full-width="useFullWidth"
                size="large"
                variant="secondary"
            >
                Secondary
            </f-button>
            <f-button
                class="button-group__item"
                icon-left="paper-clip"
                :mobile-full-width="useFullWidth"
                size="large"
                variant="tertiary"
            >
                Tertiary
            </f-button>
        </div>
        <!-- [html-validate-disable-next no-inline-style] -->
        <div class="button-group" style="border: 1px black dotted">
            <f-button class="button-group__item" :mobile-full-width="useFullWidth">
                Primary
            </f-button>
            <f-button
                class="button-group__item"
                :mobile-full-width="useFullWidth"
                variant="secondary"
            >
                Secondary
            </f-button>
            <f-button
                class="button-group__item"
                icon-left="paper-clip"
                :mobile-full-width="useFullWidth"
                variant="tertiary"
            >
                Tertiary
            </f-button>
            <f-button
                class="button-group__item"
                :mobile-full-width="useFullWidth"
                variant="tertiary"
            >
                Discrete
            </f-button>
            <f-button
                class="button-group__item"
                :mobile-full-width="useFullWidth"
                tertiary-style="inverted"
                variant="tertiary"
            >
                Discrete Inverted
            </f-button>
            <f-button
                class="button-group__item"
                :mobile-full-width="useFullWidth"
                variant="secondary"
            >
                Standard
            </f-button>
        </div>
    </div>
</template>
