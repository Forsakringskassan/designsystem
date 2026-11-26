/**
 * This is a pseudo entrypoint used only to generate the API Extractor report. Do
 * not put your exports here, but rather in one of the following files:
 *
 * - `lib.ts` - if the exported symbol works in any environment.
 * - `vue/index.ts` - if the exported symbol is Vue.js specific, e.g. a Vue component.
 * - `jest.ts` - if the symbol only works in Jest, e.g. Jest matchers.
 * - `vitest.ts` - if the symbol only works in Vitest, e.g. Vitest matchers.
 */

export * from "./lib";
export * from "./jest";
export * from "./vue";
export * from "./vitest";
