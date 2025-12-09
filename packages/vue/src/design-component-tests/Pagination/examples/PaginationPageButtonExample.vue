<script lang="ts">
import { defineComponent } from "vue";
import {
    FFieldset,
    FNumericTextField,
    FPaginateDataset,
    FPaginator,
    FRadioField,
    FSelectField,
} from "@fkui/vue";

export default defineComponent({
    components: {
        FFieldset,
        FNumericTextField,
        FPaginateDataset,
        FPaginator,
        FRadioField,
    },
    data() {
        return {
            numberOfItemsPerPage: 15,
            numberOfPagesToShowAtMost: 9,
            rows: Array.from({ length: 100 }),
        };
    },
    computed: {
        numberOfPagesOptions(): number[] {
            return [5, 6, 7, 8, 9];
        },
    },
});
</script>

<template>
    <!-- cut above -->
    <f-paginate-dataset :items="rows" :items-per-page="numberOfItemsPerPage">
        <template #default>
            <f-paginator :number-of-pages-to-show="numberOfPagesToShowAtMost" />
        </template>
    </f-paginate-dataset>
    <!-- cut below -->

    <hr />

    <f-numeric-text-field v-model="numberOfItemsPerPage">
        <template #default>Antal objekt per sida</template>
        <template #description="{ descriptionClass }">
            <span :class="descriptionClass">Maximalt antal objekt per sida</span>
        </template>
    </f-numeric-text-field>

    <f-fieldset name="numberOfPagesToShowAtMost" horizontal>
        <template #label>Antal sidor att visa</template>
        <template #description="{ descriptionClass }">
            <span :class="descriptionClass">
                Det maximala antalet sidor som kan visas samtidigt.
            </span>
        </template>
        <f-radio-field
            v-for="option in numberOfPagesOptions"
            :key="option"
            v-model="numberOfPagesToShowAtMost"
            :value="option"
        >
            {{ option }}
        </f-radio-field>
    </f-fieldset>
</template>
