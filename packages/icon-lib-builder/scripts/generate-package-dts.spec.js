import { generatePackageDts } from "./generate-package-dts";

it("should generate content for package dts", () => {
    // eslint-disable-next-line jest/no-large-snapshots -- easier to read in this case
    expect(generatePackageDts(["foo", "bar-baz"])).toMatchInlineSnapshot(`
        "import { IconLibrary } from "./icon-library";
        import fooMeta from "./foo/spritesheet.json";
        import barBazMeta from "./bar-baz/spritesheet.json";

        export { IconDefinition } from "./icon-definition";
        export { IconLibrary } from "./icon-library";

        export type IconPackage = Record<string, IconLibrary>;

        declare const value: {
            foo: { metadata: typeof fooMeta } & IconLibrary,
            barBaz: { metadata: typeof barBazMeta } & IconLibrary,
        }

        export default value;"
    `);
});
