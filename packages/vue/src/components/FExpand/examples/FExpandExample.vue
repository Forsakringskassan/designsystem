<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { FButton, FExpand } from "@fkui/vue";

export default defineComponent({
    name: "FExpandExample",
    components: { FButton, FExpand },
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
        <f-button @click="expanded = !expanded">
            {{ expanded ? `Close` : `Open` }}
        </f-button>
    </div>
</template>
