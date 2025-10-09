import {
    formatNumber,
    formatPersonnummer,
    formatPostalCode,
    isSet,
    parseBankAccountNumber,
    parseBankgiro,
    parseClearingNumber,
    parseNumber,
    parseOrganisationsnummer,
    parsePersonnummer,
    parsePlusgiro,
    type PersonnummerString,
    type ValidatorConfigs,
} from "@fkui/logic";

export type InputType =
    | "bankAccountNumber"
    | "bankgiro"
    | "clearingNumber"
    | "currency"
    | "number"
    | "email"
    | "organisationsnummer"
    | "percent"
    | "personnummer"
    | "phoneNumber"
    | "plusgiro"
    | "postalCode"
    | "text";

export interface InputAttribute {
    readonly name: string;
    readonly value: string;
}

export interface AttributeOptions {
    decimals?: number;
}

export interface InputTypeConfig {
    formatter(this: AttributeOptions, value: string): string;
    parser(value: string): string | number;
    readonly validationConfig: ValidatorConfigs;
    attributes(options?: AttributeOptions): InputAttribute[];
}

export const inputFieldConfig: Record<InputType, InputTypeConfig> = {
    personnummer: {
        formatter(value: string): string {
            return formatPersonnummer(parsePersonnummer(value)) ?? value;
        },
        parser(value: string): PersonnummerString {
            return parsePersonnummer(value) ?? value;
        },
        validationConfig: {
            maxLength: { length: 20 },
            personnummerFormat: {},
            personnummerLuhn: {},
        },
        attributes: () => [
            { name: "inputmode", value: "numeric" },
            { name: "maxlength", value: "23" },
        ],
    },
    bankAccountNumber: {
        formatter(value: string): string {
            return parseBankAccountNumber(value) ?? value;
        },
        parser(value: string): string {
            return parseBankAccountNumber(value) ?? value;
        },
        validationConfig: {
            bankAccountNumber: {},
        },
        attributes: () => [
            { name: "inputmode", value: "numeric" },
            { name: "maxlength", value: "40" },
        ],
    },
    bankgiro: {
        formatter(value: string): string {
            return parseBankgiro(value) ?? value;
        },
        parser(value: string): string {
            return parseBankgiro(value) ?? value;
        },
        validationConfig: {
            maxLength: { length: 9 },
            bankgiro: {},
        },
        attributes: () => [
            { name: "inputmode", value: "numeric" },
            { name: "maxlength", value: "40" },
        ],
    },
    clearingNumber: {
        formatter(value: string): string {
            return parseClearingNumber(value) ?? value;
        },
        parser(value: string): string {
            return parseClearingNumber(value) ?? value;
        },
        validationConfig: {
            clearingNumber: {},
        },
        attributes: () => [
            { name: "inputmode", value: "numeric" },
            { name: "maxlength", value: "16" },
        ],
    },
    currency: {
        formatter(value: string): string {
            return formatNumber(value) ?? value;
        },
        parser(value: string): number | string {
            const number = parseNumber(value);
            return isSet(number) ? number : value;
        },
        validationConfig: {
            currency: {},
            integer: {},
        },
        attributes: () => [],
    },
    email: {
        formatter(value: string): string {
            return value;
        },
        parser(value: string): string {
            return value;
        },
        validationConfig: {
            email: {},
            maxLength: { length: 80 },
        },
        attributes: () => [],
    },
    number: {
        formatter(value: string): string {
            return formatNumber(value, this.decimals ?? 2) ?? value;
        },
        parser(value: string): number | string {
            const number = parseNumber(value);
            return isSet(number) ? number : value;
        },
        validationConfig: {
            number: {},
        },
        attributes: () => [
            { name: "inputmode", value: "numeric" },
            { name: "maxlength", value: "20" },
        ],
    },
    organisationsnummer: {
        formatter(value: string): string {
            return parseOrganisationsnummer(value) ?? value;
        },
        parser(value: string): string {
            return parseOrganisationsnummer(value) ?? value;
        },
        validationConfig: {
            maxLength: { length: 11 },
            organisationsnummer: {},
        },
        attributes: () => [
            { name: "inputmode", value: "numeric" },
            { name: "maxlength", value: "20" },
        ],
    },
    percent: {
        formatter(value: string): string {
            return formatNumber(value, this.decimals ?? 2) ?? value;
        },
        parser(value: string): number | string {
            const number = parseNumber(value);
            return isSet(number) ? number : value;
        },
        validationConfig: {
            percent: {},
            minValue: { minValue: 0 },
            maxValue: { maxValue: 999 },
        },
        attributes: (decimals) => {
            return [
                { name: "inputmode", value: decimals ? "decimal" : "numeric" },
                { name: "maxlength", value: "10" },
            ];
        },
    },
    phoneNumber: {
        formatter(value: string): string {
            return value;
        },
        parser(value: string): string {
            return value;
        },
        validationConfig: {
            maxLength: { length: 80 },
            phoneNumber: {},
        },
        attributes: () => [
            { name: "inputmode", value: "numeric" },
            { name: "maxlength", value: "20" },
        ],
    },
    plusgiro: {
        formatter(value: string): string {
            return parsePlusgiro(value) ?? value;
        },
        parser(value: string): string {
            return parsePlusgiro(value) ?? value;
        },
        validationConfig: {
            maxLength: { length: 11 },
            plusgiro: {},
        },
        attributes: () => [
            { name: "inputmode", value: "numeric" },
            { name: "maxlength", value: "16" },
        ],
    },
    postalCode: {
        formatter(value: string): string {
            return formatPostalCode(value) ?? value;
        },
        parser(value: string): string {
            return value;
        },
        validationConfig: {
            maxLength: { length: 13 },
            postalCode: {},
        },
        attributes: () => [
            { name: "inputmode", value: "numeric" },
            { name: "maxlength", value: "15" },
        ],
    },
    text: {
        formatter(value: string): string {
            return value;
        },
        parser(value: string): string {
            return value;
        },
        validationConfig: {},
        attributes: () => [],
    },
};
