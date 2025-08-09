<script setup lang="ts" generic="T">
import { type Ref, ref } from "vue";
import { debounce } from "@fkui/logic";

const props = withDefaults(
    defineProps<{
        data: T[];
        sort?(data: T[]): T[];
        filter?(data: T[]): T[];
    }>(),
    {
        sort: (data: T[]) => {
            return data;
        },
        filter: (data: T[]) => {
            return data;
        },
    },
);

const filtered = ref(props.filter(props.data)) as unknown as Ref<T[]>;
const result = ref<T[]>(props.data);
const debouncedUpdate = debounce(update, 250);

function update(): void {
    filtered.value = props.filter(props.data);
    result.value = props.sort(filtered.value);
}
</script>

<template>
    <div class="sort-filter-dataset-ng">
        <slot name="filter" v-bind="{ update: debouncedUpdate }"></slot>
        <slot name="default" v-bind="{ result }"></slot>
    </div>
</template>
