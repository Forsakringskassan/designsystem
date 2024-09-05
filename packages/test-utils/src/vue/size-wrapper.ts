import { defineComponent, h } from "vue";

const aspectRatio = 16 / 9;
const cypressPadding = 8;

const variants = [
    { name: "min", size: "320px" },
    { name: "mobile", size: "639px" },
    { name: "desktop-low", size: "640px" },
    { name: "desktop-normal", size: "1024px" },
];

/**
 * Width of SizeWrapper component including padding added by cypress during tests.
 *
 * @public
 */
export const sizeWrapperWidth = 1024 + cypressPadding;

/**
 * Height for SizeWrapper component with an aspect ratio of 16:9 based on its width.
 *
 * @public
 */
export const sizeWrapperHeight = sizeWrapperWidth / aspectRatio;

/**
 * @public
 */
export const SizeWrapper = defineComponent({
    name: "SizeWrapper",
    render() {
        const children = variants.map((it) => {
            const data = {
                style: {
                    border: "1px dashed hotpink",
                    width: it.size,
                },
                "data-variant": it.name,
            };
            const slot = this.$slots.default ?? (() => "");
            const content = slot({
                variant: it.name,
            });
            return h("div", data, [h("span", it.size), content]);
        });
        return h("div", children);
    },
});
