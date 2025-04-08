<script>
import { defineComponent } from "vue";
import { FSelectField } from "@fkui/vue";

export default defineComponent({
    name: "FSelectFieldWidths",
    components: { FSelectField },
    data() {
        return { foo: "" };
    },
});
</script>

<template>
    <f-select-field v-model="foo" v-validation.required label-width="md-9" select-width="md-6">
        <template #label>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque lacus sed mi
            mollis pulvinar.
        </template>

        <option disabled hidden value="">Välj…</option>
        <option value="FOO">Foo</option>
        <option value="BAR">Bar</option>
        <option value="BAZ">Baz</option>
    </f-select-field>
</template>
