<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { FButton, FFileItem, FProgressbar } from "@fkui/vue";

export default defineComponent({
    name: "FFileItemButtonProgress",
    components: { FButton, FFileItem, FProgressbar },
    data(): {
        fileName: string;
        mimeType: string;
        progress: number | "";
        filteredProgress: number;
    } {
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

        <f-file-item :file-name :mime-type>
            <template #row>
                <f-button
                    v-if="filteredProgress < 100"
                    data-test="file-item__file-remove"
                    icon-left="close"
                    size="medium"
                    variant="tertiary"
                >
                    Avbryt uppladdning
                </f-button>
                <f-button
                    v-else-if="filteredProgress === 100"
                    data-test="file-item__file-remove"
                    icon-left="trashcan"
                    size="medium"
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
