<script lang="ts">
import { defineComponent } from "vue";
import { FCheckboxField, FBadge, FSelectField } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

export default defineComponent({
    name: "FBadgeLiveExample",
    components: { LiveExample, FCheckboxField, FSelectField },
    data() {
        return {
            isInverted: false,
            badgeType: "standard",
        };
    },
    computed: {
        components(): object {
            return { FBadge };
        },
        inverted(): string {
            const template = /* HTML */ ` inverted`;
            return this.isInverted ? template : "";
        },
        status(): string {
            const BadgeType = this.badgeType;
            if (this.badgeType === "standard") {
                const template = /* HTML */ ``;
                return this.badgeType ? template : "";
            } else {
                const template = /* HTML */ ` status="${BadgeType}" `;
                return this.badgeType ? template : "";
            }
        },
        template(): string {
            return /* HTML */ ` <f-badge ${this.status} ${this.inverted}> Text </f-badge> `;
        },
    },
});
</script>

<template>
    <live-example :components="components" :template="template">
        <f-select-field v-model="badgeType">
            <template #label> Typ </template>
            <option value="standard">Standard</option>
            <option value="warning">Varning</option>
            <option value="error">Fel</option>
            <option value="success">Framgång</option>
            <option value="info">Info</option>
        </f-select-field>
        <f-checkbox-field v-model="isInverted" :value="true"> Inverterad </f-checkbox-field>
    </live-example>
</template>
