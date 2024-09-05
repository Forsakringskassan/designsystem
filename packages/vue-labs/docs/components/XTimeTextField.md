---
title: Tidsinmatning
status: Experimentell
layout: component
component: XTimeTextField
---

## Användning

När det behövs ett textinmatningsfält för timmar och minuter, tt:mm. Accepterar inmatning med eller
utan kolon. Utan kolon tolkas inmatningen som enbart timmar. Om man matar in ett kolon måste det
följas av två siffror för att vara giltigt (dvs. 08: och 08:0 är ogiltiga). Exempel:

| Inmatning | Formattering | Värde |
| --------- | ------------ | ----- |
| 1234      | 1234:00      | 74040 |
| 123       | 123:00       | 7380  |
| 12        | 12:00        | 720   |
| 8         | 08:00        | 480   |
| 12:30     | 12:30        | 750   |

Lagrar värdet internt i ett `Number` som plockas ut med `v-model`.

### Enkelt exempel

```import
XTimeTextFieldExample.vue
```

## Förlåtande inmatning

Det är inte ovanligt med ett behov av att endast tillåta tidsangivelser upp till ett dygn
(24 timmar). Det går att sätta en egen parsingparameter istället. Detta görs i stil med
`:parser="forgivingParseTimeToNumber"`. I denna komponenten tolkas även fyra siffror inte
längre som timmar, utan som timmar och minuter. De två första siffrorna tolkas som timmar
och de två sista som minuter. Notera att tre siffror och fem siffror fortfarande tolkas
som timmar.
Exempel:

| Inmatning | Formattering | Värde |
| --------- | ------------ | ----- |
| 1234      | 12:34        | 74040 |
| 123       | 123:00       | 7380  |
| 12        | 12:00        | 720   |
| 8         | 08:00        | 480   |
| 12:30     | 12:30        | 750   |

### Exempel med förlåtande inmatning

```import
ForgivingInput.vue
```
