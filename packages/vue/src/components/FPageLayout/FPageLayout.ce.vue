<script setup lang="ts">
import { computed, nextTick, onMounted, ref, useTemplateRef } from "vue";
import { useMutationObserver } from "@vueuse/core";
import { VAR_NAME_AREA, VAR_NAME_ATTACH_PANEL, VAR_NAME_DIRECTION } from "./constants";
import "./default-layout";
import { defineLayout } from "./define-layout";
import { getLayout } from "./layout-register";

const { layout } = defineProps<{ layout: string }>();
const emit = defineEmits<{
    update: [];
}>();
const rootRef = useTemplateRef("root");
const slotNames = ref<string[]>([]);
const stubLayout = defineLayout({
    name: "",
    areas: {},
});

const layoutDefinition = computed(() => getLayout(layout) ?? stubLayout);
const part = computed(() => `grid ${layout}`);

function getSlotNames(element: HTMLElement): string[] {
    return Array.from(element.querySelectorAll(":scope > [slot]"), (it) => it.slot);
}

const resolvedSlots = computed(() => {
    return slotNames.value
        .filter((it) => Boolean(layoutDefinition.value.areas[it]))
        .map((slotName) => {
            const area = layoutDefinition.value.areas[slotName];
            const { attachPanel: attach, direction, scroll } = area;
            const style = [
                `grid-area: ${slotName};`,
                `${VAR_NAME_AREA}: "${slotName}";`,
                `${VAR_NAME_ATTACH_PANEL}: "${attach}";`,
                `${VAR_NAME_DIRECTION}: "${direction}";`,
            ].join("\n");

            return {
                name: slotName,
                part: `area ${slotName}`,
                direction,
                scroll,
                style,
            };
        });
});

onMounted(() => {
    if (rootRef.value) {
        const host = (rootRef.value.getRootNode() as ShadowRoot).host as HTMLElement;
        slotNames.value = getSlotNames(host);

        /* allow slots to settle before we dispatch the update event otherwise
         * the updated data will not yet be available */
        /* eslint-disable-next-line @typescript-eslint/no-floating-promises -- technical debt */
        nextTick(() => {
            emit("update");
        });

        useMutationObserver(
            host,
            () => {
                slotNames.value = getSlotNames(host);
                /* eslint-disable-next-line @typescript-eslint/no-floating-promises -- technical debt */
                nextTick(() => {
                    emit("update");
                });
            },
            {
                childList: true,
            },
        );
    }
});
</script>

<template>
    <div ref="root" class="page-layout" :part>
        <!-- [html-validate-disable-next no-inline-style] -->
        <div
            v-for="item in resolvedSlots"
            :key="item.name"
            class="page-layout__area"
            :part="item.part"
            :data-direction="item.direction"
            :style="item.style"
        >
            <slot :name="item.name"></slot>
        </div>
    </div>
</template>

<style lang="scss">
@use "FPageLayout";
</style>
