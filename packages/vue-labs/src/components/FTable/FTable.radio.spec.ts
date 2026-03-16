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
                name: "active-column",
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
                name: "first-column",
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
                name: "first-column",
            },
            {
                type: "radio",
                header: "Second",
                label: () => "Label second",
                key: "second",
                name: "second-column",
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
        expect.assertions(6);
        const rowsTableOne = [{ first: false }, { first: false }];
        const rowsTableTwo = [{ first: false }, { first: false }];
        const columns = defineTableColumns<(typeof rowsTableOne)[number]>([
            {
                type: "radio",
                header: "Header",
                label: () => "Label",
                key: "first",
                name: "shared-group",
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
        expect(
            wrapperOne.get<HTMLInputElement>(
                "tbody tr:nth-child(1) td:nth-child(1) input[type='radio']",
            ).element.name,
        ).not.toBe(
            wrapperTwo.get<HTMLInputElement>(
                "tbody tr:nth-child(2) td:nth-child(1) input[type='radio']",
            ).element.name,
        );
        expect(
            wrapperOne.get<HTMLInputElement>(
                "tbody tr:nth-child(1) td:nth-child(1) input[type='radio']",
            ).element.name,
        ).toContain("shared-group");

        wrapperOne.unmount();
        wrapperTwo.unmount();
    });

    describe("name property", () => {
        it("should use static name for column-wise grouping", async () => {
            expect.assertions(3);
            const rows = [
                { active: false },
                { active: false },
                { active: false },
            ];
            const columns = defineTableColumns<(typeof rows)[number]>([
                {
                    type: "radio",
                    header: "Header",
                    label: () => "Label",
                    key: "active",
                    name: "columnwise",
                },
            ]);
            const wrapper = mount(FTable<(typeof rows)[number]>, {
                props: { rows, columns },
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
                { active: false },
                { active: true },
                { active: false },
            ]);
            expect(firstRowRadio.element.checked).toBeFalsy();
            expect(secondRowRadio.element.checked).toBeTruthy();

            wrapper.unmount();
        });

        it("should scope HTML name attribute from static name", () => {
            expect.assertions(3);
            const rows = [{ active: false }, { active: false }];
            const columns = defineTableColumns<(typeof rows)[number]>([
                {
                    type: "radio",
                    header: "Header",
                    label: () => "Label",
                    key: "active",
                    name: "mygroup",
                },
            ]);
            const wrapper = mount(FTable<(typeof rows)[number]>, {
                props: { rows, columns },
            });

            const radios = wrapper.findAll<HTMLInputElement>(
                "input[type='radio']",
            );
            expect(radios[0].element.name).toBe(radios[1].element.name);
            expect(radios[0].element.name).toContain("mygroup");
            expect(radios[0].element.name).not.toBe("mygroup");

            wrapper.unmount();
        });

        it("should use function name for row-wise grouping across columns", async () => {
            expect.assertions(2);
            const rows = [
                { id: 1, col1: false, col2: false },
                { id: 2, col1: false, col2: false },
            ];
            const columns = defineTableColumns<(typeof rows)[number]>([
                {
                    type: "radio",
                    header: "Col 1",
                    label: () => "Label col 1",
                    key: "col1",
                    name: (row) => `rowwise-${row.id}`,
                },
                {
                    type: "radio",
                    header: "Col 2",
                    label: () => "Label col 2",
                    key: "col2",
                    name: (row) => `rowwise-${row.id}`,
                },
            ]);
            const wrapper = mount(FTable<(typeof rows)[number]>, {
                props: { rows, columns },
            });

            // Select col1 for row 1
            await wrapper
                .get<HTMLInputElement>(
                    "tbody tr:nth-child(1) td:nth-child(1) input[type='radio']",
                )
                .setValue();

            // Select col2 for row 1 — should deselect col1 for row 1
            await wrapper
                .get<HTMLInputElement>(
                    "tbody tr:nth-child(1) td:nth-child(2) input[type='radio']",
                )
                .setValue();

            // row 1 col1 should be deselected, col2 selected
            // row 2 should be unaffected
            expect(rows).toEqual([
                { id: 1, col1: false, col2: true },
                { id: 2, col1: false, col2: false },
            ]);

            // Select col1 for row 2 — should not affect row 1
            await wrapper
                .get<HTMLInputElement>(
                    "tbody tr:nth-child(2) td:nth-child(1) input[type='radio']",
                )
                .setValue();

            expect(rows).toEqual([
                { id: 1, col1: false, col2: true },
                { id: 2, col1: true, col2: false },
            ]);

            wrapper.unmount();
        });

        it("should scope HTML name attribute from function name based on row", () => {
            expect.assertions(4);
            const rows = [
                { id: 1, col1: false, col2: false },
                { id: 2, col1: false, col2: false },
            ];
            const columns = defineTableColumns<(typeof rows)[number]>([
                {
                    type: "radio",
                    header: "Col 1",
                    label: () => "Label col 1",
                    key: "col1",
                    name: (row) => `rowwise-${row.id}`,
                },
                {
                    type: "radio",
                    header: "Col 2",
                    label: () => "Label col 2",
                    key: "col2",
                    name: (row) => `rowwise-${row.id}`,
                },
            ]);
            const wrapper = mount(FTable<(typeof rows)[number]>, {
                props: { rows, columns },
            });

            // Row 1: both columns should share name "rowwise-1"
            const row1col1 = wrapper.get<HTMLInputElement>(
                "tbody tr:nth-child(1) td:nth-child(1) input[type='radio']",
            );
            const row1col2 = wrapper.get<HTMLInputElement>(
                "tbody tr:nth-child(1) td:nth-child(2) input[type='radio']",
            );
            // Row 2: both columns should share name "rowwise-2"
            const row2col1 = wrapper.get<HTMLInputElement>(
                "tbody tr:nth-child(2) td:nth-child(1) input[type='radio']",
            );
            const row2col2 = wrapper.get<HTMLInputElement>(
                "tbody tr:nth-child(2) td:nth-child(2) input[type='radio']",
            );

            expect(row1col1.element.name).toBe(row1col2.element.name);
            expect(row1col1.element.name).toContain("rowwise-1");
            expect(row2col1.element.name).toBe(row2col2.element.name);
            expect(row2col1.element.name).toContain("rowwise-2");

            wrapper.unmount();
        });
    });
});
