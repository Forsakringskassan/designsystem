---
title: Bricka
status: Produktionsklar
layout: component
component: FBadge
---

Använd en bricka när något kan ha olika status eller när du vill markera något som extra viktigt. Till exempel om ett ärende är klart eller om ett meddelande är oläst.

Tänk på att det blir svårare för användarna med många olika statusar. Begränsa användningen och fundera på vilken status som är verkligt viktig för användarna. Om något bara kan ha två statusar kan det vara bättre att bara markera den ena med en bricka medan avsaknad av bricka representerar den andra statusen.

```import live-example
FBadgeLiveExample.vue
```

## Tänk på att

- Blanda inte standard med inverterade i samma färg på samma sida.
- Placera inte en bricka tillsammans med knappar.

## Copy

- Enbart färg kan inte förmedla innehållet, det är texten som bär budskapet.
- Var försiktig med att använda verb (eller samma formuleringar som knappar) eftersom en bricka inte ska kännas som en knapp.
- Brickor ska ha en kort beskrivande text, se exemplen.
- Se alltid till kontexten när du ska skriva en text till en bricka. Använd samma ord för samma saker. Om vi till exempel undviker ordet "handlägga" i en närliggande vy ska det inte användas på en bricka.
- Undvik upprepningar så att brickan och andra texter runt omkring (rubriker, brödtext) inte säger samma sak.

### Exempel på texter till brickor:

- Sekretess
- Klar
- Inte påbörjad
- Nytt
- Oläst
- Väntar på signering
- Preliminär
- Godkänd

## API

:::api
vue:FBadge
:::

## Relaterat

- {@link FBadgePageObject FBadgePageObject}
