import { type VNode, ref } from "vue";
import { h } from "vue";
import { assertSet } from "@fkui/logic";
import { FTablePageObject } from "../../cypress";
import { type FTableApi } from "./f-table-api";
import { FTable, defineTableColumns } from ".";

const table = new FTablePageObject();

function renderButton(
    text: string,
    dataTest: string,
    onClick?: () => void,
): VNode {
    return h(
        "button",
        {
            type: "button",
            "data-test": dataTest,
            onClick,
        },
        text,
    );
}

function getTestSelector(value: string): string {
    return `[data-test="${value}"]`;
}

describe("1.4 Rowheader", () => {
    it("should keep row header accessible for screen readers", () => {
        // TODO Kontrollera att radrubriken har korrekt aria‑attribut
    });
});

describe("6 Expandable table", () => {
    const rows = [
        { text: "A1", nested: [{ text: "A2" }, { text: "A3" }] },
        { text: "B1", nested: [{ text: "B2" }, { text: "B3" }] },
    ];

    const columns = defineTableColumns<(typeof rows)[number]>([
        {
            type: "text",
            header: "A",
            key: "text",
        },
    ]);

    const expandableAttribute = "nested";

    it("6.1 should expand row when pressing Enter on expand cell", () => {
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows, columns, expandableAttribute },
        });

        table.expandButton(2).focus();
        table.expandButton(2).type("{enter}");
        table.expandButton(1).focus();
        table.expandButton(1).type("{enter}");

        table.rows().should("have.length", 6);
        table.cell({ row: 2, col: 2 }).should("contain.text", "A2");
        table.cell({ row: 3, col: 2 }).should("contain.text", "A3");

        table.cell({ row: 5, col: 2 }).should("contain.text", "B2");
        table.cell({ row: 6, col: 2 }).should("contain.text", "B3");
    });

    it("6.1 should expand row when pressing Space on expand cell", () => {
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows, columns, expandableAttribute },
        });

        table.expandButton(2).focus();
        table.expandButton(2).press(Cypress.Keyboard.Keys.SPACE);

        table.expandButton(1).focus();
        table.expandButton(1).press(Cypress.Keyboard.Keys.SPACE);

        table.rows().should("have.length", 6);
        table.cell({ row: 2, col: 2 }).should("contain.text", "A2");
        table.cell({ row: 3, col: 2 }).should("contain.text", "A3");

        table.cell({ row: 5, col: 2 }).should("contain.text", "B2");
        table.cell({ row: 6, col: 2 }).should("contain.text", "B3");
    });

    describe("6.2 Keyboard navigation", () => {
        const navRows = [
            { text: "A1", nested: [{ text: "A2" }] },
            { text: "B1" },
        ];

        const navColumns = defineTableColumns<(typeof navRows)[number]>([
            {
                type: "text",
                header: "A",
                key: "text",
            },
            {
                type: "text",
                header: "B",
                key: "text",
            },
            {
                type: "text",
                header: "C",
                key: "text",
            },
        ]);

        it("should have correct arrow navigation in expanded row", () => {
            cy.mount(FTable<(typeof navRows)[number]>, {
                props: {
                    rows: navRows,
                    columns: navColumns,
                    expandableAttribute,
                },
            });

            table.expandButton(1).click();

            // column 1
            cy.focused().press(Cypress.Keyboard.Keys.DOWN);
            table.cell({ row: 2, col: 1 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.DOWN);
            table.cell({ row: 3, col: 1 }).should("have.focus");

            // column 2
            cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
            table.cell({ row: 3, col: 2 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.UP);
            table.cell({ row: 2, col: 2 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.UP);
            table.cell({ row: 1, col: 2 }).should("have.focus");

            // column 3
            cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
            table.cell({ row: 1, col: 3 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.DOWN);
            table.cell({ row: 2, col: 3 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.DOWN);
            table.cell({ row: 3, col: 3 }).should("have.focus");

            // row
            cy.focused().press(Cypress.Keyboard.Keys.UP);
            table.cell({ row: 2, col: 3 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.LEFT);
            table.cell({ row: 2, col: 2 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.LEFT);
            table.cell({ row: 2, col: 1 }).should("have.focus");
        });

        it("should have correct arrow navigation in custom expanded row", () => {
            cy.mount(FTable<(typeof navRows)[number]>, {
                props: {
                    rows: navRows,
                    columns: navColumns,
                    expandableAttribute,
                },
                slots: { expandable: "Foo" },
            });

            table.expandButton(1).click();

            // column 1
            cy.focused().press(Cypress.Keyboard.Keys.DOWN);
            table.cell({ row: 2, col: 1 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.DOWN);
            table.cell({ row: 3, col: 1 }).should("have.focus");

            // column 2
            cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
            table.cell({ row: 3, col: 2 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.UP);
            table.cell({ row: 2, col: 2 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.UP);
            table.cell({ row: 1, col: 2 }).should("have.focus");

            // column 3
            cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
            table.cell({ row: 1, col: 3 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.DOWN);
            table.cell({ row: 2, col: 2 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.DOWN);
            table.cell({ row: 3, col: 3 }).should("have.focus");
        });
    });

    describe("6.3 Collapse expanded row", () => {
        const rows = [
            { text: "A1", nested: [{ text: "A2" }, { text: "A3" }] },
            { text: "B1", nested: [{ text: "B2" }, { text: "B3" }] },
        ];

        const columns = defineTableColumns<(typeof rows)[number]>([
            {
                type: "rowheader",
                header: "A",
                key: "text",
            },
        ]);

        it("should collapse expanded row when pressing Enter on expand button", () => {
            cy.mount(FTable<(typeof rows)[number]>, {
                props: { rows, columns, expandableAttribute },
            });

            table.rows().should("have.length", 2);

            table.expandButton(2).focus().type("{enter}");
            table.expandButton(1).focus().type("{enter}");

            table.rows().should("have.length", 6);

            table.expandButton(4).focus().type("{enter}");
            table.expandButton(1).focus().type("{enter}");

            table.rows().should("have.length", 2);
        });

        it("should collapse expanded row when pressing Space on expand button", () => {
            cy.mount(FTable<(typeof rows)[number]>, {
                props: { rows, columns, expandableAttribute },
            });

            table.rows().should("have.length", 2);

            table.expandButton(2).focus();
            table.expandButton(2).press(Cypress.Keyboard.Keys.SPACE);
            table.expandButton(1).focus();
            table.expandButton(1).press(Cypress.Keyboard.Keys.SPACE);

            table.rows().should("have.length", 6);

            //collapse
            table.expandButton(4).focus();
            table.expandButton(4).press(Cypress.Keyboard.Keys.SPACE);
            table.expandButton(1).focus();
            table.expandButton(1).press(Cypress.Keyboard.Keys.SPACE);

            table.rows().should("have.length", 2);
        });

        it("should collapse expanded row when pressing click on expand button", () => {
            cy.mount(FTable<(typeof rows)[number]>, {
                props: { rows, columns, expandableAttribute },
            });

            table.rows().should("have.length", 2);
            //expand
            table.expandButton(2).click();
            table.expandButton(1).click();

            table.rows().should("have.length", 6);

            //collapse
            table.expandButton(1).click();
            table.expandButton(2).click();

            table.rows().should("have.length", 2);
        });
    });
});

describe("1.3 Column header", () => {
    //todo unittest
    const rows = [
        {
            rowheader: "A1",
            text: "A2",
            input: "A3",
            button: "A4",
            anchor: "A5",
            dropdown: "Foo",
            checkbox: false,
            radio: false,

            nested: [
                {
                    rowheader: "A-A1",
                    text: "A-A2",
                    input: "A-A3",
                    button: "A-A4",
                    anchor: "A-A5",
                    dropdown: "Foo",
                    checkbox: false,
                    radio: false,
                },
                {
                    rowheader: "A-B1",
                    text: "A-B2",
                    input: "A-B3",
                    button: "A-B4",
                    anchor: "A-B5",
                    dropdown: "Foo",
                    checkbox: false,
                    radio: false,
                },
            ],
        },
        {
            rowheader: "B1",
            text: "B2",
            input: "B3",
            button: "B4",
            anchor: "B5",
            dropdown: "Foo",
            checkbox: false,
            radio: false,
        },
        {
            rowheader: "C1",
            text: "C2",
            input: "C3",
            button: "C4",
            anchor: "C5",
            dropdown: "Foo",
            checkbox: false,
            radio: false,

            nested: [
                {
                    rowheader: "C-A1",
                    text: "C-A2",
                    input: "C-A3",
                    button: "C-A4",
                    anchor: "C-A5",
                    dropdown: "Foo",
                    checkbox: false,
                    radio: false,
                },
                {
                    rowheader: "C-B1",
                    text: "C-B2",
                    input: "C-B3",
                    button: "C-B4",
                    anchor: "C-B5",
                    dropdown: "Foo",
                    checkbox: false,
                    radio: false,
                },
            ],
        },
    ];
    const columns = defineTableColumns<(typeof rows)[number]>([
        {
            type: "rowheader",
            header: "Rowheader",
            key: "rowheader",
        },
        {
            type: "text",
            header: "Text",
            key: "text",
        },
        {
            type: "text",
            header: "Input",
            key: "input",
            editable: true,
            label: () => "Input label",
            value: (row) => row.input,
        },
        {
            type: "button",
            header: "Button",
            key: "button",
            icon: "trashcan",
            value: (row) => row.button,
        },
        {
            header: "Anchor",
            type: "anchor",
            key: "anchor",
            href: "#",
            value: (row) => row.anchor,
        },
    ]);
    it("Should set correct headertext 1.3", () => {
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows, columns },
        });

        table.header(1).should("contain.text", "Rowheader");
        table.header(2).should("contain.text", "Text");
        table.header(3).should("contain.text", "Input");
        table.header(4).should("contain.text", "Button");
        table.header(5).should("contain.text", "Anchor");
    });
    it.skip("should be left-aligned by default", () => {
        //todo rätt klass(unit) och screenshot har en kolumn för varje alignment
    });
    it.skip("should be left-aligned without tnum for text columns", () => {
        //todo rätt klass(unit)
    });

    it.skip("should allow consumer to override alignment and tnum", () => {
        //todo (unit)
    });

    it.skip("should render icon next to header text if provided", () => {
        //help icon i rubriken
        //todo
    });

    it.skip("should render description under header", () => {
        //todo
    });

    it.skip("should render help format on header", () => {
        //todo
    });

    it.skip("should render screen reader text on header", () => {
        //todo
    });
});

describe("1.5 Separator", () => {
    const rows = [
        {
            rowheader: "A1",
            text: "A2",
            input: "A3",
            button: "A4",
            anchor: "A5",
            dropdown: "Foo",
            checkbox: false,
            radio: false,

            nested: [
                {
                    rowheader: "A-A1",
                    text: "A-A2",
                    input: "A-A3",
                    button: "A-A4",
                    anchor: "A-A5",
                    dropdown: "Foo",
                    checkbox: false,
                    radio: false,
                },
                {
                    rowheader: "A-B1",
                    text: "A-B2",
                    input: "A-B3",
                    button: "A-B4",
                    anchor: "A-B5",
                    dropdown: "Foo",
                    checkbox: false,
                    radio: false,
                },
            ],
        },
        {
            rowheader: "B1",
            text: "B2",
            input: "B3",
            button: "B4",
            anchor: "B5",
            dropdown: "Foo",
            checkbox: false,
            radio: false,
        },
        {
            rowheader: "C1",
            text: "C2",
            input: "C3",
            button: "C4",
            anchor: "C5",
            dropdown: "Foo",
            checkbox: false,
            radio: false,

            nested: [
                {
                    rowheader: "C-A1",
                    text: "C-A2",
                    input: "C-A3",
                    button: "C-A4",
                    anchor: "C-A5",
                    dropdown: "Foo",
                    checkbox: false,
                    radio: false,
                },
                {
                    rowheader: "C-B1",
                    text: "C-B2",
                    input: "C-B3",
                    button: "C-B4",
                    anchor: "C-B5",
                    dropdown: "Foo",
                    checkbox: false,
                    radio: false,
                },
            ],
        },
    ];
    const columns = defineTableColumns<(typeof rows)[number]>([
        {
            type: "rowheader",
            header: "Rowheader",
            key: "rowheader",
        },
        {
            type: "text",
            header: "Text",
            key: "text",
        },
        {
            type: "text",
            header: "Input",
            key: "input",
            editable: true,
            label: () => "Input label",
            value: (row) => row.input,
        },
        {
            type: "button",
            header: "Button",
            key: "button",
            icon: "trashcan",
            value: (row) => row.button,
        },
        {
            header: "Anchor",
            type: "anchor",
            key: "anchor",
            href: "#",
            value: (row) => row.anchor,
        },
    ]);

    it.skip("should have correct class for striped 1.5", () => {
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows, columns, striped: true },
        });

        table.el().should("have.class", "table-ng--striped");
    });

    it.skip("should have correct striped appearence 1.5", () => {
        //screenshot
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows, columns, striped: true },
        });
        cy.toMatchScreenshot();
    });

    it.skip("1.5 should have correct seperator when not striped 1.5", () => {
        //feature not implemented  kolla screenshot
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows, columns },
        });
        cy.toMatchScreenshot();
    });

    it.skip("should have correct class for separator 1.5", () => {
        //TODO
        //unit
    });

    it.skip("should have correct separator appearence for expandable 1.5", () => {
        //TODO feature not implemented

        cy.toMatchScreenshot();
    });
    it.skip("should have correct separator class for expandable 1.5", () => {
        //TODO feature not implemented
    });
});

describe("1.6 column size", () => {
    it("visual regression", () => {
        //todo screenshot kombinerat shrink och grow.
    });
});

describe("1.7 Format", () => {
    it("should format value using standardformat", () => {
        //todo
    });

    it("should format value using custom formatter from consumer", () => {
        //todo
    });

    it("should format value using format() function from consumer", () => {
        //todo
    });
});

describe("1.9 screen reader text sr-only", () => {
    it("should render screen reader text on column header", () => {
        //todo
    });

    it("should render screen reader text inside cell", () => {
        //todo
    });

    it("should not render sr-only text when not provided", () => {
        //todo
    });
});

describe("1.13", () => {
    it("should programmatically activate a cell", () => {
        //todo
    });
});
describe("1.14", () => {
    it("should programmatically set focus on a cell", () => {
        //todo
    });
});

describe("1.16 Data loading", () => {
    it.skip("should show spinner after 1s and block interaction while loading", () => {
        //todo spinner?
        cy.clock(); // kontrollera tid manuellt

        // Direkt efter mount: spinner ska inte synas

        // Efter 999ms: spinner ska fortfarande inte synas
        cy.tick(999);

        // Efter 1000ms: spinner ska synas
        cy.tick(1);

        // Tabell ska inte vara interagerbar ( inga tabbable element)
    });
});

describe("2.4 active components", () => {
    const rows = [
        {
            rowheader: "A1",
            text: "A2",
            input: "A3",
            button: "A4",
            anchor: "A5",
            dropdown: "Foo",
            checkbox: false,
            radio: false,
        },
    ];
    const columns = defineTableColumns<(typeof rows)[number]>([
        {
            type: "text",
            header: "Input",
            key: "input",
            editable: true,
            label: () => "Input label",
            value: (row) => row.input,
        },
    ]);

    it.skip("should not show pen icon for input field when active", () => {
        //Screenshot
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows, columns },
        });

        table.cell({ row: 1, col: 1 }).click();
        cy.toMatchScreenshot();
    });

    it("should show arrow icon for dropdown when active", () => {
        //todo
    });

    it("should show arrow icon for combobox when active", () => {
        //todo
    });
});
describe("3.1 Feedback to user on invalid input components", () => {
    it("should display feedback for the cell with invalid input", () => {
        //todo feature not implemented
        // Navigera till sidan med formuläret
        // Steg 1: Hitta cellen/inmatningsfältet
        // Steg 2: Ange ett ogiltigt värde (exempel: fel format)
        // Steg 3: Försök att skicka formuläret
        // Steg 4: Kontrollera att återkoppling visas för just den cellen
        // Steg 5: Kontrollera att inga felmeddelanden visas för andra celler
    });
});
describe("3.2 Feedback to user on input components - Default status", () => {
    it("should display a thick red underline for untouched cell (Default)", () => {
        //todo feature not implemented
        // Steg 1: Hitta cellen/inmatningsfältet som är orörd
        // Steg 2: Kontrollera att cellen inte har fått fokus eller inmatning
        // Steg 3: Verifiera att ett tjockt rött streck visas i nederkant
    });
});
describe("3.3 Feedback to user on input components - Hover status", () => {
    it("should display hover feedback with red underline, background change, and delayed error message", () => {
        //todo feature not implemented
        // Steg 1: Hitta cellen/inmatningsfältet
        // Steg 2: Simulera hover över cellen
        // Steg 3: Kontrollera att ett tjockt rött streck visas i nederkant
        // Steg 4: Kontrollera att cellens bakgrund ändras
        // Steg 5: Kontrollera att felmeddelande visas med 200ms fördröjning
    });

    it("should display error list with bullets if consumer chooses that option", () => {
        //todo feature not implemented
        // // Steg 1: Hitta fellistan
        // Steg 2: Kontrollera om punkter används
        // konsumenten väljer punkter eller ej
    });

    it("should handle scrolling when navigating to input component from error list", () => {
        //todo feature not implemented
        // Steg 1: Klicka på ett fel i fellistan
        // Steg 2: Kontrollera att komponenten visas med 25% av skärmens höjd ovanför
    });
});
describe("3.4 Feedback to user on input components - Focus status", () => {
    it("should display thick border, background change, and delayed error message on focus", () => {
        //todo feature not implemented
        // Steg 1: Hitta cellen/inmatningsfältet
        // Steg 2: Sätt fokus på cellen
        // Steg 3: Kontrollera att ett tjockt streck visas runt hela cellen
        // Steg 4: Kontrollera att cellens bakgrund ändras
        // Steg 5: Kontrollera att felmeddelande visas med 200ms fördröjning
    });

    it("should display error list with or without bullets depending on consumer choice", () => {
        //todo feature not implemented
        // Steg 1: Hitta fellistan
        // Steg 2: Kontrollera om punkter används eller ej
    });

    it("should handle scrolling when navigating to input component from error list", () => {
        //todo feature not implemented
        // Steg 1: Klicka på ett fel i fellistan
        // Steg 2: Kontrollera att komponenten visas med 25% av skärmens höjd ovanför
    });
});
describe("3.5 Feedback to user on input components - Active status", () => {
    it("should show thick border and error message when input field is activated", () => {
        //todo feature not implemented
        // Steg 1: Aktivera inmatningsfältet via musklick
        // Steg 2: Kontrollera att tjock ram visas runt cellen
        // Steg 3: Kontrollera att felmeddelande visas på rätt plats
        // Steg 4: När användaren skriver in tecken ska felmeddelande försvinna och ram återgå till svart
    });

    it("should show thick border and error message when radio button is activated", () => {
        //todo feature not implemented
        // Steg 1: Aktivera radioknapp
        // Steg 2: Kontrollera att tjock ram och felmeddelande visas
        // Steg 3: När användaren ändrar val ska felmeddelande försvinna
    });
    it("should show thick border and error message when radio checkbox is activated", () => {
        //todo feature not implemented
        // Steg 1: Aktivera kryssruta
        // Steg 2: Kontrollera att tjock ram och felmeddelande visas
        // Steg 3: När användaren ändrar val ska felmeddelande försvinna
    });
    it("should show thick border and error message when dropdown is activated", () => {
        //todo feature not implemented
        // Steg 1: Aktivera dropplista
        // Steg 2: Kontrollera att tjock ram och felmeddelande visas
        // Steg 3: När användaren väljer alternativ ska felmeddelande försvinna
    });

    it("should show thick border and error message when combobox is activated", () => {
        //todo feature not implemented
        // Steg 1: Aktivera kombobox via enter
        // Steg 2: Kontrollera att tjock ram och felmeddelande visas
        // Steg 3: När användaren skriver eller navigerar med piltangenter ska felmeddelande försvinna
    });
});

describe("3.6 Feedback to user on table validation errors at submit", () => {
    it("should highlight invalid cells and set focus on the first invalid cell after submit", () => {
        //todo feature not implemented
        // Steg 1: Hitta tabellens celler
        // Steg 2: Ange ogiltiga värden i flera celler
        // Steg 3: Klicka på submit-knappen
        // Steg 4: Kontrollera att felmeddelanden visas för alla ogiltiga celler
        // Steg 5: Kontrollera att första ogiltiga cellen får fokus
    });
});

describe("3.7 Table row validation (cross-validation)", () => {
    //todo not included in MVP
    it("should show error message when row validation fails", () => {
        //todo feature not implemented
        // Steg 1: Hitta en rad i tabellen
        // Steg 2: Ange värden som bryter mot korsvalidering (ex: startdatum > slutdatum)
        // Steg 3: Klicka på submit-knappen
        // Steg 4: Kontrollera att felmeddelande visas för hela raden
        // Steg 5: Kontrollera att raden markeras med röd ram
    });

    it("should not show error message when row validation passes", () => {
        //todo feature not implemented
        // Steg 1: Hitta en rad i tabellen
        // Steg 2: Ange värden som uppfyller korsvalidering (exempel: startdatum < slutdatum)
        // Steg 3: Klicka på submit-knappen
        // Steg 4: Kontrollera att inget felmeddelande visas
        // Steg 5: Kontrollera att raden inte är markerad med röd ram
    });
});
describe("3.8 Error list overview and navigation in table", () => {
    //todo not included in MVP

    it("should display a consolidated error list with all table errors after submit", () => {
        //todo feature not implemented
        // Steg 1: Ange ogiltiga värden i flera celler
        // Steg 2: Klicka på submit-knappen
        // Steg 3: Kontrollera att fellistan visas
        // Steg 4: Kontrollera att alla fel från tabellen finns med i fellistan
    });

    it("should navigate to the corresponding cell when clicking an error in the list", () => {
        //todo feature not implemented
        // Steg 1: Klicka på första fel i fellistan
        // Steg 2: Kontrollera att fokus sätts på motsvarande cell
        // Steg 3: Kontrollera att cellen är markerad med röd ram
    });
    it("should navigate through all errors in the list", () => {
        //todo feature not implemented
        // Steg 1: Iterera över alla fel i fellistan
        // Steg 2: Kontrollera att motsvarande cell får fokus
    });
});

describe("4.2 Arrow key navigation", () => {
    const rows = [
        {
            rowheader: "A1",
            text: "A2",
            input: "A3",
            button: "A4",
            anchor: "A5",
            dropdown: "Foo",
            checkbox: false,
            radio: false,

            nested: [
                {
                    rowheader: "A-A1",
                    text: "A-A2",
                    input: "A-A3",
                    button: "A-A4",
                    anchor: "A-A5",
                    dropdown: "Foo",
                    checkbox: false,
                    radio: false,
                },
                {
                    rowheader: "A-B1",
                    text: "A-B2",
                    input: "A-B3",
                    button: "A-B4",
                    anchor: "A-B5",
                    dropdown: "Foo",
                    checkbox: false,
                    radio: false,
                },
            ],
        },
        {
            rowheader: "B1",
            text: "B2",
            input: "B3",
            button: "B4",
            anchor: "B5",
            dropdown: "Foo",
            checkbox: false,
            radio: false,
        },
        {
            rowheader: "C1",
            text: "C2",
            input: "C3",
            button: "C4",
            anchor: "C5",
            dropdown: "Foo",
            checkbox: false,
            radio: false,

            nested: [
                {
                    rowheader: "C-A1",
                    text: "C-A2",
                    input: "C-A3",
                    button: "C-A4",
                    anchor: "C-A5",
                    dropdown: "Foo",
                    checkbox: false,
                    radio: false,
                },
                {
                    rowheader: "C-B1",
                    text: "C-B2",
                    input: "C-B3",
                    button: "C-B4",
                    anchor: "C-B5",
                    dropdown: "Foo",
                    checkbox: false,
                    radio: false,
                },
            ],
        },
    ];
    const columns = defineTableColumns<(typeof rows)[number]>([
        {
            type: "rowheader",
            header: "Rowheader",
            key: "rowheader",
        },
        {
            type: "text",
            header: "Text",
            key: "text",
        },
        {
            type: "text",
            header: "Input",
            key: "input",
            editable: true,
            label: () => "Input label",
            value: (row) => row.input,
        },
        {
            type: "button",
            header: "Button",
            key: "button",
            icon: "trashcan",
            value: (row) => row.button,
        },
        {
            header: "Anchor",
            type: "anchor",
            key: "anchor",
            href: "#",
            value: (row) => row.anchor,
        },
    ]);

    it("should allow arrow navigation between cells after tabbing into table", () => {
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows, columns },
        });

        table.tabbableElement().focus();
        table.cell({ row: 1, col: 1 }).should("have.focus");

        //not circular
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        table.cell({ row: 1, col: 1 }).should("have.focus");

        cy.focused().press(Cypress.Keyboard.Keys.UP);
        table.header(1).should("have.focus");

        cy.focused().press(Cypress.Keyboard.Keys.DOWN);

        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        table.cell({ row: 1, col: 2 }).should("have.focus");

        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        table.cell({ row: 1, col: 3 }).should("have.focus");

        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        table.cell({ row: 1, col: 4 }).find("button").should("have.focus");

        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        table.cell({ row: 1, col: 5 }).find("a").should("have.focus");

        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        table.cell({ row: 1, col: 5 }).find("a").should("have.focus");

        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        table.cell({ row: 1, col: 5 }).find("a").should("have.focus");

        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        table.cell({ row: 1, col: 4 }).find("button").should("have.focus");

        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        table.cell({ row: 1, col: 3 }).should("have.focus");

        cy.focused().press(Cypress.Keyboard.Keys.DOWN);
        table.cell({ row: 2, col: 3 }).should("have.focus");

        cy.focused().press(Cypress.Keyboard.Keys.DOWN);
        table.cell({ row: 3, col: 3 }).should("have.focus");

        cy.focused().press(Cypress.Keyboard.Keys.DOWN);
        table.cell({ row: 3, col: 3 }).should("have.focus");
    });
});
describe("4.6 Arrow key navigation", () => {
    //todo home och end, ctrl home och end testa ctrl end på sista raden på expanderad också
});
describe("5.1 Tab focus when several tables", () => {
    it("should set focus on the first row first cell in each table", () => {
        // Tabba in i första tabellen
        // Kontrollera att fokus hamnar på första cell (ej rubrik)
        // Tabba vidare till nästa tabell
        // Kontrollera att fokus finns på andra tabellens första cell (ej rubrik)
        // Byt fokus inom tabellen med höger pil
        // Kontrollera att den nya cellen har fokus
        // Shift tab
        // Kontrollera att fokus hoppar till första cellen i första tabellen
        //Tab
        // Kontrollera att fokus hoppar till andra tabellen och andra cellen, samma som vi pilade till.
    });
});

describe("7.2 Bulk Operation Checkbox States", () => {
    it("shows empty checkbox when no rows are selected", () => {
        // Ensure no rows are selected
        // Bulk checkbox should be empty
        //no background
    });

    it("shows indeterminate state and background when some rows are selected", () => {
        // Select one row
        // Bulk checkbox should be indeterminate
        // Background color should be set
    });

    it("shows checked state and background when all rows are selected", () => {
        // Select all rows
        // Bulk checkbox should be checked
        // Background color should be applied
    });
});

describe("7.3 Row Selection Behavior with Filtering and Sorting", () => {
    //filtring
    it("should resets row selections when filtering is applied", () => {
        // Select some rows
        // Apply a filter (example: filter by a column value)
        // After filtering, all row checkboxes should be unchecked
        // Bulk checkbox should be reset (not checked, not indeterminate)
    });

    //Sorting"
    it("should retains row selections when sorting is applied", () => {
        // Select some rows
        // Bulk checkbox should be indeterminate before sorting
        // Apply sorting (example: click on column header)
        // After sorting, previously selected rows should remain selected
        // Bulk checkbox should still reflect the correct status (indeterminate or checked)
    });
});
describe("7.4 Bulk selection in expandable", () => {
    //todo

    it("should allow selecting multiple top-level rows for bulk operation", () => {
        //todo
        // Select both top-level rows
        // Verify that both are checked
        // Verify that child rows cannot be selected
        // Simulate bulk action (e.g. delete?) and verify testa att deleta
    });
});

describe("7.7 Dataset change resets selection ", () => {
    it.skip("should clear all selected rows and bulk checkbox when a row is added", () => {
        //todo lägg till
    });
    it.skip("should clear all selected rows and bulk checkbox when a row is removed", () => {
        //todo lägg till förändrar i raderna tex ändra status tex textfält markeringen ligger kvar.
    });
});

describe("9.1 Table sorting and filtering with dataset sorter", () => {
    it("should allow sorting of table columns and update aria-sort attribute", () => {
        //todo feature not implemented
        // Steg 1: Hitta kolumnhuvudet
        // Steg 2: Klicka för att sortera stigande
        // Steg 3: Kontrollera att aria-sort är "ascending"
        // Steg 4: Klicka igen för att sortera fallande
        // Steg 5: Kontrollera att aria-sort är "descending"
        // Steg 6: Klicka en tredje gång för att ta bort sortering
        // Steg 7: Kontrollera att aria-sort är "none"
    });

    it("should allow filtering of table content using dataset sorter", () => {
        //todo feature not implemented
        // Steg 1: Ange filtervärde i datamängdsorteraren
        // Steg 2: Kontrollera att tabellen endast visar rader som matchar filter
    });
});

it("should combine sorting and filtering correctly", () => {
    //todo feature not implemented
    // Steg 1: Ange filtervärde
    // Steg 2: Sortera kolumnen
    // Steg 3: Kontrollera att filtrerade rader är sorterade
    // Steg 4: Kontrollera aria-sort attributet
});

describe("9.2 Table sorting with dataset sorter", () => {
    it("should allow user to sort column and apply sorting to entire table", () => {
        //todo
        // Steg 1: Hitta kolumnhuvudet som ska sorteras
        // Steg 2: Klicka för att sortera stigande
        // Steg 3: Kontrollera att hela tabellen, inte bara kolumnen är sorterad stigande
        // Steg 4: Klicka igen för att sortera fallande
        // Steg 5: Kontrollera att hela tabellen är sorterad fallande
    });

    it("should not limit sorting to only visible rows", () => {
        //todo
        // Steg 1: Applicera en filtrering som döljer vissa rader
        // Steg 2: Sortera kolumnen
        // Steg 3: Kontrollera att även dolda rader är sorterade i datamängden
    });
});

describe("9.3 Table filtering with dataset sorter", () => {
    it("should allow user to filter table content across the entire dataset", () => {
        //todo
        // Steg 1: Ange filtervärde i datamängdsorteraren
        // Steg 2: Kontrollera att tabellen endast visar rader som matchar filter
        // Steg 3: Kontrollera att filtreringen gäller hela datamängden, inte bara synliga rader
        // Alla värden i dataset ska matcha filter
    });

    it("should remove filter and show all rows when filter is cleared", () => {
        //todo
        // Steg 1: Ange filtervärde
        // Steg 2: Rensa filter
        // Steg 3: Kontrollera att alla rader visas igen
    });
});

describe("9.4 Expandable table - sorting and filtering on level 1 rows", () => {
    it("should sort only level 1 rows when column header is clicked", () => {
        //todo
        // Steg 1: Hitta kolumnhuvudet
        // Steg 2: Klicka för att sortera stigande
        // Steg 3: Kontrollera att endast nivå 1-rader är sorterade
        // Steg 4: Kontrollera att nivå 2-rader inte påverkas av sorteringen
    });

    it("should filter only level 1 rows when filter is applied", () => {
        //todo
        // Steg 1: Sätt filtervärde
        // Steg 2: Kontrollera att nivå 1-rader filtreras
        // Steg 3: Kontrollera att nivå 2-rader fortfarande visas under sina nivå 1-rader
    });

    it("should allow expanding and collapsing rows without affecting sorting/filtering rules", () => {
        //todo
        // Steg 1: Expandera en nivå 1-rad
        // Steg 2: Kontrollera att nivå 2-rader visas
        // Steg 3: Kollapsa samma rad
        // Steg 4: Kontrollera att nivå 2-rader döljs
    });
});

describe("10.1 Add and remove rows in table", () => {
    it("should allow user to add a new row and set focus on first cell", () => {
        //todo
        // Steg 1: Klicka på knappen för att lägga till rad
        // Steg 2: Kontrollera att en ny rad har lagts till
        // Steg 3: Kontrollera att fokus hamnar i första cellen i nya raden
    });

    it("should allow user to remove a row", () => {
        //todo
        // Steg 1: Klicka på ta bort-knappen för en rad
        // Steg 2: Kontrollera att raden har tagits bort
    });

    it("should re-sort and re-filter table when data changes", () => {
        //todo
        // Steg 1: Lägg till en ny rad
        // Steg 2: Ange data i nya raden
        // Steg 3: Kontrollera att tabellen sorteras om (exempel: stigande ordning)
        // Steg 4: Kontrollera att filtrering fortfarande fungerar efter dataändring
    });
});

describe("10.2 Table pagination requirements", () => {
    //todo not MVP

    it("should render and allow usage of pagination component in table", () => {
        // todo 8.1: Det ska gå att använda pagineringskomponent i tabell
    });

    it("should display correct subset of rows when user selects a page", () => {
        //todo 8.2: Visa tabellen i delvyer baserat på vald sida
    });

    it("should set focus order when tabbing from table to pagination", () => {
        //todo 8.3: Tab-ordning från tabell till paginering
    });

    it("should move focus back to first table cell when shift+tab from first pagination item", () => {
        //todo 8.4: Shift+Tab från första interagerbara objekt
    });

    it("should move focus to next interactive element after pagination when tabbing from last item", () => {
        // todo 8.5: Tab från sista interagerbara objekt
    });

    it("should not change pagination when expanding/collapsing rows", () => {
        //todo 8.6: Expanderbara rader ska inte påverka paginering
    });

    it("should reset pagination to page 1 when sorting or filtering", () => {
        // todo 8.7: Sortering/filtrering ska återställa till sida 1
    });

    it("should allow user to change page using keyboard keys", () => {
        // todo 8.8: Tangentbord (page up, page home)
    });
});

describe("10.3 Add and remove rows in table - Expandable rows", () => {
    it("should update table when adding level 1 row", () => {
        //todo
        // Steg 1: Klicka på knappen för att lägga till nivå 1-rad
        // Steg 2: Kontrollera att tabellen uppdaterats (antal nivå 1-rader ökar)
    });

    it("should not count adding lower-level rows ", () => {
        //todo
        // Steg 1: Hitta en nivå 1-rad och expandera den
        // Steg 2: Lägg till en nivå 2-rad under den expanderade raden
        // Steg 3: Kontrollera att tabellen inte räknas som ny (antal nivå 1-rader oförändrat)
        // Steg 4: Kontrollera att nivå 2-raden faktiskt lagts till under rätt nivå 1-rad
    });
});

describe("1.8 when table is empty", () => {
    const rows: never[] = [];
    const columns = defineTableColumns<(typeof rows)[number]>([
        {
            type: "text",
            header: "A",
        },
        {
            type: "text",
            header: "B",
        },
        {
            type: "text",
            header: "C",
        },
    ]);

    it("should have a single empty row with default text", () => {
        cy.mount(FTable<(typeof rows)[number]>, { props: { rows, columns } });
        table.rows().should("have.length", 1);
        table
            .cell({ row: 1, col: 1 })
            .should("contain.text", "Tabellen är tom");
    });

    it("should be able to change text of empty row", () => {
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows, columns },
            slots: { empty: "Foo" },
        });

        table.cell({ row: 1, col: 1 }).should("contain.text", "Foo");
    });

    it("should span all columns", () => {
        cy.mount(FTable<(typeof rows)[number]>, { props: { rows, columns } });
        table.cell({ row: 1, col: 1 }).should("have.attr", "colspan", "3");
    });

    it("should span all columns when expandable", () => {
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows, columns, expandableAttribute: "nested" },
        });
        table.cell({ row: 1, col: 1 }).should("have.attr", "colspan", "4");
    });

    it("should span all columns when selectable", () => {
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows: [], columns, selectable: "multi" },
        });
        table.cell({ row: 1, col: 1 }).should("have.attr", "colspan", "4");
    });

    it("should span all columns when selectable and expandable", () => {
        cy.mount(FTable<(typeof rows)[number]>, {
            props: {
                rows,
                columns,
                expandableAttribute: "nested",
                selectable: "multi",
            },
        });
        table.cell({ row: 1, col: 1 }).should("have.attr", "colspan", "5");
    });

    it("should span one column when table has no columns", () => {
        cy.mount(FTable<(typeof rows)[number]>, {
            props: {
                rows,
                columns: [],
            },
        });
        table.cell({ row: 1, col: 1 }).should("have.attr", "colspan", "1");
    });
});

describe("5 tabstop", () => {
    interface TabstopRow {
        foo: string;
        bar: string;
    }

    function mountTabstopTestbed(): {
        buttonBeforeTable: string;
        buttonAfterTable: string;
        buttonAddRow: string;
        buttonRemoveRow: string;
    } {
        const rows = ref([
            { foo: "1", bar: "alpha" },
            { foo: "2", bar: "beta" },
            { foo: "3", bar: "gamma" },
        ]);

        const columns = defineTableColumns<TabstopRow>([
            {
                type: "text",
                header: "foo",
                key: "foo",
            },
            {
                type: "button",
                header: "remove",
                icon: "trashcan",
                value(row) {
                    return row.bar;
                },
                onClick(row) {
                    rows.value.splice(rows.value.indexOf(row), 1);
                },
            },
        ]);

        const buttonBeforeTable = "button-before-table";
        const buttonAfterTable = "button-after-table";
        const buttonAddRow = "button-add-row";
        const buttonRemoveRow = "button-remove-row";
        const counter = ref(4);

        cy.mount(() =>
            h("div", [
                renderButton("Before table", buttonBeforeTable),
                h(FTable<TabstopRow>, {
                    rows: rows.value,
                    columns,
                }),
                renderButton("After table", buttonAfterTable),
                renderButton("Add row", buttonAddRow, () =>
                    rows.value.push({
                        foo: String(counter.value++),
                        bar: "Added row",
                    }),
                ),
                renderButton("Remove row", buttonRemoveRow, () =>
                    rows.value.shift(),
                ),
            ]),
        );

        return {
            buttonBeforeTable: getTestSelector(buttonBeforeTable),
            buttonAfterTable: getTestSelector(buttonAfterTable),
            buttonAddRow: getTestSelector(buttonAddRow),
            buttonRemoveRow: getTestSelector(buttonRemoveRow),
        };
    }

    function mountRowRemovalTestbed(): void {
        let api: FTableApi | undefined = undefined;

        const rows = ref([
            { foo: "1", bar: "alpha" },
            { foo: "2", bar: "beta" },
            { foo: "3", bar: "gamma" },
        ]);

        const columns = defineTableColumns<TabstopRow>([
            {
                type: "text",
                header: "foo",
                key: "foo",
            },
            {
                type: "button",
                header: "remove",
                icon: "trashcan",
                value(row) {
                    return row.bar;
                },
                onClick(row) {
                    assertSet(api);
                    api.withTabstopBehaviour("row-removal", () => {
                        rows.value.splice(rows.value.indexOf(row), 1);
                    });
                },
            },
        ]);

        cy.mount(() =>
            h(FTable<TabstopRow>, {
                rows: rows.value,
                columns,
                ref: (exposed: unknown) => (api = exposed as FTableApi),
            }),
        );
    }

    interface NavigationRow {
        staticText: string;
        editText: string;
        select: string;
        checkbox: boolean;
        radio: boolean;
        button: string;
        anchor: string;
        custom: string;
        children?: NavigationRow[];
    }

    function mountNavigationTestbed(slots?: object): {
        buttonBeforeTable: string;
    } {
        const rows = ref([
            {
                staticText: "awesome static text",
                editText: "awesome edit text",
                select: "awesome option",
                checkbox: true,
                radio: true,
                button: "awesome button",
                anchor: "awesome anchor",
                custom: "awesome custom",
                children: [
                    {
                        staticText: "child static text",
                        editText: "child edit text",
                        select: "another option",
                        checkbox: false,
                        radio: false,
                        button: "child button",
                        anchor: "child anchor",
                        custom: "child custom",
                    },
                ],
            },
        ]);

        const columns = defineTableColumns<NavigationRow>([
            {
                type: "text",
                header: "static text header",
                key: "staticText",
            },
            {
                type: "text",
                editable: true,
                header: "edit text header",
                key: "editText",
                label: () => "edit text label",
            },
            {
                type: "select",
                header: "select header",
                options: ["awesome option", "catastrophic option"],
                key: "select",
                label: () => "select label",
            },
            {
                type: "checkbox",
                header: "checkbox header",
                key: "checkbox",
                editable: true,
                label: () => "checkbox label",
            },
            {
                type: "radio",
                header: "radio header",
                key: "radio",
                label: () => "radio label",
            },
            {
                type: "button",
                header: "button header",
                value(row) {
                    return row.button;
                },
                icon: "bell",
            },
            {
                type: "anchor",
                header: "anchor header",
                value(row) {
                    return row.anchor;
                },
                href: "awesome href",
            },
        ]);

        const buttonBeforeTable = "button-before-table";

        cy.mount(() =>
            h("div", [
                renderButton("Before table", buttonBeforeTable),
                h(
                    FTable<NavigationRow>,
                    {
                        rows: rows.value,
                        columns,
                        expandableAttribute: "children",
                        selectable: "multi",
                    },
                    slots,
                ),
            ]),
        );

        return {
            buttonBeforeTable: getTestSelector(buttonBeforeTable),
        };
    }

    it("5.1 should default to first datacell", () => {
        const { buttonBeforeTable } = mountTabstopTestbed();
        cy.get(buttonBeforeTable).focus();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);

        table.cell({ row: 1, col: 1 }).should("have.focus");
    });

    it("5.1 should leave table on tab", () => {
        const { buttonBeforeTable, buttonAfterTable } = mountTabstopTestbed();
        cy.get(buttonBeforeTable).focus();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.get(buttonAfterTable).should("have.focus");
    });

    it("5.2 should only have one tabstop", () => {
        const { buttonBeforeTable } = mountTabstopTestbed();
        table.cell({ row: 2, col: 1 }).as("td").click();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.focused().should("contain.text", "After table");
        cy.get(buttonBeforeTable).focus();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.get("@td").should("have.focus");
    });

    it("5.3 should have tabstop on focused element", () => {
        const { buttonBeforeTable } = mountTabstopTestbed();
        cy.get(buttonBeforeTable).focus();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.focused().should("contain.text", "1");
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().should("contain.text", "alpha");
    });

    it("5.4 should fallback according to first-cell mode when current tabstop is removed", () => {
        const { buttonBeforeTable } = mountTabstopTestbed();
        cy.get(buttonBeforeTable).focus();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.focused().should("contain.text", "1");
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().click();
        cy.focused().should("contain.text", "2");
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().click();
        cy.focused().should("contain.text", "3");
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().click();
        cy.focused().should("contain.text", "Tabellen är tom");
    });

    it("5.5 should fallback according to sticky mode when current tabstop is removed", () => {
        mountRowRemovalTestbed();
        table.cell({ row: 2, col: 2 }).click();
        cy.focused().should("contain.text", "alpha");
        cy.focused().click();
        cy.focused().should("contain.text", "gamma");
        cy.focused().click();
        cy.focused().should("contain.text", "Tabellen är tom");
    });

    it("should not set focus when removing rows from outside table", () => {
        const { buttonRemoveRow } = mountTabstopTestbed();
        cy.get(buttonRemoveRow).focus();
        cy.focused().click();
        cy.get(buttonRemoveRow).should("be.focused");
        cy.focused().click();
        cy.get(buttonRemoveRow).should("be.focused");
        cy.focused().click();
        cy.get(buttonRemoveRow).should("be.focused");
    });

    it("should set tabstop to first cell when a first row is added", () => {
        const { buttonBeforeTable, buttonAddRow } = mountTabstopTestbed();
        cy.get(buttonBeforeTable).focus();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().click();
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().click();
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().click();
        cy.get(buttonAddRow).click();
        table.cell({ row: 1, col: 1 }).should("have.attr", "tabindex", "0");
    });

    it("should set correct tabstop for all types of headers and cells on navigation", () => {
        const { buttonBeforeTable } = mountNavigationTestbed();
        cy.get(buttonBeforeTable).focus();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        // {1, 1}: expand button
        cy.focused().click();
        cy.focused()
            .should("have.prop", "tagName", "BUTTON")
            .should("have.attr", "aria-expanded", "true")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 2}: selectable checkbox
        cy.focused().click();
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "checkbox")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 3}: static text
        cy.focused()
            .should("have.prop", "tagName", "TD")
            .should("contain.text", "awesome static text")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 4}: edit text
        cy.focused()
            .should("have.prop", "tagName", "TD")
            .should("contain.text", "awesome edit text")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 5}: select
        cy.focused()
            .should("have.prop", "tagName", "TD")
            .should("contain.text", "awesome option")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 6}: checkbox
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "checkbox")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 7}: radio
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "radio")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 8}: button
        cy.focused()
            .should("have.prop", "tagName", "BUTTON")
            .should("contain.text", "awesome button")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 9}: anchor
        cy.focused()
            .should("have.prop", "tagName", "A")
            .should("contain.text", "awesome anchor")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.UP);
        // {0, 9}: anchor header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "anchor header", true)
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 8}: button header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "button header", true)
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 7}: radio header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "radio header", true)
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 6}: checkbox header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "checkbox header", true)
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 5}: select header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "select header", true)
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 4}: edit text header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "edit text header", true)
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 3}: static text header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "static text header", true)
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 2}: selectable header
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "checkbox")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 1}: expand header (empty)
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("not.have.text")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.DOWN);
        // {1, 1}: expand
        cy.focused().press(Cypress.Keyboard.Keys.DOWN);
        // {2, 1}: expand for child (empty)
        cy.focused()
            .should("have.prop", "tagName", "TD")
            .should("not.have.text")
            .should("have.attr", "tabindex", 0);
    });

    it("should set correct tabstop for all types of headers and cells on click", () => {
        mountNavigationTestbed();

        // {1, 1}: expand button
        table.cell({ row: 1, col: 1 }).click();
        cy.focused()
            .should("have.prop", "tagName", "BUTTON")
            .should("have.attr", "aria-expanded", "true")
            .should("have.attr", "tabindex", 0);
        // {1, 2}: selectable checkbox
        table.cell({ row: 1, col: 2 }).click();
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "checkbox")
            .should("have.attr", "tabindex", 0);
        // {1, 3}: static text
        table.cell({ row: 1, col: 3 }).click();
        cy.focused()
            .should("have.prop", "tagName", "TD")
            .should("contain.text", "awesome static text")
            .should("have.attr", "tabindex", 0);
        // {1, 4}: edit text
        table.cell({ row: 1, col: 4 }).click();
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "tabindex", 0);
        // {1, 5}: select
        table.cell({ row: 1, col: 5 }).click();
        cy.focused()
            .should("have.prop", "tagName", "TD")
            .should("contain.text", "awesome option")
            .should("have.attr", "tabindex", 0);
        // {1, 6}: checkbox
        table.cell({ row: 1, col: 6 }).click();
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "checkbox")
            .should("have.attr", "tabindex", 0);
        // {1, 7}: radio
        table.cell({ row: 1, col: 7 }).click();
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "radio")
            .should("have.attr", "tabindex", 0);
        // {1, 8}: button
        table.cell({ row: 1, col: 8 }).click();
        cy.focused()
            .should("have.prop", "tagName", "BUTTON")
            .should("contain.text", "awesome button")
            .should("have.attr", "tabindex", 0);
        // {0, 9}: anchor header
        table.header(9).click();
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "anchor header", true)
            .should("have.attr", "tabindex", 0);
        // {0, 8}: button header
        table.header(8).click();
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "button header", true)
            .should("have.attr", "tabindex", 0);
        // {0, 7}: radio header
        table.header(7).click();
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "radio header", true)
            .should("have.attr", "tabindex", 0);
        // {0, 6}: checkbox header
        table.header(6).click();
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "checkbox header", true)
            .should("have.attr", "tabindex", 0);
        // {0, 5}: select header
        table.header(5).click();
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "select header", true)
            .should("have.attr", "tabindex", 0);
        // {0, 4}: edit text header
        table.header(4).click();
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "edit text header", true)
            .should("have.attr", "tabindex", 0);
        // {0, 3}: static text header
        table.header(3).click();
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "static text header", true)
            .should("have.attr", "tabindex", 0);
        // {0, 2}: selectable header
        table.header(2).click();
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "checkbox")
            .should("have.attr", "tabindex", 0);
        // {0, 1}: expand header (empty)
        table.header(1).click();
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("not.have.text")
            .should("have.attr", "tabindex", 0);
        // {2, 1}: expand for child (empty)
        table.cell({ row: 2, col: 1 }).click();
        cy.focused()
            .should("have.prop", "tagName", "TD")
            .should("not.have.text")
            .should("have.attr", "tabindex", 0);
    });

    it("should allow tab navigation in and out of expanded row", () => {
        const { buttonBeforeTable } = mountNavigationTestbed();

        table.expandButton(1).click();
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().press(Cypress.Keyboard.Keys.DOWN);
        table.cell({ row: 2, col: 3 }).should("have.focus");

        cy.focused().realPress(["Shift", "Tab"]);
        cy.get(buttonBeforeTable).should("have.focus");

        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        table.cell({ row: 2, col: 3 }).should("have.focus");
    });

    it("should allow tab navigation in and out of custom expanded row", () => {
        const slots = { expandable: "Foo" };
        const { buttonBeforeTable } = mountNavigationTestbed(slots);

        table.expandButton(1).click();
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().press(Cypress.Keyboard.Keys.DOWN);
        table.cell({ row: 2, col: 2 }).should("have.focus");

        cy.focused().realPress(["Shift", "Tab"]);
        cy.get(buttonBeforeTable).should("have.focus");

        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        table.cell({ row: 2, col: 2 }).should("have.focus");
    });
});
