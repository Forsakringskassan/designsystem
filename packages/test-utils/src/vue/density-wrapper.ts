import { defineComponent, h } from "vue";

const aspectRatio = 16 / 9;
const cypressPadding = 8;

const densities = [
    {
        name: "Default",
        class: "density-default",
    },
    {
        name: "Dense",
        class: "density-dense",
    },
    {
        name: "Densest",
        class: "density-densest",
    },
];

/**
 * Width of DensityWrapper component including padding added by cypress during tests.
 *
 * @public
 */
export const densityWrapperWidth = 640 + cypressPadding;

/**
 * Height for DensityWrapper component with an aspect ratio of 16:9 based on its width.
 *
 * @public
 */
export const densityWrapperHeight = 640 / aspectRatio;

/**
 * @public
 */
export const DensityWrapper = defineComponent({
    name: "DensityWrapper",
    render() {
        const children = densities.map((it) => {
            const data = {
                class: it.class,
                style: {
                    border: "1px dashed hotpink",
                    width: "640px",
                },
            };
            const slot = this.$slots.default ?? (() => "");
            const content = slot({
                density: it.name,
            });
            return h("div", data, [content]);
        });
        return h("div", children);
    },
});
