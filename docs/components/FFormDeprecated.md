---
title: Formulär
status: Deprekerad
layout: component
visible: false
component:
    - FForm
    - FFormStep
    - FFormStepButton
---

`FForm` är deprekerad.

## Migreringsguide

Som ersättare till `FForm` finns `FWizard` alternativt `FValidationForm`, val av ersättare beror på applikationens komplexitet och utförande. Det är troligt att applikationen behöver ny design, då komponenterna inte är en direkt ersättare av `FForm`.

Se dokumentationen för respektive komponent för att avgöra vad som passar bäst:

-   {@link FWizard}
-   {@link FValidationForm}

---

## Dokumentaion

Formulär används för att hålla ihop ett eller flera formulärsteg och/eller fristående komponenter.

I ett formulär med standardbeteende hanterar endast skicka (`submit()`) valideringen av alla formulärsteg och inmatningskomponenter.

Det är **rekommenderat** att använda ett formulär när någon inmatningskomponent har validering.

## Exempel

```import
FFormExample.vue
```

## Formulärsteg

I ett formulärsteg så lämnas ansvaret över till applikationskoden om vad som ska hända, i.e. om formulärsteget ska vara öppet eller stängt, vilket innehåll som ska visas med mera.

För att formulärsteget ska kunna sköta felhantering, validering och progress så krävs följande:

### Ta bort inmatningskomponenter helt

Ibland finns det behov att ta bort enskilda inmatningskomponenter från GUI:t, vanligtvis för att dessa enbart skall räknas med ifall vissa vilkor uppfylls.
T.ex. ifall kunden arbetat mer än 5 dagar så skall ett extra inmatningskomponenter för total inkomst visas och måste fyllas i.

I dessa fall använd alltid `v-if` på dessa inmatningskomponenter, t.ex FTextField, FFieldset och FCheckboxField.
Detta beror på att inmatningfälten i dessa fall måste försvinna helt från DOM:en. Annars kommer dessa att räknas med i felhantering, validering och progress.

### Dölja formulärsteg med inmatningskomponenter

Det är väldigt vanligt att vi vill kunna stänga/öppna en formulärsteg, dvs. bara dölja inmatningskomponenteren i formulärsteget.
I dessa fall skall `v-show` användas på wrapper elementet, dvs. element som innehåller inmatningskomponenter.

Detta är på grund av att inmatningskomponenter ska räknas med oavsett om deras formulärsteg är stängd eller öppen i felhantering, validering och progress.
Det vanligaste sättet att lösa detta är att lägga inmatningskomponenter innanför:

```jsx
let isOpen = true;

<div v-show="isOpen">...</div>;
```

### Avaktivera länkarna i fellistan

Ibland kan det behövas att avaktivera länkarna i FErrorList för att förhindra att länkarna öppnar ett steg som man vill hålla stängt.
Då kan man använda propen `disable-error-link` för att göra om länkarna till text.

```diff
 <f-form-step
+    disable-error-links
 ></f-form-step>
```

## Props, Events & Slots

### FForm

:::api
vue:FForm
:::

### FFormStep

:::api
vue:FFormStep
:::

### FFormStepButton

:::api
vue:FFormStepButton
:::

## Användning av komponent

**Komponent motsvarar följande HTML element:** [form](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
