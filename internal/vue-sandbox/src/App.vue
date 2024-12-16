<script setup lang="ts">
import "highlight.js/styles/github.min.css";
import { ref, computed, onMounted } from "vue";
import hljs from "highlight.js";
import { FPageLayout, FPanel, FFieldset, FSelectField, defineLayout, FNavigationMenu } from "@fkui/vue";
import simple from "../../../packages/vue/src/components/FPageLayout/examples/FPageLayoutSimpleExample.vue?raw";

const highlightedSimple = hljs.highlight(simple, { language: "html" }).value;

const routes = [
    { label: "Grundmall", route: "simple" },
    { label: "Vänster panel", route: "left-panel" },
    { label: "Höger panel", route: "right-panel" },
    { label: "Båda paneler", route: "three-column" },
    { label: "Custom", route: "custom" },
];

const layoutName = ref("simple");

const leftOpen = ref(true);
const leftVariant = ref<"static" | "toggle" | "expand">("static");
const leftFlags = ref<"none" | "overlay" | "resizable">("none");

const rightOpen = ref(true);
const rightVariant = ref<"static" | "toggle" | "expand">("static");
const rightFlags = ref<"none" | "overlay" | "resizable">("none");

const right2Open = ref(true);

const customLayout = defineLayout({
    name: "foobar",
    slots: {
        header: {
            attach: "none",
            direction: "column",
        },
        toolbar: {
            attach: "none",
            direction: "row",
        },
        left: {
            attach: "left",
            direction: "column",
        },
        right: {
            attach: "right",
            direction: "column",
        },
        right2: {
            attach: "right",
            direction: "column",
        },
        content: {
            attach: "none",
            direction: "column",
        },
        footer: {
            attach: "none",
            direction: "column",
        },
    },
});

const layout = computed(() => {
    switch (layoutName.value) {
        case "simple":
        case "left-panel":
        case "right-panel":
        case "three-column":
            return layoutName.value;
        case "custom":
            return customLayout;
        default:
            return "simple";
    }
});

function maybeOverlay(sizes: Record<string, number>): {
    variant?: "static" | "toggle" | "expand";
    overlay?: boolean;
    fullscreen?: boolean;
} {
    const { body, left = 0, right = 0 } = sizes;
    const width = body - left - right;
    if (body < 500) {
        return { variant: "toggle", fullscreen: true };
    }
    if (width < 500) {
        return { variant: "expand", overlay: true };
    }
    return {};
}
</script>

<template>
    <f-page-layout :layout>
        <template #header>
            <p>header (med en tämligen skrikig men orörd FNavigationMenu under)</p>
            <f-navigation-menu :routes v-model:route="layoutName"></f-navigation-menu>
        </template>

        <template #toolbar>
            <div>Knapp | Grunka | Mojäng | Mackapär</div>
            <div>Manick | Grejsimojs</div>
        </template>

        <template #left>
            <f-panel
                :variant="leftVariant"
                v-model="leftOpen"
                class="my-left-panel"
                :overlay="leftFlags === 'overlay'"
                :resizable="leftFlags === 'resizable'"
                :behaviour="leftFlags === 'responsive' ? maybeOverlay : undefined"
            >
                left
            </f-panel>
        </template>

        <template #right>
            <f-panel
                :variant="rightVariant"
                v-model="rightOpen"
                class="my-right-panel"
                :overlay="rightFlags === 'overlay'"
                :resizable="rightFlags === 'resizable'"
                :behaviour="rightFlags === 'responsive' ? maybeOverlay : undefined"
            >
                right
            </f-panel>
        </template>

        <template #right2>
            <f-panel variant="toggle" v-model="right2Open" class="my-extra-right-panel" resizable>
                En extra högerpanel
            </f-panel>
        </template>

        <template #content>
            <main>
                <h1>Heading</h1>
                <p>Lorem ipsum dolor sit amet.</p>

                <template v-if="layoutName === 'simple'">
                    <p>Grundmall innehåller tre ytor:</p>
                    <ul>
                        <li><code>header</code></li>
                        <li><code>content</code></li>
                        <li><code>footer</code></li>
                    </ul>
                    <p>Navigationsmeny placeras i header-slotten, det finns ingen separat slot för navigering.</p>
                    <p>
                        All bakgrundsfärg, padding osv ligger i applikationen och ingår ej i
                        <code>FPageLayout</code> eller <code>FPanel</code>.
                    </p>

                    <pre><code v-html="highlightedSimple"></code></pre>
                </template>

                <template v-if="layout !== 'simple'">
                    <div class="button-group">
                        <button
                            class="button button--secondary button-group__item"
                            type="button"
                            @click="leftOpen = true"
                        >
                            Open left panel
                        </button>
                        <button
                            class="button button--secondary button-group__item"
                            type="button"
                            @click="rightOpen = true"
                        >
                            Open right panel
                        </button>
                        <button v-if="layoutName === 'custom'" class="button" type="button" @click="right2Open = true">
                            Open extra panel
                        </button>
                    </div>

                    <f-fieldset>
                        <template #label> Left panel </template>
                        <template #default>
                            <div class="row">
                                <div class="col col--md-6">
                                    <f-select-field v-model="leftVariant">
                                        <template #label> Variant </template>
                                        <template #default>
                                            <option value="static">Static</option>
                                            <option value="toggle">Toggle</option>
                                            <option value="expand">Expand/Collapse</option>
                                        </template>
                                    </f-select-field>
                                </div>
                                <div class="col col--md-6">
                                    <f-select-field v-model="leftFlags">
                                        <template #label> Flags </template>
                                        <template #default>
                                            <option value="none">Fixed</option>
                                            <option value="resizable">Resizable</option>
                                            <option value="overlay">Overlay</option>
                                            <option value="responsive">Responsive</option>
                                        </template>
                                    </f-select-field>
                                </div>
                            </div>
                        </template>
                    </f-fieldset>

                    <f-fieldset>
                        <template #label> Right panel </template>
                        <template #default>
                            <div class="row">
                                <div class="col col--md-6">
                                    <f-select-field v-model="rightVariant">
                                        <template #label> Variant </template>
                                        <template #default>
                                            <option value="static">Static</option>
                                            <option value="toggle">Toggle</option>
                                            <option value="expand">Expand/Collapse</option>
                                        </template>
                                    </f-select-field>
                                </div>
                                <div class="col col--md-6">
                                    <f-select-field v-model="rightFlags">
                                        <template #label> Flags </template>
                                        <template #default>
                                            <option value="none">Fixed</option>
                                            <option value="resizable">Resizable</option>
                                            <option value="overlay">Overlay</option>
                                            <option value="responsive">Responsive</option>
                                        </template>
                                    </f-select-field>
                                </div>
                            </div>
                        </template>
                    </f-fieldset>

                    <pre>{{ { leftOpen, leftVariant, leftFlags, rightOpen, rightVariant, rightFlags } }}</pre>
                </template>
            </main>
        </template>

        <template #footer> footer </template>
    </f-page-layout>
</template>

<style>
html,
body {
    margin: 0;
    padding: 0;
}

.page-layout--foobar {
    grid-template:
        "header header header header" min-content
        "left toolbar toolbar toolbar" min-content
        "left content right2 right"
        "footer footer footer footer" min-content
        / min-content 1fr min-content min-content;
}

.area-header,
.area-content,
.area-toolbar,
.area-footer {
    padding: 1rem;
}

.area-header {
    background: lightgreen;
}

.area-toolbar {
    background: orange;
    justify-content: space-between;
}

.area-footer {
    background: lightblue;
}

.my-left-panel {
    background: lawngreen;
}

.my-right-panel {
    background: hotpink;
}

.my-extra-right-panel {
    background: firebrick;
}
</style>
