// docs/src/setup.ts
import { createApp, h } from "vue";
import {
  ErrorPlugin,
  FErrorHandlingApp,
  FormatPlugin,
  TestPlugin,
  TranslationPlugin,
  ValidationPlugin,
  setRunningContext
} from "@fkui/vue";
function setup(options) {
  const { rootComponent, selector } = options;
  const app = createApp({
    render() {
      return h(FErrorHandlingApp, { defaultComponent: rootComponent });
    }
  });
  setRunningContext(app);
  app.use(ErrorPlugin, {
    captureWarnings: true,
    logToConsole: true
  });
  app.use(ValidationPlugin);
  app.use(TestPlugin);
  app.use(TranslationPlugin);
  app.use(FormatPlugin);
  app.mount(selector);
}

// virtual-entry:virtual:docs/styles/examples/PaletteList.vue:PaletteList-ea3a64.js
import { defineComponent } from "vue";

// packages/theme-default/dist/metadata.mjs
var metadata_default = {
  "themes": [
    "light",
    "dark"
  ],
  "palette": [
    {
      "name": "--fkds-palette-color-neutral-900",
      "value": "#1b1e23",
      "group": "Neutral"
    },
    {
      "name": "--fkds-palette-color-neutral-800",
      "value": "#292d34",
      "group": "Neutral"
    },
    {
      "name": "--fkds-palette-color-neutral-700",
      "value": "#494f5b",
      "group": "Neutral"
    },
    {
      "name": "--fkds-palette-color-neutral-600",
      "value": "#606876",
      "group": "Neutral"
    },
    {
      "name": "--fkds-palette-color-neutral-500",
      "value": "#777f8d",
      "group": "Neutral"
    },
    {
      "name": "--fkds-palette-color-neutral-400",
      "value": "#8e949f",
      "group": "Neutral"
    },
    {
      "name": "--fkds-palette-color-neutral-300",
      "value": "#afb3bb",
      "group": "Neutral"
    },
    {
      "name": "--fkds-palette-color-neutral-200",
      "value": "#d6d8dc",
      "group": "Neutral"
    },
    {
      "name": "--fkds-palette-color-neutral-100",
      "value": "#ecedef",
      "group": "Neutral"
    },
    {
      "name": "--fkds-palette-color-neutral-50",
      "value": "#f7f7f8",
      "group": "Neutral"
    },
    {
      "name": "--fkds-palette-color-neutral-0",
      "value": "#ffffff",
      "group": "Neutral"
    },
    {
      "name": "--fkds-palette-color-neutral-1337",
      "value": "var(--fkds-palette-color-neutral-0)",
      "group": "Neutral"
    },
    {
      "name": "--fkds-palette-color-blue-900",
      "value": "#0e1623",
      "group": "Blue"
    },
    {
      "name": "--fkds-palette-color-blue-800",
      "value": "#162f5d",
      "group": "Blue"
    },
    {
      "name": "--fkds-palette-color-blue-700",
      "value": "#1b478d",
      "group": "Blue"
    },
    {
      "name": "--fkds-palette-color-blue-600",
      "value": "#2358af",
      "group": "Blue"
    },
    {
      "name": "--fkds-palette-color-blue-500",
      "value": "#3472d5",
      "group": "Blue"
    },
    {
      "name": "--fkds-palette-color-blue-400",
      "value": "#578edb",
      "group": "Blue"
    },
    {
      "name": "--fkds-palette-color-blue-300",
      "value": "#76a6e0",
      "group": "Blue"
    },
    {
      "name": "--fkds-palette-color-blue-200",
      "value": "#a2bfe3",
      "group": "Blue"
    },
    {
      "name": "--fkds-palette-color-blue-100",
      "value": "#dee9f7",
      "group": "Blue"
    },
    {
      "name": "--fkds-palette-color-blue-50",
      "value": "#f3f7fc",
      "group": "Blue"
    },
    {
      "name": "--fkds-palette-color-green-900",
      "value": "#0f1f19",
      "group": "Green"
    },
    {
      "name": "--fkds-palette-color-green-800",
      "value": "#14432a",
      "group": "Green"
    },
    {
      "name": "--fkds-palette-color-green-700",
      "value": "#116a3e",
      "group": "Green"
    },
    {
      "name": "--fkds-palette-color-green-600",
      "value": "#1b7e4d",
      "group": "Green"
    },
    {
      "name": "--fkds-palette-color-green-500",
      "value": "#248f59",
      "group": "Green"
    },
    {
      "name": "--fkds-palette-color-green-400",
      "value": "#41aa75",
      "group": "Green"
    },
    {
      "name": "--fkds-palette-color-green-300",
      "value": "#77bb98",
      "group": "Green"
    },
    {
      "name": "--fkds-palette-color-green-200",
      "value": "#aad8c0",
      "group": "Green"
    },
    {
      "name": "--fkds-palette-color-green-100",
      "value": "#d9ede3",
      "group": "Green"
    },
    {
      "name": "--fkds-palette-color-green-50",
      "value": "#f5faf7",
      "group": "Green"
    },
    {
      "name": "--fkds-palette-color-yellow-900",
      "value": "#201d10",
      "group": "Yellow"
    },
    {
      "name": "--fkds-palette-color-yellow-800",
      "value": "#625019",
      "group": "Yellow"
    },
    {
      "name": "--fkds-palette-color-yellow-700",
      "value": "#b18502",
      "group": "Yellow"
    },
    {
      "name": "--fkds-palette-color-yellow-600",
      "value": "#d6a103",
      "group": "Yellow"
    },
    {
      "name": "--fkds-palette-color-yellow-500",
      "value": "#f1b604",
      "group": "Yellow"
    },
    {
      "name": "--fkds-palette-color-yellow-400",
      "value": "#f2cc4d",
      "group": "Yellow"
    },
    {
      "name": "--fkds-palette-color-yellow-300",
      "value": "#f6db80",
      "group": "Yellow"
    },
    {
      "name": "--fkds-palette-color-yellow-200",
      "value": "#f9e49f",
      "group": "Yellow"
    },
    {
      "name": "--fkds-palette-color-yellow-100",
      "value": "#fef4cd",
      "group": "Yellow"
    },
    {
      "name": "--fkds-palette-color-yellow-50",
      "value": "#fffbf0",
      "group": "Yellow"
    },
    {
      "name": "--fkds-palette-color-red-900",
      "value": "#211011",
      "group": "Red"
    },
    {
      "name": "--fkds-palette-color-red-800",
      "value": "#5e1b1b",
      "group": "Red"
    },
    {
      "name": "--fkds-palette-color-red-700",
      "value": "#9f2024",
      "group": "Red"
    },
    {
      "name": "--fkds-palette-color-red-600",
      "value": "#bf272b",
      "group": "Red"
    },
    {
      "name": "--fkds-palette-color-red-500",
      "value": "#df3035",
      "group": "Red"
    },
    {
      "name": "--fkds-palette-color-red-400",
      "value": "#e85b60",
      "group": "Red"
    },
    {
      "name": "--fkds-palette-color-red-300",
      "value": "#ef8a8e",
      "group": "Red"
    },
    {
      "name": "--fkds-palette-color-red-200",
      "value": "#f4afb2",
      "group": "Red"
    },
    {
      "name": "--fkds-palette-color-red-100",
      "value": "#f9dcdc",
      "group": "Red"
    },
    {
      "name": "--fkds-palette-color-red-50",
      "value": "#fdf3f3",
      "group": "Red"
    }
  ],
  "tokens": [
    {
      "name": "--fkds-color-action-background-primary-active",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b478d",
          "palette": "--fkds-palette-color-blue-700"
        },
        "dark": {
          "value": "#a2bfe3",
          "palette": "--fkds-palette-color-blue-200"
        }
      }
    },
    {
      "name": "--fkds-color-action-background-primary-default",
      "comment": null,
      "values": {
        "light": {
          "value": "#2358af",
          "palette": "--fkds-palette-color-blue-600"
        },
        "dark": {
          "value": "#76a6e0",
          "palette": "--fkds-palette-color-blue-300"
        }
      }
    },
    {
      "name": "--fkds-color-action-background-primary-focus",
      "comment": null,
      "values": {
        "light": {
          "value": "#2358af",
          "palette": "--fkds-palette-color-blue-600"
        },
        "dark": {
          "value": "#76a6e0",
          "palette": "--fkds-palette-color-blue-300"
        }
      }
    },
    {
      "name": "--fkds-color-action-background-primary-hover",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b478d",
          "palette": "--fkds-palette-color-blue-700"
        },
        "dark": {
          "value": "#a2bfe3",
          "palette": "--fkds-palette-color-blue-200"
        }
      }
    },
    {
      "name": "--fkds-color-action-background-secondary-active",
      "comment": null,
      "values": {
        "light": {
          "value": "#dee9f7",
          "palette": "--fkds-palette-color-blue-100"
        },
        "dark": {
          "value": "#292d34",
          "palette": "--fkds-palette-color-neutral-800"
        }
      }
    },
    {
      "name": "--fkds-color-action-background-secondary-default",
      "comment": null,
      "values": {
        "light": {
          "value": "#ffffff",
          "palette": "--fkds-palette-color-neutral-0"
        },
        "dark": {
          "value": "#1b1e23",
          "palette": "--fkds-palette-color-neutral-900"
        }
      }
    },
    {
      "name": "--fkds-color-action-background-secondary-focus",
      "comment": null,
      "values": {
        "light": {
          "value": "#ffffff",
          "palette": "--fkds-palette-color-neutral-0"
        },
        "dark": {
          "value": "#1b1e23",
          "palette": "--fkds-palette-color-neutral-900"
        }
      }
    },
    {
      "name": "--fkds-color-action-background-secondary-hover",
      "comment": null,
      "values": {
        "light": {
          "value": "#dee9f7",
          "palette": "--fkds-palette-color-blue-100"
        },
        "dark": {
          "value": "#292d34",
          "palette": "--fkds-palette-color-neutral-800"
        }
      }
    },
    {
      "name": "--fkds-color-action-border-primary-active",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b478d",
          "palette": "--fkds-palette-color-blue-700"
        },
        "dark": {
          "value": "#a2bfe3",
          "palette": "--fkds-palette-color-blue-200"
        }
      }
    },
    {
      "name": "--fkds-color-action-border-primary-default",
      "comment": null,
      "values": {
        "light": {
          "value": "#2358af",
          "palette": "--fkds-palette-color-blue-600"
        },
        "dark": {
          "value": "#76a6e0",
          "palette": "--fkds-palette-color-blue-300"
        }
      }
    },
    {
      "name": "--fkds-color-action-border-primary-focus",
      "comment": null,
      "values": {
        "light": {
          "value": "#2358af",
          "palette": "--fkds-palette-color-blue-600"
        },
        "dark": {
          "value": "#76a6e0",
          "palette": "--fkds-palette-color-blue-300"
        }
      }
    },
    {
      "name": "--fkds-color-action-border-primary-hover",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b478d",
          "palette": "--fkds-palette-color-blue-700"
        },
        "dark": {
          "value": "#a2bfe3",
          "palette": "--fkds-palette-color-blue-200"
        }
      }
    },
    {
      "name": "--fkds-color-action-text-inverted-active",
      "comment": null,
      "values": {
        "light": {
          "value": "#ffffff",
          "palette": "--fkds-palette-color-neutral-0"
        },
        "dark": {
          "value": "#1b1e23",
          "palette": "--fkds-palette-color-neutral-900"
        }
      }
    },
    {
      "name": "--fkds-color-action-text-inverted-default",
      "comment": null,
      "values": {
        "light": {
          "value": "#ffffff",
          "palette": "--fkds-palette-color-neutral-0"
        },
        "dark": {
          "value": "#1b1e23",
          "palette": "--fkds-palette-color-neutral-900"
        }
      }
    },
    {
      "name": "--fkds-color-action-text-inverted-focus",
      "comment": null,
      "values": {
        "light": {
          "value": "#ffffff",
          "palette": "--fkds-palette-color-neutral-0"
        },
        "dark": {
          "value": "#1b1e23",
          "palette": "--fkds-palette-color-neutral-900"
        }
      }
    },
    {
      "name": "--fkds-color-action-text-inverted-hover",
      "comment": null,
      "values": {
        "light": {
          "value": "#ffffff",
          "palette": "--fkds-palette-color-neutral-0"
        },
        "dark": {
          "value": "#1b1e23",
          "palette": "--fkds-palette-color-neutral-900"
        }
      }
    },
    {
      "name": "--fkds-color-action-text-primary-active",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b478d",
          "palette": "--fkds-palette-color-blue-700"
        },
        "dark": {
          "value": "#a2bfe3",
          "palette": "--fkds-palette-color-blue-200"
        }
      }
    },
    {
      "name": "--fkds-color-action-text-primary-default",
      "comment": null,
      "values": {
        "light": {
          "value": "#2358af",
          "palette": "--fkds-palette-color-blue-600"
        },
        "dark": {
          "value": "#76a6e0",
          "palette": "--fkds-palette-color-blue-300"
        }
      }
    },
    {
      "name": "--fkds-color-action-text-primary-focus",
      "comment": null,
      "values": {
        "light": {
          "value": "#2358af",
          "palette": "--fkds-palette-color-blue-600"
        },
        "dark": {
          "value": "#76a6e0",
          "palette": "--fkds-palette-color-blue-300"
        }
      }
    },
    {
      "name": "--fkds-color-action-text-primary-hover",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b478d",
          "palette": "--fkds-palette-color-blue-700"
        },
        "dark": {
          "value": "#a2bfe3",
          "palette": "--fkds-palette-color-blue-200"
        }
      }
    },
    {
      "name": "--fkds-color-action-text-secondary-active",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b478d",
          "palette": "--fkds-palette-color-blue-700"
        },
        "dark": {
          "value": "#d6d8dc",
          "palette": "--fkds-palette-color-neutral-200"
        }
      }
    },
    {
      "name": "--fkds-color-action-text-secondary-default",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b1e23",
          "palette": "--fkds-palette-color-neutral-900"
        },
        "dark": {
          "value": "#ecedef",
          "palette": "--fkds-palette-color-neutral-100"
        }
      }
    },
    {
      "name": "--fkds-color-action-text-secondary-focus",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b1e23",
          "palette": "--fkds-palette-color-neutral-900"
        },
        "dark": {
          "value": "#ecedef",
          "palette": "--fkds-palette-color-neutral-100"
        }
      }
    },
    {
      "name": "--fkds-color-action-text-secondary-hover",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b478d",
          "palette": "--fkds-palette-color-blue-700"
        },
        "dark": {
          "value": "#d6d8dc",
          "palette": "--fkds-palette-color-neutral-200"
        }
      }
    },
    {
      "name": "--fkds-color-background-disabled",
      "comment": null,
      "values": {
        "light": {
          "value": "#ecedef",
          "palette": "--fkds-palette-color-neutral-100"
        },
        "dark": {
          "value": "#292d34",
          "palette": "--fkds-palette-color-neutral-800"
        }
      }
    },
    {
      "name": "--fkds-color-background-primary",
      "comment": null,
      "values": {
        "light": {
          "value": "#ffffff",
          "palette": "--fkds-palette-color-neutral-0"
        },
        "dark": {
          "value": "#1b1e23",
          "palette": "--fkds-palette-color-neutral-900"
        }
      }
    },
    {
      "name": "--fkds-color-background-secondary",
      "comment": null,
      "values": {
        "light": {
          "value": "#f7f7f8",
          "palette": "--fkds-palette-color-neutral-50"
        },
        "dark": {
          "value": "#292d34",
          "palette": "--fkds-palette-color-neutral-800"
        }
      }
    },
    {
      "name": "--fkds-color-background-tertiary",
      "comment": null,
      "values": {
        "light": {
          "value": "#ecedef",
          "palette": "--fkds-palette-color-neutral-100"
        },
        "dark": {
          "value": "#494f5b",
          "palette": "--fkds-palette-color-neutral-700"
        }
      }
    },
    {
      "name": "--fkds-color-border-disabled",
      "comment": null,
      "values": {
        "light": {
          "value": "#8e949f",
          "palette": "--fkds-palette-color-neutral-400"
        },
        "dark": {
          "value": "#777f8d",
          "palette": "--fkds-palette-color-neutral-500"
        }
      }
    },
    {
      "name": "--fkds-color-border-inverted",
      "comment": null,
      "values": {
        "light": {
          "value": "#ffffff",
          "palette": "--fkds-palette-color-neutral-0"
        },
        "dark": {
          "value": "#1b1e23",
          "palette": "--fkds-palette-color-neutral-900"
        }
      }
    },
    {
      "name": "--fkds-color-border-primary",
      "comment": null,
      "values": {
        "light": {
          "value": "#777f8d",
          "palette": "--fkds-palette-color-neutral-500"
        },
        "dark": {
          "value": "#8e949f",
          "palette": "--fkds-palette-color-neutral-400"
        }
      }
    },
    {
      "name": "--fkds-color-border-strong",
      "comment": null,
      "values": {
        "light": {
          "value": "#494f5b",
          "palette": "--fkds-palette-color-neutral-700"
        },
        "dark": {
          "value": "#d6d8dc",
          "palette": "--fkds-palette-color-neutral-200"
        }
      }
    },
    {
      "name": "--fkds-color-border-weak",
      "comment": null,
      "values": {
        "light": {
          "value": "#d6d8dc",
          "palette": "--fkds-palette-color-neutral-200"
        },
        "dark": {
          "value": "#606876",
          "palette": "--fkds-palette-color-neutral-600"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-background-info",
      "comment": null,
      "values": {
        "light": {
          "value": "#f3f7fc",
          "palette": "--fkds-palette-color-blue-50"
        },
        "dark": {
          "value": "#0e1623",
          "palette": "--fkds-palette-color-blue-900"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-background-info-strong",
      "comment": null,
      "values": {
        "light": {
          "value": "#3472d5",
          "palette": "--fkds-palette-color-blue-500"
        },
        "dark": {
          "value": "#578edb",
          "palette": "--fkds-palette-color-blue-400"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-background-negative",
      "comment": null,
      "values": {
        "light": {
          "value": "#fdf3f3",
          "palette": "--fkds-palette-color-red-50"
        },
        "dark": {
          "value": "#211011",
          "palette": "--fkds-palette-color-red-900"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-background-negative-strong",
      "comment": null,
      "values": {
        "light": {
          "value": "#df3035",
          "palette": "--fkds-palette-color-red-500"
        },
        "dark": {
          "value": "#e85b60",
          "palette": "--fkds-palette-color-red-400"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-background-neutral",
      "comment": null,
      "values": {
        "light": {
          "value": "#ffffff",
          "palette": "--fkds-palette-color-neutral-0"
        },
        "dark": {
          "value": "#292d34",
          "palette": "--fkds-palette-color-neutral-800"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-background-neutral-strong",
      "comment": null,
      "values": {
        "light": {
          "value": "#d6d8dc",
          "palette": "--fkds-palette-color-neutral-200"
        },
        "dark": {
          "value": "#606876",
          "palette": "--fkds-palette-color-neutral-600"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-background-positive",
      "comment": null,
      "values": {
        "light": {
          "value": "#f5faf7",
          "palette": "--fkds-palette-color-green-50"
        },
        "dark": {
          "value": "#0f1f19",
          "palette": "--fkds-palette-color-green-900"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-background-positive-strong",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b7e4d",
          "palette": "--fkds-palette-color-green-600"
        },
        "dark": {
          "value": "#41aa75",
          "palette": "--fkds-palette-color-green-400"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-background-warning",
      "comment": null,
      "values": {
        "light": {
          "value": "#fffbf0",
          "palette": "--fkds-palette-color-yellow-50"
        },
        "dark": {
          "value": "#201d10",
          "palette": "--fkds-palette-color-yellow-900"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-background-warning-strong",
      "comment": null,
      "values": {
        "light": {
          "value": "#f1b604",
          "palette": "--fkds-palette-color-yellow-500"
        },
        "dark": {
          "value": "#f2cc4d",
          "palette": "--fkds-palette-color-yellow-400"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-border-info",
      "comment": null,
      "values": {
        "light": {
          "value": "#3472d5",
          "palette": "--fkds-palette-color-blue-500"
        },
        "dark": {
          "value": "#578edb",
          "palette": "--fkds-palette-color-blue-400"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-border-negative",
      "comment": null,
      "values": {
        "light": {
          "value": "#df3035",
          "palette": "--fkds-palette-color-red-500"
        },
        "dark": {
          "value": "#e85b60",
          "palette": "--fkds-palette-color-red-400"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-border-neutral",
      "comment": null,
      "values": {
        "light": {
          "value": "#777f8d",
          "palette": "--fkds-palette-color-neutral-500"
        },
        "dark": {
          "value": "#8e949f",
          "palette": "--fkds-palette-color-neutral-400"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-border-positive",
      "comment": null,
      "values": {
        "light": {
          "value": "#248f59",
          "palette": "--fkds-palette-color-green-500"
        },
        "dark": {
          "value": "#41aa75",
          "palette": "--fkds-palette-color-green-400"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-border-warning",
      "comment": null,
      "values": {
        "light": {
          "value": "#f1b604",
          "palette": "--fkds-palette-color-yellow-500"
        },
        "dark": {
          "value": "#f2cc4d",
          "palette": "--fkds-palette-color-yellow-400"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-text-negative",
      "comment": null,
      "values": {
        "light": {
          "value": "#bf272b",
          "palette": "--fkds-palette-color-red-600"
        },
        "dark": {
          "value": "#ef8a8e",
          "palette": "--fkds-palette-color-red-300"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-text-on-warning",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b1e23",
          "palette": "--fkds-palette-color-neutral-900"
        },
        "dark": {
          "value": "#1b1e23",
          "palette": "--fkds-palette-color-neutral-900"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-text-positive",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b7e4d",
          "palette": "--fkds-palette-color-green-600"
        },
        "dark": {
          "value": "#41aa75",
          "palette": "--fkds-palette-color-green-400"
        }
      }
    },
    {
      "name": "--fkds-color-footer-background-primary",
      "comment": null,
      "values": {
        "light": {
          "value": "#116a3e",
          "palette": "--fkds-palette-color-green-700"
        },
        "dark": {
          "value": "#116a3e",
          "palette": "--fkds-palette-color-green-700"
        }
      }
    },
    {
      "name": "--fkds-color-footer-text-primary",
      "comment": null,
      "values": {
        "light": {
          "value": "#ffffff",
          "palette": "--fkds-palette-color-neutral-0"
        },
        "dark": {
          "value": "#ffffff",
          "palette": "--fkds-palette-color-neutral-0"
        }
      }
    },
    {
      "name": "--fkds-color-header-background-primary",
      "comment": null,
      "values": {
        "light": {
          "value": "#116a3e",
          "palette": "--fkds-palette-color-green-700"
        },
        "dark": {
          "value": "#116a3e",
          "palette": "--fkds-palette-color-green-700"
        }
      }
    },
    {
      "name": "--fkds-color-header-text-primary",
      "comment": null,
      "values": {
        "light": {
          "value": "#ffffff",
          "palette": "--fkds-palette-color-neutral-0"
        },
        "dark": {
          "value": "#ffffff",
          "palette": "--fkds-palette-color-neutral-0"
        }
      }
    },
    {
      "name": "--fkds-color-interactive-surface-background-primary-active",
      "comment": null,
      "values": {
        "light": {
          "value": "#ecedef",
          "palette": "--fkds-palette-color-neutral-100"
        },
        "dark": {
          "value": "#494f5b",
          "palette": "--fkds-palette-color-neutral-700"
        }
      }
    },
    {
      "name": "--fkds-color-interactive-surface-background-primary-default",
      "comment": null,
      "values": {
        "light": {
          "value": "#f7f7f8",
          "palette": "--fkds-palette-color-neutral-50"
        },
        "dark": {
          "value": "#292d34",
          "palette": "--fkds-palette-color-neutral-800"
        }
      }
    },
    {
      "name": "--fkds-color-interactive-surface-background-primary-focus",
      "comment": null,
      "values": {
        "light": {
          "value": "#f7f7f8",
          "palette": "--fkds-palette-color-neutral-50"
        },
        "dark": {
          "value": "#292d34",
          "palette": "--fkds-palette-color-neutral-800"
        }
      }
    },
    {
      "name": "--fkds-color-interactive-surface-background-primary-hover",
      "comment": null,
      "values": {
        "light": {
          "value": "#ecedef",
          "palette": "--fkds-palette-color-neutral-100"
        },
        "dark": {
          "value": "#494f5b",
          "palette": "--fkds-palette-color-neutral-700"
        }
      }
    },
    {
      "name": "--fkds-color-navigation-background-hover",
      "comment": null,
      "values": {
        "light": {
          "value": "#d9ede3",
          "palette": "--fkds-palette-color-green-100"
        },
        "dark": {
          "value": "#494f5b",
          "palette": "--fkds-palette-color-neutral-700"
        }
      }
    },
    {
      "name": "--fkds-color-navigation-background-selected",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b7e4d",
          "palette": "--fkds-palette-color-green-600"
        },
        "dark": {
          "value": "#77bb98",
          "palette": "--fkds-palette-color-green-300"
        }
      }
    },
    {
      "name": "--fkds-color-navigation-border-hover",
      "comment": null,
      "values": {
        "light": {
          "value": "#aad8c0",
          "palette": "--fkds-palette-color-green-200"
        },
        "dark": {
          "value": "#494f5b",
          "palette": "--fkds-palette-color-neutral-700"
        }
      }
    },
    {
      "name": "--fkds-color-navigation-border-selected",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b7e4d",
          "palette": "--fkds-palette-color-green-600"
        },
        "dark": {
          "value": "#77bb98",
          "palette": "--fkds-palette-color-green-300"
        }
      }
    },
    {
      "name": "--fkds-color-select-background-primary-active",
      "comment": null,
      "values": {
        "light": {
          "value": "#dee9f7",
          "palette": "--fkds-palette-color-blue-100"
        },
        "dark": {
          "value": "#494f5b",
          "palette": "--fkds-palette-color-neutral-700"
        }
      }
    },
    {
      "name": "--fkds-color-select-background-primary-default",
      "comment": null,
      "values": {
        "light": {
          "value": "#2358af",
          "palette": "--fkds-palette-color-blue-600"
        },
        "dark": {
          "value": "#76a6e0",
          "palette": "--fkds-palette-color-blue-300"
        }
      }
    },
    {
      "name": "--fkds-color-select-background-primary-focus",
      "comment": null,
      "values": {
        "light": {
          "value": "#dee9f7",
          "palette": "--fkds-palette-color-blue-100"
        },
        "dark": {
          "value": "#494f5b",
          "palette": "--fkds-palette-color-neutral-700"
        }
      }
    },
    {
      "name": "--fkds-color-select-background-primary-hover",
      "comment": null,
      "values": {
        "light": {
          "value": "#dee9f7",
          "palette": "--fkds-palette-color-blue-100"
        },
        "dark": {
          "value": "#292d34",
          "palette": "--fkds-palette-color-neutral-800"
        }
      }
    },
    {
      "name": "--fkds-color-select-background-secondary-active",
      "comment": null,
      "values": {
        "light": {
          "value": "#d9ede3",
          "palette": "--fkds-palette-color-green-100"
        },
        "dark": {
          "value": "#494f5b",
          "palette": "--fkds-palette-color-neutral-700"
        }
      }
    },
    {
      "name": "--fkds-color-select-background-secondary-default",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b7e4d",
          "palette": "--fkds-palette-color-green-600"
        },
        "dark": {
          "value": "#77bb98",
          "palette": "--fkds-palette-color-green-300"
        }
      }
    },
    {
      "name": "--fkds-color-select-background-secondary-focus",
      "comment": null,
      "values": {
        "light": {
          "value": "#d9ede3",
          "palette": "--fkds-palette-color-green-100"
        },
        "dark": {
          "value": "#494f5b",
          "palette": "--fkds-palette-color-neutral-700"
        }
      }
    },
    {
      "name": "--fkds-color-select-background-secondary-hover",
      "comment": null,
      "values": {
        "light": {
          "value": "#d9ede3",
          "palette": "--fkds-palette-color-green-100"
        },
        "dark": {
          "value": "#292d34",
          "palette": "--fkds-palette-color-neutral-800"
        }
      }
    },
    {
      "name": "--fkds-color-select-background-tertiary-hover",
      "comment": null,
      "values": {
        "light": {
          "value": "#dee9f7",
          "palette": "--fkds-palette-color-blue-100"
        },
        "dark": {
          "value": "#494f5b",
          "palette": "--fkds-palette-color-neutral-700"
        }
      }
    },
    {
      "name": "--fkds-color-text-disabled",
      "comment": null,
      "values": {
        "light": {
          "value": "#606876",
          "palette": "--fkds-palette-color-neutral-600"
        },
        "dark": {
          "value": "#afb3bb",
          "palette": "--fkds-palette-color-neutral-300"
        }
      }
    },
    {
      "name": "--fkds-color-text-inverted",
      "comment": null,
      "values": {
        "light": {
          "value": "#ffffff",
          "palette": "--fkds-palette-color-neutral-0"
        },
        "dark": {
          "value": "#1b1e23",
          "palette": "--fkds-palette-color-neutral-900"
        }
      }
    },
    {
      "name": "--fkds-color-text-on-dark-primary",
      "comment": null,
      "values": {
        "light": {
          "value": "#ecedef",
          "palette": "--fkds-palette-color-neutral-100"
        },
        "dark": {
          "value": "#ecedef",
          "palette": "--fkds-palette-color-neutral-100"
        }
      }
    },
    {
      "name": "--fkds-color-text-primary",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b1e23",
          "palette": "--fkds-palette-color-neutral-900"
        },
        "dark": {
          "value": "#ecedef",
          "palette": "--fkds-palette-color-neutral-100"
        }
      }
    },
    {
      "name": "--fkds-color-text-secondary",
      "comment": null,
      "values": {
        "light": {
          "value": "#606876",
          "palette": "--fkds-palette-color-neutral-600"
        },
        "dark": {
          "value": "#afb3bb",
          "palette": "--fkds-palette-color-neutral-300"
        }
      }
    },
    {
      "name": "--fkds-focus-indicator-color",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b1e23",
          "palette": "--fkds-palette-color-neutral-900"
        },
        "dark": {
          "value": "#ffffff",
          "palette": "--fkds-palette-color-neutral-0"
        }
      }
    },
    {
      "name": "--fkds-focus-indicator-color-background",
      "comment": null,
      "values": {
        "light": {
          "value": "#ffffff",
          "palette": "--fkds-palette-color-neutral-0"
        },
        "dark": {
          "value": "#1b1e23",
          "palette": "--fkds-palette-color-neutral-900"
        }
      }
    }
  ]
};

// sfc-script:/home/runner/work/designsystem/designsystem/docs/styles/examples/ColorTable.vue?type=script
import { defineComponent as _defineComponent } from "vue";
import { h as h2 } from "vue";
import { FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";
var ColorTable_default = /* @__PURE__ */ _defineComponent({
  __name: "ColorTable",
  props: {
    colors: { type: Array, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const columns = defineTableColumns([
      { type: "text", header: "Namn", key: "name", size: "shrink" },
      {
        header: "F\xE4rg",
        size: "grow",
        render(row) {
          return h2("td", { class: "table-ng__cell table-ng__cell--static" }, [
            h2("div", [
              h2("span", {
                class: "color-table__color",
                style: { "--value": row.value }
              }),
              h2("code", { class: "color-table__term" }, row.value)
            ])
          ]);
        }
      }
    ]);
    const rows = useDatasetRef(props.colors);
    const __returned__ = { props, columns, rows, get FTable() {
      return FTable;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/docs/styles/examples/ColorTable.vue?type=template
import { createElementVNode as _createElementVNode, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FTable"], {
    rows: $setup.rows,
    columns: $setup.columns,
    class: "density-densest"
  }, {
    caption: _withCtx(() => [..._cache[0] || (_cache[0] = [
      _createElementVNode(
        "span",
        { class: "sr-only" },
        " F\xE4rgpaletten ",
        -1
        /* CACHED */
      )
    ])]),
    _: 1
    /* STABLE */
  }, 8, ["rows", "columns"]);
}

// docs/styles/examples/ColorTable.vue
ColorTable_default.render = render;
ColorTable_default.__file = "docs/styles/examples/ColorTable.vue";
var ColorTable_default2 = ColorTable_default;

// virtual-entry:virtual:docs/styles/examples/PaletteList.vue:PaletteList-ea3a64.js
import { renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock2, createElementBlock as _createElementBlock, toDisplayString as _toDisplayString, createElementVNode as _createElementVNode2, resolveComponent as _resolveComponent, createVNode as _createVNode } from "vue";
var groups = Map.groupBy(metadata_default.palette, (color) => color.group);
var palette = Array.from(groups, ([name, colors]) => ({
  name,
  variables: colors
}));
var exampleComponent = defineComponent({
  components: { ColorTable: ColorTable_default2 },
  data() {
    return {
      palette
    };
  }
});
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_color_table = _resolveComponent("color-table");
  return _openBlock2(), _createElementBlock("div", null, [
    (_openBlock2(true), _createElementBlock(
      _Fragment,
      null,
      _renderList(_ctx.palette, (p) => {
        return _openBlock2(), _createElementBlock(
          _Fragment,
          {
            key: p.name
          },
          [
            _createElementVNode2(
              "h3",
              null,
              _toDisplayString(p.name),
              1
              /* TEXT */
            ),
            _createVNode(_component_color_table, {
              colors: p.variables
            }, null, 8, ["colors"])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      }),
      128
      /* KEYED_FRAGMENT */
    ))
  ]);
}
exampleComponent.render = render2;
setup({
  rootComponent: exampleComponent,
  selector: "#example-ea3a64"
});
export {
  render2 as render
};
