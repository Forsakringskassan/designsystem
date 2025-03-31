const { Rule } = require("html-validate/node");
const { getDocumentationUrl } = require("./common");

class FTableColumnName extends Rule {
    documentation() {
        return {
            description:
                '`FSortFilterDataset` requires "name" attribute to be set for each `FTableColumn` with a unique value.',
            url: getDocumentationUrl(
                "/components/table-and-list/fsortfilterdataset.html",
            ),
        };
    }

    setup() {
        this.on("dom:ready", (event) => {
            const sorters = event.document.querySelectorAll(
                "f-sort-filter-dataset",
            );

            for (const sorter of sorters) {
                const columns = sorter.querySelectorAll("f-table-column");
                const seenNames = new Set();

                for (const column of columns) {
                    const hasName = column.hasAttribute("name");
                    if (!hasName) {
                        this.report(
                            column,
                            '`FTableColumn` is missing required "name" attribute.',
                        );
                        continue;
                    }

                    const name = column.getAttributeValue("name");
                    if (name.length === 0) {
                        continue;
                    }

                    const duplicated = seenNames.has(name);
                    if (duplicated) {
                        const { valueLocation } = column.getAttribute("name");
                        this.report({
                            location: valueLocation,
                            message: `"${name}" is not unique.`,
                        });
                    }

                    seenNames.add(name);
                }
            }
        });
    }
}

module.exports = FTableColumnName;
