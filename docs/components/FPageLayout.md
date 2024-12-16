---
title: FPageLayout
status: Produktionsklar
layout: component
component: FPageLayout
---

## Enkel

```vue static
<script setup>
import { FPageLayout } from "@fkui/vue";
</script>

<template>
    <f-page-layout layout="simple">
        <template #header>
            <header>Header</header>
        </template>

        <template #content>
            <main>
                <h1>Lorem ipsum</h1>
                <p>dolor sit amet</p>
            </main>
        </template>

        <template #footer>
            <footer>Footer</footer>
        </template>
    </f-page-layout>
</template>
```
