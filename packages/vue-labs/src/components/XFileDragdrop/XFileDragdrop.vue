<script setup lang="ts">
import { computed, ref } from "vue";
import { alertScreenReader } from "@fkui/logic";
import { EventBus, FFileItem, FFileSelector, FIcon } from "@fkui/vue";

const STATUS_HAR_INTE_VALT_FIL = 0,
    STATUS_HAR_VALT_FIL = 1,
    STATUS_MISSLYCKATS = 2;

const valdFil = ref(File);
const currentStatus = ref(STATUS_HAR_INTE_VALT_FIL);
const uppladdatDokument = ref({
    dokument: {
        filnamn: "",
        mime: "",
        data: "",
        fel: "",
    },
});
const fileName = ref("");
const mimeType = ref("");
const fileSize = ref(0);
const filValidering = ref("");
const maxFileSize = ref(10000000);
const allowedFileTypes = ref("application/pdf");
const dragEnterTarget = ref<EventTarget | null>(null);
const visadrag = ref(false);

const harValtFil = computed(() => {
    return currentStatus.value === STATUS_HAR_VALT_FIL;
});

const harMisslyckats = computed(() => {
    return currentStatus.value === STATUS_MISSLYCKATS;
});

const filstorlek = computed(() => {
    return Math.round((fileSize.value / 1024) * 100) / 100;
});

const srtextFilvaljare = computed(() => {
    if (!harValtFil.value) {
        return "Välj en PDF";
    } else {
        return "Byt PDF";
    }
});

function tillSkarmlasare(): void {
    if (filValidering.value) {
        alertScreenReader(filValidering.value);
    }
}

function dragover(e: DragEvent): void {
    e.preventDefault();
    if (!dragEnterTarget.value) {
        visadrag.value = true;
        dragEnterTarget.value = e.currentTarget;
    }
}

function dragleave(e: DragEvent): void {
    e.preventDefault();
    if (dragEnterTarget.value === e.target) {
        visadrag.value = false;
        dragEnterTarget.value = null;
    }
}

function drop(e: DragEvent): void {
    e.preventDefault();
    visadrag.value = false;
    dragEnterTarget.value = null;
    if (e.dataTransfer) {
        hanteraFil(e.dataTransfer.files);
    }
}

function hanteraFil(filer: FileList): void {
    filValidering.value = "";

    if (filer.length > 1) {
        filValidering.value = "Du kan bara ladda upp ett dokument per tillfälle";
    } else if (filer[0].type === "" || (filer[0].type !== "" && !allowedFileTypes.value.includes(filer[0].type))) {
        filValidering.value = "Dokumentet har fel format, konvertera dokumentet till en pdf";
    } else if (filer[0].size > maxFileSize.value) {
        filValidering.value = "Dokumentet är för stort (över 10 MB)";
    } else if (filer[0].size === 0) {
        filValidering.value = "Dokumentet har inget innehåll, välj ett annat dokument";
    } else {
        currentStatus.value = STATUS_HAR_INTE_VALT_FIL;

        /* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- technical debt */
        Object.values(filer ? filer : valdFil.value).forEach(async (value) => {
            try {
                const buffer = await value.arrayBuffer();
                const reduced = new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), "");
                uppladdatDokument.value = {
                    dokument: {
                        filnamn: value.name,
                        mime: value.type,
                        data: btoa(reduced),
                        fel: "",
                    },
                };
                fileName.value = value.name;
                mimeType.value = value.type;
                fileSize.value = value.size;
                currentStatus.value = STATUS_HAR_VALT_FIL;
            } catch (error: unknown) {
                filValidering.value = `Fel vid inläsning av fil, försök igen ${String(error)}`;
                currentStatus.value = STATUS_HAR_INTE_VALT_FIL;
                rensaFil();
                return;
            }

            if (harValtFil.value) {
                filValidering.value = "";
                EventBus.$emit("UPPLADDAT_DOKUMENT", uppladdatDokument.value);
                alertScreenReader("Fil är tillagd i ladda upp-dialog");
                fokusElement("laggTillKnapp");
            }
        });
    }

    // Om något har blivit fel
    if (filValidering.value) {
        skickaFel(filer);
    }
}

function fokusElement(id: string): void {
    setTimeout(() => {
        const element = document.getElementById(id);
        if (element instanceof HTMLElement) {
            element.focus();
        }
    }, 100);
}

function resetElement(id: string): void {
    const element = document.getElementById(id);
    if (element instanceof HTMLInputElement) {
        element.value = "";
    }
}

function taBortFil(): void {
    alertScreenReader(`${fileName.value} borttaget`);
    rensaFil();
    fokusElement("valjFil");
}

function skickaFel(filer: FileList): void {
    uppladdatDokument.value = {
        dokument: {
            filnamn: filer[0].name,
            mime: filer[0].type,
            data: "",
            fel: filValidering.value,
        },
    };

    fileName.value = filer[0].name;
    mimeType.value = filer[0].type;
    fileSize.value = filer[0].size;

    currentStatus.value = STATUS_MISSLYCKATS;

    EventBus.$emit("UPPLADDAT_DOKUMENT", uppladdatDokument.value);
}

function rensaFil(): void {
    uppladdatDokument.value = {
        dokument: {
            filnamn: "",
            mime: "",
            data: "",
            fel: "",
        },
    };
    valdFil.value = File;
    filValidering.value = "";

    fileName.value = "";
    mimeType.value = "";
    fileSize.value = 0;

    resetElement("valjFil");

    currentStatus.value = STATUS_HAR_INTE_VALT_FIL;
    EventBus.$emit("UPPLADDAT_DOKUMENT", uppladdatDokument.value);
}

EventBus.$on("SATT_VALIDERING", (text: unknown) => {
    filValidering.value = text as string;
});

EventBus.$on("RENSA_FIL_VALJARE", () => {
    rensaFil();
});
</script>

<template>
    <div
        class="col col--sm-12 col--md-12 ram"
        :class="{ 'container-fluid': true, 'drag-ram': visadrag }"
        aria-live="polite"
        @dragover="dragover"
        @dragleave="dragleave"
        @drop="drop"
    >
        <slot name="image"></slot>

        <h3>Ladda upp ett dokument</h3>
        dra och släpp eller
        <div v-if="filValidering !== ''" class="error-style">
            <span class="error-icon"><f-icon name="error"></f-icon></span>
            {{ filValidering }}
        </div>
        <div>
            <f-file-selector
                id="valjFil"
                v-model="valdFil"
                v-test="'valdFil'"
                :accept="allowedFileTypes"
                :aria-label="srtextFilvaljare"
                aria-live="off"
                @change="hanteraFil"
                @focus="tillSkarmlasare"
            >
                {{ srtextFilvaljare }}
            </f-file-selector>
        </div>
        <div v-if="harValtFil || harMisslyckats">
            <hr class="file-item__separator show_separator" />
            <!-- [html-validate-disable-next aria-label-misuse -- technical debt]-->
            <f-file-item
                id="fillista"
                v-test="'filnamn'"
                :file-name
                :mime-type
                :file-size
                aria-labelledby="mylabel"
                aria-live="off"
            >
                <template #row>
                    <span aria-live="off" class="fill">
                        <span id="mylabel" class="sr-only"> {{ fileName }} {{ filstorlek }} kb </span>
                        <span class="filstorlek">{{ filstorlek }} KB</span>
                        <!-- [html-validate-disable-next fkui/class-deprecated -- technical debt]-->
                        <button
                            type="button"
                            class="button button--discrete file-item__file-remove"
                            :aria-label="`Ta bort ${fileName}`"
                            @click="taBortFil"
                        >
                            <f-icon name="trashcan" class="button__icon"></f-icon>
                            Ta bort
                        </button>
                    </span>
                </template>
            </f-file-item>
        </div>
    </div>
</template>

<!-- eslint-disable-next-line vue/no-restricted-block -->
<style lang="scss">
.filstorlek {
    float: left;
    max-width: 100%;
    padding: 0.35rem;
}
.fill {
    text-align: right;
    max-width: 100%;
    flex: 1;
}
.ram {
    border: 0.05rem gray dashed;
    text-align: center;
    padding-top: 1.5rem;
}
.drag-ram {
    border: 0.2rem black dashed;
    opacity: 0.5;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.error-style {
    color: #ca1515;
}
.error-icon {
    vertical-align: text-top;
}
.file-item__separator {
    visibility: hidden;
}
.show_separator {
    visibility: visible;
}
// Lite av ett hack för att filnamnet inte ska se ut som en knapp, i nyaste FKUI versionen behövs inte det här för där är den inte en knapp.
#fillista:hover {
    cursor: default;
    background-color: transparent;
}
</style>
