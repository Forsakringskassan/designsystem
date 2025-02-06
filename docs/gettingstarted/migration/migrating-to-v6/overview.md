---
title: Version 6 migreringsguide
short-title: Sammanfattning
name: migrating-to-v6
sortorder: 1
layout: article
---

## Sammanfattning

- Det tidigare deprekerade formulärskomponenter "containermanér" (`FForm` och `FFormStep`) är nu borttagna.
- Uppstädning bland tidigare deprekerade funktioner, komponenter, osv.
- Klassnamn och bindings för formatbeskrivning på {@link FLabel} och komponenter baserade på den är ändrat.
- Cypress ändrar namn från `@fkui/vue/pageobject` till `@fkui/vue/cypress`.
- `@fkui/css-variables` har bytt namn till `@fkui/theme-default` och levererar ett standardtema.
- `@fkui/design` levererar enbart standarddesign.
- Standard knappordning i modal har ändrats, se avsnitt {@link migrating-to-v6-vue#konfiguration Konfiguration} .
- `FPageHeader` `logo` slot innehåller inte längre `router-link` eller logotyp som standard.

## `@fkui/design`

**Borttaget**:

- {@link migrating-to-v6-design#fmodal_deprekerade_css_klasser `modal__dialog-container-large`}
- {@link migrating-to-v6-design#fmodal_deprekerade_css_klasser `modal__dialog-container-fullscreen`}
- {@link migrating-to-v6-design#deprekerade_css_variabler_exluderade_fran_standardtema `@fkui/css-variables`}

**Ändrat:**

- {@link migrating-to-v6-design#tillampnings_specifika_leverabler_borttagna `@fkui/design`}

## `@fkui/logic`

**Borttaget**:

- {@link migrating-to-v6-logic#polyfill `@fkui/logic/lib/polyfills`}
- {@link migrating-to-v6-logic#date_regexp_with_dash `DATE_REGEXP_WITH_DASH`}
- {@link migrating-to-v6-logic#whitespace_pattern `WHITESPACE_PATTERN`}
- {@link migrating-to-v6-logic#format_3_digits_group `FORMAT_3_DIGITS_GROUP`}
- {@link migrating-to-v6-logic#applyvalidationmessages `applyValidationMessages()`}
- {@link migrating-to-v6-logic#isradiobuttonorcheckbox `isRadiobuttonOrCheckbox()`}
- {@link migrating-to-v6-logic#validator_personnummer `personnummer`}

**Ändrat:**

- {@link migrating-to-v6-logic#setcookie `setCookie()`}

## `@fkui/vue`

**Borttaget:**

- {@link migrating-to-v6-vue#fkuiconfig_modaltarget_och_fkuiconfig_popuptarget `config.modalTarget`}
- {@link migrating-to-v6-vue#fkuiconfig_modaltarget_och_fkuiconfig_popuptarget `config.popupTarget`}
- {@link migrating-to-v6-vue#fcheckboxgroup_och_fcheckboxgroupfield `FCheckboxGroup`}
- {@link migrating-to-v6-vue#fcheckboxgroup_och_fcheckboxgroupfield `FCheckboxGroupField`}
- {@link migrating-to-v6-vue#fform_fformstep_och_fformstepbutton `FForm`}
- {@link migrating-to-v6-vue#fform_fformstep_och_fformstepbutton `FFormStep`}
- {@link migrating-to-v6-vue#fform_fformstep_och_fformstepbutton `FFormStepButton`}
- {@link migrating-to-v6-vue#fradiogroup_och_fradiogroupfield `FRadioGroup`}
- {@link migrating-to-v6-vue#fradiogroup_och_fradiogroupfield `FRadioGroupField`}
- {@link migrating-to-v6-vue#fradiogroup_och_fradiogroupfield `getTextFromScopedSlot()`}

**Ändrat:**

- {@link migrating-to-v6-vue#fcalendar `FCalendar`}
- {@link migrating-to-v6-vue#fformmodal_slots `FFormModal`}
- {@link migrating-to-v6-vue#fpageheader `FPageHeader`}
- {@link migrating-to-v6-vue#ftextfield `FTextField`}

## Cypress

**Borttaget:**

- {@link migrating-to-v6-cypress-pageobjects#trimmedtext_metoden `trimmedText()`}
- {@link migrating-to-v6-cypress-pageobjects#fmessageboxpageobject `FMessageBoxPageObject.title()`}
- {@link migrating-to-v6-cypress-pageobjects#fmessageboxpageobject`FMessageBoxPageObject.body()`}
- {@link migrating-to-v6-cypress-pageobjects#floaderpageobject_loader_metoden `FLoaderPageobject.loader()`}
- {@link migrating-to-v6-cypress-pageobjects#fnavigationmenupageobject_menu_metoden `FNavigationMenuPageobject.menu()`}
- {@link migrating-to-v6-cypress-pageobjects#ftooltippageobject_content_methoden `FTooltipPageObject.content()`}
