export * from "./list-utils";
export * from "./table-scroll";
export * from "./validation-utils";
export * from "./vue-ref-utils";
export { type EventBusMap, EventBus } from "./event-bus";
export {
    type MaybeOptions as FormModalMaybeOptions,
    type ModalOptions as FormModalModalOptions,
    formModal,
} from "./form-modal";
export {
    type AsyncModalResult,
    type MaybeOptions as OpenModalMaybeOptions,
    type ModalOptions as OpenModalModaloptions,
    type ModalResult,
    ModalReason,
    openModal,
} from "./open-modal";
export * from "./mount-component";
export * from "./confirm-modal";
export { type VueLike, focus } from "./focus";
export { getInputElement } from "./get-input-element";
export { hasSlot } from "./has-slot";
export { type MaybeComponent } from "./maybe-component";
export { type RenderSlotOptions, renderSlotText } from "./render-slot-text";
export { type UseModal, useModal } from "./use-modal";
export {
    findParentByName,
    getParentByName,
    hasParentByName,
} from "./parent-by-name";
export { actionFromKeyboardEvent } from "./action-from-keyboard-event";
export {
    type Point,
    type Rect,
    getAbsolutePosition,
} from "./get-absolute-position";
export {
    type ItemIdentifier,
    copyItemIdentifier,
    findItemIdentifier,
    getItemIdentifier,
    /* eslint-disable-next-line @typescript-eslint/no-deprecated -- exported for backwards compatibility */
    getLegacyInternalKey,
    setItemIdentifier,
    setItemIdentifiers,
} from "./item-identifier";
export {
    type Dataset,
    type DatasetArrayKeyOf,
    type DatasetArrayMetadata,
    type DatasetElementMetadata,
    type DatasetNestedKeyOf,
    datasetIterator,
    getDatasetMetadata,
    toDataset,
    useDatasetRef,
} from "./dataset";
