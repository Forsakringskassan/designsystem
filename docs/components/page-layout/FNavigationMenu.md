---
title: Navigeringsmeny
status: Produktionsklar
layout: component
component: FNavigationMenu
---

Navigeringsmeny låter användaren navigera i en applikation med flera undersidor och se vilken sida användaren befinner sig på.

```import live-example
FNavigationMenuLiveExample.vue
```

## Skapa menyalternativ

För att definiera alternativ i menyn används en array av `NavigationMenuItem` objekt.

Om du anger `href` för objektet så kommer menyalternativet fungera som en vanlig länk med aktuellt `href` värde.

Utan `href` så skickas ett `selectedRoute` event med `route` för det valda alternativet.
Detta kan användas tillsammans med till exempel Vue Router för att navigera till vald `route`.

```import
navigation-menu-item.ts
```

```ts
const routes: NavigationMenuItem[] = [
    { label: "label1", route: "ROUTE_1" },
    { label: "label2", route: "ROUTE_2" },
    { label: "label3", route: "ROUTE_3", href: "/", target: "_blank" },
];
```

## Visa aktiv sida

För att visa aktiv sida behöver du styra det valda menyalternativet programmatiskt med `v-model:route`.

När modellen ändras till ett värde som matchar `route` för en `NavigationMenuItem` i `routes` så visas den som vald i menyn.
Om värdet inte matchar nåt så visas istället inget alternativ som valt.

```diff
-<f-navigation-menu :routes="routes">
+<f-navigation-menu v-model:route="currentRoute" :routes="routes">
```

## Överflödande alternativ

När alla alternativ inte får plats i bredd så placeras de istället i en undermeny (endast för meny utan `vertical` prop).
När detta händer placeras ett nytt alternativ i slutet på menyn som öppnar undermenyn.

Justera fönstrets storlek så att alla alternativ inte får plats för att se överflödesbeteendet.

```import
FNavigationMenuOverflow.vue
```

## Skärmläsare

Navigeringsmenyn innehåller två navigeringslandmärken: ett för menyn och ett för popup-menyn.
Som standard är namnet i `aria-label` `Navigeringsmeny` för menyn och `Popupmeny` för popup-menyn.
För att ändra dessa namn använd props `menu-aria-label` och `popup-aria-label`.

Se till att du använder tydliga namn som beskriver syftet för respektive navigering.
Om flera navigeringsmenyer eller `nav`-element används samtidigt, se till att de alla har unika namn.

## API

:::api
vue:FNavigationMenu
:::
