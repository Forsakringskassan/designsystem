---
title: Skärmläsare
layout: content-with-menu
---

## Visa text enbart för skärmläsare

Om man vill dölja ett visst innehåll som enbart skärmläsare kan läsa upp så kan man använda sig utav klassen `sr-only`.
Ett exempel är om man har en knapp med en text, och i skärmläsare vill förtydliga vad som händer när man trycker på knappen.

```html
<button type="button" class="button">
    <span class="sr-only">Gå vidare till</span>
    Nästa
    <span class="sr-only">sida</span>
</button>
```

## Separera element för skärmläsare

Vid uppläsning i NVDA läses element med `display: inline-block` upp tillsammans med föregående HTML-element.
Klassen `sr-separator` används för att separera uppläsningen av två element, exempelvis en etikett som kommer efter en tooltip.

```html
<!-- [html-validate-disable-block fkui/prefer-ficon -- html example does not use @fkui/vue]-->
<div class="tooltip-before">
    <span class="label tooltip-before__label heading--h4">
        Exempel label efter
    </span>
</div>
<div class="tooltip">
    <div class="tooltip__container">
        <button class="tooltip__button" type="button" aria-expanded="true">
            <span class="icon-stack icon-stack--circle">
                <svg focusable="false" class="icon icon__info button__icon">
                    <use href="#f-icon-circle" />
                </svg>
                <svg focusable="false" class="icon button__icon">
                    <use href="#f-icon-i" />
                </svg>
            </span>
            <span class="sr-only"> Denna text syns bara för skärmläsare. </span>
        </button>
    </div>
</div>
<label class="label sr-separator">
    <span class="label__description">Ytterligare beskrivning</span>
    <span class="label__description label__description--discrete">
        (Med lite extra inom parantes)
    </span>
</label>
```

```html
<!-- [html-validate-disable-block fkui/prefer-ficon -- html example does not use @fkui/vue]-->
<div class="tooltip-before">
    <span class="label tooltip-before__label heading--h4">
        Exempel input efter
    </span>
</div>
<div class="tooltip">
    <div class="tooltip__container">
        <button class="tooltip__button" type="button" aria-expanded="true">
            <span class="icon-stack icon-stack--circle">
                <svg focusable="false" class="icon icon__info button__icon">
                    <use href="#f-icon-circle" />
                </svg>
                <svg focusable="false" class="icon button__icon">
                    <use href="#f-icon-i" />
                </svg>
            </span>
            <span class="sr-only"> Denna text syns bara för skärmläsare. </span>
        </button>
    </div>
</div>
<input type="text" class="sr-separator" maxlength="50" />
```
