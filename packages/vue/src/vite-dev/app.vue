<template>
    <div class="row">
        <div class="col col--md-6">
            <h1>Dold caption</h1>

            <p>Användningsfall: synlig rubrik ovanför tabellen</p>

            <p>Samtliga alternativ ger:</p>

            <dl style="border: 1px solid #aaa; padding: 0.5rem">
                <dt>Accessible name</dt>
                <dd><code>Kända Ankeborgare</code></dd>
            </dl>

            <h2>Alternativ 1: caption element med sr-only text</h2>
            <p><strong>KRÄVER BUGGRÄTTNING I FKUI!</strong>: Detta är trasigt sen Vue 3 migrering</p>
            <pre><code>&lt;table&gt;<br>  &lt;caption&gt;<br>    &lt;span class="sr-only"&gt;Kända Ankeborgare&lt;/span&gt;<br>  &lt;/caption><br>&lt;table&gt;</code></pre>

            <h3>Kända Ankeborgare</h3>
            <f-data-table :rows key-attribute="id">
                <template #caption>
                    <span class="sr-only">Kända Ankeborgare</span>
                </template>
                <template #default="{ row }">
                    <f-table-column name="id" title="ID" type="numeric" shrink>
                        {{ row.id }}
                    </f-table-column>
                    <f-table-column name="sv" title="Svenska" type="text" expand>
                        {{ row.sv }}
                    </f-table-column>
                    <f-table-column name="en" title="Engelska" type="text" expand>
                        {{ row.en }}
                    </f-table-column>
                </template>
            </f-data-table>

            <h2>Alternativ 2: aria-label</h2>
            <pre><code>&lt;table aria-label="Kända Ankeborgare"&gt;&lt;table&gt;</code></pre>

            <h3>Kända Ankeborgare</h3>
            <f-data-table :rows key-attribute="id" aria-label="Kända Ankeborgare">
                <template #default="{ row }">
                    <f-table-column name="id" title="ID" type="numeric" shrink>
                        {{ row.id }}
                    </f-table-column>
                    <f-table-column name="sv" title="Svenska" type="text" expand>
                        {{ row.sv }}
                    </f-table-column>
                    <f-table-column name="en" title="Engelska" type="text" expand>
                        {{ row.en }}
                    </f-table-column>
                </template>
            </f-data-table>

            <h2>Alternativ 3: aria-labelledby</h2>
            <pre><code>&lt;table aria-labelledby="table-heading"&gt;&lt;table&gt;</code></pre>

            <h3 id="table-heading">Kända Ankeborgare</h3>
            <f-data-table :rows key-attribute="id" aria-labelledby="table-heading">
                <template #default="{ row }">
                    <f-table-column name="id" title="ID" type="numeric" shrink>
                        {{ row.id }}
                    </f-table-column>
                    <f-table-column name="sv" title="Svenska" type="text" expand>
                        {{ row.sv }}
                    </f-table-column>
                    <f-table-column name="en" title="Engelska" type="text" expand>
                        {{ row.en }}
                    </f-table-column>
                </template>
            </f-data-table>
        </div>
    </div>
</template>

<script setup lang="ts">
import { FDataTable, FTableColumn } from "../components";

const rows = [
    { id: 1, sv: "Kalle Anka", en: "Donald Duck" },
    { id: 2, sv: "Kajsa Anka", en: "Daisy Duck" },
    { id: 3, sv: "Joakim von Anka", en: "Scrooge McDuck" },
    { id: 4, sv: "Guld-Ivar Flinthjärta", en: "Flintheart Glomgold" },
    { id: 5, sv: "Magica de Hex", en: "Magica De Spell" },
    { id: 6, sv: "Fröken Näbblund", en: "Miss Quackfaster" },
];
</script>
