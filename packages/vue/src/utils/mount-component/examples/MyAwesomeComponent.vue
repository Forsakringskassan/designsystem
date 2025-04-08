<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "MyAwesomeComponent",
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
        <button type="button" class="button button--primary button--small" @click="onClick">
            Svara
        </button>
    </div>
</template>
