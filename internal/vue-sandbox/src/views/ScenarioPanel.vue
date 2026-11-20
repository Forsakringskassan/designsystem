<script setup lang="ts">
import { computed } from "vue";
import "./scenario-panel.css";

export interface ScenarioState {
    /** Number of commit() calls (add, edit, remove) */
    ops: number;
    /** Number of update:modelValue events received */
    emits: number;
    log: string[];
}

const {
    title,
    usage,
    state,
    rows = undefined,
    rowsNote = undefined,
} = defineProps<{
    title: string;
    /** Describes how the component is used in this scenario */
    usage: string;
    /** What the user should do and what to look for */
    instruction: string;
    state: ScenarioState;
    /** The consumer's current data, i.e. what the parent actually holds in `rows` */
    rows?: unknown[];
    /** Shown instead of the data when the consumer has no `rows` */
    rowsNote?: string;
}>();

defineEmits<{ reset: [] }>();

/* Not a computed on purpose: in-place mutations of non-reactive arrays must show up on every render */
function formatRows(items: unknown[]): string {
    return items.map((it) => JSON.stringify(it)).join("\n");
}

const status = computed(() => {
    if (state.ops === 0) {
        return { kind: "idle", text: "Ej testad: klicka på knapparna nedan" };
    }
    if (state.emits === state.ops) {
        return { kind: "ok", text: `OK: ${state.ops} operationer gav ${state.emits} emits` };
    }
    return { kind: "fail", text: `FEL: ${state.ops} operationer gav bara ${state.emits} emits` };
});
</script>

<template>
    <section class="scenario" :class="`scenario--${status.kind}`">
        <header class="scenario__header">
            <h2>{{ title }}</h2>
            <span class="scenario__status">{{ status.text }}</span>
        </header>

        <dl class="scenario__info">
            <dt>Uppsättning (så här används komponenten)</dt>
            <dd>
                <pre class="scenario__code">{{ usage }}</pre>
            </dd>
            <dt>Gör så här</dt>
            <dd>{{ instruction }}</dd>
        </dl>

        <div class="scenario__demo">
            <slot></slot>
        </div>

        <div class="scenario__rows">
            <strong>
                Aktuell data i föräldern (<code>rows</code>)<template v-if="rows"> – {{ rows.length }} rader</template>
            </strong>
            <p v-if="!rows">{{ rowsNote ?? "(ingen data)" }}</p>
            <p v-else-if="rows.length === 0">(tom)</p>
            <pre v-else class="scenario__code">{{ formatRows(rows) }}</pre>
        </div>

        <div class="scenario__log">
            <div class="scenario__log-header">
                <strong>Händelselogg</strong>
                <button type="button" @click="$emit('reset')">Rensa</button>
            </div>
            <ol v-if="state.log.length > 0">
                <li v-for="(entry, index) in state.log" :key="index">{{ entry }}</li>
            </ol>
            <p v-else>(tom)</p>
            <p class="scenario__legend">▶ = commit() anropades &nbsp; ⚡ = update:modelValue emittades</p>
        </div>
    </section>
</template>
