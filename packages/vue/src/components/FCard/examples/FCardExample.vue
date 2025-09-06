<script>
import { defineComponent } from "vue";
import { FCard, FButton } from "@fkui/vue";

export default defineComponent({
    name: "FCardExample",
    components: { FCard, FButton },
});
</script>

<template>
    <f-card>
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
        <template #footer>
            <div class="button-group">
                <f-button variant="tertiary" align-text class="button-group__item" icon-left="pen">
                    Ändra
                </f-button>
                <f-button
                    variant="tertiary"
                    align-text
                    class="button-group__item"
                    icon-left="trashcan"
                >
                    Ta bort
                </f-button>
            </div>
        </template>
    </f-card>
</template>
