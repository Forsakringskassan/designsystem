<script lang="ts">
import { defineComponent } from "vue";
import { FOffline } from "..";

export default defineComponent({
    name: "FOfflineExample",
    components: { FOffline },
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
        <button type="button" @click="toggle">Visa/Dölj komponent</button>
    </div>
</template>
