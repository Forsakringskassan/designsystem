<script lang="ts">
import { defineComponent } from "vue";
import { FButton, FProgressbar } from "@fkui/vue";

export default defineComponent({
    name: "FProgressbarExample",
    components: { FButton, FProgressbar },
    data() {
        return {
            currentProgress: 40,
        };
    },
    methods: {
        decrease() {
            this.currentProgress = Math.max(this.currentProgress - 20, 0);
        },
        increase() {
            this.currentProgress = Math.min(this.currentProgress + 20, 100);
        },
    },
});
</script>

<template>
    <div>
        <f-progressbar
            :value="currentProgress"
            aria-label="Progressbar"
            label="Progressbar"
            value-text="You have uploaded %VALUE% %."
        ></f-progressbar>

        <pre
            class="debug-data"
        ><span class="sr-only">Debug-data: </span>value: {{currentProgress}}</pre>
        <f-button data-test="increase" @click="increase()">Increase</f-button>
        <f-button data-test="decrease" @click="decrease()">Decrease</f-button>
        <label>
            Progress:
            <input v-model.number="currentProgress" type="number" />
        </label>
    </div>
</template>
