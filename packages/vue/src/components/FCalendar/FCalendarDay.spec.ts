import "html-validate/jest";

describe("html-validate", () => {
    it("should require day attribute", () => {
        const markup = /* HTML */ ` <i-calendar-day> </i-calendar-day> `;
        expect(markup).toMatchInlineCodeframe(`
            "error: <i-calendar-day> is missing required "day" attribute (element-required-attributes) at inline:1:3:
            > 1 |  <i-calendar-day> </i-calendar-day>
                |   ^^^^^^^^^^^^^^
            Selector: i-calendar-day"
        `);
    });

    it("should allow setting boolean attributes", () => {
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

        expect(markup).toHTMLValidate();
    });

    it("should allow child elements", () => {
        const markup = /* HTML */ `
            <i-calendar-day day="2022-07-05">
                <span></span>
            </i-calendar-day>
        `;
        expect(markup).toHTMLValidate();
    });
});
