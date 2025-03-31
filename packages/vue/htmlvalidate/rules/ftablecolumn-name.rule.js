const { Rule } = require("html-validate/node");
const { getDocumentationUrl } = require("./common");

class FTableColumnName extends Rule {
    documentation() {
        return {
            description:
                "`<f-sort-filter-dataset>` requires `name` attribute to be set for each `<f-table-column>` with a unique value.",
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
                this.validateSorterColumns(sorter);
            }
        });
    }

    validateSorterColumns(sorter) {
        const columns = sorter.querySelectorAll("f-table-column");
        const seenNames = new Set();

        for (const column of columns) {
            const hasName = column.hasAttribute("name");
            if (!hasName) {
                this.report(
                    column,
                    '<f-table-column> is missing required "name" attribute.',
                );
                continue;
            }

            const { value: name, valueLocation } = column.getAttribute("name");
            if (name.length === 0) {
                // Empty name attribute already handled by component rules.
                continue;
            }
            if (seenNames.has(name)) {
                this.report({
                    location: valueLocation,
                    message: `"${name}" is not unique.`,
                });
            }

            seenNames.add(name);
        }
    }
}

module.exports = FTableColumnName;
