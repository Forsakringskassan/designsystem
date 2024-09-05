---
title: Navigeringsmeny
status: Produktionsklar
layout: component
component: FNavigationMenu
---

Navigeringsmeny låter användaren navigera i en applikation med flera undersidor och se vilken sida användaren befinner sig på.

## Navigeringsmeny i horisontellt läge

```import
FNavigationMenuHorizontal.vue
```

I detta exemplet används typen `NavigationMenuItem` för att definiera länkar i menyn.
Det finns två typer av länkar: "in-app" och "extern".
Om användaren väljer ett item utan `href` skickas en event `selectedRoute` med argumentet `route` som kan användas ihop med till exempel Vue router.
Om användaren klickar på ett item med en `href` blir beteendet som att klicka på en extern länk.

```ts
const routes: NavigationMenuItem[] = [
    { label: "label1", route: "ROUTE_1" },
    { label: "label2", route: "ROUTE_2" },
    { label: "label3", route: "ROUTE_3" },
    { label: "label4", route: "ROUTE_4", href: "/", target: "" },
];
```

## Navigeringsmeny i vertikalt läge

Du aktiverar vertikalt läge genom att använda `vertical` prop:

```diff
 <f-navigation-menu
    :routes="routes"
+   vertical
    @selectedRoute="selectedRoute=$event"
 ></f-navigation-menu>
```

```import
FNavigationMenuVertical.vue
```

## Overflow exempel

Detta exemplet visar på hur _overflow_ beter sig.
Overflow sker då ett element, till exempel navigeringsmenyn, har för mycket innehåll i sig (består av för många menuitems) för att kunna visas inom sin tilldelade yta (bredden i den här exemplet).
Justera fönstrets storlek för att visa beteende vid overflow.

```import
FNavigationMenuOverflow.vue
```

## Ange modell (v-model:route)

En route-modell kan anges i navigeringsmenyn för att kunna styra vald route programmatiskt.
Om ett värde tilldelas som inte finns i `routes` så kommer värdet att sättas om till `""` och alla länkar att avmarkeras (om det inte finns en länk för route `""`).
I detta exempel kan man sätta om routen programmatiskt med hjälp av ett formulär.

```import
FNavigationMenuActiveRoute.vue
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
