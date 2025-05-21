---
title: Riktlinjer för kod
layout: article
---

## CSS

### Vendor-prefix

Vi använder inte vendor-prefix i källkoden utan konsumenten bör använda [autoprefixer][autoprefixer] eller liknande verktyg för att infoga vendor-prefix där det behövs.

Motivering: blir onödigt brus i kodbasen och svårt att manuellt hålla reda på vad som behöver och inte behöver vendor-prefix speciellt när målet rör på sig.
Genom att låta konsumenten hantera det kan de själva ställa in `target` efter behov och då slipper konsumenten även hantera det i sin egna kodbas.

[autoprefixer]: https://github.com/postcss/autoprefixer
