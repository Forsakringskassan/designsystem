<script lang="ts">
import { type PropType, defineComponent, getCurrentInstance } from "vue";
import { FButton, FCard, confirmModal, formModal } from "@fkui/vue";
import { type PetFormData } from "./PetFormFields.vue";
import PetFormModal from "./PetFormModal.vue";

export interface Card extends PetFormData {
    id: number;
}

function capitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function formatAge(age: string): string {
    const map: Record<string, string> = {
        "0-3": "0 till 3 år",
        "4-7": "4 till 7 år",
        "over-8": "8 år eller mer",
    };
    return map[age] ?? age;
}

function formatGuardianship(value: string): string {
    if (value === "yes") {
        return "Ja";
    }
    if (value === "no") {
        return "Nej";
    }
    return value;
}

function cardTitle(card: Card, index: number): string {
    return card.name ?? `Husdjur ${index + 1}`;
}

export default defineComponent({
    components: { FCard, FButton },
    props: {
        cards: {
            type: Array as PropType<Card[]>,
            required: true,
        },
        variant: {
            type: String as PropType<"long" | "short">,
            default: "long",
        },
    },
    emits: ["interact"],
    setup(props, { emit }) {
        const { cards } = props;
        let nextId = 1;
        const instance = getCurrentInstance();

        async function addCard(): Promise<void> {
            emit("interact");
            const proxy = instance?.proxy;
            if (!proxy) {
                return;
            }
            try {
                const data = await formModal<PetFormData>(proxy, PetFormModal, {
                    props: { variant: props.variant },
                });
                cards.push({ id: nextId++, ...data });
            } catch {
                /* cancelled */
            }
        }

        async function editCard(card: Card): Promise<void> {
            const proxy = instance?.proxy;
            if (!proxy) {
                return;
            }
            try {
                const data = await formModal<PetFormData>(proxy, PetFormModal, {
                    props: { variant: props.variant, initialValue: { ...card } },
                });
                Object.assign(card, data);
            } catch {
                /* cancelled */
            }
        }

        async function deleteCard(card: Card): Promise<void> {
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
                const idx = cards.findIndex((c) => c.id === card.id);
                cards.splice(idx, 1);
            }
        }

        return { cardTitle, capitalize, formatAge, formatGuardianship, addCard, editCard, deleteCard };
    },
});
</script>

<template>
    <div>
        <p>Lägg till och fyll i information om minst tre husdjur</p>
        <f-card v-for="(card, index) in cards" :key="card.id">
            <template #header="{ headingSlotClass }">
                <h3 :class="headingSlotClass">{{ cardTitle(card, index) }}</h3>
            </template>
            <template #default>
                <p>
                    <label class="label">Typ av husdjur</label>
                    <span>{{ capitalize(card.animalType) }}</span>
                </p>
                <template v-if="variant === 'long'">
                    <p>
                        <label class="label">Ålder</label>
                        <span>{{ formatAge(card.age) }}</span>
                    </p>
                    <p>
                        <label class="label">Antal ben</label>
                        <span>{{ card.legs }}</span>
                    </p>
                    <p>
                        <label class="label">Vikt</label>
                        <span>{{ card.weight }}</span>
                    </p>
                </template>
                <p>
                    <label class="label">Är det bara du som bor med husdjuret?</label>
                    <span>{{ formatGuardianship(card.soleGuardianship) }}</span>
                </p>
            </template>
            <template #footer>
                <div class="button-group">
                    <f-button
                        variant="tertiary"
                        align-text
                        class="button-group__item"
                        icon-left="pen"
                        @click="editCard(card)"
                    >
                        Ändra
                    </f-button>
                    <f-button
                        variant="tertiary"
                        align-text
                        class="button-group__item"
                        icon-left="trashcan"
                        @click="deleteCard(card)"
                    >
                        Ta bort
                    </f-button>
                </div>
            </template>
        </f-card>

        <f-button variant="secondary" size="medium" icon-left="plus" @click="addCard"> Lägg till </f-button>
    </div>
</template>
