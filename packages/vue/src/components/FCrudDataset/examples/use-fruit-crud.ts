import { type Ref } from "vue";
import FruitFormModal from "./FruitFormModal.vue";
import { type FruitData } from "./fruit-data";
import {
    type FCrudDatasetCommitAdd,
    type FCrudDatasetCommitEdit,
    type FCrudDatasetCommitRemove,
    useModal,
} from "@fkui/vue";

/**
 * Example handlers for `FCrudDataset` opening modals to add, edit and remove fruits.
 *
 * @internal
 */
export function useFruitCrud(fruits: Ref<FruitData[]>): {
    onAdd(this: void, commit: FCrudDatasetCommitAdd<FruitData>): Promise<void>;
    onEdit(
        this: void,
        fruit: FruitData,
        commit: FCrudDatasetCommitEdit<FruitData>,
    ): Promise<void>;
    onRemove(
        this: void,
        fruit: FruitData,
        commit: FCrudDatasetCommitRemove,
    ): Promise<void>;
} {
    const { formModal, confirmModal } = useModal();

    function nextId(): string {
        const max = fruits.value.reduce(
            (max, it) => Math.max(max, Math.trunc(Number(it.id))),
            0,
        );
        return String(max + 1);
    }

    return {
        async onAdd(commit) {
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
        async onEdit(fruit, commit) {
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
        async onRemove(fruit, commit) {
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
