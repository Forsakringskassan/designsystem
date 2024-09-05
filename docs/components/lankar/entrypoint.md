---
title: Startpunkt
status: Produktionsklar
layout: component
component:
    - name: entrypoint
      source: components/**/_entrypoint.scss
---

Startpunkt används för att framhäva en länk extra tydligt, som till exempel en ingång till en digital tjänst.

Startpunkten tar upp 2/3 av tillgänglig yta i desktopläge och 100% i mobilt läge.

```html
<!-- [html-validate-disable-block fkui/prefer-ficon -- html example does not use @fkui/vue]-->
<a class="entrypoint" href="javascript:">
    Ansök om hundbidrag<span class="sr-only"> Till e-tjänsten</span>
    <svg focusable="false" class="icon entrypoint__icon">
        <use xlink:href="#f-icon-arrow-right" />
    </svg>
</a>
```

## Copy

Texten på en startpunkt ska vara begriplig utan någon annan kontext, men hållas så kort som möjligt. Det första ordet bör vara ett verb i imperativ som uttrycker det användaren ska göra.

Bra texter på startpunkter är t.ex. "Ansök om VAB" och "Ansök om sjukpenning".

En startpunkt ska alltid ha en skärmläsartext som ska förtydliga att startpunkten leder till en tjänst och inte är en vanlig länk. Exempel som motsvarar texterna ovan är "Till tjänsten ansök om vab" och "Till tjänsten ansök om sjukpenning".

## Fullbredd

Vill du styra bredden med hjälp av gridsystemet använd klassen `entrypoint--full-width`.

```html
<!-- [html-validate-disable-block fkui/prefer-ficon -- html example does not use @fkui/vue]-->
<div class="col col--md-6 example-dotted">
    <a class="entrypoint entrypoint--full-width" href="javascript:">
        Ansök om hundbidrag<span class="sr-only"> Till e-tjänsten</span>
        <svg focusable="false" class="icon entrypoint__icon">
            <use xlink:href="#f-icon-arrow-right" />
        </svg>
    </a>
</div>

<div class="col col--md-6 example-dotted">
    <a class="entrypoint entrypoint--full-width" href="javascript:">
        Exempel med väldigt lång text som troligen kommer wrappa<span
            class="sr-only"
        >
            Till e-tjänsten</span
        >
        <svg focusable="false" class="icon entrypoint__icon">
            <use xlink:href="#f-icon-arrow-right" />
        </svg>
    </a>
</div>
```
