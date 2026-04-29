<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { FButton, IPopup } from "@fkui/vue";

export default defineComponent({
    name: "IPopupExample",
    components: { FButton, IPopup },
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        onClickOpen() {
            this.isOpen = true;
        },
        onClickClose() {
            this.isOpen = false;
        },
        onClose() {
            this.isOpen = false;
        },
    },
});
</script>

<template>
    <div>
        <f-button ref="popupAnchor" variant="secondary" @click="onClickOpen">
            Öppna popup
        </f-button>

        <i-popup :is-open :anchor="$refs.popupAnchor as HTMLElement" @close="onClose">
            <div class="my-awesome-popup">
                <p>
                    Träutensilierna i ett tryckeri äro ingalunda en oviktig faktor, för trevnadens,
                    ordningens och ekonomiens upprätthållande, och dock är det icke sällan som
                    sorgliga erfarenheter göras på grund af det oförstånd med hvilket kaster,
                    formbräden och regaler tillverkas och försäljas Kaster som äro dåligt hopkomna
                    och af otillräckligt.
                </p>
                <f-button variant="tertiary" @click="onClickClose">Stäng popup</f-button>
            </div>
        </i-popup>
    </div>
</template>

<style lang="scss">
.my-awesome-popup {
    border: 1px dashed lightgray;
    padding: 2rem;
    background: white;
}

.popup--overlay .my-awesome-popup {
    width: 25rem;
}

.popup--inline .my-awesome-popup {
    width: 100%;
}
</style>
