import { emailValidator } from "./EmailValidator";

const element = document.createElement("input");

//The email addresses we use is for testpurpose only
describe("validation", () => {
    it.each`
        value                                    | expected | description
        ${""}                                    | ${true}  | ${"empty value should be valid"}
        ${undefined}                             | ${true}  | ${"undefined value should be valid"}
        ${null}                                  | ${true}  | ${"null value should be valid"}
        ${"undefined"}                           | ${false} | ${'"undefined" value should be invalid'}
        ${"null"}                                | ${false} | ${'"null" value should be invalid'}
        ${"test.testorsson@example.net"}         | ${true}  | ${"email address with dot separate first last names value should be valid"}
        ${"test@example.net"}                    | ${true}  | ${"email address with first name value should be valid"}
        ${"test/testorsson@example.net"}         | ${true}  | ${"email address with forward slash value should be valid"}
        ${"test79@example.net"}                  | ${true}  | ${"email address with numbers in localpartr should be valid"}
        ${"test@example.com"}                    | ${true}  | ${"email address with .com value should be valid"}
        ${"test@example.se.net"}                 | ${true}  | ${"email with .se.net should be valid"}
        ${"test.testorsson@example.net,"}        | ${false} | ${"email address with trailing comma should be invalid"}
        ${"@example.net"}                        | ${false} | ${"email address without localpart should be invalid"}
        ${"test.testorsson@.example.net"}        | ${false} | ${"email address domain that starts with dot should be invalid"}
        ${"test.testorsson@example.net."}        | ${false} | ${"email address domain that ends with dot should be invalid"}
        ${"test.testorsson@example"}             | ${true}  | ${"email address without top-level domain should be valid"}
        ${"åtest.andersson@example"}             | ${true}  | ${"email address with å,ä,ö in localpart should be valid"}
        ${"ötest.ätest@example"}                 | ${true}  | ${"email address with å,ä,ö with . inbetween should be valid"}
        ${"test.testorsson@exämple"}             | ${false} | ${"email address with å,ä,ö in domain should be invalid"}
        ${"localpart@example"}                   | ${true}  | ${"email address without top-level domain should be valid"}
        ${"test.testorsson@"}                    | ${false} | ${"email address without domain should be invalid"}
        ${"test.testorsson@example@example.net"} | ${false} | ${"email with two domains should be invalid"}
        ${"test.testorsson"}                     | ${false} | ${"email address without at-sign should be invalid"}
        ${"test.testorsson example.net"}         | ${false} | ${"email address without at-sign should be invalid"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected }) => {
            const config = {};
            expect(emailValidator.validation(value, element, config)).toEqual(
                expected,
            );
        },
    );
});

describe("validation configuration", () => {
    it("should not be possible to supply more than 64 characters for localpart", () => {
        const config = {};
        const value =
            "01234567890123456789012345678901234567890123456789012345678901234@example.net";
        expect(emailValidator.validation(value, element, config)).toBe(false);
    });

    it("should be possible to supply 254 characters maxlength by default", () => {
        const config = {};
        const value = "test.testorsson@example.net".padEnd(254, ".example.net");
        expect(emailValidator.validation(value, element, config)).toBe(true);
    });

    it("should not be possible to supply more than 254 characters maxlength by default", () => {
        const config = {};
        const value = "test.testorsson@example.net".padEnd(255, ".example.net");
        expect(emailValidator.validation(value, element, config)).toBe(false);
    });

    it("should be possible to configure maxlength to more than 254 characters", () => {
        const config = { maxLength: 255 };
        const value = "test.testorsson@example.net".padEnd(255, ".example.net");
        expect(emailValidator.validation(value, element, config)).toBe(true);
    });
});
