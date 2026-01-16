import {
    type ValidatorConfigs,
    formatNumber,
    formatPersonnummer,
    formatPostalCode,
    parseBankAccountNumber,
    parseBankgiro,
    parseClearingNumber,
    parseDate,
    parseNumber,
    parseOrganisationsnummer,
    parsePersonnummer,
    parsePlusgiro,
} from "@fkui/logic";

/**
 * @public
 */
export const baseTypes = [
    "anchor",
    "button",
    "checkbox",
    "radio",
    "render",
    "rowheader",
    "select",
] as const;

/**
 * @public
 */
export type InputTypeBase = (typeof baseTypes)[number];

/**
 * @public
 */
export const textTypes = [
    "text:bankAccountNumber",
    "text:bankgiro",
    "text:clearingNumber",
    "text:date",
    "text:email",
    "text:organisationsnummer",
    "text:personnummer",
    "text:phoneNumber",
    "text:plusgiro",
    "text:postalCode",
    "text",
] as const;

/**
 * @public
 */
export type InputTypeText = (typeof textTypes)[number];

/**
 * @public
 */
export const numberTypes = [
    "text:currency",
    "text:number",
    "text:percent",
] as const;

/**
 * @public
 */
export type InputTypeNumber = (typeof numberTypes)[number];

/**
 * @public
 */
export type InputType = InputTypeBase | InputTypeNumber | InputTypeText;

/**
 * @internal
 */
export function isInputTypeNumber(value: string): value is InputTypeNumber {
    return numberTypes.includes(value as InputTypeNumber);
}

/**
 * @internal
 */
export function isInputTypeText(value: string): value is InputTypeText {
    return textTypes.includes(value as InputTypeText);
}

/**
 * @internal
 */
export function isInputTypeBase(value: string): value is InputTypeBase {
    return baseTypes.includes(value as InputTypeBase);
}

/**
 * @internal
 */
export interface InputAttribute {
    readonly name: string;
    readonly value: string;
}

/**
 * @internal
 */
export interface AttributeOptions {
    decimals?: number;
}

/**
 * @internal
 */
export interface InputTypeTextConfig {
    attributes(): InputAttribute[];
    formatter(this: void, value: string): string | undefined;
    parser(this: void, value: string): string | undefined;
    readonly validationConfig: ValidatorConfigs;
}

/**
 * @internal
 */
export interface InputTypeNumberConfig {
    attributes(options?: AttributeOptions): InputAttribute[];
    formatter(
        this: AttributeOptions,
        value: string | number,
    ): string | undefined;
    parser(this: AttributeOptions, value: string): string | number | undefined;
    readonly validationConfig: ValidatorConfigs;
}

/**
 * @internal
 */
export const inputFieldConfig = {
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
            return parseClearingNumber(value.trim());
        },
        parser(value) {
            return parseClearingNumber(value.trim());
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
    "text:date": {
        formatter(value) {
            return parseDate(value);
        },
        parser(value) {
            return parseDate(value);
        },
        validationConfig: {
            date: {},
        },
        attributes: () => [{ name: "type", value: "text" }],
    } satisfies InputTypeTextConfig,
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
            return parseNumber(value, this.decimals ?? 2);
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
            return parseNumber(value, this.decimals ?? 2);
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
            return formatPostalCode(value.trim());
        },
        parser(value) {
            return formatPostalCode(value.trim());
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
