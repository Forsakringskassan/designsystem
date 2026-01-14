import { flushPromises } from "@vue/test-utils";
import { usePopupError } from "./use-popup-error";

describe("usePopupError", () => {
    it("should not have active error element by default", () => {
        const { activeErrorAnchor } = usePopupError();
        expect(activeErrorAnchor.value).toBeUndefined();
    });

    it("should set active error element on focus", async () => {
        const { activeErrorAnchor, onPopupError } = usePopupError();
        const anchor = document.createElement("div");
        const arrowAnchor = document.createElement("div");
        onPopupError({
            hasFocus: true,
            hasHover: false,
            inEdit: false,
            anchor,
            arrowAnchor,
            message: "Error message",
        });
        await flushPromises();
        expect(activeErrorAnchor.value?.isSameNode(anchor)).toBeTruthy();
    });

    it("should set active error element on hover", async () => {
        const { activeErrorAnchor, onPopupError } = usePopupError();
        const anchor = document.createElement("div");
        const arrowAnchor = document.createElement("div");
        onPopupError({
            hasFocus: false,
            hasHover: true,
            inEdit: false,
            anchor,
            arrowAnchor,
            message: "Error message",
        });
        await flushPromises();
        expect(activeErrorAnchor.value?.isSameNode(anchor)).toBeTruthy();
    });

    it("should unset active error element on edit", async () => {
        const { activeErrorAnchor, onPopupError } = usePopupError();
        const anchor = document.createElement("div");
        const arrowAnchor = document.createElement("div");
        onPopupError({
            hasFocus: false,
            hasHover: true,
            inEdit: false,
            anchor,
            arrowAnchor,
            message: "Error message",
        });
        await flushPromises();
        expect(activeErrorAnchor.value?.isSameNode(anchor)).toBeTruthy();

        onPopupError({
            hasFocus: false,
            hasHover: true,
            inEdit: true,
            anchor,
            arrowAnchor,
            message: "Error message",
        });
        await flushPromises();
        expect(activeErrorAnchor.value).toBeUndefined();
    });

    it("should switch active error element", async () => {
        const { activeErrorAnchor, onPopupError } = usePopupError();
        const anchor1 = document.createElement("div");
        const anchor2 = document.createElement("div");
        const arrowAnchor1 = document.createElement("div");
        const arrowAnchor2 = document.createElement("div");
        onPopupError({
            hasFocus: true,
            hasHover: false,
            inEdit: false,
            anchor: anchor1,
            arrowAnchor: arrowAnchor1,
            message: "Error message",
        });
        await flushPromises();
        expect(activeErrorAnchor.value?.isSameNode(anchor1)).toBeTruthy();

        onPopupError({
            hasFocus: false,
            hasHover: true,
            inEdit: false,
            anchor: anchor2,
            arrowAnchor: arrowAnchor2,
            message: "Error message",
        });
        await flushPromises();
        expect(activeErrorAnchor.value?.isSameNode(anchor2)).toBeTruthy();
    });
});
