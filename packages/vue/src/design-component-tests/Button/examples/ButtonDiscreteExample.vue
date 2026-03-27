<script lang="ts">
import { defineComponent } from "vue";
import { FIcon } from "@fkui/vue";

export default defineComponent({
    components: { FIcon },
    props: {
        backgroundColor: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
    },
});
</script>

<template>
    <!-- [html-validate-disable-next no-inline-style] -->
    <div id="screenshotArea" :style="`background-color: ${backgroundColor}; padding: 100px`">
        <button :class="`button button--${type}`" data-test="button-discrete" type="button">
            <f-icon name="paper-clip" class="button__icon"></f-icon>
            <span> Discrete button text that will wrap </span>
        </button>
    </div>
</template>
