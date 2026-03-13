<script lang="ts">
import { defineComponent } from "vue";
import { FButton } from "@fkui/vue";

export default defineComponent({
    name: "MyAwesomeComponent",
    components: { FButton },
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    emits: ["reply"],
    methods: {
        onClick() {
            this.$emit("reply");
        },
    },
});
</script>

<template>
    <div>
        <p>Hej {{ name }}!</p>
        <f-button size="small" @click="onClick"> Svara </f-button>
    </div>
</template>
