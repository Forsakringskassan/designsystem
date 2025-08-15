import { shallowRef } from "vue";
import { FDate, FYear } from "@fkui/date";
import { onKeyDown, useYearSelector } from "./useYearSelector";

describe("keyboard navigation", () => {
    it("arrow down should move to next year", async () => {
        expect.assertions(3);
        const focus = jest.fn();
        const close = jest.fn();
        const select = jest.fn();

        /* given: current active year is 2024 and the available years are 2022-2026 */
        const activeYear = shallowRef(FYear.fromYear(2024));
        const firstYear = FYear.fromYear(2022);
        const lastYear = FYear.fromYear(2026);

        /* when: down arrow is pressed */
        const event = new KeyboardEvent("keydown", { key: "ArrowDown" });
        const preventDefault = jest.spyOn(event, "preventDefault");
        onKeyDown(event, {
            activeYear,
            firstYear,
            lastYear,
            focus,
            close,
            select,
        });

        /* then: the next year should be selected */
        const expectedYear = FYear.fromYear(2025);
        expect(activeYear.value).toEqual(expectedYear);
        expect(focus).toHaveBeenCalledWith(expectedYear);
        expect(preventDefault).toHaveBeenCalledWith();
    });

    it("arrow down should move to first year when last year is active", async () => {
        expect.assertions(3);
        const focus = jest.fn();
        const close = jest.fn();
        const select = jest.fn();

        /* given: current active year is 2026 and the available years are 2022-2026 */
        const activeYear = shallowRef(FYear.fromYear(2026));
        const firstYear = FYear.fromYear(2022);
        const lastYear = FYear.fromYear(2026);

        /* when: down arrow is pressed */
        const event = new KeyboardEvent("keydown", { key: "ArrowDown" });
        const preventDefault = jest.spyOn(event, "preventDefault");
        onKeyDown(event, {
            activeYear,
            firstYear,
            lastYear,
            focus,
            close,
            select,
        });

        /* then: the next year should be selected */
        const expectedYear = FYear.fromYear(2022);
        expect(activeYear.value).toEqual(expectedYear);
        expect(focus).toHaveBeenCalledWith(expectedYear);
        expect(preventDefault).toHaveBeenCalledWith();
    });

    it("arrow up should move to previous year", async () => {
        expect.assertions(3);
        const focus = jest.fn();
        const close = jest.fn();
        const select = jest.fn();

        /* given: current active year is 2024 and the available years are 2022-2026 */
        const activeYear = shallowRef(FYear.fromYear(2024));
        const firstYear = FYear.fromYear(2022);
        const lastYear = FYear.fromYear(2026);

        /* when: up arrow is pressed */
        const event = new KeyboardEvent("keydown", { key: "ArrowUp" });
        const preventDefault = jest.spyOn(event, "preventDefault");
        onKeyDown(event, {
            activeYear,
            firstYear,
            lastYear,
            focus,
            close,
            select,
        });

        /* then: the next year should be selected */
        const expectedYear = FYear.fromYear(2023);
        expect(activeYear.value).toEqual(expectedYear);
        expect(focus).toHaveBeenCalledWith(expectedYear);
        expect(preventDefault).toHaveBeenCalledWith();
    });

    it("arrow up should move to last year when first year is active", async () => {
        expect.assertions(3);
        const focus = jest.fn();
        const close = jest.fn();
        const select = jest.fn();

        /* given: current active year is 2022 and the available years are 2022-2026 */
        const activeYear = shallowRef(FYear.fromYear(2022));
        const firstYear = FYear.fromYear(2022);
        const lastYear = FYear.fromYear(2026);

        /* when: down arrow is pressed */
        const event = new KeyboardEvent("keydown", { key: "ArrowUp" });
        const preventDefault = jest.spyOn(event, "preventDefault");
        onKeyDown(event, {
            activeYear,
            firstYear,
            lastYear,
            focus,
            close,
            select,
        });

        /* then: the next year should be selected */
        const expectedYear = FYear.fromYear(2026);
        expect(activeYear.value).toEqual(expectedYear);
        expect(focus).toHaveBeenCalledWith(expectedYear);
        expect(preventDefault).toHaveBeenCalledWith();
    });

    it("enter should select current year and close year selector", async () => {
        expect.assertions(4);
        const focus = jest.fn();
        const close = jest.fn();
        const select = jest.fn();

        /* given: current active year is 2024 and the available years are 2022-2026 */
        const activeYear = shallowRef(FYear.fromYear(2024));
        const firstYear = FYear.fromYear(2022);
        const lastYear = FYear.fromYear(2026);

        /* when: enter key is pressed */
        const event = new KeyboardEvent("keydown", { key: "Enter" });
        const preventDefault = jest.spyOn(event, "preventDefault");
        onKeyDown(event, {
            activeYear,
            firstYear,
            lastYear,
            focus,
            close,
            select,
        });

        /* then: the next year should be selected */
        const expectedYear = FYear.fromYear(2024);
        expect(activeYear.value).toEqual(expectedYear);
        expect(select).toHaveBeenCalledWith(expectedYear);
        expect(close).toHaveBeenCalledWith();
        expect(preventDefault).toHaveBeenCalledWith();
    });

    it("should ignore keys when ctrl key is used", async () => {
        expect.assertions(5);
        const focus = jest.fn();
        const close = jest.fn();
        const select = jest.fn();

        /* given: current active year is 2026 and the available years are 2022-2026 */
        const activeYear = shallowRef(FYear.fromYear(2024));
        const firstYear = FYear.fromYear(2022);
        const lastYear = FYear.fromYear(2026);

        /* when: arrow key is pressed while holding ctrl */
        const event = new KeyboardEvent("keydown", {
            ctrlKey: true,
            key: "ArrowDown",
        });
        const preventDefault = jest.spyOn(event, "preventDefault");
        onKeyDown(event, {
            activeYear,
            firstYear,
            lastYear,
            focus,
            close,
            select,
        });

        /* then: nothing should happen */
        const expectedYear = FYear.fromYear(2024);
        expect(activeYear.value).toEqual(expectedYear);
        expect(focus).not.toHaveBeenCalled();
        expect(close).not.toHaveBeenCalled();
        expect(select).not.toHaveBeenCalled();
        expect(preventDefault).not.toHaveBeenCalled();
    });

    it("should ignore other keys", async () => {
        expect.assertions(5);
        const focus = jest.fn();
        const close = jest.fn();
        const select = jest.fn();

        /* given: current active year is 2026 and the available years are 2022-2026 */
        const activeYear = shallowRef(FYear.fromYear(2024));
        const firstYear = FYear.fromYear(2022);
        const lastYear = FYear.fromYear(2026);

        /* when: arrow key is pressed while holding ctrl */
        const event = new KeyboardEvent("keydown", { key: "ArrowLeft" });
        const preventDefault = jest.spyOn(event, "preventDefault");
        onKeyDown(event, {
            activeYear,
            firstYear,
            lastYear,
            focus,
            close,
            select,
        });

        /* then: nothing should happen */
        const expectedYear = FYear.fromYear(2024);
        expect(activeYear.value).toEqual(expectedYear);
        expect(focus).not.toHaveBeenCalled();
        expect(close).not.toHaveBeenCalled();
        expect(select).not.toHaveBeenCalled();
        expect(preventDefault).not.toHaveBeenCalled();
    });
});

it("selectableYears should contain all years between min/max (inclusive)", () => {
    const modelValue = FDate.fromIso("2001-06-01");
    const minDate = FDate.fromIso("1999-12-31");
    const maxDate = FDate.fromIso("2004-01-01");

    const { selectableYears } = useYearSelector({
        modelValue: shallowRef(modelValue),
        yearElements: shallowRef([document.createElement("div")]),
        yearSelector: shallowRef(document.createElement("div")),
        minDate: shallowRef(minDate),
        maxDate: shallowRef(maxDate),
        onChangeDate() {
            /* do nothing */
        },
        onClose() {
            /* do nothing */
        },
    });

    expect(selectableYears.value).toEqual([
        FYear.fromYear(1999),
        FYear.fromYear(2000),
        FYear.fromYear(2001),
        FYear.fromYear(2002),
        FYear.fromYear(2003),
        FYear.fromYear(2004),
    ]);
});
