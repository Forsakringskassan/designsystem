import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import FTable from "./FTable.vue";
import { defineTableColumns } from "./table-column";

describe("Radio columns", () => {
    it("should be possible to click on cell instead of radio button", async () => {
        expect.assertions(1);
        const rows = [{ active: false }, { active: false }, { active: false }];
        const columns = defineTableColumns<(typeof rows)[number]>([
            {
                type: "radio",
                header: "Header",
                label: () => "Label",
                key: "active",
            },
        ]);
        const wrapper = mount(FTable<(typeof rows)[number]>, {
            attachTo: document.body,
            props: {
                rows,
                columns,
            },
        });

        const cell = wrapper.get<HTMLTableCellElement>(
            "table tr:nth-child(2) td:first-child",
        );

        await nextTick();
        await cell.trigger("click");

        expect(rows).toEqual([
            { active: false },
            { active: true },
            { active: false },
        ]);

        wrapper.unmount();
    });

    it("should only allow one selected row per radio column", async () => {
        expect.assertions(3);
        const rows = [{ first: false }, { first: false }, { first: false }];
        const columns = defineTableColumns<(typeof rows)[number]>([
            {
                type: "radio",
                header: "Header",
                label: () => "Label",
                key: "first",
            },
        ]);
        const wrapper = mount(FTable<(typeof rows)[number]>, {
            props: {
                rows,
                columns,
            },
        });

        const firstRowRadio = wrapper.get<HTMLInputElement>(
            "tbody tr:nth-child(1) td:nth-child(1) input[type='radio']",
        );

        const secondRowRadio = wrapper.get<HTMLInputElement>(
            "tbody tr:nth-child(2) td:nth-child(1) input[type='radio']",
        );

        await firstRowRadio.setValue();
        await secondRowRadio.setValue();

        expect(rows).toEqual([
            { first: false },
            { first: true },
            { first: false },
        ]);
        expect(
            wrapper.get<HTMLInputElement>(
                "tbody tr:nth-child(1) td:nth-child(1) input[type='radio']",
            ).element.checked,
        ).toBeFalsy();

        expect(
            wrapper.get<HTMLInputElement>(
                "tbody tr:nth-child(2) td:nth-child(1) input[type='radio']",
            ).element.checked,
        ).toBeTruthy();

        wrapper.unmount();
    });

    it("should keep radio selection independent between different columns", async () => {
        expect.assertions(2);
        const rows = [
            { first: false, second: false },
            { first: false, second: false },
            { first: false, second: false },
        ];
        const columns = defineTableColumns<(typeof rows)[number]>([
            {
                type: "radio",
                header: "First",
                label: () => "Label first",
                key: "first",
            },
            {
                type: "radio",
                header: "Second",
                label: () => "Label second",
                key: "second",
            },
        ]);
        const wrapper = mount(FTable<(typeof rows)[number]>, {
            props: {
                rows,
                columns,
            },
        });

        await wrapper
            .get<HTMLInputElement>(
                "tbody tr:nth-child(1) td:nth-child(1) input[type='radio']",
            )
            .setValue();

        await wrapper
            .get<HTMLInputElement>(
                "tbody tr:nth-child(2) td:nth-child(2) input[type='radio']",
            )
            .setValue();

        await wrapper
            .get<HTMLInputElement>(
                "tbody tr:nth-child(3) td:nth-child(1) input[type='radio']",
            )
            .setValue();

        expect(rows).toEqual([
            { first: false, second: false },
            { first: false, second: true },
            { first: true, second: false },
        ]);

        expect(
            wrapper.get<HTMLInputElement>(
                "tbody tr:nth-child(2) td:nth-child(2) input[type='radio']",
            ).element.checked,
        ).toBeTruthy();

        wrapper.unmount();
    });

    it("should keep radio selection independent between different tables", async () => {
        expect.assertions(4);
        const rowsTableOne = [{ first: false }, { first: false }];
        const rowsTableTwo = [{ first: false }, { first: false }];
        const columns = defineTableColumns<(typeof rowsTableOne)[number]>([
            {
                type: "radio",
                header: "Header",
                label: () => "Label",
                key: "first",
            },
        ]);

        const wrapperOne = mount(FTable<(typeof rowsTableOne)[number]>, {
            attachTo: document.body,
            props: {
                rows: rowsTableOne,
                columns,
            },
        });

        const wrapperTwo = mount(FTable<(typeof rowsTableTwo)[number]>, {
            attachTo: document.body,
            props: {
                rows: rowsTableTwo,
                columns,
            },
        });

        await wrapperOne
            .get<HTMLInputElement>(
                "tbody tr:nth-child(1) td:nth-child(1) input[type='radio']",
            )
            .setValue();

        await wrapperTwo
            .get<HTMLInputElement>(
                "tbody tr:nth-child(2) td:nth-child(1) input[type='radio']",
            )
            .setValue();

        expect(rowsTableOne).toEqual([{ first: true }, { first: false }]);
        expect(rowsTableTwo).toEqual([{ first: false }, { first: true }]);
        expect(
            wrapperOne.get<HTMLInputElement>(
                "tbody tr:nth-child(1) td:nth-child(1) input[type='radio']",
            ).element.checked,
        ).toBeTruthy();

        expect(
            wrapperTwo.get<HTMLInputElement>(
                "tbody tr:nth-child(2) td:nth-child(1) input[type='radio']",
            ).element.checked,
        ).toBeTruthy();

        wrapperOne.unmount();
        wrapperTwo.unmount();
    });
});
