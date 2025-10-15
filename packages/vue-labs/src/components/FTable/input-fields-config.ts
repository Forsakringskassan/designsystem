import {
    formatNumber,
    formatPersonnummer,
    formatPostalCode,
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
    decimals?: number;
}

export interface InputTypeTextConfig {
    attributes(): InputAttribute[];
    formatter(this: AttributeOptions, value: string): string | undefined;
    parser(value: string): string | undefined;
    readonly validationConfig: ValidatorConfigs;
}

export interface InputTypeNumberConfig {
    attributes(options?: AttributeOptions): InputAttribute[];
    formatter(
        this: AttributeOptions,
        value: string | number,
    ): string | undefined;
    parser(value: string): string | number | undefined;
    readonly validationConfig: ValidatorConfigs;
}

export const inputFieldConfig = {
    personnummer: {
        formatter(value) {
            return formatPersonnummer(parsePersonnummer(value));
        },
        parser(value) {
            return parsePersonnummer(value);
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
    } satisfies InputTypeTextConfig,
    bankAccountNumber: {
        formatter(value) {
            return parseBankAccountNumber(value);
        },
        parser(value) {
            return parseBankAccountNumber(value);
        },
        validationConfig: {
            bankAccountNumber: {},
        },
        attributes: () => [
            { name: "inputmode", value: "numeric" },
            { name: "maxlength", value: "40" },
        ],
    } satisfies InputTypeTextConfig,
    bankgiro: {
        formatter(value) {
            return parseBankgiro(value);
        },
        parser(value) {
            return parseBankgiro(value);
        },
        validationConfig: {
            maxLength: { length: 9 },
            bankgiro: {},
        },
        attributes: () => [
            { name: "inputmode", value: "numeric" },
            { name: "maxlength", value: "40" },
        ],
    } satisfies InputTypeTextConfig,
    clearingNumber: {
        formatter(value) {
            return parseClearingNumber(value);
        },
        parser(value) {
            return parseClearingNumber(value);
        },
        validationConfig: {
            clearingNumber: {},
        },
        attributes: () => [
            { name: "inputmode", value: "numeric" },
            { name: "maxlength", value: "16" },
        ],
    } satisfies InputTypeTextConfig,
    currency: {
        formatter(value) {
            return formatNumber(value);
        },
        parser(value) {
            return parseNumber(value);
        },
        validationConfig: {
            currency: {},
            integer: {},
        },
        attributes: () => [],
    } satisfies InputTypeNumberConfig,
    email: {
        formatter(value) {
            return value;
        },
        parser(value) {
            return value;
        },
        validationConfig: {
            email: {},
            maxLength: { length: 80 },
        },
        attributes: () => [],
    } satisfies InputTypeTextConfig,
    number: {
        formatter(value) {
            return formatNumber(value, this.decimals ?? 2);
        },
        parser(value) {
            return parseNumber(value);
        },
        validationConfig: {
            number: {},
        },
        attributes: () => [
            { name: "inputmode", value: "numeric" },
            { name: "maxlength", value: "20" },
        ],
    } satisfies InputTypeNumberConfig,
    organisationsnummer: {
        formatter(value) {
            return parseOrganisationsnummer(value);
        },
        parser(value) {
            return parseOrganisationsnummer(value);
        },
        validationConfig: {
            maxLength: { length: 11 },
            organisationsnummer: {},
        },
        attributes: () => [
            { name: "inputmode", value: "numeric" },
            { name: "maxlength", value: "20" },
        ],
    } satisfies InputTypeTextConfig,
    percent: {
        formatter(value) {
            return formatNumber(value, this.decimals ?? 2);
        },
        parser(value) {
            return parseNumber(value);
        },
        validationConfig: {
            percent: {},
            minValue: { minValue: 0 },
            maxValue: { maxValue: 999 },
        },
        attributes: (decimals) => {
            return [
                {
                    name: "inputmode",
                    value: decimals ? "decimal" : "numeric",
                },
                { name: "maxlength", value: "10" },
            ];
        },
    } satisfies InputTypeNumberConfig,
    phoneNumber: {
        formatter(value) {
            return value;
        },
        parser(value) {
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
    } satisfies InputTypeTextConfig,
    plusgiro: {
        formatter(value) {
            return parsePlusgiro(value);
        },
        parser(value) {
            return parsePlusgiro(value);
        },
        validationConfig: {
            maxLength: { length: 11 },
            plusgiro: {},
        },
        attributes: () => [
            { name: "inputmode", value: "numeric" },
            { name: "maxlength", value: "16" },
        ],
    } satisfies InputTypeTextConfig,
    postalCode: {
        formatter(value) {
            return formatPostalCode(value);
        },
        parser(value) {
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
    } satisfies InputTypeTextConfig,
    text: {
        formatter(value) {
            return value;
        },
        parser(value) {
            return value;
        },
        validationConfig: {},
        attributes: () => [],
    } satisfies InputTypeTextConfig,
} satisfies Record<InputType, InputTypeTextConfig | InputTypeNumberConfig>;
