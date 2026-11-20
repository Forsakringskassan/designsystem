<script setup lang="ts">
import { reactive, ref, shallowRef } from "vue";
import { FCrudDataset } from "../components";
import {
    type FCrudDatasetCommitAdd,
    type FCrudDatasetCommitEdit,
    type FCrudDatasetCommitRemove,
} from "../components/FCrudDataset/crud-dataset-callbacks";
import ScenarioPanel, { type ScenarioState } from "./ScenarioPanel.vue";

interface Fruit {
    id: string;
    name: string;
}

function createFruits(): Fruit[] {
    return [
        { id: "1", name: "Äpple" },
        { id: "2", name: "Banan" },
    ];
}

let nextId = 100;

/**
 * Creates callbacks which commit directly (no modal) so each operation is a
 * single click, and which log every commit() and every update:modelValue.
 */
function useScenario(): {
    state: ScenarioState;
    onAdd(commit: FCrudDatasetCommitAdd<Fruit>): void;
    onEdit(fruit: Fruit, commit: FCrudDatasetCommitEdit<Fruit>): void;
    onRemove(fruit: Fruit, commit: FCrudDatasetCommitRemove): void;
    onUpdate(value: Fruit[]): void;
    reset(): void;
} {
    const state = reactive<ScenarioState>({ ops: 0, emits: 0, log: [] });
    return {
        state,
        onAdd(commit) {
            const id = String(nextId++);
            state.ops++;
            state.log.push(`▶ lägg till "Frukt ${id}"`);
            commit({ id, name: `Frukt ${id}` });
        },
        onEdit(fruit, commit) {
            state.ops++;
            state.log.push(`▶ ändra "${fruit.name}"`);
            commit({ ...fruit, name: `${fruit.name}*` });
        },
        onRemove(fruit, commit) {
            state.ops++;
            state.log.push(`▶ ta bort "${fruit.name}"`);
            commit();
        },
        onUpdate(value) {
            state.emits++;
            state.log.push(`⚡ update:modelValue (${value.length} rader)`);
        },
        reset() {
            state.ops = 0;
            state.emits = 0;
            state.log = [];
        },
    };
}

/* Code snippets shown in the "Uppsättning" section of each scenario */
const usage1 = `// Djupt reaktiv ref, binds med v-model
const rows = ref([...]);

<f-crud-dataset v-model="rows" :on-add :on-edit :on-remove />`;

const usage2 = `// Icke djupt reaktiv data (t.ex. store eller oföränderlig data).
// Föräldern ersätter bara sin array när eventet kommer.
const rows = shallowRef([...]);

<f-crud-dataset
    :model-value="rows"
    @update:model-value="rows = $event"
    :on-add :on-edit :on-remove
/>`;

const usage3 = `// shallowRef binds med v-model
const rows = shallowRef([...]);

<f-crud-dataset v-model="rows" :on-add :on-edit :on-remove />`;

const usage4 = `// Ingen modelValue alls, komponenten använder sin defaultarray.
// Föräldern lyssnar bara på eventet.
<f-crud-dataset
    :on-add
    @update:model-value="(rows) => ..."
/>`;

/* 1. ref + v-model */
const deepRef = ref(createFruits());
const scenario1 = useScenario();

/* 2. :model-value + @update:model-value, parent only reacts to the event */
const controlled = shallowRef(createFruits());
const scenario2 = useScenario();
function onControlledUpdate(value: Fruit[]): void {
    scenario2.onUpdate(value);
    controlled.value = value;
}

/* 3. shallowRef + v-model */
const shallow = shallowRef(createFruits());
const scenario3 = useScenario();

/* 4. no v-model, only listening for the event */
const scenario4 = useScenario();
</script>

<template>
    <div class="container">
        <h1>FCrudDataset: modelValue</h1>

        <h2>Så här läser du sidan</h2>
        <ul>
            <li>
                Varje ruta nedan är ett scenario. Klicka på knapparna i den grå ytan (lägg till, ändra, ta bort) och
                titta på statusraden och händelseloggen.
            </li>
            <li>
                <strong>Förväntat:</strong> varje operation (▶) följs av exakt en <code>update:modelValue</code> (⚡)
                och listan uppdateras.
            </li>
            <li>
                <strong>Faktiskt:</strong> lägg till och ändra saknar ⚡. Bara ta bort emittar. Scenario 1 visar att
                listan ändå uppdateras (av en slump), 2 och 3 visar att listan inte uppdateras alls, och 4 visar att
                konsumenten aldrig får veta något.
            </li>
        </ul>

        <scenario-panel
            title="1. ref + v-model"
            :usage="usage1"
            instruction="Klicka på Lägg till ny, Ändra och Ta bort. Listan uppdateras alltid, men loggen saknar ⚡ för lägg till och ändra."
            :state="scenario1.state"
            :rows="deepRef"
            @reset="scenario1.reset()"
        >
            <f-crud-dataset
                v-model="deepRef"
                :on-add="scenario1.onAdd"
                :on-edit="scenario1.onEdit"
                :on-remove="scenario1.onRemove"
                @update:model-value="scenario1.onUpdate"
            >
                <template #default="{ updateItem, deleteItem }">
                    <ul>
                        <li v-for="row in deepRef" :key="row.id">
                            {{ row.name }}
                            <button type="button" @click="updateItem(row)">Ändra</button>
                            <button type="button" @click="deleteItem(row)">Ta bort</button>
                        </li>
                    </ul>
                </template>
            </f-crud-dataset>
        </scenario-panel>

        <scenario-panel
            title="2. :model-value + @update:model-value"
            :usage="usage2"
            instruction="Klicka på Lägg till ny och Ändra: listan ändras inte och ingen ⚡ loggas. Klicka sedan på Ta bort: ⚡ loggas och listan uppdateras (och visar plötsligt även tidigare tillägg)."
            :state="scenario2.state"
            :rows="controlled"
            @reset="scenario2.reset()"
        >
            <f-crud-dataset
                :model-value="controlled"
                :on-add="scenario2.onAdd"
                :on-edit="scenario2.onEdit"
                :on-remove="scenario2.onRemove"
                @update:model-value="onControlledUpdate"
            >
                <template #default="{ updateItem, deleteItem }">
                    <ul>
                        <li v-for="row in controlled" :key="row.id">
                            {{ row.name }}
                            <button type="button" @click="updateItem(row)">Ändra</button>
                            <button type="button" @click="deleteItem(row)">Ta bort</button>
                        </li>
                    </ul>
                </template>
            </f-crud-dataset>
        </scenario-panel>

        <scenario-panel
            title="3. shallowRef + v-model"
            :usage="usage3"
            instruction="Klicka på Lägg till ny och Ändra: arrayen muteras men ingen reaktivitet triggas, så listan ändras inte. Ta bort fungerar."
            :state="scenario3.state"
            :rows="shallow"
            @reset="scenario3.reset()"
        >
            <f-crud-dataset
                v-model="shallow"
                :on-add="scenario3.onAdd"
                :on-edit="scenario3.onEdit"
                :on-remove="scenario3.onRemove"
                @update:model-value="scenario3.onUpdate"
            >
                <template #default="{ updateItem, deleteItem }">
                    <ul>
                        <li v-for="row in shallow" :key="row.id">
                            {{ row.name }}
                            <button type="button" @click="updateItem(row)">Ändra</button>
                            <button type="button" @click="deleteItem(row)">Ta bort</button>
                        </li>
                    </ul>
                </template>
            </f-crud-dataset>
        </scenario-panel>

        <scenario-panel
            title="4. Utan v-model"
            :usage="usage4"
            instruction="Klicka på Lägg till ny. Ingen ⚡ loggas, så konsumenten får aldrig veta att något lades till. Före PR:en emittades update:modelValue här."
            :state="scenario4.state"
            rows-note="(finns inte: ingen modelValue skickas in, så föräldern har ingen data att visa)"
            @reset="scenario4.reset()"
        >
            <f-crud-dataset :on-add="scenario4.onAdd" @update:model-value="scenario4.onUpdate" />
        </scenario-panel>
    </div>
</template>
