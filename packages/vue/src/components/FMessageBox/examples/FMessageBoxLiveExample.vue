<script lang="ts">
import { defineComponent } from "vue";
import { FCheckboxField, FFieldset, FMessageBox, FRadioField } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

export default defineComponent({
    name: "MessageBoxLiveExample",
    components: { FCheckboxField, FFieldset, FRadioField, LiveExample },
    data() {
        return {
            messageType: "info",
            shortLayout: false,
        };
    },
    computed: {
        components(): object {
            return { FMessageBox };
        },
        template(): string {
            if (this.shortLayout) {
                return /* HTML */ `
                    <f-message-box type="${this.messageType}" layout="short">
                        Kort meddelande
                    </f-message-box>
                `;
            } else {
                return /* HTML */ `
                    <f-message-box type="${this.messageType}">
                        <template #default="{ headingSlotClass }">
                            <h3 :class="headingSlotClass">Rubrik</h3>
                            <p>Brödtext</p>
                        </template>
                    </f-message-box>
                `;
            }
        },
    },
});
</script>

<template>
    <live-example :components="components" :template="template">
        <f-fieldset name="radio-message-type">
            <template #label> Typ </template>
            <f-radio-field v-model="messageType" value="info"> Information </f-radio-field>
            <f-radio-field v-model="messageType" value="warning"> Varning </f-radio-field>
            <f-radio-field v-model="messageType" value="error"> Fel </f-radio-field>
            <f-radio-field v-model="messageType" value="success">
                Positiv återkoppling
            </f-radio-field>
        </f-fieldset>
        <f-checkbox-field v-model="shortLayout" :value="true"> Kort meddelande </f-checkbox-field>
    </live-example>
</template>
