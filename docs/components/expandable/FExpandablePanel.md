---
title: Expanderbar panel
status: Produktionsklar
layout: component
component: FExpandablePanel
---

Använd en expanderbar panel för att gruppera information och formulärskomponenter. Med en expanderbar panel kan mängden information som visas vid en första anblick minskas.

```import test-id=example
FExpandablePanelExample.vue
```

En expanderbar panel består av 3 ytor (slots):

- Title: panelens rubrik.
- Default: innehåll som ska visas när panelen är öppen.
- Outside: relaterat innehåll som visas under den öppna panelen.

En expanderbar panel ger möjlighet att uppmärksamma användare på förändringar eller händelser.

```import test-id=notification-example
FExpandablePanelNotificationExample.vue
```

En expanderbar panel kan visa relaterat innehåll under den panelen när den är öppen.

```import test-id=related-example
FExpandablePanelRelatedExample.vue
```

## API

:::api
vue:FExpandablePanel
:::
