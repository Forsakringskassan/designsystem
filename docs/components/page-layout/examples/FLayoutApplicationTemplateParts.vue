<script lang="ts">
import { defineComponent } from "vue";
import { FLayoutApplicationTemplate } from "@fkui/vue";

export default defineComponent({
    name: "FLayoutApplicationTemplateExample",
    components: { FLayoutApplicationTemplate },
});
</script>

<template>
    <f-layout-application-template>
        <template #header>
            <div class="example-header">[sidhuvud]</div>
        </template>

        <template #top-navigation>
            <div class="example-topnav">[toppnavigering]</div>
        </template>

        <div class="example-content">[primäryta]</div>

        <template #footer>
            <div class="example-footer">[sidfot]</div>
        </template>
    </f-layout-application-template>
</template>

<style>
.example-header {
    background: green;
    color: white;
    padding: 1rem;
}
.example-topnav {
    background: lightgray;
    padding: 1rem;
}
.example-content {
    padding: 1rem;
}
.example-footer {
    background: green;
    color: white;
    padding: 1rem;
}
</style>
