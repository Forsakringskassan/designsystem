const stylelint = require("stylelint");
const deprecatedVariables = require("@fkui/theme-default/dist/deprecated-variables.json");

/**
 * @typedef { import("postcss").Root } Root
 * @typedef { import("postcss").ChildNode } ChildNode
 */

/**
 * @typedef {Object} Variable
 * @property {string} name
 * @property {number} offset
 */

const ruleName = "fkui/deprecated-variable";
const messages = stylelint.utils.ruleMessages(ruleName, {
    deprecated: (selector) => `Deprecated variable "${selector}"`,
});

/**
 * @param node {ChildNode }
 * @returns {boolean}
 */
function isDeclaration(node) {
    return node.type === "decl";
}

/**
 * @param variable {Variable}
 * @returns {boolean}
 */
function isDeprecated(variable) {
    return deprecatedVariables.includes(variable.name);
}

/**
 * @param node {ChildNode }
 * @returns {IterableIterator<Variable>}
 */
function* extractVariables(node) {
    const { value } = node;
    for (const match of value.matchAll(
        /var\(\s*(.+?)\s*(?:,\s*[^)]*\s*)?\)/g,
    )) {
        yield {
            name: match[1],
            offset: match.index,
        };
    }
}

function rule(actual) {
    /**
     * @param {Root} root
     */
    function deprecatedVariable(root, result) {
        const validOptions = stylelint.utils.validateOptions(result, ruleName, {
            actual,
        });
        if (!validOptions) {
            return;
        }

        root.walk(
            /**
             * @param {ChildNode} node
             */
            (node) => {
                if (!isDeclaration(node)) {
                    return;
                }

                for (const variable of extractVariables(node)) {
                    if (isDeprecated(variable)) {
                        stylelint.utils.report({
                            index: 0,
                            message: messages.deprecated(variable.name),
                            node,
                            ruleName,
                            result,
                        });
                    }
                }
            },
        );
    }

    return deprecatedVariable;
}

module.exports = stylelint.createPlugin(ruleName, rule);
module.exports.ruleName = ruleName;
module.exports.messages = messages;
