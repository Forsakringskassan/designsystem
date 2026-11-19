import { type Ref } from "vue";
import FruitFormModal from "./FruitFormModal.vue";
import { type FruitData } from "./fruit-data";
import {
    type FCrudDatasetCommitCreate,
    type FCrudDatasetCommitDelete,
    type FCrudDatasetCommitUpdate,
    useModal,
} from "@fkui/vue";

/**
 * Example handlers for `FCrudDataset` opening modals to add, edit and remove fruits.
 *
 * @internal
 */
export function useFruitCrud(fruits: Ref<FruitData[]>): {
    onCreate(
        this: void,
        commit: FCrudDatasetCommitCreate<FruitData>,
    ): Promise<void>;
    onUpdate(
        this: void,
        fruit: FruitData,
        commit: FCrudDatasetCommitUpdate<FruitData>,
    ): Promise<void>;
    onDelete(
        this: void,
        fruit: FruitData,
        commit: FCrudDatasetCommitDelete,
    ): Promise<void>;
} {
    const { formModal, confirmModal } = useModal();

    function nextId(): string {
        const max = Math.max(
            0,
            ...fruits.value.map((it) => Math.trunc(Number(it.id))),
        );
        return String(max + 1);
    }

    return {
        async onCreate(commit) {
            try {
                /* eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- false positive, the proper type of vue components are not passed to typescript-eslint */
                const fruit = await formModal<FruitData>(FruitFormModal, {
                    props: {
                        heading: "Lägg till frukt",
                        confirmText: "Lägg till",
                        fruit: {
                            id: nextId(),
                            name: "",
                            origin: "",
                            description: "",
                        },
                    },
                });
                commit(fruit, `Frukten ${fruit.name} har lagts till`);
            } catch {
                /* user cancelled */
            }
        },
        async onUpdate(fruit, commit) {
            try {
                /* eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- false positive, the proper type of vue components are not passed to typescript-eslint */
                const modified = await formModal<FruitData>(FruitFormModal, {
                    props: {
                        heading: "Ändra frukt",
                        confirmText: "Spara",
                        fruit,
                    },
                });
                commit(modified, `Frukten ${modified.name} har ändrats`);
            } catch {
                /* user cancelled */
            }
        },
        async onDelete(fruit, commit) {
            const confirmed = await confirmModal({
                heading: "Ta bort frukt",
                content: `Vill du verkligen ta bort frukten "${fruit.name}" med ID ${fruit.id}?`,
                confirm: "Ja, ta bort",
                dismiss: "Nej, avbryt",
            });
            if (confirmed) {
                commit(`Frukten ${fruit.name} har tagits bort`);
            }
        },
    };
}
