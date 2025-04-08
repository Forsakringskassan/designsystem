<script lang="ts">
import { defineComponent } from "vue";
import {
    FLayoutApplicationTemplate,
    FLayoutLeftPanel,
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
    name: "FullNavigationExampleApp",
    components: { FLayoutApplicationTemplate, FLayoutLeftPanel, FLayoutRightPanel },
    data(): ExampleData {
        return {
            selectedText: "",
            selectedTitle: "",
            items: [
                {
                    title: "Träutensilier",
                    text: "Träutensilierna i ett tryckeri äro ingalunda en oviktig faktor, för trevnadens, ordningens och ekonomiens upprätthållande, och dock är det icke sällan som sorgliga erfarenheter göras på grund af det oförstånd med hvilket kaster, formbräden och regaler tillverkas och försäljas Kaster som äro dåligt hopkomna och af otillräckligt",
                },
                {
                    title: "Lorem ipsum",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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

        <f-layout-left-panel>
            <template #heading>
                <h3>Navigationstitel</h3>
            </template>

            <template #content> [content] </template>

            <template #default>
                <f-layout-right-panel>
                    <template #heading>
                        <h3>{{ selectedTitle }}</h3>
                    </template>

                    <template #content>
                        <p>{{ selectedText }}</p>
                        <button class="button button--primary" type="button" @click="closePanel()">
                            Stäng
                        </button>
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
        </f-layout-left-panel>

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
