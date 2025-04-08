<script>
import { defineComponent } from "vue";
import { FExpand } from "@fkui/vue";

export default defineComponent({
    name: "FExpandExample",
    components: { FExpand },
    data() {
        return {
            expanded: false,
        };
    },
});
</script>

<template>
    <div>
        <f-expand>
            <div v-if="expanded">Expanded content</div>
        </f-expand>
        <button type="button" @click="expanded = !expanded">
            {{ expanded ? `Close` : `Open` }}
        </button>
    </div>
</template>
