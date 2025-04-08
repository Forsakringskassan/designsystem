<script>
import { defineComponent, getCurrentInstance } from "vue";

export default defineComponent({
    name: "ErrorPluginExample",
    data() {
        return {
            instance: getCurrentInstance(),
        };
    },
    methods: {
        generateError() {
            throw new Error("It's game over man!");
        },
        generateWarning() {
            const error = new Error();
            const warnHandler = this.instance.appContext.config.warnHandler;
            warnHandler("It's game over man!", null, error.stack);
        },
    },
});
</script>

<template>
    <div>
        <button
            v-test="'generate-error'"
            class="button button--secondary"
            type="button"
            @click="generateError()"
        >
            Fel
        </button>
        <button
            v-test="'generate-warning'"
            class="button button--secondary"
            type="button"
            @click="generateWarning()"
        >
            Varning
        </button>
    </div>
</template>
