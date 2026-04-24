<script lang="ts">
import { defineComponent } from "vue";
import {
    FButton,
    FLayoutApplicationTemplate,
    FLayoutRightPanel,
    FLayoutRightPanelService,
} from "@fkui/vue";

interface ExampleItem {
    title: string;
    text: string;
}

interface ExampleData {
    selectedText: string;
    selectedTitle: string;
    items: ExampleItem[];
}

export default defineComponent({
    name: "FLayoutApplicationTemplateExample",
    components: { FButton, FLayoutApplicationTemplate, FLayoutRightPanel },
    data(): ExampleData {
        return {
            selectedText: "",
            selectedTitle: "",
            items: [
                {
                    title: "Träutensilier",
                    text: "Träutensilierna i ett tryckeri äro ingalunda en oviktig faktor, för trevnadens, ordningens och ekonomiens upprätthållande, och dock är det icke sällan som sorgliga erfarenheter göras på grund af det oförstånd med hvilket kaster, formbräden och regaler tillverkas och försäljas Kaster som äro dåligt hopkomna och af otillräckligt",
                },
            ],
        };
    },
    methods: {
        openPanel(item: ExampleItem): void {
            this.selectedTitle = item.title;
            this.selectedText = item.text;
            FLayoutRightPanelService.open();
        },
        closePanel(): void {
            FLayoutRightPanelService.close();
        },
    },
});
</script>

<template>
    <f-layout-application-template>
        <template #header>
            <!-- [html-validate-disable-next no-inline-style] -->
            <div style="background-color: green; color: white"><a href="#">[sidhuvud]</a></div>
        </template>

        <template #top-navigation>
            <!-- [html-validate-disable-next no-inline-style] -->
            <div style="background-color: lightgray"><a href="#">[toppnavigering]</a></div>
        </template>

        <template #default>
            <f-layout-right-panel>
                <template #heading>
                    <h3>{{ selectedTitle }}</h3>
                </template>

                <template #content>
                    <p>{{ selectedText }}</p>
                    <f-button @click="closePanel()">Stäng</f-button>
                </template>
                <template #default>
                    <div class="container-fluid">
                        <h1>Primäryta</h1>
                        <p>Klicka nedan för att se mer i sekundärpanelen.</p>
                        <ul>
                            <li v-for="item in items" :key="item.title">
                                <a
                                    :id="item.title"
                                    href="javascript:void(0)"
                                    class="anchor"
                                    @click="openPanel(item)"
                                >
                                    {{ item.title }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </template>
            </f-layout-right-panel>
        </template>

        <template #footer>
            <!-- [html-validate-disable-next no-inline-style] -->
            <div style="background-color: green; color: white; text-align: center">
                <a href="#">[sidfot]</a>
            </div>
        </template>
    </f-layout-application-template>
</template>

<style lang="css">
.example-grid .col {
    text-align: center;
    border: 1px dashed gray;
}
</style>
