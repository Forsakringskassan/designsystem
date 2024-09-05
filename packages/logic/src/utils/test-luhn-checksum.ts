/**
 * Takes a string containing only numbers and checks that the checksum is correct
 * according to the Luhn Algorithm.
 *
 * @public
 * @param inputString - A string containing only numbers
 */
export function testLuhnChecksum(inputString: string): boolean {
    let sum = 0;
    if (/^[0-9]+$/.test(inputString) === false) {
        throw new Error(
            "Luhn Checksum test only works on strings containing numbers",
        );
    }

    inputString
        .split("")
        .reverse()
        .forEach((numChar, index) => {
            const digit =
                parseInt(numChar, 10) * ((index + 1) % 2 === 0 ? 2 : 1);
            sum += digit >= 10 ? digit - 9 : digit;
        });

    return sum % 10 === 0;
}
