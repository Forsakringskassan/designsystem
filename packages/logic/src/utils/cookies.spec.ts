import { beforeEach, expect, it } from "vitest";
import { deleteCookie, findCookie, setCookie } from "./cookies";

const document = {
    cookie: ``,
};

beforeEach(() => {
    document.cookie = ``;
});

it(`should set cookie and read it`, () => {
    expect.assertions(3);
    setCookie({
        name: `the-name`,
        value: `the-value`,
    });

    expect(findCookie(`the-name`)).toBe(`the-value`);
    deleteCookie(`the-name`);
    expect(findCookie(`the-name`)).toBeUndefined();

    expect(document.cookie).toBe(``);
});

it(`should not care if deleted cookie exists or not`, () => {
    expect.assertions(2);
    expect(findCookie(`the-name`)).toBeUndefined();
    expect(() => deleteCookie(`the-name`)).not.toThrow();
});

it(`should keep existing cookie`, () => {
    expect.assertions(1);
    setCookie({
        name: `the-name`,
        value: `the-value-1`,
    });

    setCookie({
        name: `the-name`,
        value: `the-value-2`,
        keepAnyExistingCookie: true,
    });

    expect(findCookie(`the-name`)).toBe(`the-value-1`);
});

it(`should overwrite existing cookie`, () => {
    expect.assertions(1);
    setCookie({
        name: `the-name`,
        value: `the-value-1`,
    });

    setCookie({
        name: `the-name`,
        value: `the-value-2`,
        keepAnyExistingCookie: false,
    });

    expect(findCookie(`the-name`)).toBe(`the-value-2`);
});
