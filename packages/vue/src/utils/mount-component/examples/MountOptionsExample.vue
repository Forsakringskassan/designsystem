<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import MyAwesomeComponent from "./MyAwesomeComponent.vue";
import { mountComponent } from "@fkui/vue";

export default defineComponent({
    name: "MountOptionsExample",
    mounted() {
        mountComponent(this, MyAwesomeComponent, {
            attachTo: this.$el,
            name: "Världen",
            onReply() {
                alert("Fick ett svar!");
            },
        });
    },
});
</script>

<template>
    <div></div>
</template>
