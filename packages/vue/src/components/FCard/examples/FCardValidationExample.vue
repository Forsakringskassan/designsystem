<script setup lang="ts">
import { useTemplateRef } from "vue";
import { ValidationService } from "@fkui/logic";
import { FButton, FCard, FValidationForm, getElementFromVueRef } from "@fkui/vue";

const cardRef = useTemplateRef("card");
const focusRef = useTemplateRef("focus");

function setInvalid(): void {
    ValidationService.setError(getElementFromVueRef(cardRef.value), "Uppgifter saknas");
    /* eslint-disable-next-line @typescript-eslint/no-floating-promises -- technical debt */
    ValidationService.validateElement(getElementFromVueRef(cardRef.value));
}

function setValid(): void {
    ValidationService.resetState(getElementFromVueRef(cardRef.value));
    /* eslint-disable-next-line @typescript-eslint/no-floating-promises -- technical debt */
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
                    <f-button
                        class="button-group__item"
                        align-text
                        icon-left="trashcan"
                        variant="tertiary"
                    >
                        <span> Ta bort </span>
                    </f-button>

                    <f-button
                        id="focus"
                        ref="focus"
                        class="button-group__item"
                        align-text
                        icon-left="pen"
                        variant="tertiary"
                    >
                        <span>
                            Ändra
                            <span v-if="hasError" class="sr-only">
                                på kortet, det innehåller fel
                            </span>
                        </span>
                    </f-button>
                </div>
            </template>
        </f-card>

        <f-button type="submit">Simulera inskick av formulär</f-button>
    </f-validation-form>

    <f-button
        class="button-group__item"
        size="large"
        variant="tertiary"
        data-test="set-invalid"
        @click="setInvalid"
    >
        Markera kort som felaktigt
    </f-button>
    <f-button
        class="button-group__item"
        size="large"
        variant="tertiary"
        data-test="set-valid"
        @click="setValid"
    >
        Markera kort som giltigt
    </f-button>
</template>
