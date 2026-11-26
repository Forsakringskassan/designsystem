/**
 * @public
 */
export type ParseFunction<TModel> = (viewValue: string) => TModel | undefined;
