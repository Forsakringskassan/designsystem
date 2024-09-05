import { Placement } from "./IPopupUtils";
import { MIN_DESKTOP_WIDTH } from "./constants";

/**
 * @internal
 */
export interface IsTeleportDisabledOptions {
    window: { innerWidth: number };
    placement: Placement | null;
    forceInline: boolean;
    forceOverlay: boolean;
}

/**
 * @internal
 */
export function isTeleportDisabled(
    options: IsTeleportDisabledOptions,
): boolean {
    const { window, placement, forceInline, forceOverlay } = options;
    const isMobileSize = window.innerWidth < MIN_DESKTOP_WIDTH;
    let disableTeleport = isMobileSize || placement === Placement.Fallback;

    if (forceInline) {
        disableTeleport = true;
    } else if (forceOverlay) {
        disableTeleport = false;
    }

    return disableTeleport;
}
