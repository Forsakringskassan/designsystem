<template>
    <div>
        <i-menu
            id="imenu"
            ref="imenu"
            v-model="model"
            :items="items"
            @overflow="overflowIndex = $event"
        ></i-menu>
        <div>
            <span data-testid="overflowIndex"> {{ overflowIndex }} </span>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import IMenu from "../IMenu.vue";

const testItems = [
    { label: "label1", key: "MENU_1", href: "#href-1" },
    { label: "label2", key: "MENU_2", href: "#href-2" },
    { label: "label3", key: "MENU_3", href: "#href-3" },
    { label: "label4", key: "MENU_4", href: "#href-4" },
    { label: "label5", key: "MENU_5", href: "#href-5" },
    { label: "label6", key: "MENU_6", href: "#href-6" },
    { label: "label7", key: "MENU_7", href: "#href-7" },
    { label: "label8", key: "MENU_8", href: "#href-8" },
];

export default defineComponent({
    name: "IMenuCtExample",
    components: { IMenu },
    data() {
        return {
            items: testItems,
            model: "",
            overflowIndex: "",
            isClicked: false,
        };
    },
});
</script>
