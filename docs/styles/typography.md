---
title: Typografi
layout: pattern
---

Typografin för Försäkringskassan har ett brett användningsområde och kan användas både i rubriker och löpande text.

## Rubriker

Automatiskt så är h1 stylad som rubriknivå 1 och så vidare ner till h6.

```html
<h1>Rubriknivå 1 (h1)</h1>
<h2>Rubriknivå 2 (h2)</h2>
<h3>Rubriknivå 3 (h3)</h3>
<h4>Rubriknivå 4 (h4)</h4>
<h5>Rubriknivå 5 (h5)</h5>
<h6>Rubriknivå 6 (h6)</h6>
```

### Visuell rubriknivå

För att en applikation ska vara tillgänglig ska det bara finnas en h1, och sedan ska resten av sidan följa rubrikstrukturen.
I vissa fall visas struktur på ett annat sätt för seende. Till exempel med extra luft eller ett streck och en annan visuell rubriknivå.
Genom att sätta klassen `heading--h<nivå>` är det möjligt att styla om en heading att visuellt se ut som en annan rubriknivå.

```html
<h2 class="heading--h4">Rubriknivå h2 (visuellt presenterad som h4)</h2>
```

### Fetmarkerad text som rubrik

I fall en komponent kan ligga på fler ställen i rubrikstrukturen går det att styla headings som strong. Använd då `heading--strong`.

```html
<h3 class="heading--strong">Fetmarkerad text som rubrik</h3>
<p>Text i en komponent som kan ligga på flera ställen i rubrikstrukturen.</p>
```

## Paragrafer

```html
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel quam eget ex
    commodo tincidunt at in sem. Aenean euismod lorem vitae diam sodales, sit
    amet scelerisque metus vestibulum. Fusce ut dolor id ante efficitur tempor
    lacinia at mauris. Vivamus ac dui a lorem molestie mattis.
</p>

<p>
    Donec ac nisl elementum, facilisis quam id, sagittis felis. Vestibulum ante
    ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
    inceptos himenaeos. Nulla facilisi. Duis nibh velit, convallis luctus quam
    sed, lobortis ultricies libero. Phasellus in lacus risus.
</p>
```

## Generella textelement

### Textformatering

```html
<b>Här är en fetmarkerad text</b>
<br />
<i>Kursiv text</i>
<br />
<del>Överstryken text</del>
<br />
```

### Listor

#### Numrerad lista

```html
<ol>
    <li>Kaffe</li>
    <li>Te</li>
    <li>Mjölk</li>
</ol>
```

#### Onumrerad lista

```html
<ul>
    <li>Kaffe</li>
    <li>Te</li>
    <li>Mjölk</li>
</ul>
```

### Tabeller

```html
<table class="table-width">
    <tbody>
        <tr>
            <th scope="col">3</th>
            <th scope="col">A</th>
            <th scope="col">1</th>
        </tr>
        <tr>
            <td>2</td>
            <td>B</td>
            <td>2</td>
        </tr>
        <tr>
            <td>1</td>
            <td>C</td>
            <td>3</td>
        </tr>
    </tbody>
</table>
<!-- [html-validate-disable-next element-permitted-content -- because next is a live example] -->
<style>
    .table-width {
        width: 50%;
    }
</style>
```

### Citat

```html
<blockquote>Ett kort men givande citat.</blockquote>
```

### Inline-block

```html
En mening innehållande ett <code>kodblock</code>.
```

## Riktlinjer

### Minsta teckenstorlek

För att texten ska vara tillgänglig ska vi aldrig använda text under 16px eftersom vi riskerar läsbarheten för användare.

### Kursiv text

Använd aldrig kursiv stil i löpande brödtext. Detta är ett tillgänglighetskrav, då kursiv text försvårar läsningen för till exempel dyslektiker.
