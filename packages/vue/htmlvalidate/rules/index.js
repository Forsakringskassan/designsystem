const buttongroup = require("./buttongroup.rule");
const classdeprecated = require("./classdeprecated.rule");
const DeprecatedValidator = require("./deprecated-validator");
const PreferFIcon = require("./prefer-ficon.rule");
const requiredmaxlength = require("./requiredmaxlength.rule");
const ftextfieldFormatterValidation = require("./ftextfieldFormatterValidation.rule");
const NoTemplateModal = require("./no-template-modal.rule");

module.exports = {
    "fkui/button-group": buttongroup,
    "fkui/class-deprecated": classdeprecated,
    "fkui/deprecated-validator": DeprecatedValidator,
    "fkui/prefer-ficon": PreferFIcon,
    "fkui/required-max-length": requiredmaxlength,
    "fkui/ftextfield-formatter-validation": ftextfieldFormatterValidation,
    "fkui/no-template-modal": NoTemplateModal,
};
