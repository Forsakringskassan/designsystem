---
title: Kalender
status: Produktionsklar
layout: component
component:
    - FCalendar
    - FCalendarDay
---

Kalendern används när en användare behöver välja flera dagar, välja dagar och fylla i information om dem, se mer information om en dag eller få en överblick över en månad.

```import test-id=calendar-default
FCalendarDefault.vue
```

Varje dag i kalendern är en knapp och det går att styra vad som ska hända när användaren väljer en dag.

Till exempel kan ett klick på en dag i kalendern användas för att:

- Visa information om dagen
- Visa formulärsfält för att fylla i uppgifter om dagen
- Välja dagen (som en av flera)

## Valbara dagar

Det går att styra vilka dagar som är valbara genom att:

- Sätt en period för inom vilken det ska finnas valbara dagar
- Ange enskilda dagar som inte är valbara
- Ange veckodagar som inte är valbara.

Användaren kan klicka på en dag som inte är valbar, därmed kan du välja att visa ett felmeddelande på ett lämpligt sätt.

För att sätta det lägsta och högsta möjliga datumet att välja skickar du in en [`FDate`](../date/classes/FDate.html) till `minDate` respektive `maxDate`.

```html static
<f-calendar v-model="month" :min-date="min" :max-date="max"></f-calendar>
```

## Storlek

Kalendern är 100% i bredd. För att ändra bredden placeras kalendern i en container som hanterar komponentens bredd.

Kolumnen med veckonummer visas inte på skärmar som är under 325px breda.

## Månad som visas

För att hantera vilken månad som visas används `v-model`.
Den tar en [`FDate`](../date/classes/FDate.html) och visar aktuell månad för datumet oavsett vilken dag som skickas in.

## Tabindex

När användare går till kalendern med tab så får första dagen i månaden fokus.
För att ändra detta beteende skickar du in en [`FDate`](../date/classes/FDate.html) med den dag som ska få fokus till `tabDate`.
Då hamnar fokus på den dagen om den finns i den aktuella månaden.

```diff
 <f-calendar
     v-model="model"
     :min-date="min"
     :max-date="max"
+    :tab-date="tabDay"
 ></f-calendar>
```

## Egen dagkomponent

Kalendern använder en dagkomponent, antingen `<f-calendar-day>` eller en egen komponent.

I följande exempel av kalendern har en egen dagkomponent använts för att skapa en kalender med olika schemalagda händelser.

```import test-id=calendar-custom
FCalendarCustom.vue
```

## Välja flera dagar

I följande exempel av kalendern kan man välja flera dagar och visuellt se vilka dagar som är valda. Alla valda dagar sparas ner till en array.

```diff
 <f-calendar
     v-model="month"
     :min-date="min"
     :max-date="max"
+    @click="onSelectDay"
 >
     <template #default="{ date, isFocused }">
         <f-calendar-day
             data-test="multiple-days"
             :day="date"
             :focused="isFocused"
+            :selected="isSelected(date)"
         ></f-calendar-day>
     </template>
 </f-calendar>
```

Metoden `onSelectDay` kommer i exemplet lägga till den dagen du klickar på i en array för alla dagar. Finns redan dagen i arrayen kommer den valda dagen tas bort från arrayen.
Metoden `isSelected(date)` kommer loopa igenom vår array där dagarna sparas och kolla om den valda dagen finns. Finns den markeras den, finns den inte avmarkeras den.

Exemplet lagrar dagarna som `string` i arrayen.

```import test-id=calendar-select-days
FCalendarSelectDays.vue
```

## Props, Events & Slots

### FCalendar

:::api
vue:FCalendar
:::

### FCalendarDay

:::api
vue:FCalendarDay
:::
