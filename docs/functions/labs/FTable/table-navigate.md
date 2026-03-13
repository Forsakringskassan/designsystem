---
title: Navigera i tabell
layout: article
search:
    terms:
        - tabell
        - tangentbord
        - tangentbordsnavigering
---

I tabellen navigerar användaren med hjälp av piltangenterna. Pilningen är inte cirkulär.
Om en cell innehåller ett interagerbart objekt som exempelvis inmatningsfält eller dropplista kommer objektet få fokus direkt.
Användaren tar sig till och från tabellen med hjälp av tabbning.
Om användaren tabbar sig ur tabellen och sedan tabbar tillbaka med hjälp av shift + tab hamnar fokus på senast besökta cell.

Exempel

## Tangentbordsnavigering

Tabellen har stöd för följande tangentbordsnavigering:

- pil upp: flyttar fokus till cell com ligger ovanför
- pil ner: flyttar fokus till cell som ligger nedanför
- högerpil: flyttar fokus till cell som ligger till höger
- vänsterpil: flyttar fokus till cell som ligger till vänster
- Home: flyttar fokus till första cellen i raden
- End: flyttar fokus till sista cellen i raden
- ctrl + Home: flyttar fokus till cell längst till vänster i översta raden
- ctrl + End: flyttar fokus till cell längst till höger i nedersta raden.

Det finns en begränsning i tabell när användaren stegar till en cell som inte är helt synlig i fönstret.
Cellen kommer få fokus, men tabellen kommer inte skrolla så att hela cellen blir synlig.
Tabellen skrollar först när användaren går till en cell som ligger helt utanför fönstret.
Detta gäller både vertikal och horisontal skroll.
