<script lang="ts">
import { defineComponent } from "vue";
import { FButton, FFileItem, FProgressbar } from "@fkui/vue";

export default defineComponent({
    name: "FFileItemButtonProgress",
    components: { FButton, FFileItem, FProgressbar },
    data() {
        return {
            fileName: "bar.pdf",
            mimeType: "application/pdf",
            progress: 30 as number | "",
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

        <f-file-item :file-name :mime-type>
            <template #row>
                <f-button
                    v-if="filteredProgress < 100"
                    data-test="file-item__file-remove"
                    icon-left="close"
                    variant="tertiary"
                >
                    Avbryt uppladdning
                </f-button>
                <f-button
                    v-else-if="filteredProgress === 100"
                    data-test="file-item__file-remove"
                    icon-left="trashcan"
                    variant="tertiary"
                >
                    Ta bort
                </f-button>
            </template>

            <f-progressbar
                v-if="filteredProgress < 100"
                aria-label="progress"
                :value="filteredProgress"
            ></f-progressbar>
        </f-file-item>
    </div>
</template>
