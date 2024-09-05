<template>
    <div>
        <button ref="popupAnchor" type="button" @click="onClick">Öppna</button>
        <pre>Highlight: {{ model }}</pre>
        <i-popup-menu
            v-model="model"
            :is-open="isOpen"
            :items="items"
            :anchor="getAnchor()"
            :enable-keyboard-navigation="true"
            @close="onClose"
        ></i-popup-menu>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { IPopupMenu } from "@fkui/vue";

const exampleItems = [
    { label: "Det", key: "MENU_1", href: "/qwe" },
    { label: "var", key: "MENU_2" },
    { label: "en", key: "MENU_3" },
    { label: "finliten", key: "MENU_4" },
    { label: "meny", key: "MENU_5" },
    { label: "som är", key: "MENU_6" },
    { label: "rätt lång", key: "MENU_7" },
    { label: "och innehållet", key: "MENU_8" },
    { label: "kommer", key: "MENU_9" },
    { label: "wrappas", key: "MENU_10" },
    { label: "Med href", key: "MENU_HREF", href: "/" },
    { label: "Testar target", key: "MENU_EXTERN", href: "http://www.google.com", target: "_blank" },
];

export default defineComponent({
    name: "IPopupMenuExample",
    components: { IPopupMenu },
    data() {
        return {
            items: exampleItems,
            model: "",
            isOpen: false,
        };
    },
    methods: {
        getAnchor() {
            return this.$refs.popupAnchor;
        },
        onClose() {
            this.isOpen = false;
        },
        onClick() {
            this.isOpen = !this.isOpen;
        },
    },
});
</script>
