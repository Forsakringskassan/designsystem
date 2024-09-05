import { parseOrganisationsnummer } from "./organisationsnummerConverter";

//These fake company numbers are as of this writing 2024-05-27 verified as non-existing,
//but are not provided as official fake numbers by Bolagsverket.
describe("parse", () => {
    it("should return parsed result for valid organisationsnummer without hyphen", () => {
        expect.assertions(1);
        expect(parseOrganisationsnummer("9999999999")).toBe("999999-9999");
    });

    it("should return parsed result for valid organisationsnummer with hyphen", () => {
        expect.assertions(1);
        expect(parseOrganisationsnummer("999999-9999")).toBe("999999-9999");
    });

    it("should return undefined for organisationsnummer with invalid checksum", () => {
        expect.assertions(1);
        expect(parseOrganisationsnummer("9999999991")).toBeUndefined();
    });

    it("should return undefined for organisationsnummer with non-digits", () => {
        expect.assertions(1);
        expect(parseOrganisationsnummer("999999-ABCD")).toBeUndefined();
    });

    it("should return undefined for organisationsnummer with wrong number of digits", () => {
        expect.assertions(2);
        expect(parseOrganisationsnummer("999999-999")).toBeUndefined();
        expect(parseOrganisationsnummer("99999-9999")).toBeUndefined();
    });

    it("should return undefined for organisationsnummer with hyphen in the wrong location", () => {
        expect.assertions(1);
        expect(parseOrganisationsnummer("9999-999999")).toBeUndefined();
    });

    it("should return undefined for empty string", () => {
        expect.assertions(1);
        expect(parseOrganisationsnummer("")).toBeUndefined();
    });
});
