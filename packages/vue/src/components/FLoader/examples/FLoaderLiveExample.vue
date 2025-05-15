<script lang="ts">
import { defineComponent } from "vue";
import { FLoader, FCheckboxField } from "@fkui/vue";
import { createElement, LiveExample } from "@forsakringskassan/docs-live-example";

export default defineComponent({
    name: "FLoaderLiveExample",
    components: {
        FCheckboxField,
        LiveExample,
    },
    data() {
        return {
            loaderTime: 10,
            show: false,
            overlay: false,
            delay: false,
            customText: false,
            focusOnOverlay: true,
            english: false,
        };
    },
    computed: {
        language(): string | undefined {
            return this.english ? "en" : undefined;
        },
    },
    watch: {
        overlay: {
            immediate: false,
            handler() {
                if (!this.overlay) {
                    this.focusOnOverlay = true;
                }
            },
        },
        language: {
            immediate: false,
            handler() {
                if (this.english) {
                    this.customText = false;
                }
            },
        },
        customText: {
            immediate: false,
            handler() {
                if (this.customText) {
                    this.english = false;
                }
            },
        },
    },
    methods: {
        components(): object {
            return { FLoader };
        },
        toggleLoader() {
            this.show = true;
            setTimeout(() => {
                this.show = false;
            }, this.loaderTime * 1000);
        },
        template(): string {
            const { show, overlay, delay, focusOnOverlay, language } = this;
            return createElement(
                "f-loader",
                {
                    show,
                    overlay,
                    delay,
                    language,
                    ":focusOnOverlay": focusOnOverlay ? undefined : "false",
                },
                this.customText ? "En alternativ text" : "",
            );
        },
    },
});
</script>

<template>
    <live-example :components="components()" :template="template()">
        <f-checkbox-field v-model="delay" :value="true"> Fördröjd </f-checkbox-field>
        <f-checkbox-field v-model="customText" :value="true"> Alternativ text </f-checkbox-field>
        <f-checkbox-field v-model="english" :value="true"> Engelsk text </f-checkbox-field>
        <f-checkbox-field v-model="overlay" :value="true"> Overlay </f-checkbox-field>
        <f-checkbox-field v-if="overlay" v-model="focusOnOverlay" :value="true">
            Fokusera på meddelande
        </f-checkbox-field>
        <button class="button button--primary button--medium" type="button" @click="toggleLoader()">
            Visa
        </button>
        <p>Laddningsindikatorn visas i {{ loaderTime }} sekunder.</p>
    </live-example>
</template>
