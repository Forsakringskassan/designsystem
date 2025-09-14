import {
    type Component,
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

    /**
     * By default nested components will not be rendered. When this option is
     * enabled components will be rendered as `<ComponentName />`.
     */
    componentPlaceholder: boolean;
}

const defaultOptions: RenderSlotOptions = {
    stripClasses: ["sr-only"],
    componentPlaceholder: false,
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

function excludeClass(exclude: string[]): (node: VNode) => boolean {
    return (node) => {
        if (typeof node.props?.class !== "string") {
            return true;
        }
        const classes = node.props.class.split(/\s+/);
        const matches = intersection(classes, exclude);
        return matches.length === 0;
    };
}

function excludeComment(node: VNode): boolean {
    return node.type !== Comment;
}

function isComponent(node: VNode): node is VNode & { type: Component } {
    return typeof node.type === "object";
}

function getComponentName({ type }: { type: Component }): string {
    if ("__name" in type) {
        return String(type.__name);
    }
    if ("name" in type) {
        return String(type.name);
    }
    return "Component";
}

function getTextContent(
    children: VNodeArrayChildren,
    options: RenderSlotOptions,
): string {
    return children
        .filter(isVNode)
        .filter(excludeComment)
        .filter(excludeClass(options.stripClasses))
        .map((node) => {
            if (isComponent(node)) {
                if (options.componentPlaceholder) {
                    const name = getComponentName(node);
                    return `<${name} />`;
                } else {
                    return "";
                }
            }
            if (Array.isArray(node.children)) {
                return getTextContent(node.children, options);
            }
            if (typeof node.children === "string") {
                return node.children;
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
    if (!render) {
        return undefined;
    }

    const nodes = render(props);
    if (nodes.length === 0) {
        return undefined;
    }

    const effectiveOptions = { ...defaultOptions, ...options };
    return collapseWhitespace(getTextContent(nodes, effectiveOptions));
}
