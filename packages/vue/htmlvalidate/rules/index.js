const buttongroup = require("./buttongroup.rule");
const classdeprecated = require("./classdeprecated.rule");
const FInteractiveTableSelectableDescription = require("./finteractivetable-selectable-description.rule");
const FTableColumnName = require("./ftablecolumn-name.rule");
const ftextfieldFormatterValidation = require("./ftextfieldFormatterValidation.rule");
const NoTemplateModal = require("./no-template-modal.rule");
const PreferFIcon = require("./prefer-ficon.rule");
const requiredmaxlength = require("./requiredmaxlength.rule");
const slotdeprecated = require("./slotdeprecated.rule");

module.exports = {
    "fkui/button-group": buttongroup,
    "fkui/class-deprecated": classdeprecated,
    "fkui/prefer-ficon": PreferFIcon,
    "fkui/required-max-length": requiredmaxlength,
    "fkui/finteractivetable-selectable-description":
        FInteractiveTableSelectableDescription,
    "fkui/ftextfield-formatter-validation": ftextfieldFormatterValidation,
    "fkui/no-template-modal": NoTemplateModal,
    "fkui/ftablecolumn-name": FTableColumnName,
    "fkui/slot-deprecated": slotdeprecated,
};
