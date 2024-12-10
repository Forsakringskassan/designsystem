<script setup lang="ts">
import { nextTick, useTemplateRef, watchEffect } from "vue";
import { IPopupListbox } from "../IPopupListbox";

const { id, isOpen, options, activeOption, activeOptionId, inputNode } = defineProps<{
    id: string;
    isOpen: boolean;
    options: string[];
    activeOption: string | null;
    activeOptionId: string;
    inputNode: HTMLInputElement;
}>();

const emit = defineEmits<{ select: [option: string]; close: [] }>();

const listboxNode = useTemplateRef("listboxNode");

function isOptionActive(item: string): boolean {
    return item === activeOption;
}

function onOptionClick(value: string): void {
    emit("select", value);
}

function onListboxClose(): void {
    emit("close");
}

watchEffect(async () => {
    if (activeOption !== null) {
        await nextTick();
        const activeOptionNode = listboxNode.value?.querySelector(`#${activeOptionId}`);

        if (activeOptionNode) {
            activeOptionNode.scrollIntoView({
                behavior: "instant",
                block: "center",
            });
        }
    }
});
</script>

<template>
    <div class="combobox">
        <i-popup-listbox
            :is-open
            :anchor="inputNode"
            :num-of-items="options.length"
            class="combobox__listbox"
            @close="onListboxClose"
        >
            <!-- [html-validate-disable-next prefer-native-element] -->
            <ul :id ref="listboxNode" role="listbox" aria-label="Förslag" class="combobox__listbox__list">
                <li
                    v-for="item in options"
                    :id="isOptionActive(item) ? activeOptionId : undefined"
                    :key="item"
                    role="option"
                    :aria-selected="isOptionActive(item) ? 'true' : undefined"
                    class="combobox__listbox__option"
                    :class="{ 'combobox__listbox__option--highlight': isOptionActive(item) }"
                    @click.stop.prevent="onOptionClick(item)"
                >
                    {{ item }}
                </li>
            </ul>
        </i-popup-listbox>
    </div>
</template>
