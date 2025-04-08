<script lang="ts">
import { FTextField } from "@fkui/vue";
import {
    ValidationErrorMessageBuilder,
    ValidationService,
    type Validator,
    isEmpty,
} from "@fkui/logic";
import { defineComponent } from "vue";

function startsWithPattern(input: string, pattern: string): boolean {
    return input.startsWith(pattern);
}

interface StartsWithConfig {
    startString?: string;
}

const defaultConfig = {
    startString: "demo",
};

export const startsWithValidator: Validator<StartsWithConfig> = {
    name: "startsWith",
    validation(value, element, userConfig) {
        if (isEmpty(value)) {
            return true;
        }
        const config = { ...defaultConfig, ...userConfig };
        return startsWithPattern(value, config.startString);
    },
};

ValidationService.registerValidator(startsWithValidator);
ValidationService.addValidationErrorMessages(
    ValidationErrorMessageBuilder.create()
        .map("startsWith", "Fältet börjar med fel värde.")
        .build(),
);

export default defineComponent({
    name: "CustomValidator",
    components: { FTextField },
    data() {
        return {
            modelFoo: "",
            modelBar: "",
            modelDemo: "",
        };
    },
});
</script>

<template>
    <div>
        <f-text-field
            v-model="modelFoo"
            v-validation.startsWith.maxLength="{
                startsWith: { startString: 'foo' },
                maxLength: { length: 20 },
            }"
        >
            Detta fält accepterar bara strängar som börjar med 'foo'
            <template #description="{ descriptionClass }">
                <span :class="descriptionClass"> Använder globalt felmeddelande </span>
            </template>
        </f-text-field>
        <f-text-field
            v-model="modelBar"
            v-validation.startsWith.maxLength="{
                startsWith: {
                    startString: 'bar',
                    errorMessage: 'Texten måste börja med bar',
                },
                maxLength: { length: 20 },
            }"
        >
            Detta fält accepterar bara strängar som börjar med 'bar'
            <template #description="{ descriptionClass }">
                <span :class="descriptionClass"> Använder ett specifik felmeddelande </span>
            </template>
        </f-text-field>
        <f-text-field
            v-model="modelDemo"
            v-validation.startsWith.maxLength="{
                maxLength: { length: 20 },
            }"
        >
            Detta fält accepterar bara strängar som börjar med 'demo'
            <template #description="{ descriptionClass }">
                <span :class="descriptionClass"> Saknar konfiguration för `startsWith` </span>
            </template>
        </f-text-field>
    </div>
</template>
