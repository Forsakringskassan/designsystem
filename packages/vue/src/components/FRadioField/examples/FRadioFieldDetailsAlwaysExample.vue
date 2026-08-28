<script setup lang="ts">
import { ref } from "vue";
import { FFieldset, FRadioField } from "@fkui/vue";

const illness = ref<string>();
</script>

<template>
    <div class="row">
        <div class="col col--md-9">
            <f-fieldset name="illness" show-details="always">
                <template #label> Vad hade barnet? </template>
                <f-radio-field v-model="illness" value="temporary">
                    Tillfällig sjukdom
                    <template #details> som förkylning eller brutet ben </template>
                </f-radio-field>
                <f-radio-field v-model="illness" value="long-term">
                    Långvarig sjukdom
                    <template #details> som diabetes eller astma </template>
                </f-radio-field>
            </f-fieldset>
        </div>
    </div>
</template>
