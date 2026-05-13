<script lang="ts">
import { type PropType, defineComponent, getCurrentInstance, ref } from "vue";
import { ValidationService } from "@fkui/logic";
import { FButton, FExpandablePanel, confirmModal } from "@fkui/vue";
import PetFormFields, { type PetFormData } from "./PetFormFields.vue";

interface Panel extends PetFormData {
    id: number;
    savedName: string;
    savedAnimalType: string;
    expanded: boolean;
}

function capitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

export default defineComponent({
    components: { FExpandablePanel, FButton, PetFormFields },
    props: {
        variant: {
            type: String as PropType<"long" | "short">,
            default: "long",
        },
    },
    setup() {
        let nextId = 1;
        const instance = getCurrentInstance();
        const panels = ref<Panel[]>([
            {
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
            },
        ]);

        function updateSavedTitle(panel: Panel): void {
            panel.savedName = panel.name;
            panel.savedAnimalType = panel.animalType;
        }

        function closeAll(): void {
            for (const p of panels.value) {
                updateSavedTitle(p);
                p.expanded = false;
            }
        }

        async function addPanel(): Promise<void> {
            const openPanel = panels.value.find((p) => p.expanded);
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
            panels.value.push({
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
                const idx = panels.value.findIndex((p) => p.id === panel.id);
                panels.value.splice(idx, 1);
            }
        }

        function panelTitle(panel: Panel, index: number): string {
            const parts = [panel.savedName, panel.savedAnimalType ? capitalize(panel.savedAnimalType) : ""].filter(
                Boolean,
            );
            return parts.length > 0 ? parts.join(", ") : `Husdjur ${index + 1}`;
        }

        return { panels, addPanel, togglePanel, savePanel, deletePanel, panelTitle };
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
