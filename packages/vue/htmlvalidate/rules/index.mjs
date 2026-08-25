import { ButtonGroupRule } from "./buttongroup.rule.mjs";
import { ClassDeprecated } from "./classdeprecated.rule.mjs";
import { FButtonTertiaryBlackDeprecated } from "./fbutton-tertiary-black-deprecated.rule.mjs";
import { FInteractiveTableSelectableDescription } from "./finteractivetable-selectable-description.rule.mjs";
import { FTableColumnName } from "./ftablecolumn-name.rule.mjs";
import { FtextFieldFormatterValidation } from "./ftextfield-formatter-validation.rule.mjs";
import { NoTemplateModal } from "./no-template-modal.rule.mjs";
import { PreferFIcon } from "./prefer-ficon.rule.mjs";
import { RequiredMaxLength } from "./requiredmaxlength.rule.mjs";
import { SlotDeprecated } from "./slotdeprecated.rule.mjs";

export const rules = {
    "fkui/button-group": ButtonGroupRule,
    "fkui/class-deprecated": ClassDeprecated,
    "fkui/fbutton-tertiary-black-deprecated": FButtonTertiaryBlackDeprecated,
    "fkui/finteractivetable-selectable-description":
        FInteractiveTableSelectableDescription,
    "fkui/ftablecolumn-name": FTableColumnName,
    "fkui/ftextfield-formatter-validation": FtextFieldFormatterValidation,
    "fkui/no-template-modal": NoTemplateModal,
    "fkui/prefer-ficon": PreferFIcon,
    "fkui/required-max-length": RequiredMaxLength,
    "fkui/slot-deprecated": SlotDeprecated,
};
