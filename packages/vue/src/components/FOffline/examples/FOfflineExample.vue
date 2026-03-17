<script lang="ts">
import { defineComponent } from "vue";
import { FButton, FOffline } from "@fkui/vue";

export default defineComponent({
    name: "FOfflineExample",
    components: { FButton, FOffline },
    data() {
        return {
            isPushed: false,
            offlineMessage:
                "Det verkar som att du inte har någon internetuppkoppling just nu. Tänk på att du behöver uppkoppling för att kunna signera",
        };
    },
    methods: {
        toggle() {
            if (this.isPushed) {
                window.dispatchEvent(new Event("online"));
                this.isPushed = false;
            } else {
                window.dispatchEvent(new Event("offline"));
                this.isPushed = true;
            }
        },
    },
});
</script>

<template>
    <div v-test="'offlineExample'">
        <f-offline> {{ offlineMessage }} </f-offline>
        <f-button @click="toggle">Visa/Dölj komponent</f-button>
    </div>
</template>
