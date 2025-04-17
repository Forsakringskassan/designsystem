---
title: "Version 6 migreringsguide: @fkui/design"
short-title: "@fkui/design"
name: migrating-to-v6-design
layout: article
---

Från version 6.0.0 levereras bara ett tema, det som tidigare hette EXP är nu standard.
INT-temat är utbrutet och levereras inte av designsystemet längre.

- `@fkui/css-variables` har bytt namn till `@fkui/theme-default`.
- `@fkui/design` levererar nu enbart ett tema.
- `@fkui/design` levererar inte längre logotyper

## Tillämpnings-specifika leverabler borttagna

Designsystemet tillhandahåller nu endast ett tema.
Som konsument finns det fortfarande möjlighet att själv tillhandahålla specifika tillämpningar.

```diff
-@use "@fkui/css-variables/dist/fkui-exp-css-variables";
+@use "@fkui/theme-default";

-@use "@fkui/design/src/fkui-exp";
+@use "@fkui/design";
```

{@link getting-started-application Läs mer om att använda ett eget tema.}

## Deprekerade CSS-variabler borttagna

Möjlighet finns att importera separat vid behov.

```scss
@use "@fkui/theme-default/src/fkui-css-variables-deprecated" as *;

:root {
    @include deprecated-variables;
}
```

## `FModal` borttagna CSS-klasser

De deprekerade CSS klasserna `modal__dialog-container-large` och `modal__dialog-container-fullscreen` är borttagna.
Detta påverkar endast dig som använder stylingen direkt, använder man `@fkui/vue` komponenten `FModal` påverkas man inte.
Klasserna är ersatta med `modal__dialog-container--large` respektive `modal__dialog-container--fullscreen`.

```diff
-<div class="modal__dialog-container modal__dialog-container-large">
+<div class="modal__dialog-container modal__dialog-container--large">
```

## Entrypoint tar alltid upp 100% yta

Tidigare tog komponenten enbart upp 66% bredd i desktop, om du vill återskapa det beteendet kan du exempelvis nyttja grid'en:

```diff
+ <div class="row">
+    <div class="col col--md-8">
        <a class="entrypoint" href="javascript:">...</a>
+    </div>
+ </div>
```

## Logotyper borttagna

Alla logotyp-bilder är borttagna från `@fkui/design` utan ersättare.
De som behöver dessa bilder behöver lägga in dem själv.

## Navbar borttagen

Styling och klasser för navbar är borttagen och har ersatts av Vue-komponenterna {@link FPageHeader `FPageHeader`} och {@link FNavigationMenu `FNavigationMenu`}.

Även tillhörande CSS-variabler är borttagna:

- `--f-text-color-pageheader`
- `--f-text-color-navbar`
- `--f-text-color-navbar-active`
- `--f-background-pageheader-standard`
- `--f-background-pageheader-secondary`
- `--f-background-navbar`
- `--f-background-navbar-hover`
- `--f-border-color-separator-pageheader-standard`
- `--f-border-color-separator-pageheader-secondary`
- `--f-border-color-navbar-active`
- `--f-border-color-navbar-hover`

Komponenten `FPageHeader` ersätter det som tidigare bestod av `.navbar__header`, och `FNavigationMenu` ersätter `.navbar__nav`.
För att behålla samma funktionalitet behövs båda dessa komponenter användas. Besök respektive sida för ytterligare information om dessa komponenter och för exempel om hur du ska använda komponenterna.

För att migrera till endast HTML och CSS, se nedan för ett exempel med liten logo samt första menyalternativ valt.

```html static
<header>
    <div class="page-header__root">
        <div class="page-header">
            <div class="page-header__logo">
                <span
                    class="logo logo--small"
                    aria-label="my awesome logo"
                    role="img"
                ></span>
            </div>
            <span class="page-header__app-name"> Exempelapplikation </span>
            <div class="page-header__right">
                <div class="page-header__right-slot">Namn Namnsson</div>
            </div>
        </div>
    </div>
</header>
<nav aria-label="my awesome navigation" class="imenu imenu--horizontal">
    <ul class="imenu__list" role="menubar">
        <li class="imenu__list__item" role="none">
            <div class="imenu__list__anchor-container">
                <a tabindex="0" class="imenu__list__anchor" role="menuitem">
                    Home
                </a>
            </div>
        </li>
        <li class="imenu__list__item" role="none">
            <div class="imenu__list__anchor-container">
                <a tabindex="0" class="imenu__list__anchor" role="menuitem">
                    About
                </a>
            </div>
        </li>
    </ul>
</nav>
```
