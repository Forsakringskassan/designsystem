<script>
import { defineComponent } from "vue";
import { FErrorList, FExpandablePanel, FTextField } from "@fkui/vue";

export default defineComponent({
    name: "FErrorListBeforeNavigate",
    components: { FErrorList, FExpandablePanel, FTextField },
    data() {
        return {
            items: [
                { title: "Favoritfrukt", id: "favorit-frukt", focusElementId: "favorit-frukt" },
                { title: "Favoritgodis", id: "favorit-godis", focusElementId: "favorit-godis" },
            ],
            expanded: false,
        };
    },
    methods: {
        beforeNavigate() {
            this.expanded = true;
            return this.$nextTick();
        },
    },
});
</script>

<template>
    <div>
        <f-error-list :items="items" :before-navigate="beforeNavigate">
            <template #title> Kolla på felen nedan </template>
        </f-error-list>

        <f-expandable-panel :expanded="expanded" @toggle="expanded = !expanded">
            <template #title> Favoriter </template>
            <template #default>
                <f-text-field id="favorit-frukt" maxlength="100"> Favoritfrukt 🍎 </f-text-field>
                <f-text-field id="favorit-godis" maxlength="100"> Favoritgodis 🍬 </f-text-field>
            </template>
        </f-expandable-panel>
    </div>
</template>
