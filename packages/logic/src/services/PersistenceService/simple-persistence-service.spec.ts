import { beforeEach, describe, expect, it } from "vitest";
import { SimplePersistenceService } from "./simple-persistence-service";

let sut: SimplePersistenceService<string>;

beforeEach(() => {
    sut = new SimplePersistenceService<string>("the-storage-key");
});

describe("find - searching for value that may not exist", () => {
    it("should return undefined when no data is present", () => {
        expect.assertions(1);
        const actual = sut.find();
        expect(actual).toBeUndefined();
    });

    it("should return stored value", () => {
        expect.assertions(1);
        sut.set("stored value");
        expect(sut.find()).toBe("stored value");
    });

    it("should return undefined after key is removed", () => {
        expect.assertions(1);
        sut.set("stored value");
        sut.remove();
        expect(sut.find()).toBeUndefined();
    });
});

describe("get - retrieving a value that should exist, or else it is an error", () => {
    it("should throw error when no data is present", () => {
        expect.assertions(1);
        expect(() => sut.get()).toThrow(
            `PersistenceService cannot find entry with key "the-storage-key"`,
        );
    });

    it("should return stored value", () => {
        expect.assertions(1);
        sut.set("stored value");
        expect(sut.get()).toBe("stored value");
    });

    it("should throw error after key is removed", () => {
        expect.assertions(1);
        sut.set("stored value");
        sut.remove();
        expect(() => sut.get()).toThrow(
            `PersistenceService cannot find entry with key "the-storage-key"`,
        );
    });
});
