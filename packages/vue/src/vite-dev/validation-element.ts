/** @public */
export interface ValidationElementSimple {
    getViewValue(): string | null | undefined;
    getModelValue(): string;
    parser?(value: string): string;
    formatter?(value: string): string;
    event: string[];
}

/** @public */
export interface ValidationElementParsed<TValue, TModel> {
    getViewValue(): TValue | null | undefined;
    getModelValue(): TModel;
    parser(value: TValue): TModel;
    formatter(value: TModel): TValue;
    event: string[];
}

/** @public */
export type ValidationElement<TValue, TModel> =
    | ValidationElementSimple
    | ValidationElementParsed<TValue, TModel>;
