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
    decimals: number;
}

export interface InputTypeConfig {
    formatter(value: string, decimals?: number): string;
    parser(value: string): string;
    readonly validationConfig: ValidatorConfigs;
    attributes(options?: AttributeOptions): InputAttribute[];
}

// Samma config bör användas av respektive specialiserade-inmatningsfällt (när vi flyttar från labs -> vue)
export const specializedInputFieldConfig: Record<InputType, InputTypeConfig> = {
    personnummer: {
        formatter: (value: string) => {
            return formatPersonnummer(parsePersonnummer(value)) ?? value;
        },
        parser: (value: string) => {
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
        formatter: (value: string) => {
            return parseBankAccountNumber(value) ?? value;
        },
        parser: (value: string) => {
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
        formatter: (value: string) => {
            return parseBankgiro(value) ?? value;
        },
        parser: (value: string) => {
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
        formatter: (value: string) => {
            return parseClearingNumber(value) ?? value;
        },
        parser: (value: string) => {
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
        formatter: (value: string) => {
            return formatNumber(value) ?? value;
        },
        parser: (value: string) => {
            const number = parseNumber(value);
            // Antar att vi alltid vill ha string?
            return isSet(number) ? `${number}` : value;
        },
        validationConfig: {
            currency: {},
            integer: {},
        },
        attributes: () => [],
    },
    email: {
        formatter: (value: string) => {
            return value;
        },
        parser: (value: string) => {
            return value;
        },
        validationConfig: {
            email: {},
            maxLength: { length: 80 },
        },
        attributes: () => [],
    },
    number: {
        formatter: (value: string, decimals: number) => {
            return formatNumber(value, decimals) ?? value;
        },
        parser: (value: string) => {
            const number = parseNumber(value);
            // Antar att vi alltid vill ha string?
            return isSet(number) ? `${number}` : value;
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
        formatter: (value: string) => {
            return parseOrganisationsnummer(value) ?? value;
        },
        parser: (value: string) => {
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
        formatter: (value: string, decimals: number) => {
            return formatNumber(value, decimals) ?? value;
        },
        parser: (value: string) => {
            const number = parseNumber(value);
            // Antar att vi alltid vill ha string?
            return isSet(number) ? `${number}` : value;
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
        formatter: (value: string) => {
            return value;
        },
        parser: (value: string) => {
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
        formatter: (value: string) => {
            return parsePlusgiro(value) ?? value;
        },
        parser: (value: string) => {
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
        formatter: (value: string) => {
            return formatPostalCode(value) ?? value;
        },
        parser: (value: string) => {
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
        formatter: (value: string) => {
            return value;
        },
        parser: (value: string) => {
            return value;
        },
        validationConfig: {},
        attributes: () => [],
    },
};
