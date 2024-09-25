import "html-validate/jest";
import { defineComponent } from "vue";
import { mount } from "@vue/test-utils";
import {
    type RouteRecordRaw,
    createRouter,
    createWebHashHistory,
} from "vue-router";
import FPageHeader from "./FPageHeader.vue";

describe("slots", () => {
    it("should change skipLink text via slot", async () => {
        const mySkipLinkText = "my SkipLink Text";
        const mySkipLinkHref = "#myhref";
        const routes: RouteRecordRaw[] = [
            {
                path: "/",
                component: defineComponent({}),
            },
        ];
        const router = createRouter({
            history: createWebHashHistory(),
            routes,
        });
        const wrapper = mount(FPageHeader, {
            props: {
                skipLinkHref: mySkipLinkHref,
                skipLink: true,
            },
            slots: {
                "skip-link-text": mySkipLinkText,
            },
            global: {
                plugins: [router],
            },
        });
        const skipLinkEl = wrapper.find(".iskiplink");
        expect(skipLinkEl.text()).toBe(mySkipLinkText);
    });

    it("should change logo via slot", () => {
        const logoHtml = "<div>logo</div>";
        const routes: RouteRecordRaw[] = [
            {
                path: "/",
                component: defineComponent({}),
            },
        ];
        const router = createRouter({
            history: createWebHashHistory(),
            routes,
        });
        const wrapper = mount(FPageHeader, {
            slots: {
                logo: logoHtml,
            },
            global: {
                plugins: [router],
            },
        });
        expect(wrapper.html()).toContain(logoHtml);
    });

    it("should change app-name via slot", () => {
        const myAppName = "myAppName";
        const routes: RouteRecordRaw[] = [
            {
                path: "/",
                component: defineComponent({}),
            },
        ];
        const router = createRouter({
            history: createWebHashHistory(),
            routes,
        });
        const wrapper = mount(FPageHeader, {
            slots: {
                default: myAppName,
            },
            global: {
                plugins: [router],
            },
        });
        const headerAppName = wrapper.find(".page-header__app-name");
        expect(headerAppName.text()).toBe(myAppName);
    });

    it("should change user-name via slot", () => {
        const myUserName = "<div>Firstname Lastname</div>";
        const routes: RouteRecordRaw[] = [
            {
                path: "/",
                component: defineComponent({}),
            },
        ];
        const router = createRouter({
            history: createWebHashHistory(),
            routes,
        });
        const wrapper = mount(FPageHeader, {
            slots: {
                right: myUserName,
            },
            global: {
                plugins: [router],
            },
        });
        expect(wrapper.html()).toContain(myUserName);
    });
});

describe("props", () => {
    describe("skipLink", () => {
        it("should enable and set skiplink target", () => {
            const routes: RouteRecordRaw[] = [
                {
                    path: "/",
                    component: defineComponent({}),
                },
            ];
            const router = createRouter({
                history: createWebHashHistory(),
                routes,
            });
            const wrapper = mount(FPageHeader, {
                props: {
                    skipLink: "awesome-target",
                },
                global: {
                    plugins: [router],
                },
            });
            const skipLink = wrapper.find(".iskiplink");
            expect(skipLink.attributes().href).toBe("#awesome-target");
        });

        it("should disable skiplink when empty string", () => {
            const routes: RouteRecordRaw[] = [
                {
                    path: "/",
                    component: defineComponent({}),
                },
            ];
            const router = createRouter({
                history: createWebHashHistory(),
                routes,
            });
            const wrapper = mount(FPageHeader, {
                props: {
                    skipLink: "",
                },
                global: {
                    plugins: [router],
                },
            });
            const skipLink = wrapper.find(".iskiplink");
            expect(skipLink.exists()).toBeFalsy();
        });

        it("should disable skiplink when false (deprecated usage)", () => {
            const routes: RouteRecordRaw[] = [
                {
                    path: "/",
                    component: defineComponent({}),
                },
            ];
            const router = createRouter({
                history: createWebHashHistory(),
                routes,
            });
            const wrapper = mount(FPageHeader, {
                props: {
                    skipLink: false,
                },
                global: {
                    plugins: [router],
                },
            });
            const skipLink = wrapper.find(".iskiplink");
            expect(skipLink.exists()).toBeFalsy();
        });

        it("should use deprecated skipLinkref when true", () => {
            const routes: RouteRecordRaw[] = [
                {
                    path: "/",
                    component: defineComponent({}),
                },
            ];
            const router = createRouter({
                history: createWebHashHistory(),
                routes,
            });
            const skipLinkHref = "#myhref";
            const wrapper = mount(FPageHeader, {
                props: {
                    skipLink: true,
                    skipLinkHref,
                },
                global: {
                    plugins: [router],
                },
            });
            const skipLinkEl = wrapper.find(".iskiplink");
            expect(skipLinkEl.attributes().href).toBe(skipLinkHref);
        });
    });

    it("should set headerTag as h1 around default slot", () => {
        const routes: RouteRecordRaw[] = [
            {
                path: "/",
                component: defineComponent({}),
            },
        ];
        const router = createRouter({
            history: createWebHashHistory(),
            routes,
        });
        const wrapper = mount(FPageHeader, {
            props: {
                headerTag: "h1",
            },
            slots: {
                default: "appname",
            },
            global: {
                plugins: [router],
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

    describe("logo-size", () => {
        it.each(["small", "large", "responsive"])("%s", (size) => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-page-header logo-size="${size}"></f-page-header>
            `;
            expect(markup).toHTMLValidate();
        });

        it("invalid", () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-page-header logo-size="invalid"></f-page-header>
            `;
            expect(markup).toMatchInlineCodeframe(`
                "error: Attribute "logo-size" has invalid value "invalid" (attribute-allowed-values) at inline:2:43:
                  1 |
                > 2 |                 <f-page-header logo-size="invalid"></f-page-header>
                    |                                           ^^^^^^^
                  3 |
                Selector: f-page-header"
            `);
        });
    });

    it("skip-link", () => {
        expect.assertions(2);
        const valid = /* HTML */ `
            <!-- valid for backwards compatibility: same as true -->
            <f-page-header skip-link></f-page-header>

            <!-- valid for backwards compatibility: enabled, use skip-link-href -->
            <f-page-header :skip-link="true"></f-page-header>

            <!-- valid for backwards compatibility: disabled -->
            <f-page-header :skip-link="false"></f-page-header>

            <!-- proper id -->
            <f-page-header skip-link="foo"></f-page-header>
        `;
        const invalid = /* HTML */ `
            <!-- empty id -->
            <f-page-header skip-link=""></f-page-header>
        `;
        expect(valid).toMatchInlineCodeframe(`""`);
        expect(invalid).toMatchInlineCodeframe(`
            "error: Attribute "skip-link" should omit value (attribute-empty-style) at inline:3:28:
              1 |
              2 |             <!-- empty id -->
            > 3 |             <f-page-header skip-link=""></f-page-header>
                |                            ^^^^^^^^^
              4 |
            Selector: f-page-header"
        `);
    });

    it("skip-link-href should not be used without skip-link", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <!-- [html-validate-disable-block no-deprecated-attr -- rule not under test] -->
            <f-page-header skip-link-href="#foo"></f-page-header>
        `;
        expect(markup).toMatchInlineCodeframe(`
            "error: "skip-link-href" attribute cannot be used on <f-page-header> in this context: requires skip-link prop to be set (attribute-misuse) at inline:3:28:
              1 |
              2 |             <!-- [html-validate-disable-block no-deprecated-attr -- rule not under test] -->
            > 3 |             <f-page-header skip-link-href="#foo"></f-page-header>
                |                            ^^^^^^^^^^^^^^
              4 |
            Selector: f-page-header"
        `);
    });

    it("skip-link-href should be deprecated", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-page-header skip-link skip-link-href="#foo"></f-page-header>
        `;
        expect(markup).toMatchInlineCodeframe(`
            "error: Attribute "skip-link-href" is deprecated on <f-page-header> element (no-deprecated-attr) at inline:2:38:
              1 |
            > 2 |             <f-page-header skip-link skip-link-href="#foo"></f-page-header>
                |                                      ^^^^^^^^^^^^^^
              3 |
            Selector: f-page-header"
        `);
    });

    it("should check that skipLink is an id-selector", () => {
        expect.assertions(2);
        const valid = /* HTML */ `
            <!-- [html-validate-disable-block no-deprecated-attr -- rule not under test] -->
            <f-page-header skip-link skip-link-href="#abc"></f-page-header>
        `;
        const invalid = /* HTML */ `
            <!-- [html-validate-disable-block no-deprecated-attr -- rule not under test] -->
            <f-page-header skip-link skip-link-href="abc#"></f-page-header>
        `;
        expect(valid).toMatchInlineCodeframe(`""`);
        expect(invalid).toMatchInlineCodeframe(`
            "error: Attribute "skip-link-href" has invalid value "abc#" (attribute-allowed-values) at inline:3:54:
              1 |
              2 |             <!-- [html-validate-disable-block no-deprecated-attr -- rule not under test] -->
            > 3 |             <f-page-header skip-link skip-link-href="abc#"></f-page-header>
                |                                                      ^^^^
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

describe("routing", () => {
    it("should set correct path of route", () => {
        const myRouterPath = "/path/to/somewhere";
        const routes: RouteRecordRaw[] = [
            {
                path: "/",
                component: defineComponent({}),
            },
            {
                path: myRouterPath,
                component: defineComponent({}),
            },
        ];
        const router = createRouter({
            history: createWebHashHistory(),
            routes,
        });
        const wrapper = mount(FPageHeader, {
            props: {
                routerLinkPath: myRouterPath,
            },
            global: {
                plugins: [router],
            },
        });
        const routerLinkEl = wrapper.find(`a[href='#${myRouterPath}'`);
        expect(routerLinkEl.html()).toContain(myRouterPath);
    });

    it("should set correct path of named route", () => {
        const myRouterPath = "/path/to/somewhere";
        const myNamedRoute = "somewhere";
        const routes: RouteRecordRaw[] = [
            {
                path: "/",
                component: defineComponent({}),
            },
            {
                path: myRouterPath,
                name: myNamedRoute,
                component: defineComponent({}),
            },
        ];
        const router = createRouter({
            history: createWebHashHistory(),
            routes,
        });
        const wrapper = mount(FPageHeader, {
            props: {
                routerLinkName: myNamedRoute,
            },
            global: {
                plugins: [router],
            },
        });
        const routerLinkEl = wrapper.find(`a[href='#${myRouterPath}'`);
        expect(routerLinkEl.html()).toContain(myRouterPath);
    });

    it("should have no link when no route", () => {
        const routes: RouteRecordRaw[] = [
            {
                path: "/",
                component: defineComponent({}),
            },
        ];
        const router = createRouter({
            history: createWebHashHistory(),
            routes,
        });
        const wrapper = mount(FPageHeader, {
            global: {
                plugins: [router],
            },
        });
        const routerLinkEl = wrapper.find("a");
        expect(routerLinkEl.exists()).toBeFalsy();
    });

    it("should set router-link aria-label correctly", () => {
        const myRouterPath = "/path/to/somewhere";
        const myNamedRoute = "somewhere";
        const myRouterLabel = ", som länkar till ett exempel";
        const routes: RouteRecordRaw[] = [
            {
                path: "/",
                component: defineComponent({}),
            },
            {
                path: myRouterPath,
                name: myNamedRoute,
                component: defineComponent({}),
            },
        ];
        const router = createRouter({
            history: createWebHashHistory(),
            routes,
        });
        const wrapper = mount(FPageHeader, {
            props: {
                routerLinkName: myNamedRoute,
                routerLinkLabel: myRouterLabel,
            },
            global: {
                plugins: [router],
            },
        });
        const pageHeaderEl = wrapper.find("span.page-header__logo--responsive");
        expect(pageHeaderEl.html()).toContain(
            `aria-label="Försäkringskassan ${myRouterLabel}"`,
        );
    });

    it("should set default aria-label for router link when router-link-label not set", () => {
        const myRouterPath = "/path/to/somewhere";
        const routes: RouteRecordRaw[] = [
            {
                path: "/",
                component: defineComponent({}),
            },
            {
                path: myRouterPath,
                component: defineComponent({}),
            },
        ];
        const router = createRouter({
            history: createWebHashHistory(),
            routes,
        });
        const wrapper = mount(FPageHeader, {
            props: {
                routerLinkPath: myRouterPath,
            },
            global: {
                plugins: [router],
            },
        });
        const pageHeaderEl = wrapper.find("span.page-header__logo--responsive");
        expect(pageHeaderEl.html()).toContain(
            'aria-label="Försäkringskassan, gå till startsidan"',
        );
    });

    it("should not display router-link-label in aria-label without router-link", () => {
        const routerLinkLabelText = "description of link";
        const routes: RouteRecordRaw[] = [
            {
                path: "/",
                component: defineComponent({}),
            },
        ];
        const router = createRouter({
            history: createWebHashHistory(),
            routes,
        });
        const wrapper = mount(FPageHeader, {
            props: {
                routerLinkLabel: routerLinkLabelText,
            },
            global: {
                plugins: [router],
            },
        });
        const pageHeaderEl = wrapper.find("span.page-header__logo--responsive");
        expect(pageHeaderEl.html()).toContain('aria-label="Försäkringskassan"');
    });
});
