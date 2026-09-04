<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";

export default defineComponent({
    components: { FTextField },
    data() {
        return {
            valtLand: "",
            valdStad: "",
            land: ["Svalbard och Jan Mayen", "Swaziland", "Sverige"],
            valtLandsStader: [] as string[],
            kommuner: {
                Sverige: ["Karlskrona", "Sundsvall", "Östersund", "Stockholm"],
            },
        };
    },
    methods: {
        onUpdate(value: string): void {
            console.log("update", value);
        },
        onChangeCities(): void {
            console.log("onChangeCities");
        },
        onUpdateCities(): void {
            console.log("onUpdateCities");
        },
        async onChangeCountry(value: string): Promise<void> {
            console.log("change :", value);
            await new Promise((resolve) => setTimeout(resolve, 750));
            this.valtLandsStader = this.kommuner[value as keyof typeof this.kommuner];
        },
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
            v-model="valtLand"
            v-validation.allowList="{ allowList: { list: land } }"
            maxlength="100"
            :options="land"
            @change="onChangeCountry"
            @update:model-value="onUpdate"
        >
            <template #default> Välj land </template>
        </f-text-field>
        <div>valtLand:{{ valtLand }}</div>
        <f-text-field
            v-model="valdStad"
            v-validation.allowList="{ allowList: { list: valtLandsStader } }"
            maxlength="100"
            :options="valtLandsStader"
            @change="onChangeCities"
            @update:model-value="onUpdateCities"
        >
            <template #default> Välj stad </template>
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
