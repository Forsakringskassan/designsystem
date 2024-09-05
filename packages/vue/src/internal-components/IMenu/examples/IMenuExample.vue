<template>
    <div>
        <pre>Highlight: {{ model }}</pre>

        <i-menu
            v-model="model"
            :items="items"
            :enable-keyboard-navigation="true"
            @overflow="overflow = $event"
        ></i-menu>
        Overflow: {{ overflow }}

        <button type="button" @click="items = items.slice(4)">Click cut</button>

        <h3>Vertical</h3>
        <i-menu v-model="model" :items="items" vertical></i-menu>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { IMenu } from "@fkui/vue";

export default defineComponent({
    namne: "IMenuExample",
    components: { IMenu },
    data() {
        return {
            items: [
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
                {
                    label: "Testar target",
                    key: "MENU_EXTERN",
                    href: "http://www.google.com",
                    target: "_blank",
                },
                { label: "Ikon exempel", key: "MENU_MORE", iconRight: "arrow-down" },
            ],
            model: "",
            overflow: "",
        };
    },
});
</script>
