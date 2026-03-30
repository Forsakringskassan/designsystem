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
    get popupContainer(): HTMLElement;
    set popupContainer(value: string | Element);
    production: boolean;
}
