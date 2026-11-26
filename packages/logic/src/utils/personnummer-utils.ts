import { testLuhnChecksum } from "./test-luhn-checksum";

/**
 * @public
 */
export function validChecksum(value: string): boolean {
    const yymmddxxxx = value.slice(2).replaceAll("-", "");
    return testLuhnChecksum(yymmddxxxx);
}
