/**
 * Takes a string containing only numbers and checks that the checksum is correct
 * according to the Luhn Algorithm.
 *
 * @public
 * @param inputString - A string containing only numbers
 */
export function testLuhnChecksum(inputString: string): boolean {
    if (!/^\d+$/.test(inputString)) {
        throw new Error(
            "Luhn Checksum test only works on strings containing numbers",
        );
    }
    let sum = 0;

    for (const [index, numChar] of inputString
        .split("")
        .toReversed()
        .entries()) {
        const digit =
            Math.trunc(Number(numChar)) * ((index + 1) % 2 === 0 ? 2 : 1);
        sum += digit >= 10 ? digit - 9 : digit;
    }

    return sum % 10 === 0;
}
