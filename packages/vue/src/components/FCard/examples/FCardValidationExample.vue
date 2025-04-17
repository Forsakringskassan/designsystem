<script setup lang="ts">
import { ValidationService } from "@fkui/logic";
import { useTemplateRef } from "vue";
import { FCard, FIcon, FValidationForm, getElementFromVueRef } from "@fkui/vue";

const cardRef = useTemplateRef("card");
const focusRef = useTemplateRef("focus");

function setInvalid(): void {
    ValidationService.setError(getElementFromVueRef(cardRef.value), "Uppgifter saknas");
    ValidationService.validateElement(getElementFromVueRef(cardRef.value));
}

function setValid(): void {
    ValidationService.resetState(getElementFromVueRef(cardRef.value));
    ValidationService.validateElement(getElementFromVueRef(cardRef.value));
}
</script>

<template>
    <f-validation-form :use-error-list="false">
        <f-card ref="card" v-validation :focus-ref>
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
            <template #footer="{ hasError }">
                <div class="button-group">
                    <button
                        class="button button-group__item button--tertiary button--medium button--align-text"
                        type="button"
                    >
                        <f-icon name="trashcan"></f-icon>
                        <span> Ta bort </span>
                    </button>

                    <button
                        id="focus"
                        ref="focus"
                        class="button button-group__item button--tertiary button--medium button--align-text"
                        type="button"
                    >
                        <f-icon name="pen"></f-icon>
                        <span>
                            Ändra
                            <span v-if="hasError" class="sr-only">
                                på kortet, det innehåller fel
                            </span>
                        </span>
                    </button>
                </div>
            </template>
        </f-card>

        <button type="submit" class="button button--primary">Simulera inskick av formulär</button>
    </f-validation-form>

    <button
        type="button"
        class="button button-group__item button--tertiary button--large"
        data-test="set-invalid"
        @click="setInvalid"
    >
        Markera kort som felaktigt
    </button>
    <button
        type="button"
        class="button button-group__item button--tertiary button--large"
        data-test="set-valid"
        @click="setValid"
    >
        Markera kort som giltigt
    </button>
</template>
