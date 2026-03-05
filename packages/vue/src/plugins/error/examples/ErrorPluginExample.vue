<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue";
import { FButton } from "@fkui/vue";

export default defineComponent({
    name: "ErrorPluginExample",
    components: { FButton },
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
            const warnHandler = this.instance?.appContext.config.warnHandler;
            if (warnHandler) {
                warnHandler("It's game over man!", null, error.stack ?? "");
            }
        },
    },
});
</script>

<template>
    <div>
        <f-button v-test="'generate-error'" variant="secondary" @click="generateError()">
            Fel
        </f-button>
        <f-button v-test="'generate-warning'" variant="secondary" @click="generateWarning()">
            Varning
        </f-button>
    </div>
</template>
