import { type InputTypeNumber, numberTypes } from "../../input-fields-config";
import { type NormalizedTableColumnNumber } from "../number";
import { type NormalizedTableColumnText } from "../text";

/**
 *  @internal
 */
export function isColumnTypeNumber<T, K>(
    column: NormalizedTableColumnNumber<T, K> | NormalizedTableColumnText<T, K>,
): column is NormalizedTableColumnNumber<T, K> {
    const type = column.type;
    return numberTypes.includes(type as InputTypeNumber);
}
