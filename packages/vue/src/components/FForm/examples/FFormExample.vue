<template>
    <div>
        <h2>Exempel-alternativ</h2>
        <p>Glöm inte att ladda om sidan om du ändrar alternativen.</p>

        <h3>Formulär-texter:</h3>
        <div class="row">
            <div class="col col--md-6">
                <f-text-field
                    v-model="exampleOptions.errorMessageTitleForm"
                    v-validation.maxLength="{ maxLength: { length: 100 } }"
                >
                    Titel för samlingsfel i Formulär:
                </f-text-field>
            </div>
            <div class="col col--md-6">
                <f-text-field
                    v-model="exampleOptions.errorMessageForm"
                    v-validation.maxLength="{ maxLength: { length: 100 } }"
                >
                    Ledtext för samlingsfel i Formulär:
                </f-text-field>
            </div>
        </div>
        <div class="row">
            <div class="col col--md-6">
                <f-text-field
                    v-model="exampleOptions.errorMessageFormStep"
                    v-validation.maxLength="{ maxLength: { length: 100 } }"
                >
                    Ledtext för fellista i Formulärsteg:
                </f-text-field>
            </div>
            <div class="col col--md-6">
                <f-text-field
                    v-model="exampleOptions.dataMissing"
                    v-validation.maxLength="{ maxLength: { length: 100 } }"
                >
                    Text för när uppgifter/data saknas:
                </f-text-field>
            </div>
        </div>
        <h3>Formulär-alternativ:</h3>
        <f-fieldset name="form-options-checkbox-group">
            <template #label> Felmeddelandevisning </template>

            <f-checkbox-field v-model="exampleOptions.displayError" :value="true">
                Visa samlingsfel
            </f-checkbox-field>
        </f-fieldset>
        <f-fieldset name="form-error-scroll-radio-group" horizontal>
            <template #label> Fokusscroll vid valideringsfel: </template>

            <f-radio-field v-model="exampleOptions.errorScroll" :value="'center'">
                Center
            </f-radio-field>
            <f-radio-field v-model="exampleOptions.errorScroll" :value="'top'"> Top </f-radio-field>
        </f-fieldset>
        <f-fieldset name="form-number-of-steps-radio-group" horizontal>
            <template #label> Antal steg i exempel: </template>

            <f-radio-field v-model="exampleOptions.numberOfSteps" :value="1"> 1 </f-radio-field>
            <f-radio-field v-model="exampleOptions.numberOfSteps" :value="2"> 2 </f-radio-field>
        </f-fieldset>

        <!-- ALL KOD OVAN ÄR TILL FÖR EXEMPEL. -->

        <hr />

        <h2>🍰 Frukt och sötsaksbidraget</h2>
        <f-form
            id="fruits-and-sweets-form"
            :display-error="exampleOptions.displayError"
            :error-scroll="exampleOptions.errorScroll"
            @submit="onSubmit"
        >
            <template #error-message="{ slotClass }">
                <h2 :class="slotClass">{{ exampleOptions.errorMessageTitleForm }}</h2>
                <p id="form-error-message">{{ exampleOptions.errorMessageForm }}</p>
            </template>

            <f-form-step v-if="exampleOptions.numberOfSteps > 0" id="information-form-step">
                <template #header="{ slotClass, isValid }">
                    <h2 :class="slotClass">1. Uppgifter</h2>
                    <span v-if="isValid" class="sr-only"> Steget är korrekt ifyllt. </span>
                </template>

                <template v-if="exampleOptions.errorMessageFormStep" #error-message>
                    <p>{{ exampleOptions.errorMessageFormStep }}</p>
                </template>

                <template #default="{ toggleIsOpen, isOpen, isAnyFieldTouched }">
                    <p>
                        Här fyller du i dina uppgifter som kommer användas som hjälp inför det
                        slutgiltiga beslutet. Uppgifterna här är generella och används för att få en
                        uppfattning av dig som sökande.
                    </p>

                    <div v-show="isOpen">
                        <f-text-field
                            v-model="formData.firstName"
                            v-validation.required.minLength.maxLength="{
                                minLength: { length: 1 },
                                maxLength: { length: 40 },
                            }"
                        >
                            Förnamn
                        </f-text-field>
                        <f-text-field
                            v-model="formData.lastName"
                            v-validation.required.minLength.maxLength="{
                                minLength: { length: 1 },
                                maxLength: { length: 100 },
                            }"
                        >
                            Efternamn
                        </f-text-field>
                        <f-email-text-field
                            v-model="formData.email"
                            v-validation.required
                        ></f-email-text-field>
                        <f-organisationsnummer-text-field
                            v-model="formData.orgnummer"
                            v-validation.required
                        ></f-organisationsnummer-text-field>
                        <f-phone-text-field
                            v-model="formData.phone"
                            v-validation.required
                        ></f-phone-text-field>
                        <f-select-field v-model="formData.age" v-validation.required>
                            <template #label> Ålder </template>
                            <option disabled hidden value="">Välj ålder...</option>
                            <option v-for="age of 200" :key="age" :value="age">
                                {{ age }}
                            </option>
                        </f-select-field>
                        <f-fieldset v-validation.required name="martial-status-radio-group">
                            <template #label> Civiltillstånd </template>

                            <template #tooltip>
                                <f-tooltip screen-reader-text="Läs mer om civiltillstånd">
                                    <template #header> Civiltillstånd </template>
                                    <template #body>
                                        Avser vilket registrerat civiltillstånd som finns i
                                        Skatteverkets uppgifter.
                                    </template>
                                </f-tooltip>
                            </template>

                            <template #default="{ indentClass }">
                                <f-radio-field v-model="formData.martialStatus" value="SINGEL">
                                    Singel
                                </f-radio-field>
                                <f-radio-field v-model="formData.martialStatus" value="SAMBO">
                                    Sambo
                                </f-radio-field>
                                <f-radio-field v-model="formData.martialStatus" value="GIFT">
                                    Gift
                                </f-radio-field>
                                <f-radio-field v-model="formData.martialStatus" value="ANNAT">
                                    Annat
                                </f-radio-field>

                                <f-fieldset
                                    v-if="formData.martialStatus === 'ANNAT'"
                                    :class="indentClass"
                                    name="martial-status-other-radio-group"
                                    @change="onChangeResetMartialStatusOther"
                                >
                                    <template #label></template>
                                    <f-text-field
                                        v-model="formData.martialStatusOther"
                                        v-validation.required.minLength.maxLength="{
                                            minLength: { length: 1 },
                                            maxLength: { length: 100 },
                                            required: {
                                                enabled: formData.martialStatus === 'ANNAT',
                                            },
                                        }"
                                    >
                                        Annat
                                        <template #description="{ descriptionClass }">
                                            <span :class="descriptionClass">
                                                Fyll i vad "Annat" betyder för dig.
                                            </span>
                                        </template>
                                    </f-text-field>
                                </f-fieldset>

                                <f-radio-field
                                    v-model="formData.martialStatus"
                                    value="VILL_INTE_SVARA"
                                >
                                    Vill inte svara
                                </f-radio-field>
                            </template>
                        </f-fieldset>
                    </div>

                    <div v-show="!isOpen">
                        <div class="row">
                            <div class="col col--md-6">
                                <f-static-field>
                                    <template #label> Förnamn </template>
                                    {{ formData.firstName || exampleOptions.dataMissing }}
                                </f-static-field>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col--md-6">
                                <f-static-field>
                                    <template #label> Efternamn </template>
                                    {{ formData.lastName || exampleOptions.dataMissing }}
                                </f-static-field>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col--md-6">
                                <f-static-field>
                                    <template #label> Mejladress </template>
                                    {{ formData.email || exampleOptions.dataMissing }}
                                </f-static-field>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col--md-6">
                                <f-static-field>
                                    <template #label> Organisationsnummer </template>
                                    {{ formData.orgnummer || exampleOptions.dataMissing }}
                                </f-static-field>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col--md-6">
                                <f-static-field>
                                    <template #label> Telefonnummer </template>
                                    {{ formData.phone || exampleOptions.dataMissing }}
                                </f-static-field>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col--md-6">
                                <f-static-field>
                                    <template #label> Ålder </template>
                                    {{ formData.age || exampleOptions.dataMissing }}
                                </f-static-field>
                            </div>
                        </div>
                        <f-static-field>
                            <template #label> Civiltillstånd </template>
                            {{ martialStatusText || exampleOptions.dataMissing }}
                        </f-static-field>
                    </div>

                    <f-form-step-button
                        :is-open="isOpen"
                        :is-any-field-touched="isAnyFieldTouched"
                        @click="toggleIsOpen"
                    ></f-form-step-button>
                </template>
            </f-form-step>
            <example-kostnad
                v-for="(cost, index) in costs"
                :key="index"
                :form-step-id="index"
                :kostnad="cost"
            ></example-kostnad>
            <button
                type="button"
                class="button button-group__item button--discrete"
                @click="laggTillContainer"
            >
                <f-icon name="plus" class="button__icon"></f-icon>
                Lägg till container
            </button>
            <f-form-step
                v-if="exampleOptions.numberOfSteps > 1"
                id="consumption-form-step"
                :has-arrow="false"
                is-last-step
            >
                <template #header="{ slotClass, isValid }">
                    <h2 :class="slotClass">{{ containerTitle }}</h2>
                    <span v-if="isValid" class="sr-only"> Steget är korrekt ifyllt. </span>
                </template>

                <template v-if="exampleOptions.errorMessageFormStep" #error-message>
                    <p>{{ exampleOptions.errorMessageFormStep }}</p>
                </template>

                <template #default="{ toggleIsOpen, isOpen, isAnyFieldTouched }">
                    <p>
                        Här fyller du i och gör val om vad för frukter och sötsaker du brukar
                        konsumera. Med "brukar" så syftar vi på vad du konsumerar under vardagar och
                        helger när du som vanligt jobbar, studerar eller gör någon annan
                        sysselsättning på mer än 50 procent. Exkludera vad du konsumerar under
                        ledighet.
                    </p>

                    <div v-show="isOpen">
                        <div class="row">
                            <div class="col col--md-6">
                                <f-select-field
                                    v-model="formData.fruitsPerWeek"
                                    v-validation.required
                                >
                                    <template #label> Frukt </template>

                                    <template #description="{ descriptionClass }">
                                        <span :class="descriptionClass">
                                            Fyll i antal gånger du konsumerar frukt under en vecka.
                                        </span>
                                    </template>

                                    <option v-for="number in 100" :key="number" :value="number">
                                        {{ number }} {{ number === 1 ? "gång" : "gånger" }}
                                    </option>
                                </f-select-field>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col--md-6">
                                <f-select-field
                                    v-model="formData.sweetsPerWeek"
                                    v-validation.required
                                >
                                    <template #label> Sötsaker </template>

                                    <template #description="{ descriptionClass }">
                                        <span :class="descriptionClass">
                                            Fyll i antal gånger du konsumerar sötsaker under en
                                            vecka.
                                        </span>
                                    </template>

                                    <option v-for="number in 100" :key="number" :value="number">
                                        {{ number }} {{ number === 1 ? "gång" : "gånger" }}
                                    </option>
                                </f-select-field>
                            </div>
                        </div>
                        <f-fieldset v-validation.required name="consumed-fruits-radio-group">
                            <template #label> Vilka frukter brukar du konsumera? </template>

                            <f-checkbox-field
                                v-for="fruit in renderData.fruits"
                                :key="fruit.value"
                                v-model="formData.consumedFruits"
                                :value="fruit.value"
                            >
                                {{ fruit.text }}
                            </f-checkbox-field>
                        </f-fieldset>
                        <f-fieldset v-validation.required name="consumed-sweets-radio-group">
                            <template #label> Vilka sötsaker brukar du konsumera? </template>

                            <f-checkbox-field
                                v-for="sweet in renderData.sweets"
                                :key="sweet.value"
                                v-model="formData.consumedSweets"
                                :value="sweet.value"
                            >
                                {{ sweet.text }}
                            </f-checkbox-field>
                        </f-fieldset>
                        <f-textarea-field
                            v-model="formData.consumptionDescription"
                            :maxlength="400"
                            :soft-limit="150"
                        >
                            Beskrivning av konsumption (frivilligt)

                            <template #description="{ descriptionClass, discreteDescriptionClass }">
                                <span :class="descriptionClass">
                                    Fyll i hur du uppfattar din konsumption av frukter och sötsaker.
                                    Det kan till exempel vara hur den förgyller din vardag eller hur
                                    det ställer till med problem, förhoppningsvis det förstnämnda.
                                </span>
                                <span :class="discreteDescriptionClass">(Max 400 tecken)</span>
                            </template>
                        </f-textarea-field>
                    </div>

                    <div v-show="!isOpen">
                        <f-static-field>
                            <template #label> Frukt konsumption </template>

                            {{ fruitsPerWeekText || exampleOptions.dataMissing }}
                        </f-static-field>
                        <f-static-field>
                            <template #label> Sötsak konsumption </template>

                            {{ sweetsPerWeekText || exampleOptions.dataMissing }}
                        </f-static-field>
                        <f-static-field>
                            <template #label> Vilka frukter brukar du konsumera? </template>

                            {{ consumedFruitsText || exampleOptions.dataMissing }}
                        </f-static-field>
                        <f-static-field>
                            <template #label> Vilka sötsaker brukar du konsumera? </template>

                            {{ consumedSweetsText || exampleOptions.dataMissing }}
                        </f-static-field>

                        <f-static-field>
                            <template #label> Beskrivning av komsuption </template>

                            {{ formData.consumptionDescription || exampleOptions.dataMissing }}
                        </f-static-field>
                    </div>
                    <f-form-step-button
                        :is-open="isOpen"
                        :is-any-field-touched="isAnyFieldTouched"
                        additional-screenreader-text="steg för konsumption"
                        @click="toggleIsOpen"
                    ></f-form-step-button>
                </template>
            </f-form-step>

            <f-fieldset v-validation.required name="signing-checkbox-group">
                <template #label> <h3>Underskrift</h3> </template>

                <f-checkbox-field v-model="formData.hasSigned" :value="true">
                    Jag bekräftar på heder och samvete att alla uppgifter jag lämnat stämmer och är
                    korrekt ifyllda.
                </f-checkbox-field>
            </f-fieldset>

            <div class="button-group">
                <button class="button-group__item button button--primary" type="submit">
                    Signera
                </button>

                <button
                    class="button-group__item button button--secondary"
                    type="button"
                    @click="onClickClearFormData"
                >
                    Rensa formulärdata
                </button>
            </div>
        </f-form>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import {
    FCheckboxField,
    FEmailTextField,
    FForm,
    FFormStep,
    FFormStepButton,
    FIcon,
    FOrganisationsnummerTextField,
    FPhoneTextField,
    FFieldset,
    FRadioField,
    FSelectField,
    FStaticField,
    FTextField,
    FTextareaField,
} from "@fkui/vue";
import ExampleKostnad from "./ExampleKostnad.vue";

const EXAMPLE_OPTIONS_KEY = "FKUI_VUE_FORM_OPTIONS_EXAMPLE";
const FORM_DATA_KEY = "FKUI_VUE_FORM_DATA_EXAMPLE";

export default defineComponent({
    name: "FFormExample",
    components: {
        FCheckboxField,
        FForm,
        FFormStep,
        FFormStepButton,
        FFieldset,
        FIcon,
        FRadioField,
        FSelectField,
        FStaticField,
        FTextareaField,
        FTextField,
        FEmailTextField,
        FOrganisationsnummerTextField,
        FPhoneTextField,
        ExampleKostnad,
    },
    data() {
        return {
            costs: [],
            exampleOptions: {
                errorMessageTitleForm: "Innan du går vidare...",
                errorMessageForm: "Du har några fel, glöm inte att titta i följande steg:",
                errorMessageFormStep: "",
                displayError: true,
                errorScroll: "center",
                numberOfSteps: 2,
                dataMissing: "Information saknas.",
            },

            renderData: {
                fruits: [
                    { value: "BANAN", text: "Banan 🍌" },
                    { value: "ÄPPLE", text: "Äpple 🍏" },
                    { value: "MANDARIN", text: "Mandarin 🍊" },
                    { value: "ANANAS", text: "Ananas 🍍" },
                    { value: "VATTENMELON", text: "Vattenmelon 🍉" },
                    { value: "ANDRA_FRUKTER", text: "Andra frukter" },
                ],
                sweets: [
                    { value: "CHOKLAD", text: "Choklad 🍫" },
                    { value: "MUNK", text: "Munk 🍩" },
                    { value: "MJUKGLASS", text: "Mjukglass 🍦" },
                    { value: "KAKA", text: "Kaka 🍪" },
                    { value: "LÖSGODIS", text: "Lösgodis 🍬" },
                    { value: "ANDRA_SÖTSAKER", text: "Andra sötsaker" },
                ],
            },

            formData: {
                firstName: "",
                lastName: "",
                email: "",
                orgnummer: "",
                phone: "",
                age: "",
                martialStatus: "",
                martialStatusOther: "",
                fruitsPerWeek: "",
                sweetsPerWeek: "",
                consumedFruits: [],
                consumedSweets: [],
                consumptionDescription: "",
                hasSigned: false,
            },
        };
    },
    computed: {
        containerTitle() {
            return `${this.costs.length + 2}. Konsumtion`;
        },
        martialStatusText() {
            const martialStatuses = {
                SINGEL: "Singel",
                SAMBO: "Sambo",
                GIFT: "Gift",
                ANNAT: `Annat, ${this.formData.martialStatusOther}`,
                VILL_INTE_SVARA: "Vill inte svara",
            };
            return martialStatuses[this.formData.martialStatus];
        },
        fruitsPerWeekText() {
            const suffix = this.formData.fruitsPerWeek === 1 ? "gång" : "gånger";
            return this.formData.fruitsPerWeek
                ? `${this.formData.fruitsPerWeek} ${suffix}`
                : undefined;
        },
        sweetsPerWeekText() {
            const suffix = this.formData.sweetsPerWeek === 1 ? "gång" : "gånger";
            return this.formData.sweetsPerWeek
                ? `${this.formData.sweetsPerWeek} ${suffix}`
                : undefined;
        },
        consumedFruitsText() {
            return this.formData.consumedFruits.length > 0
                ? this.renderData.fruits
                      .filter((fruit) => this.formData.consumedFruits.includes(fruit.value))
                      .map((fruit) => fruit.text)
                      .join(", ")
                : undefined;
        },
        consumedSweetsText() {
            return this.formData.consumedSweets.length > 0
                ? this.renderData.sweets
                      .filter((sweet) => this.formData.consumedSweets.includes(sweet.value))
                      .map((sweet) => sweet.text)
                      .join(", ")
                : undefined;
        },
    },
    watch: {
        exampleOptions: {
            deep: true,
            handler() {
                localStorage.setItem(EXAMPLE_OPTIONS_KEY, JSON.stringify(this.exampleOptions));
            },
        },
        formData: {
            deep: true,
            handler() {
                localStorage.setItem(FORM_DATA_KEY, JSON.stringify(this.formData));
            },
        },
    },
    created() {
        const exampleOptions = localStorage.getItem(EXAMPLE_OPTIONS_KEY);
        if (exampleOptions) {
            Object.assign(this.exampleOptions, JSON.parse(exampleOptions));
        }
        const formData = localStorage.getItem(FORM_DATA_KEY);
        if (formData) {
            Object.assign(this.formData, JSON.parse(formData));
        }
    },
    methods: {
        laggTillContainer() {
            this.costs.push({
                kostnad: "",
                belopp: undefined,
                beskrivning: "",
            });
        },
        onChangeResetMartialStatusOther() {
            if (this.formData.martialStatus !== "ANNAT") {
                this.formData.martialStatusOther = "";
            }
        },
        onSubmit() {
            alert("Du skickade in formuläret. Varsågod och ta en 🍪!");
        },
        onClickClearFormData() {
            this.formData = {
                firstName: "",
                lastName: "",
                age: "",
                martialStatus: "",
                martialStatusOther: "",
                fruitsPerWeek: "",
                sweetsPerWeek: "",
                consumedFruits: [],
                consumedSweets: [],
                consumptionDescription: "",
                hasSigned: false,
            };
            window.location.reload();
        },
    },
});
</script>
