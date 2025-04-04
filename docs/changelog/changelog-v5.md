---
title: CHANGELOG v5
name: changelog-v5
---

Detta är Changelog för version 5.x.
För senaste version se {@link changelog ordinarie Changelog}.

## 5.46.3 (2025-04-04)

### Bug Fixes

- **@fkui/vue:** card throws error when content is validated (fixes SFKUI-7190) a01fbec

## 5.46.2 (2025-02-20)

### Bug Fixes

- **@fkui/vue:** use `teleportTarget` in `IPopupError` (refs SFKUI-7050) 3795b2f

## 5.46.1 (2025-02-10)

### Bug Fixes

- **@fkui/vue:** stepNumber for cancel button slot in FWizardStep (refs SFKUI-6500) d91aeaa

## 5.46.0 (2025-01-23)

### Features

- **@fkui/design, @fkui/logic, @fkui/vue:** support validation on `FCard` (fixes SFKUI-6983) cda8ecb
- **@fkui/vue:** expose stepNumber in slots and beforeNext in FWizardStep (refs SFKUI-6500) 2437bc1

### Bug Fixes

- **@fkui/vue:** switch to role grid in calendar (fixes SFKUI-6943) 87e31fd, closes #172

## 5.45.1 (2025-01-20)

### Bug Fixes

- **@fkui/date:** `FDate` comparsion should not be affected by time (fixes SFKUI-6987) abd720d
- **@fkui/design, @fkui/vue:** use slot content for expandable rows in FInteractiveTable (refs SFKUI-6935) 76a1403, closes #157
- **@fkui/vue:** add v-model and flag for showing the active row (refs SFKUI-5545) 1008caa
- **@fkui/vue:** toggable visability for columns in empty `FInteractiveTable` (fixes SFKUI-6899) e906362
- add new api definition (refs SFKUI-5545) 57990c5

## 5.45.0 (2025-01-13)

### Features

- **@fkui/css-variables, @fkui/design:** add tokens to textfields (refs SFKUI-6900) ea35a3a
- **@fkui/css-variables, @fkui/design:** update selectfield with tokens (refs SFKUI-6940) 72d0241

### Bug Fixes

- **@fkui/css-variables, @fkui/design, @fkui/vue:** disabled combobox (refs SFKUI-6956) d37c883
- **@fkui/design, @fkui/vue:** inline global modal styling (refs SFKUI-6500) b5b7e49
- **@fkui/vue-labs:** x-search-bar removed (fixes SFKUI-6953) 07b8744
- **@fkui/vue:** fix wrong runtime error when missing `routes` prop on `FNavigationMenu` (refs SFKUI-6500) e18ff97
- **@fkui/vue:** remove unnecessary beforeSubmit (refs SB-4982) ddfd67d
- **@fkui/vue:** scroll on modal close when `focus="on"` (fixes [#187](undefined/Forsakringskassan/designsystem/issues/187)) ac43df6
- **deps:** update dependency core-js to v3.40.0 c909b64
- **deps:** update dependency i18next to v24.1.2 5bde548
- **deps:** update dependency i18next to v24.2.0 0681e0d
- **deps:** update dependency i18next to v24.2.1 8830fed

## 5.44.0 (2024-12-17)

### Features

- **@fkui/css-variables, @fkui/design, @fkui/vue-labs, @fkui/vue:** add `FTextField` combobox `options` prop (fixes SFKUI-5885) 98dcc95

### Bug Fixes

- **@fkui/vue:** fix resetting active item back to undefined in f-list (refs SFKUI-6941) a175535

## 5.43.0 (2024-12-16)

### Features

- **@fkui/vue:** fmodal focus strategy (refs SB-4982) ec1af56

### Bug Fixes

- **deps:** update dependency i18next to v24.1.0 ea567a5

## 5.42.0 (2024-12-13)

### Features

- **@fkui/css-variables, @fkui/design:** semantic tokens chip (refs SFKUI-6910) e95d89c
- **@fkui/vue:** add `IPopupListbox` component (refs SFKUI-5885) acad3b8

### Bug Fixes

- **@fkui/logic, @fkui/vue:** error messages validators (fixes SFKUI-6942) fd327d2
- **@fkui/vue:** fix tooltip in fieldset (refs SFKUI-6500) a0e20ae
- **@fkui/vue:** handle when `matchMedia` is not available (refs SFKUI-6500) 45b86b4
- **deps:** update dependency i18next to v24.0.5 a5c9e3b
- **deps:** use more explicit versions in peerDendencies (refs SFKUI-6500) f16db22

## 5.41.0 (2024-12-04)

### Features

- **@fkui/logic, @fkui/vue:** add allowList validator (refs SFKUI-5885) 405bc54

### Dependency upgrades

- **deps:** update dependency i18next to v24.0.2 ([#132](undefined/Forsakringskassan/designsystem/issues/132)) 313fa70

### Bug Fixes

- **@fkui/vue:** fix infinite loop when rendering fieldset with checkboxes (fixes SFKUI-6863) 6cd4c8a

## 5.40.0 (2024-11-28)

### Features

- **@fkui/css-variables, @fkui/design, @fkui/vue:** tooltip rewritten (fixes SFKUI-679) 37defce
- **@fkui/css-variables, @fkui/design:** semantic tokens (refs SFKUI-6836) 0713aaa
- **@fkui/design:** semantic tokens tooltip (refs SFKUI-6920) 0700bfe
- **@fkui/i18next-translate:** new package `@fkui/i18next-translate` for using `i18next` with FKUI (refs SFKUI-6500) f565ad7
- **@fkui/logic:** add formatPersonnummerToDate helper (refs KDK-48741) a652d7d
- **@fkui/logic:** add validator `personnummerNotSame` (refs KDK-48741) ae2d18d
- **@fkui/logic:** add validator `personnummerOlder` (refs KDK-48741) 6a91033
- **@fkui/logic:** add validator `personnummerYounger` (refs KDK-48741) 84a5299
- **@fkui/vue:** add `cancel-button-text` slot to wizard step (refs SFKUI-6500) 8078723
- **@fkui/vue:** add `isFinalStep` param to wizard `cancel` event (refs SFKUI-6500) 19dde28
- **@fkui/vue:** add new useSlotUtils composable (refs SKFUI-6500) 61bbeaa
- **@fkui/vue:** new prop `teleport` on `FLoader` to override default teleport target (refs SFKUI-6500) 1ede0e2
- **@fkui/vue:** revalidate textfield on config update (refs SFKUI-6500) 930188e
- **deps:** require vue 3.5 or later (refs SFKUI-6500) 082d1f8
- **deps:** update dependency i18next to v24 4c8650f

### Dependency upgrades

- **deps:** update dependency i18next to v23.16.4 f3af4ba
- **deps:** update dependency i18next to v23.16.5 843cefd
- **deps:** update dependency i18next to v23.16.6 186c42a
- **deps:** update dependency i18next to v23.16.8 28d293d

### Bug Fixes

- **@fkui/css-variables:** modal shelf color (refs SFKUI-6500) 3a17a84
- **@fkui/design, @fkui/vue:** `FNavigationMenu` use `visibility` for overflow (fixes SFKUI-6731) 0e0f9ce
- **@fkui/vue:** click on menu item activates anchor (refs SFKUI-4899) d7a58b7

## 5.39.0 (2024-11-05)

### Features

- **deps:** bundle lodash (refs SFKUI-6500) 6cb2abc

### Bug Fixes

- **@fkui/vue:** fix `getDay{Start,End}Offset` refers to a value but is being used as a type (refs SFKUI-6500) 871ddce
- **@fkui/vue:** fix treeshaking issue with lodash (refs SFKUI-6500) baf361b

## 5.38.0 (2024-10-25)

### Features

- **@fkui/vue:** new `useModal()` composable for using modals with composition API (refs SFKUI-6500) a210418

## 5.37.3 (2024-10-15)

### Bug Fixes

- **@fkui/design:** tables without scrolling activates will word-wrap instead of overflowing (refs SFKUI-6500) dad8178
- **@fkui/vue:** fix table "invalid prop: type check failed [..] expected [..] got function" (fixes SFKUI-6382) f2a47b8

## 5.37.2 (2024-10-14)

### Dependency upgrades

- **deps:** update dependency express to v4.21.1 a087891

### Bug Fixes

- **@fkui/css-variables, @fkui/design, @fkui/vue:** teritary buttons in table (refs SFKUI-6710) 2bbe76e
- **@fkui/vue:** `FSortFilterDataset` add support for sorting mixed types (fixes SFKUI-6816) dfb30e7
- **@fkui/vue:** enable focus to `IPopupMenu` while using key nav (refs SFKUI-6622) dc9563c
- **@fkui/vue:** fix tabbing issues in `IPopupMenu` (refs SFKUI-6644) a48312d
- **@fkui/vue:** table caption with sr-only is rendered properly (fixes SFKUI-6434) 8096dc9

## 5.37.1 (2024-09-30)

### Bug Fixes

- **@fkui/vue:** add missing `FFormData` export (refs SFKUI-6500) 7c5a78a
- **@fkui/vue:** add missing `FModalData` export (refs SFKUI-6500) 97fdcc8
- **@fkui/vue:** add missing `IconName` export (refs SFKUI-6500) 4e8d9eb
- **@fkui/vue:** add missing `IPopupData` export (refs SFKUI-6500) bfcee75
- **@fkui/vue:** add missing `IPopupErrorData` export (refs SFKUI-6500) 31c8dd4

## 5.37.0 (2024-09-25)

### Features

- **@fkui/vue:** two new props `errorList*` for `FValidationForm` (fixes SFKUI-6792) 2cc596c
- **@fkui/vue:** use single `skipLink` prop on `FPageHeader` (refs SFKUI-6500) 1d024aa

### Bug Fixes

- **@fkui/vue:** add missing `ExpandableTable` export (refs SFKUI-6500) 57c0117
- **@fkui/vue:** add missing `FCRUDDatasetData` export (refs SFKUI-6500) 562e226
- **@fkui/vue:** add missing `FDialogueTreeData` export (refs SFKUI-6500) df4880d
- **@fkui/vue:** add missing `FInteractiveTableData` export (refs SFKUI-6500) 9b5112b
- **@fkui/vue:** add missing `FListData` export (refs SFKUI-6500) 8101130
- **@fkui/vue:** add missing `FTableColumnData` export (refs SFKUI-6500) e9fd47d
- **@fkui/vue:** add missing `ModalOptions` and `MaybeOptions` export (refs SFKUI-6500) 63a7da5

## 5.36.3 (2024-09-20)

### Dependency upgrades

- **deps:** update dependency express to v4.20.0 [security] 7bf4cad
- **deps:** update dependency express to v4.21.0 892b107

## 5.36.2 (2024-09-10)

### Bug Fixes

- remove broken motd link (refs SFKUI-6500) 42e61e0

## 5.36.1 (2024-09-10)

### Bug Fixes

- **@fkui/design, @fkui/vue:** offline should use short layout ab7e7f9, closes #13

## 5.36.0 (2024-09-09)

### Features

- **@fkui/css-variables, @fkui/date, @fkui/design, @fkui/icon-lib-builder, @fkui/icon-lib-default, @fkui/logic, @fkui/test-utils, @fkui/vue-labs, @fkui/vue:** initial public version (refs SFKUI-6500) d0b0604
- **deps:** update dependency kleur to v4 e88d20d
