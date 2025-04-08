<script lang="ts">
import { defineComponent } from "vue";
import { FFieldset, FCheckboxField, FTooltip, FTextField } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

export default defineComponent({
    name: "ComboboxLiveExample",
    components: { LiveExample, FFieldset, FCheckboxField },
    data() {
        return {
            tooltipVisible: false,
            descriptionVisible: false,
            isDisabled: false,
            isRequired: false,
            showInline: false,
            allowArbitrary: false,
        };
    },
    computed: {
        components(): object {
            return {
                FFieldset,
                FCheckboxField,
                FTooltip,
                FTextField,
            };
        },
        livedata(): object {
            return {
                valtLand: "",
                land: [
                    "Abchazien",
                    "Afghanistan",
                    "Albanien",
                    "Algeriet",
                    "Amerikanska Samoa",
                    "Amerikas förenta stater (USA)",
                    "Andorra",
                    "Angola",
                    "Anguilla",
                    "Antarktis",
                    "Antigua och Barbuda",
                    "Argentina",
                    "Armenien",
                    "Aruba",
                    "Australien",
                    "Azerbajdzjan",
                    "Bahamas",
                    "Bahrain",
                    "Bangladesh",
                    "Barbados",
                    "Belgien",
                    "Belize",
                    "Benin",
                    "Bermuda",
                    "Bhutan",
                    "Bolivia",
                    "Bonaire, Sint Eustatius och Saba",
                    "Bosnien och Hercegovina",
                    "Botswana",
                    "Bouvetön",
                    "Brasilien",
                    "Brittiska territoriet i Indiska oceanen",
                    "Brunei",
                    "Bulgarien",
                    "Burkina Faso",
                    "Burundi",
                    "Caymanöarna",
                    "Centralafrikanska republiken",
                    "Chile",
                    "Colombia",
                    "Cooköarna",
                    "Costa Rica",
                    "Curacao",
                    "Cypern",
                    "Danmark",
                    "Djibouti",
                    "Dominica",
                    "Dominikanska republiken",
                    "Ecuador",
                    "Egypten",
                    "Ekvatorialguinea",
                    "El Salvador",
                    "Elfenbenskusten",
                    "England och Wales",
                    "Eritrea",
                    "Estland",
                    "Etiopien",
                    "Falklandsöarna",
                    "Fiji",
                    "Filippinerna",
                    "Finland",
                    "Frankrike",
                    "Franska Guyana",
                    "Franska Polynesien",
                    "Franska sydterritorierna",
                    "Färöarna",
                    "Förenade Arabemiraten",
                    "Förenta staternas mindre öar i Oceanien och Västindien",
                    "Gabon",
                    "Gambia",
                    "Georgien",
                    "Ghana",
                    "Grekland",
                    "Grenada",
                    "Grönland",
                    "Guadeloupe",
                    "Guam",
                    "Guatemala",
                    "Guinea",
                    "Guinea-Bissau",
                    "Guyana",
                    "Haiti",
                    "Heard- och McDonaldsöarna",
                    "Honduras",
                    "Hong Kong",
                    "Indien",
                    "Indonesien",
                    "Irak",
                    "Iran",
                    "Irland",
                    "Island",
                    "Isle of Man",
                    "Israel",
                    "Italien",
                    "Jamaica",
                    "Japan",
                    "Jersey",
                    "Jordanien",
                    "Julön i Indiska oceanen",
                    "Jungfruöarna (Storbritannien)",
                    "Jungfruöarna (USA)",
                    "Kambodja",
                    "Kamerun",
                    "Kanada",
                    "Kap Verde",
                    "Kazakstan",
                    "Kenya",
                    "Kina",
                    "Kirgizistan",
                    "Kiribati",
                    "Komorerna",
                    "Kongo-Brazzaville",
                    "Kongo-Kinhasa",
                    "Kroatien",
                    "Kuba",
                    "Kuwait",
                    "Laos",
                    "Lesotho",
                    "Lettland",
                    "Libanon",
                    "Liberia",
                    "Libyen",
                    "Liechtenstein",
                    "Litauen",
                    "Luxemburg",
                    "Macao",
                    "Madagaskar",
                    "Makedonien",
                    "Malawi",
                    "Malaysia",
                    "Maldiverna",
                    "Mali",
                    "Malta",
                    "Marocko",
                    "Marshallöarna",
                    "Martinique",
                    "Mauretanien",
                    "Mauritius",
                    "Mayotte",
                    "Mexiko",
                    "Mikronesien",
                    "Moçambique",
                    "Moldavien",
                    "Monaco",
                    "Mongoliet",
                    "Montenegro",
                    "Montserrat",
                    "Myanmar",
                    "Nagorno-Karabach",
                    "Namibia",
                    "Nauru",
                    "Nederländerna",
                    "Nepal",
                    "Nicaragua",
                    "Niger",
                    "Nigeria",
                    "Nordcypern",
                    "Nordirland",
                    "Nordkorea",
                    "Nordmarianerna",
                    "Norfolkön",
                    "Norge",
                    "Nya Zeeland",
                    "Oman",
                    "Pakistan",
                    "Palau",
                    "Palestina",
                    "Panama",
                    "Papua Nya Guinea",
                    "Paraguay",
                    "Peru",
                    "Pitcairnöarna",
                    "Polen",
                    "Portugal",
                    "Purto Rico",
                    "Qatar",
                    "Réunion",
                    "Rumänien",
                    "Rwanda",
                    "Ryssland",
                    "Saint Barthélemy",
                    "Saint Kitts och Nevis",
                    "Saint Lucia",
                    "Saint Martin (Frankrike)",
                    "Saint Vincent och Grenadinerna",
                    "Salomonöarna",
                    "Samoa",
                    "San Marino",
                    "São Tomé och Príncipe",
                    "Saudiarabien",
                    "Schweiz",
                    "Senegal",
                    "Serbien",
                    "Seychellerna",
                    "Sierra Leone",
                    "Singapore",
                    "Skottland",
                    "Slovakien",
                    "Slovenien",
                    "Somalia",
                    "Somaliland",
                    "Spanien",
                    "Sri Lanka",
                    "Storbritannien",
                    "Sudan",
                    "Surinam",
                    "Svalbard och Jan Mayen",
                    "Swaziland",
                    "Sverige",
                    "Sydafrika",
                    "Sydkorea",
                    "Sydossetien",
                    "Sydsudan",
                    "Syrien",
                    "Tadzjikistan",
                    "Taiwan",
                    "Tanzania",
                    "Tchad",
                    "Thailand",
                    "Tjeckien",
                    "Togo",
                    "Tokelau",
                    "Tonga",
                    "Transnistrien",
                    "Trinidad och Tobago",
                    "Tunisien",
                    "Turkiet",
                    "Turkmenistan",
                    "Turks- och Caicosöarna",
                    "Tuvalu",
                    "Tyskland",
                    "Uganda",
                    "Ukraina",
                    "Ungern",
                    "Uruguay",
                    "Uzbekistan",
                    "Wallis- och Futunaöarna",
                    "Vanuatu",
                    "Vatikanstaten",
                    "Venezuela",
                    "Vietnam",
                    "Vitryssland",
                    "Västsahara",
                    "Yemen",
                    "Zambia",
                    "Zimbabwe",
                    "Åland",
                    "Österrike",
                    "Östtimor",
                ],
            };
        },
        tooltip(): string {
            const template = /* HTML */ `
                <template #tooltip>
                    <f-tooltip screen-reader-text="Läs mer här" header-tag="h2">
                        <template #header> Header </template>
                        <template #body> Body </template>
                    </f-tooltip>
                </template>
            `;

            return this.tooltipVisible ? template : "";
        },
        description(): string {
            const template = /* HTML */ `
                <template #description="{ descriptionClass }">
                    <span :class="descriptionClass"> Hjälptext </span>
                </template>
            `;

            return this.descriptionVisible ? template : "";
        },
        inline(): string {
            const template = /* HTML */ ` inline`;
            return this.showInline ? template : "";
        },
        disabled(): string {
            return this.isDisabled ? "disabled" : "";
        },
        required(): string {
            return this.isRequired ? ".required" : "";
        },
        arbitrary(): string {
            return this.allowArbitrary ? "" : ".allowList='{ allowList: { list: land } }'";
        },
        validation(): string {
            if (!this.required && this.allowArbitrary) {
                return "";
            }

            return `v-validation${this.required}${this.arbitrary}`;
        },
        template(): string {
            return /* HTML */ `
                <f-text-field
                    v-model="valtLand"
                    ${this.disabled}
                    ${this.inline}
                    ${this.validation}
                    maxlength="100"
                    :options="land"
                >
                    <template #default> Välj land </template>
                    ${this.tooltip} ${this.description}
                </f-text-field>
            `;
        },
    },
});
</script>

<template>
    <live-example :components :template :livedata>
        <f-checkbox-field v-model="isRequired" :value="true"> Obligatoriskt fält </f-checkbox-field>
        <f-checkbox-field v-model="isDisabled" :value="true"> Inaktivt fält </f-checkbox-field>
        <f-checkbox-field v-model="allowArbitrary" :value="true"> Tillåt fritext </f-checkbox-field>

        <f-fieldset name="label-settings">
            <template #label> Etiketten </template>
            <f-checkbox-field v-model="descriptionVisible" :value="true">
                Hjälptext
            </f-checkbox-field>
            <f-checkbox-field v-model="tooltipVisible" :value="true"> Tooltip </f-checkbox-field>
            <f-checkbox-field v-model="showInline" :value="true"> Inline </f-checkbox-field>
        </f-fieldset>
    </live-example>
</template>
