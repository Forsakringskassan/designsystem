<script setup lang="ts">
import DatasetTableDual from "./DatasetTableDual.vue";
import DatasetTableSingle from "./DatasetTableSingle.vue";
import DatasetTableSubsets from "./DatasetTableSubsets.vue";
import { type Product } from "./product";
import { useDatasetRef } from "@fkui/vue";

const products = useDatasetRef<Product>([
    { name: "Äpple", category: "Frukt", tags: ["ekologisk"], comment: "" },
    { name: "Banan", category: "Frukt", tags: ["importerad"], comment: "" },
    { name: "Morot", category: "Grönsak", tags: ["ekologisk", "lokal"], comment: "" },
    { name: "Potatis", category: "Grönsak", tags: ["lokal"], comment: "" },
    { name: "Apelsin", category: "Frukt", tags: ["ekologisk", "importerad"], comment: "" },
]);
</script>

<template>
    <section>
        <h2>Vad har ändrats (och varför)</h2>
        <p>
            Rotorsaken till båda buggarna nedan var att radmetadata (<code>rowIndex</code>,
            <code>ariaPosInSet</code> m.fl.) lagrades som
            <strong>en delad, muterbar egenskap direkt på varje radobjekt</strong> — oavsett vilket dataset eller vy som
            läste den. Det fick två konsekvenser:
        </p>
        <ul>
            <li>
                <code>FSortFilterDataset</code> byggde sin sorterade/filtrerade vy genom att <em>ärva</em>
                käll-datasetets metadata istället för att räkna om den för sin egen ordning. Två oberoende sorteringar
                av samma källa visade därför samma (ursprungliga, osorterade) position.
            </li>
            <li>
                När samma radobjekt ingick i två oberoende dataset (t.ex. två överlappande delmängder) skrev den senast
                skapade vyns omräkning över den första vyns metadata, eftersom det bara fanns en plats att lagra värdet
                på.
            </li>
        </ul>

        <h3>Lösning</h3>
        <ul>
            <li>
                <code>FSortFilterDataset</code>s sorterade/filtrerade resultat byggs nu alltid som ett nytt, eget
                dataset istället för att ärva käll-datasetets metadata — varje vy räknar om sin egen position.
            </li>
            <li>
                Radmetadata lagras nu per dataset i en egen <code>WeakMap</code> istället för en delad egenskap på
                radobjektet, så två dataset som råkar dela radobjekt inte längre kan skriva över varandras metadata.
                <code>FTable</code> slår alltid upp metadata via det specifika dataset den fått, vilket garanterar
                korrekt rendering oavsett vad andra tabeller gör med samma källdata.
            </li>
            <li>
                En extra komplikation upptäcktes under arbetet: Vue slår in reaktiva arrayer/objekt i Proxies, så samma
                logiska rad kan nås via olika Proxy-referenser beroende på väg dit. En <code>WeakMap</code> som nycklar
                på referensen måste därför normaliseras med <code>toRaw()</code> vid varje läsning/skrivning — annars
                uppstår felet "Element not found in dataset".
            </li>
        </ul>

        <h3>Konsekvenser</h3>
        <ul>
            <li>
                Inget publikt API har ändrats — <code>toDataset()</code>, <code>useDatasetRef()</code>,
                <code>getDatasetMetadata()</code> m.fl. har kvar sina signaturer, verifierat mot
                <code>etc/vue.api.md</code>.
            </li>
            <li>
                Den publika varianten <code>getDatasetMetadata(element)</code> (utan dataset-kontext) har kvar sin gamla
                begränsning: anropas den direkt (utanför <code>FTable</code>) på ett radobjekt som delas mellan två
                dataset kan den fortfarande returnera fel vys metadata. Det påverkar inte längre vad som faktiskt visas
                i tabellerna, bara den fristående hjälpfunktionen vid manuellt bruk.
            </li>
            <li>
                Något mer intern komplexitet: varje dataset bär nu på en egen <code>WeakMap</code>-lagring istället för
                att bara stämpla radobjektet, och alla interna läs-/skrivanrop måste normalisera med
                <code>toRaw()</code>.
            </li>
            <li>
                Befintliga tester plus två nya regressionstester (en per bugg) är gröna, och
                <code>build:api</code>/<code>build:dts</code> är rena (ingen typ- eller API-avvikelse).
            </li>
        </ul>
    </section>

    <h2>A. En tabell</h2>
    <dataset-table-single v-model="products" />

    <h2>B. Två tabeller, samma källa</h2>
    <dataset-table-dual v-model="products" />

    <h2>C. Två tabeller, överlappande delmängder</h2>
    <dataset-table-subsets v-model="products" />
</template>
