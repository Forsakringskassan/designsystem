---
title: Specialiserade inmatningsfält
status: Produktionsklar
layout: component
---

Det specialiserade inmatningsfältet används när användaren själv ska skriva in information som kontonummer, personnummer eller telefonnummer. Det specialiserade inmatningsfältet ärver egenskaper från vanliga inmatningsfältet och lägger till text för etikett, validerar inmatat värde och formaterar värde vid behov.

{@link formatter-parser Läs mer om formatering och parsning}

{@link validation Läs mer om validering}

Exempel för de specialiserade inmatningsfälten finner du på {@link FTextField inmatningsfält}

## Bankgiro

`FBankgiroTextField`

### Etikett

| Egenskap      | Värde          | Textnyckel                       |
| ------------- | -------------- | -------------------------------- |
| Etikettrubrik | Bankgironummer | `fkui.bankgiro-text-field.label` |

### Format

| Egenskap     | Värde                                                        | Beskrivning                        |
| ------------ | ------------------------------------------------------------ | ---------------------------------- |
| v-model type | `BankgiroString`                                             | Sträng                             |
| Parser       | {@link formatters-and-parsers#bankgiro_parser parseBankgiro} | Värdet uppdateras med bindestreck. |
| Tangentbord  | `inputmode="numeric"`                                        |                                    |

### Validering

`maxLength.bankgiro="{ maxLength: { length: 9 }"`

#### Validatorer

{@link validators#maxlangd Maxlängd} och {@link validators#bankgiro format för bankgiro}.

#### Attribut för maxlängd

`maxlength=40` {@link length-validation Läs mer om längdvalidering}

### API

Se {@link FTextField#api Inmatningsfält} för API.

## Clearingnummer

`FClearingnumberTextField`

### Etikett

| Egenskap      | Värde          | Textnyckel                             |
| ------------- | -------------- | -------------------------------------- |
| Etikettrubrik | Clearingnummer | `fkui.clearingnumber-text-field.label` |

### Format

| Egenskap     | Värde                                                                                    | Beskrivning                                                           |
| ------------ | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| v-model type | `ClearingNumberString`                                                                   | Sträng                                                                |
| Formatering  | {@link formatters-and-parsers#clearingnummer_formaterare formatClearingNumberForBackend} | Tar bort sista siffran om <br> clearingnummer innehåller fem siffror. |
| Parser       | {@link formatters-and-parsers#clearingnummer_parser parseClearingNumber}                 | Vyvärdet uppdateras med bindesteck mellan siffra 4 & 5.               |
| Tangentbord  | `inputmode="numeric"`                                                                    |                                                                       |

För clearingnummer kan värdet behöva omvandlas ytterligare innan det skickas till backend. Importera `formatClearingNumberForBackend`-metod från logik-paketet för att ta bort eventuell femte siffra.

### Validering

`clearingNumber`

#### Validatorer

{@link validators#clearingnummer Format för clearingnummer}

#### Attribut för maxlängd

`maxlength=16` {@link length-validation Läs mer om längdvalidering}

### API

Se {@link FTextField#api Inmatningsfält} för API.

## Kontonummer

`FBankAccountNumberTextField`

### Etikett

| Egenskap      | Värde       | Textnyckel                                  |
| ------------- | ----------- | ------------------------------------------- |
| Etikettrubrik | Kontonummer | `fkui.bank-account-number-text-field.label` |

### Format

| Egenskap     | Värde                                                                    | Beskrivning                                 |
| ------------ | ------------------------------------------------------------------------ | ------------------------------------------- |
| v-model type | `BankAccountString`                                                      | Sträng                                      |
| Parser       | {@link formatters-and-parsers#kontonummer_parser parseBankAccountNumber} | Följande tecken "- .," tas bort i modellen. |
| Tangentbord  | `inputmode="numeric"`                                                    |                                             |

### Validering

`bankAccountNumber`

#### Validatorer

{@link validators#kontonummer Format för kontonummer}.

#### Attribut för maxlängd

`maxlength=40` {@link length-validation Läs mer om längdvalidering}

### API

Se {@link FTextField#api Inmatningsfält} för API.

## Mejladress

`FEmailTextField`

Inmatningsfält för mejladress finns med enkel validering som beskrivs nedan och med [utökad validering](#mejladress_utokad). Vid utökad validering ska användaren bekräfta mejladressen genom att skriva in den en gång till.

### Etikett

| Egenskap      | Värde      | Textnyckel                          |
| ------------- | ---------- | ----------------------------------- |
| Etikettrubrik | Mejladress | `fkui.email-text-field-mail-adress` |

### Validering

`email`

#### Validatorer

{@link validators#mejladress Format för mejladress}.

#### Attribut för maxlängd

`maxlength=80` {@link length-validation Läs mer om längdvalidering}

```import
FEmailTextFieldSimple.vue
```

## Mejladress - utökad

`FEmailTextField`

Inmatningsfält för mejladress finns med [enkel validering](#mejladress) och med utökad validering som beskrivs nedan. Vid utökad validering ska användaren bekräfta mejladressen genom att skriva in det en gång till.

### Etikett

| Egenskap      | Värde              | Textnyckel                                 |
| ------------- | ------------------ | ------------------------------------------ |
| Etikettrubrik | Upprepa mejladress | `fkui.email-text-field-repeat-mail-adress` |

### Validering

`email.matches`

#### Validatorer

{@link validators#mejladress Format för mejladress} och {@link validators#identisk identisk}.

#### Attribut för maxlängd

`maxlength=80` {@link length-validation Läs mer om längdvalidering}

```import
FEmailTextFieldExtended.vue
```

### API

:::api
vue:FEmailTextField
:::

## Numeriskt

`FNumericTextField`

Inmatningsfält används när användaren ska fylla i ett tal. Värdet i fältet kommer automatiskt formateras som ett nummer med tusenavskiljare och kommatecken som decimalpunkt. Utvecklaren behöver själv lägga till lämpliga numeriska validatorer som till exempel `_v-validation.required.decimal.maxValue.minValue=" ... "`.

### Format

| Egenskap     | Värde                                                          | Beskrivning                                                                |
| ------------ | -------------------------------------------------------------- | -------------------------------------------------------------------------- |
| v-model type | `number`                                                       | Modellen hanteras som nummer.                                              |
| Formatering  | {@link formatters-and-parsers#nummer_formaterare formatNumber} | Vyvärdet formateras till decimaltal om propertyn för `decimal` är angiven. |
| Parser       | {@link formatters-and-parsers#nummer_parser parseNumber}       | Inmatat värde parsas till `number`.                                        |
| Tangentbord  | `inputmode="numeric"`                                          |                                                                            |

### Validering

`decimals`

#### Validatorer

{@link validators#decimaltal Decimaltal} (om propertyn är angiven).

#### Attribut för maxlängd

`maxlength=20` {@link length-validation Läs mer om längdvalidering}

### API

Se {@link FTextField#api Inmatningsfält} för API.

## Organisationsnummer

`FOrganisationsnummerTextField`

### Etikett

| Egenskap                                      | Värde               | Textnyckel                                               |
| --------------------------------------------- | ------------------- | -------------------------------------------------------- |
| Etikettrubrik                                 | Organisationsnummer | `fkui.organisationsnummer-text-field.label`              |
| Formatbeskrivning                             | (999999-9999)       | `fkui.organisationsnummer-text-field.example`            |
| Formatbeskrivning, <br> skärmläsare (sr-only) | Formatbeskrivning   | `fkui.organisationsnummer-text-field.format-description` |

### Format

| Egenskap     | Värde                                                                              | Beskrivning                     |
| ------------ | ---------------------------------------------------------------------------------- | ------------------------------- |
| v-model type | `OrganisationsnummerString`                                                        | Sträng                          |
| Parser       | {@link formatters-and-parsers#organisationsnummer_parser parseOrganisationsnummer} | Värdet ändras till nnnnnn-nnnn. |
| Tangentbord  | `inputmode="numeric"`                                                              |                                 |

### Validering

`maxLength.organisationsnummer="{ maxLength:{ length: 11 }}"`

#### Validatorer

{@link validators#maxlangd Maxlängd} och {@link validators#organisationsnummer format för organisationsnummer}.

#### Attribut för maxlängd

`maxlength=20` {@link length-validation Läs mer om längdvalidering}

### API

Se {@link FTextField#api Inmatningsfält} för API.

## Personnummer

`FPersonnummerTextField`

Inmatningsfältet för personnummer har förlåtande inmatning,
så att användaren kan skriva in personnummer med både 10 eller 12 siffror.
Det inmatade värdet kommer efter godkänd validering att formateras enligt [<u>Skatteverkets regler</u>](https://www.skatteverket.se/privat/folkbokforing/personnummer.4.3810a01c150939e893f18c29.html) för personnummer.
Från och med det år personen fyller 100 år ska personnumret skrivas med plustecken istället för bindestreck.
Inskick till backend innehåller 12 siffror, `ååååmmdd-nnnn`.

### Etikett

| Egenskap                                      | Värde                                   | Textnyckel                                                        |
| --------------------------------------------- | --------------------------------------- | ----------------------------------------------------------------- |
| Etikettrubrik                                 | Personnummer                            | `fkui.personnummer-text-field.label-`<br>`10-digits`              |
| Formatbeskrivning                             | (ååmmdd-nnnn)                           | `fkui.personnummer-text-field.example-`<br>`10-digits`            |
| Formatbeskrivning, <br> skärmläsare (sr-only) | Skriv personnumret <br> med 10 siffror. | `fkui.personnummer-text-field.format-description-`<br>`10-digits` |

### Format

| Egenskap     | Värde                                                                      | Beskrivning                      |
| ------------ | -------------------------------------------------------------------------- | -------------------------------- |
| v-model type | `PersonnummerString`                                                       | Sträng                           |
| Formatering  | {@link formatters-and-parsers#personnummer_formaterare formatPersonnummer} | Formateras till ååmmdd-nnnn.     |
| Parsning     | {@link formatters-and-parsers#personnummer_parser parsePersonnummer}       | Sparar 12 tecken (ååååmmdd-nnnn) |
| Tangentbord  | `inputmode="numeric"`                                                      |                                  |

### Validering

`maxLength.personnummerFormat.personnummerLuhn= "{ maxLength:{ length: 20 }}"`

#### Validatorer

{@link validators#maxlangd Maxlängd}, {@link validators#personnummer_format format för personnummer} och {@link validators#personnummer_checksumma kontrollsiffra för personnummer}.

#### Attribut för maxlängd

`maxlength=23` {@link length-validation Läs mer om längdvalidering}

### API

Se {@link FTextField#api Inmatningsfält} för API.

## Plusgiro

`FPlusgiroTextField`

### Etikett

| Egenskap      | Värde          | Textnyckel                       |
| ------------- | -------------- | -------------------------------- |
| Etikettrubrik | Plusgironummer | `fkui.plusgiro-text-field.label` |

### Format

| Egenskap     | Värde                                                        | Beskrivning                    |
| ------------ | ------------------------------------------------------------ | ------------------------------ |
| v-model type | `PlusgiroString`                                             | Sträng                         |
| Parser       | {@link formatters-and-parsers#plusgiro_parser parsePlusgiro} | Värdet ändras till nn nn nn-n. |
| Tangentbord  | `inputmode="numeric"`                                        |                                |

### Validering

`maxLength.plusgiro= "{ maxLength:{ length: 9 }}"`

#### Validatorer

{@link validators#maxlangd Maxlängd} och {@link validators#plusgiro format för plusgiro}.

#### Attribut för maxlängd

`maxlength=15` {@link length-validation Läs mer om längdvalidering}

### API

Se {@link FTextField#api Inmatningsfält} för API.

## Postnummer

`FPostalCodeTextField`

### Etikett

| Egenskap                                      | Värde             | Textnyckel                                       |
| --------------------------------------------- | ----------------- | ------------------------------------------------ |
| Etikettrubrik                                 | Postnummer        | `fkui.postal-code-text-field.label`              |
| Formatbeskrivning                             | (123 45)          | `fkui.postal-code-text-field.example`            |
| Formatbeskrivning, <br> skärmläsare (sr-only) | Formatbeskrivning | `fkui.postal-code-text-field.format-description` |

### Format

| Egenskap     | Värde                                                            | Beskrivning                |
| ------------ | ---------------------------------------------------------------- | -------------------------- |
| v-model type | `PostalCodeString`                                               | Sträng                     |
| Parser       | {@link formatters-and-parsers#postnummer_parser parsePostalCode} | Värdet ändras till nnn nn. |
| Tangentbord  | `inputmode="numeric"`                                            |                            |

### Validering

`maxLength.postalCode="{ maxLength:´{ length: 13 }}"`

#### Validatorer

{@link validators#maxlangd Maxlängd} och {@link validators#postnummer format för postnummer}.

#### Attribut för maxlängd

`maxlength=15` {@link length-validation Läs mer om längdvalidering}

### API

Se {@link FTextField#api Inmatningsfält} för API.

## Procent

`FPercentTextField`

### Format

| Egenskap     | Värde                                                            | Beskrivning                                                        |
| ------------ | ---------------------------------------------------------------- | ------------------------------------------------------------------ |
| v-model type | `number`                                                         | Modellen hanteras som nummer.                                      |
| Formatering  | {@link formatters-and-parsers#procent_formaterare formatPercent} | Formaterar värdet med decimaler om propertyn `decimal` är angiven. |
| Parser       | {@link formatters-and-parsers#procent_parser parsePercent}       | Parsar inmatat värde till `number`.                                |
| Tangentbord  | `inputmode="numeric"`                                            |                                                                    |

### Validering

`percent.minValue.maxValue= "{ minValue: { minValue: 0 }, maxValue: { maxValue: 999 } }"`

#### Validatorer

{@link validators#procent Format för procent}, {@link validators#minvarde minvärde} och {@link validators#maxvarde maxvärde}.

#### Attribut för maxlängd

`maxlength=10` {@link length-validation Läs mer om längdvalidering}

### API

Se {@link FTextField#api Inmatningsfält} för API.

## Sökfält

`FSearchTextField`

Används för sökningar där användaren skriver in sin söktext i ett inmatningsfält.

### Etikett

| Egenskap                                                      | Värde                      | Textnyckel                                    |
| ------------------------------------------------------------- | -------------------------- | --------------------------------------------- |
| Etikettrubrik                                                 | Sök                        | `fkui.search-text-field.label`                |
| Knapptext för att rensa sökfält, <br> skärmläsare (sr-only).  | Töm inmatningsfält         | `fkui.search-text-field.search-screen-reader` |
| Information när sökfält har tömts, <br> skärmläsare (sr-only) | Inmatningsfältet har tömts | `fkui.search-text-field.aria-live.clear`      |

### Format

| Egenskap     | Värde    | Beskrivning |
| ------------ | -------- | ----------- |
| v-model type | `string` | Sträng      |

### Valiering

#### Attribut för maxlängd

`maxlength=80` {@link length-validation Läs mer om längdvalidering}

### API

Se {@link FTextField#api Inmatningsfält} för API.

## Telefonnummer

`FPhoneTextField`

Inmatningsfält för telefonnummer finns med enkel validering som beskrivs nedan och med [utökad validering](#telefonnummer_utokad). Vid utökad validering ska användaren bekräfta telefonnummer genom att skriva in det en gång till.

### Etikett

| Egenskap      | Värde         | Textnyckel                    |
| ------------- | ------------- | ----------------------------- |
| Etikettrubrik | Telefonnummer | `fkui.phone-text-field.label` |

### Format

| Egenskap     | Värde    | Beskrivning                   |
| ------------ | -------- | ----------------------------- |
| v-model type | `number` | Modellen hanteras som nummer. |

### Validering

`phoneNumber`

#### Validatorer

{@link validators#telefonnummer Format för telefonnummer}.

#### Attribut för maxlängd

`maxlength=80` {@link length-validation Läs mer om längdvalidering}

```import
FPhoneTextFieldSimple.vue
```

## Telefonnummer - utökad

`FPhoneTextField`

Inmatningsfält för telefonnummer finns med [enkel validering](#telefonnummer) och med utökad validering som beskrivs nedan. Vid utökad validering ska användaren bekräfta telefonnummer genom att skriva in det en gång till.

### Etikett

| Egenskap      | Värde                 | Textnyckel                           |
| ------------- | --------------------- | ------------------------------------ |
| Etikettrubrik | Upprepa telefonnumret | `fkui.phone-text-field.label.repeat` |

### Format

| Egenskap     | Värde    | Beskrivning                   |
| ------------ | -------- | ----------------------------- |
| v-model type | `number` | Modellen hanteras som nummer. |

### Validering

`phoneNumber.matches`

#### Validatorer

{@link validators#telefonnummer Format för telefonnummer} och {@link validators#identisk identisk}.

#### Attribut för maxlängd

`maxlength=80` {@link length-validation Läs mer om längdvalidering}

```import
FPhoneTextFieldExtended.vue
```

### API

:::api
vue:FPhoneTextField
:::

## Valuta

`FCurrencyTextField`

Inmatningsfält för valuta används när modellen (`v-model`) är av typen `number`.
Värdet i fältet kommer automatiskt formateras som ett nummer med tusenavskiljare och kommatecken som decimalpunkt. Utvecklaren behöver själv lägga till ytterligare lämpliga numeriska validatorer som till exempel `_v-validation.required.maxValue=" ... "`.

### Format

| Egenskap     | Värde                                                          | Beskrivning                         |
| ------------ | -------------------------------------------------------------- | ----------------------------------- |
| v-model type | `number`                                                       | Modellen hanteras som nummer        |
| Formatering  | {@link formatters-and-parsers#nummer_formaterare formatNumber} |                                     |
| Parsning     | {@link formatters-and-parsers#nummer_parser parseNumber}       | Inmatat värde parsas till `number`. |
| Tangentbord  | `inputmode="numeric"`                                          |                                     |

### Validering

`currency.integer`

#### Validatorer

{@link validators#valutabelopp Valutabelopp} och {@link validators#heltal heltal}.

#### Attribut för maxlängd

`maxlength=20` {@link length-validation Läs mer om längdvalidering}

### API

Se {@link FTextField#api Inmatningsfält} för API.

## Relaterat

{@link FTextField Inmatningsfält}

{@link formatter-parser Formatering och parsning}

{@link validation Validering}
