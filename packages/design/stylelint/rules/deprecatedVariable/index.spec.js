const stylelint = require("stylelint");

const config = {
    plugins: [require.resolve(".")],
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

it("should warn when using deprecated variable", async () => {
    const { warnings, parseErrors } = await lint(`
        .foo {
            color: var(--f-shadow-large);
        }
    `);

    expect(parseErrors).toHaveLength(0);
    expect(warnings).toEqual([
        {
            column: 13,
            endColumn: 42,
            endLine: 3,
            line: 3,
            rule: "fkui/deprecated-variable",
            severity: "error",
            text: 'Deprecated variable "--f-shadow-large" (fkui/deprecated-variable)',
            url: undefined,
        },
    ]);
});

it("should handle whitespace", async () => {
    const { warnings, parseErrors } = await lint(`
        .foo {
            a: var( --f-shadow-large);
            b: var(--f-shadow-large );
            c: var( --f-shadow-large );
        }
    `);

    expect(parseErrors).toHaveLength(0);
    expect(warnings).toEqual([
        {
            column: 13,
            endColumn: 39,
            endLine: 3,
            line: 3,
            rule: "fkui/deprecated-variable",
            severity: "error",
            text: 'Deprecated variable "--f-shadow-large" (fkui/deprecated-variable)',
            url: undefined,
        },
        {
            column: 13,
            endColumn: 39,
            endLine: 4,
            line: 4,
            rule: "fkui/deprecated-variable",
            severity: "error",
            text: 'Deprecated variable "--f-shadow-large" (fkui/deprecated-variable)',
            url: undefined,
        },
        {
            column: 13,
            endColumn: 40,
            endLine: 5,
            line: 5,
            rule: "fkui/deprecated-variable",
            severity: "error",
            text: 'Deprecated variable "--f-shadow-large" (fkui/deprecated-variable)',
            url: undefined,
        },
    ]);
});

it("should handle fallback value", async () => {
    const { warnings, parseErrors } = await lint(`
        .foo {
            color: var(--f-shadow-large, #ff00aa);
        }
    `);

    expect(parseErrors).toHaveLength(0);
    expect(warnings).toEqual([
        {
            column: 13,
            endColumn: 51,
            endLine: 3,
            line: 3,
            rule: "fkui/deprecated-variable",
            severity: "error",
            text: 'Deprecated variable "--f-shadow-large" (fkui/deprecated-variable)',
            url: undefined,
        },
    ]);
});

it("should handle properties with multiple declarations", async () => {
    const { warnings, parseErrors } = await lint(`
        .foo {
            background: var(--f-shadow-large), var(--f-color-backdrop);
        }
    `);

    expect(parseErrors).toHaveLength(0);
    expect(warnings).toEqual([
        {
            column: 13,
            endColumn: 72,
            endLine: 3,
            line: 3,
            rule: "fkui/deprecated-variable",
            severity: "error",
            text: 'Deprecated variable "--f-shadow-large" (fkui/deprecated-variable)',
            url: undefined,
        },
        {
            column: 13,
            endColumn: 72,
            endLine: 3,
            line: 3,
            rule: "fkui/deprecated-variable",
            severity: "error",
            text: 'Deprecated variable "--f-color-backdrop" (fkui/deprecated-variable)',
            url: undefined,
        },
    ]);
});

it("should handle malformed var", async () => {
    const { warnings, parseErrors } = await lint(`
        .foo {
            a: var();
            b: var(--f-shadow-large,);
        }
    `);
    expect(parseErrors).toHaveLength(0);
    expect(warnings).toEqual([
        {
            column: 13,
            endColumn: 39,
            endLine: 4,
            line: 4,
            rule: "fkui/deprecated-variable",
            severity: "error",
            text: 'Deprecated variable "--f-shadow-large" (fkui/deprecated-variable)',
            url: undefined,
        },
    ]);
});

it("should not warn when variable is not deprecated", async () => {
    const { warnings, parseErrors } = await lint(`
        .foo {
            color: var(--my-fancy-variable);
        }
    `);
    expect(parseErrors).toHaveLength(0);
    expect(warnings).toHaveLength(0);
});
