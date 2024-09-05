import { isTeleportDisabled } from "./is-teleport-disabled";
import { MIN_DESKTOP_WIDTH } from "./constants";
import { Placement } from "./IPopupUtils";

const MOBILE_WIDTH = MIN_DESKTOP_WIDTH - 1;
const VALID_CANDIDATE = Placement.B;

it("should return true when `forceInline` is true", () => {
    expect.assertions(1);
    const result = isTeleportDisabled({
        window: { innerWidth: MIN_DESKTOP_WIDTH },
        placement: VALID_CANDIDATE,
        forceInline: true,
        forceOverlay: false,
    });
    expect(result).toBe(true);
});

it("should return false when `forceOverlay` is true", () => {
    expect.assertions(1);
    const result = isTeleportDisabled({
        window: { innerWidth: MOBILE_WIDTH },
        placement: VALID_CANDIDATE,
        forceInline: false,
        forceOverlay: true,
    });
    expect(result).toBe(false);
});

it("should return false when `window.innerWidth` is at desktop width", () => {
    expect.assertions(1);
    const result = isTeleportDisabled({
        window: { innerWidth: MIN_DESKTOP_WIDTH },
        placement: VALID_CANDIDATE,
        forceInline: false,
        forceOverlay: true,
    });
    expect(result).toBe(false);
});

it("should return true when `window.innerWidth` is at mobile width", () => {
    expect.assertions(1);
    const result = isTeleportDisabled({
        window: { innerWidth: MOBILE_WIDTH },
        placement: VALID_CANDIDATE,
        forceInline: false,
        forceOverlay: false,
    });
    expect(result).toBe(true);
});

it("should return true when no valid candidate is provided", () => {
    expect.assertions(1);
    const result = isTeleportDisabled({
        window: { innerWidth: MOBILE_WIDTH },
        placement: Placement.Fallback,
        forceInline: false,
        forceOverlay: false,
    });
    expect(result).toBe(true);
});
