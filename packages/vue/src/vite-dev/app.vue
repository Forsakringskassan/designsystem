<script setup lang="ts">
import { ref } from "vue";
import { FTextField } from "../components";

const namn = ref("World");
</script>

<template>
    <div class="container">
        <h1>@fkui/vue</h1>

        <p>A few common commands to keep track of:</p>
        <dl>
            <dt><code>npm run vue unit</code></dt>
            <dd>Run Jest unit tests</dd>
            <dt><code>npm run vue unit -- Foobar</code></dt>
            <dd>Run unit tests matching "Foobar"</dd>
            <dt><code>npm run vue unit -- -u</code></dt>
            <dd>Update snapshots</dd>
            <dt><code>npm exec cypress -- open --component</code></dt>
            <dd>Run Cypress Component Tests</dd>
            <dt><code>npm run prettier:write</code></dt>
            <dd>Reformat files</dd>
            <dt><code>npm run lint</code></dt>
            <dd>Run all linting and static analyzis</dd>
            <dt><code>npm test</code></dt>
            <dd>Run all tests</dd>
        </dl>

        <hr />

        <h2>Sandbox</h2>

        <f-text-field v-model="namn" v-validation.required maxlength="100"> Namn </f-text-field>
        <pre>Hello {{ namn }}!</pre>
    </div>
</template>
