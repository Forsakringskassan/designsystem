import { type App, type ComponentPublicInstance, type Plugin } from "vue";
import { EventBus } from "../../utils";
import { ErrorData } from "../../types";

declare module "../../utils/event-bus" {
    export interface EventBusMap {
        [UNHANDLED_ERROR_EVENT]: [ErrorData];
    }
}

/**
 * @public
 */
export const UNHANDLED_ERROR_EVENT = "unhandled-error" as const;

/**
 * @public
 */
export interface ErrorPluginOptions {
    /**
     * If `true` a `warnHandler` will be installed to make all warnings as
     * errors in development mode. Default `true`.
     *
     * In production builds this is ignored out-of-the-box thus only affecting the
     * local builds and when running E2E tests from CI (as it uses "npm start"
     * internally to start the server).
     *
     * https://vuejs.org/v2/api/#warnHandler
     */
    captureWarnings?: boolean;

    /**
     * If `true` errors will be logged to console by default.
     */
    logToConsole?: boolean;
}

const defaults: ErrorPluginOptions = {
    captureWarnings: true,
    logToConsole: true,
};

/**
 * @internal
 */
export function errorHandler(
    options: ErrorPluginOptions,
    error: unknown,
    vm: ComponentPublicInstance | null,
    info: string,
): void {
    if (options.logToConsole) {
        const consoleOutput = info
            ? [`Error in ${info}:`, error, vm]
            : [error, vm];

        /* eslint-disable-next-line no-console -- expected to log */
        console.error(...consoleOutput);
    }

    if (error instanceof Error) {
        EventBus.$emit(UNHANDLED_ERROR_EVENT, new ErrorData(error, vm, info));
    } else {
        EventBus.$emit(
            UNHANDLED_ERROR_EVENT,
            new ErrorData(new Error(String(error)), vm, info),
        );
    }
}

/**
 * @internal
 */
export function warnHandler(
    options: ErrorPluginOptions,
    msg: string,
    vm: ComponentPublicInstance | null,
    trace: string,
): void {
    if (options.logToConsole) {
        /* eslint-disable-next-line no-console -- expected to log */
        console.warn(`Warning:`, msg, trace);
    }

    const error: Error = {
        name: "warning",
        message: msg,
        stack: trace,
    };

    EventBus.$emit(UNHANDLED_ERROR_EVENT, new ErrorData(error, vm, "warning"));
}

/**
 * @public
 */
const ErrorPlugin: Plugin<ErrorPluginOptions> = {
    install(app: App, options): void {
        const config = { ...defaults, ...options };
        app.config.errorHandler = errorHandler.bind(undefined, config);

        if (config.captureWarnings) {
            app.config.warnHandler = warnHandler.bind(undefined, config);
        }
    },
};

export default ErrorPlugin;
