import { type DefineComponent, defineComponent } from "vue";
import { FTablePageObject } from "../../cypress/FTable.pageobject";
import { FTable, TableColumn, defineTableColumns } from ".";

const table = new FTablePageObject();

interface Row {
    rowheader: string;
    text: string;
    input: string;
    button: string;
    anchor: string;
    dropdown:string;
    checkbox:boolean;
    radio:boolean;
}

const defaultColumns = defineTableColumns<Row>([
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
        value(row) {
            return row.input;
        },
    },
    {
        type: "button",
        header: "Button",
        key: "button",
        icon: "trashcan",
        value(row) {
            return row.button;
        },
    },
    {
        header: "Anchor",
        type: "anchor",
        key: "anchor",
        href: "#",
        value(row) {
            return row.anchor;
        },
    },
]);

interface TableOptions {
    expandable?: "custom" | "rows";
    columns?: TableColumn<Row, keyof Row>[];
    selectable?: "multi" | "single";
    striped?: boolean;
    empty?: boolean;
}

function createComponent(options: TableOptions = {}): DefineComponent {
    const { selectable, expandable, striped, empty } = options;
    const stripedAttr = striped ? "striped" : "";
    const expandableAttr = expandable ? 'expandable-attribute="nested"' : "";
    const expandableSlot =
        expandable === "custom"
            ? "<template #expandable='{ row }'> {{ row.name }} </template>"
            : "";

    return defineComponent({
        template: /* HTML */ `
            <f-table
                :rows="${empty ? "[]" : "rows"}"
                :columns
                selectable="${selectable}"
                ${expandableAttr}
                ${stripedAttr}
            >
                ${expandableSlot}
            </f-table>
        `,
        components: {
            FTable,
        },
        data() {
            return {
                rows: [
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
                ],
                columns:options.columns ? options.columns : defaultColumns,
            };
        },
    });
}

beforeEach(() => {
    cy.viewport(1024, 768);
});

describe("1.1", () => {
    it.skip("should render caption when slot is provided", () => { //todo not implemented
       
    });

    it.skip("should render caption as sr-only when specified", () => { //todo not implemented
        
    });

    it.skip("should not render caption when slot is omitted", () => { //todo not implemented
        
    });
});

describe("1.3", () => { //Help OBS kravet är ändrat!!
        it.only("Should set correct headertext 1.3", () => {
            cy.mount(createComponent());
            table.header(1).should("contain.text", "Rowheader");
            table.header(2).should("contain.text", "Text");
            table.header(3).should("contain.text", "Input");
            table.header(4).should("contain.text", "Button");
            table.header(5).should("contain.text", "Anchor");
        });

        it.skip("should left-align text header without tnum by default", () => { //Screenshots?         
            
        });
    
        it.skip("should right-align numeric header with tnum by default", () => {   //Screenshots?      

            cy.mount(createComponent({}));
        }); 

        it.skip("should allow consumer to override alignment and tnum", () => {   //Screenshots?
            
            cy.mount(createComponent({}));
        });

        it("should render icon next to header text", () => {   //Screenshots?
            
        });

        it.skip("should render description under header", () => {   //kan testas implementerat uppdatera pageobject
            
        });

        it.skip("should render help format on header", () => { // not implemented
        
        });

        it.skip("should render screen reader text on header", () => {

        });
});

describe("1.4", () => {
    it.only("should set rowheader 1.4", () => {
        cy.mount(createComponent());
        table.cell({ row: 1, col: 1 }).should("have.prop", "tagName", "TH");
        table.cell({ row: 2, col: 1 }).should("have.prop", "tagName", "TH");
    });

    it("should set rowheader on expandable rows 1.4", () => {
        cy.mount(createComponent({ expandable: "rows" }));
        table.expandButton(1).click();
        table.cell({ row: 1, col: 2 }).should("have.prop", "tagName", "TH");
        table.cell({ row: 2, col: 2 }).should("have.prop", "tagName", "TH");
        table.cell({ row: 3, col: 2 }).should("have.prop", "tagName", "TH");
        table.cell({ row: 4, col: 2 }).should("have.prop", "tagName", "TH");
    });
});


describe("1.5", () => {
    it("should have correct class for striped 1.5", () => {
        cy.mount(createComponent({ striped: true }));
        table.el().should("have.class", "table-ng--striped");
    });

    it.skip("should have correct striped appearence 1.5", () => {
        cy.mount(createComponent({ striped: true }));
        cy.toMatchScreenshot();
    });    

    it.skip("should have correct seperator when not striped 1.5", () => {
        cy.mount(createComponent());
        cy.toMatchScreenshot();
    });

    it.skip("should have correct class for expandable 1.5", () => {
        cy.mount(createComponent({ expandable: "rows", striped: true }));
        table.expandButton(1).click();
        cy.toMatchScreenshot();
    });
   
    it.skip("should have correct class for separator 1.5", () => { //TODO not implemented
      //  cy.mount(createComponent({ striped: true }));
       // table.el().should("have.class", "table-ng--striped");
    });

    it.skip("should have correct separator appearence 1.5", () => {  //TODO not implemented
       // cy.mount(createComponent({ separator: true }));
        cy.toMatchScreenshot();
    });
    it.skip("should have correct separator class for expandable 1.5", () => {  //TODO not implemented
       // cy.mount(createComponent({ expandable: "rows", striped: true }));
       // table.expandButton(1).click();
       // cy.toMatchScreenshot();
    });
});

describe("1.6 columnwidth", () => {
    it("should fill the full available width", () => { //screenshot not implemented
        
    });

    it("should allow column to take maximum width", () => { //screenshot not implemented
        
    });    

    it("should allow column to take minimal width", () => { //screenshot not implemented
    
    });
});

describe("1.7 Format", () => {
    it("should format value using standardformat", () => {
    
    });

    it("should format value using custom formatter from consumer", () => {
        
    });

    it("should format value using format() function from consumer", () => { //funkar detta?
        
    });
});

describe("1.8", () => {
    it("should have empty row ", () => {
        cy.mount(createComponent({ empty: true }));
        table.cell({ row: 1, col: 1 }).should("have.attr", "colspan", "6");
        table.rows().should("have.length", 1);
        table.cell({ row: 1, col: 1 }).should("contain.text", "Tabellen är tom");    
    });
     it.skip("should be able to focus empty row ", () => { //todo not implemented
        cy.mount(createComponent({ empty: true }));
        table.tabbableElement().focus();        
        table.cell({ row: 1, col: 1 }).should("have.focus");    
    });
});

describe("1.9 screen reader text sr-only", () => { //testas manuellt också
    it("should render screen reader text on column header", () => {
    
    });

    it("should render screen reader text inside cell", () => { 
        
    });

    it("should not render sr-only text when not provided", () => {

    });
})

describe("1.10", () => {
    it("should have correct focus on button 1.10", () => {
        const testColumns = defineTableColumns<Row>([    
            {
                type: "button",
                header: "Button",
                key: "button",
                icon: "trashcan",
                value(row) {
                    return row.button;
                },
            },
        ]);

        cy.mount(createComponent({columns:testColumns}));
        table.tabbableElement().focus();
        table.cell({ row: 1, col: 1 }).find("button").should("have.focus");
        cy.focused().trigger("keydown", { code: "ArrowDown" });
        table.cell({ row: 2, col: 1 }).find("button").should("have.focus");
    });
    it("should have correct focus on anchor 1.10", () => {
        const testColumns = defineTableColumns<Row>([    
            {
                type: "anchor",
                header: "Anchor",
                key: "anchor",
                href:"#",
                value(row) {
                    return row.anchor;
                },
            },
        ]);

        cy.mount(createComponent({columns:testColumns}));
        table.tabbableElement().focus();
        table.cell({ row: 1, col: 1 }).find("a").should("have.focus");
        cy.focused().trigger("keydown", { code: "ArrowDown" });
        table.cell({ row: 2, col: 1 }).find("a").should("have.focus");
    });

    it.skip("should have correct focus on dropdown 1.10", () => {//fix dropdown Niklas kollar
        const testColumns = defineTableColumns<Row>([    
            {
                type: "select",
                header: "Dropdown",
                key: "dropdown",
                options:["Foo", "Bar", "Baz"],
                value(row) {
                    return row.dropdown;
                },
            },
        ]);

        cy.mount(createComponent({columns:testColumns}));
        table.tabbableElement().focus();
        table.cell({ row: 1, col: 1 }).find("select").should("have.focus");
        cy.focused().trigger("keydown", { code: "ArrowDown" });
        table.cell({ row: 2, col: 1 }).find("select").should("have.focus");
    });

    it.skip("should have correct focus on input 1.10", () => { 
        const testColumns = defineTableColumns<Row>([    
            {
                type: "text",
                header: "Input",
                key: "input",
                editable: true,
                value(row) {
                    return row.input;
                },
            },
        ]);

        cy.mount(createComponent({columns:testColumns}));
        table.tabbableElement().focus(); 
        table.cell({ row: 1, col: 1 }).should("have.focus");
        cy.focused().trigger("keydown", { code: "ArrowDown" }); //bugg i alphanumeric
        table.cell({ row: 2, col: 1 }).should("have.focus");        
    });
    
    it("should have correct focus on checkbox 1.10", () => {
        const testColumns = defineTableColumns<Row>([
            {
                type: "checkbox",
                header: "Check",
                key: "checkbox",
                editable: true,
                value(row) {
                    return row.checkbox;
                },
            },
        ]);

        cy.mount(createComponent({ columns: testColumns }));
        table.tabbableElement().focus();
        table.cell({ row: 1, col: 1 }).find('input[type="checkbox"]').should("have.focus");
        cy.focused().trigger("keydown", { code: "ArrowDown" });
        table.cell({ row: 2, col: 1 }).find('input[type="checkbox"]').should("have.focus");
        });
    });

    it("should have correct focus on radio 1.10", () => {
        const testColumns = defineTableColumns<Row>([
            {
                type: "radio",
                header: "Radio",
                key: "radio",
                value(row) {
                    return row.radio;
                },
            },
        ]);

        cy.mount(createComponent({ columns: testColumns }));
        table.tabbableElement().focus();
        table.cell({ row: 1, col: 1 }).find('input[type="radio"]').should("have.focus");
        cy.focused().trigger("keydown", { code: "ArrowDown" });
        table.cell({ row: 2, col: 1 }).find('input[type="radio"]').should("have.focus");
    });
    describe("1.12 ARIA-attribute", () => { 
        
        it.skip("should set aria-rowcount to total number of rows including hidden", () => {         //not implemented   
            cy.mount(createComponent({ expandable: "rows" }));
            
            table.el().should("have.attr", "aria-rowcount", "5");
        });

    it.skip("should set aria-rowindex correctly for each visible row", () => {
        cy.mount(createComponent({ expandable: "rows" }));

    // help
        table.rows().eq(0).should("have.attr", "aria-rowindex", "1");
   // table.rows().eq(0).should("have.attr", "aria-rowindex", "2");
   // table.rows().eq(0).should("have.attr", "aria-rowindex", "3");
    });

    it.skip("should preserve aria-rowindex even when rows are filtered", () => {    
    cy.mount(createComponent({}));
    
    });        
});
    describe("1.13", () => { 
        it("should programmatically activate a cell", () => { //not implemented
        
        });
    });
    describe("1.14", () => { //not implemented
        it("should programmatically set focus on a cell", () => { //not implemented
        
        });
    });
    describe("1.15 focus after removing row", () => {

        it("should focus cell above after row is removed", () => {
            cy.mount(createComponent({}));
    });

        it("should focus fallback cell when table is empty", () => {
            cy.mount(createComponent({}));     
    });
});
describe("1.16 Data loading", () => { //todo  implemented?
  it.skip("should show spinner after 1s and block interaction while loading", () => {
    cy.clock(); // kontrollera tid manuellt

   cy.mount(createComponent({})); 

    // Direkt efter mount: spinner ska inte synas   

    // Efter 999ms: spinner ska fortfarande inte synas
    cy.tick(999);  

    // Efter 1000ms: spinner ska synas
    cy.tick(1);
    
    // Tabell ska inte vara interagerbar (t.ex. inga tabbable element)
    table.tabbableElement().should("not.exist");    
  });
});

describe("2.4 active compenents", () => { //screenshot  

  it.skip("should not show pen icon for input field when active", () => { //image diff

    const testColumns = defineTableColumns<Row>([    
            {
                type: "text",
                header: "Input",
                key: "input",
                editable: true,
                value(row) {
                    return row.input;
                },
            },
        ]);
    
    cy.mount(createComponent({columns:testColumns})); //Agneta
    // Aktivera cellen
    table.cell({ row: 1, col: 1 }).click();

    // Kontrollera att penna-ikon inte visas
    cy.toMatchScreenshot();

  });
  
  it("should show arrow icon for dropdown when active", () => {
    
  });

  it("should show arrow icon for combobox when active", () => {
    
  });
});

it("should have correct checkbox labels 7.6", () => {
    cy.mount(createComponent({ selectable: "multi" }));
    table.selectInput(1).should("have.attr", "aria-label", "selectable");
});

