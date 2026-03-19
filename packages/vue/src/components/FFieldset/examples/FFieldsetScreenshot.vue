<script setup lang="ts">
import { ref } from "vue";
import { FFieldset, FTextField, FTooltip } from "@fkui/vue";

const model1 = ref();
const model2 = ref();
const model3 = ref();
const model4 = ref();
</script>

<template>
    <div id="screenshot">
        <f-fieldset v-validation.required name="chips" chip horizontal>
            <template #label> Fieldset-etikett </template>

            <template #description="{ descriptionClass }">
                <span :class="descriptionClass">
                    Exemplet visar ett fieldset med två textfält, med tooltip på fieldset och på det
                    första textfältet.
                </span>
            </template>

            <template #tooltip>
                <f-tooltip screen-reader-text="Läs mer här" header-tag="h2">
                    <template #header> Header </template>
                    <template #body> Body </template>
                </f-tooltip>
            </template>

            <f-text-field
                v-model="model1"
                v-validation.required.maxLength="{ maxLength: { length: 20 } }"
            >
                <template #default> Etikett 1 </template>

                <template #tooltip>
                    <f-tooltip screen-reader-text="Läs mer här" header-tag="h2">
                        <template #header> Header </template>
                        <template #body> Body </template>
                    </f-tooltip>
                </template>

                <template #description="{ descriptionClass, formatDescriptionClass }">
                    <span :class="descriptionClass">Hjälptext</span>
                    <span :class="formatDescriptionClass">Formatbeskrivning</span>
                </template>
            </f-text-field>

            <f-text-field
                v-model="model2"
                v-validation.required.maxLength="{ maxLength: { length: 20 } }"
            >
                <template #default> Etikett 2 </template>
            </f-text-field>
        </f-fieldset>

        <f-fieldset v-validation.required name="chips" chip horizontal>
            <template #label> Fieldset-etikett </template>

            <template #description="{ descriptionClass }">
                <span :class="descriptionClass">
                    Exemplet visar ett fieldset med två textfält, med tooltip på det första
                    textfältet.
                </span>
            </template>

            <f-text-field
                v-model="model1"
                v-validation.required.maxLength="{ maxLength: { length: 20 } }"
            >
                <template #default> Etikett 1 </template>

                <template #tooltip>
                    <f-tooltip screen-reader-text="Läs mer här" header-tag="h2">
                        <template #header> Header </template>
                        <template #body> Body </template>
                    </f-tooltip>
                </template>

                <template #description="{ descriptionClass, formatDescriptionClass }">
                    <span :class="descriptionClass">Hjälptext</span>
                    <span :class="formatDescriptionClass">Formatbeskrivning</span>
                </template>
            </f-text-field>

            <f-text-field
                v-model="model2"
                v-validation.required.maxLength="{ maxLength: { length: 20 } }"
            >
                <template #default> Etikett 2 </template>
            </f-text-field>
        </f-fieldset>

        <f-fieldset v-validation.required name="chips" chip horizontal>
            <template #label> Fieldset-etikett </template>

            <template #description="{ descriptionClass }">
                <span :class="descriptionClass">
                    Exemplet visar ett fieldset med två textfält.
                </span>
            </template>

            <f-text-field
                v-model="model3"
                v-validation.required.maxLength="{ maxLength: { length: 20 } }"
            >
                <template #default> Etikett 1</template>

                <template #description="{ descriptionClass, formatDescriptionClass }">
                    <span :class="descriptionClass">Hjälptext</span>
                    <span :class="formatDescriptionClass">Formatbeskrivning</span>
                </template>
            </f-text-field>

            <f-text-field
                v-model="model4"
                v-validation.required.maxLength="{ maxLength: { length: 20 } }"
            >
                <template #default> Etikett 2</template>
            </f-text-field>
        </f-fieldset>
    </div>
</template>
<style>
#screenshot {
    padding: 12px;
}
</style>
