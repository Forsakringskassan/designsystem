/* eslint-disable sonarjs/no-element-overwrite -- testcases related to overwriting keys */
import { PersistenceService } from "./PersistenceService";

let sut: PersistenceService<string>;
let isSessionPresent: jest.SpyInstance<boolean, []>;

beforeEach(() => {
    window.sessionStorage.clear();
    jest.restoreAllMocks();
    sut = new PersistenceService();
    isSessionPresent = jest
        .spyOn(sut, "isSessionPresent", "get")
        .mockReturnValue(false);
});

describe("find - searching for value that may not exist", () => {
    it("should return undefined when no data is present", () => {
        const actual = sut.find("my-key");
        expect(actual).toBeUndefined();
    });

    it("should return stored value", () => {
        sut.set("my-key", "stored value");
        expect(sut.find("my-key")).toBe("stored value");
    });

    it("should overwrite stored value", () => {
        sut.set("my-key", "stored value");
        sut.set("my-key", "overwritten value");
        expect(sut.find("my-key")).toBe("overwritten value");
    });

    it("should return undefined for other keys", () => {
        sut.set("my-key", "stored value");
        expect(sut.find("other-key")).toBeUndefined();
    });

    it("should return undefined after key is removed", () => {
        sut.set("my-key", "stored value");
        sut.remove("my-key");
        expect(sut.find("my-key")).toBeUndefined();
    });
});

describe("get - retrieving a value that should exist, or else it is an error", () => {
    it("should throw error when no data is present", () => {
        expect(() => sut.get("my-key")).toThrow(
            `PersistenceService cannot find entry with key "my-key"`,
        );
    });

    it("should return stored value", () => {
        sut.set("my-key", "stored value");
        expect(sut.get("my-key")).toBe("stored value");
    });

    it("should overwrite stored value", () => {
        sut.set("my-key", "stored value");
        sut.set("my-key", "overwritten value");
        expect(sut.get("my-key")).toBe("overwritten value");
    });

    it("should return undefined for other keys", () => {
        sut.set("my-key", "stored value");
        expect(() => sut.get("other-key")).toThrow(
            `PersistenceService cannot find entry with key "other-key"`,
        );
    });

    it("should return undefined after key is removed", () => {
        sut.set("my-key", "stored value");
        sut.remove("my-key");
        expect(() => sut.get("my-key")).toThrow(
            `PersistenceService cannot find entry with key "my-key"`,
        );
    });
});

describe("session storage", () => {
    it("should be backed by sessionstorage if present", () => {
        isSessionPresent.mockReturnValue(true);
        window.sessionStorage.setItem(
            "my-key",
            JSON.stringify("persisted value"),
        );
        expect(sut.find("my-key")).toBe("persisted value");
        expect(sut.find("other-key")).toBeUndefined();
    });

    it("should store in sessionstorage if present", () => {
        isSessionPresent.mockReturnValue(true);
        sut.set("my-key", "stored value");
        const actual = window.sessionStorage.getItem("my-key") ?? "{}";
        expect(JSON.parse(actual)).toBe("stored value");
    });

    it("should overwrite in sessionstorage if present", () => {
        isSessionPresent.mockReturnValue(true);
        sut.set("my-key", "stored value");
        sut.set("my-key", "overwritten value");
        const actual = window.sessionStorage.getItem("my-key") ?? "{}";
        expect(JSON.parse(actual)).toBe("overwritten value");
    });
});

describe("objects", () => {
    interface MockInterface {
        foo?: string;
        bar?: string;
    }

    it("should not merge objects (with sessionstorage)", () => {
        const sut = new PersistenceService<MockInterface>();
        jest.spyOn(sut, "isSessionPresent", "get").mockReturnValue(true);
        sut.set("my-key", {
            foo: "spam",
        });
        sut.set("my-key", {
            bar: "ham",
        });
        expect(sut.get("my-key")).toEqual({
            bar: "ham",
        });
    });

    it("should not merge objects (without sessionstorage)", () => {
        const sut = new PersistenceService<MockInterface>();
        jest.spyOn(sut, "isSessionPresent", "get").mockReturnValue(false);
        sut.set("my-key", {
            foo: "spam",
        });
        sut.set("my-key", {
            bar: "ham",
        });
        expect(sut.get("my-key")).toEqual({
            bar: "ham",
        });
    });
});
