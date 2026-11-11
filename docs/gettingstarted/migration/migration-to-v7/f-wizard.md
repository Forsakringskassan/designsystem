---
title: "Version 7 migreringsguide: FWizard"
short-title: FWizard
name: migrating-to-v7-f-wizard
layout: article
---

## `@fkui/vue`

### Fokushantering för steg för steg-guide (`FWizard`)

I version 7 är initialt fokus på det första steget avstängt som standard.

Om du vill att det första steget ska få fokus när guiden öppnas, lägg till `focus-initial-step`:

```diff
-<f-wizard header-tag="h2">
+<f-wizard header-tag="h2" focus-initial-step>
    <!-- guidesteg -->
</f-wizard>
```

Om du inte vill att det första steget ska få fokus när guiden öppnas behöver du inte längre lägga till någon fokusprop.
Ta bort `disable-initial-focus` från befintlig kod om den används, den finns inte längre i version 7.

### Fellista för steg för steg-guide (`FWizardStep`)

I version 7 visas fellistan inte längre som standard i ett guidesteg.

Om du vill visa fellistan, lägg till `use-error-list` på `f-wizard-step`:

```diff
-<f-wizard-step key="step1" title="Steg 1">
+<f-wizard-step key="step1" title="Steg 1" use-error-list>
    <!-- innehåll -->
</f-wizard-step>
```

Om du redan använder `:use-error-list="false"` kan du ta bort propen eftersom det nu är standardbeteendet.
