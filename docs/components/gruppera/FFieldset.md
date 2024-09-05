---
title: Fältgruppering
status: Produktionsklar
layout: component
component: FFieldset
---

Använd komponenten fältgruppering för att gruppera och knyta ihop flera
inmatningskomponenter semantiskt och ge dem en gemensam etikett.

Gruppera bara några få inmatningskomponenter som hör ihop tydligt under en fråga eller rubrik.

```import
CrossValidateDates.vue
```

Fältgruppering en är [fieldset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset) med en
[legend](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend).

## Skärmläsaranvändare

Fältgrupperingens etikett läses upp av skärmläsaren när användaren tabbar till en komponent i gruppen.
Detta ska jämföras med rubriker som bara läses upp om piltangenterna används för att stega sidans
innehåll.

## Nästla inte

Placera inte en fältgruppering i en annan fältgruppering. Skärmläsare läser inte upp när en fältgruppering slutar.
När en fältgruppering placeras i en annan fältgruppering kommer skärmläsaren inte heller läsa upp
vilken etikett den yttre fältgrupperingen har. Därmed får användaren inte tillräckligt med
information för att avgöra i vilket sammanhang som en komponent är placerad.

## Copy

Fältgruppering ger möjlighet att använda en etikett som inte behöver
upprepas för varje inmatningskomponent. Se exemplet med från- och till-datum.

Vi återkommer med detaljer kring copy.

## Exempel

Fältgruppering används alltid för att gruppera {@link FRadioField radioknappar} och
{@link FCheckboxField kryssrutor}. Fältgrupperingen styr om radioknappar ska visas
horisontellt eller om radioknappar eller kryssrutor ska visas som {@link chip chip}.

### Rekommenderade attribut

```import
FFieldsetDefault.vue
```

### Radioknappar

```import
FFieldsetRadioButtons.vue
```

### Horisontella radioknappar

```import
FFieldsetRadioButtonsHorizontal.vue
```

### Checkboxar

```import
FFieldsetCheckbox.vue
```

## API

:::api
vue:FFieldset
:::
