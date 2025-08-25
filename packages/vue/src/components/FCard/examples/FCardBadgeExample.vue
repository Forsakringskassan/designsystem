<script>
import { defineComponent } from "vue";
import { FCard, FBadge } from "@fkui/vue";

export default defineComponent({
    name: "FCardExample",
    components: { FCard, FBadge },
});
</script>

<template>
    <f-card>
        <template #badge>
            <f-badge status="success"> Nytt </f-badge>
        </template>
        <template #header="{ headingSlotClass }">
            <h3 :class="headingSlotClass">Arbete</h3>
        </template>
        <template #default>
            <p>Arbetsgivare</p>
            <p>
                Gatan 1 <br />
                123 45 Staden <br />
                Sverige
            </p>
            <p>
                <label class="label"> Telefonnummer </label>
                <span> 0109999999 </span>
            </p>
        </template>
    </f-card>
</template>
