<script setup lang="ts">
import "highlight.js/styles/github.min.css";
import { ref, computed } from "vue";
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
const leftVariant = ref<"static" | "toggle" | "expand" | "expand-slot">("static");
const leftType = ref<"none" | "flat" | "layer" | "custom">("custom");
const leftFlags = ref<"none" | "overlay" | "resizable" | "responsive">("none");

const rightOpen = ref(true);
const rightVariant = ref<"static" | "toggle" | "expand">("static");
const rightType = ref<"none" | "flat" | "layer" | "custom">("custom");
const rightFlags = ref<"none" | "overlay" | "resizable" | "responsive">("none");

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

const lastSizes = ref<Record<string, number>>({});

function maybeOverlay(sizes: Record<string, number>): {
    variant?: "static" | "toggle" | "expand";
    overlay?: boolean;
    fullscreen?: boolean;
} {
    const { body, left = 0, right = 0 } = sizes;
    const width = body - left - right;
    lastSizes.value = { body, left, right, width };
    if (body < 500) {
        return { variant: "toggle", fullscreen: true };
    }
    if (width < 600) {
        return { variant: "expand", overlay: true };
    }
    return {};
}
</script>

<template>
    <f-page-layout :layout>
        <template #header>
            <p>header (med en tämligen skrikig men orörd FNavigationMenu under)</p>
            <f-navigation-menu v-model:route="layoutName" :routes></f-navigation-menu>
        </template>

        <template #toolbar>
            <div>Knapp | Grunka | Mojäng | Mackapär</div>
            <div>Manick | Grejsimojs</div>
        </template>

        <template #left>
            <f-panel
                v-model="leftOpen"
                :variant="leftVariant === 'expand-slot' ? 'expand' : leftVariant"
                :class="leftType === 'custom' ? 'my-left-panel' : undefined"
                :type="leftType !== 'custom' ? leftType : undefined"
                :overlay="leftFlags === 'overlay'"
                :resizable="leftFlags === 'resizable'"
                :behaviour="leftFlags === 'responsive' ? maybeOverlay : undefined"
            >
                <template #header> Panel header </template>

                <template #default> Panel body </template>

                <template #footer> Panel footer </template>

                <template v-if="leftVariant === 'expand-slot'" #collapsed>
                    <f-icon name="pen"></f-icon>
                    <f-icon name="trashcan"></f-icon>
                    <f-icon name="search"></f-icon>
                    <f-icon name="paper-clip"></f-icon>
                    <f-icon name="calendar"></f-icon>
                    <f-icon name="bell"></f-icon>
                </template>
            </f-panel>
        </template>

        <template #right>
            <f-panel
                v-model="rightOpen"
                :variant="rightVariant"
                :class="rightType === 'custom' ? 'my-right-panel' : undefined"
                :type="rightType !== 'custom' ? rightType : undefined"
                :overlay="rightFlags === 'overlay'"
                :resizable="rightFlags === 'resizable'"
                :behaviour="rightFlags === 'responsive' ? maybeOverlay : undefined"
            >
                right
            </f-panel>
        </template>

        <template #right2>
            <f-panel v-model="right2Open" variant="toggle" class="my-extra-right-panel" resizable>
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
                                <div class="col col--md-4">
                                    <f-select-field v-model="leftVariant">
                                        <template #label> Variant </template>
                                        <template #default>
                                            <option value="static">Static</option>
                                            <option value="toggle">Toggle</option>
                                            <option value="expand">Expand/Collapse</option>
                                            <option value="expand-slot">Expand/Collapse (with slot)</option>
                                        </template>
                                    </f-select-field>
                                </div>
                                <div class="col col--md-4">
                                    <f-select-field v-model="leftType">
                                        <template #label> Style </template>
                                        <template #default>
                                            <option value="none">None</option>
                                            <option value="flat">Flat</option>
                                            <option value="layer">Layer</option>
                                            <option value="custom">Custom</option>
                                        </template>
                                    </f-select-field>
                                </div>
                                <div class="col col--md-4">
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
                                <div class="col col--md-4">
                                    <f-select-field v-model="rightVariant">
                                        <template #label> Variant </template>
                                        <template #default>
                                            <option value="static">Static</option>
                                            <option value="toggle">Toggle</option>
                                            <option value="expand">Expand/Collapse</option>
                                        </template>
                                    </f-select-field>
                                </div>
                                <div class="col col--md-4">
                                    <f-select-field v-model="rightType">
                                        <template #label> Style </template>
                                        <template #default>
                                            <option value="none">None</option>
                                            <option value="flat">Flat</option>
                                            <option value="layer">Layer</option>
                                            <option value="custom">Custom</option>
                                        </template>
                                    </f-select-field>
                                </div>
                                <div class="col col--md-4">
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
                    <template v-if="leftFlags === 'responsive' || rightFlags === 'responsive'">
                        <div class="size-wrapper-wrapper">
                            <div class="size-wrapper">
                                <div class="body-size">{{ lastSizes.body }}px</div>
                                <div class="body-box"></div>
                                <div class="area-size">
                                    <div class="left-size">{{ lastSizes.left }}px</div>
                                    <div class="content-size">= {{ lastSizes.width }}px</div>
                                    <div class="right-size">{{ lastSizes.right }}px</div>
                                </div>
                                <div class="area-box">
                                    <div class="left-box">left</div>
                                    <div class="content-box">content</div>
                                    <div class="right-box">right</div>
                                </div>
                                <div class="area-silly">
                                    <div class="left-silly"></div>
                                    <div class="content-silly"></div>
                                    <div class="right-silly"></div>
                                </div>
                            </div>
                        </div>
                    </template>
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
    z-index: 10;
}

.area-toolbar {
    background: orange;
    justify-content: space-between;
}

.area-footer {
    background: lightblue;
    z-index: 10;
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

.panel__collapsed {
    margin-top: 1rem;
    font-size: 0;
    display: flex;
    flex-direction: column;

    svg {
        border: 1px solid #000;
        border-radius: 4px;
        padding: 0.25rem;
        height: 1.5rem;
        width: 1.5rem;
        margin-bottom: 4px;
        cursor: pointer;
        pointer-events: auto;

        &:hover {
            background: rgba(0, 0, 0, 0.25);
        }
    }
}

.size-wrapper-wrapper {
    display: flex;
    justify-content: center;
}

.size-wrapper {
    width: 25rem;
}

.body-size,
.left-size,
.content-size,
.right-size {
    text-align: center;
}

.body-box {
    height: 1rem;
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    margin-bottom: 0.5rem;
}

.area-box,
.area-size,
.area-silly {
    display: flex;
    gap: 0.5rem;
}

.left-box,
.content-box,
.right-box {
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.left-silly,
.content-silly,
.right-silly {
    height: 2rem;
}

.left-size,
.left-box,
.left-silly {
    width: 25%;
}

.left-box {
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
}

.left-silly,
.content-silly,
.right-silly {
    border-left: 1px dashed black;
    border-right: 1px dashed black;
}

.content-size,
.content-box,
.content-silly {
    flex: 1 0 auto;
}

.content-box {
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
}

.right-size,
.right-box,
.right-silly {
    width: 25%;
}

.right-box {
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
}
</style>
