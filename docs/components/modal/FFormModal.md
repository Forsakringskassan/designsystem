---
title: Formulärsmodal
status: Produktionsklar
layout: component
component: FFormModal
---

Formulärsmodal är en standardmodal som kan presentera formulärsfält och hantera validering.

Formulärsmodalen baseras på en modal dialogruta av typen standard och visas i fullskärm i mobil (<640px).

Modalen har alltid en primärknapp för submit och en sekundärknapp för att avbryta och ångra. Alla fält valideras när användaren trycker på primärknappen.

-   Använd inte formulärsmodaler till stora formulär, begränsa formuläret till några få komponenter och undvik flerradiga inmatningsfält.
-   Öppna inte ytterligare modaler från en modal.

## Användning med template

```import
FFormModalExample.vue
```

## Användning med API

```import
FFormModalApiExample.vue
```

## Formulärsmodal med flera knappar

Komponenten har en prop `buttons` som styr vilka knappar som finns i modalens sidfot.
Med den kan du ta bort existerande knappar eller använda en helt egen uppsättning.

**Med API:**

```ts
const formdata = await formModal(this, MyAwesomeModal, {
    props: {
        buttons: [
            /* ... */
        ],
    },
});
```

`buttons` är en lista av typen `FModalButtonDescriptor`:

```ts
export interface FModalButtonDescriptor {
    label: string;
    screenreader?: string;
    event?: string;
    reason?: string;
    type: "primary" | "secondary";
    submitButton?: boolean;
}
```

```ts
buttons: [{ label: "Stäng", event: "dismiss" }];
```

Två event har speciell innebörd:

-   `dismiss`: stänger modalen utan att spara formulärsdata.
-   `submit`: stänger modalen och returnerar formulärsdata till anroparen.

## Skärmläsare

Du kan lägga till extra skärmläsartext på knappar med `screenreader` property:

```diff
-buttons: [{ label: "Stäng", event: "dismiss" }];
+buttons: [{ label: "Stäng", screenreader: "formuläret", event: "dismiss" }];
```

Om du använder `screenreader` för en knapp så kommer skärmläsare att läsa upp den texten efter knapptexten i `label`. Detta används för att tydliggöra vad knappen kommer att göra i de fallen där det kan vara otydligt för skärmläsaranvändare.

## Template

```import
FFormModalExampleCustomButtons.vue
```

### Validering av inmatad data

Inmatningsfälten valideras redan med vanlig validering, men om du behöver utföra extra validering (manuella steg, korsvalidering eller validering på backend och så vidare) så kan du använda beforeSubmit:

```html static
<f-form-modal
    :is-open="isOpen"
    :value="value"
    :before-submit="onBeforeSubmit"
    @submit="onSubmit"
>
</f-form-modal>
```

Notera att det är metoden `onBeforeSubmit` som ska skickas in i sin helhelt, anropa inte metoden med `:before-submit="onBeforeSubmit()"`.
I `onBeforeSubmit` har du möjlighet att sätta nya valideringsfel på inmatningsfält:

```ts
onBeforeSubmit(): Promise<void> {
    const myField = getElementFromVueRef(this.refs.myField);
    ValidationService.setError(myField, "This value is invalid!");
},
```

Vi rekommenderar att alla fel är kopplade till ett specifikt inmatningsfält men om du istället vill avbryta inskicket och presentera ett fel med exempelvis en meddeladeruta kan du returnera `FFormModalAction.CANCEL` från `onBeforeSubmit`:

```ts
onBeforeSubmit(): Promise<FFormModalAction> {
    this.showErrorMessage = true;
    return FFormModalAction.CANCEL;
},
```

## API

:::api
vue:FFormModal
:::

## Relaterat

[Modal-api](#/Utilities/form-modal)

[Modal dialogruta - FModal](#/Components/FModal)
