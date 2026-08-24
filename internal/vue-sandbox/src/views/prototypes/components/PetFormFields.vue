<script lang="ts">
import { type PropType, defineComponent } from "vue";
import { FFieldset, FNumericTextField, FRadioField, FSelectField, FTextField } from "@fkui/vue";

export interface PetFormData {
    animalType: string;
    name: string;
    age: string;
    legs: number | undefined;
    weight: number | undefined;
    soleGuardianship: string;
}

export default defineComponent({
    components: { FFieldset, FNumericTextField, FRadioField, FSelectField, FTextField },
    props: {
        modelValue: {
            type: Object as PropType<PetFormData>,
            required: true,
        },
        variant: {
            type: String as PropType<"long" | "short">,
            default: "long",
        },
        groupId: {
            type: String,
            required: true,
        },
    },
    emits: ["update:modelValue"],
    setup(props, { emit }) {
        function update(field: keyof PetFormData, value: unknown): void {
            emit("update:modelValue", { ...props.modelValue, [field]: value });
        }
        return { update };
    },
});
</script>

<template>
    <f-text-field
        v-validation.required.maxLength="{ maxLength: { length: 100 } }"
        :model-value="modelValue.name"
        @update:model-value="update('name', $event)"
    >
        Namn
    </f-text-field>
    <f-select-field
        v-validation.required
        :model-value="modelValue.animalType"
        @update:model-value="update('animalType', $event)"
    >
        <template #label>Typ av husdjur</template>
        <option disabled hidden value="">Välj…</option>
        <option value="hund">Hund</option>
        <option value="katt">Katt</option>
        <option value="marsvin">Marsvin</option>
        <option value="kanin">Kanin</option>
    </f-select-field>
    <template v-if="variant === 'long'">
        <f-fieldset v-validation.required :name="`${groupId}-age`">
            <template #label>Hur gammalt är husdjuret?</template>
            <f-radio-field :model-value="modelValue.age" value="0-3" @update:model-value="update('age', $event)">
                0 till 3 år
            </f-radio-field>
            <f-radio-field :model-value="modelValue.age" value="4-7" @update:model-value="update('age', $event)">
                4 till 7 år
            </f-radio-field>
            <f-radio-field :model-value="modelValue.age" value="over-8" @update:model-value="update('age', $event)">
                8 år eller mer
            </f-radio-field>
        </f-fieldset>
        <f-numeric-text-field
            v-validation.required
            :model-value="modelValue.legs"
            @update:model-value="update('legs', $event)"
        >
            Hur många ben har husdjuret?
        </f-numeric-text-field>
        <f-numeric-text-field
            v-validation.required
            :model-value="modelValue.weight"
            @update:model-value="update('weight', $event)"
        >
            Hur mycket väger husdjuret?
        </f-numeric-text-field>
    </template>
    <f-fieldset v-validation.required :name="`${groupId}-sole-guardianship`" horizontal>
        <template #label>Är det bara du som bor med husdjuret?</template>
        <f-radio-field
            :model-value="modelValue.soleGuardianship"
            value="yes"
            @update:model-value="update('soleGuardianship', $event)"
        >
            Ja
        </f-radio-field>
        <f-radio-field
            :model-value="modelValue.soleGuardianship"
            value="no"
            @update:model-value="update('soleGuardianship', $event)"
        >
            Nej
        </f-radio-field>
    </f-fieldset>
</template>
