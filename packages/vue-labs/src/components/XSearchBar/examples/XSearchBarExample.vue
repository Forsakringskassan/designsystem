<template>
    <div>
        <!-- [html-validate-disable-next wcag/h32: submit button included in x-search-bar] -->
        <f-validation-form @submit="submit">
            <x-search-bar v-model="value"> Sökfält </x-search-bar>
        </f-validation-form>
    </div>
</template>
<script>
import { FValidationForm } from "@fkui/vue";
import { XSearchBar } from "@fkui/vue-labs";
import { defineComponent } from "vue";

export default defineComponent({
    name: "XSearchBarExample",
    components: {
        XSearchBar,
        FValidationForm,
    },
    data() {
        return {
            value: "",
        };
    },
    methods: {
        submit() {
            alert(`Submit ${this.value}`);
        },
    },
});
</script>
