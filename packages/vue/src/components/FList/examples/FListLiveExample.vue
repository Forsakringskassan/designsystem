<script lang="ts">
import { defineComponent } from "vue";
import { FCheckboxField, FList, FFieldset, FRadioField, FSelectField } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

enum ListOption {
    STATIC = "static",
    CHECKBOX = "checkbox",
    LINK = "link",
}

export default defineComponent({
    name: "FListLiveExample",
    components: { LiveExample, FCheckboxField, FFieldset, FRadioField, FSelectField },
    data() {
        return {
            isEmpty: false,
            hasCustomEmptyText: false,
            listOption: ListOption.STATIC,
        };
    },
    computed: {
        livedata(): object {
            return {
                selectedItems: [],
                items: [
                    { id: 1, frukt: "Banan" },
                    { id: 2, frukt: "Äpple" },
                    { id: 3, frukt: "Apelsin" },
                ],
            };
        },
        components(): object {
            return {
                FList,
            };
        },
        isSelectable(): boolean {
            return this.listOption === ListOption.CHECKBOX || this.listOption === ListOption.LINK;
        },
        model(): string {
            return this.isSelectable ? `v-model="selectedItems"` : "";
        },
        items(): string {
            return this.isEmpty ? `:items="[]"` : `:items="items"`;
        },
        selectable(): string {
            return this.isSelectable ? "selectable" : "";
        },
        checkbox(): string {
            return this.listOption === ListOption.LINK ? `:checkbox="false"` : "";
        },
        empty(): string {
            const template = /* HTML */ `
                <template #empty>
                    <em>Det finns inga frukter.</em>
                </template>
            `;
            return this.isEmpty && this.hasCustomEmptyText ? template : "";
        },
        screenreader(): string {
            const template = /* HTML */ `<template #screenreader="{ item }">
                Frukt {{ item.frukt }}
            </template>`;
            return this.listOption === ListOption.CHECKBOX ? template : "";
        },
        template(): string {
            return /* HTML */ `
                <f-list
                    ${this.model}
                    key-attribute="id"
                    ${this.items}
                    ${this.selectable}
                    ${this.checkbox}
                >
                    <template #default="{ item }">
                        <h3>{{ item.frukt }}</h3>
                    </template>
                    ${this.empty} ${this.screenreader}
                </f-list>
            `;
        },
    },
});
</script>

<template>
    <live-example :components="components" :template="template" :livedata="livedata">
        <f-select-field v-model="listOption">
            <template #label> Interaktivitet </template>
            <option value="static">Statisk</option>
            <option value="checkbox">Interaktiv med kryssruta</option>
            <option value="link">Interaktiv med länk</option>
        </f-select-field>
        <f-checkbox-field v-model="isEmpty" :value="true"> Tom lista </f-checkbox-field>
        <f-fieldset v-if="isEmpty" name="radio-empty-text">
            <template #label> Meddelande för tom lista </template>
            <f-radio-field v-model="hasCustomEmptyText" :value="false">
                Standardmeddelande
            </f-radio-field>
            <f-radio-field v-model="hasCustomEmptyText" :value="true">
                Eget meddelande
            </f-radio-field>
        </f-fieldset>
    </live-example>
</template>
