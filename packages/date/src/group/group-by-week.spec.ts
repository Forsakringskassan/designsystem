import { FDate } from "../f-date";
import { groupByWeek } from "./group-by-week";

function serialize(
    result: Array<{ week: number; days: FDate[] }>,
): Array<{ week: number; days: string[] }> {
    return result.map((it) => {
        return {
            days: it.days.map((it) => it.toString()),
            week: it.week,
        };
    });
}

it("should group correctly when having full weeks", () => {
    const monday = FDate.fromIso("2022-08-01");
    const result = groupByWeek(monday, monday.addDays(13));
    expect(serialize(result)).toEqual([
        {
            days: [
                "2022-08-01",
                "2022-08-02",
                "2022-08-03",
                "2022-08-04",
                "2022-08-05",
                "2022-08-06",
                "2022-08-07",
            ],
            week: 31,
        },
        {
            days: [
                "2022-08-08",
                "2022-08-09",
                "2022-08-10",
                "2022-08-11",
                "2022-08-12",
                "2022-08-13",
                "2022-08-14",
            ],
            week: 32,
        },
    ]);
});

it("should group correctly when having partial weeks", () => {
    const wednesday = FDate.fromIso("2022-06-01");
    const result = groupByWeek(wednesday, wednesday.addDays(13));
    expect(serialize(result)).toEqual([
        {
            days: [
                "2022-06-01",
                "2022-06-02",
                "2022-06-03",
                "2022-06-04",
                "2022-06-05",
            ],
            week: 22,
        },
        {
            days: [
                "2022-06-06",
                "2022-06-07",
                "2022-06-08",
                "2022-06-09",
                "2022-06-10",
                "2022-06-11",
                "2022-06-12",
            ],
            week: 23,
        },
        {
            days: ["2022-06-13", "2022-06-14"],
            week: 24,
        },
    ]);
});
