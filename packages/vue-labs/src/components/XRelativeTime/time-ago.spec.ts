import { useTranslate } from "@fkui/vue";
import { timeAgo } from "./time-ago";

const $t = useTranslate();
const now = new Date("1999-12-31T13:37:00Z").getTime();

beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(now);
});

afterEach(() => {
    jest.useRealTimers();
});

describe("timeAgo", () => {
    describe("seconds", () => {
        it("should return '0s ago' for the current moment", () => {
            expect.assertions(1);
            expect(timeAgo(now, now, $t)).toBe("0s ago");
        });

        it("should return '1s ago' for 1 second ago", () => {
            expect.assertions(1);
            expect(timeAgo(now - 1_000, now, $t)).toBe("1s ago");
        });

        it("should return '59s ago' just before the minute boundary", () => {
            expect.assertions(1);
            expect(timeAgo(now - 59_000, now, $t)).toBe("59s ago");
        });
    });

    describe("minutes", () => {
        it("should return '1m ago' at exactly 60 seconds", () => {
            expect.assertions(1);
            expect(timeAgo(now - 60_000, now, $t)).toBe("1m ago");
        });

        it("should return '30m ago' for 30 minutes", () => {
            expect.assertions(1);
            expect(timeAgo(now - 30 * 60_000, now, $t)).toBe("30m ago");
        });

        it("should return '59m ago' just before the hour boundary", () => {
            expect.assertions(1);
            expect(timeAgo(now - 59 * 60_000, now, $t)).toBe("59m ago");
        });
    });

    describe("hours", () => {
        it("should return '1h ago' at exactly 60 minutes", () => {
            expect.assertions(1);
            expect(timeAgo(now - 60 * 60_000, now, $t)).toBe("1h ago");
        });

        it("should return '12h ago' for 12 hours", () => {
            expect.assertions(1);
            expect(timeAgo(now - 12 * 60 * 60_000, now, $t)).toBe("12h ago");
        });

        it("should return '23h ago' just before the day boundary", () => {
            expect.assertions(1);
            expect(timeAgo(now - 23 * 60 * 60_000, now, $t)).toBe("23h ago");
        });
    });

    describe("days", () => {
        it("should return '1d ago' at exactly 24 hours", () => {
            expect.assertions(1);
            expect(timeAgo(now - 24 * 60 * 60_000, now, $t)).toBe("1d ago");
        });

        it("should return '7d ago' for one week", () => {
            expect.assertions(1);
            expect(timeAgo(now - 7 * 24 * 60 * 60_000, now, $t)).toBe("7d ago");
        });

        it("should return '29d ago' just before the month boundary", () => {
            expect.assertions(1);
            expect(timeAgo(now - 29 * 24 * 60 * 60_000, now, $t)).toBe(
                "29d ago",
            );
        });
    });

    describe("months", () => {
        it("should return '1mo ago' at exactly 30 days", () => {
            expect.assertions(1);
            expect(timeAgo(now - 30 * 24 * 60 * 60_000, now, $t)).toBe(
                "1mo ago",
            );
        });

        it("should return '6mo ago' for 6 months (180 days)", () => {
            expect.assertions(1);
            expect(timeAgo(now - 180 * 24 * 60 * 60_000, now, $t)).toBe(
                "6mo ago",
            );
        });

        it("should return '11mo ago' just before the year boundary", () => {
            expect.assertions(1);
            expect(timeAgo(now - 11 * 30 * 24 * 60 * 60_000, now, $t)).toBe(
                "11mo ago",
            );
        });
    });

    describe("years", () => {
        it("should return '1y ago' at exactly 12 months (360 days)", () => {
            expect.assertions(1);
            expect(timeAgo(now - 12 * 30 * 24 * 60 * 60_000, now, $t)).toBe(
                "1y ago",
            );
        });

        it("should return '2y ago' for two years", () => {
            expect.assertions(1);
            expect(timeAgo(now - 2 * 365 * 24 * 60 * 60_000, now, $t)).toBe(
                "2y ago",
            );
        });
    });
});
