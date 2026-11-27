---
title: "Version 7 migreringsguide"
short-title: "Sammanfattning"
name: migrating-to-v7
sortorder: 1
layout: article
---

Den här guiden hjälper dig att migrera din applikation från v6 till v7.

På den här sidan finns en sammanställning och över de brytande ändringar som du behöver hantera för din applikation.
Här finns även en översikt över andra ändringar i releasen som inte är brytande.

## Brytande ändringar

### Generellt

| Ändring i                                         | Beskrivning                                             |
| :------------------------------------------------ | :------------------------------------------------------ |
| {@link migrating-to-v7-general JavaScript-ingång} | FKUI-paketen stöder nu bara ESM, inte CommonJS (CJS).   |
| {@link migrating-to-v7-general Cypress}           | Namnändringar och borttagna metoder i våra Pageobjects. |

### @fkui/design

| Ändring i                                                                                  | Beskrivning                        |
| :----------------------------------------------------------------------------------------- | :--------------------------------- |
| {@link migrating-to-v7-@fkui/design#ersattning_av_klasser_pa_knappar Knapp (@fkui/design)} | Vissa klasser på `button` ersätts. |

### @fkui/vue

| Ändring i                                           | Beskrivning                                              |
| :-------------------------------------------------- | :------------------------------------------------------- |
| {@link migrating-to-v7-vue#fmodal Modal (Fmodal)}   | Tagit bort template Api:et.                              |
| {@link migrating-to-v7-vue#fwizard Guide (FWizard)} | Focushantering är opt in istället för opt out            |
| {@link migrating-to-v7-vue#ftable Tabell (FTable)}  | Egenskapen `text` har bytt namn till `screenreaderText`. |

### Övriga ändringar

| Ändring i                                   | Beskrivning                                             |
| :------------------------------------------ | :------------------------------------------------------ |
| {@link migrating-to-v7-theme-builder Teman} | Flera uppdateringar för dig som bygger dina egna teman. |

## Övriga ändringar

Sammanfattning av övriga ändringar som inte är brytande.

| Ändring i                    | Beskrivning                                      |
| :--------------------------- | :----------------------------------------------- |
| Länk till info om färgpalett | Ny färgpalett i fkui.                            |
| Länk till info om stängknapp | Ny stängknapp i datumväljare, modal och tooltip. |

## Kontakta oss

Har du frågor om migreringen till v7.0.0?

Gå till {@link help-and-support Hjälp och support} för kontaktinformation.
