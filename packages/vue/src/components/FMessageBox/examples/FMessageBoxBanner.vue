<script>
import { defineComponent } from "vue";
import { FMessageBox } from "@fkui/vue";

export default defineComponent({
    name: "FMessageBoxBanner",
    components: { FMessageBox },
});
</script>

<template>
    <f-message-box type="error" banner>
        <p>
            Det verkar som att du inte har någon internetuppkoppling just nu. Tänk på att du behöver
            uppkoppling för att kunna signera
        </p>
    </f-message-box>
</template>
