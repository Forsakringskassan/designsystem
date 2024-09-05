/**
 * @public
 */
export enum FKUIConfigButtonOrder {
    LEFT_TO_RIGHT,
    RIGHT_TO_LEFT,
}

/**
 * @public
 */
export interface FKUIConfig {
    buttonOrder: FKUIConfigButtonOrder;
    teleportTarget: string | Element;
    /**
     * @deprecated Use `teleportTarget` instead.
     */
    modalTarget: string | Element | null;
    /**
     * @deprecated Use `teleportTarget` instead.
     */
    popupTarget: string | Element | null;
    get popupContainer(): HTMLElement;
    set popupContainer(value: string | Element);
    production: boolean;
}
