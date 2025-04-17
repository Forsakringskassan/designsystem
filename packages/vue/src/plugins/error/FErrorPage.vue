<script lang="ts">
import { type PropType, defineComponent } from "vue";
import { ErrorData } from "../../types";

export default defineComponent({
    name: "FErrorPage",
    props: {
        payload: {
            type: Object as PropType<ErrorData>,
            required: false,
            default: null,
        },
    },
});
</script>

<template>
    <div data-test="f-error-page">
        <h1>Fel</h1>
        <p>Ett fel har uppstått.</p>
        <a href="/">Gå till startsidan</a>
    </div>
</template>
