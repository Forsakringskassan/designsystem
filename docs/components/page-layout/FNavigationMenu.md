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

För att definiera alternativ i menyn används en array av `NavigationMenuItem`-objekt till `routes`-prop.

```import
navigation-menu-item.ts
```

```ts
import { type NavigationMenuItem } from "@fkui/vue";

/* --- cut above --- */

const routes: NavigationMenuItem[] = [
    { label: "label1", route: "ROUTE_1" },
    { label: "label2", route: "ROUTE_2" },
    { label: "label3", route: "ROUTE_3", href: "/", target: "_blank" },
];
```

- `label` sätter etiketten för menyalternativet.
- `route` måste vara en unik sträng och används av komponenten för att identifiera olika menyalternativ.
- `href` sätter `href`-värdet för den `a`-tag som menyalternativet innehåller.
- `target` sätter `target`-värdet för den `a`-tag som menyalternativet innehåller.

## Navigera med Vue Router

För att kunna navigera med Vue Router så ska du inte använda `href` eller `target` med dina `NavigationMenuItem`.

Du kommer också behöva koppla dina `NavigationMenuItem` till de registrerade rutterna.
Om du använder [named routes](https://router.vuejs.org/guide/essentials/named-routes.html) så kan du använda ruttens namn i `route` för `NavigationMenuItem`.

```ts
import { createApp, defineComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";

const App = defineComponent({});
const AwesomePage = defineComponent({});

/* --- cut above --- */

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/my-awesome-page",
            name: "my-awesome-page",
            component: AwesomePage,
        },
    ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
```

```ts
import { type NavigationMenuItem } from "@fkui/vue";

/* --- cut above --- */

// `NavigationMenuItem.route` = `RouteRecord.name`
const routes: NavigationMenuItem[] = [
    { label: "My awesome page", route: "my-awesome-page" },
];
```

När ett menyalternativ blir valt så skickar komponenten eventet `selected-route` som innehåller värdet i `route`.
Du kan då navigera i respons på eventet i din komponent.

```diff
-<f-navigation-menu :routes="routes">
+<f-navigation-menu :routes="routes" @selected-route="onSelectedRoute">
```

```vue static
<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function onSelectedRoute(route: string): void {
    router.push({
        name: route,
    });
}
</script>
```

## Visa aktiv sida

För att visa aktiv sida behöver du styra det valda menyalternativet programmatiskt med `v-model:route`.

När modellen ändras till ett värde som matchar `route` för en `NavigationMenuItem` i `routes` så visas den som vald i menyn.
Om värdet inte matchar något av alternativen visas inget som valt.

```diff
-<f-navigation-menu :routes="routes">
+<f-navigation-menu v-model:route="currentRoute" :routes="routes">
```

## Överflödande alternativ

När alla alternativ inte får plats i bredd så placeras de istället i en undermeny (endast för meny som inte har prop `vertical`).
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
