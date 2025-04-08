<script>
import { defineComponent } from "vue";
import { FProgressbar } from "@fkui/vue";

export default defineComponent({
    name: "FProgressbarExample",
    components: { FProgressbar },
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
        <button data-test="increase" type="button" @click="increase()">Increase</button>
        <button data-test="decrease" type="button" @click="decrease()">Decrease</button>
        <label>
            Progress:
            <input v-model.number="currentProgress" type="number" />
        </label>
    </div>
</template>
