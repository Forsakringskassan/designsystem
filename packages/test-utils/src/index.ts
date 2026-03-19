/**
 * This is a pseudo entrypoint used only to generate API Extractor report, do
 * not put your exports in here but rather in one of the following files:
 *
 * - `lib.ts` - if the exported symbol works in any environment.
 * - `vue/index.ts` - if the exported symbol is Vue.js specific, e.g. a Vue component.
 * - `jest.ts` - if the exported symbol only works in jest, e.g. jest matchers.
 */

export * from "./lib";
export * from "./jest";
export * from "./vue";
