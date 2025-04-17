<script lang="ts">
import { defineComponent } from "vue";
import { mountComponent } from "@fkui/vue";
import MyAwesomeComponent from "./MyAwesomeComponent.vue";

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
