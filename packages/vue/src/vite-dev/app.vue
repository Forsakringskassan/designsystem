<script setup lang="ts">
import { ref } from "vue";
import { FPageLayout, FFieldset, FCheckboxField, FDetailsPanel, useDetailsPanel } from "../components";
import { IResizePane } from "../internal-components";

const disabled = ref(false);
const enableLeft = ref(true);
const enableRight = ref(true);
const enableTop = ref(true);
const enableBottom = ref(true);

interface Item {
    name: string;
}

const details = useDetailsPanel<Item>("awesome-panel");

const AwesomePanel = FDetailsPanel<Item>;

function openItem(): void {
    details.open({ name: "Kalle Anka" });
}
</script>

<template>
    <f-page-layout layout="three-column">
        <template #right>
            <awesome-panel name="awesome-panel" resizable :disabled min="20%" max="50%" initial="40%">
                <template #default="{ item }">
                    <h2>Vänsterpanel</h2>
                    <dl>
                        <dt>Namn</dt>
                        <dd>{{ item.name }}</dd>
                    </dl>
                </template>
            </awesome-panel>
            <f-details-panel name="another-panel" resizable :disabled min="20%" max="50%" initial="40%">
                <template #default="{ item }">
                    <h2>Vänsterpanel</h2>
                    <dl>
                        <dt>Namn</dt>
                        <dd>{{ item.name }}</dd>
                    </dl>
                </template>
            </f-details-panel>
        </template>

        <template #content>
            <main>
                <h1>Lorem ipsum</h1>
                <p>Dolor sit amet.</p>
                <button type="button" @click="openItem">Öppna</button>
                <h3>Inställningar</h3>
                <f-fieldset>
                    <template #label>Areas</template>
                    <template #default>
                        <f-checkbox-field v-model="enableTop" :value="true">
                            <template #default>Header</template>
                        </f-checkbox-field>
                        <f-checkbox-field v-model="enableLeft" :value="true">
                            <template #default>Left panel</template>
                        </f-checkbox-field>
                        <f-checkbox-field v-model="enableRight" :value="true">
                            <template #default>Right panel</template>
                        </f-checkbox-field>
                        <f-checkbox-field v-model="enableBottom" :value="true">
                            <template #default>Bottom</template>
                        </f-checkbox-field>
                    </template>
                </f-fieldset>
                <f-fieldset>
                    <template #label>Settings</template>
                    <template #default>
                        <f-checkbox-field v-model="disabled" :value="true">
                            <template #default>Disabled</template>
                        </f-checkbox-field>
                    </template>
                </f-fieldset>
                <h3>Begränsa storlek</h3>
                <p>
                    Attributen <code>min=".."</code> och <code>max=".."</code> anger minsta respektive största storleken
                    en yta kan få. Båda kan sättas antingen till ett eller flera värden.
                </p>
                <ul>
                    <li>
                        Om <code>min</code> utelämnas är default <code>0</code>, effektivt sett ingen nedgre gräns för
                        minsta storlek.
                    </li>
                    <li>
                        Om <code>max</code> utelämnas är default fönstrets totala storlek, effektivt sett ingen övre
                        gränst för största storlek.
                    </li>
                </ul>
                <p>
                    Värden kan vara i pixlar (<code>px</code>) eller procent (<code>%</code>). För att sätta flera
                    värden använd mellanslag som separator.
                </p>
                <ul>
                    <li><code>200px</code> - min/max storlek satt till exakt 200px.</li>
                    <li><code>25%</code> - min/max storlek satt till 25% av fönstrets storlek.</li>
                    <li><code>200px 25%</code> - min/max storlek satt till minsta/största av 200px eller 25%.</li>
                </ul>
                <p>
                    <strong>Notera!</strong> Storlekarna i debug-utskrift inkluderar storleken på handtaget man drar i.
                    Just nu idag är den 4px så sätter man <code>min</code> till <code>200px</code> rapporteras det som
                    <code>204px</code> dvs <code>200px + 4px</code>. Det är förväntat beteende.
                </p>
                <h3>Tangentbord</h3>
                <ul>
                    <li><kbd>Vänster</kbd> ökar/minskar en vertikal panel.</li>
                    <li><kbd>Höger</kbd> ökar/minskar en vertikal panel.</li>
                    <li><kbd>Upp</kbd> ökar/minskar en horizontal panel.</li>
                    <li><kbd>Ner</kbd> ökar/minskar en horizontal panel.</li>
                    <li><kbd>Home</kbd> minskar ytan till minsta möjliga.</li>
                    <li><kbd>End</kbd> ökar ytan till största möjliga.</li>
                </ul>
            </main>
        </template>
    </f-page-layout>
</template>

<style>
body {
    background: #eee;
    margin: 0;
    padding: 0;
}

main {
    padding: 1rem;
}

.container {
    background: #fff;
}

.resize {
    background: rgb(144, 255, 255);
}

kbd {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.25rem;
    background: #fff;
}
</style>
