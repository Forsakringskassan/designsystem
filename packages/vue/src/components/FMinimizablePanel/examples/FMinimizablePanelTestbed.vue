<script setup lang="ts">
import { computed, defineComponent } from "vue";
import { FPageLayout, FResizePane, FMinimizablePanel } from "@fkui/vue";

const { area = "left", resize = false } = defineProps<{
    area: string;
    resize: boolean;
}>();

const DummyWrapper = defineComponent({
    template: /* HTML */ `
        <div style="display: contents;">
            <slot></slot>
        </div>
    `,
});

const is = computed(() => {
    return resize ? FResizePane : DummyWrapper;
});
</script>

<template>
    <f-page-layout layout="three-column">
        <template #[area]>
            <component :is min="150px" max="40%" initial="150px">
                <!-- eslint-disable vue/no-deprecated-slot-attribute -- native slot -->
                <f-minimizable-panel>
                    <template #default="{ header, content, footer, isOpen }">
                        <template v-if="isOpen">
                            <h2 :slot="header">[header]</h2>
                            <div :slot="content">
                                <p>[content]</p>
                            </div>
                            <div :slot="footer">[footer]</div>
                        </template>
                    </template>
                </f-minimizable-panel>
            </component>
        </template>
        <template #content>
            <div class="content">
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
