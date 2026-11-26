import { it, snapshot } from "node:test";
import { compileString } from "sass";

snapshot.setDefaultSnapshotSerializers([(value) => value]);

it("should compile global as default", (t) => {
    const source = `@use "font";`;
    const result = compileString(source, { url: import.meta.url });
    t.assert.snapshot(result.css);
});

it("should not include any styling if global is disabled", (t) => {
    const source = `@use "font" with ($global: false);`;
    const result = compileString(source, { url: import.meta.url });
    t.assert.snapshot(result.css);
});

it("should support compile with custom selector", (t) => {
    const source = [
        `@use "font" with ($global: false);`,
        ``,
        `.awesome-selector {`,
        `  @include font.font`,
        `}`,
    ].join("\n");
    const result = compileString(source, { url: import.meta.url });
    t.assert.snapshot(result.css);
});

it("should support compile with custom asset path", (t) => {
    const source = `@use "font" with ($asset-path: "awesome-fonts");`;
    const result = compileString(source, { url: import.meta.url });
    t.assert.snapshot(result.css);
});
