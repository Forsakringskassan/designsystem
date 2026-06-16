<script setup lang="ts">
import { ref } from "vue";
import {
    FButton,
    FCard,
    FCheckboxField,
    FDatepickerField,
    FFieldset,
    FMessageBox,
    FRadioField,
    FSelectField,
    FTextField,
} from "../components";

const namn = ref("World");
</script>

<template>
    <div class="formcontainer">
        <h1>Avstånd och gruppering</h1>

        <f-text-field v-model="namn" v-validation.required maxlength="100"> Förnamn </f-text-field>
        <f-text-field v-model="namn" v-validation.required maxlength="100"> Efternamn </f-text-field>

        <div>
            <h2>Arbetsgivare</h2>
            <div class="listItems">
                <f-card>
                    <template #header="{ headingSlotClass }">
                        <h3 :class="headingSlotClass">Arbete</h3>
                    </template>

                    <template #footer>
                        <div class="button-group">
                            <f-button variant="tertiary" align-text class="button-group__item" icon-left="pen">
                                Ändra
                            </f-button>
                            <f-button variant="tertiary" align-text class="button-group__item" icon-left="trashcan">
                                Ta bort
                            </f-button>
                        </div>
                    </template>
                </f-card>

                <f-card>
                    <template #header="{ headingSlotClass }">
                        <h3 :class="headingSlotClass">Arbete</h3>
                    </template>
                    <template #default>
                        <p>Arbetsgivare</p>

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
                            <f-button variant="tertiary" align-text class="button-group__item" icon-left="trashcan">
                                Ta bort
                            </f-button>
                        </div>
                    </template>
                </f-card>
            </div>
        </div>

        <f-fieldset name="barn-over-18" horizontal>
            <template #label> Bor det barn som har fyllt 18 år i bostaden? </template>

            <f-radio-field :value="true"> Ja </f-radio-field>
            <f-radio-field :value="false"> Nej </f-radio-field>
        </f-fieldset>

        <f-fieldset name="broschyrer-tooltip">
            <template #label> Broschyrer </template>

            <f-checkbox-field value="Till alla som väntar eller just fått barn">
                Till alla som väntar eller just fått barn
            </f-checkbox-field>

            <f-checkbox-field value="Till alla barnfamiljer"> Till alla barnfamiljer </f-checkbox-field>

            <f-checkbox-field value="Rätt beslut och rätt ersättning">
                Rätt beslut och rätt ersättning
            </f-checkbox-field>
        </f-fieldset>

        <f-fieldset>
            <template #label> Anställningsperiod </template>
            <f-datepicker-field>
                <template #default> Startdatum </template>
            </f-datepicker-field>
            <f-datepicker-field>
                <template #default> Slutdatum </template>
            </f-datepicker-field>
        </f-fieldset>

        <f-text-field v-validation.required maxlength="100"> Personnummer </f-text-field>

        <f-message-box type="info">
            <template #default="{ headingSlotClass }">
                <h3 :class="headingSlotClass">Rubrik</h3>
                <p>Brödtext</p>
            </template>
        </f-message-box>

        <f-fieldset>
            <template #label> Inneboende </template>
            <f-text-field v-model="namn" v-validation.required maxlength="100"> Förnamn </f-text-field>
            <f-text-field v-model="namn" v-validation.required maxlength="100"> Efternamn </f-text-field>
            <f-datepicker-field>
                <template #default> Inflyttningsdatum </template>
            </f-datepicker-field>
            <f-message-box type="warning" layout="short"> Kort meddelande </f-message-box>
            <f-select-field id="dropplista" v-model="selectfieldtest">
                <template #label> Relation </template>

                <option disabled hidden value="">Välj…</option>
                <option value="1">Vän</option>
                <option value="2">Släkting</option>
                <option value="3">Oklart</option>
            </f-select-field>
        </f-fieldset>
        <f-fieldset v-validation.required name="chips" chip>
            <template #label> Etikett-rubrik </template>

            <f-checkbox-field v-model="choices" value="Ett alternativ"> Ett alternativ </f-checkbox-field>

            <f-checkbox-field v-model="choices" value="Alternativ 2"> Alternativ 2 </f-checkbox-field>

            <f-checkbox-field v-model="choices" value="Ytterligare alternativ">
                Ytterligare alternativ
            </f-checkbox-field>

            <f-checkbox-field v-model="choices" value="Sista"> Sista </f-checkbox-field>
        </f-fieldset>
    </div>
</template>

<style>
.formcontainer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0.5rem;

    --f-margin-component-bottom: 0;

    :last-child:not(:first-child) {
        margin-bottom: 0;
    }
}

.listItems {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .card {
        margin-bottom: 0;
        margin-top: 0;
    }
}
</style>
