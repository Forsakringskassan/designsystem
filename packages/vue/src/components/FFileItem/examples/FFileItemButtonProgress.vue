<script>
import { defineComponent } from "vue";
import { FFileItem, FIcon, FProgressbar } from "@fkui/vue";

export default defineComponent({
    name: "FFileItemButtonProgress",
    components: { FFileItem, FIcon, FProgressbar },
    data() {
        return {
            fileName: "bar.pdf",
            mimeType: "application/pdf",
            progress: 30,
            filteredProgress: 30,
        };
    },
});
</script>

<template>
    <div>
        <label>
            Progress:
            <!-- [html-validate-disable-next no-inline-style] -->
            <input
                id="upload-progress"
                v-model.number="progress"
                type="number"
                style="margin-bottom: 20px"
                @input="filteredProgress = progress === '' ? 0 : progress"
        /></label>

        <f-file-item :file-name="fileName" :mime-type="mimeType">
            <template #row>
                <button
                    v-if="progress < 100"
                    type="button"
                    class="button button--tertiary button--medium file-item__file-remove file-item__abort"
                >
                    <f-icon name="close" class="button__icon"></f-icon>
                    <span> Avbryt uppladdning </span>
                </button>
                <button
                    v-else-if="progress === 100"
                    type="button"
                    class="button button--tertiary button--medium file-item__file-remove"
                >
                    <f-icon name="trashcan" class="button__icon"></f-icon>
                    Ta bort
                </button>
            </template>

            <f-progressbar
                v-if="progress < 100"
                aria-label="progress"
                :value="filteredProgress"
            ></f-progressbar>
        </f-file-item>
    </div>
</template>
