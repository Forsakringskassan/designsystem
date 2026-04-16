# Kompletterande funktionalitet för datamängsredigeraren (`f-sort-filter-dataset`)

f-sort-filter-dataset får en ny prop mode som kan sättas till lazy, vilket innebär:
- ingen omsortering sker vid editering av data
- nya rader läggs till på slutet, vid paginering så går till sista sidan
- då användare sorterar eller filtrerar körs allting om på nytt, vid paginering så går till första sidan
- f-sort-filter-dataset får även en ny metod refresh() kopplad till lazy-beteendet som exponeras via api. Den kör om allting på nytt och går till första sidan vid paginering.

f-pagination injectar sortFilterDatasetEvents med metoder onRefresh (hoppar till första sidan) och onLazyRowsAdded (hoppar till sista sidan)

f-table injectar också sortFilterDatasetEvents onRefresh (tömmer selectedRows)

## Exempel tabell ihop med datamängsredigerare som har `mode`="lazy"

Given att tabellen är sorterad på kolumnen "namn"
When användaren redigerar en rads namn som _skulle_ påverka sorteringsordningen
Then sker ingen omsortering

### Fler användarexempel

#### Exempel 2: Lägg till ny rad i sorterad tabell med paginering

Given att tabellen är sorterad på kolumnen "namn" och användaren står på sida 2 av 5
When användaren lägger till en ny rad
Then hoppar tabellen till sista sidan och den nya raden visas sist utan direkt omsortering av övriga rader

#### Exempel 3: Filtrera efter flera inline-editeringar

Given att användaren redigerar flera rader så att vissa nu matchar ett filter på kolumnen "status"
When användaren aktiverar filtret
Then körs sortering och filtrering om, och vid paginering hoppar tabellen till första sidan

#### Exempel 4: Manuell refresh efter batch-uppdatering

Given att användaren har gjort många inline-editeringar i följd
When användaren klickar på en knapp som anropar `refresh()`
Then beräknas datamängden om utifrån aktuell sortering och filtrering, och vid paginering hoppar tabellen till första sidan

#### Exempel 5: Valda rader nollställs vid refresh

Given att användaren har markerat flera rader i tabellen
When användaren anropar `refresh()` efter att ha uppdaterat data
Then går tabellen till första sidan vid paginering och eventuella markerade rader töms i f-table

#### Exempel 6: Sortering triggar omberäkning efter redigering

Given att användaren har redigerat en cell i kolumnen "prioritet" och raden ligger kvar på sin plats
When användaren klickar på kolumnrubriken "prioritet" för att sortera
Then sorteras hela datamängden om och tabellen går till första sidan vid paginering

