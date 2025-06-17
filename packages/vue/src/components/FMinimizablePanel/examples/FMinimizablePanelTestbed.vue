<script setup lang="ts">
import { computed, defineComponent } from "vue";
import { FPageLayout, FResizePane, FMinimizablePanel } from "@fkui/vue";

const {
    area = "left",
    resize = false,
    initial = undefined,
} = defineProps<{
    area: string;
    resize: boolean;
    initial?: "expanded" | "minimized";
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
        <component :is :slot="area" min="150px" max="40%" initial="150px">
            <f-minimizable-panel v-bind="Boolean(initial) ? { initial } : {}">
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

        <div slot="content" class="content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt ipsum
                tortor. Aliquam erat eros, maximus rhoncus quam ut, dignissim ullamcorper nunc.
                Morbi laoreet urna nec leo elementum faucibus. Sed at congue turpis. Proin vitae
                risus ac risus porta viverra. Aenean blandit sodales augue. Pellentesque tempor
                neque lectus, ac dictum massa consectetur non. Vivamus pharetra magna sed neque
                aliquam dictum. Donec cursus, orci eu elementum fermentum, nulla dolor facilisis
                dui, et congue lacus odio non sem. Suspendisse vel lorem sed ante tristique congue
                quis in eros. Sed quis molestie urna.
            </p>
        </div>
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
