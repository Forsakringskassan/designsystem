---
title: Version 6 migreringsguide
short-title: Sammanfattning
name: migrating-to-v6
sortorder: 1
layout: article
---

## Sammanfattning

- Vi har tagit bort stöd för containermanéret då det inte uppfyller krav på tillgänglighet.
  De relaterade komponenterna formulär (FForm), formulärsteg (FFormStep) har tagits bort.

- Modal (FModal): Knappordningen är ändrad i modaler så att den sekundära knappen ligger före den primära knappen.
  Anledningen är att användare inte ska ändra något av misstag, till exempel ta bort något.

- Kryssruta och radioknapp: De gamla grupperingskomponenterna för kryssruta och radioknapp har tagits bort, använd istället {@link migrating-to-fieldset FFieldset}.

- Sidhuvud (FPageHeader): Komponenten innehåller inte längre länk eller logotyp som standard.

- Ett antal andra funktioner, typer och komponenter är också borttagna.

- Pageobject: Ett antal deprekerade metoder är borttagna (bland annat trimmedText()).

- Valideringsservice: Den deprekerade validatorn personnummer är borttagen, använd istället validatorerna personnummerFormat och personnummerLuhn.

- Tema och variabler: Designsystemet tillhandahåller nu endast ett tema.
  Som konsument finns det fortfarande möjlighet att själv tillhandahålla specifika tillämpningar.

- Formatbeskrivning etikett: Klassnamnet för formatbeskrivning på etikett är ändrat.

## `@fkui/design`

**Borttaget**:

- {@link migrating-to-v6-design#fmodal_deprekerade_css_klasser `modal__dialog-container-large`}
- {@link migrating-to-v6-design#fmodal_deprekerade_css_klasser `modal__dialog-container-fullscreen`}
- {@link migrating-to-v6-design#deprekerade_css_variabler_exluderade_fran_standardtema `@fkui/css-variables`}
- {@link migrating-to-v6-design#logotyper_borttagna `@fkui/design/src/assets/images`}
- {@link migrating-to-v6-design#navbar_borttagen `navbar`}

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

- {@link migrating-to-v6-cypress-pageobjects#trimmedtext `trimmedText()`}
- {@link migrating-to-v6-cypress-pageobjects#fmessageboxpageobject `FMessageBoxPageObject.title()`}
- {@link migrating-to-v6-cypress-pageobjects#fmessageboxpageobject `FMessageBoxPageObject.body()`}
- {@link migrating-to-v6-cypress-pageobjects#floaderpageobject `FLoaderPageobject.loader()`}
- {@link migrating-to-v6-cypress-pageobjects#fnavigationmenupageobject `FNavigationMenuPageobject.menu()`}
- {@link migrating-to-v6-cypress-pageobjects#ftooltippageobject `FTooltipPageObject.content()`}
