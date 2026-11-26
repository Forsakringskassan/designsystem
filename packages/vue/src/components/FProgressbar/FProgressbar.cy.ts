import { FProgressbarPageObject } from "../../cypress";
import FProgressbar from "./FProgressbar.vue";

describe("FProgressbar", () => {
    const progressbar = new FProgressbarPageObject();

    it("should have aria-label", () => {
        const text = "Lorem ipsum dolor sit amet";
        cy.mount(FProgressbar, {
            props: {
                value: 0,
                "aria-label": text,
            },
        });
        progressbar.progressMeter().should("have.attr", "aria-label", text);
    });

    it("should have state pending when value is 0", () => {
        cy.mount(FProgressbar, {
            props: {
                value: 0,
                "aria-label": "Progressbar",
            },
        });
        progressbar.progressStatus().should("be.equal", "pending");
        progressbar.value().should("be.equal", 0);
    });

    it("should have state inprogress when value is between 1 to 99", () => {
        cy.mount(FProgressbar, {
            props: {
                value: 40,
                "aria-label": "Progressbar",
            },
        });
        progressbar.progressStatus().should("be.equal", "inprogress");
        progressbar.value().should("be.equal", 40);
    });

    it("should have state finished when value is 100", () => {
        cy.mount(FProgressbar, {
            props: {
                value: 100,
                "aria-label": "Progressbar",
            },
        });
        progressbar.progressStatus().should("be.equal", "finished");
        progressbar.value().should("be.equal", 100);
    });
});
