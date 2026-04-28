---
title: Åtgärdsknappar och länkar i tabell (kod)
short-title: Åtgärdsknappar och länkar (kod)
layout: article
search:
    terms:
        - tabell
---

## Åtgärdsknappar

Åtgärdsknappar måste ha en etikett men etiketten behöver inte vara visuellt synlig. Etiketten behöver tydligt förklara åtgärden och kontext (exempelvis något som förklarar vilken rad som påverkas).
Sätt kolumnens typ till `button`.

{@link column-type-button Läs mer om hur du sätter upp kolumntyp `button`}.

// plats för kodexempel

Om etiketten ska vara synlig använder du propen `label`. En `<span>` med sr-only kan användas för att ge ytterligare kontext till skärmläsare:

// plats för kodexempel

## Länkar

Sätt kolumnens typ till `anchor`.

{@link column-type-anchor Läs mer om hur du sätter upp kolumntyp `anchor`}.

// plats för kodexempel

## Kontextmeny

Sätt kolumnens typs till `menu`

{@link column-type-anchor Läs mer om hur du sätter upp kolumntyp `menu`}.

## Relaterat

{@link code Kod för tabell}

{@link action-button-link Åtgärdsknappar och länkar i tabell}
