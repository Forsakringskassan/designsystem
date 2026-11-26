import { it, snapshot } from "node:test";
import { compileString } from "sass";

snapshot.setDefaultSnapshotSerializers([(value) => value]);

it("should compile global as default", (t) => {
    const source = `@use "f-logo";`;
    const result = compileString(source, { url: import.meta.url });
    t.assert.snapshot(result.css);
});

it("should not include any styling if global is disabled", (t) => {
    const source = `@use "f-logo" with ($global: false);`;
    const result = compileString(source, { url: import.meta.url });
    t.assert.snapshot(result.css);
});

it("should support compile with custom selector", (t) => {
    const source = [
        `@use "f-logo" with ($global: false);`,
        ``,
        `.awesome-selector {`,
        `  @include f-logo.f-logo`,
        `}`,
    ].join("\n");
    const result = compileString(source, { url: import.meta.url });
    t.assert.snapshot(result.css);
});

it("should support compile with custom asset path", (t) => {
    const source = `@use "f-logo" with ($asset-path: "logos");`;
    const result = compileString(source, { url: import.meta.url });
    t.assert.snapshot(result.css);
});
