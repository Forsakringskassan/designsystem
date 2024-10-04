import {
    type Slot,
    type VNode,
    type VNodeArrayChildren,
    Comment,
    isVNode,
} from "vue";

/**
 * @public
 */
export interface RenderSlotOptions {
    /**
     * List of classes to exclude when extracting slot text.
     *
     * Default: `["sr-only"]`
     */
    stripClasses: string[];
}

const defaultOptions: RenderSlotOptions = {
    stripClasses: ["sr-only"],
};

/**
 * Trims and collapses multiple whitespace (including newlines) to a single
 * space
 */
function collapseWhitespace(text: string): string {
    return text.replace(/\s+/gm, " ").replace(/(^ | $)/g, "");
}

function intersection<T>(a: T[], b: T[]): T[] {
    return a.filter((it) => b.includes(it));
}

function excludeClass(
    exclude: string[],
): <T extends VNode>(node: T) => boolean {
    return (node) => {
        if (typeof node.props?.class !== "string") {
            return true;
        }
        const classes = node.props.class.split(/\s+/);
        const matches = intersection(classes, exclude);
        return matches.length === 0;
    };
}

function excludeComment<T extends VNode>(node: T): boolean {
    return node.type !== Comment;
}

function getTextContent(
    children: VNodeArrayChildren,
    options: RenderSlotOptions,
): string {
    return children
        .filter(isVNode)
        .filter(excludeComment)
        .filter(excludeClass(options.stripClasses))
        .map((child) => {
            if (Array.isArray(child.children)) {
                return getTextContent(child.children, options);
            }
            if (typeof child.children === "string") {
                return child.children;
            }
        })
        .join("");
}

/**
 * Pragmatically render slot content and return result as a string. Leading and
 * trailing whitespace is trimmed and internal whitespace is collapsed. Any
 * elements with the `sr-only` class will be ignored.
 *
 * Typical usage:
 *
 * ```ts
 * const slot = this.$slots["my-slot"];
 * const text = renderSlotText(slot, { value: 'foobar' });
 * ```
 *
 * @public
 * @param render - Slot function.
 * @param props - Optional props to pass to render function.
 * @param options - Options
 * @returns Text content or undefined if render function was not found.
 */
export function renderSlotText(
    render: Slot | undefined,
    props: Record<string, unknown> = {},
    options?: Partial<RenderSlotOptions>,
): string | undefined {
    console.log('renderSlotText', render, props, options);
    if (!render) {
        return undefined;
    }

    const nodes = render(props);
    if (nodes.length === 0) {
        return undefined;
    }

    return collapseWhitespace(
        getTextContent(nodes, { ...defaultOptions, ...options }),
    );
}
