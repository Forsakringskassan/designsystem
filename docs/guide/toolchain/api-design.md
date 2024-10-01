---
title: API design
layout: content-with-menu
---

Så här rekommenderar vi att strukturera din kod

## För FKUI

### Vue-komponenter

Som en tumregel bryter vi ut logiken i små enskilda funktioner som enbart agerar på input parametrar (pure functions) och testas separat med enhetstester.
Vue-komponenten nyttjar dessa funktioner och binder ihop logiken med DOM och interaktivitet.

### Undefined behaviour

undefined behaviour: där vi inte explicit har lovat att något fungerar så anser vi att det är odefinierat beteende och att det kan ändras i framtiden utan att det är en brytande ändring.
Hypotetiskt exempel, en funktion som tolkar datum garanterar bara ISO 8861 men om den råkar fungera med andra datumformat så är det odefinierat beteende och i en senare version av FKUI kan andra datumformat sluta fungera eller tolkas annorlunda.

## För applikationer
