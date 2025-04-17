<script>
import { defineComponent } from "vue";
import { IPopup } from "@fkui/vue";

export default defineComponent({
    name: "IPopupExample",
    components: { IPopup },
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
        <button
            ref="popupAnchor"
            type="button"
            class="button button--secondary"
            @click="onClickOpen"
        >
            Öppna popup
        </button>

        <i-popup :is-open="isOpen" :anchor="$refs.popupAnchor" @close="onClose">
            <div class="my-awesome-popup">
                <p>
                    Träutensilierna i ett tryckeri äro ingalunda en oviktig faktor, för trevnadens,
                    ordningens och ekonomiens upprätthållande, och dock är det icke sällan som
                    sorgliga erfarenheter göras på grund af det oförstånd med hvilket kaster,
                    formbräden och regaler tillverkas och försäljas Kaster som äro dåligt hopkomna
                    och af otillräckligt.
                </p>
                <button type="button" class="button button--tertiary" @click="onClickClose">
                    Stäng popup
                </button>
            </div>
        </i-popup>
    </div>
</template>

<style lang="scss">
.my-awesome-popup {
    border: 1px dashed lightgray;
    padding: 2rem;
    background: white;

    .button {
        margin-bottom: 0px;
        width: auto;
    }
}

.popup--overlay .my-awesome-popup {
    width: 25rem;
}

.popup--inline .my-awesome-popup {
    width: 100%;
}
</style>
