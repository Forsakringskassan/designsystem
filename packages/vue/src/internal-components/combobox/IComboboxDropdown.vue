<script setup lang="ts">
import { type Ref, nextTick, ref, useTemplateRef, watchEffect } from "vue";
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

const listboxRef = useTemplateRef("listbox");
const activeElement: Ref<HTMLElement | undefined> = ref();

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
        const activeOptionNode = listboxRef.value?.querySelector<HTMLElement>(`#${activeOptionId}`);
        activeElement.value = activeOptionNode ?? undefined;
    }
});
</script>

<template>
    <div class="combobox">
        <i-popup-listbox
            :is-open
            :anchor="inputNode"
            :num-of-items="options.length"
            :active-element
            class="combobox__listbox"
            @close="onListboxClose"
        >
            <!-- [html-validate-disable-next prefer-native-element] -->
            <ul :id ref="listbox" role="listbox" aria-label="Förslag" class="combobox__listbox__list">
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
