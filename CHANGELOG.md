# CHANGELOG

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
