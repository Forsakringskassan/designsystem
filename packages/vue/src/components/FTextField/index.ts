export { default as FTextField } from "./FTextField.vue";
export * from "./extendedTextFields";

/**
 * @public
 */
export type FormatFunction<TModel> = (modelValue: TModel) => string | undefined;

/**
 * @public
 */
export type ParseFunction<TModel> = (viewValue: string) => TModel | undefined;
