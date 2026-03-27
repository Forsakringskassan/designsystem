---
title: "Version 6 migreringsguide: @fkui/logic"
short-title: "@fkui/logic"
name: migrating-to-v6-logic
layout: article
---

## Polyfill

Den deprekerade entrypointen `@fkui/logic/lib/polyfills` är borttagen och ersatt med `@fkui/logic/polyfills`.

```diff
-import "@fkui/logic/lib/polyfills";
+import "@fkui/logic/polyfills";
```

## Validator `personnummer`

Den deprekerade validatorn `personnummer` är borttagen och ersätts med validatorerna {@link validators#personnummer_format_personnummerformat `personnummerFormat`} och {@link validators#personnummer_checksumma_personnummerluhn `personnummerLuhn`}.

```diff
    <f-text-field
        v-model="personnummerModel"
-       v-validation.personnummer
+       v-validation.personnummerFormat.personnummerLuhn
    >
```

Rekommenderat är att använda det specialiserade inmatningsfältet {@link textfield-specialized#personnummer `FPersonnummerTextField`}.

```html static
<f-personnummer-text-field v-model="model"> </f-personnummer-text-field>
```

## `DATE_REGEXP_WITH_DASH`

Den deprekerade konstanten `DATE_REGEXP_WITH_DASH` är borttagen och ersatt med `FDate` klassen från `@fkui/date`.

Exempelvis om du använder konstanten för att testa om ett datum är giltigt format använd `.isValid(..)` metoden:

```diff
-if (DATE_REGEXP_WITH_DASH.test(value)) {
+const parsed = FDate.fromIso(value);
+if (parsed.isValid()) {
     /* ... */
 }
```

## `WHITESPACE_PATTERN`

Den deprekerade konstanten `WHITESPACE_PATTERN` är borttagen och delvis ersatt med `stripWhitespace`.

Om du använder den för att ta bort whitespace från text ersätt med `stripWhitespace`:

```diff
-const stripped = text.replace(WHITESPACE_PATTERN, "");
+const stripped = stripWhitespace(text);
```

Om du använder den för andra ändamål ersätt med reguljära uttrycket `\s+` (med eller utan global flaggan).

## `FORMAT_3_DIGITS_GROUP`

Den deprekerade konstanten `FORMAT_3_DIGITS_GROUP` är borttagen utan ersättare.
Om du använder den behöver du använda ett eget reguljärt uttryck.

## `applyValidationMessages()`

Den deprekerade funktionen `applyValidationMessages()` är borttagen utan ersättare.
Funktionen var en placeholder som inte gjorde något och anrop kan därför tas bort.

## `isRadiobuttonOrCheckbox()`

Intern funktion som ej var tänkt för allmän konsumption.
Om du använder denna behöver du implementera logiken själv:

```diff
-if (isRadiobuttonOrCheckbox(element)) {
+if (element instanceof HTMLElement && ["radio", "checkbox"].includes(element.type)) {
     /* ... */
 }
```

## `setCookie()`

Funktionen `setCookie(..)` tar inte längre den deprekerade parametern `timeLimitMillis`.
Använd `timeLimitSeconds` istället.
