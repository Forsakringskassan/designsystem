import { describe, expect, it } from "vitest";
import "html-validate/vitest";

describe("html-validate", () => {
    it("should require day attribute", async () => {
        const markup = /* HTML */ ` <i-calendar-day> </i-calendar-day> `;
        await expect(markup).toMatchInlineCodeframe(`
            "error: <i-calendar-day> is missing required "day" attribute (element-required-attributes)
            > 1 |  <i-calendar-day> </i-calendar-day>
                |   ^^^^^^^^^^^^^^
            Selector: i-calendar-day"
        `);
    });

    it("should allow setting boolean attributes", async () => {
        const markup = /* HTML */ `
            <i-calendar-day
                day="2022-07-05"
                :enabled="false"
                focused
                selected
                highlight
            >
            </i-calendar-day>
        `;

        await expect(markup).toHTMLValidate();
    });

    it("should allow child elements", async () => {
        const markup = /* HTML */ `
            <i-calendar-day day="2022-07-05">
                <span></span>
            </i-calendar-day>
        `;
        await expect(markup).toHTMLValidate();
    });
});
