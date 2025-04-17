<script>
import { defineComponent } from "vue";
import { FCard, FIcon } from "@fkui/vue";

export default defineComponent({
    name: "FCardExample",
    components: { FCard, FIcon },
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
                <button
                    class="button button-group__item button--tertiary button--medium button--align-text"
                    type="button"
                >
                    <f-icon name="trashcan"></f-icon>
                    <span> Ta bort </span>
                </button>

                <button
                    class="button button-group__item button--tertiary button--medium button--align-text"
                    type="button"
                >
                    <f-icon name="pen"></f-icon>
                    <span> Ändra </span>
                </button>
            </div>
        </template>
    </f-card>
</template>
