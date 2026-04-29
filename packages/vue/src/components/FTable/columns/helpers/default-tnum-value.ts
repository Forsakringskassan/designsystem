import { type InputType } from "../../input-fields-config";

/**
 * @internal
 */
export function defaultTnumValue(type: InputType): boolean {
    const tnumTypes = [
        "text:bankAccountNumber",
        "text:bankgiro",
        "text:clearingNumber",
        "text:currency",
        "text:number",
        "text:organisationsnummer",
        "text:percent",
        "text:personnummer",
        "text:phoneNumber",
        "text:plusgiro",
        "text:postalCode",
    ];

    return tnumTypes.includes(type);
}
