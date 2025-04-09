const { defineMetadata } = require("html-validate");

module.exports = defineMetadata({
    /* f-label is defined at top as many other elements inherits from it */
    "f-label": {
        inherit: "label",
        flow: true,
        phrasing: true,
        attributes: {
            for: ["/^[a-zA-Z][\\w\\d-_.:]+$/"],
        },
        permittedContent: ["@phrasing", "template"],
        slots: ["default", "tooltip", "description", "error-message"],
    },

    "f-label#default": {
        permittedContent: ["@phrasing", "slot"],
    },

    "f-label#tooltip": {
        flow: true,
        phrasing: true,
        interactive: true,
        permittedContent: ["f-tooltip", "slot"],
    },

    "f-label#description": {
        flow: true,
        phrasing: true,
        permittedContent: ["@phrasing", "slot"],
    },

    "f-label#error-message": {
        flow: true,
        phrasing: true,
        permittedContent: ["@phrasing", "slot"],
    },

    "f-layout-application-template": {
        flow: true,
        slots: ["header", "top-navigation", "default", "footer"],
    },

    "f-layout-left-panel": {
        flow: true,
        attributes: {
            defaultWidth: {
                enum: ["/\\d+/"],
            },
        },
        slots: ["heading", "content", "default"],
        requiredSlots: ["heading", "content", "default"],
    },

    "f-layout-right-panel": {
        flow: true,
        attributes: {
            defaultWidth: {
                enum: ["/\\d+/"],
            },
            maxWidth: {},
            minWidth: {
                enum: ["/\\d+/"],
            },
        },
        slots: ["heading", "content", "default"],
    },

    /* similar to f-label, f-text-field is defined at the top since other
     * components inherit from it */
    "f-text-field": {
        flow: true,
        phrasing: true,
        interactive: true,
        attributes: {
            inline: {
                boolean: true,
            },
            value: ["/.*/"],
            type: [
                "email",
                "number",
                "password",
                "search",
                "tel",
                "text",
                "url",
            ],
            maxlength: ["/^[0-9]+$/"],
        },
        permittedContent: ["@phrasing", "template"],
        slots: [
            "default",
            "tooltip",
            "description",
            "error-message",
            "input-left",
            "input-right",
            "append-inner",
        ],
    },

    "f-text-field#default": {
        inherit: "f-label#default",
    },

    "f-text-field#tooltip": {
        inherit: "f-label#tooltip",
    },

    "f-text-field#description": {
        inherit: "f-label#description",
    },

    "f-text-field#error-message": {
        inherit: "f-label#error-message",
    },

    "f-data-table": {
        flow: true,
        attributes: {
            "empty-row": {
                deprecated: "prop is obsolete and should no longer be used",
            },
            "key-attribute": ["/.+/"],
            scroll: ["horizontal", "vertical", "both", "none"],
        },
        requiredAttributes: ["rows"],
        slots: ["default", "caption", "empty"],
        requiredSlots: ["default", "caption"],
    },

    "f-data-table#caption": {
        inherit: "caption",
    },

    "f-data-table#default": {
        permittedContent: ["f-table-column"],
    },

    "f-data-table#empty": {
        permittedContent: ["@flow", "@phrasing"],
    },

    "f-datepicker": {
        flow: true,
        deprecated: {
            message:
                "<f-datepicker> is deprecated: use <f-datepicker-field> instead.",
            source: "@fkui/vue",
        },
    },

    "f-datepicker-field": {
        flow: true,
        phrasing: true,
        interactive: true,
        attributes: {
            disabled: {
                boolean: true,
            },
            "initial-month": {},
            "highlight-today": {
                boolean: true,
            },
            "always-inline": {
                boolean: true,
            },
        },
        slots: ["default", "tooltip", "description", "error-message"],
    },

    "f-datepicker-field#default": {
        inherit: "f-text-field#default",
    },

    "f-datepicker-field#description": {
        inherit: "f-text-field#description",
    },

    "f-datepicker-field#error-message": {
        inherit: "f-text-field#error-message",
    },

    "f-datepicker-field#tooltip": {
        inherit: "f-text-field#tooltip",
    },

    "f-details-panel": {
        flow: true,
        attributes: {
            name: {
                required: true,
                enum: ["/.+/"],
            },
            exclude: {
                enum: ["/.+/"],
            },
        },
        slots: ["default", "icon"],
    },

    "f-details-panel#icon": {
        permittedContent: ["f-icon"],
    },

    "f-calendar": {
        flow: true,
        slots: ["default"],
        attributes: {
            "tab-date": {},
            "min-date": {},
            "max-date": {},
        },
    },

    "f-calendar-day": {
        flow: true,
        permittedContent: ["@flow"],
        attributes: {
            day: {
                required: true,
            },
            enabled: {
                boolean: true,
            },
            focused: {
                boolean: true,
            },
            selected: {
                boolean: true,
            },
            highlight: {
                boolean: true,
            },
        },
        slots: ["default"],
    },

    "f-expand": {
        flow: true,
        transparent: true,
    },

    "f-expandable-panel": {
        flow: true,
        attributes: {
            "header-tag": ["h1", "h2", "h3", "h4", "h5", "h6"],
        },
        slots: ["default", "title", "outside"],
        requiredSlots: ["default", "title"],
    },

    "f-expandable-panel#default": {
        permittedDescendants: [
            {
                exclude: "f-expandable-panel",
            },
        ],
    },

    "f-expandable-panel#title": {
        interactive: true,
        permittedContent: ["@phrasing"],
        permittedDescendants: [
            {
                exclude: "@interactive",
            },
        ],
    },

    "f-expandable-panel#outside": {
        permittedDescendants: [
            {
                exclude: "f-expandable-panel",
            },
        ],
    },

    "f-expandable-paragraph": {
        flow: true,
        attributes: {
            "header-tag": ["span", "h1", "h2", "h3", "h4", "h5", "h6"],
            list: ["", "true", "false"],
        },
        slots: ["default", "related", "title"],
        requiredSlots: ["default", "title"],
    },

    "f-expandable-paragraph#title": {
        interactive: true,
        permittedContent: ["@phrasing"],
        permittedDescendants: [
            {
                exclude: "@interactive",
            },
        ],
    },

    "f-expandable-paragraph#related": {
        phrasing: true,
        permittedContent: ["@phrasing"],
    },

    "f-file-selector": {
        flow: true,
        interactive: true,
        slots: ["default"],
        permittedContent: ["@flow", "@phrasing"],
        textContent: "required",
        attributes: {
            disabled: {
                boolean: true,
            },
        },
    },

    "f-file-selector#default": {
        permittedContent: ["@flow", "@phrasing"],
        textContent: "required",
    },

    "f-icon": {
        flow: true,
        phrasing: true,
        embedded: true,
        void: false,
        permittedContent: ["title", "desc"],
        requiredAttributes: ["name"],
        attributes: {
            name: ["/.+/"],
            library: ["/.+/"],
            flip: ["horizontal", "vertical"],
            rotate: ["90", "180", "270"],
        },
    },

    "f-list": {
        inherit: "ul",
        flow: true,
        phrasing: true,
        requiredAttributes: ["items"],
        attributes: {
            selectable: ["/^[a-zA-Z][\\w\\d-_.:]+$/", "", "false", "true"],
            value: ["/.*/"],
            "key-attribute": ["/.+/"],
            title: {
                deprecated: true,
            },
        },
        slots: ["default", "screenreader", "empty"],
    },

    "f-list#default": {
        permittedContent: ["@flow"],
    },

    "f-list#screenreader": {
        permittedContent: ["@phrasing"],
    },

    "f-list#empty": {
        permittedContent: ["@flow", "@phrasing"],
    },

    "f-file-item": {
        flow: true,
        requiredAttributes: ["file-name"],
        slots: ["row", "default"],
    },

    "f-message-box": {
        flow: true,
        requiredAttributes: ["type"],
        attributes: {
            type: ["success", "warning", "error", "info"],
            layout: ["standard", "short"],
        },
        slots: ["default"],
    },

    "f-message-box#default": {
        permittedContent: ["@flow"],
    },

    "f-interactive-table": {
        flow: true,
        attributes: {
            "empty-row": {
                deprecated: "prop is obsolete and should no longer be used",
            },
            "key-attribute": ["/.+/"],
            "expandable-attribute": ["/.+/"],
            "expandable-describedby": ["/.+/"],
            scroll: ["horizontal", "vertical", "both", "none"],
        },
        requiredAttributes: ["rows"],
        slots: [
            "default",
            "caption",
            "row-description",
            "checkbox-description",
            "empty",
            "expandable",
        ],
        requiredSlots: ["default", "caption"],
    },

    "f-interactive-table#caption": {
        inherit: "caption",
    },

    "f-interactive-table#default": {
        permittedContent: ["f-table-column"],
    },

    "f-interactive-table#empty": {
        permittedContent: ["@flow", "@phrasing"],
    },

    "f-offline": {
        flow: true,
        permittedContent: ["@phrasing"],
    },

    "f-output-field": {
        flow: true,
        permittedContent: ["@phrasing", "template"],
        attributes: {
            for: {
                required: true,
                list: true,
            },
            id: {},
        },
        slots: ["default", "tooltip", "label"],
    },

    "f-output-field#default": {
        permittedContent: ["@phrasing"],
    },

    "f-output-field#tooltip": {
        inherit: "f-label#tooltip",
    },

    "f-output-field#label": {
        inherit: "f-label#description",
    },

    "f-minimizable-panel": {
        flow: true,
        attributes: {
            context: {
                enum: ["/.+/"],
            },
        },
        slots: ["default", "icon"],
    },

    "ce-minimizable-panel": {
        flow: true,
        attributes: {
            context: {
                enum: ["/.+/"],
            },
            openPrefix: {
                enum: ["/.+/"],
            },
            closePrefix: {
                enum: ["/.+/"],
            },
        },
    },

    "f-page-layout": {
        flow: true,
        attributes: {
            layout: {
                required: true,
            },
        },
    },

    "f-progressbar": {
        flow: true,
        requiredAttributes: ["aria-label"],
        permittedContent: [],
    },

    "f-resize-pane": {
        flow: true,
        attributes: {
            min: {
                enum: ["/\\d+px/", "/\\d+%/"],
                list: true,
            },
            max: {
                enum: ["/\\d+px/", "/\\d+%/"],
                list: true,
            },
            initial: {
                enum: ["/\\d+px/", "/\\d+%/"],
            },
            disabled: {
                boolean: true,
            },
        },
    },

    "f-sort-filter-dataset": {
        flow: true,
        interactive: true,
        slots: ["default", "header"],
        requiredAttributes: ["data", "sortable-attributes"],
        requiredSlots: ["default"],
    },

    "f-sort-filter-dataset#header": {
        permittedContent: ["@flow"],
    },

    "f-static-field": {
        flow: true,
        permittedContent: ["@phrasing", "template"],
        slots: ["default", "description", "tooltip", "label"],
    },

    "f-static-field#default": {
        permittedContent: ["@phrasing"],
    },

    "f-static-field#description": {
        inherit: "f-label#description",
    },

    "f-static-field#tooltip": {
        inherit: "f-label#tooltip",
    },

    "f-static-field#label": {
        inherit: "f-label#description",
    },

    "f-table-column": {
        flow: false,
        attributes: {
            name: ["/.+/"],
            title: ["/.+/"],
            description: ["/.+/"],
            type: ["text", "date", "numeric", "action"],
        },
        requiredAttributes: ["title"],
        permittedContent: ["@phrasing", "button", "f-badge"],
    },

    "f-tooltip": {
        flow: true,
        interactive: true,
        phrasing: true,
        slots: ["header", "body"],
        attributes: {
            "close-button-text": {
                enum: ["/.+/"],
            },
            "header-tag": {
                enum: ["h1", "h2", "h3", "h4", "h5", "h6"],
            },
            "screen-reader-text": {
                enum: ["/.+/"],
            },
        },
        requiredAttributes: ["screen-reader-text"],
    },

    "f-bank-account-number-text-field": {
        inherit: "f-text-field",
        attributes: {
            parser: {},
        },
    },

    "f-bank-account-number-text-field#default": {
        inherit: "f-label",
    },

    "f-bank-account-number-text-field#tooltip": {
        inherit: "f-label#tooltip",
    },

    "f-bank-account-number-text-field#description": {
        inherit: "f-label#description",
    },

    "f-bank-account-number-text-field#error-message": {
        inherit: "f-label#error-message",
    },

    "f-bankgiro-text-field": {
        inherit: "f-text-field",
        attributes: {
            formatter: {},
        },
    },

    "f-bankgiro-text-field#default": {
        inherit: "f-label",
    },

    "f-bankgiro-text-field#tooltip": {
        inherit: "f-label#tooltip",
    },

    "f-bankgiro-text-field#description": {
        inherit: "f-label#description",
    },

    "f-bankgiro-text-field#error-message": {
        inherit: "f-label#error-message",
    },

    "f-currency-text-field": {
        inherit: "f-text-field",
        attributes: {
            formatter: {},
            parser: {},
        },
    },

    "f-currency-text-field#default": {
        inherit: "f-label",
    },

    "f-currency-text-field#tooltip": {
        inherit: "f-label#tooltip",
    },

    "f-currency-text-field#description": {
        inherit: "f-label#description",
    },

    "f-currency-text-field#error-message": {
        inherit: "f-label#error-message",
    },

    "f-clearingnumber-text-field": {
        inherit: "f-text-field",
        attributes: {
            formatter: {},
        },
    },

    "f-clearingnumber-text-field#default": {
        inherit: "f-label",
    },

    "f-clearingnumber-text-field#tooltip": {
        inherit: "f-label#tooltip",
    },

    "f-clearingnumber-text-field#description": {
        inherit: "f-label#description",
    },

    "f-clearingnumber-text-field#error-message": {
        inherit: "f-label#error-message",
    },

    "f-personnummer-text-field": {
        inherit: "f-text-field",
        attributes: {
            formatter: {},
        },
    },

    "f-personnummer-text-field#default": {
        inherit: "f-label",
    },

    "f-personnummer-text-field#tooltip": {
        inherit: "f-label#tooltip",
    },

    "f-personnummer-text-field#description": {
        inherit: "f-label#description",
    },

    "f-personnummer-text-field#error-message": {
        inherit: "f-label#error-message",
    },

    "f-postal-code-text-field": {
        inherit: "f-text-field",
        attributes: {
            formatter: {},
        },
    },

    "f-postal-code-text-field#default": {
        inherit: "f-label",
    },

    "f-postal-code-text-field#tooltip": {
        inherit: "f-label#tooltip",
    },

    "f-postal-code-text-field#description": {
        inherit: "f-label#description",
    },

    "f-postal-code-text-field#error-message": {
        inherit: "f-label#error-message",
    },

    "f-phone-text-field": {
        flow: true,
        phrasing: true,
        interactive: true,
        attributes: {
            id: {
                enum: ["/.+/"],
            },
            value: ["/.*/"],
            "max-length": {
                required: false,
                enum: ["/d+/", "80"],
            },
            "extended-validation": {
                omit: true,
                boolean: true,
            },
        },
        slots: ["default", "extendedlabel"],
    },

    "f-phone-text-field#default": {
        inherit: "f-label",
    },

    "f-phone-text-field#extendedlabel": {
        inherit: "f-label",
    },

    "f-email-text-field": {
        inherit: "f-text-field",
        attributes: {
            "max-length": {
                required: false,
                enum: ["/d+/", "80"],
            },
            "extended-validation": {
                boolean: true,
                omit: true,
                required: false,
            },
            "paste-error-text": {
                required: false,
                enum: ["/.+/"],
            },
        },
        slots: ["default", "extended-label"],
    },

    "f-email-text-field#default": {
        inherit: "f-label#default",
    },

    "f-email-text-field#extended-label": {
        inherit: "f-label#default",
    },

    "f-search-text-field": {
        inherit: "f-text-field",
        attributes: {
            id: {
                enum: ["/.+/"],
            },
            "max-length": {
                required: false,
                enum: ["/d+/", "80"],
            },
            "clearable-screen-reader-text": {
                required: false,
            },
        },
    },

    "f-numeric-text-field": {
        inherit: "f-text-field",
        attributes: {
            formatter: {},
            parser: {},
        },
    },

    "f-numeric-text-field#default": {
        inherit: "f-label",
    },

    "f-numeric-text-field#tooltip": {
        inherit: "f-label#tooltip",
    },

    "f-numeric-text-field#description": {
        inherit: "f-label#description",
    },

    "f-numeric-text-field#error-message": {
        inherit: "f-label#error-message",
    },

    "f-organisationsnummer-text-field": {
        inherit: "f-text-field",
        attributes: {
            formatter: {},
        },
    },

    "f-organisationsnummer-text-field#default": {
        inherit: "f-label",
    },

    "f-organisationsnummer-text-field#tooltip": {
        inherit: "f-label#tooltip",
    },

    "f-organisationsnummer-text-field#description": {
        inherit: "f-label#description",
    },

    "f-organisationsnummer-text-field#error-message": {
        inherit: "f-label#error-message",
    },

    "f-percent-text-field": {
        inherit: "f-text-field",
        attributes: {
            decimals: {
                enum: ["/\\d+/"],
            },
            formatter: {},
            parser: {},
        },
    },

    "f-percent-text-field#default": {
        inherit: "f-label",
    },

    "f-percent-text-field#tooltip": {
        inherit: "f-label#tooltip",
    },

    "f-percent-text-field#description": {
        inherit: "f-label#description",
    },

    "f-percent-text-field#error-message": {
        inherit: "f-label#error-message",
    },

    "f-plusgiro-text-field": {
        inherit: "f-text-field",
    },

    "f-plusgiro-text-field#default": {
        inherit: "f-label",
        attributes: {
            formatter: {},
        },
    },

    "f-plusgiro-text-field#tooltip": {
        inherit: "f-label#tooltip",
    },

    "f-plusgiro-text-field#description": {
        inherit: "f-label#description",
    },

    "f-plusgiro-text-field#error-message": {
        inherit: "f-label#error-message",
    },

    "f-textarea-field": {
        inherit: "textarea",
        flow: true,
        phrasing: true,
        interactive: true,
        attributes: {
            value: ["/.*/"],
            "soft-limit": ["/^\\d+$/"],
            maxlength: ["/^\\d+$/"],
            "characters-left-warning": ["/.*/"],
            disabled: {
                boolean: true,
                required: false,
            },
        },
        permittedContent: ["@phrasing", "template"],
        slots: ["default", "tooltip", "description", "error-message"],
    },

    "f-textarea-field#default": {
        inherit: "f-label#default",
    },

    "f-textarea-field#tooltip": {
        inherit: "f-label#tooltip",
    },

    "f-textarea-field#description": {
        inherit: "f-label#description",
    },

    "f-textarea-field#error-message": {
        inherit: "f-label#error-message",
    },

    "f-fieldset": {
        flow: true,
        phrasing: true,
        attributes: {
            name: {
                enum: ["/.+/"],
            },
            "label-class": ["/[^ ]+/"],
            "content-class": ["/[^ ]+/"],
            "show-details": {
                enum: ["when-selected", "always"],
            },
        },
        permittedContent: ["@flow", "template"],
        slots: ["default", "label", "tooltip", "description", "error-message"],
        requiredSlots: ["label"],
    },

    "f-fieldset#default": {
        permittedContent: ["@flow", "template"],
    },

    "f-fieldset#label": {
        permittedContent: ["@phrasing", "@heading"],
    },

    "f-fieldset#tooltip": {
        inherit: "f-label#tooltip",
    },

    "f-fieldset#description": {
        inherit: "f-label#description",
    },

    "f-fieldset#error-message": {
        inherit: "f-label#error-message",
    },

    "f-checkbox-field": {
        flow: true,
        phrasing: true,
        slots: ["default", "details"],
        attributes: {
            checked: ["/^[a-zA-Z][\\w\\d-_.:]+$/", "false", "true"],
            value: ["/.*/"],
        },
        permittedContent: ["@phrasing"],
    },

    "f-checkbox-field#default": {
        inherit: "label",
    },

    "f-crud-dataset": {
        flow: true,
        interactive: true,
        slots: ["default", "add", "delete", "modify", "add-button", "buttons"],
        requiredSlots: ["default"],
        attributes: {
            value: ["/.*/"],
            beforeCreate: ["/.*/"],
        },
    },

    "f-crud-dataset#add-button": {
        permittedContent: ["@phrasing", "slot"],
        permittedDescendants: [{ exclude: ["@interactive"] }],
        textContent: "required",
    },

    "f-crud-button": {
        flow: true,
        interactive: true,
        phrasing: true,
        attributes: {
            action: ["modify", "delete"],
            item: ["/.*/"],
        },
        requiredAttributes: ["action", "item"],
        requiredAncestors: ["f-crud-dataset"],
    },

    "f-radio-field": {
        flow: true,
        phrasing: true,
        slots: ["default", "details"],
        attributes: {
            checked: ["/^[a-zA-Z][\\w\\d-_.:]+$/", "false", "true"],
            value: ["/.*/"],
        },
        permittedContent: ["@phrasing"],
    },

    "f-radio-field#default": {
        inherit: "label",
    },

    "f-select-field": {
        flow: true,
        phrasing: true,
        interactive: true,
        attributes: {
            inline: {
                boolean: true,
            },
            value: {},
        },
        permittedContent: ["option", "optgroup", "template"],
        slots: ["default", "label", "tooltip", "description", "error-message"],
        requiredSlots: ["label"],
    },

    "f-select-field#default": {
        flow: true,
        phrasing: true,
        permittedContent: ["option", "optgroup", "template"],
    },

    "f-select-field#label": {
        inherit: "f-label",
        permittedContent: ["@phrasing", "@heading"],
    },

    "f-select-field#tooltip": {
        inherit: "f-label#tooltip",
    },

    "f-select-field#description": {
        inherit: "f-label#description",
    },

    "f-select-field#error-message": {
        inherit: "f-label#error-message",
    },

    "f-translation-select": {
        deprecated: {
            message:
                "<f-translation-select> is obsolete and removed (no replacement exists)",
            source: "@fkui/vue",
        },
    },

    "f-modal": {
        flow: true,
        interactive: true,
        phrasing: false,
        slots: ["header", "content", "footer"],
        permittedContent: ["@phrasing", "template"],
        attributes: {
            "aria-close-text": {},
            closeText: {
                deprecated: true,
            },
            fullscreen: {
                boolean: true,
            },
            "scroll-down-text": {
                deprecated: true,
            },
            type: {
                enum: ["information", "warning", "error"],
            },
            size: {
                enum: ["small", "medium", "large", "fullwidth"],
            },
            "is-open": {
                boolean: true,
            },
        },
    },

    "f-modal#header": {
        permittedContent: ["@phrasing"],
    },

    "f-modal#content": {
        permittedContent: ["@phrasing", "@flow"],
    },

    "f-modal#footer": {
        permittedContent: ["@phrasing", "@flow"],
    },

    "f-confirm-modal": {
        inherit: "f-modal",
        slots: ["heading", "content"],
        permittedContent: ["template"],
        attributes: {
            "aria-close-text": {},
            "is-open": {
                boolean: true,
            },
            content: {
                enum: ["/.+/"],
            },
            heading: {
                enum: ["/.+/"],
            },
            buttons: {},
        },
    },

    "f-confirm-modal#content": {
        permittedContent: ["@flow"],
    },

    "f-form-modal": {
        inherit: "f-modal",
        flow: true,
        interactive: true,
        phrasing: false,
        slots: ["default", "header", "error-message", "input-text-fields"],
        permittedContent: ["@flow", "template"],
        attributes: {
            "aria-close-text": {},
            "form-id": {
                enum: ["/^[a-zA-Z][\\w\\d-_.:]+$/"],
            },
        },
    },

    "f-form-modal#default": {
        permittedContent: ["@flow"],
    },
    "f-form-modal#header": {
        permittedContent: ["@flow"],
    },

    "f-form-modal#error-message": {
        permittedContent: ["@phrasing"],
    },

    "f-form-modal#input-text-fields": {
        permittedContent: ["@flow"],
    },

    "f-form-modal#submit-button-text": {
        permittedContent: ["@phrasing"],
    },

    "f-form-modal#cancel-button-text": {
        permittedContent: ["@phrasing"],
    },

    "f-loader": {
        flow: true,
        attributes: {
            language: {},
        },
        slots: ["default"],
        permittedContent: ["@phrasing"],
    },

    "f-error-handling-app": {
        flow: true,
        attributes: {
            "default-component": {},
            "error-component": {},
        },
        slots: ["default"],
    },

    "f-error-list": {
        flow: true,
        attributes: {
            items: ["/.*/"],
            bullets: ["false", "true"],
            "before-navigate": ["/.*/"],
        },
        requiredAttributes: ["items"],
    },

    "f-validation-group": {
        flow: true,
        attributes: {
            key: ["/.+/"],
            "stop-propagation": ["false", "true"],
        },
        requiredAttributes: ["key"],
        permittedContent: ["@flow"],
        slots: ["default"],
    },

    "f-wizard": {
        flow: true,
        permittedContent: ["f-wizard-step", "@flow"],
        attributes: {
            "disable-initial-focus": {
                required: false,
                boolean: true,
            },
            "header-tag": {
                required: true,
                enum: ["h1", "h2", "h3", "h4", "h5", "h6"],
            },
        },
    },

    "f-wizard-step": {
        flow: true,
        requiredAncestors: ["f-wizard > f-wizard-step"],
        attributes: {
            key: {
                required: true,
            },
            title: {
                required: true,
                enum: ["/.+/"],
            },
            "use-error-list": {
                required: false,
            },
        },
        permittedContent: ["@flow", "template"],
        slots: [
            "default",
            "step-of",
            "error-message",
            "next-button-text",
            "cancel-button-text",
        ],
    },

    "f-wizard-step#default": {
        permittedContent: ["@flow"],
    },

    "f-wizard-step#step-of": {
        permittedContent: ["@flow"],
    },

    "f-wizard-step#error-message": {
        permittedContent: ["@flow"],
    },

    "f-wizard-step#next-button-text": {
        inherit: "button",
        attributes: {
            type: {
                required: false,
            },
        },
    },

    "f-wizard-step#cancel-button-text": {
        inherit: "button",
        attributes: {
            type: {
                required: false,
            },
        },
    },

    "f-page-header": {
        flow: true,
        interactive: true,
        phrasing: false,
        slots: ["default", "skip-link-text", "logo", "right"],
        permittedContent: ["@flow", "template"],
        attributes: {
            "skip-link": {
                enum: ["/.+/"],
                required: false,
            },
            "header-tag": {
                enum: ["span", "h1"],
                required: false,
            },
        },
    },

    "f-page-header#skip-link-text": {
        permittedContent: ["@phrasing"],
    },

    "f-page-header#logo": {
        permittedContent: ["@flow"],
    },

    "f-page-header#right": {
        permittedContent: ["@flow"],
    },

    "f-navigation-menu": {
        flow: true,
        interactive: true,
        permittedContent: [],
        textContent: "none",
        attributes: {
            routes: {
                required: true,
            },
            vertical: {
                boolean: true,
                required: false,
            },
        },
    },

    "f-context-menu": {
        flow: true,
        interactive: true,
        permittedContent: [],
        textContent: "none",
        attributes: {
            "is-open": {
                boolean: true,
                required: true,
            },
            anchor: {
                required: false,
            },
            items: {
                required: true,
            },
        },
    },

    "f-validation-form": {
        flow: true,
        form: true,
        attributes: {
            "before-submit": {
                required: false,
            },
            "use-error-list": {
                required: false,
            },
        },
        slots: ["default", "error-message"],
    },

    "f-validation-form#error-message": {
        permittedContent: ["@phrasing", "@heading"],
    },

    "f-card": {
        flow: true,
        attributes: {},
        slots: ["default", "header", "footer"],
        requiredSlots: ["default"],
    },

    "f-dialogue-tree": {
        flow: true,
        attributes: {
            "dialogue-tree": {
                required: true,
            },
        },
        slots: ["default"],
        requiredSlots: ["default"],
    },

    "f-badge": {
        flow: true,
        permittedContent: ["@phrasing"],
        attributes: {
            status: {
                enum: ["default", "warning", "error", "success", "info"],
            },
            inverted: {
                boolean: true,
            },
        },
        slots: ["default"],
    },

    "f-logo": {
        flow: true,
        permittedContent: ["@phrasing"],
        textContent: "required",
        attributes: {
            size: {
                enum: ["small", "large", "responsive"],
            },
        },
        slots: ["default"],
    },
});
