<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script setup lang="ts">
import { ref, onMounted, type Ref, nextTick, computed } from "vue";
import { isEmpty } from "@fkui/logic";
import { FIcon, FTextField } from "..";
import { IPopup } from "../../internal-components";

const model = defineModel({ type: String });
const props = defineProps<{ options: string[] }>();

const rootNode: Ref<HTMLElement | null> = ref(null);
const comboboxNode: Ref<HTMLInputElement | null> = ref(null);
const buttonNode = ref(null);

const isOpen = ref(false);
const filter = ref("");
const activeOption: Ref<string | null> = ref(null);
const selectMode = ref(false);
const ignoreComboboxClick = ref(false);
const ignoreFocusOnce = ref(false);

const filteredOptions = computed(() => {
    if (isEmpty(filter.value) || selectMode.value) {
        return props.options;
    }

    const filterLowerCased = filter.value.toLowerCase();

    return props.options.filter((it) => it.toLowerCase().indexOf(filterLowerCased) === 0);
});

const hasOptions = computed(() => {
    return filteredOptions.value.length > 0;
});

const hasMultipleOptions = computed(() => {
    return filteredOptions.value.length > 1;
});

function setNextOption(): void {
    if (activeOption.value && hasMultipleOptions.value) {
        const index = filteredOptions.value.indexOf(activeOption.value);

        if (index === filteredOptions.value.length - 1) {
            activeOption.value = filteredOptions.value[0];
        } else {
            activeOption.value = filteredOptions.value[index + 1];
        }
    } else {
        activeOption.value = filteredOptions.value[0];
    }
}

function setPreviousOption(): void {
    if (activeOption.value && hasMultipleOptions.value) {
        const index = filteredOptions.value.indexOf(activeOption.value);

        if (index === 0) {
            activeOption.value = filteredOptions.value[filteredOptions.value.length - 1];
        } else {
            activeOption.value = filteredOptions.value[index - 1];
        }
    } else {
        activeOption.value = filteredOptions.value[0];
    }
}

function isPrintableCharacter(str: string): boolean {
    return Boolean(str.length === 1 && str.match(/\S| /));
}

onMounted(() => {
    comboboxNode.value = rootNode.value!.querySelector("input");
    filter.value = comboboxNode.value!.value;
});

function open(): void {
    if (hasOptions.value) {
        selectMode.value = props.options.includes(filter.value);
        activeOption.value = selectMode.value ? filter.value : null;
        isOpen.value = true;
    }
}

function onComboboxClick(): void {
    if (ignoreComboboxClick.value) {
        return;
    }

    if (!isOpen.value) {
        open();
    } else {
        isOpen.value = false;
    }
}

async function onComboboxMouseDown(e: MouseEvent): Promise<void> {
    const comboboxFocusedBeforeClick = document.activeElement === e.target;

    if (!comboboxFocusedBeforeClick) {
        ignoreComboboxClick.value = true;

        setTimeout(() => {
            ignoreComboboxClick.value = false;
        }, 100);
    }
}

async function onComboboxFocus(): Promise<void> {
    if (ignoreFocusOnce.value) {
        ignoreFocusOnce.value = false;
        return;
    }

    if (!isOpen.value) {
        open();
    }
}

// eslint-disable-next-line complexity -- poc
async function onComboboxKeyDown(event: KeyboardEvent): Promise<void> {
    let flag = false;

    if (event.ctrlKey || event.shiftKey) {
        return;
    }

    switch (event.key) {
        case "Enter":
            event.stopPropagation();
            event.preventDefault();

            if (activeOption.value) {
                filter.value = activeOption.value;

                if (model.value === activeOption.value && comboboxNode.value!.value !== model.value) {
                    model.value = comboboxNode.value!.value;
                    await nextTick();
                }

                model.value = activeOption.value;
            }

            isOpen.value = false;
            await nextTick();
            comboboxNode.value!.setSelectionRange(comboboxNode.value!.value.length, comboboxNode.value!.value.length);
            break;

        case "Down":
        case "ArrowDown":
            if (hasOptions.value) {
                if (isOpen.value) {
                    setNextOption();
                } else {
                    // eslint-disable-next-line max-depth -- poc
                    if (selectMode.value) {
                        activeOption.value = filter.value;
                    } else {
                        activeOption.value = null;
                        setNextOption();
                    }

                    isOpen.value = true;
                }
            }

            flag = true;
            break;

        case "Up":
        case "ArrowUp":
            if (hasOptions.value) {
                isOpen.value = true;

                if (activeOption.value === null && selectMode.value) {
                    activeOption.value = filter.value;
                } else {
                    setPreviousOption();
                }
            }

            flag = true;
            break;

        case "Esc":
        case "Escape":
            if (isOpen.value) {
                isOpen.value = false;
            }

            flag = true;
            break;

        case "Tab":
            isOpen.value = false;

            if (activeOption.value) {
                model.value = activeOption.value;
                filter.value = activeOption.value;
                comboboxNode.value!.setSelectionRange(model.value.length, model.value.length);
            }

            break;

        case "Home":
            comboboxNode.value!.setSelectionRange(0, 0);
            flag = true;
            break;

        case "End":
            comboboxNode.value!.setSelectionRange(comboboxNode.value!.value.length, comboboxNode.value!.value.length);
            flag = true;
            break;

        default:
            break;
    }

    if (flag) {
        event.stopPropagation();
        event.preventDefault();
    }
}

function onComboboxKeyUp(event: KeyboardEvent): void {
    let flag = false;
    const char = event.key;

    if (isPrintableCharacter(char)) {
        filter.value += char;
    }

    // this is for the case when a selection in the textbox has been deleted
    if (comboboxNode.value!.value.length < filter.value.length) {
        filter.value = comboboxNode.value!.value;
        activeOption.value = null;
        selectMode.value = false;
    }

    if (event.key === "Escape" || event.key === "Esc") {
        return;
    }

    switch (event.key) {
        case "Backspace":
            filter.value = comboboxNode.value!.value;

            if (hasOptions.value) {
                if (!isOpen.value) {
                    open();
                } else {
                    activeOption.value = null;
                }
            } else {
                isOpen.value = false;
            }

            flag = true;
            break;

        case "Left":
        case "ArrowLeft":
        case "Right":
        case "ArrowRight":
        case "Home":
        case "End":
            filter.value = comboboxNode.value!.value;
            flag = true;
            break;

        default:
            if (isPrintableCharacter(char)) {
                flag = true;

                if (hasOptions.value) {
                    // eslint-disable-next-line max-depth -- poc
                    if (!isOpen.value) {
                        open();
                    } else {
                        activeOption.value = null;
                    }
                } else {
                    isOpen.value = false;
                }
            }
            break;
    }

    if (flag) {
        event.stopPropagation();
        event.preventDefault();
    }
}

async function onButtonClick(): Promise<void> {
    if (!isOpen.value) {
        open();
    } else {
        isOpen.value = false;
    }

    ignoreFocusOnce.value = true;
    comboboxNode.value!.focus();
}

async function onOptionClick(value: string): Promise<void> {
    filter.value = value;
    selectMode.value = true;
    activeOption.value = null;
    isOpen.value = false;

    if (model.value === value && comboboxNode.value!.value !== model.value) {
        model.value = comboboxNode.value!.value;
        await nextTick();
        model.value = value;
    } else {
        model.value = value;
    }

    await nextTick();
    comboboxNode.value!.setSelectionRange(comboboxNode.value!.value.length, comboboxNode.value!.value.length);
}

function onListboxClose(): void {
    if (ignoreComboboxClick.value) {
        return;
    }

    isOpen.value = false;
    activeOption.value = null;
}
</script>

<template>
    <div ref="rootNode">
        <f-text-field
            v-model="model"
            placeholder="Skriv eller välj i listan"
            role="combobox"
            aria-autocomplete="both"
            :aria-expanded="isOpen"
            aria-controls="cb1-listbox"
            maxlength="100"
            @click="onComboboxClick"
            @focus="onComboboxFocus"
            @keydown="onComboboxKeyDown"
            @keyup="onComboboxKeyUp"
            @mousedown="onComboboxMouseDown"
        >
            <template #default> Förmån </template>
            <template #append-inner>
                <button
                    ref="buttonNode"
                    class="text-field__icon clear-button"
                    type="button"
                    aria-label="Öppna förslagen"
                    :aria-expanded="isOpen"
                    aria-controls="cb1-listbox"
                    tabindex="-1"
                    @click="onButtonClick"
                >
                    <f-icon name="arrow-down"></f-icon>
                </button>
            </template>
        </f-text-field>

        <i-popup :is-open="isOpen" :anchor="comboboxNode" :set-focus="false" inline="never" @close="onListboxClose">
            <!-- [html-validate-disable-next prefer-native-element] -->
            <ul role="listbox" aria-label="Förslag" class="combobox__listbox">
                <li
                    v-for="item in filteredOptions"
                    :key="item"
                    role="option"
                    :aria-selected="item === activeOption"
                    class="combobox__listbox__option"
                    :class="{ 'combobox__listbox__option--highlight': item === activeOption }"
                    @click.stop.prevent="onOptionClick(item)"
                >
                    {{ item }}
                </li>
            </ul>
        </i-popup>
    </div>
</template>
