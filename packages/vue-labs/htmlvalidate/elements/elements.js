const { defineMetadata } = require("html-validate");

module.exports = defineMetadata({
    "x-file-dragdrop": {
        flow: true,
    },

    "x-relative-time": {
        flow: true,
        phrasing: true,
        permittedContent: [],
        textContent: "none",
        attributes: {
            timestamp: {
                required: true,
            },
            reference: {
                required: false,
            },
        },
    },

    "x-sort-filter-dataset-ng": {
        flow: true,
    },

    "x-time-text-field": {
        flow: true,
    },
});
