import { FDate } from "@fkui/date";
import { getDayTabindex } from "./get-day-tabindex";

const dates = [
    FDate.fromIso("2022-08-01"),
    FDate.fromIso("2022-08-02"),
    FDate.fromIso("2022-08-03"),
    FDate.fromIso("2022-08-04"),
    FDate.fromIso("2022-08-05"),
    FDate.fromIso("2022-08-06"),
    FDate.fromIso("2022-08-07"),
];

function getDayTabindexResults(
    dates: FDate[],
    active: FDate | undefined,
    entry: FDate | undefined,
): Record<string, number> {
    const entries = dates.map((date) => {
        return [date.toString(), getDayTabindex(date, active, entry)];
    });

    return Object.fromEntries(entries);
}

it("Active day should have tabindex 0 when active is within current month", () => {
    const active = FDate.fromIso("2022-08-04");
    const entry = undefined;
    expect(getDayTabindexResults(dates, active, entry)).toMatchInlineSnapshot(`
            {
              "2022-08-01": -1,
              "2022-08-02": -1,
              "2022-08-03": -1,
              "2022-08-04": 0,
              "2022-08-05": -1,
              "2022-08-06": -1,
              "2022-08-07": -1,
            }
        `);
});
it("First day should have tabindex 0 when active is outside current month", () => {
    const active = FDate.fromIso("2022-07-04");
    const entry = undefined;
    expect(getDayTabindexResults(dates, active, entry)).toMatchInlineSnapshot(`
            {
              "2022-08-01": 0,
              "2022-08-02": -1,
              "2022-08-03": -1,
              "2022-08-04": -1,
              "2022-08-05": -1,
              "2022-08-06": -1,
              "2022-08-07": -1,
            }
        `);
});
it("Entry day should have tabindex 0 when entry is within current month", () => {
    const active = undefined;
    const entry = FDate.fromIso("2022-08-02");
    expect(getDayTabindexResults(dates, active, entry)).toMatchInlineSnapshot(`
            {
              "2022-08-01": -1,
              "2022-08-02": 0,
              "2022-08-03": -1,
              "2022-08-04": -1,
              "2022-08-05": -1,
              "2022-08-06": -1,
              "2022-08-07": -1,
            }
        `);
});
it("First day should have tabindex 0 when entry is outside current month", () => {
    const active = undefined;
    const entry = FDate.fromIso("2022-07-02");
    expect(getDayTabindexResults(dates, active, entry)).toMatchInlineSnapshot(`
            {
              "2022-08-01": 0,
              "2022-08-02": -1,
              "2022-08-03": -1,
              "2022-08-04": -1,
              "2022-08-05": -1,
              "2022-08-06": -1,
              "2022-08-07": -1,
            }
        `);
});
it("Active day should have priority over entry day", () => {
    const active = FDate.fromIso("2022-08-04");
    const entry = FDate.fromIso("2022-08-02");
    expect(getDayTabindexResults(dates, active, entry)).toMatchInlineSnapshot(`
            {
              "2022-08-01": -1,
              "2022-08-02": -1,
              "2022-08-03": -1,
              "2022-08-04": 0,
              "2022-08-05": -1,
              "2022-08-06": -1,
              "2022-08-07": -1,
            }
        `);
});
it("First day should have tabindex 0 when no active or entry day", () => {
    const active = undefined;
    const entry = undefined;
    expect(getDayTabindexResults(dates, active, entry)).toMatchInlineSnapshot(`
            {
              "2022-08-01": 0,
              "2022-08-02": -1,
              "2022-08-03": -1,
              "2022-08-04": -1,
              "2022-08-05": -1,
              "2022-08-06": -1,
              "2022-08-07": -1,
            }
        `);
});
