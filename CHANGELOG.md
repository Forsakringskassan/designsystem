# CHANGELOG

## 5.38.0 (2024-10-25)


### Features

* **@fkui/vue:** new `useModal()` composable for using modals with composition API (refs SFKUI-6500) a210418

## 5.37.3 (2024-10-15)


### Bug Fixes

* **@fkui/design:** tables without scrolling activates will word-wrap instead of overflowing (refs SFKUI-6500) dad8178
* **@fkui/vue:** fix table "invalid prop: type check failed [..] expected [..] got function" (fixes SFKUI-6382) f2a47b8

## 5.37.2 (2024-10-14)


### Dependency upgrades

* **deps:** update dependency express to v4.21.1 a087891


### Bug Fixes

* **@fkui/css-variables, @fkui/design, @fkui/vue:** teritary buttons in table (refs SFKUI-6710) 2bbe76e
* **@fkui/vue:** `FSortFilterDataset` add support for sorting mixed types (fixes SFKUI-6816) dfb30e7
* **@fkui/vue:** enable focus to `IPopupMenu` while using key nav (refs SFKUI-6622) dc9563c
* **@fkui/vue:** fix tabbing issues in `IPopupMenu` (refs SFKUI-6644) a48312d
* **@fkui/vue:** table caption with sr-only is rendered properly (fixes SFKUI-6434) 8096dc9

## 5.37.1 (2024-09-30)


### Bug Fixes

* **@fkui/vue:** add missing `FFormData` export (refs SFKUI-6500) 7c5a78a
* **@fkui/vue:** add missing `FModalData` export (refs SFKUI-6500) 97fdcc8
* **@fkui/vue:** add missing `IconName` export (refs SFKUI-6500) 4e8d9eb
* **@fkui/vue:** add missing `IPopupData` export (refs SFKUI-6500) bfcee75
* **@fkui/vue:** add missing `IPopupErrorData` export (refs SFKUI-6500) 31c8dd4

## 5.37.0 (2024-09-25)


### Features

* **@fkui/vue:** two new props `errorList*` for `FValidationForm` (fixes SFKUI-6792) 2cc596c
* **@fkui/vue:** use single `skipLink` prop on `FPageHeader` (refs SFKUI-6500) 1d024aa


### Bug Fixes

* **@fkui/vue:** add missing `ExpandableTable` export (refs SFKUI-6500) 57c0117
* **@fkui/vue:** add missing `FCRUDDatasetData` export (refs SFKUI-6500) 562e226
* **@fkui/vue:** add missing `FDialogueTreeData` export (refs SFKUI-6500) df4880d
* **@fkui/vue:** add missing `FInteractiveTableData` export (refs SFKUI-6500) 9b5112b
* **@fkui/vue:** add missing `FListData` export (refs SFKUI-6500) 8101130
* **@fkui/vue:** add missing `FTableColumnData` export (refs SFKUI-6500) e9fd47d
* **@fkui/vue:** add missing `ModalOptions` and `MaybeOptions` export (refs SFKUI-6500) 63a7da5

## 5.36.3 (2024-09-20)


### Dependency upgrades

* **deps:** update dependency express to v4.20.0 [security] 7bf4cad
* **deps:** update dependency express to v4.21.0 892b107

## 5.36.2 (2024-09-10)


### Bug Fixes

* remove broken motd link (refs SFKUI-6500) 42e61e0

## 5.36.1 (2024-09-10)


### Bug Fixes

* **@fkui/design, @fkui/vue:** offline should use short layout ab7e7f9, closes #13

## 5.36.0 (2024-09-09)


### Features

* **@fkui/css-variables, @fkui/date, @fkui/design, @fkui/icon-lib-builder, @fkui/icon-lib-default, @fkui/logic, @fkui/test-utils, @fkui/vue-labs, @fkui/vue:** initial public version (refs SFKUI-6500) d0b0604
* **deps:** update dependency kleur to v4 e88d20d
