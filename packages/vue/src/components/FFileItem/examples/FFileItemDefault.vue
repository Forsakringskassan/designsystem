<script>
import { defineComponent } from "vue";
import { FFileItem } from "@fkui/vue";

export default defineComponent({
    name: "FFileItemDefault",
    components: { FFileItem },
    data() {
        return { fileName: "bar.jpg", fileType: "image/jpeg" };
    },
    methods: {},
});
</script>

<template>
    <f-file-item :file-name="fileName" :mime-type="fileType"></f-file-item>
</template>
