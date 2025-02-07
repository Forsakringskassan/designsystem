---
title: Version 6 migreringsguide
name: migrating-to-v6
layout: article
redirect_from:
    - components/fform.html
    - components/fformdeprecated.html
---

## Summering

Följande deprekerade komponenter har tagits bort:

- `FCheckboxGroup`
- `FCheckboxGroupField`
- `FRadioGroup`
- `FRadioGroupField`
- `FForm`
- `FFormStep`
- `FFormStepButton`

Följande komponenter, funktioner och typer är även de borttagna:

- `createFFormProvideOptions`
- `FFormData`
- `FFormPageObject`
- `FFormProvider`
- `FFormStepPageObject`
- `FormStepFields`
- `getRef`
- `isFormStepReference`
- `Reference`
- `setIsOpen`
- `setRef`
- `sortComponentsWithErrorsOnDOMOrder`

Ändringar i komponenter och funktioner:

- `@fkui/logic`: importen `@fkui/logic/lib/polyfills` är borttagen.
- `@fkui/logic`: konstanterna `DATE_REGEXP_WITH_DASH`, `WHITESPACE_PATTERN` och `FORMAT_3_DIGITS_GROUP` är borttagen.
- `@fkui/logic`: funktioner `applyValidationMessages()`, `ìsRadiobuttonOrCheckbox()` är borttagna.
- `@fkui/logic`: funktionen `setCookie(..)` tar inte längre `timeLimitMillis` parametern.
- `FCalendar`: `change` eventet emittas inte längre.
- `FFormModal`: slottarna `submit-button-text` och `cancel-button-text` är borttagna.
- `FModal`: CSS klassalias `modal__dialog-container-large` och `modal__dialog-container-fullscreen` är borttagna.
- `FPageHeader`: propen `skipLinkHref` är borttagen
- `FTextField`: `update` eventet emittas inte längre.
- `getTextFromScopedSlot`: funktionen är borttagen.
- Konfiguration: `FKUIConfig.modalTarget` och `FKUIConfig.popupTarget` är borttagna.

För Cypress pageobjekt:

- `trimmedText()` metoden är borttagen från samtliga pageobjekt (ej att förväxla med tredjeparts kommando/assertion med samma namn).
- `FMessageBoxPageObject.title()` och `FMessageBoxPageObject.body()` metoderna är borttagna.
- `FLoaderPageobject.loader()` metoden är borttagen.
- `FNavigationMenuPageobject.menu()` metoden är borttagen.
- `FTooltipPageObject.content()` metoden är borttagen.

Följande deprekerade validatorer har tagits bort:

- `personnummer`

Tillämpnings-specifika leverabler (internt, externt, HAPO) har ersatts av rena FKUI-leverabler:

- paketet `@fkui/css-variables` har bytt namn till `@fkui/theme-default` och levererar ett standardtema
- paketet `@fkui/design` levererar enbart standarddesign

## `@fkui/logic`

Den deprekerade konstanten `DATE_REGEXP_WITH_DASH` är borttagen och ersatt med `FDate` klassen från `@fkui/date`.

Exempelvis om du använder konstanten för att testa om ett datum är giltigt format använd `.isValid(..)` metoden:

```diff
-if (DATE_REGEXP_WITH_DASH.test(value)) {
+const parsed = FDate.fromIso(value);
+if (parsed.isValid()) {
     /* ... */
 }
```

Den deprekerade konstanten `WHITESPACE_PATTERN` är borttagen och delvis ersatt med `stripWhitespace`.

Om du använder den för att ta bort whitespace från text ersätt med `stripWhitespace`:

```diff
-const stripped = text.replace(WHITESPACE_PATTERN, "");
+const stripped = stripWhitespace(text);
```

Om du använder den för andra ändamål ersätt med reguljära uttrycket `\s+` (med eller utan global flaggan).

Den deprekerade konstanten `FORMAT_3_DIGITS_GROUP` är borttagen utan ersättare.

Om du använder den behöver du använda ett eget reguljärt uttryck.

### `applyValidationMessages()`

Den deprekerade funktionen `applyValidationMessages()` är borttagen utan ersättare.
Funktionen var en placeholder som inte gjorde något och anrop kan därför tas bort.

### `isRadiobuttonOrCheckbox()`

Intern funktion som ej var tänkt för allmän konsumption.
Om du använder denna behöver du implementera logiken själv:

```diff
-if (isRadiobuttonOrCheckbox(element)) {
+if (element instanceof HTMLElement && ["radio", "checkbox"].includes(element.type)) {
     /* ... */
 }
```

### `setCookie()`

Funktionen `setCookie(..)` tar inte längre den deprekerade parametern `timeLimitMillis`.
Använd `timeLimitSeconds` istället.

### Polyfill

Den deprekerade entrypointen `@fkui/logic/lib/polyfills` är borttagen och ersatt med `@fkui/logic/polyfills`.

```diff
-import "@fkui/logic/lib/polyfills";
+import "@fkui/logic/polyfills";
```

## `FCalendar`

Tidigare emittades eventet `change` när man ändrar månad i kalendern.
Det eventet är nu borttaget och ersatt med `v-model`.

## `FCheckboxGroup` och `FCheckboxGroupField`

Den deprekerade komponenten `FCheckboxGroup` har tagits bort och är ersatt med `FFieldset`, se separat {@link migrating-to-fieldset migreringsguide för fieldset}.

Det deprekerade aliaset `FCheckboxGroupField` har tagits bort och är ersatt med `FCheckboxField`.

## `FCrudDataset`

Tidigare emittades eventet `change` när man ändrar lägger till eller ändrar rader.
Det eventet är nu borttaget och ersatt med `v-model` alternativt de mer specifika eventen `created`, `updated` and `deleted`.

## `FDialogueTree`

Tidigare emittades eventet `change` när man ändrar val.
Det eventet är nu borttaget och ersatt med `v-model`.

## `FInteractiveTable`

Tidigare emittades eventet `update` när man ändrar vald tabellrad.
Det eventet är nu borttaget och ersatt med `v-model`.

## `FList`

Tidigare emittades eventet `update` när man ändrar valda kort.
Det eventet är nu borttaget och ersatt med `v-model`.

## `FRadioGroup` och `FRadioGroupField`

Den deprekerade komponenten `FRadioGroup` har tagits bort och är ersatt med `FFieldset`, se separat {@link migrating-to-fieldset migreringsguide för fieldset}.

Det deprekerade aliaset `FRadioGroupField` har tagits bort och är ersatt med `FRadioField`.

## FFormModal slots

De deprekerade slottarna `submit-button-text` och `cancel-button-text` är borttagna och ersatta med propen `buttons`.

Om du använder någon av dessa slottar i din modalkomponent, ersätt dem med propen enligt:

```diff
+<script setup>
+const buttons = [
+    {
+        label: "Submit",
+        event: "confirm",
+        type: "primary",
+        submitButton: true,
+    },
+    {
+        label: "Cancel",
+        event: "dismiss",
+        type: "secondary",
+        submitButton: false,
+    },
+];
+</script>

 <template>
-    <f-form-modal>
+    <f-form-modal :buttons></f-form-modal>
-        <template #submit-button-text> Submit </template>
-        <template #cancel-button-text> Cancel </template>
    </f-form-modal>
</template>
```

Om du använder {@link form-modal `formModal(..)`} (rekommenderat) för att anropa modalen behövs inga ändringar.

Om du använder template-syntax för att anropa `FFormModal` direkt och använder någon av dessa slottar ersätt med propen likt en modalkomponent ovan.

## `FPageHeader` skiplink

Den deprekerade propen `skipLinkHref` är borttagen och ersatt med propen `skipLink`.

```diff
-<f-page-header skip-link skip-link-href="awesome-id">
+<f-page-header skip-link="awesome-id">
```

`skipLink` kunde tidigare ta ett `boolean` värde för att stänga av/på skiplink funktionen men accepterar nu bara en sträng (id på elementet att hoppa till).
Om du behöver stänga av/på skiplink dynamiskt sätt värdet till tom sträng `""` för att stänga av.

## `FModal` deprekerade CSS-klasser

De deprekerade CSS klasserna `modal__dialog-container-large` och `modal__dialog-container-fullscreen` är borttagna.
Detta påverkar endast dig som använder stylingen direkt, använder man `@fkui/vue` komponenten `FModal` påverkas man inte.
Klasserna är ersatta med `modal__dialog-container--large` respektive `modal__dialog-container--fullscreen`.

```diff
-<div class="modal__dialog-container modal__dialog-container-large">
+<div class="modal__dialog-container modal__dialog-container--large">
```

## `getTextFromScopedSlot`

Den deprekerade funktionen `getTextFromScopedSlot(..)` har tagits bort och är ersatt med {@link renderSlotText `renderSlotText(..)`}.

```diff
-const textContent = getTextFromScopedSlot(slot);
+const textContent = renderSlotText(slot);
```

::: warning

Tänk på att `renderSlotText(..)` returnerar `null` om slotten inte finns eller är tom till skillnad från `getTextFromScopedSlot(..)` som returnerar en tom sträng `""` istället.

:::

## `FKUIConfig.modalTarget` och `FKUIConfig.popupTarget`

De deprekerade egenskaperna `FKUIConfig.modalTarget` och `FKUIConfig.popupTarget` är borttagna och ersatta med den kombinerade `FKUIConfig.teleportTarget`.

```diff
 import { config } from "@fkui/vue";

-config.modalTarget = "my > selector";
-config.popupTarget = "my > selector";
+config.teleportTarget = "my > selector";
```

## `FForm`, `FFormStep` och `FFormStepButton`

De deprekerade komponenterna `FForm`, `FFormStep` och `FFormStepButton` har tagits bort.
Som ersättare till `FForm` finns `FWizard` alternativt `FValidationForm`, val av ersättare beror på applikationens komplexitet och utförande. Det är troligt att applikationen behöver ny design, då komponenterna inte är en direkt ersättare av `FForm`.

Se dokumentationen för respektive komponent för att avgöra vad som passar bäst:

- {@link FWizard}
- {@link FValidationForm}

## `FTextField`

Eventet `update` emittas inte längre.
Använd `change` eventet eller `v-model` istället.

```diff
-<f-text-field @update="doSomething">
+<f-text-field @change="doSomething">
```

## Pageobjects

### Paketnamn

```diff
-import { ... } from "@fkui/vue/pageobject"
+import { ... } from "@fkui/vue/cypress"
```

Använder du TypeScript med Cypress behöver du sätta två inställningar i din `cypress/tsconfig.json`:

```json name=tsconfig.json.orig hidden
{
    "compilerOptions": {
        "target": "es6",
        "lib": ["es6", "dom"],
        "types": ["cypress", "node"]
    },
    "include": ["**/*.ts"]
}
```

```json compare=tsconfig.json.orig
{
    "compilerOptions": {
        "module": "node16",
        "moduleResolution": "node16",
        "target": "es6",
        "lib": ["es6", "dom"],
        "types": ["cypress", "node"]
    },
    "include": ["**/*.ts"]
}
```

### `trimmedText()` metoden

Den deprekerade `trimmedText()` metoden är borttagen från samtliga pageobjekt.
Ej att förväxla med tredjeparts kommando/assertion med samma namn som med fördel kan användas som ersättare.

Som förslag till ersättare kan någon av följande tekniker användas:

- `cy.get(..).should("have.text", "...")` - givet att det inte finns inledande eller efterföljande whitespace kan native `have.text` användas.
- `cy.get(..).should("contain.text", "...")` - givet att du testar hela textens innehåll kan native `contain.text` användas.
- `cy.get(..).should("trimmedText", "...")` - tredjeparts assertion som tillhandhåller motsvarande (och buggfri) lösning kan användas.

Specifikt, för varje pageobjekt kan `.trimmedText().should(..)` ersättas med:

- För `FBadgePageObject` ersätt med `.el().should(..)`.-
- För `FCheckboxFieldPageObject` ersätt med `.label().should(..)`.
- För `FLabelPageObject` ersätt med `.el().should(..)`
- För `FRadioFieldPageObject` ersätt med `.label().should(..)`.
- För `FSelectFieldPageObject` ersätt med `.selectedOption().should(..)`.

### `FLoaderPageobject.loader()` metoden

Den deprekerade metoden `FLoaderPageobject.loader()` är borttagen.
Då metoden inte fungerar i normalfallet finns ingen direkt ersättare, om man använder metoden så ska man rätta sin selector och använda `.el()`.

```diff
-const loader = new FLoaderPageObject("#parent-element");
-loader.loader().should("be.visible");
+const loader = new FLoaderPageObject("#loader-element");
+loader.el().should("be.visible");
```

### `FMessageBoxPageObject`

De deprekerade metoderna `FMessageBoxPageObject.title()` och `FMessageBoxPageObject.body()` är borttagna.
Eftersom innehållet i meddelanderutan slottas in finns ingen direkt ersättare utan får antingen använda `.content()` för att hämta ut hela innehållet i slotten eller använda en egen selector.

```diff
-messagebox.title().should("have.text", "..");
+messagebox.content().should("contain.text", "..");
```

### `FNavigationMenuPageobject.menu()` metoden

Den deprekerade metoden `FNavigationMenuPageobject.menu()` är borttagen och ersatt med direkta metoder på `FNavigationMenuPageobject`.

```diff
-nav.menu().item(0).click();
+nav.item(0).click();
```

### `FTooltipPageObject.content()` methoden

Den deprekerade metoden `FTooltipPageObject.content()` har tagits bort och är ersatt med direkta metoder på `FTooltipPageObject`.

```diff
-tooltip.content().closeButtonTop().click();
+tooltip.closeButton().click();
```

```diff
-tooltip.content().closeButtonBottom().click();
+tooltip.closeButton().click();
```

```diff
-tooltip.content().heading().should("have.text", "Lorem ipsum");
+tooltip.heading().should("have.text", "Lorem ipsum");
```

```diff
-tooltip.content().brodtext().should("have.text", "Lorem ipsum");
+tooltip.body().should("have.text", "Lorem ipsum");
```

::: warning Notera

Både `closeButtonBottom()` och `closeButtonTop()` är ersatt med `closeButton()` då det inte längre finns två separata knappar.

:::

## ValidationService

### Validator `personnummer`

Den deprekerade validatorn `personnummer` är borttagen och ersätts med validatorerna {@link validators#personnummer_format_personnummerformat `personnummerFormat`} och {@link validators#personnummer_checksumma_personnummerluhn `personnummerLuhn`}.

```diff
    <f-text-field
        v-model="personnummerModel"
-       v-validation.personnummer
+       v-validation.personnummerFormat.personnummerLuhn
    >
```

## Tillämpnings-specifika leverabler borttagna

FKUI tillhandahåller istället standardleverabler för tema, design.
Som konsument finns det möjlighet att själv tillhandahålla specifika tillämpningar.

````diff
@import "@fkui/design/src/fkui-int";
@import "@fkui/css-variables/dist/fkui-int-css-variables";

```diff
-@use "@fkui/css-variables/dist/fkui-int-css-variables";
+@use "@fkui/theme-default/dist/fkui-css-variables";

-@use "@fkui/design/src/fkui-int";
+@use "@fkui/design/src/fkui";
````

### Deprekerade CSS-variabler exluderade från standardtema

Möjlighet finns att importera separat vid behov.

```scss nocompile
@use "@fkui/theme-default/src/deprecated-css-variables" as *;

:root {
    @include deprecated-variables;
}
```

## Formatbeskrivning på etikett

Använder du formatbeskrivning på {@link FLabel} eller en komponent som nyttjar den (exempelvis {@link FTextField} måste du ändra namnet på bindings:

```diff
 <f-text-field>
-    <template #description="{ discreteDescriptionClass }">
-        <span :class="discreteDescriptionClass"> Formatbeskrivning </span>
+    <template #description="{ formatDescriptionClass }">
+        <span :class="formatDescriptionClass"> Formatbeskrivning </span>
     </template>
 </f-text-field>
```

Det gamla namnet fortsätter att fungera på obestämd tid.

Klassnamnet för formatbeskrivning på etikett är ändrat.

```diff
-<div class="label__description--discrete">
+<div class="label__description--format">
```

`FLabelPageObject` metoden är också ändrad att matcha:

```diff
-label.discreteDescription().should("have.text", "...");
+label.formatDescription().should("have.text", "...");
```
