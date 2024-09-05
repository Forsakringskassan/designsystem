import { type App, type AppContext } from "vue";

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $fkui?: FKUIContext;
    }
}

/**
 * @public
 */
export interface FKUIContext {
    appContext: AppContext;
}

/**
 * @public
 */
export interface MaybeWithFKUIContext {
    $fkui?: FKUIContext;
}

/**
 * @public
 * @param app - Running app
 */
export function setRunningContext(app: App): void {
    const fkuiContext: FKUIContext = {
        appContext: app._context,
    };

    app.config.globalProperties.$fkui = fkuiContext;
}

/**
 * @internal
 * @param callingInstance - Calling component
 */
export function getRunningContext(
    callingInstance: MaybeWithFKUIContext,
): FKUIContext {
    if (!callingInstance.$fkui) {
        throw new Error(
            "Application running context is unset. Call `setRunningContext(app)` after `app = createApp(..)`.",
        );
    }

    return callingInstance.$fkui;
}
