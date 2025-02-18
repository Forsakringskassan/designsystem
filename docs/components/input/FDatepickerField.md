---
title: Datumväljare
status: Produktionsklar
layout: component
component: FDatepickerField
---

Datumväljaren underlättar när användaren ska välja en dag som har en tydlig koppling till en veckodag, till exempel:

- onsdag förra veckan
- första måndagen i november

```import live-example test-id=live
FDatepickerFieldLiveExample.vue
```

En datumväljare är mindre användbar när användaren ska ange:

- Ett datum som hen kommer ihåg, till exempel en födelsedag
- Ett datum som finns i ett dokument som användaren har till hands, till exempel ett inflyttningsdatum i ett hyreskontrakt

## Visning

- Om inget datum är valt visas innevarande månad när kalendern öppnas.
- Det går att välja vilket år och månad som ska visas som standard.
- Visning av veckonummer kan döljas.
- Dagens datum är markerat som standard.

### Format

Användaren kan skriva in följande format i inmatningsfältet:

- åååå-mm-dd
- ååååmmdd
- åååå/mm/dd

Inmatningsfältet använder inte [inputmode](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode) = numeric eftersom det inte garanterar att tangentbordet innehåller bindestreck (minustecken).

### Månad som visas när inget datum är valt

Använd initialMonth för att bestämma vilken månad som ska visas när inget datum är valt. Närmst efterföljande månad med valbara datum visas om du
har valt en månad som inte har några valbara datum.

```diff
 <f-datepicker-field
     v-model="model"
+    :initial-month='FDate.fromIso("2023-05-07")'
 ></f-datepicker-field>
```

## Responsivitet

- På små skärmar (<640 px bredd) visas kalendern som en del av webbsidan (inline)
- På större skärmar visas kalendern i en pop-up och täcker en del av sidan.
- Kalenderns bredd anpassas utifrån skärmens bredd.
- För att ge tillräcklig plats för datumen visas inte veckonummer på skärmar som är 325 px eller smalare.

## Begränsa valbara dagar

Det går att styra vilka dagar som är valbara genom att:

- Sätta begräsningar framåt och bakåt i tiden.
- Ange enskilda datum som inte är valbara
- Ange veckodagar som inte är valbara.

Som standard är datumväljaren begränsad till att bara tillåta val av datum 10 år tillbaka och framåt i tiden. Alla veckodagar och datum är valbara som standard.

Validatorer används för att sätta begränsningar av valbara dagar.

### Min- och maxdatum

```diff
 <f-datepicker-field
     v-model="model"
+    v-validation.minDate.maxDate="{
+        minDate: { limit: '2023-08-07' },
+        maxDate: { limit: '2024-02-07' },
+    }"
></f-datepicker-field>
```

### Begränsa valbara datum

```diff
 <f-datepicker-field
     v-model="model"
+    v-validation.invalidDates="{ invalidDates: { dates: ['2023-10-31', '2023-11-04'] }}"
 ></f-datepicker-field>
```

### Begränsa valbara veckodagar

```diff
 <f-datepicker-field
     v-model="model"
+    v-validation.invalidWeekdays="{ invalidWeekdays: { days: [Weekday.SATURDAY, Weekday.SUNDAY] }}"
 ></f-datepicker-field>
```

## Bredd på inmatningsfält och etikett

För att få plats med en längre text i etiketten går det att ha olika bredder på kalenderns etikett och inmatningsfält. Bredden för inmatningsfältet och etiketten anges i antal kolumner vid en viss skärmbredd.

```diff
 <f-datepicker-field
     v-model="model"
+    label-width="md-9 lg-7"
+    input-width="md-6"
 ></f-datepicker-field>
```

## Inaktiv

Inaktiva komponenter ska undvikas.

- Om användaren försöker interagera med en inaktiv komponent ges ingen information om varför komponenten är inaktiv.
- Användare av skärmläsare får inte veta att komponenten finns eftersom skärmläsare hoppar över inaktiva komponenter.
- Inaktiva komponenter har ofta för låg kontrast.

```diff
 <f-datepicker-field
     v-model="model"
+    disabled
 ></f-datepicker-field>
```

## Visa inline

Använd alwaysInline om kalendern ska visas inline oavsett skärmbredd.

```diff
 <f-datepicker-field
     v-model="model"
+    always-inline
 ></f-datepicker-field>
```

## Dölj markering av dagens datum

```diff
 <f-datepicker-field
     v-model="model"
+    :highlight-today="false"
 ></f-datepicker-field>
```

## API

:::api
vue:FDatepickerField
:::
