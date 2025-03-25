---
title: Validatorer
layout: component
---

## Generella validatorer

### Identisk `matches`

Validatorn kontrollerar att det värde som användaren har fyllt i är identiskt med värdet i ett annat inmatningsfält (referensvärde).

```import nomarkup
MatchesExample.vue
```

Skriv så här i kod för att jämföra med ett inmatningsfält med `id="reference"`:

```diff
 <f-text-field
+    v-validation.matches="{ matches: { id: 'reference' } }"
 ></f-text-field>
```

Konfiguration:

```ts
interface MatchesValidatorConfig {
    /** Identifier of another input field */
    id?: string;
}
```

Kända buggar:

- Validatorn kraschar om `id` refererar till ett inmatningsfält som inte finns.
- Validatorn ger alltid ett felmeddelande om `id` refererar till ett element som inte är ett inmatningsfält.
- Validatorn fungerar inte om referensvärdet uppdateras. Du behöver hantera det manuellt, se {@link cross-validation korsvalidering}.

### Maxlängd `maxLength`

Validatorn kontrollerar att antalet tecken som fylls i inte överstiger det angivna gränsvärdet.

```import nomarkup
MaxLengthExample.vue
```

Skriv så här i kod för att sätta en maxlängd på tio tecken:

```diff
 <f-text-field
+    v-validation.maxLength="{ maxLength: { length: 10 } }"
 ></f-text-field>
```

Du behöver ändra felmeddelandet till användaren när valideringen inte är godkänd så att det passar sammanhanget. Om du inte ändrar kommer det stå MAXLENGTH. Undantag är om validatorn är kombinerad med någon av validatorerna som nämns nedan.

Det finns särskilda felmeddelanden när den här validatorn kombineras med andra validatorer:

- bankgiro `bankgiro`: Fyll i bankgironumret.
- organisationsnummer `organisationsnummer`: Fyll i organisationsnumret med 10 siffror, till exempel 999999-9999.
- personnummer-format `personnummerFormat`: Fyll i personnumret med 10 siffror.
- plusgiro `plusgiro`: Fyll i plusgironumret.
- postnummer `postalCode`: Fyll i ett postnummer.

### Minlängd `minLength`

Validatorn kontrollerar att antalet tecken som fylls i inte understiger det angivna gränsvärdet.

```import nomarkup
MinLengthExample.vue
```

Skriv så här i kod för att sätta en minlängd på fyra tecken:

```diff
 <f-text-field
+    v-validation.minLength="{ minLength: { length: 4 } }"
 ></f-text-field>
```

Du behöver ändra felmeddelandet till användaren när valideringen inte är godkänd så att det passar sammanhanget. Om du inte ändrar kommer det stå MINLENGTH.

### Obligatoriskt `required`

Validatorn kontrollerar att inmatningskomponenten har ett värde.

Valideringskriterier för inmatningsfält är:

- Det måste finnas ett ifyllt värde.
- Värden med endast mellanslag, indrag, radbrytningar och kontrolltecken (CR, LF) är inte godkänt.
- Undefined och null är inte godkänt.

Valideringskriterier för radioknapp och kryssruta:

- Det måste finnas minst en vald radioknapp eller kryssruta i gruppen.

```import nomarkup
RequiredExample.vue
```

Skriv så här i kod:

```diff
 <f-text-field
+    v-validation.required
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd är:

- inmatningsfält: Fyll i text.
- dropplista: Välj ett av alternativen.
- kryssruta: Välj minst ett alternativ.
- radioknapp: Välj ett av alternativen.

Det finns särskilda felmeddelanden när den här validatorn kombineras med andra validatorer:

- bankgiro `bankgiro`: Fyll i bankgironumret.
- clearingnummer `clearingNumber`: Fyll i ett clearingnummer.
- datum `date`: Välj ett datum.
- kontonummer `bankAccountNumber`: Fyll i ett kontonummer.
- nummer `number`: Fyll i en siffra.
- organisationsnummer `organisationsnummer`: Fyll i organisationsnumret med 10 siffror, till exempel 999999-9999.
- personnummer-format `personnummerFormat`: Fyll i personnumret med 10 siffror.
- plusgiro `plusgiro`: Fyll i plusgironumret.
- postnummer `postalCode`: Fyll i ett postnummer.
- procent `percent`: Fyll i en siffra.
- telefonnummer `phoneNumber`: Kolla att telefonnumret stämmer.
- valutabelopp `currency`: Fyll i ett belopp.

### Tillåtna tecken `whitelist`

Validatorn kontrollerar att de tecken som användaren har fyllt i är tillåtna tecken.

Tillåtna tecken är:  a-z A-Z 0-9 . , - ( ) ? + = ! : @ \* À Á Â Ã Ä Å Æ Ç È É Ê Ë Ì Í Î Ï Ð Ñ Ò Ó Ô Õ Ö × Ø Ù Ú Û Ü Ý Þ ß à á â ã ä å æ ç è é ê ë ì í î ï ð ñ ò ó ô õ ö ÷ ø ù ú û ü ý þ ÿ

Valideringen sker direkt efter användaren har fyllt i ett otillåtet tecken. Direktvalideringen är inbyggd i validatorn.

```import nomarkup
WhitelistExample.vue
```

Skriv så här i kod:

```diff
 <f-text-field
+    v-validation.whitelist
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd är:

- Fältet innehåller otillåtna tecken. Exempel på ogiltiga tecken är /, % och ".

### Val från lista `allowList`

Validatorn kontrollerar att värdet som användaren angivit exakt matchar något av valen i listan.

Om det finns behov av att dynamiskt ändra på listans innehåll, så behöver den befintliga listan ersättas med en ny lista för att en omvalidering ska ske.

```import nomarkup
AllowListExample.vue
```

Skriv så här i kod:

```diff
 <f-text-field
+    v-validation.allowList="{ allowList: { list: ["foo", "bar", "baz"] } }"
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd är:

- Välj ett av alternativen i listan.

## Datum

### Datum `date`

Validatorn kontrollerar att det ifyllda värdet är ett giltigt datum.

Valideringskriterier:

- Tillåtna tecken är siffror, bindestreck eller snedstreck.
- Om det finns bindestreck eller snedstreck måste de vara på plats nummer fem eller åtta. Godkända format är åååå-mm-dd, ååååmmdd och åååå/mm/dd.
- Max antal tecken är tio.
- Minsta antal tecken är åtta. Minst åtta tecken måste vara siffror.
- Det datum som fylls i måste vara ett giltigt datum (det kontrolleras mot en kalender).

Till exempel är 2020-02-30 inte ett giltigt datum.

```import nomarkup
DateExample.vue
```

Skriv så här i kod:

```diff
 <f-text-field
+    v-validation.date
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd är:<br> Du har fyllt i ett felaktigt datum.

Felmeddelandet när validatorn för datum `date` är kombinerad med validatorn för obligatoriskt fält `required` är:<br> Välj ett datum.

### Datumformat `dateFormat`

Validatorn kontrollerar att det ifyllda värde stämmer överens mot de här valideringskriterierna:

- Tillåtna tecken är siffror, bindestreck eller snedstreck.
- Om det finns bindestreck eller snedstreck måste de vara på plats nummer fem eller åtta. Godkända format är åååå-mm-dd, ååååmmdd och åååå/mm/dd.
- Max antal tecken är tio.
- Minsta antal tecken är åtta. Minst åtta tecken måste vara siffror.

```import nomarkup
DateFormatExample.vue
```

Skriv så här i kod:

```diff
 <f-text-field
+    v-validation.dateformat
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd är:<br> Fyll i datumet med åtta siffror.

### Inte valbara datum `invalidDates`

Validatorn kontrollerar att det datum som användaren har valt är ett valbart datum.

```import nomarkup
InvalidDatesExample.vue
```

Skriv så här i kod för att 1 januari 2022, 5 maj 2022 och 20 juni 2022 inte ska vara valbara datum:

```diff
 <f-text-field
+    v-validation.date.invalidDates="{ invalidDates: { dates: ['2022-01-01', '2022-05-05', '2022-06-20'] } }"
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd är:<br> Du kan inte välja det här datumet.

### Inte valbara veckodagar `invalidWeekdays`

Validatorn kontrollerar att det datum som användaren har valt är en valbar veckodag.

```import nomarkup
InvalidWeekdaysExample.vue
```

Skriv så här i kod för att sätta måndagar, tisdagar, onsdagar och torsdagar som inte valbara veckodagar:

```diff
 <f-text-field
+    v-validation.date.invalidWeekdays="{ invalidWeekdays: { days: [1, 2, 3, 4] } }"
 ></f-text-field>
```

Felmeddelandet till användaren när valideringern inte är godkänd är:<br> Du kan inte välja det här datumet.

### Maxdatum `maxDate`

Validatorn kontrollerar att det datum som användaren har fyllt i **inte** ligger längre fram än angivet datum. Använd maxdatum-validatorn tillsammans med datum-validatorn.

Valideringskriterie:

- Tillåtna datum är till och med det datum som anges.

```import nomarkup
MaxDateExample.vue
```

Skriv så här i kod när användaren ska välja ett datum fram till och med 30 januari 2020:

```diff
 <f-text-field
+    v-validation.date.maxDate="{ maxDate: { limit:  '2020-01-30'  } }"
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd är:<br> Datumet ligger för långt fram i tiden.

### Mindatum `minDate`

Validatorn kontrollerar att det datum som användaren har fyllt i **inte** ligger tidigare än angivet datum. Använd mindatum-validatorn tillsammans med datum-validatorn.

Valideringskriterie:

- Tillåtna datum är från och med det datum som anges.

```import nomarkup
MinDateExample.vue
```

Skriv så här i kod när användaren ska välja ett datum från och med 1 januari 2020:

```diff
 <f-text-field
+    v-validation.date.minDate="{ minDate: { limit:  '2020-01-01'  } }"
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd är:<br> Datumet ligger för långt bak i tiden.

## Tal och valutabelopp

### Nummer `number`

Validatorn kontrollerat att det ifyllda värdet stämmer överens med valideringskriterierna:

- Tillåtna tecken är siffror, mellanslag, decimalkomma, decimalpunkt och minustecken.
- Minustecken är endast tillåtet om det ligger först.
- Ett decimalkomma är tillåtet
- En decimalpunkt är tillåten.
- Decimalkomma och decimalpunkt räknas båda som decimalseparator.
- Det måste finnas minst en siffra före och minst en siffra efter en decimalseparator.
- Alla numeriska värden är tillåtna.

```import nomarkup
NumberExample.vue
```

Skriv så här i kod:

```diff
 <f-text-field
+    v-validation.number
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd är:<br> Du har fyllt i ett ogiltigt tecken. Fyll i siffror.

Det finns särskilda felmeddelanden när den här validatorn kombineras med andra validatorer:

- obligatorisk `required`: Fyll i en siffra.
- maxvärde `maxValue`: Du har fyllt i en för hög siffra.
- minvärde `minValue`: Fyll i en högre siffra.

### Heltal `integer`

Validatorn kontrollerar att det ifyllda värdet är ett heltal.

Valideringskriterier:

- Tillåtna tecken är siffror, mellanslag och minustecken.
- Minustecken är endast tillåtet om det ligger först
- Endast heltal är tillåtna.

```import nomarkup
IntegerExample.vue
```

Skriv så här i kod när användaren måste fylla i ett heltal:

```diff
 <f-text-field
+    v-validation.integer
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd är:<br> Fyll i siffror utan decimal.

Det finns särskilda felmeddelanden när den här validatorn komponbineras med andra validatorer:

- obligatorisk `required`: Fyll i en siffra.
- procent `percent`: Fyll i procent utan decimal.

### Decimaltal `decimal`

Validatorn kontrollerar att det ifyllda värdet är ett decimaltal.

Max antal decimaler och minsta antal decimaler är konfigurerbart. Utgångsvärden för max antal decimaler är två. Utgångsvärdet för minsta antal decimaler är ett.

Valideringskriterier:

- Tillåtna tecken är siffror, mellanslag, decimalkomma, decimalpunkt och minustecken.
- Minustecken är endast tillåtet om det ligger först.
- Ett decimalkomma är tillåtet.
- En decimalpunkt är tillåten.
- Decimalkomma och decimalpunkt räknas båda som decimalseparator.
- Det måste finnas minst en siffra före och minst en siffra efter en decimalseparator.
- Endast decimaltal är tillåtet.
- Antal decimaler följer angivna värden (konfigurerbart).

```import nomarkup
DecimalExample.vue
```

Skriv så här i kod när användaren måste fylla i ett tal med minst en decimal och max sex decimaler:

```diff
 <f-text-field
+    v-validation.decimal="{ decimal: { minDecimals: 1, maxDecimals: 6 } }"
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd är:<br> Fyll i ett värde med rätt antal decimaler.

### Maxvärde `maxValue`

Validatorn kontrollerar att det ifyllda värdet inte överstiger det angivna gränsvärdet.

Valideringskriterier:

- Tillåtna tecken är siffror, mellanslag, decimalkomma, decimalpunkt och minustecken.
- Minustecken endast tillåtet om det ligger först.
- Ett decimalkomma är tillåtet.
- En decimalpunkt är tillåten.
- Decimalkomma och decimalpunkt räknas båda som decimalseparator.
- Det måste finnas minst en siffra före och minst en siffra efter en decimalseparator.
- Alla numeriska värden är tillåtna.
- Det ifyllda värdet får inte överstiga gränsvärdet.

```import nomarkup
MaxValueExample.vue
```

Skriv så här i kod när användaren måste fylla i ett tal som inte överstiger 50:

```diff
 <f-text-field
+    v-validation.maxValue="{ maxValue: { maxValue: 50 } }"
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd är:<br> Du har fyllt i en för hög siffra.

Det finns särskilda felmeddelanden när den här validatorn kombineras med andra validatorer:

- nummer `number`: Du har fyllt i en för hög siffra.
- procent `percent`: Fyll i en lägre siffra.
- valutabelopp `currency`: Fyll i ett belopp.

### Minvärde `minValue`

Validatorn kontrollerar att det ifyllda värdet inte understiger det angivna gränsvärdet.

Valideringskriterier:

- Tillåtna tecken är siffror, mellanslag, decimalkomma, decimalpunkt och minustecken.
- Minustecken är endast tillåtet om det ligger först.
- Ett decimalkomma är tillåtet.
- En decimalpunkt är tillåten.
- Decimalkomma och decimalpunkt räknas båda som decimalseparator.
- Det måste finnas minst en siffra före och minst en siffra efter en decimalseparator.
- Alla numeriska värden är tillåtna.
- Det ifyllda värdet får inte understiga gränsvärdet.

```import nomarkup
MinValueExample.vue
```

Skriv så här i kod när användaren ska fylla i ett tal som inte understiger 10:

```diff
 <f-text-field
+    v-validation.minValue="{ minValue: { minValue: 10 } }"
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd är:<br> Fyll i en högre siffra.

Det finns särskilda felmeddelanden när den här validatorn kombineras med andra validatorer:

- nummer `number`: Fyll i en högre siffra.
- procent `percent`: Fyll i en högre siffra.
- valutabelopp `currency`: Fyll i ett belopp.

### Mindre än `lessThen`

Validatorn kontrollerar att det ifyllda värdet är mindre än det angivna gränsvärdet.

Valideringskriterier:

- Tillåtna tecken är siffror, mellanslag, decimalkomma, decimalpunkt och minustecken.
- Minustecken är endast tillåtet om det ligger först.
- Ett decimalkomma är tillåtet.
- En decimalpunkt är tillåten.
- Decimalkomma och decimalpunkt räknas båda som decimalseparator.
- Det måste finnas minst en siffra före och minst en siffra efter en decimalseparator.
- Alla numeriska värden är tillåtna.
- Det ifyllda värdet måste vara mindre än gränsvärdet.

```import nomarkup
LessThanExample.vue
```

Skriv så här i kod när användaren fylla i ett tal som är mindre än 100:

```diff
 <f-text-field
+    v-validation.lessThan="{ lessThan: { limit: 100 } }"
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd är:<br> Du har fyllt i en för hög siffra.

### Större än `greaterThan`

Validatorn kontrollerar att det ifyllda värdet är större än det angivna gränsvärdet.

Valideringskriterier:

- Tillåtna tecken är siffror, mellanslag, decimalkomma, decimalpunkt och minustecken.
- Minustecken är endast tillåtet om det ligger först
- Ett decimalkomma är tillåtet.
- En decimalpunkt är tillåten.
- Decimalkomma och decimalpunkt räknas båda som decimalseparator.
- Det måste finnas minst en siffra före och minst en siffra efter en decimalseparator.
- Alla numeriska värden är tillåtna.
- Det ifyllda värdet ska vara större än gränsvärdet.

```import nomarkup
GreaterThanExample.vue
```

Skriv så här i kod när användaren ska fylla i ett tal som är större än 0.123:

```diff
 <f-text-field
+    v-validation.greaterThan="{ greaterThan: { limit: 0.123 } }"
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd är:<br> Fyll i en högre siffra.

### Procent `percent`

Validatorn kontrollerar att det ifyllda värdet stämmer med valideringskriterierna:

- Tillåtna tecken är siffror, mellanslag, decimalkomma, decimalpunkt, och minustecken.
- Minustecken är endast tillåtet om det ligger först.
- Ett decimalkomma är tillåtet.
- En decimalpunkt är tillåten.
- Decimalkomma och decimalpunkt räknas båda som decimalseparator.
- Det måste finnas minst en siffra före och minst en siffra efter en decimalseparator.

```import nomarkup
PercentExample.vue
```

Skriv så här i kod när användaren ska fylla i ett tal i procent:

```diff
 <f-text-field
+    v-validation.percent
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd är:<br> Fyll i procent med en siffra.

Det finns särskilda felmeddelanden när den här validatorn kombineras med andra validatorer:

- heltal `integer`: Fyll i procent utan decimal.
- maxvärde `maxValue`: Fyll i en lägre siffra.
- minvärde `minValue`: Fyll i en högre siffra.
- obligatorisk `required`: Fyll i en siffra.

### Valutabelopp `currency`

Validatorn baseras på [nummer-validatorn](#nummer-number).

```import nomarkup
CurrencyExample.vue
```

Skriv så här i kod när användaren ska fylla i ett valutabelopp:

```diff
 <f-text-field
+    v-validation.currency
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd är:<br> Fyll i ett belopp.

Det finns särskilda felmeddelanden när den här validatorn kombineras med andra validatorer:

- obligatorisk `required`: Fyll i ett belopp.
- maxvärde `maxValue`: Fyll i ett belopp.
- minvärde `minValue`: Fyll i ett belopp.

## Identifiering

### Organisationsnummer `organisationsnummer`

Validatorn kontrollerar att det ifyllda värdet stämmer med formatet för organisationsnummer och att checksumman stämmer.

Valideringskriterier:

- Tillåtna tecken är siffror och bindestreck.
- Bindestreck får bara vara på plats nummer sju i ordningen.
- Minsta antal tecken är tio. Minst tio tecken måste vara siffror.
- Max antal tecken är 11.
- Checksumman stämmer överens med det ifyllda värdet.

```import nomarkup
OrganisationsnummerExample.vue
```

Skriv så här i kod när användaren ska fylla i organisationsnummer:

```diff
 <f-text-field
+    v-validation.organisationsnummer
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd är:<br> Fyll i organisationsnumret med 10 siffror, till exempel 999999-9999.

Det finns särskilda felmeddelanden när den här validatorn kombineras med andra validatorer:

- obligatorisk `requied`: Fyll i organisationsnumret med 10 siffror, till exempel 999999-9999.

- maxlängd `maxLength`: Organisationsnumret kan inte ha mer än 11 tecken.

### Personnummer - format `personnummerFormat`

Validatorn kontrollerar att det ifyllda värdet stämmer med formatet för personnummer.

Valideringskriterier:

- Tillåtna tecken är siffror, bindestreck och plustecken.
- Det måste vara 10 eller 12 siffror.
- Datum ligger efter 5 maj 1840.
- Datum ligger inte i framtiden om sekel är angivet.
- År >= 00 och <=99.
- Månad >= 01 och <=12.
- Dag >= 01 och <=31 eller >= 60 och <=91 (det senare är samordningsnummer).
- De fyra sista siffrorna: 0000-9999.

Det finns en separat validator för att kontrollera checksumman på ett personnummer, personnummer-checksumma (personnummerLuhn). Validatorn för format ska stå före validatorn för checksumma.

```import nomarkup
PersonnummerFormatExample.vue
```

Skriv så här i kod när användaren ska fylla i personnummer:

```diff
 <f-text-field
+    v-validation.personnummerFormat.personnummerLuhn
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd är:<br> Fyll i personnumret med 10 siffror.

Det finns särskilda felmeddelanden när den här validatorn kombineras med andra validatorer:

- obligatorisk `required`: Fyll i personnumret med 10 siffror.
- maxlängd `maxLength`: Fyll i personnumret med 10 siffror.

### Personnummer - checksumma `personnummerLuhn`

Validatorn kontrollerar att det ifyllda värdet stämmer med checksumman för personnummer.

Det finns en separat validator för att kontrollera format för personnummer, personnummer-format (personnummerFormat). Validatorn för format ska stå före validatorn för checksumma.

```import nomarkup
PersonnummerLuhnExample.vue
```

Skriv så här i kod när användaren ska fylla i personnummer:

```diff
 <f-text-field
+    v-validation.personnummerFormat.personnummerLuhn
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd är:<br> Kolla att personnumret stämmer.

### Personnummer - inte samma `personnummerNotSame`

Validatorn kontrollerar att det ifyllda personnumret inte är samma som personnumret i annat fält.

Det finns en separat validator för att kontrollera format för personnummer, personnummer-format (`personnummerFormat`). Validatorn för format ska stå före validatorn för `personnummerNotSame`.

```import nomarkup
PersonnummerNotSameExample.vue
```

Skriv så här i kod för att jämföra med ett inmatningsfält med `v-model="reference"`:

```diff
 <f-text-field
+    v-validation.personnummerFormat.personnummerNotSame="{ personnummerNotSame: { otherField: reference } }"
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd måste skapas av konsumenten.

### Personnummer - äldre `personnummerOlder`

Validatorn kontrollerar att det ifyllda personnumret är äldre än eller är i samma ålder som personnumret i annat fält.

Det finns en separat validator för att kontrollera format för personnummer, personnummer-format (`personnummerFormat`). Validatorn för format ska stå före validatorn för `personnummerOlder`.

```import nomarkup
PersonnummerOlderExample.vue
```

Skriv så här i kod för att jämföra med ett inmatningsfält med `v-model="reference"`:

```diff
 <f-text-field
+    v-validation.personnummerFormat.personnummerOlder="{ personnummerOlder: { otherField: reference } }"
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd måste skapas av konsumenten.

### Personnummer - yngre `personnummerYounger`

Validatorn kontrollerar att det ifyllda personnumret är yngre än eller är i samma ålder som personnumret i annat fält.

Det finns en separat validator för att kontrollera format för personnummer, personnummer-format (`personnummerFormat`). Validatorn för format ska stå före validatorn för `personnummerYounger`.

```import nomarkup
PersonnummerYoungerExample.vue
```

Skriv så här i kod för att jämföra med ett inmatningsfält med `v-model="reference"`:

```diff
 <f-text-field
+    v-validation.personnummerFormat.personnummerYounger="{ personnummerYounger: { otherField: reference } }"
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd måste skapas av konsumenten.

## Adress och kontaktuppgifter

### Mejladress `email`

Validatorn kontrollerar att det ifyllda värdet stämmer med giltigt format för mejladress. Max antal tecken är konfigurerbart. Utgångsvärdet för max antal tecken är 64.

Valideringskriterier:

- Ifyllt värde ska ha format **localpart@domain**.
- Tillåtna tecken för **localpart** är a-ö, 0-9, snedstreck och punkt.
- Tillåtna tecken för **domain** är a-z, 0-9 och punkt.
- **localpart** ska innehålla minst ett tecken.
- **domain** ska innehålla minst ett tecken och får inte börja eller avslutas med punkt.
- Max antal tecken följer det angivna värdet (konfigurerbart).

```import nomarkup
EmailExample.vue
```

Skriv så här i kod när användaren ska fylla i mejladress:

```diff
 <f-text-field
+    v-validation.email
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd är:<br> Mejladressen är inte rätt ifylld.

### Postnummer `postalCode`

Validatorn kontrollerar att det ifyllda värdet stämmer med formatet för postnummer.

Valideringskriterier:

- Tillåtna tecken är siffror och mellanslag.
- Antal siffror ska vara fem.
- Minsta antal tecken är fem.
- Max antal tecken är sex.
- Mellanslag är endast tillåtet på position fyra.
- Första siffran ska vara 1 till 9.

```import nomarkup
PostalCodeExample.vue
```

Skriv så här i kod när användare ska fylla i postnummer:

```diff
 <f-text-field
+    v-validation.postalCode
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd är:<br> Fyll i postnumret med fem siffror.

Det finns särskilda felmeddelanden när den här validatorn kombineras med andra validatorer:

- obligatorisk `required`: Fyll i ett postnummer.
- maxLängd `maxLength`: Postnumret kan inte ha mer än 13 tecken.

### Telefonnummer `phoneNumber`

Validatorn kontrollerar att det ifyllda värdet stämmer med formatet för telefonnummer.

Valideringskriterier:

- Tillåtna tecken är siffror, plustecken, bindestreck, mellanslag, parentes, understreck och snedstreck framåt ( / ).
- Plustecken får bara stå först.
- Minsta antal tecken är tre.
- Det måste vara minst tre siffror.
- Max antal tecken är 21.
- Det får max vara 17 siffror.

```import nomarkup
PhoneNumberExample.vue
```

Skriv så här i kod när användaren ska fylla i telefonnummer:

```diff
 <f-text-field
+    v-validation.phoneNumber
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd är:<br> Telefonnumret är inte rätt ifyllt.

Felmeddelandet när den här validatorn kombineras med validatorn för obligatorisk `required` är:<br> Kolla att telefonnumret stämmer.

## Bank

### Bankgiro `bankgiro`

Validatorn kontrollerar att det ifyllda värdet stämmer med formatet för bankgiro.

Valideringskriterier:

- Tillåtna tecken är siffror och bindestreck.
- Bindestreck får bara vara på plats nummer fyra eller fem i ordningen.
- Minsta antal tecken är sju tecken.
- Det måsta vara minst sju siffror.
- Max antal tecken är nio tecken.
- Checksumman ska stämma på det ifyllda värdet.

```import nomarkup
BankgiroExample.vue
```

Skriv så här i kod när användaren ska fylla i bankgiro:

```diff
 <f-text-field
+    v-validation.bankgiro
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd är:<br> Fyll i bankgironumret med sju eller åtta siffror och bindestreck.

Det finns särskilda felmeddelanden när den här validatorn kombineras med andra validatorer:

- obligatorisk `required`: Fyll i bankgironumret.
- maxlängd `maxLength`: Bankgironumret kan ha mer än 9 tecken.

### Clearingnummer `clearingNumber`

Validatorn kontrollerar att det ifyllda värdet stämmer med formatet för clearingnummer.

Valideringskriterier:

- Tillåtna tecken är siffror, mellanslag och bindestreck.
- Mellanslag och bindestreck är bara tillåtet mellan siffra nummer fyra och fem.
- Minsta antal tecken är fyra.
- Det måste vara minst fyra siffror.
- Max antal tecken är sex.
- Det får vara max fem siffror.

```import nomarkup
ClearingNumberExample.vue
```

Skriv så här i kod när användaren ska fylla i clearingnummer:

```diff
 <f-text-field
+    v-validation.clearingNumber
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd är:<br> Clearingnumret är inte rätt ifyllt. Kolla att det stämmer.

Felmeddelandet när den här validatorn kombineras med validatorn för obligatorisk `required` är:<br> Fyll i ett clearingnummer.

### Kontonummer `bankAccountNumber`

Validatorn kontrollerar att det ifyllda värdet stämmer med formatet för kontonummer.

Valideringskriterier:

- Tillåtna tecken är siffror, mellanslag, bindestreck, punkt och komma.
- Minsta antal tecken är tre.
- Det måste vara minst tre siffror.
- Max antal tecken är 16.

```import nomarkup
BankAccountNumberExample.vue
```

Skriv så här i kod när användaren ska fylla i kontonummer:<br>

```diff
 <f-text-field
+    v-validation.bankAccountNumber
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd är:<br> Kontonumret är inte rätt ifyllt. Kolla att det stämmer.

Felmeddelandet när den här validatorn kombineras med validatorn för obligatorisk `required` är:<br> Fyll i ett kontonummer.

### Plusgiro `plusgiro`

Validatorn kontrollerar att det ifyllda värdet stämmer med formatet för plusgiro.

Valideringskriterier:

- Tillåtna tecken är siffror och bindestreck.
- Minsta antal tecken är tre. Minst två tecken måste vara siffror.
- Max antal tecken är nio. Max åtta tecken får vara siffror.
- Bindestreck får bara vara på näst sista positionen.
- Checksumman ska stämma på det ifyllda värdet.

```import nomarkup
PlusgiroExample.vue
```

Skriv så här i kod när användaren ska fylla i plusgiro:

```diff
 <f-text-field
+    v-validation.plusgiro
 ></f-text-field>
```

Felmeddelandet till användaren när valideringen inte är godkänd är:<br> Fyll i plusgironumret med siffror och bindestreck.

Det finns särskilda felmeddelanden när den här validatorn kombineras med andra validatorer:

- obligatorisk `required`: Fyll i plusgironumret.
- maxlängd `maxLength`: Plusgironumret kan inte ha mer än 11 tecken.

## Relaterat

{@link validation Validering och felhantering}

{@link custom-validator Validator anpassad}

{@link ValidationPlugin ValidationPlugin}

{@link textfield-specialized Specialiserade inmatningsfält}
