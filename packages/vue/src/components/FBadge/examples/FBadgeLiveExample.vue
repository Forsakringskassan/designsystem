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

<script setup lang="ts">
import { FCheckboxField, FBadge, FSelectField } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { computed, ref } from "vue";

const isInverted = ref();
const badgeType = ref();

const components = computed<object>(() => FBadge);

const inverted = computed<string>(() => {
    const template = `inverted`;

    return isInverted.value ? template : "";
});

const status = computed<string>(() => {
    const BadgeType = badgeType.value;
    if (badgeType.value === "standard") {
        const template = ``;
        return badgeType.value ? template : "";
    } else {
        const template = ` status="${BadgeType}" `;
        return badgeType.value ? template : "";
    }
});

const template = computed<string>(() => {
    return ` <f-badge ${status.value} ${inverted.value}> Text </f-badge> `;
});
</script>
