<script setup lang="ts">
import { FPageLayout, FDetailsPanel, useDetailsPanel } from "@fkui/vue";

const { exclusive } = defineProps<{
    exclusive: boolean;
}>();

const name1 = `example-panel-1`;
const name2 = `example-panel-2`;
const name3 = `example-panel-3`;
const name4 = `example-panel-4`;
const panel1 = useDetailsPanel<string>(name1);
const panel2 = useDetailsPanel<string>(name2);
const panel3 = useDetailsPanel<string>(name3);
const panel4 = useDetailsPanel<string>(name4);
const groupName1 = exclusive ? "group-1" : undefined;
const groupName2 = exclusive ? "group-2" : undefined;

function openPanel1(): void {
    panel1.open("foo");
}

function openPanel2(): void {
    panel2.open("bar");
}

function openPanel3(): void {
    panel3.open("baz");
}

function openPanel4(): void {
    panel4.open("tux");
}
</script>

<template>
    <f-page-layout layout="three-column">
        <template #left>
            <!-- eslint-disable vue/no-deprecated-slot-attribute -- native slot -->
            <f-details-panel :name="name1" :exclusive="groupName1">
                <template #default="{ header }">
                    <h2 :slot="header">[panel 1]</h2>
                </template>
            </f-details-panel>
            <f-details-panel :name="name2" :exclusive="groupName1">
                <template #default="{ header }">
                    <h2 :slot="header">[panel 2]</h2>
                </template>
            </f-details-panel>
        </template>
        <template #right>
            <!-- eslint-disable vue/no-deprecated-slot-attribute -- native slot -->
            <f-details-panel :name="name3" :exclusive="groupName2">
                <template #default="{ header }">
                    <h2 :slot="header">[panel 3]</h2>
                </template>
            </f-details-panel>
            <f-details-panel :name="name4" :exclusive="groupName2">
                <template #default="{ header }">
                    <h2 :slot="header">[panel 4]</h2>
                </template>
            </f-details-panel>
        </template>
        <template #content>
            <div class="content">
                <div>
                    <button type="button" class="button button--primary" @click="openPanel1">
                        Öppna panel 1
                    </button>
                    <button type="button" class="button button--primary" @click="openPanel2">
                        Öppna panel 2
                    </button>
                </div>
                <div>
                    <button type="button" class="button button--primary" @click="openPanel3">
                        Öppna panel 3
                    </button>
                    <button type="button" class="button button--primary" @click="openPanel4">
                        Öppna panel 4
                    </button>
                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt ipsum
                    tortor. Aliquam erat eros, maximus rhoncus quam ut, dignissim ullamcorper nunc.
                    Morbi laoreet urna nec leo elementum faucibus. Sed at congue turpis. Proin vitae
                    risus ac risus porta viverra. Aenean blandit sodales augue. Pellentesque tempor
                    neque lectus, ac dictum massa consectetur non. Vivamus pharetra magna sed neque
                    aliquam dictum. Donec cursus, orci eu elementum fermentum, nulla dolor facilisis
                    dui, et congue lacus odio non sem. Suspendisse vel lorem sed ante tristique
                    congue quis in eros. Sed quis molestie urna.
                </p>
            </div>
        </template>
    </f-page-layout>
</template>

<style>
html,
body {
    margin: 0;
    padding: 0;
}
.content {
    padding: 1rem;
}
</style>
