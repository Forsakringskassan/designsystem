import { it } from "node:test";
import stylelint from "stylelint";
import plugin from "../index.js";

const config = {
    plugins: [plugin],
    rules: {
        "fkui/deprecated-variable": true,
    },
};

async function lint(code) {
    const {
        results: [{ warnings, parseErrors }],
    } = await stylelint.lint({
        code,
        config,
    });
    return { warnings, parseErrors };
}

it("should warn when using deprecated variable", async (t) => {
    const { warnings, parseErrors } = await lint(`
        .foo {
            color: var(--f-shadow-large);
        }
    `);

    t.assert.deepStrictEqual(parseErrors, []);
    t.assert.partialDeepStrictEqual(warnings, [
        {
            column: 24,
            endColumn: 40,
            endLine: 3,
            fix: undefined,
            line: 3,
            rule: "fkui/deprecated-variable",
            severity: "error",
            text: 'Deprecated variable "--f-shadow-large" (fkui/deprecated-variable)',
            url: undefined,
        },
    ]);
});

it("should handle whitespace", async (t) => {
    const { warnings, parseErrors } = await lint(`
        .foo {
            a: var( --f-shadow-large);
            b: var(--f-shadow-large );
            c: var( --f-shadow-large );
        }
    `);

    t.assert.deepStrictEqual(parseErrors, []);
    t.assert.partialDeepStrictEqual(warnings, [
        {
            column: 21,
            endColumn: 37,
            endLine: 3,
            fix: undefined,
            line: 3,
            rule: "fkui/deprecated-variable",
            severity: "error",
            text: 'Deprecated variable "--f-shadow-large" (fkui/deprecated-variable)',
            url: undefined,
        },
        {
            column: 20,
            endColumn: 36,
            endLine: 4,
            fix: undefined,
            line: 4,
            rule: "fkui/deprecated-variable",
            severity: "error",
            text: 'Deprecated variable "--f-shadow-large" (fkui/deprecated-variable)',
            url: undefined,
        },
        {
            column: 21,
            endColumn: 37,
            endLine: 5,
            fix: undefined,
            line: 5,
            rule: "fkui/deprecated-variable",
            severity: "error",
            text: 'Deprecated variable "--f-shadow-large" (fkui/deprecated-variable)',
            url: undefined,
        },
    ]);
});

it("should handle fallback value", async (t) => {
    const { warnings, parseErrors } = await lint(`
        .foo {
            color: var(--f-shadow-large, #ff00aa);
        }
    `);

    t.assert.deepStrictEqual(parseErrors, []);
    t.assert.partialDeepStrictEqual(warnings, [
        {
            column: 24,
            endColumn: 40,
            endLine: 3,
            fix: undefined,
            line: 3,
            rule: "fkui/deprecated-variable",
            severity: "error",
            text: 'Deprecated variable "--f-shadow-large" (fkui/deprecated-variable)',
            url: undefined,
        },
    ]);
});

it("should handle properties with multiple declarations", async (t) => {
    const { warnings, parseErrors } = await lint(`
        .foo {
            background: var(--f-shadow-large), var(--f-color-backdrop);
        }
    `);

    t.assert.deepStrictEqual(parseErrors, []);
    t.assert.partialDeepStrictEqual(warnings, [
        {
            column: 29,
            endColumn: 45,
            endLine: 3,
            fix: undefined,
            line: 3,
            rule: "fkui/deprecated-variable",
            severity: "error",
            text: 'Deprecated variable "--f-shadow-large" (fkui/deprecated-variable)',
            url: undefined,
        },
        {
            column: 52,
            endColumn: 70,
            endLine: 3,
            fix: undefined,
            line: 3,
            rule: "fkui/deprecated-variable",
            severity: "error",
            text: 'Deprecated variable "--f-color-backdrop" (fkui/deprecated-variable)',
            url: undefined,
        },
    ]);
});

it("should handle malformed var", async (t) => {
    const { warnings, parseErrors } = await lint(`
        .foo {
            a: var();
            b: var(--f-shadow-large,);
        }
    `);
    t.assert.deepStrictEqual(parseErrors, []);
    t.assert.partialDeepStrictEqual(warnings, [
        {
            column: 20,
            endColumn: 36,
            endLine: 4,
            fix: undefined,
            line: 4,
            rule: "fkui/deprecated-variable",
            severity: "error",
            text: 'Deprecated variable "--f-shadow-large" (fkui/deprecated-variable)',
            url: undefined,
        },
    ]);
});

it("should not warn when variable is not deprecated", async (t) => {
    const { warnings, parseErrors } = await lint(`
        .foo {
            color: var(--my-fancy-variable);
        }
    `);
    t.assert.deepStrictEqual(parseErrors, []);
    t.assert.deepStrictEqual(warnings, []);
});
