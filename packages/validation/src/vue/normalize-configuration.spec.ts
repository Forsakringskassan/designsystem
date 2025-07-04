import { type ValidatorName } from "../type-mapping";
import { type ValidatorConfigMapping } from "../types";
import { normalizeConfiguration } from "./normalize-configuration";
import { type ValidationDirectiveBinding } from "./validation-directive";

function modifiersFromString(
    value: string,
): ValidationDirectiveBinding["modifiers"] {
    const names = value.split(".").slice(1) as ValidatorName[];
    return Object.fromEntries(names.map((it) => [it, true]));
}

it("should return empty object if no modifiers are provided", () => {
    const modifiers = modifiersFromString("v-validation");
    const value = {};
    const result = normalizeConfiguration(modifiers, value);
    expect(result).toEqual({});
});

it("should set enabled flag for each modifier", () => {
    const modifiers = modifiersFromString("v-validation.foo.bar");
    const value = {};
    const result = normalizeConfiguration(modifiers, value);
    expect(result).toEqual({
        foo: { enabled: true },
        bar: { enabled: true },
    });
});

it("should merge with user configuration", () => {
    const modifiers = modifiersFromString("v-validation.foo.bar");
    const value = { foo: { spam: "ham" } } as ValidatorConfigMapping;
    const result = normalizeConfiguration(modifiers, value);
    expect(result).toEqual({
        foo: { enabled: true, spam: "ham" },
        bar: { enabled: true },
    });
});

it("should overwrite enabled flag if provided in user configuration", () => {
    const modifiers = modifiersFromString("v-validation.foo.bar");
    const value = {
        foo: { enabled: false },
        bar: { enabled: true },
    } as ValidatorConfigMapping;
    const result = normalizeConfiguration(modifiers, value);
    expect(result).toEqual({
        foo: { enabled: false },
        bar: { enabled: true },
    });
});
