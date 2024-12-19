---
title: Etikett
status: Produktionsklar
layout: component
component: FLabel
---

Etikett är en utökad label och används tillsammans med inmatningskomponenter. En etikett innehåller alltid etikett-rubrik medan övriga delar ska kombineras på det mest ändamålsenliga sättet i en given situation.

```import live-example
FLabelLiveExample.vue
```

En etikett utnyttjar html-elementet label och används tillsammans med exempelvis inmatningskomponenter. En etikett innehåller alltid etikett-rubrik medan övriga delar ska kombineras på det mest ändamålsenliga sättet i en given situation.

- Etiketten är en utökad label består av fyra delar: rubrik, hjälptext, formatbeskrivning och felmeddelande.
- Hjälptexten är valfri och används för att förtydliga rubriken.
- Formatbeskrivningen är valfri och beskriver hur något ska fyllas i, exempelvis i vilket format ett personnummer eller ett datum ska fyllas i.
- Tooltip {@link FTooltip (FTooltip)} är en egen komponent som kan ge ytterligare information och hjälp om vad och hur användaren ska fylla i eller välja. Tooltip är valfri.
- Etikettens feltext används för att visa information om felaktig inmatning eller om obligatorisk information saknas.

## Obligatoriska fält

Vi markerar aldrig fält som användare måste fylla i eftersom utgångspunkten är att vi bara frågar efter information som vi verkligen behöver. Därför markerar vi istället frivilliga fält i de få fall de förekommer. Etikettrubriken till ett icke obligatoriskt fält avslutas med texten "(Frivillig)" eller "(Valfritt)".

- "Frivillig" används för formulär på fk.se
- "Valfritt" använd i internt IT-stöd.

## Copy

Texter i etiketter formuleras så att användaren förstår vilken information eller uppgift som ska fyllas i. Texterna ska vara hjälpsamma, begripliga och vänliga.

Rubrik ska alltid finnas med. Om det är möjligt ska bara rubrik användas. Hjälptexten är valfri men kan ibland behövas för att förtydliga eller förklara något för användaren. Det kan till exempel behövas om rubriken blir för lång. En rubrik kan ha ett eller flera ord. Vi skriver inte "Fyll i" i etikettrubrikerna om det inte finns något särskilt skäl. En etikettrubrik kan ofta formuleras som en fråga.

Exempel på etikettrubriker:

- Adress
- Bostadskostnad i kronor per månad
- Gäller din ansökan den här adressen?

Formatbeskrivning används bara när användaren måste fylla i ett fält på ett visst sätt eller enligt ett visst format.

I vissa fall kan en etikett behöva kompletteras med en sr-only text (för uppläsning i skärmläsare). Den ska då vara så beskrivande att den fungerar utan någon annan kontext.

Av tillgänglighetsskäl ska vi aldrig använda suffix, det vill säga en bestämning efter ett inmatningsfält (till exempel kronor). Beskriv istället vad som ska fyllas i i etikettrubriken eller etiketthjälptexten.

### Feltexter i etiketten

Vissa komponenter i Vue har en generell text som måste bytas ut. Kolla därför alltid igenom alla feltexter.

Våra feltexter ska förklara

1. vad som har gått fel
2. vad användaren behöver göra.

Punkt 1 kan uteslutas. Det viktigaste är att användaren förstår vad den måste göra för att komma vidare.

Skriv feltexter i aktiv form. Ofta passar det bra med en uppmaning (verb i imiperativ). Använd också bestämd form på substantiven.

Vi ska vara vänliga, men inte på bekostnad av utrymmer och effektivitet i texten. Användaren vill snabbt komma vidare.

Feltexter har alltid stor bokstav och punkt.

Fundera alltid på om den feltext som finns för komponenten fungerar eller om det behövs en mer specifik text för den aktuella situationen.

_Exempel på feltexter_

| Skriv hellre                                                                          | Skriv inte                             |
| ------------------------------------------------------------------------------------- | -------------------------------------- |
| Fyll i adress.                                                                        | Adress saknas.                         |
| Postnumret du har fyllt i finns inte. Fyll i ett annat postnummer.                    | Det inskrivna postnumret finns inte.   |
| Du har fyllt i ett för högt belopp. Fyll i ett belopp som är lägre än 999 999 kronor. | Beloppet får ej vara större än 999999. |

## API

:::api
vue:FLabel
:::

## Relaterat

- {@link FLabelPageObject FLabelPageObject}
- {@link FTooltip Tooltip}
