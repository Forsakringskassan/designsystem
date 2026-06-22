import { describe, expect, it } from "vitest";
import { pageClasses } from "./page-classes";

describe("pageClasses", () => {
    it("should contain default class", () => {
        expect.assertions(1);
        const classes = pageClasses(1, 2);
        expect(classes).toEqual(["paginator__page"]);
    });

    it("should contain active class when page is current page", () => {
        expect.assertions(1);
        const classes = pageClasses(1, 1);
        expect(classes).toContain("paginator__page--active");
    });
});
