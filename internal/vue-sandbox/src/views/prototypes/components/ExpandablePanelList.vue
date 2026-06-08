<script lang="ts">
import { type PropType, defineComponent, getCurrentInstance } from "vue";
import { ValidationService } from "@fkui/logic";
import { FButton, FExpandablePanel, confirmModal } from "@fkui/vue";
import PetFormFields, { type PetFormData } from "./PetFormFields.vue";

export interface Panel extends PetFormData {
    id: number;
    savedName: string;
    savedAnimalType: string;
    expanded: boolean;
}

function capitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function updateSavedTitle(panel: Panel): void {
    panel.savedName = panel.name;
    panel.savedAnimalType = panel.animalType;
}

function panelTitle(panel: Panel, index: number): string {
    const parts = [panel.savedName, panel.savedAnimalType ? capitalize(panel.savedAnimalType) : ""].filter(Boolean);
    return parts.length > 0 ? parts.join(", ") : `Husdjur ${index + 1}`;
}

async function savePanel(panel: Panel): Promise<void> {
    const containerId = `panel-content-${panel.id}`;
    ValidationService.setSubmitted(containerId);
    await ValidationService.validateAllElements(containerId);
    const container = document.querySelector(`#${containerId}`);
    if (container?.querySelector("[aria-invalid='true']")) {
        return;
    }
    updateSavedTitle(panel);
    panel.expanded = false;
}

export default defineComponent({
    components: { FExpandablePanel, FButton, PetFormFields },
    props: {
        panels: {
            type: Array as PropType<Panel[]>,
            required: true,
        },
        variant: {
            type: String as PropType<"long" | "short">,
            default: "long",
        },
    },
    emits: ["interact"],
    setup(props, { emit }) {
        const { panels } = props;
        let nextId = Math.max(0, ...panels.map((p) => p.id)) + 1;
        const instance = getCurrentInstance();

        function closeAll(): void {
            for (const p of panels) {
                updateSavedTitle(p);
                p.expanded = false;
            }
        }

        async function addPanel(): Promise<void> {
            emit("interact");
            const openPanel = panels.find((p) => p.expanded);
            if (openPanel) {
                const containerId = `panel-content-${openPanel.id}`;
                ValidationService.setSubmitted(containerId);
                await ValidationService.validateAllElements(containerId);
                const container = document.querySelector(`#${containerId}`);
                if (container?.querySelector("[aria-invalid='true']")) {
                    return;
                }
            }
            closeAll();
            await new Promise((resolve) => setTimeout(resolve, 350));
            panels.push({
                id: nextId++,
                savedName: "",
                savedAnimalType: "",
                animalType: "",
                name: "",
                age: "",
                legs: undefined,
                weight: undefined,
                soleGuardianship: "",
                expanded: true,
            });
        }

        async function togglePanel(panel: Panel): Promise<void> {
            const opening = !panel.expanded;
            if (!opening) {
                const containerId = `panel-content-${panel.id}`;
                ValidationService.setSubmitted(containerId);
                await ValidationService.validateAllElements(containerId);
                const container = document.querySelector(`#${containerId}`);
                if (container?.querySelector("[aria-invalid='true']")) {
                    return;
                }
                if (panel.name && panel.animalType) {
                    updateSavedTitle(panel);
                }
            }
            closeAll();
            panel.expanded = opening;
        }

        async function deletePanel(panel: Panel): Promise<void> {
            const proxy = instance?.proxy;
            if (!proxy) {
                return;
            }
            const confirmed = await confirmModal(proxy, {
                heading: "Ta bort",
                content: "Är du säker på att du vill ta bort?",
                confirm: "Ta bort",
                dismiss: "Avbryt",
            });
            if (confirmed) {
                const idx = panels.findIndex((p) => p.id === panel.id);
                panels.splice(idx, 1);
            }
        }

        return { addPanel, togglePanel, savePanel, deletePanel, panelTitle };
    },
});
</script>

<template>
    <div>
        <p>Lägg till och fyll i information om minst tre husdjur</p>
        <f-expandable-panel
            v-for="(panel, index) in panels"
            :key="panel.id"
            :expanded="panel.expanded"
            @toggle="togglePanel(panel)"
        >
            <template #title>{{ panelTitle(panel, index) }}</template>
            <template #default>
                <div :id="`panel-content-${panel.id}`">
                    <pet-form-fields
                        :model-value="panel"
                        :variant
                        :group-id="`panel-${panel.id}`"
                        @update:model-value="Object.assign(panel, $event)"
                    />
                </div>
                <div class="panel-actions button-group">
                    <f-button
                        class="button-group__item"
                        variant="tertiary"
                        size="medium"
                        icon-left="success"
                        align-text
                        @click="savePanel(panel)"
                    >
                        Spara
                    </f-button>
                    <f-button
                        class="button-group__item"
                        variant="tertiary"
                        size="medium"
                        icon-left="trashcan"
                        align-text
                        @click="deletePanel(panel)"
                    >
                        Ta bort
                    </f-button>
                </div>
            </template>
        </f-expandable-panel>

        <f-button variant="secondary" size="medium" icon-left="plus" @click="addPanel"> Lägg till </f-button>
    </div>
</template>

<style lang="scss">
@use "@fkui/design/src/core/size";

.panel-actions {
    margin-top: size.$margin-100;
    margin-bottom: 0;
    justify-content: flex-start;

    .button {
        margin-bottom: 0;
    }
}
</style>
