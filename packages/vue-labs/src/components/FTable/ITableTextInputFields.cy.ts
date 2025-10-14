import { defineComponent } from "vue";
import { FTablePageObject } from "../../cypress/FTable.pageobject";
import FTable from "./FTable.vue";
import { type TableColumn, defineTableColumns } from "./table-column";

interface Row {
    pnr?: string;
    bankgiro?: string;
    bankAccountNumber?: string;
    clearingNumber?: string;
    email?: string;
    orgnr?: string;
    tele?: string;
    postnr?: string;
    plusgiro?: string;
    currency?: number | string;
    percent?: number | string;
    number?: number | string;
    text?: string;
}

function mountTable(row: Row, columns: TableColumn<Row, keyof Row>): void {
    const cols = defineTableColumns<Row>([columns]);
    cy.mount(
        defineComponent({
            template: `<f-table :rows :columns></f-table>`,
            components: { FTable },
            data() {
                return {
                    rows: [row],
                    columns: cols,
                };
            },
        }),
    );
}

const table = new FTablePageObject();

describe("FTable, personnummer", () => {
    const column: TableColumn<Row, keyof Row> = {
        type: "text:personnummer",
        header: "Personnummer",
        key: "pnr",
        editable: true,
        label: () => `Label`,
    };

    it("should format row value to viewvalue", () => {
        const row = {
            pnr: "197006121144",
        };
        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        const span = cell.get("span");

        // formatted view value
        span.should("contain.text", "700612-1144").then(() => {
            // row value should be unchanged
            expect(row.pnr).to.equal("197006121144");
        });
    });

    it("should format typed value and update row value with parsed value", () => {
        const row = {
            pnr: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        cell.click();
        const input = cell.get("input");
        input.type("197006121144");
        input.blur();

        const span = cell.get("span");
        // formatted view value
        span.should("contain.text", "700612-1144").then(() => {
            // parsed row value
            expect(row.pnr).to.equal("19700612-1144");
        });
    });

    it("should validate with error and update row value", () => {
        const row = {
            pnr: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        cell.click();

        const input = cell.get("input");
        input.type("text").blur();

        const td = cell.get("td");
        td.should("have.class", "table-ng__cell--error").then(() => {
            // row value should be typed value
            expect(row.pnr).to.equal("text");
        });
    });

    it("sholud have correct attributes", () => {
        const row = {
            pnr: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });

        cell.click();
        cell.get("input").invoke("attr", "type").should("eq", "text");
        cell.get("input").invoke("attr", "maxlength").should("eq", "23");
        cell.get("input").invoke("attr", "inputmode").should("eq", "numeric");
    });
});

describe("FTable, bankgiro", () => {
    const column: TableColumn<Row, keyof Row> = {
        type: "text:bankgiro",
        header: "Bankgiro",
        key: "bankgiro",
        editable: true,
        label: () => `Label`,
    };

    it("should format row value to viewvalue", () => {
        const row = {
            bankgiro: "9999996",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        const span = cell.get("span");

        // formatted view value
        span.should("contain.text", "999-9996").then(() => {
            // row value should be unchanged
            expect(row.bankgiro).to.equal("9999996");
        });
    });

    it("should format typed value and update row value with parsed value", () => {
        const row = {
            bankgiro: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        cell.click();

        const input = cell.get("input");
        input.type("9999996");
        input.blur();

        const span = cell.get("span");
        // formatted view value
        span.should("contain.text", "999-9996").then(() => {
            // parsed row value
            expect(row.bankgiro).to.equal("999-9996");
        });
    });

    it("should validate with error and update modelvalue", () => {
        const row = {
            bankgiro: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        cell.click();

        const input = cell.get("input");
        input.type("text").blur();

        const td = cell.get("td");
        td.should("have.class", "table-ng__cell--error").then(() => {
            // row value should be typed value
            expect(row.bankgiro).to.equal("text");
        });
    });

    it("sholud have correct attributes", () => {
        const row = {
            bankgiro: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });

        cell.click();
        cell.get("input").invoke("attr", "type").should("eq", "text");
        cell.get("input").invoke("attr", "inputmode").should("eq", "numeric");
        cell.get("input").invoke("attr", "maxlength").should("eq", "40");
    });
});

describe("FTable, bankAccountNumber", () => {
    const column: TableColumn<Row, keyof Row> = {
        type: "text:bankAccountNumber",
        header: "Kontonummer",
        key: "bankAccountNumber",
        editable: true,
        label: () => `Label`,
    };

    it("should NOT format modelvalue to viewvalue", () => {
        const row = {
            bankAccountNumber: "00-12345.67 8",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });

        const span = cell.get("span");
        span.should("contain.text", "00-12345.67 8").then(() => {
            expect(row.bankAccountNumber).to.equal("00-12345.67 8");
        });
    });

    it("should format typed value and update row value with parsed value", () => {
        const row = {
            bankAccountNumber: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        cell.click();

        const input = cell.get("input");
        input.type("00-12345.67 8");
        input.blur();

        const span = cell.get("span");
        // formatted view value
        span.should("contain.text", "0012345678").then(() => {
            // parsed row value
            expect(row.bankAccountNumber).to.equal("0012345678");
        });
    });

    it("should validate with error and update modelvalue", () => {
        const row = {
            bankAccountNumber: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        cell.click();

        const input = cell.get("input");
        input.type("text").blur();

        const td = cell.get("td");
        td.should("have.class", "table-ng__cell--error").then(() => {
            // row value should be typed value
            expect(row.bankAccountNumber).to.equal("text");
        });
    });

    it("sholud have correct attributes", () => {
        const row = {
            bankAccountNumber: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });

        cell.click();
        cell.get("input").invoke("attr", "type").should("eq", "text");
        cell.get("input").invoke("attr", "inputmode").should("eq", "numeric");
        cell.get("input").invoke("attr", "maxlength").should("eq", "40");
    });
});

describe("FTable, clearingNumber", () => {
    const column: TableColumn<Row, keyof Row> = {
        type: "text:clearingNumber",
        header: "Clearingnummer",
        key: "clearingNumber",
        editable: true,
        label: () => `Label`,
    };

    it("should format row value to viewvalue", () => {
        const row = {
            clearingNumber: "56781",
        };
        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        const span = cell.get("span");
        // formatted view value
        span.should("contain.text", "5678-1").then(() => {
            // row value should be unchanged
            expect(row.clearingNumber).to.equal("56781");
        });
    });

    it("should format typed value and update row value with parsed value", () => {
        const row = {
            clearingNumber: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        cell.click();
        const input = cell.get("input");
        input.type("56781");
        input.blur();

        const span = cell.get("span");
        // formatted view value
        span.should("contain.text", "5678-1").then(() => {
            // parsed row value
            expect(row.clearingNumber).to.equal("5678-1");
        });
    });

    it("should validate with error and update modelvalue", () => {
        const row = {
            clearingNumber: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        cell.click();

        const input = cell.get("input");
        input.type("text").blur();

        const td = cell.get("td");
        td.should("have.class", "table-ng__cell--error").then(() => {
            // row value should be typed value
            expect(row.clearingNumber).to.equal("text");
        });
    });

    it("sholud have correct attributes", () => {
        const row = {
            clearingNumber: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });

        cell.click();
        cell.get("input").invoke("attr", "type").should("eq", "text");
        cell.get("input").invoke("attr", "maxlength").should("eq", "16");
        cell.get("input").invoke("attr", "inputmode").should("eq", "numeric");
    });
});

describe("FTable, email", () => {
    const column: TableColumn<Row, keyof Row> = {
        type: "text:email",
        header: "Email",
        key: "email",
        editable: true,
        label: () => `Label`,
    };

    it("should NOT format modelvalue to viewvalue", () => {
        const row = {
            email: "t est@example.com",
        };
        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        const span = cell.get("span");
        span.should("contain.text", "t est@example.com").then(() => {
            // row value should be unchanged
            expect(row.email).to.equal("t est@example.com");
        });
    });

    it("should NOT format typed value and NOT parse to model-value", () => {
        const row = {
            email: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        cell.click();
        const input = cell.get("input");
        input.type("Test@exaMple.COM");
        input.blur();

        const span = cell.get("span");
        span.should("contain.text", "Test@exaMple.COM").then(() => {
            expect(row.email).to.equal("Test@exaMple.COM");
        });
    });

    it("should validate with error and update modelvalue", () => {
        const row = {
            email: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        cell.click();

        const input = cell.get("input");
        input.type("invalid_email").blur();

        const td = cell.get("td");
        td.should("have.class", "table-ng__cell--error").then(() => {
            // row value should be typed value
            expect(row.email).to.equal("invalid_email");
        });
    });

    it("sholud have correct attributes", () => {
        const row = {
            email: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });

        cell.click();
        cell.get("input").invoke("attr", "maxlength").should("eq", "80");
        cell.get("input").invoke("attr", "type").should("eq", "email");
    });
});

describe("FTable, organisationsnummer", () => {
    const column: TableColumn<Row, keyof Row> = {
        type: "text:organisationsnummer",
        header: "Organisationsnummer",
        key: "orgnr",
        editable: true,
        label: () => `Label`,
    };

    it("should format row value to viewvalue", () => {
        const row = {
            orgnr: "9999999999",
        };
        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        const span = cell.get("span");

        // formatted view value
        span.should("contain.text", "999999-9999").then(() => {
            // row value should be unchanged
            expect(row.orgnr).to.equal("9999999999");
        });
    });

    it("should format typed value and update row value with parsed value", () => {
        const row = {
            orgnr: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        cell.click();
        const input = cell.get("input");
        input.type("9999999999");
        input.blur();

        const span = cell.get("span");
        // formatted view value
        span.should("contain.text", "999999-9999").then(() => {
            // parsed row value
            expect(row.orgnr).to.equal("999999-9999");
        });
    });

    it("should validate with error and update modelvalue", () => {
        const row = {
            orgnr: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        cell.click();

        const input = cell.get("input");
        input.type("some_text").blur();

        const td = cell.get("td");
        td.should("have.class", "table-ng__cell--error").then(() => {
            // row value should be typed value
            expect(row.orgnr).to.equal("some_text");
        });
    });

    it("sholud have correct attributes", () => {
        const row = {
            orgnr: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });

        cell.click();
        cell.get("input").invoke("attr", "type").should("eq", "text");
        cell.get("input").invoke("attr", "maxlength").should("eq", "20");
        cell.get("input").invoke("attr", "inputmode").should("eq", "numeric");
    });
});

describe("FTable, telefonnummer", () => {
    const column: TableColumn<Row, keyof Row> = {
        type: "text:phoneNumber",
        header: "Telefonnummer",
        key: "tele",
        editable: true,
        label: () => `Label`,
    };

    it("should NOT format row value to viewvalue", () => {
        const row = {
            tele: "1 2 3 4 5 6 7 8 9",
        };
        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        const span = cell.get("span");
        span.should("contain.text", "1 2 3 4 5 6 7 8 9").then(() => {
            // row value should be unchanged
            expect(row.tele).to.equal("1 2 3 4 5 6 7 8 9");
        });
    });

    it("should NOT format typed value and not parse to row value", () => {
        const row = {
            tele: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        cell.click();
        const input = cell.get("input");
        input.type("+1 2 3 4 5 6 7 8 9");
        input.blur();

        const span = cell.get("span");
        span.should("contain.text", "+1 2 3 4 5 6 7 8 9").then(() => {
            // row value should be typed value
            expect(row.tele).to.equal("+1 2 3 4 5 6 7 8 9");
        });
    });

    it("should validate with error and update row value withe typed value", () => {
        const row = {
            tele: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        cell.click();

        const input = cell.get("input");
        input.type("1234#56789").blur();

        const td = cell.get("td");
        td.should("have.class", "table-ng__cell--error").then(() => {
            // row value should be typed value
            expect(row.tele).to.equal("1234#56789");
        });
    });

    it("sholud have correct attributes", () => {
        const row = {
            tele: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });

        cell.click();
        cell.get("input").invoke("attr", "type").should("eq", "tel");
        cell.get("input").invoke("attr", "maxlength").should("eq", "80");
    });
});

describe("FTable, postnummer", () => {
    const column: TableColumn<Row, keyof Row> = {
        type: "text:postalCode",
        header: "Postnummer",
        key: "postnr",
        editable: true,
        label: () => `Label`,
    };

    it("should format row value to viewvalue", () => {
        const row = {
            postnr: "93222",
        };
        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        const span = cell.get("span");

        // formatted view value
        span.should("contain.text", "932 22").then(() => {
            // row value should be unchanged
            expect(row.postnr).to.equal("93222");
        });
    });

    it("should format typed value and update row value with parsed value", () => {
        const row = {
            postnr: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        cell.click();
        const input = cell.get("input");
        input.type("93222");
        input.blur();

        const span = cell.get("span");
        // formatted view value
        span.should("contain.text", "932 22").then(() => {
            // parsed row value
            expect(row.postnr).to.equal("932 22");
        });
    });

    it("should validate with error and update modelvalue", () => {
        const row = {
            postnr: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        cell.click();

        const input = cell.get("input");
        input.type("932#22").blur();

        const td = cell.get("td");
        td.should("have.class", "table-ng__cell--error").then(() => {
            // row value should be typed value
            expect(row.postnr).to.equal("932#22");
        });
    });

    it("sholud have correct attributes", () => {
        const row = {
            postnr: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });

        cell.click();
        cell.get("input").invoke("attr", "type").should("eq", "text");
        cell.get("input").invoke("attr", "inputmode").should("eq", "numeric");
        cell.get("input").invoke("attr", "maxlength").should("eq", "15");
    });
});

describe("FTable, plusgiro", () => {
    const column: TableColumn<Row, keyof Row> = {
        type: "text:plusgiro",
        header: "Plusgiro",
        key: "plusgiro",
        editable: true,
        label: () => `Label`,
    };

    it("should format row value to viewvalue", () => {
        const row = {
            plusgiro: "11111119",
        };
        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        const span = cell.get("span");

        // formatted view value
        span.should("contain.text", "111 11 11-9").then(() => {
            // row value should be unchanged
            expect(row.plusgiro).to.equal("11111119");
        });
    });

    it("should format typed value and update row value with parsed value", () => {
        const row = {
            plusgiro: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        cell.click();
        const input = cell.get("input");
        input.type("11111119");
        input.blur();

        const span = cell.get("span");
        // formatted view value
        span.should("contain.text", "111 11 11-9").then(() => {
            // parsed row value
            expect(row.plusgiro).to.equal("111 11 11-9");
        });
    });

    it("should validate with error and update modelvalue", () => {
        const row = {
            plusgiro: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        cell.click();

        const input = cell.get("input");
        input.type("1 AA 11-2").blur();

        const td = cell.get("td");
        td.should("have.class", "table-ng__cell--error").then(() => {
            // row value should be typed value
            expect(row.plusgiro).to.equal("1 AA 11-2");
        });
    });

    it("sholud have correct attributes", () => {
        const row = {
            plusgiro: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });

        cell.click();
        cell.get("input").invoke("attr", "type").should("eq", "text");
        cell.get("input").invoke("attr", "inputmode").should("eq", "numeric");
        cell.get("input").invoke("attr", "maxlength").should("eq", "16");
    });
});

describe("FTable, valuta", () => {
    const column: TableColumn<Row, keyof Row> = {
        type: "text:currency",
        header: "Valuta",
        key: "currency",
        editable: true,
        label: () => `Label`,
    };

    it("should format row value to viewvalue", () => {
        const row = {
            currency: 11111119,
        };
        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        const span = cell.get("span");

        // formatted view value
        span.should("contain.text", "11\u00A0111\u00A0119").then(() => {
            // row value should be unchanged
            expect(row.currency).to.equal(11111119);
        });
    });

    it("should format typed value and update row value with parsed value as nunmber", () => {
        const row = {
            currency: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        cell.click();
        const input = cell.get("input");
        input.type("11111119");
        input.blur();

        const span = cell.get("span");
        // formatted view value
        span.should("contain.text", "11\u00A0111\u00A0119").then(() => {
            // parsed row value as number
            expect(row.currency).to.equal(11111119);
        });
    });

    it("should validate with error and update row value as string", () => {
        const row = {
            currency: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        cell.click();

        const input = cell.get("input");
        input.type("två kronor").blur();

        const td = cell.get("td");
        td.should("have.class", "table-ng__cell--error").then(() => {
            // row value should be typed value as string
            expect(row.currency).to.equal("två kronor");
        });
    });

    it("sholud have correct attributes", () => {
        const row = {
            currency: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });

        cell.click();
        cell.get("input").invoke("attr", "type").should("eq", "text");
        cell.get("input").invoke("attr", "inputmode").should("eq", "numeric");
        cell.get("input").invoke("attr", "maxlength").should("eq", "20");
    });
});

describe("FTable, procent", () => {
    const column: TableColumn<Row, keyof Row> = {
        type: "text:percent",
        header: "Procent",
        key: "percent",
        editable: true,
        decimals: 3,
        label: () => `Label`,
    };

    it("should format row value to viewvalue", () => {
        const row = {
            percent: 100.12255,
        };
        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        const span = cell.get("span");

        // formatted view value
        span.should("contain.text", "100,123").then(() => {
            // row value should be unchanged
            expect(row.percent).to.equal(100.12255);
        });
    });

    it("should format typed value and update row value with parsed value as nunmber", () => {
        const row = {
            percent: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        cell.click();
        const input = cell.get("input");
        input.type("100,12255");
        input.blur();

        const span = cell.get("span");
        // formatted view value
        span.should("contain.text", "100,123").then(() => {
            // parsed row value as number
            expect(row.percent).to.equal(100.123);
        });
    });

    it("should validate with error and update row value as string", () => {
        const row = {
            percent: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        cell.click();

        const input = cell.get("input");
        input.type("tio %").blur();

        const td = cell.get("td");
        td.should("have.class", "table-ng__cell--error").then(() => {
            // row value should be typed value as string
            expect(row.percent).to.equal("tio %");
        });
    });

    it("sholud have correct attributes", () => {
        const row = {
            percent: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });

        cell.click();
        cell.get("input").invoke("attr", "type").should("eq", "text");
        cell.get("input").invoke("attr", "inputmode").should("eq", "numeric");
        cell.get("input").invoke("attr", "maxlength").should("eq", "10");
    });
});

describe("FTable, nummer", () => {
    const column: TableColumn<Row, keyof Row> = {
        type: "text:number",
        header: "Nummer",
        key: "number",
        editable: true,
        decimals: 1,
        label: () => `Label`,
    };

    it("should format row value to viewvalue", () => {
        const row = {
            number: 100.12255,
        };
        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        const span = cell.get("span");

        // formatted view value
        span.should("contain.text", "100,1").then(() => {
            // row value should be unchanged
            expect(row.number).to.equal(100.12255);
        });
    });

    it("should format typed value and update row value with parsed value as nunmber", () => {
        const row = {
            number: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        cell.click();
        const input = cell.get("input");
        input.type("100,12255");
        input.blur();

        const span = cell.get("span");
        // formatted view value
        span.should("contain.text", "100,1").then(() => {
            // parsed row value as number
            expect(row.number).to.equal(100.1);
        });
    });

    it("should validate with error and update row value as string", () => {
        const row = {
            number: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });
        cell.click();

        const input = cell.get("input");
        input.type("ett tusen").blur();

        const td = cell.get("td");
        td.should("have.class", "table-ng__cell--error").then(() => {
            // row value should be typed value as string
            expect(row.number).to.equal("ett tusen");
        });
    });

    it("sholud have correct attributes", () => {
        const row = {
            number: "",
        };

        mountTable(row, column);
        const cell = table.cell({ row: 1, col: 1 });

        cell.click();
        cell.get("input").invoke("attr", "type").should("eq", "text");
        cell.get("input").invoke("attr", "inputmode").should("eq", "numeric");
        cell.get("input").invoke("attr", "maxlength").should("eq", "20");
    });
});
