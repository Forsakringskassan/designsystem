import { Placement } from "../IPopup/IPopupUtils";
import { computeArrowOffset } from "./compute-arrow-offset";

describe("computeArrowOffset", () => {
    it("should handle Position.A", () => {
        /**
         *     +-----------+
         *     |     (icon)|
         *     +-----------+
         *     +-------↑-----------+
         *     | Errormessage      |
         *     +-------------------+
         */
        const inputIconRect = {
            x: 40,
            y: 0,
            width: 24,
            height: 24,
        } as DOMRect;
        const wrapperRect = {
            x: 0,
            y: 15,
            width: 100,
            height: 20,
        } as DOMRect;
        const position = computeArrowOffset(
            Placement.A,
            inputIconRect,
            wrapperRect,
        );
        expect(position).toEqual({
            position: "top",
            offset: 48,
        });
    });

    it("should handle Position.B", () => {
        /**
         *             +-----------+
         *             |     (icon)|
         *             +-----------+
         *     +----------------↑--+
         *     | Errormessage      |
         *     +-------------------+
         */
        const inputIconRect = {
            x: 100,
            y: 0,
            width: 24,
            height: 24,
        } as DOMRect;
        const wrapperRect = {
            x: 0,
            y: 15,
            width: 124,
            height: 20,
        } as DOMRect;
        const position = computeArrowOffset(
            Placement.B,
            inputIconRect,
            wrapperRect,
        );
        expect(position).toEqual({
            position: "top",
            offset: 12,
        });
    });

    it("should handle Position.C", () => {
        /**
         *     +-------------------+
         *     | Errormessage      |
         *     +--------↓----------+
         *     +-----------+
         *     |     (icon)|
         *     +-----------+
         */
        const inputIconRect = {
            x: 40,
            y: 80,
            width: 24,
            height: 24,
        } as DOMRect;
        const wrapperRect = {
            x: 0,
            y: 0,
            width: 100,
            height: 20,
        } as DOMRect;
        const position = computeArrowOffset(
            Placement.C,
            inputIconRect,
            wrapperRect,
        );
        expect(position).toEqual({
            position: "bottom",
            offset: 48,
        });
    });

    it("should handle Position.D", () => {
        /**
         *     +-------------------+
         *     | Errormessage      |
         *     +----------------↓--+
         *             +-----------+
         *             |     (icon)|
         *             +-----------+
         */
        const inputIconRect = {
            x: 140,
            y: 80,
            width: 24,
            height: 24,
        } as DOMRect;
        const wrapperRect = {
            x: 0,
            y: 0,
            width: 164,
            height: 20,
        } as DOMRect;
        const position = computeArrowOffset(
            Placement.D,
            inputIconRect,
            wrapperRect,
        );
        expect(position).toEqual({
            position: "bottom",
            offset: 12,
        });
    });

    it("should handle Position.E", () => {
        /**
         *     +-----------+ +--------------+
         *     |     (icon)| ← Errormessage |
         *     +-----------+ +--------------+
         */
        const inputIconRect = {
            x: 40,
            y: 0,
            width: 12,
            height: 12,
        } as DOMRect;
        const wrapperRect = {
            x: 100,
            y: 0,
            width: 100,
            height: 20,
        } as DOMRect;
        const position = computeArrowOffset(
            Placement.E,
            inputIconRect,
            wrapperRect,
        );
        expect(position).toEqual({
            position: "left",
            offset: 14,
        });
    });

    it("should handle Position.F", () => {
        /**
         *     +--------------+ +----------+
         *     | Errormessage → |    (icon)|
         *     +--------------+ +----------+
         */
        const inputIconRect = {
            x: 140,
            y: 0,
            width: 12,
            height: 12,
        } as DOMRect;
        const wrapperRect = {
            x: 0,
            y: 0,
            width: 100,
            height: 20,
        } as DOMRect;
        const position = computeArrowOffset(
            Placement.F,
            inputIconRect,
            wrapperRect,
        );
        expect(position).toEqual({
            position: "right",
            offset: 14,
        });
    });

    it("should handle Position.G to Position.I, Fallback and NotCalculated", () => {
        expect.assertions(5);
        /**
         *     +-------------------+
         *     |             (icon)|
         *     +-------------------+
         *     +---------------↑---+
         *     | Errormessage      |
         *     | (inline)          |
         *     +-------------------+
         */
        const inputIconRect = {
            x: 140,
            y: 0,
            width: 24,
            height: 24,
        } as DOMRect;
        const wrapperRect = {
            x: 0,
            y: 0,
            width: 164,
            height: 40,
        } as DOMRect;

        let position = computeArrowOffset(
            Placement.G,
            inputIconRect,
            wrapperRect,
        );
        expect(position).toEqual({
            position: "top",
            offset: 12,
        });

        position = computeArrowOffset(Placement.H, inputIconRect, wrapperRect);
        expect(position).toEqual({
            position: "top",
            offset: 12,
        });

        position = computeArrowOffset(Placement.I, inputIconRect, wrapperRect);
        expect(position).toEqual({
            position: "top",
            offset: 12,
        });

        position = computeArrowOffset(
            Placement.Fallback,
            inputIconRect,
            wrapperRect,
        );
        expect(position).toEqual({
            position: "top",
            offset: 12,
        });

        position = computeArrowOffset(
            Placement.NotCalculated,
            inputIconRect,
            wrapperRect,
        );
        expect(position).toEqual({
            position: "top",
            offset: 12,
        });
    });
});
