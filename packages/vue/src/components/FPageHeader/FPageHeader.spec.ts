import "html-validate/jest";
import { mount } from "@vue/test-utils";
import FPageHeader from "./FPageHeader.vue";

describe("slots", () => {
    it("should change skipLink text via slot", async () => {
        const mySkipLinkText = "my SkipLink Text";
        const mySkipLinkHref = "#myhref";
        const wrapper = mount(FPageHeader, {
            props: {
                skipLink: mySkipLinkHref,
            },
            slots: {
                "skip-link-text": mySkipLinkText,
            },
        });
        const skipLinkEl = wrapper.find(".iskiplink");
        expect(skipLinkEl.text()).toBe(mySkipLinkText);
    });

    it("should change logo via slot", () => {
        const logoHtml = "<div>logo</div>";
        const wrapper = mount(FPageHeader, {
            slots: {
                logo: logoHtml,
            },
        });
        expect(wrapper.html()).toContain(logoHtml);
    });

    it("should change app-name via slot", () => {
        const myAppName = "myAppName";
        const wrapper = mount(FPageHeader, {
            slots: {
                default: myAppName,
            },
        });
        const headerAppName = wrapper.find(".page-header__app-name");
        expect(headerAppName.text()).toBe(myAppName);
    });

    it("should change user-name via slot", () => {
        const myUserName = "<div>Firstname Lastname</div>";
        const wrapper = mount(FPageHeader, {
            slots: {
                right: myUserName,
            },
        });
        expect(wrapper.html()).toContain(myUserName);
    });
});

describe("props", () => {
    describe("skipLink", () => {
        it("should enable and set skiplink target", () => {
            const wrapper = mount(FPageHeader, {
                props: {
                    skipLink: "awesome-target",
                },
            });
            const skipLink = wrapper.find(".iskiplink");
            expect(skipLink.attributes().href).toBe("#awesome-target");
        });

        it("should disable skiplink when empty string", () => {
            const wrapper = mount(FPageHeader, {
                props: {
                    skipLink: "",
                },
            });
            const skipLink = wrapper.find(".iskiplink");
            expect(skipLink.exists()).toBeFalsy();
        });
    });

    it("should set headerTag as h1 around default slot", () => {
        const wrapper = mount(FPageHeader, {
            props: {
                headerTag: "h1",
            },
            slots: {
                default: "appname",
            },
        });
        const headerTagEl = wrapper.find("h1.page-header__app-name");
        expect(headerTagEl.html()).toBe(
            '<h1 class="page-header__app-name">appname</h1>',
        );
    });
});

describe("html-validate", () => {
    it("should allow usage without attributes, no attributes required", () => {
        expect("<f-page-header></f-page-header>").toHTMLValidate();
    });

    it.each`
        slotName            | html
        ${"skip-link-text"} | ${"<f-page-header><template #skip-link-text></template></f-page-header>"}
        ${"logo"}           | ${"<f-page-header><template #logo></template></f-page-header>"}
        ${"default"}        | ${"<f-page-header><template #default></template></f-page-header>"}
        ${"right"}          | ${"<f-page-header><template #right></template></f-page-header>"}
    `("should allow $slotName slot", ({ html }) => {
        expect.assertions(1);

        expect(html).toHTMLValidate();
    });

    it("skip-link", () => {
        expect.assertions(2);
        const valid = /* HTML */ `
            <f-page-header skip-link="foo"></f-page-header>
        `;
        const invalid = /* HTML */ `
            <!-- omitted value -->
            <f-page-header skip-link></f-page-header>
        `;
        expect(valid).toMatchInlineCodeframe(`""`);
        expect(invalid).toMatchInlineCodeframe(`
            "error: Attribute "skip-link" is missing value (attribute-allowed-values) at inline:3:28:
              1 |
              2 |             <!-- omitted value -->
            > 3 |             <f-page-header skip-link></f-page-header>
                |                            ^^^^^^^^^
              4 |
            Selector: f-page-header"
        `);
    });

    describe("header-tag", () => {
        it.each(["span", "h1"])("%s", (headerTag) => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-page-header header-tag="${headerTag}"></f-page-header>
            `;
            expect(markup).toHTMLValidate();
        });

        it("h2", () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-page-header header-tag="h2"></f-page-header>
            `;
            expect(markup).toMatchInlineCodeframe(`
                "error: Attribute "header-tag" has invalid value "h2" (attribute-allowed-values) at inline:2:44:
                  1 |
                > 2 |                 <f-page-header header-tag="h2"></f-page-header>
                    |                                            ^^
                  3 |
                Selector: f-page-header"
            `);
        });
    });
});
