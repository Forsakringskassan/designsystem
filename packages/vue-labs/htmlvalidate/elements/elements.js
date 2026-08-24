const { defineMetadata } = require("html-validate");

module.exports = defineMetadata({
    "f-expandable-textarea-field": {
        inherit: "f-textarea-field",
        attributes: {
            "max-rows": ["/^\\d+$/"],
        },
    },

    "f-expandable-textarea-field#default": {
        inherit: "f-textarea-field#default",
    },

    "f-expandable-textarea-field#tooltip": {
        inherit: "f-textarea-field#tooltip",
    },

    "f-expandable-textarea-field#description": {
        inherit: "f-textarea-field#description",
    },

    "f-expandable-textarea-field#error-message": {
        inherit: "f-textarea-field#error-message",
    },

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
