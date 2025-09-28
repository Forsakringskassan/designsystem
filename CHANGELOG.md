# CHANGELOG

## 6.20.0 (2025-09-28)

### Features

* **@fkui/icon-lib-default:** add ellipsis icon (refs SFKUI-6500) ded7a01

### Bug Fixes

* **@fkui/vue:** add missing `iconLibrary` prop to `FButton` (refs SFKUI-6500) aec9d97
* **@fkui/vue:** f-form-modal event typing (refs SFKUI-6500) 6cfd9cf
* **@fkui/vue:** fix `FButton` `type` attribute not being set (refs SFKUI-6500) cb7cf47
* **deps:** update dependency sass to v1.93.1 5225028
* **deps:** update dependency sass to v1.93.2 c5ba8de
* **deps:** update vue monorepo to v3.5.22 caa295a

## 6.19.1 (2025-09-24)

### Bug Fixes

* **deps:** update dependency sass to v1.93.0 e21c4a3

## 6.19.0 (2025-09-19)

### Features

* **@fkui/design, @fkui/icon-lib-default, @fkui/theme-dark, @fkui/theme-default, @fkui/vue:** add spinner to `FButton` with async operation (refs SFKUI-7248) 142c630

## 6.18.1 (2025-09-17)

### Bug Fixes

* bugfixes for FTable component (refs SFKUI-6500) 26611df

## 6.18.0 (2025-09-11)

### Features

* **@fkui/design, @fkui/vue-labs, @fkui/vue:** add f-table component draft (refs SFKUI-7265) 8e9ce84
* **@fkui/vue:** trigger v-model update earlier in combobox component (refs SFKUI-7314) 359e589

### Bug Fixes

* **deps:** update dependency i18next to v25.5.0 ddc5a49
* **deps:** update dependency i18next to v25.5.2 ([#661](undefined/Forsakringskassan/designsystem/issues/661)) a7b0569
* **deps:** update dependency sass to v1.92.0 5fce740
* **deps:** update dependency sass to v1.92.1 41fc8ff
* **deps:** update vue monorepo to v3.5.21 900beaf

## 6.17.0 (2025-09-05)

### Features

* **@fkui/design:** update component contextmenu with semantic color variables (refs SFKUI-7302) d3690f3

### Bug Fixes

* **@fkui/design, @fkui/vue:** combobox listbox option not highlighted (refs SFKUI-6500) 84cda30

## 6.16.1 (2025-09-03)

### Bug Fixes

* **deps:** update dependency dayjs to v1.11.18 cf24fec
* **deps:** update dependency i18next to v25.4.0 b31feab
* **deps:** update dependency i18next to v25.4.1 0bdc8b3
* **deps:** update dependency i18next to v25.4.2 cae287d
* **deps:** update dependency sass to v1.91.0 a852ee2
* **deps:** update vue monorepo to v3.5.19 0efba11
* **deps:** update vue monorepo to v3.5.20 c8a4eec

## 6.16.0 (2025-08-22)

### Features

* **@fkui/design, @fkui/theme-default, @fkui/vue:** add year selector to calendar component (refs SFKUI-7246) 963fdd8
* **@fkui/vue:** new `FButton` component (refs SFKUI-7248) 4792668

### Bug Fixes

* **@fkui/vue:** `FSortFilterDataset` use current sort on data change (fixes SFKUI-7310) 0fdbb8e, closes #618
* **@fkui/vue:** fix `FCrudDataset` delete on nested items (fixes SFKUI-7084) 2df70c8
* **deps:** update dependency i18next to v25.3.4 f97ffd3
* **deps:** update dependency i18next to v25.3.6 9384f5a

## 6.15.0 (2025-08-09)

### Features

* **@fkui/logic, @fkui/vue:** new `ValidationService.setErrorMessages` with better control over merges (refs SFKUI-6500) 68aa647
* **@fkui/logic:** add `assertRef` function (refs SFKUI-6500) dcc6405
* **@fkui/logic:** add `assertSet` function (refs SFKUI-6500) 4417f84

### Bug Fixes

* **@fkui/design:** numeric table column headers not right aligned (refs SFKUI-6500) b1edbf6, closes #599
* **@fkui/design:** table message box content centered (refs SFKUI-6500) f3e8d32, closes #598
* **@fkui/design:** table message box icon alignment error (refs SFKUI-6500) 0b877ba, closes #598
* **@fkui/vue:** `hasSlot()` returns `true` for nested vue components (fixes SFKUI-7303) 255dec5
* **deps:** update dependency sass to v1.90.0 17b8da7
* **deps:** update vue monorepo to v3.5.18 eaafb04

## 6.14.0 (2025-07-22)

### Features

* **@fkui/design:** expose table scss variables (refs SFKUI-6500) 137e28a
* **@fkui/design:** forward sass variables from components (refs SFKUI-6500) 12c4c7d
* **@fkui/vue:** remove `FFileItem` icon stack (fixes SFKUI-7249) cd47c24

### Bug Fixes

* **@fkui/design:** fix configuring `@fkui/design` with sass `[@use](undefined/use) .. with` (refs SFKUI-6500) 1a8cd22, closes #582
* **@fkui/design:** unnecessary horizontal scroll bar shown for fieldsets with tooltips (fixes SFKUI-7292) 78e2efb, closes #544
* **@fkui/vue:** fix `FSortFilterDataset` focus on clear search (fixes SFKUI-7080) 705a1a4
* **deps:** update dependency i18next to v25.3.1 7ce8969
* **deps:** update dependency i18next to v25.3.2 675bbe5

## 6.13.0 (2025-07-07)

### Features

* **@fkui/design:** update errorlist tokens (refs SFKUI-7290) adcdffb
* **@fkui/vue:** make it possible to start minimizablepanel minimized (refs HLS-32397) d52f2cc
* **deps:** update dependency svgo to v4 acb447a

### Bug Fixes

* **@fkui/vue:** allow `aria-label` on `FList` (refs SFKUI-6500) a277350
* **@fkui/vue:** f-navigation-menu handles component is unmounted before resize handler fires (refs HLS-34566) c84d7f9
* **deps:** update dependency i18next to v25.3.0 a7b31dc
* **deps:** update vue monorepo to v3.5.17 60159ba

## 6.12.0 (2025-06-18)

### Features

* **@fkui/date:** add `FDate.previous()` for symmetry with `next()` (refs SFKUI-6500) 0d9a43b
* **@fkui/date:** new `clamp()` function to limit date values between min/max (refs SFKUI-6500) e55c2b6
* **@fkui/date:** new `FYear` class representing a year (refs SFKUI-6500) 3a4bab9
* **@fkui/design:** semantic tokens and HCM support on checkbox (refs SFKUI-7178) eaf7628
* **@fkui/design:** semantic tokens and HCM support on radio button (refs SFKUI-7179) 7b069fe
* **@fkui/design:** update dialogue tree semantic tokens (refs SFKUI-7206) 5213cba
* **@fkui/design:** update progressbar with semantic tokens for colors (refs SFKUI-7273) a52dc04
* **@fkui/theme-default:** deprecated color variables progressbar (refs SFKUI-7273) 0fa50fb

## 6.11.0 (2025-06-16)

### Features

* **@fkui/vue:** deprecate `FTableColumnPageObject` (refs SFKUI-6500) aa42b2d

### Bug Fixes

* **@fkui/vue:** use a public symbol for `useResize()` if consumer needs to recreate it (fixes SFKUI-7285) 88e845f
* **deps:** update dependency glob to v11.0.3 7e2ad9d

## 6.10.0 (2025-06-13)

### Features

* **@fkui/design, @fkui/theme-default:** deprecated calendar variables (refs SFKUI-6990) 9f905de
* **@fkui/design, @fkui/theme-default:** tokens calendar components (refs SFKUI-6990) ea497a4

### Bug Fixes

* **@fkui/design, @fkui/vue:** fix table button broken padding (refs SFKUI-6500) c4b2305
* **@fkui/design:** properly expose `densify()` function (refs SFKUI-6500) 42aa981
* **@fkui/tsconfig:** use `bundler` as default `moduleResolution` in `@fkui/tsconfig/recommended` (refs SFKUI-6500) 0e0e87b
* **@fkui/vue:** `FSortFilterDataset` respect sort attribute after dataset update (fixes SFKUI-6399) 80fc166
* **@fkui/vue:** allow passing unwrapped datatypes to `useResize()` (refs SFKUI-6500) 11e415b
* **deps:** update dependency i18next to v25.2.1 88beaa7
* **deps:** update dependency sass to v1.89.1 98dbde0
* **deps:** update dependency sass to v1.89.2 e6b78f8
* **deps:** update vue monorepo to v3.5.15 1474ed9
* **deps:** update vue monorepo to v3.5.16 8b12e97
* **html-validate:** allow `FWizardStep` in `<template>` (refs SFKUI-6500) 775d6b6
* **html-validate:** handle Vue SFC `<template>` in `fkui/no-template-modal` rule (refs SFKUI-6500) 45728c5

## 6.9.0 (2025-05-23)

### Features

* **@fkui/design, @fkui/theme-default:** update semantic tokens for select (refs SFKUI-7236) 7275a1f
* **@fkui/vue:** deprecate `FCrudButton` (refs SFKUI-7155) 7650477

### Bug Fixes

* **@fkui/design, @fkui/vue:** reset min width of file item to enable wrapping of its file name (refs FRI-850) a4260c4
* **@fkui/design:** prevent wizard step from overflowing when its content has unbreakable text (refs FRI-850) cee4ffc
* **deps:** update dependency i18next to v25.2.0 e04b932
* **deps:** update vue monorepo to v3.5.14 ([#504](undefined/Forsakringskassan/designsystem/issues/504)) 7766571
* **fkui-vue:** radio field component allows null model value (refs SFKUI-6500) f9bf9d5
* **fkui-vue:** select field component allows null model value (refs SFKUI-6500) b46968f

## 6.8.0 (2025-05-19)

### Features

* **@fkui/design, @fkui/theme-default:** updated semantic tokens for colors (refs SFKUI-7232) 07841f1
* **@fkui/design, @fkui/vue:** update calender navbar styling (refs SFKUI-7243) 8d83771
* **@fkui/design:** button icon and forced colors  (refs SFKUI-6980) df48aae
* **@fkui/icon-lib-builder:** allow SCSS entry in icon lib (refs SB-4982) cbac36c

### Bug Fixes

* **@fkui/vue:** `FInteractiveTable` do not activate row on delete (refs SFKUI-4237) f413fd3
* **@fkui/vue:** `FInteractiveTable` focus correct interactable on delete (fixes SFKUI-5257) 88886f4
* **@fkui/vue:** add filterAttributes prop for FSortFilterDataset (fixes SFKUI-6581) 2ff2a96
* **@fkui/vue:** add prop to FLoader to toggle focus on overlay (fixes SFKUI-5466) 38bbbce
* **deps:** update dependency i18next to v25.1.3 1bb0012
* **deps:** update dependency sass to v1.89.0 29d053b

## 6.7.1 (2025-05-15)

### Bug Fixes

* **@fkui/design:** prevent fieldset from overflowing when its content has unbreakable text (refs FRI-850) b2285d9
* **@fkui/vue:** selector in turnOffAnimation in wizard pageobject (refs SFKUI-6500) 8bd6456

## 6.7.0 (2025-05-14)

### Features

* **@fkui/design, @fkui/theme-default, @fkui/vue:** new `table__button` class for table action buttons (refs SFKUI-7155) 2c18d8e
* **@fkui/design:** new `table__anchor` class for links in tables (refs SFKUI-7155) e4701c2
* **@fkui/design:** remove styling for table scroll values `VERTICAL` and `BOTH` (refs SFKUI-7119) 1022932
* **@fkui/vue:** add `f-fixed-pane` component (refs SFKUI-6500) b154d07
* **@fkui/vue:** expose `FCrudDataset` button callbacks as slot attributes (refs SFKUI-7155) 9ad32b7
* **@fkui/vue:** new `FTableButton` component (refs SFKUI-7155) dc0e212
* **@fkui/vue:** new html-validate rule to detect when table checkbox-description is missing (refs SFKUI-6500) c08c906

### Bug Fixes

* **@fkui/design, @fkui/vue:** issue with FWizardStep header overflow (fixes SFKUI-6168) 3f3b018
* **@fkui/design:** horizontal scroll bar shown when `scroll="vertical"` (fixes SFKUI-7119) 901ac00
* **@fkui/design:** visible hover effect for inactive bordered checkboxes (fixes SFKUI-7214) feac7d6
* **@fkui/vue:** fix malformed cells on empty table (fixes SFKUI-7219) 71bfcc7, closes #454
* **@fkui/vue:** use distinct translation key `fkui.interactive-table.expand` (refs SFKUI-7070) ee58c2a
* **deps:** update dependency i18next to v25.0.2 afe49a6
* **deps:** update dependency i18next to v25.1.1 ffbf811
* **deps:** update dependency i18next to v25.1.2 4d7f2b1
* **deps:** update dependency vue-router to v4.5.1 6fff20a

## 6.6.0 (2025-04-25)

### Features

* **@fkui/design, @fkui/vue:** add directive and plugin for formatting number (refs SFKUI-7093) dbf2f81
* **@fkui/design, @fkui/vue:** add plusgiro directive formatter (refs SFKUI-7093) 4f21f03
* **@fkui/design, @fkui/vue:** add postal code directive formatter (refs SFKUI-7093) ee397aa
* **@fkui/design, @fkui/vue:** forward `focus-indicator()` mixin (refs SFKUI-6500) bef76a2
* **@fkui/vue:** add `FInteractiveTablePageObject.cell()` (refs SFKUI-6500) 97b1dec
* **@fkui/vue:** add bankgiro directive formatter (refs SFKUI-7093) 6eb783c
* **@fkui/vue:** add date directive formatter (refs SFKUI-7093) ff47fc7
* **@fkui/vue:** add minimizable panel (refs SFKUI-7191) 10e0e24
* **@fkui/vue:** add organisationsnummer directive formatter (refs SFKUI-7093) c25c76b
* **@fkui/vue:** add personnummer directive formatter (refs SFKUI-7093) fde3cd5
* **@fkui/vue:** add text directive formatter (refs SFKUI-7093) 6615f36
* **@fkui/vue:** new component `FDetailsPanel` (refs SFKUI-6993) 7aeec09

### Bug Fixes

* **@fkui/design, @fkui/vue:** header element in FWizardStep anchor when completed (fixes SFKUI-7207) d3712cc
* **deps:** update dependency i18next to v25.0.1 79f1b77

## 6.5.0 (2025-04-23)

### Features

* **deps:** update dependency i18next to v25 223cfd7

### Bug Fixes

* **@fkui/vue:** `FTableColumn` `name` only required with `FSortFilterDataset` (fixes SFKUI-7059) 3dc3454, closes #312
* **@fkui/vue:** default value in FSortFilterDataset dropdown (fixes SFKUI-7083) 401f110
* **@fkui/vue:** fix "set operation on key value failed" on `FInteractiveTable` (refs SFKUI-6500) 7bb357e
* **@fkui/vue:** fix "set operation on key value failed" on `FTableColumn` (refs SFKUI-6500) 0fe7409
* **@fkui/vue:** wrong button order in `FFormModal` (fixes SFKUI-7185) ([#429](undefined/Forsakringskassan/designsystem/issues/429)) 886b8f4

## 6.4.0 (2025-04-11)

### Features

* **@fkui/design, @fkui/theme-default:** add semantic tokens for colors to wizard (refs SFKUI-7160) 23a3c86
* **@fkui/design, @fkui/theme-default:** remove background for selected list/table rows (refs SFKUI-4410) ([#413](undefined/Forsakringskassan/designsystem/issues/413)) af9f3ee
* **@fkui/design:** add styling `text-align: left` on component `th` (fixes SFKUI-7151) 86c1b0f
* **@fkui/design:** update card semantic tokens (refs SFKUI-7166) 6c50ad5
* **@fkui/design:** update entrypoint with tokens  (refs SFKUI-7040) 6c2f0f1
* **@fkui/vue:** support custom buttons in `FCrudDataset` (fixes SFKUI-7068) 07ee345, closes #321
* **deps:** update dependency express to v5 6c388e3
* **deps:** update dependency express to v5 a48fef0

### Bug Fixes

* **@fkui/design:** collapsed expandable rows in `FInteractiveTable` shown as white gaps in iOS browsers (fixes SFKUI-6984) ([#406](undefined/Forsakringskassan/designsystem/issues/406)) 40421a7
* **@fkui/vue:** card throws error when content is validated (fixes SFKUI-7190) 4c1e690

## 6.3.1 (2025-03-25)

### Bug Fixes

* **@fkui/test-utils, @fkui/tsconfig:** use `moduleResolution` `bundler` instead of `node16` (refs SFKUI-6500) effa960
* **@fkui/vue:** move focus with arrow keys in `FInteractiveTable` (fixes SFKUI-7136) 2231d03
* **@fkui/vue:** set `keyAttribute` as optional for `FDataTable` (fixes SFKUI-6936) 3c64d99, closes #158
* **@fkui/vue:** set `keyAttribute` as optional for `FInteractiveTable` (fixes SFKUI-6936) 2f8d465, closes #158
* **@fkui/vue:** set `keyAttribute` as optional for `FList` (fixes SFKUI-6936) bb28be4, closes #158
* **deps:** update dependency i18next to v24.2.3 ac251de
* stage `publiccode.yml` after prepare (refs SFKUI-6500) fe63716

## 6.3.0 (2025-03-11)

### Features

* **@fkui/date, @fkui/i18next-translate, @fkui/logic, @fkui/test-utils, @fkui/tsconfig, @fkui/vue-labs, @fkui/vue:** new package `@fkui/tsconfig` (refs SFKUI-6500) e036065
* **@fkui/design, @fkui/theme-default:** semantic tokens label (refs SFKUI-6835) c249d5e
* **@fkui/theme-default, @fkui/vue:** new component `FResizePane` (refs SFKUI-6993) d01b0a1
* **@fkui/vue-labs:** `@fkui/vue-labs/pageobject` moved to `@fkui/vue-labs/cypress` (refs SFKUI-6500) 1676ebf
* **@fkui/vue:** set colors on `FPageLayout` areas (refs SFKUI-6500) 37d6370

### Bug Fixes

* **@fkui/design:** anchor underline offset relative to parent element. [#345](undefined/Forsakringskassan/designsystem/issues/345) (refs SB-4982) 1041436
* **@fkui/vue:** `FInteractiveTable` do not render as expandable row if empty (fixes SFKUI-7078) 2fdf973, closes #333
* **@fkui/vue:** `FInteractiveTable` set selected on `v-model` change (fixes SFKUI-7052) f8b8af3, closes #293
* **@fkui/vue:** fix `FPageLayout` size on IOS (refs SFKUI-6500) 69bbec5
* **@fkui/vue:** remove `tabindex` from `FList` `ul` element (fixes SFKUI-5962) fb7ba82
* **@fkui/vue:** text field components allow null model value (fixes SFKUI-7076) 840d200, closes #316
* **deps:** update dependency core-js to v3.41.0 5c79e8b

## 6.2.0 (2025-02-28)

### Features

* **@fkui/vue:** add `useAreaData()` composable (refs SFKUI-6992) 8e62c60
* **@fkui/vue:** cypress pageobjects as esm hybrid package (refs SFKUI-6500) a3bfe08
* **@fkui/vue:** new `FPageLayout` component (refs SFKUI-6992) 26f0d41

### Bug Fixes

* **@fkui/design, @fkui/theme-default:** changed semantic tokens for icons and color for some semantic tokens  (refs SFKUI-7038) 98e7a6c
* **@fkui/vue:** add offset top to IPopupListbox (refs SFKUI-6500) cabd15b

## 6.1.0 (2025-02-20)

### Features

* **@fkui/design, @fkui/theme-default:** added semantic tokens to Messagebox (refs SFKUI-6986) 3472153
* **@fkui/design, @fkui/theme-default:** update Modal with semantic tokens  (refs SFKUI-7034) b759bc0
* **@fkui/vue:** `FCrudDataset` generic and type-safe (refs SFKUI-6500) 5fa2d7b
* **@fkui/vue:** `FDataTable` generic and type-safe (refs SFKUI-6500) 3381443
* **@fkui/vue:** `FInteractiveTable` generic and type-safe (refs SFKUI-6500) 908146a
* **@fkui/vue:** `FList` generic and type-safe (refs SFKUI-6500) 21bf92e
* **@fkui/vue:** `FSortFilterDataset` generic and type-safe (refs SFKUI-6500) 4b27b43
* **@fkui/vue:** `useSlotUtils.hasSlot()` takes same arguments options api `hasSlot()` (refs SFKUI-6500) 14707dd

### Bug Fixes

* **@fkui/design, @fkui/theme-default, @fkui/vue:** remove `navbar` styles (refs SFKUI-7039) 058eee5
* **@fkui/design, @fkui/theme-default:** set sideEffects field for css packages (refs SFKUI-6500) d7b993f
* **@fkui/design, @fkui/vue:** `FCalendar` improved accessablility (fixes SFKUI-7011) 6fa234d
* **@fkui/design:** fix action buttons wrapping in `FInteractiveTable` (fixes SFKUI-6902) 36ec7ef, closes #296
* **@fkui/design:** fix missing type declaration for `@fkui/design` (refs SFKUI-6500) a711cc6, closes #288
* **@fkui/theme-default:** fix missing type declaration for `@fkui/theme-default` (refs SFKUI-6500) a6c7a6e, closes #287
* **@fkui/vue:** use `teleportTarget` in `IPopupError` (refs SFKUI-7050) 3314ba7

## 6.0.1 (2025-02-11)

### Bug Fixes

* **@fkui/design:** focus in highcontrast mode (refs SFKUI-6909) a0e5ea6
* **@fkui/vue:** stepNumber for cancel button slot in FWizardStep (refs SFKUI-6500) 7a9928f
* **deps:** fix broken peerDependencies (refs SFKUI-6500) 6a4a995

För äldre versioner se:

- {@link changelog-v5 Changelog för v5}

## 6.0.0 (2025-02-10)

Denna release innehåller brytande ändringar.
Läs mer om hur du {@link migrating-to-v6 migrerar till version 6}.

### ⚠ BREAKING CHANGES

* **@fkui/design, @fkui/vue-labs:** `@fkui/design` no longer provides logotype images.
* **@fkui/design, @fkui/vue:** Consumers of `entrypoint` need to define their disered width.
* **@fkui/design, @fkui/vue:** `FPageHeader` no longer provides default content in
`logo` slot.
* **@fkui/vue:** The `FProgressbarPageObject.ariaValueNow()` method has been
renamed to `value()` and returns `number` instead of `string`.
* **@fkui/vue:** default `buttonOrder` is now `RIGHT_TO_LEFT`.
* **@fkui/vue:** The `change` event has been removed from `FCrudDataset`.
* **@fkui/vue:** The `change` event has been removed from `FDialogueTree`.
* **@fkui/vue:** The `update` event has been removed from `FInteractiveTable`.
* **@fkui/vue:** The `update` event has been removed from `FList`.
* **@fkui/vue:** The `change` event has been removed from `FWizard`.
* **@fkui/vue:** The `update` event has been removed from `FTextField`.
* **@fkui/vue:** The `change` event has been removed from `FCalendar`.
* **@fkui/vue:** `@fkui/vue/pageobject` has been renamed to `@fkui/vue/cypress`.
* **@fkui/design, @fkui/vue-labs, @fkui/vue:** `discreteDescriptionClass` has been renamed to
`formatDescriptionClass` in `FLabel` and all components using `FLabel`.
* **@fkui/vue:** FTooltip now requires a `headerTag` if it has a header-slot
* **@fkui/logic, @fkui/vue:** Deprecated `FForm` has been removed.
* **@fkui/vue:** Deprecated `FFormStep` has been removed.
* **@fkui/vue:** Deprecated `FFormStepButton` has been removed.
* **@fkui/logic:** The internal function `isRadiobuttonOrCheckbox(..)` has been removed.
* **@fkui/logic:** The deprecated parameter `timeLimitMillis` to `setCookie(..) has been removed.
* **@fkui/logic:** The deprecated and obsolete function `applyValidationMessages(..)` has been removed.
* **@fkui/logic:** The deprecated constant `FORMAT_3_DIGITS_GROUP` has been removed.
* **@fkui/logic:** The deprecated constant `WHITESPACE_PATTERN` has been removed.
* **@fkui/logic:** The deprecated constant `DATE_REGEXP_WITH_DASH` has been removed.
* **@fkui/logic:** The deprecated and legacy entrypoint
`@fkui/logic/lib/polyfills` has been removed and replaced with `@fkui/logic/polyfills`.
* **@fkui/vue:** The following deprecated methods from Cypress Pageobjects has
been removed:

- `FTooltipPageObject.contents()`.
- `FNavigationMenuPageObject.menu()`.
- `FMessageBoxPageobject.body()`.
- `FMessageBoxPageobject.title()`.
- `FLoaderPageobject.loader()`.
* **@fkui/vue:** The deprecated configuration options `modalTarget` and
`popupTarget` has been removed and replaced with `teleportTarget`.
* **@fkui/vue:** `getTextFromScopedSlot(..)` function has been removed.
* **@fkui/vue:** Deprecated validator `personnummer` has been removed.
Use validators `personnummerFormat` and `personnummerLuhn` instead.
* **@fkui/logic, @fkui/vue:** Deprecated validator `personnummer` has been removed.
Use validators `personnummerFormat` and `personnummerLuhn` instead.
* **@fkui/vue:** The deprecated `skipLinkHref` prop has been removed from `FPageHeader`.
* **@fkui/vue:** Deprecated `FFormModal` slots `submit-button-text` and
`cancel-button-text` removed.
* **@fkui/vue-labs, @fkui/vue:** The deprecated `trimmedText()` method has been removed from all pageobjects.
* **@fkui/vue:** The deprecated `FCheckboxGroup` component and the deprecated alias
`FCheckboxGroupField` has been removed.
* **@fkui/vue:** The deprecated `FRadioGroup` component and the deprecated alias
`FRadioGroupField` has been removed.

### Features

* **@fkui/design, @fkui/theme-default, @fkui/vue-labs, @fkui/vue:** add `@fkui/theme-default` package (refs SFKUI-6970) 466cc2e
* **@fkui/design, @fkui/theme-default, @fkui/vue:** add `FLogo` component (refs SFKUI-6960) d72c041
* **@fkui/design, @fkui/vue-labs, @fkui/vue:** rename `discreteDescriptionClass` to `formatDescriptionClass` (refs SFKUI-7002) d0193d4
* **@fkui/design, @fkui/vue-labs:** remove logos from `@fkui/design` (refs SFKUI-6938) 90ef626
* **@fkui/design, @fkui/vue:** entrypoint always uses full width (refs SB-4982) b0ae343
* **@fkui/design, @fkui/vue:** remove `FPageHeader` `logo` slot content (refs SFKUI-6960) 129b092
* **@fkui/design:** remove deprecated alias `modal__dialog-container-{large,fullscreen}` classes (refs SFKUI-6963) be16655
* **@fkui/design:** updated button with semantic tokens (refs SFKUI-6988) 8a6d96c
* **@fkui/logic, @fkui/vue:** remove deprecated `FForm` (refs SFKUI-6961) eaef002
* **@fkui/logic, @fkui/vue:** remove deprecated validator `personnummer` (refs SFKUI-6965) 8c3f6c2
* **@fkui/logic:** remove deprecated `applyValidationMessages` function from `@fkui/logic` (refs SFKUI-6963) 66cd2ed
* **@fkui/logic:** remove deprecated `DATE_REGEXP_WITH_DASH` constant from `@fkui/logic` (refs SFKUI-6963) de34aec
* **@fkui/logic:** remove deprecated `FORMAT_3_DIGITS_GROUP` constant from `@fkui/logic` (refs SFKUI-6963) 2d46557
* **@fkui/logic:** remove deprecated `WHITESPACE_PATTERN` constant from `@fkui/logic` (refs SFKUI-6963) f214863
* **@fkui/logic:** remove deprecated entrypoint `@fkui/logic/lib/polyfills` (refs SFKUI-6963) 381df2e
* **@fkui/logic:** remove deprecated parameter `timeLimitMillis` from `setCookie(..)` (refs SFKUI-6963) 8d2777f
* **@fkui/logic:** remove internal function `isRadiobuttonOrCheckbox` from `@fkui/logic` (refs SFKUI-6963) c9e5638
* **@fkui/vue-labs, @fkui/vue:** remove deprecated `trimmedText()` method from all pageobjects (refs SFKUI-6963) a6b1df5
* **@fkui/vue:** change default `buttonOrder` to `RIGHT_TO_LEFT` (refs SFKUI-6500) 8334635
* **@fkui/vue:** deprecate template modals (refs SFKUI-6841) 463e617, closes #54
* **@fkui/vue:** emit change event for all input components (refs SFKUI-6963) 1790bfe
* **@fkui/vue:** group-validity event for `FValidationGroup` formalized (refs SFKUI-6500) 3cfd520
* **@fkui/vue:** new `FSelectField.selectedOption()` method (refs SFKUI-6500) d37456e
* **@fkui/vue:** remove `change` event from `FCalendar` (refs SFKUI-6963) 41269e1
* **@fkui/vue:** remove `change` event from `FWizard` (refs SFKUI-6963) b9253d5
* **@fkui/vue:** remove `update` event from `FTextField` (refs SFKUI-6963) 1fc5bde
* **@fkui/vue:** remove deprecated `{submit,cancel}-button-text` from `FFormModal` refs (refs SFKUI-6963) 6e62fe4
* **@fkui/vue:** remove deprecated `change` event from `FCrudDataset` (refs SFKUI-6963) 98c6d1e
* **@fkui/vue:** remove deprecated `change` event from `FDialogueTree` (refs SFKUI-6963) 16c3329
* **@fkui/vue:** remove deprecated `config.modalTarget` and `config.popupTarget` (refs SFKUI-6963) 6bc9959
* **@fkui/vue:** remove deprecated `FCheckboxGroup` and `FCheckboxGroupField` (refs SFKUI-6963) 2350d9c
* **@fkui/vue:** remove deprecated `FFormStep` (refs SFKUI-6961) 19058f0
* **@fkui/vue:** remove deprecated `FFormStepButton` (refs SFKUI-6961) 57b0035
* **@fkui/vue:** remove deprecated `FRadioGroup` and `FRadioGroupField` (refs SFKUI-6963) 4500e05
* **@fkui/vue:** remove deprecated `getTextFromScopedSlot(..)` function (refs SFKUI-6963) 778d9d7
* **@fkui/vue:** remove deprecated `skipLinkHref` prop from `FPageHeader` (refs SFKUI-6963) a7a46c2
* **@fkui/vue:** remove deprecated `update` event from `FInteractiveTable` (refs SFKUI-6963) e3b9ef9
* **@fkui/vue:** remove deprecated `update` event from `FList` (refs SFKUI-6963) 85ef64d
* **@fkui/vue:** remove deprecated methods from Cypress pageobjects (refs SFKUI-6963) e0207cb
* **@fkui/vue:** remove deprecated validator `personnummer` (refs SFKUI-6965) a2b3a23
* **@fkui/vue:** rename `@fkui/vue/pageobject` to `@fkui/vue/cypress` (refs SFKUI-6963) 9652321
* **@fkui/vue:** rename `FProgressbarPageObject.ariaValueNow()` to `value()` (refs SFKUI-6500) c05bdfb

### Bug Fixes

* **@fkui/vue:** combobox reactive options (fixes SFKUI-7010) 3c74336
* **@fkui/vue:** fix `aria-label` prop on `FProgressbar` (fixes SFKUI-7004) 3c5c4f0
* **@fkui/vue:** update FTooltip to require headerTag if header exists (refs SFKUI-6972) 1efb8fe
* **deps:** update dependency i18next to v24.2.2 8346550
