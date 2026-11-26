import { ValidationErrorMessageBuilder } from "../ValidationErrorMessageBuilder";

/**
 * @public
 */
export function getErrorMessages(): Record<string, string> {
    return ValidationErrorMessageBuilder.create()

        .map(
            "bankAccountNumber",
            "Kontonumret är inte rätt ifyllt. Kolla att det stämmer.",
        )
        .mapCombined("required", "bankAccountNumber", "Fyll i ett kontonummer.")

        .map(
            "bankgiro",
            "Fyll i bankgironumret med sju eller åtta siffror och bindestreck.",
        )
        .mapCombined("required", "bankgiro", "Fyll i bankgironumret.")
        .mapCombined(
            "maxLength",
            "bankgiro",
            "Bankgironumret kan inte ha mer än 9 tecken.",
        )

        .map(
            "clearingNumber",
            "Clearingnumret är inte rätt ifyllt. Kolla att det stämmer.",
        )
        .mapCombined("required", "clearingNumber", "Fyll i ett clearingnummer.")

        .map("currency", "Fyll i ett belopp.")
        .mapCombined("required", "currency", "Fyll i ett belopp.")

        .map("date", "Du har fyllt i ett felaktigt datum.")
        .mapCombined("required", "date", "Välj ett datum.")

        .map("dateFormat", "Fyll i datumet med åtta siffror.")

        .map("decimal", "Fyll i ett värde med rätt antal decimaler.")

        .map("email", "Mejladressen är inte korrekt ifylld.")
        .mapCombined("required", "email", "Fyll i en mejladress.")
        .mapCombined("matches", "email", "Kolla att mejladressen stämmer.")

        .map("greaterThan", "Fyll i en högre siffra.")

        .map("integer", "Fyll i siffror utan decimal.")
        .mapCombined("required", "integer", "Fyll i en siffra.")

        .map("lessThan", "Du har fyllt i en för hög siffra.")

        .map("minDate", "Datumet ligger för långt bak i tiden.")
        .mapCombined("minDate", "date", "Datumet ligger för långt bak i tiden.")

        .map("maxDate", "Datumet ligger för långt fram i tiden.")
        .mapCombined(
            "maxDate",
            "date",
            "Datumet ligger för långt fram i tiden.",
        )

        .map("maxValue", "Du har fyllt i en för hög siffra.")
        .map("minValue", "Fyll i en högre siffra.")

        .map("number", "Du har fyllt i ett ogiltigt tecken. Fyll i siffror.")
        .mapCombined("required", "number", "Fyll i en siffra.")
        .mapCombined("minValue", "number", "Fyll i en högre siffra.")
        .mapCombined("maxValue", "number", "Du har fyllt i en för hög siffra.")

        .map(
            "organisationsnummer",
            "Fyll i organisationsnumret med 10 siffror, till exempel 999999-9999.",
        )
        .mapCombined(
            "required",
            "organisationsnummer",
            "Fyll i organisationsnumret med 10 siffror, till exempel 999999-9999.",
        )
        .mapCombined(
            "maxLength",
            "organisationsnummer",
            "Organisationsnumret kan inte ha mer än 11 tecken.",
        )

        .map("percent", "Fyll i procent med en siffra.")
        .mapCombined("integer", "percent", "Fyll i procent utan decimal.")
        .mapCombined("required", "percent", "Fyll i en siffra.")
        .mapCombined("minValue", "percent", "Fyll i en högre siffra.")
        .mapCombined("maxValue", "percent", "Fyll i en lägre siffra.")

        .map("personnummerFormat", "Fyll i personnumret med 10 siffror.")
        .mapCombined(
            "required",
            "personnummerFormat",
            "Fyll i personnumret med 10 siffror.",
        )
        .mapCombined(
            "maxLength",
            "personnummerFormat",
            "Fyll i personnumret med 10 siffror.",
        )

        .map("personnummerLuhn", "Kolla att personnumret stämmer.")

        .map("postalCode", "Fyll i postnumret med fem siffror.")
        .mapCombined("required", "postalCode", "Fyll i ett postnummer.")
        .mapCombined(
            "maxLength",
            "postalCode",
            "Postnumret kan inte ha mer än 13 tecken.",
        )

        .map("phoneNumber", "Telefonnumret är inte rätt ifyllt.")
        .mapCombined("required", "phoneNumber", "Fyll i ett telefonnummer.")
        .mapCombined(
            "matches",
            "phoneNumber",
            "Kolla att telefonnumret stämmer.",
        )

        .map("plusgiro", "Fyll i plusgironumret med siffror och bindestreck.")
        .mapCombined("required", "plusgiro", "Fyll i plusgironumret.")
        .mapCombined(
            "maxLength",
            "plusgiro",
            "Plusgironumret kan inte ha mer än 11 tecken.",
        )

        .map("matches", "Fälten stämmer inte överens.")

        .map("required", "Fyll i text.")
        .map("required", "Välj minst ett alternativ.", "checkbox")
        .map("required", "Välj ett av alternativen.", "radio")
        .map("required", "Välj ett av alternativen.", "select")

        .map("invalidDates", "Du kan inte välja det här datumet.")

        .map("invalidWeekdays", "Du kan inte välja det här datumet.")

        .map(
            "whitelist",
            'Fältet innehåller otillåtna tecken. Exempel på ogiltiga tecken är /, % och ".',
        )

        .map("allowList", "Välj ett av alternativen i listan.")

        .build();
}
