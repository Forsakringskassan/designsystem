<script lang="ts">
import { type Component, defineComponent, type PropType } from "vue";
import { EventBus } from "../../utils";
import { ErrorViewData } from "../../types";
import FErrorPage from "./FErrorPage.vue";
import { UNHANDLED_ERROR_EVENT } from "./ErrorPlugin";

export default defineComponent({
    name: "FErrorHandlingApp",
    props: {
        defaultComponent: {
            type: [Function, Object] as PropType<Component | undefined>,
            required: false,
            default: undefined,
        },
        errorComponent: {
            type: [Function, Object] as PropType<Component>,
            required: false,
            default: FErrorPage,
        },
    },
    data() {
        return new ErrorViewData();
    },
    watch: {
        $route() {
            this.hasError = false;
        },
    },
    created() {
        EventBus.$on(UNHANDLED_ERROR_EVENT, (payload) => {
            this.hasError = true;
            this.payload = payload;
        });
    },
});
</script>

<template>
    <div>
        <component :is="errorComponent" v-if="hasError" :payload="payload"></component>
        <component :is="defaultComponent" v-else-if="defaultComponent"></component>
        <slot v-else></slot>
    </div>
</template>
