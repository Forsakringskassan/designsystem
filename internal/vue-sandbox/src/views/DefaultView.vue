<script lang="ts">
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";

export default defineComponent({
    components: { FTextField },
    data() {
        return {
            awesomeModel: "",
        };
    },
});
</script>

<template>
    <div class="sandbox-root">
        <h1>FKUI Sandbox</h1>
        <p>
            Ett internt paket som innehåller en avskalad Vue-applikation. Applikationen är konsument av övriga
            FKUI-paket och innehåller enbart ett tomt exempel.
        </p>
        <p>
            <strong>Ändra och labba gärna här men glöm inte återställa innan merge!</strong>
        </p>
        <hr />
        <f-text-field
            id="awesome-field"
            v-model="awesomeModel"
            v-validation.required.maxLength="{ maxLength: { length: 10 } }"
        >
            <template #default> Inmatningsfält. </template>
            <template #description="{ descriptionClass }">
                <span :class="descriptionClass"> Lorem ipsum dolor sit amet. </span>
            </template>
        </f-text-field>
    </div>
</template>

<style>
.sandbox-root {
    width: min(100% - 2rem, 80ch);
    margin: auto;
}

h1 {
    margin-top: 2rem;
}

hr {
    margin-bottom: 2rem;
}
</style>
