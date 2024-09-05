import { type TranslateFunction } from "@fkui/logic";
import { getAltLogoText } from "./get-alt-text";

const t: TranslateFunction = (key) => {
    return key;
};

describe("accessible alt logo text", () => {
    it("should return standard logo text when hasRouterLink is false", () => {
        expect(getAltLogoText(false, "", t)).toBe(
            "fkui.page-header.logo.alt-text",
        );
    });
    it("should return space separated logo text with link label when hasRouterLink is true and router link not empty", () => {
        expect(getAltLogoText(true, "my route", t)).toBe(
            "fkui.page-header.logo.alt-text my route",
        );
    });
    it("should return comma separated logo text and standard router link label, when hasRouterLink is true and no link label", () => {
        expect(getAltLogoText(true, "", t)).toBe(
            "fkui.page-header.logo.alt-text, fkui.page-header.router.link.label",
        );
    });
});
