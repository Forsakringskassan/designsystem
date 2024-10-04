import {
    type NestedStringRecord,
    type I18nextProvider,
    i18nextProvider,
} from "./i18next-provider";

describe("currentLanguage", () => {
    it("should return current loaded language", async () => {
        expect.assertions(2);
        const provider = await i18nextProvider({
            defaultLanguage: "en",
            loadLanguage() {
                return {};
            },
        });
        expect(provider.currentLanguage).toBe("en");
        await provider.changeLanguage("sv");
        expect(provider.currentLanguage).toBe("sv");
    });
});

describe("changeLanguage()", () => {
    it("should call user provided callback", async () => {
        expect.assertions(3);
        const spy = jest.fn().mockReturnValue({});
        const provider = await i18nextProvider({
            defaultLanguage: "en",
            loadLanguage: spy,
        });
        await provider.changeLanguage("sv");
        expect(spy).toHaveBeenCalledTimes(2);
        expect(spy).toHaveBeenNthCalledWith(1, "en");
        expect(spy).toHaveBeenNthCalledWith(2, "sv");
    });

    it("should load new language", async () => {
        expect.assertions(2);
        const provider = await i18nextProvider({
            defaultLanguage: "en",
            loadLanguage(lang) {
                return {
                    foo: `${lang}:Foo`,
                };
            },
        });
        expect(provider.translate("foo")).toBe("en:Foo");
        await provider.changeLanguage("sv");
        expect(provider.translate("foo")).toBe("sv:Foo");
    });

    it("should handle async callback", async () => {
        expect.assertions(2);
        const provider = await i18nextProvider({
            defaultLanguage: "en",
            loadLanguage(lang) {
                return Promise.resolve({
                    foo: `${lang}:Foo`,
                });
            },
        });
        expect(provider.translate("foo")).toBe("en:Foo");
        await provider.changeLanguage("sv");
        expect(provider.translate("foo")).toBe("sv:Foo");
    });
});

describe("translate()", () => {
    function createProvider(
        texts: NestedStringRecord,
    ): Promise<I18nextProvider> {
        return i18nextProvider({
            defaultLanguage: "en",
            loadLanguage() {
                return texts;
            },
        });
    }

    it("should translate key", async () => {
        expect.assertions(1);
        const provider = await createProvider({
            foo: "Lorem ipsum",
        });
        const result = provider.translate("foo");
        expect(result).toBe("Lorem ipsum");
    });

    it("should translate key (nested key)", async () => {
        expect.assertions(1);
        const provider = await createProvider({
            nested: {
                key: "Nested key",
            },
        });
        const result = provider.translate("nested.key");
        expect(result).toBe("Nested key");
    });

    it("should translate key (flat key)", async () => {
        expect.assertions(1);
        const provider = await createProvider({
            "flat.key": "Flat key",
        });
        const result = provider.translate("flat.key");
        expect(result).toBe("Flat key");
    });

    it("should return key if translation is missing", async () => {
        expect.assertions(1);
        const provider = await createProvider({});
        const result = provider.translate("missing.key");
        expect(result).toBe("missing.key");
    });

    it("should use provided fallback", async () => {
        expect.assertions(1);
        const provider = await createProvider({});
        const result = provider.translate("missing.key", "Fallback text");
        expect(result).toBe("Fallback text");
    });

    it("cimode should always return keys even if translation is present", async () => {
        expect.assertions(4);
        const provider = await createProvider({
            foo: "lorem ipsum",
            nested: {
                key: "nested key",
            },
        });
        await provider.changeLanguage("cimode");
        expect(provider.translate("foo")).toBe("foo");
        expect(provider.translate("nested.key")).toBe("nested.key");
        expect(provider.translate("missing.key")).toBe("missing.key");
        expect(provider.translate("missing.key", "Fallback")).toBe(
            "missing.key",
        );
    });

    it("should support interpolation with {{ ... }}", async () => {
        expect.assertions(1);
        const provider = await createProvider({
            hello: "Hello {{ name }}!",
        });
        const result = provider.translate("hello", { name: "World" });
        expect(result).toBe("Hello World!");
    });

    it("should support custom formatters", async () => {
        expect.assertions(1);
        const provider = await createProvider({
            hello: "Hello {{ name, uppercase }}!",
        });
        provider.addFormatter("uppercase", (value: unknown) => {
            return String(value).toUpperCase();
        });
        const result = provider.translate("hello", { name: "World" });
        expect(result).toBe("Hello WORLD!");
    });
});
