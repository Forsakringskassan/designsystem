---
title: Releaseplan
name: release-plan
layout: pattern
---

| Version       | Status    | Releasedatum | Slutdatum för support | Innehåll                                        |
| ------------- | --------- | ------------ | --------------------- | ----------------------------------------------- |
| v3            | utgått    | 2021-10      | 2023-09               |                                                 |
| v4            | underhåll | 2022-09      | 2024-09               | Internet Explorer 11 stöds inte längre.         |
| v5            | aktiv     | 2023-09      |                       | Uppgradering till Vue 3, FDatepicker borttagen. |
| Nästa release |           |              |                       | Pågående planering. FForm, FFormStep tas bort   |

-   Status: En release kan ha status aktiv, underhåll och utgått.
    Vi släpper ny funktionalitet och fixar buggar i release med status aktiv.
    För release med status underhåll fixar vi endast kritiska buggar.
    Vanligtvis fixar vi kritiska buggar upp till ett år efter att ny release är släppt.
    Releaser med status utgått stödjer vi inte längre och inga uppdateringar sker i releasen.
-   Deprekering: Förvarning om att komponent eller funktion kommer tas bort. Det sker cirka ett år efter att en komponent eller funktion blivit deprekerad.
-   Borttagna komponenter: När komponenter tas bort kommer det finnas en rekommenderad ersättningskomponent tillsammans med en migreringsguide.
