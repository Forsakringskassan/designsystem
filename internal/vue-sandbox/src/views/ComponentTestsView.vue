<script lang="ts">
import { defineComponent, ref, shallowRef } from "vue";
import { FDate, Weekday } from "@fkui/date";
import {
    FBadge,
    FButton,
    FCalendar,
    FCalendarDay,
    FCard,
    FCheckboxField,
    FDatepickerField,
    FExpandablePanel,
    FExpandableParagraph,
    FFieldset,
    FFileItem,
    FFileSelector,
    FIcon,
    FList,
    FMessageBox,
    FModal,
    FNavigationMenu,
    FPaginateDataset,
    FPaginator,
    FProgressbar,
    FRadioField,
    FSelectField,
    FTextField,
    FTextareaField,
    FTooltip,
    FWizard,
    FWizardStep,
    confirmModal,
    formModal,
} from "@fkui/vue";
import ComponentTestsModal from "./ComponentTestsModal.vue";
import SandboxFormModal from "./SandboxFormModal.vue";

export default defineComponent({
    components: {
        FBadge,
        FButton,
        FCalendar,
        FCalendarDay,
        FCard,
        FCheckboxField,
        FDatepickerField,
        FExpandablePanel,
        FExpandableParagraph,
        FFieldset,
        FFileItem,
        FFileSelector,
        FIcon,
        FList,
        FMessageBox,
        FModal,
        FNavigationMenu,
        FPaginateDataset,
        FPaginator,
        FProgressbar,
        FRadioField,
        FSelectField,
        FTextareaField,
        FTextField,
        FTooltip,
        FWizard,
        FWizardStep,
    },
    setup() {
        const current = ref<string | undefined>("step7");
        const chips = ref<string[]>([]);
        const labelField = ref("");
        const done = ref(false);

        function onCompleted(): void {
            done.value = true;
        }

        return { chips, current, done, labelField, onCompleted, Weekday };
    },
    data() {
        return {
            modalResult: "",
            expanded: false,
            expandedParagraph: false,
            inmatningDate: "",
            inmatningDateDisabled: "",
            inmatningSelect: "",
            about: "",
            inmatningCombobox: "",
            inmatningCheckboxes: [] as string[],
            inmatningCheckboxesBordered: [] as string[],
            inmatningRadio: undefined as string | undefined,
            inmatningRadioBordered: undefined as string | undefined,
            calendarMonth: shallowRef(FDate.fromIso("2026-03-01")),
            calendarMin: shallowRef(FDate.fromIso("2020-01-01")),
            calendarMax: shallowRef(FDate.fromIso("2030-12-31")),
            comboboxOptions: [
                "Albanien",
                "Belgien",
                "Danmark",
                "Finland",
                "Frankrike",
                "Norge",
                "Polen",
                "Sverige",
                "Tyskland",
            ],
            routes: [
                { route: "start", label: "Start", href: "#" },
                { route: "om-oss", label: "Om oss", href: "#" },
                { route: "tjanster", label: "Tjänster", href: "#" },
                { route: "kontakt", label: "Kontakt", href: "#" },
            ],
            rows: Array.from({ length: 10 }, (_, i) => ({
                id: i + 1,
                name: `Person ${i + 1}`,
            })),
            modalIsOpen: false,
            modalSelectedType: "" as "" | "information" | "warning" | "error" | "confirm" | "form",
        };
    },
    computed: {
        modalTypeLabel(): string {
            const labels: Record<string, string> = {
                "": "Standard",
                information: "Info",
                warning: "Varning",
                error: "Fel",
                confirm: "Bekräftelsemodal",
                form: "Formulärsmodal",
            };
            return labels[this.modalSelectedType] ?? "Standard";
        },
        modalType(): "" | "information" | "warning" | "error" {
            const types = ["", "information", "warning", "error"] as const;
            return types.includes(this.modalSelectedType as "")
                ? (this.modalSelectedType as "" | "information" | "warning" | "error")
                : "";
        },
    },
    methods: {
        onToggle() {
            this.expanded = !this.expanded;
        },
        onToggleParagraph() {
            this.expandedParagraph = !this.expandedParagraph;
        },
        openModal() {
            this.modalResult = "";
            formModal(this, ComponentTestsModal)
                .then((result) => {
                    this.modalResult = result as string;
                })
                .catch(() => {
                    /* användaren avbröt */
                });
        },
        async openSelectedModal() {
            if (this.modalSelectedType === "confirm") {
                await confirmModal(this, {
                    heading: "Bekräfta åtgärd",
                    content: "Är du säker på att du vill utföra den här åtgärden?",
                    confirm: "Ja, bekräfta",
                    dismiss: "Nej, avbryt",
                });
            } else if (this.modalSelectedType === "form") {
                this.modalResult = "";
                try {
                    this.modalResult = await formModal(this, SandboxFormModal);
                } catch {
                    /* användaren avbröt */
                }
            } else {
                this.modalIsOpen = true;
            }
        },
    },
});
</script>

<template>
    <div>
        <header class="fk-header">
            <div class="fk-header__inner">
                <a
                    href="https://www.forsakringskassan.se"
                    class="fk-header__logo-link"
                    aria-label="Försäkringskassans logotyp, länk till startsidan"
                >
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="13.927 66.223 198.384 25.882"
                        xml:space="preserve"
                        aria-hidden="true"
                        focusable="false"
                        class="fk-header__logo-svg"
                    >
                        <!-- FK-symbolen: grön ruta med vita former -->
                        <g>
                            <path
                                fill="#116A3E"
                                stroke="#ffffff"
                                stroke-width="0.7"
                                d="M36.829,87.975c0,0.638-0.514,1.148-1.146,1.148H15.072c-0.631,0-1.146-0.512-1.146-1.148V67.369
                                c0-0.631,0.515-1.146,1.146-1.146h20.611c0.632,0,1.146,0.515,1.146,1.146V87.975z"
                            />
                            <path
                                fill="#FFFFFF"
                                d="M23.411,75.375c-0.209,0-0.381,0.171-0.381,0.38v5.358c0,0.21,0.121,0.503,0.271,0.653l5.586,5.563
                                c0.149,0.148,0.44,0.271,0.652,0.271H34.9c0.209,0,0.382-0.173,0.382-0.38v-5.34c0-0.207-0.122-0.504-0.268-0.652l-5.59-5.578
                                c-0.147-0.148-0.438-0.269-0.648-0.269L23.411,75.375z"
                            />
                            <path
                                fill="#FFFFFF"
                                d="M15.814,67.74c-0.209,0-0.383,0.17-0.383,0.38v19.099c0,0.212,0.119,0.265,0.269,0.113l5.533-5.565
                                c0.146-0.153,0.267-0.443,0.267-0.656v-6.885c0-0.212,0.171-0.383,0.382-0.383h6.896c0.211,0,0.503-0.12,0.65-0.268l5.582-5.565
                                c0.149-0.145,0.098-0.269-0.111-0.269L15.814,67.74L15.814,67.74z"
                            />
                        </g>
                        <!-- Försäkringskassan-texten: vit -->
                        <g fill="#ffffff">
                            <path
                                d="M47.464,74.6h9.655v2.539h-6.635v3.17h5.751v2.35h-5.751v5.673h-3.021L47.464,74.6L47.464,74.6z"
                            />
                            <path
                                d="M60.085,83.372c0-1.596,0.561-3.194,2.407-3.194c1.865,0,2.424,1.598,2.424,3.194c0,1.579-0.559,3.173-2.424,3.173
                                C60.645,86.545,60.085,84.95,60.085,83.372z M63.184,76.847h2.6V74.6h-2.6V76.847z M59.223,76.847h2.596V74.6h-2.596V76.847z
                                 M57.355,83.372c0,3.152,2.02,5.235,5.137,5.235c3.136,0,5.154-2.083,5.154-5.235c0-3.175-2.02-5.254-5.154-5.254
                                C59.375,78.118,57.355,80.196,57.355,83.372z"
                            />
                            <path
                                d="M68.707,78.388h2.594v1.847h0.038c0.501-1.248,1.851-2.117,3.178-2.117c0.192,0,0.421,0.039,0.595,0.096v2.541
                                c-0.25-0.059-0.654-0.098-0.979-0.098c-2.001,0-2.693,1.442-2.693,3.193v4.484h-2.731V78.388z"
                            />
                            <path
                                d="M78.125,85.101c0.021,1.194,1.022,1.676,2.099,1.676c0.789,0,1.789-0.31,1.789-1.271c0-0.825-1.136-1.115-3.097-1.536
                                c-1.578-0.348-3.156-0.908-3.156-2.657c0-2.539,2.193-3.196,4.327-3.196c2.177,0,4.178,0.733,4.389,3.176h-2.598
                                c-0.079-1.059-0.886-1.347-1.867-1.347c-0.616,0-1.521,0.113-1.521,0.921c0,0.983,1.542,1.116,3.098,1.481
                                c1.599,0.368,3.156,0.942,3.156,2.788c0,2.619-2.271,3.469-4.54,3.469c-2.31,0-4.559-0.869-4.674-3.506h2.596V85.101z"
                            />
                            <path
                                d="M92.179,84.489c0,0.596-0.078,2.288-2.215,2.288c-0.884,0-1.672-0.253-1.672-1.271c0-1,0.769-1.286,1.615-1.459
                                c0.847-0.158,1.809-0.175,2.271-0.579V84.489z M91.16,76.847h2.596V74.6H91.16V76.847z M87.195,76.847h2.597V74.6h-2.597V76.847z
                                 M88.6,81.449c0.098-1.076,0.77-1.501,1.809-1.501c0.962,0,1.771,0.171,1.771,1.347c0,1.118-1.559,1.056-3.232,1.305
                                c-1.693,0.235-3.385,0.773-3.385,3.021c0,2.039,1.499,2.985,3.385,2.985c1.211,0,2.479-0.335,3.347-1.235
                                c0.021,0.332,0.098,0.649,0.191,0.963h2.771c-0.25-0.403-0.346-1.305-0.346-2.213v-5.174c0-2.387-2.386-2.828-4.369-2.828
                                c-2.229,0-4.521,0.77-4.675,3.331L88.6,81.449L88.6,81.449z"
                            />
                            <path
                                d="M96.564,74.6h2.731v7.368l3.442-3.58h3.235l-3.753,3.654l4.174,6.292h-3.312l-2.729-4.445l-1.059,1.022v3.423h-2.731V74.6
                                L96.564,74.6z"
                            />
                            <path
                                d="M107.354,78.388h2.599v1.847h0.037c0.503-1.248,1.85-2.117,3.175-2.117c0.193,0,0.423,0.039,0.595,0.096v2.541
                                c-0.247-0.059-0.651-0.098-0.98-0.098c-1.999,0-2.693,1.442-2.693,3.193v4.484h-2.732L107.354,78.388L107.354,78.388z"
                            />
                            <path
                                d="M114.916,78.388h2.733v9.946h-2.733V78.388z M117.649,76.847h-2.733V74.6h2.733V76.847z"
                            />
                            <path
                                d="M119.444,78.388h2.6v1.386h0.057c0.691-1.118,1.883-1.656,3.041-1.656c2.899,0,3.636,1.637,3.636,4.1v6.117h-2.736v-5.617
                                c0-1.637-0.478-2.446-1.748-2.446c-1.479,0-2.118,0.83-2.118,2.852v5.21h-2.729v-9.946H119.444z"
                            />
                            <path
                                d="M134.952,85.988c-1.675,0-2.208-1.563-2.208-2.984c0-1.479,0.668-2.827,2.208-2.827c1.771,0,2.329,1.441,2.329,3.057
                                C137.281,84.662,136.508,85.988,134.952,85.988z M139.878,78.388h-2.597v1.329h-0.04c-0.653-1.158-1.652-1.599-2.957-1.599
                                c-2.794,0-4.275,2.346-4.275,4.927c0,2.728,1.271,4.997,4.253,4.997c1.194,0,2.384-0.494,2.979-1.533h0.04v1.307
                                c0.021,1.422-0.67,2.462-2.192,2.462c-0.965,0-1.792-0.343-2.041-1.362h-2.71c0.134,2.267,2.422,3.19,4.386,3.19
                                c4.575,0,5.154-2.771,5.154-4.401V78.388L139.878,78.388z"
                            />
                            <path
                                d="M143.472,85.101c0.02,1.194,1.019,1.676,2.102,1.676c0.785,0,1.786-0.31,1.786-1.271c0-0.825-1.135-1.115-3.103-1.536
                                c-1.574-0.348-3.15-0.908-3.15-2.657c0-2.539,2.195-3.196,4.325-3.196c2.18,0,4.178,0.733,4.393,3.176h-2.604
                                c-0.075-1.059-0.88-1.347-1.862-1.347c-0.611,0-1.52,0.113-1.52,0.921c0,0.983,1.536,1.116,3.096,1.481
                                c1.601,0.368,3.155,0.942,3.155,2.788c0,2.619-2.27,3.469-4.536,3.469c-2.309,0-4.563-0.869-4.677-3.506h2.595V85.101z"
                            />
                            <path
                                d="M151.224,74.6h2.731v7.368l3.444-3.58h3.232l-3.753,3.654l4.178,6.292h-3.312l-2.73-4.445l-1.061,1.022v3.423h-2.731
                                L151.224,74.6L151.224,74.6z"
                            />
                            <path
                                d="M167.853,84.489c0,0.596-0.074,2.288-2.211,2.288c-0.887,0-1.672-0.253-1.672-1.271c0-1,0.767-1.286,1.61-1.459
                                c0.852-0.158,1.812-0.175,2.271-0.579L167.853,84.489L167.853,84.489z M164.275,81.449c0.096-1.076,0.769-1.501,1.811-1.501
                                c0.963,0,1.768,0.171,1.768,1.347c0,1.118-1.557,1.056-3.23,1.305c-1.69,0.235-3.387,0.773-3.387,3.021
                                c0,2.039,1.503,2.985,3.387,2.985c1.213,0,2.48-0.335,3.347-1.235c0.02,0.332,0.101,0.649,0.193,0.963h2.771
                                c-0.25-0.403-0.349-1.305-0.349-2.213v-5.174c0-2.387-2.38-2.828-4.364-2.828c-2.229,0-4.521,0.77-4.673,3.331L164.275,81.449
                                L164.275,81.449z"
                            />
                            <path
                                d="M174.458,85.101c0.021,1.194,1.024,1.676,2.104,1.676c0.787,0,1.785-0.31,1.785-1.271c0-0.825-1.135-1.115-3.098-1.536
                                c-1.581-0.348-3.157-0.908-3.157-2.657c0-2.539,2.196-3.196,4.329-3.196c2.175,0,4.176,0.733,4.388,3.176h-2.597
                                c-0.076-1.059-0.883-1.347-1.865-1.347c-0.617,0-1.523,0.113-1.523,0.921c0,0.983,1.544,1.116,3.099,1.481
                                c1.597,0.368,3.155,0.942,3.155,2.788c0,2.619-2.267,3.469-4.535,3.469c-2.31,0-4.563-0.869-4.678-3.506h2.593V85.101z"
                            />
                            <path
                                d="M184.435,85.101c0.019,1.194,1.021,1.676,2.096,1.676c0.792,0,1.791-0.31,1.791-1.271c0-0.825-1.135-1.115-3.099-1.536
                                c-1.576-0.348-3.15-0.908-3.15-2.657c0-2.539,2.192-3.196,4.324-3.196c2.176,0,4.177,0.733,4.388,3.176h-2.598
                                c-0.077-1.059-0.888-1.347-1.867-1.347c-0.618,0-1.515,0.113-1.515,0.921c0,0.983,1.533,1.116,3.097,1.481
                                c1.592,0.368,3.151,0.942,3.151,2.788c0,2.619-2.273,3.469-4.539,3.469c-2.311,0-4.561-0.869-4.677-3.506h2.598V85.101z"
                            />
                            <path
                                d="M198.485,84.489c0,0.596-0.074,2.288-2.208,2.288c-0.891,0-1.68-0.253-1.68-1.271c0-1,0.772-1.286,1.618-1.459
                                c0.85-0.158,1.812-0.175,2.27-0.579V84.489L198.485,84.489z M194.911,81.449c0.092-1.076,0.77-1.501,1.81-1.501
                                c0.958,0,1.766,0.171,1.766,1.347c0,1.118-1.558,1.056-3.229,1.305c-1.696,0.235-3.389,0.773-3.389,3.021
                                c0,2.039,1.499,2.985,3.389,2.985c1.207,0,2.482-0.335,3.351-1.235c0.018,0.332,0.094,0.649,0.188,0.963h2.771
                                c-0.246-0.403-0.347-1.305-0.347-2.213v-5.174c0-2.387-2.385-2.828-4.364-2.828c-2.231,0-4.523,0.77-4.678,3.331L194.911,81.449
                                L194.911,81.449z"
                            />
                            <path
                                d="M202.98,78.388h2.6v1.386h0.054c0.694-1.118,1.888-1.656,3.045-1.656c2.898,0,3.632,1.637,3.632,4.1v6.117h-2.734v-5.617
                                c0-1.637-0.478-2.446-1.749-2.446c-1.479,0-2.114,0.83-2.114,2.852v5.21h-2.73v-9.946H202.98z"
                            />
                        </g>
                    </svg>
                </a>
            </div>
        </header>
        <div class="sandbox-root container">
            <h1>Komponenttester</h1>
            <div class="row">
                <div class="col col--md-9">
                    <f-wizard v-model="current" header-tag="h2" disable-initial-focus @completed="onCompleted">
                        <f-wizard-step key="step1" :use-error-list="false" title="Bricka">
                            <div class="badge-list">
                                <f-badge>Standard</f-badge>
                                <f-badge status="info">Info</f-badge>
                                <f-badge status="success">Success</f-badge>
                                <f-badge status="warning">Varning</f-badge>
                                <f-badge status="error">Fel</f-badge>
                            </div>
                            <div class="badge-list">
                                <f-badge inverted>Standard</f-badge>
                                <f-badge status="info" inverted>Info</f-badge>
                                <f-badge status="success" inverted>Success</f-badge>
                                <f-badge status="warning" inverted>Varning</f-badge>
                                <f-badge status="error" inverted>Fel</f-badge>
                            </div>
                        </f-wizard-step>
                        <f-wizard-step key="step2" :use-error-list="false" title="Chip">
                            <f-fieldset name="chips" chip horizontal>
                                <template #label>Välj alternativ</template>
                                <f-checkbox-field v-model="chips" value="chip1">Chip 1</f-checkbox-field>
                                <f-checkbox-field v-model="chips" value="chip2">Chip 2</f-checkbox-field>
                                <f-checkbox-field v-model="chips" value="chip3">Chip 3</f-checkbox-field>
                                <f-checkbox-field v-model="chips" value="chip4" disabled>Chip 4</f-checkbox-field>
                            </f-fieldset>
                        </f-wizard-step>
                        <f-wizard-step key="step3" :use-error-list="false" title="Dialogträd">
                            <f-button variant="secondary" icon-left="plus" @click="openModal"> Öppna modal </f-button>
                            <pre v-if="modalResult">Resultat: {{ modalResult }}</pre>
                        </f-wizard-step>
                        <f-wizard-step key="step4" :use-error-list="false" title="Etikett">
                            <f-text-field v-model="labelField" v-validation.required input-width="md-6">
                                <template #default>Etikett</template>
                                <template #tooltip>
                                    <f-tooltip screen-reader-text="Läs mer om fältet" header-tag="h2">
                                        <template #header>Rubrik</template>
                                        <template #body>Här kan du läsa mer om vad fältet är till för.</template>
                                    </f-tooltip>
                                </template>
                                <template #description="{ descriptionClass, formatDescriptionClass }">
                                    <span :class="descriptionClass">Hjälptext</span>
                                    <span :class="formatDescriptionClass">Formatbeskrivning</span>
                                </template>
                            </f-text-field>
                        </f-wizard-step>
                        <f-wizard-step key="step5" :use-error-list="false" title="Expanderbara ytor">
                            <f-expandable-panel :expanded @toggle="onToggle">
                                <template #title>Titel</template>
                                <template #default>
                                    <p>Innehåll i den expanderbara panelen.</p>
                                </template>
                            </f-expandable-panel>
                            <f-expandable-paragraph
                                :expanded="expandedParagraph"
                                header-tag="span"
                                @toggle="onToggleParagraph"
                            >
                                <template #title>Titel</template>
                                <template #default>
                                    <span>Innehåll i det expanderbara stycket.</span>
                                </template>
                            </f-expandable-paragraph>
                        </f-wizard-step>
                        <f-wizard-step key="step6" :use-error-list="false" title="Filuppladdning">
                            <f-file-selector accept="application/pdf, image/jpeg, image/png">
                                Lägg till fil
                            </f-file-selector>
                            <f-file-item file-name="exempel.pdf" mime-type="application/pdf">
                                <f-progressbar aria-label="Uppladdningsförlopp" :value="50"></f-progressbar>
                            </f-file-item>
                        </f-wizard-step>
                        <f-wizard-step key="step8" :use-error-list="false" title="Inmatningskomponenter">
                            <f-text-field input-width="md-6">
                                <template #default>Inmatningsfält</template>
                            </f-text-field>
                            <div style="margin-bottom: 3rem">
                                <f-text-field input-width="md-6" disabled>
                                    <template #default>Inmatningsfält - inaktiverat</template>
                                </f-text-field>
                            </div>
                            <f-datepicker-field
                                v-model="inmatningDate"
                                v-validation.invalidWeekdays.invalidDates="{
                                    invalidWeekdays: { days: [Weekday.SATURDAY, Weekday.SUNDAY] },
                                    invalidDates: { dates: ['2026-02-23', '2026-02-27'] },
                                }"
                                input-width="md-6"
                                year-selector
                            >
                                <template #default>Datum</template>
                            </f-datepicker-field>
                            <div style="margin-bottom: 3rem">
                                <f-datepicker-field v-model="inmatningDateDisabled" input-width="md-6" disabled>
                                    <template #default>Datum - inaktiverat</template>
                                </f-datepicker-field>
                            </div>
                            <f-select-field v-model="inmatningSelect" select-width="md-6">
                                <template #label>Dropplista</template>
                                <option value="">Välj</option>
                                <option value="1">Alternativ 1</option>
                                <option value="2">Alternativ 2</option>
                                <option value="3">Alternativ 3</option>
                            </f-select-field>
                            <div style="margin-bottom: 3rem">
                                <f-select-field select-width="md-6" disabled>
                                    <template #label>Dropplista - inaktiverad</template>
                                    <option value="">Välj</option>
                                    <option value="1">Alternativ 1</option>
                                    <option value="2">Alternativ 2</option>
                                    <option value="3">Alternativ 3</option>
                                </f-select-field>
                            </div>
                            <div class="row">
                                <div class="col col--md-6">
                                    <f-textarea-field v-model="about" :maxlength="100" :soft-limit="20" resizable>
                                        <template #default>Flerradigt inmatningsfält</template>
                                        <template #description="{ formatDescriptionClass }">
                                            <span :class="formatDescriptionClass">(max 100 tecken)</span>
                                        </template>
                                    </f-textarea-field>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col--md-6" style="margin-bottom: 3rem">
                                    <f-textarea-field disabled>
                                        <template #default>Flerradigt inmatningsfält - inaktiverat</template>
                                    </f-textarea-field>
                                </div>
                            </div>
                            <f-text-field v-model="inmatningCombobox" :options="comboboxOptions" input-width="md-6">
                                <template #default>Kombobox</template>
                            </f-text-field>
                            <div style="margin-bottom: 3rem">
                                <f-text-field :options="comboboxOptions" input-width="md-6" disabled>
                                    <template #default>Kombobox - inaktiverad</template>
                                </f-text-field>
                            </div>
                            <div class="row">
                                <div class="col col--md-9">
                                    <f-fieldset name="inmatning-checkboxes">
                                        <template #label>Kryssrutor</template>
                                        <f-checkbox-field v-model="inmatningCheckboxes" value="1"
                                            >Alternativ 1</f-checkbox-field
                                        >
                                        <f-checkbox-field v-model="inmatningCheckboxes" value="2"
                                            >Alternativ 2</f-checkbox-field
                                        >
                                        <f-checkbox-field v-model="inmatningCheckboxes" value="3" disabled
                                            >Alternativ 3</f-checkbox-field
                                        >
                                    </f-fieldset>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col--md-9">
                                    <f-fieldset name="inmatning-checkboxes-bordered" border show-details="always">
                                        <template #label>Kryssrutor med ram och utökad label</template>
                                        <template #default>
                                            <f-checkbox-field v-model="inmatningCheckboxesBordered" value="1">
                                                <template #default>Alternativ 1</template>
                                                <template #details>Hjälptext</template>
                                            </f-checkbox-field>
                                            <f-checkbox-field v-model="inmatningCheckboxesBordered" value="2">
                                                <template #default>Alternativ 2</template>
                                                <template #details>Hjälptext</template>
                                            </f-checkbox-field>
                                            <f-checkbox-field v-model="inmatningCheckboxesBordered" value="3">
                                                <template #default>Alternativ 3</template>
                                                <template #details>Hjälptext</template>
                                            </f-checkbox-field>
                                        </template>
                                    </f-fieldset>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col--md-9" style="margin-top: 3rem">
                                    <f-fieldset name="inmatning-radio">
                                        <template #label>Radioknappar</template>
                                        <f-radio-field v-model="inmatningRadio" value="1">Alternativ 1</f-radio-field>
                                        <f-radio-field v-model="inmatningRadio" value="2">Alternativ 2</f-radio-field>
                                        <f-radio-field v-model="inmatningRadio" value="3" disabled
                                            >Alternativ 3</f-radio-field
                                        >
                                    </f-fieldset>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col--md-9">
                                    <f-fieldset name="inmatning-radio-bordered" border show-details="always">
                                        <template #label>Radioknappar med ram och utökad label</template>
                                        <template #default>
                                            <f-radio-field v-model="inmatningRadioBordered" value="1">
                                                <template #default>Alternativ 1</template>
                                                <template #details>Hjälptext</template>
                                            </f-radio-field>
                                            <f-radio-field v-model="inmatningRadioBordered" value="2">
                                                <template #default>Alternativ 2</template>
                                                <template #details>Hjälptext</template>
                                            </f-radio-field>
                                            <f-radio-field v-model="inmatningRadioBordered" value="3">
                                                <template #default>Alternativ 3</template>
                                                <template #details>Hjälptext</template>
                                            </f-radio-field>
                                        </template>
                                    </f-fieldset>
                                </div>
                            </div>
                        </f-wizard-step>
                        <f-wizard-step key="step9" :use-error-list="false" title="Kalender">
                            <f-calendar
                                v-model="calendarMonth"
                                :min-date="calendarMin"
                                :max-date="calendarMax"
                                year-selector
                            >
                                <template #default="{ date, isFocused }">
                                    <f-calendar-day :day="date" :focused="isFocused" />
                                </template>
                            </f-calendar>
                        </f-wizard-step>
                        <f-wizard-step key="step10" :use-error-list="false" title="Knappar">
                            <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start">
                                <div style="display: flex; gap: 1rem; align-items: center">
                                    <f-button size="medium" variant="primary" icon-left="plus">Primär</f-button>
                                    <f-button size="medium" variant="secondary" icon-left="plus">Sekundär</f-button>
                                    <f-button size="medium" variant="secondary" icon-left="plus" disabled
                                        >Disabled</f-button
                                    >
                                </div>
                                <div style="display: flex; gap: 1rem; align-items: center">
                                    <f-button size="medium" variant="tertiary" icon-left="plus" align-text
                                        >Tertiär</f-button
                                    >
                                    <f-button size="medium" variant="tertiary" align-text
                                        >Tertiär understruken</f-button
                                    >
                                </div>
                                <div style="display: flex; gap: 1rem; align-items: center">
                                    <f-button
                                        size="medium"
                                        variant="tertiary"
                                        tertiary-style="black"
                                        icon-left="plus"
                                        align-text
                                        >Tertiär svart</f-button
                                    >
                                    <f-button size="medium" variant="tertiary" tertiary-style="black" align-text
                                        >Tertiär understruken svart</f-button
                                    >
                                </div>
                                <div
                                    style="
                                        display: flex;
                                        gap: 1rem;
                                        align-items: center;
                                        background-color: var(--fkds-color-text-primary);
                                        padding: 1rem;
                                    "
                                >
                                    <f-button
                                        size="medium"
                                        variant="tertiary"
                                        tertiary-style="inverted"
                                        icon-left="plus"
                                        align-text
                                        >Tertiär inverterad</f-button
                                    >
                                    <f-button size="medium" variant="tertiary" tertiary-style="inverted" align-text
                                        >Tertiär understruken inverterad</f-button
                                    >
                                </div>
                            </div>
                        </f-wizard-step>
                        <f-wizard-step key="step11" :use-error-list="false" title="Kort">
                            <div class="row">
                                <div class="col col--md-9">
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
                                                <f-button
                                                    variant="tertiary"
                                                    align-text
                                                    class="button-group__item"
                                                    icon-left="trashcan"
                                                >
                                                    Ta bort
                                                </f-button>
                                                <f-button
                                                    variant="tertiary"
                                                    align-text
                                                    class="button-group__item"
                                                    icon-left="pen"
                                                >
                                                    Ändra
                                                </f-button>
                                            </div>
                                        </template>
                                    </f-card>
                                </div>
                            </div>
                        </f-wizard-step>
                        <f-wizard-step key="step12" :use-error-list="false" title="Länkar">
                            <div style="display: flex; gap: 2rem; align-items: center">
                                <a class="anchor" href="#">En länk</a>
                                <a class="anchor anchor--discrete" href="#">En diskret länk</a>
                            </div>
                            <div style="margin-top: 3rem">
                                <div class="row">
                                    <div class="col col--md-6">
                                        <a class="entrypoint" href="#">
                                            Ansök om hundbidrag
                                            <span class="sr-only"> Till tjänsten ansök om hundbidrag </span>
                                            <f-icon name="arrow-right" class="entrypoint__icon"></f-icon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </f-wizard-step>
                        <f-wizard-step key="step13" :use-error-list="false" title="Meddelanderutor">
                            <div class="row">
                                <div class="col col--md-9">
                                    <f-message-box type="info">
                                        <template #default="{ headingSlotClass }">
                                            <h3 :class="headingSlotClass">Information</h3>
                                            <p>Det här är ett informationsmeddelande med lite mer text.</p>
                                        </template>
                                    </f-message-box>
                                    <f-message-box type="warning">
                                        <template #default="{ headingSlotClass }">
                                            <h3 :class="headingSlotClass">Varning</h3>
                                            <p>Det här är ett varningsmeddelande med lite mer text.</p>
                                        </template>
                                    </f-message-box>
                                    <f-message-box type="error">
                                        <template #default="{ headingSlotClass }">
                                            <h3 :class="headingSlotClass">Fel</h3>
                                            <p>Det här är ett felmeddelande med lite mer text.</p>
                                        </template>
                                    </f-message-box>
                                    <f-message-box type="success">
                                        <template #default="{ headingSlotClass }">
                                            <h3 :class="headingSlotClass">Klart</h3>
                                            <p>Det här är ett bekräftelsemeddelande med lite mer text.</p>
                                        </template>
                                    </f-message-box>
                                </div>
                            </div>
                            <div class="row" style="margin-top: 3rem">
                                <div class="col col--md-6">
                                    <f-message-box type="info" layout="short"
                                        >Kort informationsmeddelande.</f-message-box
                                    >
                                    <f-message-box type="warning" layout="short"
                                        >Kort varningsmeddelande.</f-message-box
                                    >
                                    <f-message-box type="error" layout="short">Kort felmeddelande.</f-message-box>
                                    <f-message-box type="success" layout="short"
                                        >Kort bekräftelsemeddelande.</f-message-box
                                    >
                                </div>
                            </div>
                        </f-wizard-step>
                        <f-wizard-step key="step14" :use-error-list="false" title="Modaler">
                            <div class="row">
                                <div class="col col--md-6">
                                    <f-select-field id="modal-type-select" v-model="modalSelectedType">
                                        <template #label>Välj variant</template>
                                        <option value="">Standard</option>
                                        <option value="information">Info</option>
                                        <option value="warning">Varning</option>
                                        <option value="error">Fel</option>
                                        <option value="confirm">Bekräftelsemodal</option>
                                        <option value="form">Formulärsmodal</option>
                                    </f-select-field>
                                </div>
                            </div>
                            <div style="margin-top: 3rem">
                                <f-button
                                    size="medium"
                                    variant="secondary"
                                    @click="
                                        () => {
                                            void openSelectedModal();
                                        }
                                    "
                                    >Öppna modal</f-button
                                >
                                <div v-if="modalResult && modalSelectedType === 'form'" style="margin-top: 1rem">
                                    <pre>Modalen stängdes med resultatet:</pre>
                                    <pre>{{ modalResult }}</pre>
                                </div>
                            </div>
                            <f-modal
                                v-if="!['confirm', 'form'].includes(modalSelectedType)"
                                :is-open="modalIsOpen"
                                :type="modalType"
                                @close="modalIsOpen = false"
                            >
                                <template #header>{{ modalTypeLabel }}</template>
                                <template #content>
                                    <p>Det här är innehållet i en modal av typen {{ modalTypeLabel.toLowerCase() }}.</p>
                                </template>
                                <template #footer>
                                    <div class="button-group">
                                        <button
                                            type="button"
                                            class="button button--primary button-group__item button--large"
                                            @click="modalIsOpen = false"
                                        >
                                            Stäng
                                        </button>
                                    </div>
                                </template>
                            </f-modal>
                        </f-wizard-step>
                        <f-wizard-step key="step15" :use-error-list="false" title="Paginering">
                            <f-paginate-dataset :items="rows" :items-per-page="4">
                                <template #default="{ items: currentPageItems }">
                                    <f-list :items="currentPageItems" key-attribute="id">
                                        <template #default="{ item }">
                                            <h6>{{ item.name }} ({{ item.id }})</h6>
                                        </template>
                                    </f-list>
                                    <f-paginator navigator-label="Navigera mellan personer" />
                                </template>
                            </f-paginate-dataset>
                        </f-wizard-step>
                        <f-wizard-step key="step16" :use-error-list="false" title="Navigeringsmeny">
                            <f-navigation-menu aria-label="Example navigation" :routes></f-navigation-menu>
                        </f-wizard-step>
                        <f-wizard-step key="step7" :use-error-list="false" title="Sista steget">
                            <template #next-button-text>Klar</template>
                        </f-wizard-step>
                    </f-wizard>
                    <p v-if="done">Wizarden är klar!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fk-header {
    background-color: #116a3e;
    width: 100%;
}

.fk-header__inner {
    max-width: 1168px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    height: 88px;
    gap: 1rem;
}

.fk-header__logo-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    flex-shrink: 0;
}

.fk-header__logo-svg {
    height: 42px;
    width: auto;
}

.sandbox-root {
    margin-top: 2rem;
}

.badge-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
}
</style>
