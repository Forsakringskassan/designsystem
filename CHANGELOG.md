# CHANGELOG

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
