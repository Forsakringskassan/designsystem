import { Placement } from "../IPopup/IPopupUtils";

export interface ArrowPosition {
    offset: number;
    position: "bottom" | "top" | "left" | "right";
}

export function computeArrowOffset(
    placement: Placement,
    inputIconRect: DOMRect,
    wrapperRect: DOMRect,
): ArrowPosition {
    switch (placement) {
        case Placement.A: {
            const wrapperRightX = wrapperRect.x + wrapperRect.width;
            const iconCenterX = inputIconRect.x + inputIconRect.width / 2;
            const offset = wrapperRightX - iconCenterX;
            return { position: "top", offset };
        }
        case Placement.B: {
            const offset =
                wrapperRect.x +
                wrapperRect.width -
                (inputIconRect.x + inputIconRect.width / 2);
            return { position: "top", offset };
        }
        case Placement.C: {
            const wrapperRightX = wrapperRect.x + wrapperRect.width;
            const iconCenterX = inputIconRect.x + inputIconRect.width / 2;
            const offset = wrapperRightX - iconCenterX;
            return { position: "bottom", offset };
        }
        case Placement.D: {
            const offset =
                wrapperRect.x +
                wrapperRect.width -
                (inputIconRect.x + inputIconRect.width / 2);
            return { position: "bottom", offset };
        }
        case Placement.E: {
            const offset =
                wrapperRect.y +
                wrapperRect.height -
                (inputIconRect.y + inputIconRect.height / 2);
            return { position: "left", offset };
        }
        case Placement.F: {
            const offset =
                wrapperRect.y +
                wrapperRect.height -
                (inputIconRect.y + inputIconRect.height / 2);
            return { position: "right", offset };
        }
        case Placement.G:
        case Placement.H:
        case Placement.I:
        case Placement.Fallback:
        // eslint-disable-next-line sonarjs/no-duplicated-branches, no-fallthrough -- Nice to have alphabetical order with fallthrough.
        case Placement.NotCalculated: {
            const offset =
                wrapperRect.x +
                wrapperRect.width -
                (inputIconRect.x + inputIconRect.width / 2);
            return { position: "top", offset };
        }
    }
}
