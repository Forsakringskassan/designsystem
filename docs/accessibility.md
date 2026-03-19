---
title: Tillgänglighets&shy;redogörelse
name: accessibility
layout: pattern
visible: false
---

## Tillgänglighet för webbplats

Det här är tillgänglighetsredogörelsen för webbplatsen Försäkringskassans designsystem, designsystem.forsakringskassan.se.
Vi vill att så många som möjligt ska kunna använda den. Här beskriver vi hur webbplatsen uppfyller lagen om tillgänglighet till digital offentlig service.
Vi beskriver också eventuella kända tillgänglighetsproblem och hur du kan rapportera brister till oss så att vi kan åtgärda dem.

### Hur tillgänglig är webbplatsen?

Vi är medvetna om att delar av webbplatsen Försäkringskassans designsystem inte är helt tillgängliga.
I avsnittet {@link accessibility#overgripande_brister_pa_webbplatsen Övergripande brister på webbplatsen} listar vi brister i tillgänglighet som är kända just nu.

### Kontakta oss om du hittar fler brister

Vi strävar hela tiden efter att förbättra webbplatsens tillgänglighet.
Om du upptäcker problem som inte är beskrivna på den här sidan, eller om du anser att vi inte uppfyller lagens krav, meddela oss så att vi får veta att problemet finns.

designsystem@forsakringskassan.se

### Kontakta tillsynsmyndigheten

Myndigheten för digital förvaltning har ansvaret för tillsyn för lagen om tillgänglighet till digital offentlig service.
Om du inte är nöjd med hur vi hanterar dina synpunkter kan du kontakta [Myndigheten för digital förvaltning](https://www.digg.se/) och berätta det.

### Teknisk information om webbplatsens tillgänglighet

Den här webbplatsen är delvis förenlig med lagen om tillgänglighet till digital offentlig service, på grund av de brister som beskrivs nedan.

#### Övergripande brister på webbplatsen

- Webbplatsen respekterar inte användarens webbläsarinställningar för färger (ljust/mörkt tema) och teckenstorlek.
- Webbplatsens layout är inte tillräckligt följsam (responsiv) utan webbplatsen sätter sidans minimibredd till 400px.
  Vid vybredden 320px blir det scrollning både vertikalt och horisontellt (vilket motsvarar 1280px vid 400 % zoom).
  En del tabeller är inte heller tillräckligt följsamma.
- Det saknas en länk för att hoppa förbi de återkommande interaktiva elementen i sidhuvudet.
  Användare som navigerar sekventiellt behöver trycka flera gånger på Tabb-tangenten på varje sida för att komma till huvudinnehållet.
- Webbplatsen tar inte hänsyn till användarens inställning av så kallade "högkontrastläget" (forced colours mode).
  I detta läge syns fokus-markeringen inte alls för länkar, radioknappar, kryssrutor och vissa knappar.
  För radiogrupper syns inte heller markeringen av det valda alternativet.
- Många sidor innehåller block med programkod eller annat formaterat innehåll.
  Dessa block är fokuserbara (med tabindex=0), men saknar synlig fokusmarkering.
- Webbplatsen innehåller ord och fraser på engelska, men språk-ändringen är inte maskinläsbart angiven.
  En skärmläsare kommer därför att läsa upp den engelska texten med svensk talsyntes, vilket gör den svår att uppfatta.
- En del informationsbärande bilder saknar textalternativ vilket gör att informationen inte når användare med skärmläsare.

Vi arbetar med att kontinuerligt förbättra webbplatsen och åtgärda de brister som finns.

### Hur vi testat webbplatsen

Vi har anlitat ett externt företag specialicerat på tillgänglighet för granskning av Designsystemet.
Syftet med granskningen var att kartlägga de brister vi har för att få ett så tillgängligt designsystem som möjligt.
Granskningen omfattade alla sidor som ingår i Designsystemet förutom de som ligger under "Utveckla" i menyn, då dessa främst består av kodexempel.

Den senaste bedömningen gjordes den 21 oktober 2024.

Webbplatsen publicerades den 5 september 2024.

Redogörelsen uppdaterades senast den 28 oktober 2024.
