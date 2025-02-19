import "html-validate/jest";
import { HtmlValidate } from "html-validate";
import plugin from "../index";

const htmlvalidate = new HtmlValidate({
    plugins: [plugin],
    rules: { "fkui/no-navbar-class": "error" },
});

it("should report warning when `navbar` class is used", async () => {
    expect.assertions(2);
    const markup = /* HTML */ ` <div class="custom-navbar navbar"></div> `;
    const report = await htmlvalidate.validateString(markup);
    expect(report).toBeInvalid();
    expect(report).toMatchInlineCodeframe(`
        "error: navbar class is deprecated (fkui/no-navbar-class) at inline:1:28:
        > 1 |  <div class="custom-navbar navbar"></div>
            |                            ^^^^^^
        Selector: div"
    `);
});
