import {
    type ValidatorConfigs,
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
} from "@fkui/logic";

const baseTypes = [
    "anchor",
    "button",
    "checkbox",
    "radio",
    "render",
    "rowheader",
    "select",
] as const;

export type InputTypeBase = (typeof baseTypes)[number];

const textTypes = [
    "text:bankAccountNumber",
    "text:bankgiro",
    "text:clearingNumber",
    "text:email",
    "text:organisationsnummer",
    "text:personnummer",
    "text:phoneNumber",
    "text:plusgiro",
    "text:postalCode",
    "text",
] as const;
export type InputTypeText = (typeof textTypes)[number];

const numberTypes = ["text:currency", "text:number", "text:percent"] as const;
export type InputTypeNumber = (typeof numberTypes)[number];

export type InputType = InputTypeBase | InputTypeNumber | InputTypeText;

/**
 * @public
 */
export function isInputTypeNumber(value: unknown): value is InputTypeNumber {
    return numberTypes.includes(value as InputTypeNumber);
}

/**
 * @public
 */
export function isInputTypeText(value: unknown): value is InputTypeText {
    return textTypes.includes(value as InputTypeText);
}

/**
 * @public
 */
export function isInputTypeBase(value: unknown): value is InputTypeBase {
    return baseTypes.includes(value as InputTypeBase);
}
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

export const inputFieldConfig: Record<
    InputTypeText | InputTypeNumber,
    InputTypeTextConfig | InputTypeNumberConfig
> = {
    "text:personnummer": {
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
    "text:bankAccountNumber": {
        formatter(value) {
            return value;
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
    "text:bankgiro": {
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
    "text:clearingNumber": {
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
    "text:currency": {
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
        attributes: () => [
            { name: "inputmode", value: "numeric" },
            { name: "maxlength", value: "20" },
        ],
    } satisfies InputTypeNumberConfig,
    "text:email": {
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
        attributes: () => [
            { name: "type", value: "email" },
            { name: "maxlength", value: "80" },
        ],
    } satisfies InputTypeTextConfig,
    "text:number": {
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
    "text:organisationsnummer": {
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
    "text:percent": {
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
    "text:phoneNumber": {
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
            { name: "maxlength", value: "80" },
            { name: "type", value: "tel" },
        ],
    } satisfies InputTypeTextConfig,
    "text:plusgiro": {
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
    "text:postalCode": {
        formatter(value) {
            return formatPostalCode(value);
        },
        parser(value) {
            return formatPostalCode(value);
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
} satisfies Record<
    InputTypeText | InputTypeNumber,
    InputTypeTextConfig | InputTypeNumberConfig
>;
