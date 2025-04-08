<script lang="ts">
import { defineComponent } from "vue";
import { FCheckboxField, FFieldset, FRadioField, FIcon, FSelectField } from "@fkui/vue";
import { LiveExample, createElement } from "@forsakringskassan/docs-live-example";

export default defineComponent({
    name: "AnchorLiveExample",
    components: { LiveExample, FCheckboxField, FFieldset, FRadioField, FSelectField },
    data() {
        return {
            linkType: "standard",
            isDiscrete: false,
            fileType: "pdf",
        };
    },
    computed: {
        isDocument(): boolean {
            return this.linkType === `document`;
        },
        components(): object {
            return { FIcon };
        },
        content(): string[] {
            const text = "Länktext";
            const icon = this.fileType;
            switch (this.linkType) {
                case "standard":
                    return [text];
                case "document":
                    return [`<f-icon name="${icon}"></f-icon>`, text];
                case "external":
                    return [
                        text,
                        `<f-icon name="new-window"></f-icon>`,
                        `<span class="sr-only">öppnas i ny flik</span>`,
                    ];
                default:
                    return [text];
            }
        },
        template(): string {
            const { isDiscrete } = this;
            const isExternal = this.linkType === "external";
            return createElement(
                "a",
                {
                    class: ["anchor", "anchor--block", isDiscrete ? "anchor--discrete" : undefined],
                    href: isExternal ? "https://example.net/" : "#",
                    target: isExternal ? "_blank" : undefined,
                },
                this.content,
            );
        },
    },
});
</script>

<template>
    <live-example :components :template>
        <f-fieldset name="radio-link-type">
            <template #label> Typ av länk </template>
            <f-radio-field v-model="linkType" value="standard"> Standard </f-radio-field>
            <f-radio-field v-model="linkType" value="document"> Dokument </f-radio-field>
            <f-radio-field v-model="linkType" value="external"> Ny flik </f-radio-field>
        </f-fieldset>
        <f-select-field v-if="isDocument" v-model="fileType">
            <template #label> Filtyp </template>
            <option value="pdf">PDF</option>
            <option value="doc">Doc</option>
            <option value="pic">Bild</option>
        </f-select-field>
        <f-checkbox-field v-model="isDiscrete" :value="true"> Diskret länk </f-checkbox-field>
    </live-example>
</template>
