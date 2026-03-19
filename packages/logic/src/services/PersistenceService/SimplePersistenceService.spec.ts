import { SimplePersistenceService } from "./SimplePersistenceService";

let sut: SimplePersistenceService<string>;

beforeEach(() => {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any -- technical
     * debt, should replace with jest.spyOn */
    (global as any).window = {
        sessionStorage: {
            setItem: jest.fn(),
            getItem: jest.fn(),
        },
    };

    sut = new SimplePersistenceService<string>("the-storage-key");
});

describe("find - searching for value that may not exist", () => {
    it("should return undefined when no data is present", () => {
        const actual = sut.find();
        expect(actual).toBeUndefined();
    });

    it("should return stored value", () => {
        sut.set("stored value");
        expect(sut.find()).toBe("stored value");
    });

    it("should return undefined after key is removed", () => {
        sut.set("stored value");
        sut.remove();
        expect(sut.find()).toBeUndefined();
    });
});

describe("get - retrieving a value that should exist, or else it is an error", () => {
    it("should throw error when no data is present", () => {
        expect(() => sut.get()).toThrow(
            `PersistenceService cannot find entry with key "the-storage-key"`,
        );
    });

    it("should return stored value", () => {
        sut.set("stored value");
        expect(sut.get()).toBe("stored value");
    });

    it("should throw error after key is removed", () => {
        sut.set("stored value");
        sut.remove();
        expect(() => sut.get()).toThrow(
            `PersistenceService cannot find entry with key "the-storage-key"`,
        );
    });
});
