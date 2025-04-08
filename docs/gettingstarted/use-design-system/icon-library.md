---
title: Skapa eget ikonbibliotek
name: icon-library
layout: pattern
sortorder: 4
---

Om du behöver andra ikoner utöver de standardikoner som finns kan du ändra på befintliga ikoner eller lägga till nya. Du bygger då ett nytt ikonbibliotek.

## Skapa eget ikonbibliotek

Använd skriptet i `@fkui/icon-lib-builder` för att bygga ett ikonbibliotek.

Börja med att installera skriptet {@link contributing-developers#Kommandon kommando för installation}.

Lägg därefter till de ikoner du vill ska ingå i en katalog "icons".
Strukturera ikonerna i underkataloger för varje önskat bibliotek, till exempel `./icons/f`.

Bygg ikonbiblioteket genom att skriva

```bash
fkui-icon-lib-build
```

## Använd i projekt

{@link getting-started-application#importera-ikonbibliotek Läs mer om hur du använder ikoner i din applikation}

### Rendera ut ikon

Ikoner renderas sedan genom följande markup:

```html static
<svg focusable="false">
    <use href="#f-icon-pen"></use>
</svg>
```

## Riktlinjer för ikoner

- 512x512 viewbox (`viewBox="0 0 512 512"`)

### Ändra skala på ikoner

1. Ändra `viewBox` och ta bort eventuella `x`-, `y`-, `width`- och `height`-attribut.
2. Wrappa innehållet i en `<g>` om det inte redan finns en.
3. Sätt `class=""` på `path`,`circle` och `rect` och döp det efter vad objektet är.
4. Lägg till `transform=""` på `<g>` och applicera transformationer:
    - `translate(x y)` för att flytta på innehållet.
    - `scale(x)` för att skala ikonen.
    - Exempelvis skriver du `transform="translate(5 -8) scale(5)"` för att flytta ikonen 5 enheter till höger, 8 enheter uppåt och därefter skala 5x.
    - Tänk på att ordningen på transformationer spelar roll (translate före scale ger inte samma resultat som scale före translate).
5. Kör `svgo -i my-icon.svg -o test.svg` och verifiera att resultatet är korrekt.

### Ändra färg på ikoner

En ikon ska alltid ha en standardfärg som stylas via attributet `color`.
Detta uppnås genom att ett eller flera av dess element har `fill`/`stroke`-attribut satta tilll currentColor.

Det kan vara möjligt att ändra på flera färger utöver standardfärgen på en ikon genom att använda attributen `fill` och `stroke`.
För att ta reda på vilket attribut som gäller behöver du gå in i ikonen och se hur den är definierad.
