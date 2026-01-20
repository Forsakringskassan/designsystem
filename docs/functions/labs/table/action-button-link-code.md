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
Kolumnens typ ska sättas till `button`.

Läs mer om hur du sätter upp kolumntyp {@link FSortFilterDataset `button`}.

// plats för kodexempel

Om etiketten ska vara synlig använder du propen `label`. En `<span>` med sr-only kan användas för att ge ytterligare kontext till skärmläsare:

// plats för kodexempel

## Länkar

Länkar i tabell använder `table__anchor`-klassen:

Kolumnens typ ska sättas till

// plats för kodexempel
