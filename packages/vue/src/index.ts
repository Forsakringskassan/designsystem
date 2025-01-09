/* include typescript declarations for vite static asset handling (e.g. `?raw`) */
/// <reference types="vite/client" />

export * from "./components";
export {
    type UseSlotUtils,
    type WithoutInstance,
    useSlotUtils,
} from "./composables";
export {
    config,
    type FKUIConfig,
    FKUIConfigButtonOrder,
    type FKUIContext,
    type MaybeWithFKUIContext,
    setRunningContext,
} from "./config";
export * from "./internal-components";
export * from "./plugins";
export {
    type ComponentUnmountEvent,
    type ComponentValidityEvent,
    type ErrorItem,
    type GroupValidityEvent,
    type ListArray,
    type ListItem,
    type UnknownItem,
    ErrorData,
    ErrorViewData,
    FormErrorList,
    MenuAction,
} from "./types";
export * from "./utils";
