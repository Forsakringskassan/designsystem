<script setup lang="ts">
import { useModal } from "@fkui/vue";
import ModalALotOfFields from "./ModalALotOfFields.vue";

const { formModal } = useModal();

async function openModalWithoutErrorList(): Promise<void> {
    try {
        await formModal(ModalALotOfFields);
    } catch {
        /* cancelled*/
    }
}

async function openModalWithErrorList(): Promise<void> {
    try {
        await formModal(ModalALotOfFields, {
            props: {
                useErrorList: true,
            },
        });
    } catch {
        /* cancelled*/
    }
}
</script>

<template>
    <div class="sandbox-root">
        <h1>FKUI Sandbox</h1>
        <p>
            Ett internt paket som innehåller en avskalad Vue-applikation. Applikationen är konsument av övriga
            FKUI-paket och innehåller enbart ett tomt exempel.
        </p>
        <p>
            <strong>Ändra och labba gärna här men glöm inte återställa innan merge!</strong>
        </p>
        <hr />
        <div>
            <button type="button" class="button" @click="openModalWithoutErrorList">Öppna modal utan fellista</button>
        </div>

        <div>
            <button type="button" class="button" @click="openModalWithErrorList">Öppna modal med fellista</button>
        </div>
    </div>
</template>

<style>
.sandbox-root {
    width: min(100% - 2rem, 80ch);
    margin: auto;
}

h1 {
    margin-top: 2rem;
}

hr {
    margin-bottom: 2rem;
}
</style>
