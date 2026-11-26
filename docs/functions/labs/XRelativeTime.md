---
title: XRelativeTime
status: Experimentell
layout: component
component:
    - XRelativeTime
---

Renderar ett `<time>` element med en human-readable "N enheter sedan".

```import live-example
XRelativeTimeLiveExample.vue
```

## Textnycklar

Textnycklar använder [pluraliserings suffixen](https://www.i18next.com/translation-function/plurals) `_one` och `_other`.

| Textnyckel                    | Exempel          |
| ----------------------------- | ---------------- |
| `fkui.time-ago.seconds_one`   | 1 sekund sedan   |
| `fkui.time-ago.seconds_other` | 2 sekunder sedan |
| `fkui.time-ago.minutes_one`   | 1 minut sedan    |
| `fkui.time-ago.minutes_other` | 3 minuter sedan  |
| `fkui.time-ago.hours_one`     | 1 timme sedan    |
| `fkui.time-ago.hours_other`   | 4 timmar sedan   |
| `fkui.time-ago.days_one`      | 1 dag sedan      |
| `fkui.time-ago.days_other`    | 5 dagar sedan    |
| `fkui.time-ago.months_one`    | 1 månad sedan    |
| `fkui.time-ago.months_other`  | 6 månader sedan  |
| `fkui.time-ago.years`         | 1 år sedan       |

## Props, Events & Slots

:::api
vue:XRelativeTime
:::
