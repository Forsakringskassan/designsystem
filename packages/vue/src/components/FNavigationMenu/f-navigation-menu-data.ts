/**
 * @public
 */
export interface FNavigationMenuData {
    selectedItem: string;
    focusedPopupMenuItem: string;
    overflowIndex: number;
    popupOpen: boolean;
    popupAnchor: HTMLElement | undefined;
    resizeObserver: ResizeObserver | undefined;
}
