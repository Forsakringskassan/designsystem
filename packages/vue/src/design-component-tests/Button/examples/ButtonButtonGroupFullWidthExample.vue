<script lang="ts">
import { defineComponent } from "vue";
import { FIcon } from "@fkui/vue";

export default defineComponent({
    components: { FIcon },
    props: {
        useFullWidth: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
});
</script>

<template>
    <!-- [html-validate-disable-next no-inline-style] -->
    <div style="background-color: beige; padding: 20px">
        <!-- [html-validate-disable-next no-inline-style] -->
        <div class="button-group" style="border: 1px black dotted">
            <button
                class="button button--primary button--small button-group__item"
                :class="useFullWidth ? 'button--full-width' : ''"
                type="button"
            >
                Primary
            </button>
            <button
                class="button button--secondary button--small button-group__item"
                :class="useFullWidth ? 'button--full-width' : ''"
                type="button"
            >
                Secondary
            </button>
            <button
                class="button button--tertiary button--small button-group__item"
                :class="useFullWidth ? 'button--full-width' : ''"
                type="button"
            >
                <f-icon name="paper-clip" class="button__icon"></f-icon> Tertiary
            </button>
        </div>
        <!-- [html-validate-disable-next no-inline-style] -->
        <div class="button-group" style="border: 1px black dotted">
            <button
                class="button button--primary button--medium button-group__item"
                :class="useFullWidth ? 'button--full-width' : ''"
                type="button"
            >
                Primary
            </button>
            <button
                class="button button--secondary button--medium button-group__item"
                :class="useFullWidth ? 'button--full-width' : ''"
                type="button"
            >
                Secondary
            </button>
            <button
                class="button button--tertiary button--medium button-group__item"
                :class="useFullWidth ? 'button--full-width' : ''"
                type="button"
            >
                <f-icon name="paper-clip" class="button__icon"></f-icon> Tertiary
            </button>
        </div>
        <!-- [html-validate-disable-next no-inline-style] -->
        <div class="button-group" style="border: 1px black dotted">
            <button
                class="button button--primary button--large button-group__item"
                :class="useFullWidth ? 'button--full-width' : ''"
                type="button"
            >
                Primary
            </button>
            <button
                class="button button--secondary button--large button-group__item"
                :class="useFullWidth ? 'button--full-width' : ''"
                type="button"
            >
                Secondary
            </button>
            <button
                class="button button--tertiary button--large button-group__item"
                :class="useFullWidth ? 'button--full-width' : ''"
                type="button"
            >
                <f-icon name="paper-clip" class="button__icon"></f-icon> Tertiary
            </button>
        </div>
        <!-- [html-validate-disable-next no-inline-style] -->
        <div class="button-group" style="border: 1px black dotted">
            <button
                class="button button--primary button-group__item"
                :class="useFullWidth ? 'button--full-width' : ''"
                type="button"
            >
                Primary
            </button>
            <button
                class="button button--secondary button-group__item"
                :class="useFullWidth ? 'button--full-width' : ''"
                type="button"
            >
                Secondary
            </button>
            <button
                class="button button--tertiary button-group__item"
                :class="useFullWidth ? 'button--full-width' : ''"
                type="button"
            >
                <f-icon name="paper-clip" class="button__icon"></f-icon> Tertiary
            </button>
            <button
                class="button button--discrete button-group__item"
                :class="useFullWidth ? 'button--full-width' : ''"
                type="button"
            >
                Discrete
            </button>
            <button
                class="button button--discrete-inverted button-group__item"
                :class="useFullWidth ? 'button--full-width' : ''"
                type="button"
            >
                Discrete Inverted
            </button>
            <button
                class="button button--standard button-group__item"
                :class="useFullWidth ? 'button--full-width' : ''"
                type="button"
            >
                Standard
            </button>
        </div>
    </div>
</template>
