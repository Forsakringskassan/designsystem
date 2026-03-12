<script setup lang="ts">
import { ref } from "vue";
import { FButton } from "../components";
import { useModal } from "../utils";

const namn = ref("World");
const { confirmModal } = useModal();

function openModal(): void {
    confirmModal({
        confirm: "Confirm",
        content: "Content",
        dismiss: "Dismiss",
        heading: "Heading",
    })
        .then((value) => {
            if (value) {
                console.log("Confirm");
            } else {
                console.log("Close");
            }
        })
        .catch(() => {
            // ignore
        });
}
async function openModalAsync(): Promise<void> {
    const confirmed = await confirmModal({
        confirm: "Confirm",
        content: "Content",
        dismiss: "Dismiss",
        heading: "Heading",
    });
    if (confirmed) {
        console.log("Confirm");
    } else {
        console.log("Close");
    }
}

async function asyncFunc(): Promise<void> {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("");
        }, 2000);
    });
    console.log("Test async func!");
}

function disabled(): void {
    console.log("disabled");
}
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
        <f-button @click="openModal">Öppna modal</f-button>
        <f-button @click="openModalAsync">Öppna modal async</f-button>
        <f-button @click="asyncFunc">Async func</f-button>
        <f-button disabled @click="disabled">Disabled</f-button>
    </div>
</template>
