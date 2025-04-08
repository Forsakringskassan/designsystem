<script>
import { defineComponent } from "vue";
import { IAnimateExpand } from "@fkui/vue";

export default defineComponent({
    namne: "IAnimateExpandToggleTwo",
    components: { IAnimateExpand },
    data() {
        return {
            toggle: false,
            opacity: false,
        };
    },
});
</script>

<template>
    <div>
        <button type="button" @click="toggle = !toggle">Toggle</button>
        <label><input v-model="opacity" type="checkbox" /> Toning</label>

        <i-animate-expand :opacity="opacity" :expanded="toggle">
            <!-- [html-validate-disable-next no-inline-style] -->
            <div style="background-color: yellow; height: 200px; position: relative"></div>
        </i-animate-expand>
        <i-animate-expand :opacity="opacity" :expanded="!toggle">
            <!-- [html-validate-disable-next no-inline-style] -->
            <div style="background-color: hotpink; height: 300px; position: relative"></div>
        </i-animate-expand>
    </div>
</template>
