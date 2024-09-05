---
title: Fellista
status: Produktionsklar
layout: component
component: FErrorList
---

Fellista används för att sammanställa inmatningsfel i stora formulär.

```import
FErrorListBullets.vue
```

-   Fellistan ska visas och få fokus när användaren försöker att skicka in ett formulär med fel.
-   Rubriken är valfri, men rekommenderas eftersom den visar en ikon som kompletterar varningsfärgen på texten.
-   Punktlistan består av länkar till inmatningskomponenter som är felaktigt ifyllda och till obligatoriska fält som har lämnats tomma.
-   Rubriken samt feltexterna bestäms av applikationen.
-   Om en inmatningskomponent är placerad i en utfällbar yta (t.ex. en Expanderbar panel) kan den fällas ut automatiskt när användaren trycker på länken till felet.

## Lista utan punkter

```import
FErrorListNoBullets.vue
```

## Ingen rubriktext

Varken ikon eller text visas om du inte använder `title` -slotten.

```import
FErrorListNoTitle.vue
```

## Lista utan länkar

```import
FErrorListNoLinks.vue
```

## Expandera en yta vid klick på länk

```import
FErrorListBeforeNavigate.vue
```

## API

:::api
vue:FErrorList
:::
