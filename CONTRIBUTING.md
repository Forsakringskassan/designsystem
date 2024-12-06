# Bidra till designsystemet

:::alt contributing-alt

Du kan bidra till designsystemet på många sätt. Läs igenom guiden nedan innan du sätter igång.

Du kan bidra med följande:

- kontakta FKDS-teamet (<designsystem@forsakringskassan.se>) och se vad du kan hjälpa till med
- föreslå ny komponent, funktionalitet, mönster eller uppdatera designsystemets webbplats
- ge förbättringsförslag, rapportera och fixa buggar
- lägga en pull request.

## Uppdatera dokumentation

Kontakta FKDS-teamet eller lägg en pull request.

## Föreslå ett nytt mönster

Kontakta FKDS-teamet om du saknar ett mönster eller vill ändra på något.
Du kan också lägga en pull request.

## Ny komponent eller funktionalitet

Varje komponent som läggs till designsystemet består av tre delar:

- design
- dokumentation
- kod

Du kan bidra i vilken del som helst, men alla tre delarna måste vara implementerade och validerade innan en komponent kan släppas.
Kontakta FKDS-teamet innan du påbörjar arbetet.

### Design

Komponent eller ny funktionalitet ska följa våra grafiska riktlinjer (färgpalett, ikoner och typografi) och mönster.
Den ska också uppfylla krav på tillgänglighet som till exemepel kontrast.
Riktlinjer och mönster för komponenten beskrivs på den här webbplatsen.

### Dokumentation

Användardokumentationen behöver uppdateras vid ny eller ändrad komponent/funktionalitet.
Användardokumentationen ligger på den här webbplatsen och kan bestå av beskrivning, live-exempel, riktlinjer, designmönster och API.
All dokumentation på webbplatsen ska vara på svenska.
Undantag är referenser till koden.

### Kod

Vi förväntar oss följande när du bidrar med kod till designsystemet

- logik ska läggas i FKUI:s logik-paket
- komponenter ska läggas i FKUI:s vue-paket
- all kod har automatiska testfall
- api-dokumentation (slots, props & events) uppdateras
- cypress-tester där det är relevant
- skärmdumpar (screenshots) vid behov

#### Verktyg

Beroende på vad du vill bidra med behöver du tillgång till GitHub.

#### Lägga en pull request

Lägg upp din pull request mot master. Alla pull requests är välkomna.
Om din pull request inte är redo för granskning, skapa istället en draft pull request.

För att kunna göra ändringar i FKUI i din utvecklingsmiljö behöver du göra följande

1. Klona FKUI-repo
2. Sätt upp din utvecklingsmiljö
3. Skapa en branch där du kan göra dina ändringar.<br> Branchnamn ska börja med feature/bugfix/docs. Dela gärna upp större ändringar i mindre delar, vilket ibland kräver att du har flera pull requests.<br> Kom ihåg att använda korta och beskrivande commit-meddelande.

- feature - om du tänker ändra API eller lägga till ny funktionalitet
- bugfix - om du tänker göra en kodändring för att lösa ett problem
- docs - om du tänker uppdatera dokumentation.

4. Om dina kodändringar behöver testas, lägg till testfall. Lägg till de enhetstester, komponenttester och e2e-tester som är relevanta, se mer under avsnitt Test.
5. Kontrollera att dina ändringar följer krav på vad som är tillåtet att publicera för kod och dokumentation, se {@link checklist-publication checklista}.
6. Lägg din pull request i GitHub.<br> Försäkra dig om att inget liknande arbete pågår för att förhindra överlappande arbete.
7. FKDS-teamet kommer granska din pull request och återkoppla. Vi granskar utifrån följande kriterier

- tillgänglighet
- användbarhet
- grafisk profil
- funktion och prestanda
- säkerhet
- lätt att underhålla.

{@link contributing-developers Läs mer om kommandon, commits och release-hanteringen i FKUI}

#### Test

Vi har enhetstester, komponenttester och E2E-tester i FKUI.

Enhetstester med jest-tester

- logik
- events
- props
- regler för HTML-validate.

Komponenttester med cypress-tester

- enskilda komponenter
- interaktion med komponenten.

E2E-tester med cypress-tester

- interaktion mellan flera komponenter
- exempel i dokumentation.

Undvik större mängder av mockning för enkelhetens skull och test av implementationsdetaljer.
Testa till exempel hellre att en komponent inte är synlig än att funktionen `hideComponent` används.
På så sätt undviker vi "false negatives" om vi skulle ändra namnet på funktionen eller "false positives" om funktionen går sönder och inte döljer komponenten.

Försäkra dig om att testfallen och regressionstesterna går igenom. Kom ihåg att lägga till uppdaterade skärmdumpar (screenshots).
Eftersom FKUI stödjer responsivitet uppmuntrar vi till test av varierande skärmstorlekar på olika enheter och webbläsare.

Du hittar åtgärder som du kan göra i GitBash och tillhörande kommando i tabellen nedan.

| Åtgärd                    | Kommando i GitBash      |
| ------------------------- | ----------------------- |
| köra snapshot-test        | npm test                |
| uppdatera snapshot i jest | npm run vue unit -- - u |
| köra cypress-test         | npm exec cypress run    |

{@link testing Läs mer om test här}

## Buggar och förbättringsförslag

Du kan rapportera buggar genom att följa instruktionen på sidan {@link help-and-support#rapportera_buggar# Hjälp och support}.
Vi ser gärna att du och ditt team bidrar genom att lösa de buggar ni själva hittar.
Du behöver inte kontakta FKDS-teamet utan lägg en pull request direkt.

## Relaterat

{@link help-and-support Hjälp och support}

{@link getting-started Kom igång}
:::
