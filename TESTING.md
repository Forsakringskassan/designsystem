# Automatisk testning

Den här sidan innehåller riktlinjer för automatiska testfall.

## Terminologi

| Förkortning | Term              | Beskrivning                                                       |
| ----------- | ----------------- | ----------------------------------------------------------------- |
| SUT         | System under test | Den del av systemet som testas, exempelvis komponent eller enhet. |

## Övergripande riktlinjer

### Enhetstester med `jest`

Med enhetstester testar vi:

- logik
- events
- props
- regler för HTML-Validate.

I enhetstester testar vi funktionalitet i isolation och mockar omvärlden.
Styrkan med enhetstester i Jest ligger i att de är snabba, enkla att mocka och att man enkelt kan anropa funktioner.
Svagheten ligger i att det är svårt att vänta ut cykler från exempelvis Vue.js.

### Komponenttester med `cypress`

Med komponenttester testar vi:

- enskilda komponenter
- interaktion med komponenten.

Komponenttester körs i Chrome med Cypress och där testar vi komponenter i isolation.
Vi interagerar med komponenten på samma sätt som en konsument implementerat ett use-case och på ett sätt som en slutkund interagerat med.
Styrkan i komponenttester ligger i att en riktig browser kör testfallen och att Cypress är bra på att hantera att vänta på cykler från exempelvis Vue.js.
Svagheten ligger i att det är svårare att mocka omvärlden och lockande att skriva tester som är beroende av många andra komponenter (ej isolerade tester).

### E2E med `cypress`

Med E2E-tester testar vi:

- interaktion mellan flera komponenter
- exempel i dokumentation.

E2E-tester kör i Chrome med Cypress och kräver en webserver som servar en websida, sidan under test.
För komponenter använder vi oss av samma pageobject som konsumenter och kompletterar detta med interna pageobjekt för respektive sida under test.
Styrkan i E2E-tester ligger i att det är enkelt att testa hur flera komponenter interagerar med varandra.
Svagheten ligger i att testerna är dyra resursmässigt (framförallt långsamma).

### Filnamn och katalogstruktur

```
root
├─┬ packages
│ ├─┬ logic
│ │ └─┬ src
│ │   └── ${component.spec.ts} (Jest enhetstester)
│ └─┬ vue
│   ├─┬ pageobject
│   │ └── ${component}.pageobject.ts (Externa pageobject)
│   └─┬ src
│     ├── ${component}.ct.ts (Cypress component tests)
│     └── ${component}.spec.ts (Jest enhetstester)
└─┬ tests
  └─┬ specs
    ├─┬ pageobject
    │ └── ${component}.pageobject.ts (Interna pageobject)
    └─┬ specs
      └── ${component}.spec.ts (Cypress E2E)
```

### Testdata

#### Minimera innehållet i testdata

Håll nere innehållet i din testdata, inkludera bara det som är relevant för just det specifika testfallet.

```diff
 it("should get full name", () => {
     const data = {
         givenName: "Kalle",
         familyName: "Anka",
-
-        /* irrelevant fields */
-        foo: 1,
-        bar: 2,
-        baz: 3,
     };
     const result = getFullName(data);
     expect(result).toBe("Kalle Anka");
 });
```

Motivering:
Onödig data ökar den kognitiva belastningen för läsaren och gör det svårare att urskilja vad som är viktigt.

Ibland kan detta orsaka konflikt med datatyper i Typescript:

```ts
type MyComplexObject = unknown;

/* --- cut above --- */

function getFullName(src: MyComplexObject): string {
    /* do something */

    return "...";
}
```

Överväg att ändra prototypen så den inte kräver mer än nödvändigt:

```diff
-function getFullName(src: MyComplexObject): string {
+function getFullName(src: Pick<MyComplexObject, "givenName" | "familyName">): string {
```

alternativt:

```diff
-function getFullName(src: MyComplexObject): string {
+interface Name {
+    givenName: string;
+    familyName: string;
+}
+
+function getFullName(src: Name): string {
```

Ytterligare ett alternativ är att skapa en funktion för att skapa upp objektet:

```diff
+function createComplexObject(partial: Partial<MyComplexObject>): MyComplexObject {
+    return {
+        givenName: "Test",
+        familyName: "Testorsson",
+        foo: 1,
+        bar: 2,
+        baz: 3,
+        ...partial,
+    };
+}
+
 it("should get full name", () => {
-    const data = {
+    const data = createComplexObject({
         givenName: "Kalle",
         familyName: "Anka",
-
-        /* irrelevant fields */
-        foo: 1,
-        bar: 2,
-        baz: 3,
-    };
+    });
     const result = getFullName(data);
     expect(result).toBe("Kalle Anka");
 });
```

#### Föredra testdata i direkt anslutning till testfallet

Testdata lägger vi i första hand i direkt anslutning till testfallet.

```ts
import { expect } from "@jest/globals";

declare function func(data: unknown): string[];

/* --- cut above --- */

it("x should y", () => {
    const data = [
        {
            /* ... */
        },
        {
            /* ... */
        },
    ];
    const result = func(data);
    expect(result).toHaveLength(2);
});
```

Motivering:
Genom att lägga testdata i anslutning till testet är det lätt att utläsa varför assertions är förväntade och man behöver inte hoppa runt i testfilen för att läsa ut det.

#### Bryt ut stor och repetitiv testdata

Om det inte går att minimera storleken på testdata eller den används frekvent bryt ut den till en separat fil.

```diff
+import { twoItems } from "./__fixtures__";
+
 it("x should y", () => {
-    const data = [
-        {
-            /* ... */
-        },
-        {
-            /* ... */
-        },
-    ];
-    const result = func(data);
+    const result = func(twoItems);
     expect(result).toHaveLength(2);
 });
```

Filerna läggs med fördel i `__fixtures__`:

```
MyComponent
├─┬ __fixtures__
│ ├── index.ts
│ └── two-items.ts
└── MyComponent.spec.ts
```

Motivering:
Stora mängder testdata distraherar från själva testfallet.

### Given-When-Then

Även om vi inte alltid skriver ut det explicit skriver vi testfallen enligt formatet:

1. Given: givet följande scenario.
2. When: när följande inträffar.
3. Then: vad som förväntas.

```ts name=given-when-then
import { defineComponent } from "vue";
import { expect, jest } from "@jest/globals";
import { shallowMount } from "@vue/test-utils";

const ButtonComponent = defineComponent({});

/* --- cut above --- */

it("x should y", () => {
    /* given: a button with a click callback */
    const spy = jest.fn();
    const wrapper = shallowMount(ButtonComponent, {
        listeners: {
            click: spy,
        },
    });

    /* when: the buton is clicked */
    wrapper.trigger("click");

    /* then: the callback should have been called */
    expect(spy).toHaveBeenCalled();
});
```

Motivering:
Formatet uppmuntrar igenomtänkta och strukturerade testfall.

### Namnsättning

#### Beskriv tydligt vad testfallet går ut på

Varje `it` (inklusive dess `describe`) ska kunna läsas och förklara vad testet går ut på.

Dåligt:

```ts
it("propName", () => {
    /* ... */
});
```

Förklarar inte vad man förväntar sig av propen

Bra:

```ts
it("should emit submit event when clicked", () => {
    /* ... */
});
```

Motivering:
Tydligare vad som gått fel när man läser loggar och för att som läsare förstå vad testfallet går ut på.

### Gruppera med `describe`

- Props grupperas under `describe("props", () => { ... })`.
- Events grupperas under `describe("events", () => { ... })`.
- HTML-Validate regler grupperas under `describe("html-validate", () => { ... })`.
- Dokumentationsexempel grupperas under exemplets namn.
- I övrigt gruppera efter logisk funktionalitet.

### Koppla till krav ID där applicerbart

Motivering:
Det underlättar för både utvecklare och testare att härleda vilket krav testfallet är kopplat till.

### Checklista

- [ ] Enhetstest för logik?
- [ ] Enhetstest för propar?
- [ ] Enhetstest för event?
- [ ] Enhetstest för HTML-Validate?
- [ ] Component tests för interaktion med komponent?
- [ ] Cypresstest för exempel i dokumentation?
- [ ] Pageobject?

## Jest

### Import ordning

Import-rader ska sorteras enligt följande:

1. Importer med enbart side-effects.
2. System och standardbibiliotek.
3. Tredje-parts bibiliotek.
4. In-house bibliotek.
5. Interna beroenden inom monorepo.
6. Interna beroenden inom paketet.
7. Systemet under test (SUT) (exempelvis klassen, funktionen, komponenten som testas).

Typescript funktion, klass osv:

<!-- prettier-ignore -->
```ts nocompile nolint
import "html-validate/jest";                              // 1. Enbart side-effects
import path from "path";                                  // 2. NodeJS standardbibiliotek
import _ from "lodash";                                   // 3. Tredje-parts bibliotek
import apimock from "@forsakringskassan/apimock-express"; // 4. In-house bibliotek
import { focus } from "@fkui/logic";                      // 5. Inom monorepo
import { hasSlot } from "../utils";                       // 6. Inom paket
import { myFunction } from "./my-function";               // 7. SUT
```

För en VueJS komponent, importera komponenten sist direkt från `.vue` filen:

```ts nocompile nolint
import MyComponent from "./MyComponent.vue";
```

Motivering: ordningen av imports gör det mer överskådligt och snabbare att greppa.

### Props

```ts
describe("props", () => {
    describe("foo", () => {
        it("should do something", () => {
            /* ... */
        });
    });

    describe("bar", () => {
        it("should do something else", () => {
            /* ... */
        });
    });
});
```

Motivering: genom att gruppera i nästlade describes är det enklare att se vad testfallet tillgör, vilken prop exempelvis

### `v-model` propen testas under describe("v-model")

### Använd `shallowMount`

I första hand använd `shallowMount`.

Om vi behöver andra komponenter så använder vi `mount` för andra hand.

Om man behöver många default-värden, många repetitiva propar då skapar vi `createWrapper`

### it.each

Används för repetitiva tester där man vill testa många olika input värden som ger olika output värden.

Om din it.each behöver en if-sats dela istället upp it.each i två it.each, en för varje condition.

Om din it.each behöver en description parameter bryt istället ut till en egen it

### Undvik `attachToDocument` och `attachTo`

Om man inte måste! Testar man focus så måste man ha `attachTo`

Motivering: genom att inte attacha till `body` så behöver vi inte lika mycket uppstädning mellan testfall

### Föredra `jest.spyOn` över `jest.fn()`

```diff
-console.log = jest.fn();
+jest.spyOn(console, 'log');
```

Motivering: `jest.spyOn` fungerar med `jest.clearAllMocks`

### Föredra lokalt scopad wrapper över global

istället för:

```ts
import { defineComponent } from "vue";
import { it } from "@jest/globals";
import { shallowMount } from "@vue/test-utils";

const AwesomeComponent = defineComponent({});

/* --- cut above --- */

let wrapper;

it("should ..", () => {
    wrapper = shallowMount(AwesomeComponent);
});
```

kör:

```ts
import { defineComponent } from "vue";
import { it } from "@jest/globals";
import { shallowMount } from "@vue/test-utils";

const AwesomeComponent = defineComponent({});

/* --- cut above --- */

it("should ..", () => {
    const wrapper = shallowMount(AwesomeComponent);
});
```

### Använd `.get()` över `.find()`

get smäller om den inte finns, find ger ett tomt objekt.

Om du inte i testet ska testa `.exists()` eller en array med 0 eller fler element.

### Undvik utskrifter i testfall

Undvik att använda `console.log` (och liknande) i testfallen.

Motivering: det genererar brus i logfiler och gör det svårt att snabbt få en överblick över fallerande testfall då man måste läsa och mentalt filtrera bort från riktiga felmeddelanden.

Om koden under test skriver ut med `console.log` (eller liknande) bör du **i första hand ifrågasätta syftet** med utskriften.
Utskriften kommer synas för slutkunder i produktion.
För felhantering så visas det bara för den som letar, om det rör sig om ett hindrande fel så kan en exception vara lämpligare och om det inte är hindrande (dvs koden kan hantera det) så ger en utskrift kanske inte något mervärde annat än brus.
Om utskriften bedöms rimlig så bör du också testa att utskriften är korrekt genom att mocka `console.log`, verifiera resultatet samt avsaknad av andra utskrifter.

Utskrifter från Vue ska hanteras och inte döljas, exempelvis:

>     [vue-test-utils]: name is deprecated and will be removed in the next major version.

Istället för att dölja meddelandet se till att korrigera din kod.

För att korrekt mocka och verifiera `console.log` använder du `jest.spyOn(..)`:

```ts nocompile nolint
import { myFunction } from "./my-function";

/* spy on `console.log` but does not stub the function, i.e. the original console.log will still be called */
const log = jest.spyOn(console, "log");

afterEach(() => {
    /* keeps the spy but restore eventual mocked implementations of `console.log`. Alternatively `jest.restoreAllMocks()` may be used. */
    log.mockRestore();
});

it("noisy test", () => {
    /* for this test case stub the original implementation to silence output */
    log.mockReturnValue(undefined);

    /* `myFunction()` calls `console.log(..)` */
    expect(myFunction()).toProduceExpectedResult();

    /* verify `console.log(..)` has been called exactly once to ensure no other messages was silenced */
    expect(log).toHaveBeenCalledTimes(1);

    /* verify `console.log(..)` was called with the expected message */
    expect(log).toHaveBeenCalledWith("lorem ipsum dolot sit amet");
});
```

Undvik `console.log = jest.fn()` då det gör det svårare att åerställa mellan testfall.
Är du inte försiktig när du mockar `console.log` försvårar du för andra som försöker använda `console.log` och du kan dölja riktiga fel som skrivs ut i console.

### Följ best practice för jest

Länk

## Komponenttester

## E2E tester

### Vi skriver ett E2E cypress test för varje körbart exempel

Motivering: då exempel är en del av det vi levererar till konsumenter vill vi att de alltid ska vara i ett fungerande skick och inte utdaterade.

## Pageobject för Cypress

Vi skriver och levererar pageobject för alla publika komponenter och moduler.

### Mall

```ts
/**
 * Description of what this pageobject represents.
 */
export class MyPageobject {
    public selector: string;

    /**
     * @param selector - Component selector.
     */
    public constructor(selector: string) {
        this.selector = selector;
    }

    /**
     * Returns the component root element.
     */
    public el(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.selector);
    }

    /**
     * Returns the submit button.
     */
    public submitButton(): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        return cy.get(`${this.selector} .submit-button`);
    }
}
```

### Använd metoder

Låt varje beståndsdel av pageobject vara en egen metod.
Undvik arrow-funktion-som-property mönster:

Istället för:

```ts
export class MyPageobject {
    public selector: string;

    /**
     * Returns the submit button.
     */
    public submitButton: () => Cypress.Chainable<JQuery<HTMLButtonElement>>;

    public constructor(selector: string) {
        this.selector = selector;
        this.submitButton = () => cy.get(`${this.selector} .submit-button`);
    }
}
```

Använd vanliga klassmetoder:

```ts
export class MyPageobject {
    public selector: string;

    public constructor(selector: string) {
        this.selector = selector;
    }

    /**
     * Returns the submit button.
     */
    public submitButton(): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        return cy.get(`${this.selector} .submit-button`);
    }
}
```

Motivering: koden blir enklare att läsa och förstå, dokumentation hänger ihop med implementation.

### Undvik `find(..)`

Undvik `cy.get(..).find(..)` i pageobject.
Skriv istället ihop selectorn med en template literal:

```diff
-return cy.get(this.selector).find(".button");
+return cy.get(`${this.selector} .button);
```

Motivering: Cypress kommer bara upprepa det sista kommandot ([retry-ability](https://docs.cypress.io/guides/core-concepts/retry-ability#Only-the-last-command-is-retried)) så om `cy.get(..)` inte returnerar det du förväntar dig kommer `.find(..)` inte heller göra det och trots att `find` upprepas kommer den agera på det tidigare felaktiga resultatet från `cy.get(..)`.
