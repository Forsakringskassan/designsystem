import { generateIndexFile } from "./generate-index-file";

it("should generate index.js file", () => {
    expect(generateIndexFile(["foo", "bar-baz"])).toMatchInlineSnapshot(`
        "import fooMeta from "./foo/spritesheet.json";
        import barBazMeta from "./bar-baz/spritesheet.json";
        import { injectSpritesheet as fooInject } from "./foo/injectSpritesheet";
        import { injectSpritesheet as barBazInject } from "./bar-baz/injectSpritesheet";
        export default {
        foo: { metadata: fooMeta, injectSpritesheet: fooInject },
        barBaz: { metadata: barBazMeta, injectSpritesheet: barBazInject },
        };"
    `);
});
