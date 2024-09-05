<template>
    <div class="f-confirm-modal">
        <button type="button" class="button button--secondary" @click="onClick">Öppna Modal</button>
        <pre v-if="result"> Resultat: {{ result }} </pre>
        <div>
            <f-confirm-modal
                :is-open="isOpen"
                :buttons="buttons"
                @confirm="confirm"
                @dismiss="dismiss"
                @close="close"
            >
                <template #heading> Träutensilierna </template>
                <template #content>
                    Träutensilierna i ett tryckeri äro ingalunda en oviktig faktor, för trevnadens,
                    ordningens och ekonomiens upprätthållande, och dock är det icke sällan som
                    sorgliga erfarenheter göras på grund af det oförstånd med hvilket kaster,
                    formbräden och regaler tillverkas och försäljas Kaster som äro dåligt hopkomna
                    och af otillräckligt.
                </template>
            </f-confirm-modal>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { FConfirmModal } from "@fkui/vue";

export default defineComponent({
    name: "FConfirmModalExample",
    components: { FConfirmModal },
    inheritAttrs: true,
    data() {
        return {
            action: "",
            result: "",
            isOpen: false,
            buttons: [
                { label: "Ja, gör detta", event: "confirm", type: "primary" },
                { label: "Nej, gör inte detta", event: "dismiss", type: "secondary" },
            ],
        };
    },
    methods: {
        onClick() {
            this.isOpen = true;
            this.result = "";
        },
        confirm() {
            this.result = "bekräftade";
            this.isOpen = false;
        },
        dismiss() {
            this.result = "avböjde";
            this.isOpen = false;
        },
        close(reason) {
            this.action = reason;
            this.isOpen = false;
        },
    },
});
</script>
