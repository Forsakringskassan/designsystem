<script>
import { defineComponent } from "vue";
import { FFileItem } from "@fkui/vue";

const files = [
    { fileName: "my-image.png", fileType: "image/png" },
    { fileName: "my-document.pdf", fileType: "application/pdf" },
    { fileName: "my-document.doc", fileType: "application/msword" },
    { fileName: "my-file.txt", fileType: "text/plain" },
];

export default defineComponent({
    name: "FFileItemIcons",
    components: {
        FFileItem,
    },
    data() {
        return { files };
    },
});
</script>

<template>
    <div>
        <f-file-item
            v-for="item in files"
            :key="item.fileName"
            :file-name="item.fileName"
            :mime-type="item.fileType"
        ></f-file-item>
    </div>
</template>
