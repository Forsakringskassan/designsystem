import { type App, createApp } from "vue";
import { type MaybeComponent } from "../maybe-component";
import { MaybeWithFKUIContext, getRunningContext } from "../../config";

/**
 * @public
 */
export interface MountOptions {
    /**
     * Element to mount component under. Default `<body>`.
     */
    attachTo?: string | Element;

    /**
     * Attach as first child. Default `false`.
     */
    attachFirst?: boolean;
}

function getTargetElement(target: string | Element | undefined): Element {
    if (!target) {
        return document.body;
    }
    if (typeof target !== "string") {
        return target;
    }
    const element = document.querySelector(target);
    if (!element) {
        throw new Error(
            `mountComponent(..) requires a target element (selector "${target}" returned no element)`,
        );
    }
    return element;
}

function createContainer(options: {
    attachTo: string | Element | undefined;
    attachFirst: boolean;
}): Element {
    const { attachTo, attachFirst } = options;
    const parent = getTargetElement(attachTo);
    const element = document.createElement("div");

    if (attachFirst) {
        parent.insertBefore(element, parent.firstChild);
    } else {
        parent.appendChild(element);
    }

    return element;
}

/**
 * Create an instance of a component and mount it to given element.
 *
 * @public
 * @param callingInstance - Calling component.
 * @param Component - Component to mount.
 * @param options - Mount options.
 * @returns - Function to unmount component.
 *
 * @throws Error
 * Throw if [[Component]] is `undefined` or the `attachTo` selector does not
 * exist.
 */
export function mountComponent(
    callingInstance: MaybeWithFKUIContext,
    Component: MaybeComponent,
    options: Record<string, unknown> & MountOptions = {},
): App<Element> {
    /* sanity check: ensure a component was passed */
    if (!Component) {
        throw new Error("mountComponent(..) called without a component");
    }

    const { attachTo, attachFirst = false, ...data } = options;
    const el = createContainer({ attachTo, attachFirst });
    const app = createApp(Component, data);
    const fkuiContext = getRunningContext(callingInstance);
    if (fkuiContext) {
        Object.assign(app._context, fkuiContext.appContext); // must use Object.assign on _context
    }

    app.mount(el);

    /* monkey-patch unmount function to do our own cleanup as well */
    const unmount = app.unmount;
    app.unmount = () => {
        unmount.call(app);
        if (el.parentNode) {
            el.parentNode.removeChild(el);
        }
    };

    return app;
}
