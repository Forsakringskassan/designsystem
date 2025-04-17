---
title: Steg för steg-guide
status: Produktionsklar
layout: component
component:
    - FWizard
    - FWizardStep
---

Steg för steg-guide används för att dela upp en uppgift i några få steg som passar bra att hantera i en viss ordning.

```import test-id=default
FWizardExampleDefault.vue
```

Använd steg för steg för att dela upp en större uppgift som användaren ska utföra. Då kan användaren fokusera på en sak i taget istället för att bli överöst med information och val.

- Använd så få steg som möjligt, helst inte fler än 5 eller 6.
- Ett steg ska innehålla en eller några få enkla val eller kortfattad information.
- Antalet steg ska vara fast och inte ändras beroende på val användaren gör i ett steg.
- Rubrikerna för stegen måste följa korrekt rubriknivå för sidan.
- Om ett steg innehåller ett formulär måste det vara komplett och rätt ifyllt innan användaren tillåtas att fortsätta till nästa steg.

## Stegens storlek och omfattning

Ett steg ska innehålla en eller några få enkla val eller kortfattad information. Fokusera på en huvudfråga eller ett tydligt område. Ett steg bör ha en kort och konkret rubrik.

Innehåll och frågor som inte passar under en och samma rubrik ska inte placeras i samma steg. Om innehållet i ett steg behöver delas upp med underrubriker bör du antagligen dela upp steget i flera steg.

## När steg för steg inte passar

- När uppgifterna vi presenterar inte har en naturlig följd.
- När vi har väldigt omfattande uppgifter som resulterar i många och långa steg.
- När något av stegen tar väldigt lång tid att fylla i, i kombination med att steget blir omfattande, till exempel att användarens val skapar långa listor eller tabeller.

## Copyriktlinjer

### Stegrubriker

- Syftar i första hand till att hjälpa till att dela in flödet i mindre delar.
- Ska ha relevant copy men inte bära hela innehållet i delen - det gör till exempel etikettrubrikerna om ett steg innehåller ett formulär.
- Ska ge användaren en snabb översikt över det enskilda steget och även en tydlig översikt över flödet.
- Ska vara så kortfattade som möjligt.
- Bör bestå av konkreta substantiv som till exempel Dagar, Bostad, Sjukdom och symtom.
- ”Kompletterande uppgifter” och ”Övrigt” ska undvikas. Om det är svårt att skriva en lämplig rubrik på grund av att innehållet spretar bör du se över indelningen i steg.

### Knapptexter

- Standardtexten på primärknappen är Fortsätt, men det går att sätta en text på primärknappen i varje steg (next-button-text).
- Standardtexten på sekundärknappen är Avbryt, men det går att sätta en text på sekundärknappen i varje steg (cancel-button-text).

## För utvecklare

En guide består av `<f-wizard>` och en eller fler guidesteg `<f-wizard-step>`.

```html static
<f-wizard header-tag="h2">
    <f-wizard-step key="unique-identifier" title="Beskrivande titel">
        <template #default>Innehåll</template>
    </f-wizard-step>
</f-wizard>
```

Inmatningsfälten valideras redan med vanlig validering, men om du behöver utföra extra validering (manuella steg, korsvalidering eller validering på backend osv) så kan du använda beforeSubmit:

```html static
<f-wizard header-tag="h1">
    <f-wizard-step
        key="step1"
        title="STEP1"
        :before-next="onBeforeNext"
    ></f-wizard-step>
</f-wizard>
```

Notera att det är metoden `onBeforeNext` som ska skickas in i sin helhelt, anropa inte metoden med `:before-next="onBeforeNext()"`.
I `onBeforeNext` har du möjlighet att sätta nya valideringsfel på inmatningsfält:

```ts
import { ValidationService } from "@fkui/logic";
import { getElementFromVueRef } from "@fkui/vue";
import { defineComponent } from "vue";

defineComponent({
    data() {
        return {
            showErrorMessage: false,
        };
    },
    methods: {
        /* --- cut above --- */

        onBeforeNext(): void {
            const myField = getElementFromVueRef(this.$refs.myField);
            ValidationService.setError(myField, "This value is invalid!");
        },

        /* --- cut below --- */
    },
});
```

Vi rekommenderar att alla fel är kopplade till ett specifikt inmatningsfält men om du istället vill avbryta inskicket och presentera ett fel med exempelvis en meddeladeruta kan du returnera `FWizardStepAction.CANCEL` från `onBeforeNext`:

```ts
import { FWizardStepAction } from "@fkui/vue";
import { defineComponent } from "vue";

defineComponent({
    data() {
        return {
            showErrorMessage: false,
        };
    },
    methods: {
        /* --- cut above --- */

        onBeforeNext(): FWizardStepAction {
            this.showErrorMessage = true;
            return FWizardStepAction.CANCEL;
        },

        /* --- cut below --- */
    },
});
```

### Lägga till steg dynamiskt

```import test-id=add-step
FWizardExampleAddStep.vue
```

## Props, Events & Slots

### FWizard

:::api
vue:FWizard
:::

### FWizardStep

:::api
vue:FWizardStep
:::
