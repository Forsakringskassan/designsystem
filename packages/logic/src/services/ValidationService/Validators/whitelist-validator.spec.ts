import { whitelistValidator } from "./whitelist-validator";

const element = document.createElement("input");

describe("validation", () => {
    it.each`
        value                          | expected | description
        ${undefined}                   | ${true}  | ${"undefined value should be valid"}
        ${null}                        | ${true}  | ${"null value should be valid"}
        ${""}                          | ${true}  | ${"empty value should be valid"}
        ${" "}                         | ${true}  | ${"whitespace should be valid"}
        ${"az"}                        | ${true}  | ${"letters should be valid"}
        ${"123"}                       | ${true}  | ${"numbers should be valid"}
        ${"räksmörgås"}                | ${true}  | ${'"åäö" letters should be valid'}
        ${"RÄKSMÖRGÅS"}                | ${true}  | ${"uppercase letters should be valid"}
        ${".,-()?+=!:@*"}              | ${true}  | ${"special characters should be valid"}
        ${"\n"}                        | ${true}  | ${"CR should be valid"}
        ${"\r"}                        | ${true}  | ${"LF should be valid"}
        ${"À Á Â Ã Ä Å Æ Ç È É Ê Ë Ì"} | ${true}  | ${'"À Á Â Ã Ä Å Æ Ç È É Ê Ë Ì" should be valid'}
        ${"Í Î Ï Ð Ñ Ò Ó Ô Õ Ö × Ø Ù"} | ${true}  | ${'"Í Î Ï Ð Ñ Ò Ó Ô Õ Ö × Ø Ù" should be valid'}
        ${"Ú Û Ü Ý Þ ß à á â ã ä å æ"} | ${true}  | ${'"Ú Û Ü Ý Þ ß à á â ã ä å æ" should be valid'}
        ${"ç è é ê ë ì í î ï ð ñ ò ó"} | ${true}  | ${'"ç è é ê ë ì í î ï ð ñ ò ó" should be valid'}
        ${"ô õ ö ÷ ø ù ú û ü ý þ ÿ"}   | ${true}  | ${'"ô õ ö ÷ ø ù ú û ü ý þ ÿ" should be valid'}
        ${"<"}                         | ${false} | ${'"<" should be invalid'}
        ${">"}                         | ${false} | ${'">" should be invalid'}
        ${"&"}                         | ${false} | ${'"&" should be invalid'}
        ${'"'}                         | ${false} | ${"quotes should be invalid"}
        ${"'"}                         | ${false} | ${"single quotes should be invalid"}
        ${"\\"}                        | ${false} | ${"escape should be invalid"}
        ${"\u200F"}                    | ${false} | ${"right-to-left mark should be invalid"}
        ${"$&%#_<>{}[]/\\\"'"}         | ${false} | ${'"$&%#_<>{}[]/\\"\'" should be invalid'}
        ${" test"}                     | ${false} | ${"non-breaking space should be invalid"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected, config }) => {
            element.value = value;
            const result = whitelistValidator.validation(
                value,
                element,
                config,
            );
            expect(result).toEqual(expected);
        },
    );
});
