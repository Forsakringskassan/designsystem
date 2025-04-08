<script lang="ts">
import { defineComponent } from "vue";
import { getHTMLElementFromVueRef } from "../../utils";

export default defineComponent({
    name: "FExpand",
    data() {
        return {
            height: 0,
            initialStyle: {
                overflow: "hidden",
                transition: "height 400ms cubic-bezier(0.46, 0.03, 0.52, 0.96)",
            },
            hiddenStyle: {
                height: "auto",
                position: "absolute",
                visibility: "hidden",
            },
            visibleStyle: {
                width: "",
                position: "",
                visibility: "",
                height: "0px",
            },
            openedStyle: {
                height: "auto",
            },
        };
    },
    methods: {
        enter(element: Element): void {
            const htmlElement = getHTMLElementFromVueRef(element);
            Object.assign(htmlElement.style, this.initialStyle);
            Object.assign(htmlElement.style, this.hiddenStyle);
            htmlElement.style.width = getComputedStyle(element).width;
            const height = getComputedStyle(element).height;
            Object.assign(htmlElement.style, this.visibleStyle);
            // Force redraw
            /* eslint-disable-next-line @typescript-eslint/no-unused-expressions -- technical debt, there should be a better way */
            getComputedStyle(element).height;
            setTimeout(() => {
                this.height = parseInt(height as string, 10);
                htmlElement.style.height = height;
            });
        },
        afterEnter(element: Element): void {
            const htmlElement = getHTMLElementFromVueRef(element);
            Object.assign(htmlElement.style, this.openedStyle);
        },
        leave(element: Element): void {
            const htmlElement = getHTMLElementFromVueRef(element);
            const height = getComputedStyle(element).height;
            htmlElement.style.height = height;

            // Force redraw
            /* eslint-disable-next-line @typescript-eslint/no-unused-expressions -- technical debt, there should be a better way */
            getComputedStyle(element).height;
            setTimeout(() => {
                Object.assign(htmlElement.style, this.visibleStyle);
            });
        },
    },
});
</script>

<template>
    <transition @enter="enter" @after-enter="afterEnter" @leave="leave">
        <!-- @slot Content to expand -->
        <slot :height="height"></slot>
    </transition>
</template>
