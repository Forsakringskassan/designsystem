import { type ValidatorResult } from "./validator-result";

export interface ViewValueValidator<K extends string, TValue> {
    name: K;
    type: "raw";
    validate(value: TValue | null | undefined): ValidatorResult<K>;
}

export interface ModelValueValidator<K extends string, TModel> {
    name: K;
    type: "parsed";
    validate(value: TModel): ValidatorResult<K>;
}

export type ValidatorDefinition<K extends string, TValue, TModel> =
    | ViewValueValidator<K, TValue>
    | ModelValueValidator<K, TModel>;

export function defineValidator<K extends string, TValue, TModel>(
    name: K,
    definition:
        | Omit<ViewValueValidator<K, TValue>, "name">
        | Omit<ModelValueValidator<K, TModel>, "name">,
): ValidatorDefinition<K, TValue, TModel> {
    return { name, ...definition };
}
