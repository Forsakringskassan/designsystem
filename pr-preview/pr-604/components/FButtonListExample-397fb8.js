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

// virtual-entry:virtual:packages/vue/src/components/FButton/examples/FButtonListExample.vue:FButtonListExample-397fb8.js
import { defineComponent as _defineComponent2 } from "vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FButton/FButton.vue?type=script
import { defineComponent as _defineComponent } from "vue";
import { computed, useAttrs } from "vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FIcon/FIcon.vue?type=script
import { defineComponent } from "vue";
var Flip = ["horizontal", "vertical"];
var Rotate = ["90", "180", "270"];
var FIcon_default = defineComponent({
  name: "FIcon",
  inheritAttrs: false,
  props: {
    /**
     * Icon name.
     */
    name: {
      type: String,
      required: true
    },
    /**
     * fk-icon library
     */
    library: {
      type: String,
      required: false,
      default: "f"
    },
    /**
     * Flip icon horizontally or vertically.
     *
     * Must be set to one of:
     *
     * - `horizontal`
     * - `vertical`
     */
    flip: {
      type: String,
      default: null,
      required: false,
      validator(value) {
        return Flip.includes(value);
      }
    },
    /**
     * Rotate icon.
     *
     * Must be set to one of:
     *
     * - `90`
     * - `180`
     * - `270`
     */
    rotate: {
      type: String,
      default: null,
      required: false,
      validator(value) {
        return Rotate.includes(value);
      }
    }
  },
  computed: {
    spriteKey() {
      return `${this.library}-icon-${this.name}`;
    },
    spriteId() {
      return `#${this.spriteKey}`;
    },
    modifiers() {
      const classes = [];
      if (this.flip) {
        classes.push(`icon--flip-${this.flip}`);
      }
      if (this.rotate) {
        classes.push(`icon--rotate-${this.rotate}`);
      }
      return classes;
    },
    ariaHidden() {
      const slotUsed = Boolean(this.$slots.default);
      const ariaLabel = this.$attrs["aria-label"] !== void 0;
      const ariaLabelledby = this.$attrs["aria-labelledby"] !== void 0;
      const ariaDescription = this.$attrs["aria-description"] !== void 0;
      const ariaDescribedby = this.$attrs["aria-describedby"] !== void 0;
      const hasText = slotUsed || ariaLabel || ariaLabelledby || ariaDescription || ariaDescribedby;
      return hasText ? void 0 : "true";
    }
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FIcon/FIcon.vue?type=template
import { createCommentVNode as _createCommentVNode, renderSlot as _renderSlot, createElementVNode as _createElementVNode, mergeProps as _mergeProps, openBlock as _openBlock, createElementBlock as _createElementBlock, Fragment as _Fragment } from "vue";
var _hoisted_1 = ["aria-hidden"];
var _hoisted_2 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _createCommentVNode(" [html-validate-disable-block fkui/prefer-ficon -- this is the FIcon component]"),
      (_openBlock(), _createElementBlock("svg", _mergeProps(_ctx.$attrs, {
        focusable: "false",
        class: ["icon", [_ctx.spriteKey, ..._ctx.modifiers]],
        "aria-hidden": _ctx.ariaHidden
      }), [
        _renderSlot(_ctx.$slots, "default"),
        _createElementVNode("use", { href: _ctx.spriteId }, null, 8, _hoisted_2)
      ], 16, _hoisted_1))
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

// packages/vue/src/components/FIcon/FIcon.vue
FIcon_default.render = render;
FIcon_default.__file = "packages/vue/src/components/FIcon/FIcon.vue";
var FIcon_default2 = FIcon_default;

// packages/vue/src/components/FButton/use-inflight.ts
import { ref } from "vue";
function useInflight(fn) {
  const inflight = ref(false);
  if (!fn || typeof fn !== "function") {
    return { inflight, fn: void 0 };
  }
  const originalFn = fn;
  async function wrapper() {
    try {
      inflight.value = true;
      await originalFn();
    } finally {
      inflight.value = false;
    }
  }
  return { inflight, fn: wrapper };
}

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FButton/FButton.vue?type=script
var FButton_default = /* @__PURE__ */ _defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "FButton",
  props: {
    /**
     * Type of button, can be either of:
     * - `primary`
     * - `secondary`
     * - `tertiary`
     */
    variant: {
      type: String,
      default: "primary",
      validator(value) {
        return ["primary", "secondary", "tertiary"].includes(value);
      }
    },
    /**
     * Button size, can be either of:
     * - `small`
     * - `medium`
     * - `large`
     */
    size: {
      type: String,
      default: "medium",
      validator(value) {
        return ["small", "medium", "large"].includes(value);
      }
    },
    /**
     * When set to an icon name an icon is displayed to the left of the button text.
     */
    iconLeft: {
      type: String,
      default: void 0
    },
    /**
     * When set to an icon name an icon is displayed to the right of the button text.
     */
    iconRight: {
      type: String,
      default: void 0
    },
    /**
     * Tertiarry button style, used in conjunction with button type `tertiarry`.
     * Can be either of:
     * - `standard`
     * - `black`
     * - `inverted`
     */
    tertiaryStyle: {
      type: String,
      default: "standard",
      validator(value) {
        return ["standard", "black", "inverted"].includes(value);
      }
    },
    /**
     * Align button text and icon with content abow or below.
     */
    alignText: {
      type: Boolean,
      default: false
    },
    /**
     * Sets margin to 0, used in conjunction with `button-group`.
     */
    groupItem: {
      type: Boolean,
      default: false
    },
    /**
     * Automatically set button to full width when screen width is 639 pixels or below, always active for button size `large`.
     */
    mobileFullWidth: {
      type: Boolean,
      default: false
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const originalAttrs = useAttrs();
    const { inflight, fn: onClick } = useInflight(originalAttrs.onClick);
    const attrs = { ...originalAttrs, onClick };
    const props = __props;
    const hasIconLeft = computed(() => {
      return !!props.iconLeft;
    });
    const hasIconRight = computed(() => {
      return !!props.iconRight;
    });
    const hasIcon = computed(() => {
      return hasIconLeft.value || hasIconRight.value;
    });
    const buttonClass = computed(() => {
      let classes = `button button--${props.variant} button--${props.size}`;
      if (props.groupItem) {
        classes = `${classes} button-group__item`;
      }
      if (props.variant === "tertiary" && props.alignText) {
        classes = `${classes} button--align-text`;
      }
      if (props.variant === "tertiary") {
        classes = `${classes} button--tertiary--${props.tertiaryStyle}`;
      }
      if (props.variant === "tertiary" && !hasIcon.value) {
        classes = `${classes} button--tertiary--underline`;
      }
      if (props.mobileFullWidth && props.size !== "large") {
        classes = `${classes} button--full-width`;
      }
      if (!hasIcon.value && !inflight.value) {
        classes = `${classes} button--no-icon`;
      }
      return classes;
    });
    const __returned__ = { originalAttrs, inflight, onClick, attrs, props, hasIconLeft, hasIconRight, hasIcon, buttonClass, get FIcon() {
      return FIcon_default2;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FButton/FButton.vue?type=template
import { openBlock as _openBlock2, createBlock as _createBlock, createCommentVNode as _createCommentVNode2, Fragment as _Fragment2, createElementBlock as _createElementBlock2, renderSlot as _renderSlot2, mergeProps as _mergeProps2 } from "vue";
var _hoisted_12 = ["disabled"];
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock2(), _createElementBlock2("button", _mergeProps2({
    type: "button",
    class: $setup.buttonClass,
    disabled: $setup.inflight
  }, $setup.attrs), [
    $setup.hasIconLeft ? (_openBlock2(), _createElementBlock2(
      _Fragment2,
      { key: 0 },
      [
        $setup.inflight ? (_openBlock2(), _createBlock($setup["FIcon"], {
          key: 0,
          name: "circle-notch-solid",
          class: "button__icon button__inflight"
        })) : $setup.props.iconLeft ? (_openBlock2(), _createBlock($setup["FIcon"], {
          key: 1,
          "aria-hidden": "true",
          focusable: "false",
          class: "button__icon",
          name: $setup.props.iconLeft
        }, null, 8, ["name"])) : _createCommentVNode2("v-if", true)
      ],
      64
      /* STABLE_FRAGMENT */
    )) : _createCommentVNode2("v-if", true),
    !$setup.hasIcon ? (_openBlock2(), _createElementBlock2(
      _Fragment2,
      { key: 1 },
      [
        $setup.inflight ? (_openBlock2(), _createBlock($setup["FIcon"], {
          key: 0,
          name: "circle-notch-solid",
          class: "button__icon button__inflight"
        })) : _createCommentVNode2("v-if", true)
      ],
      64
      /* STABLE_FRAGMENT */
    )) : _createCommentVNode2("v-if", true),
    _createCommentVNode2("\n        @slot Slot for text to display in the button.\n        "),
    _renderSlot2(_ctx.$slots, "default"),
    $setup.hasIconRight ? (_openBlock2(), _createElementBlock2(
      _Fragment2,
      { key: 2 },
      [
        $setup.inflight ? (_openBlock2(), _createBlock($setup["FIcon"], {
          key: 0,
          name: "circle-notch-solid",
          class: "button__icon button__inflight"
        })) : $setup.props.iconRight ? (_openBlock2(), _createBlock($setup["FIcon"], {
          key: 1,
          "aria-hidden": "true",
          focusable: "false",
          class: "button__icon",
          name: $setup.props.iconRight
        }, null, 8, ["name"])) : _createCommentVNode2("v-if", true)
      ],
      64
      /* STABLE_FRAGMENT */
    )) : _createCommentVNode2("v-if", true)
  ], 16, _hoisted_12);
}

// packages/vue/src/components/FButton/FButton.vue
FButton_default.render = render2;
FButton_default.__file = "packages/vue/src/components/FButton/FButton.vue";
var FButton_default2 = FButton_default;

// virtual-entry:virtual:packages/vue/src/components/FButton/examples/FButtonListExample.vue:FButtonListExample-397fb8.js
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, createElementVNode as _createElementVNode2, openBlock as _openBlock3, createElementBlock as _createElementBlock3 } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent2({
  __name: "FButtonListExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { FButton: FButton_default2 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_13 = { class: "button-list" };
function render3(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock3(), _createElementBlock3("ul", _hoisted_13, [
    _createElementVNode2("li", null, [
      _createVNode($setup["FButton"], {
        variant: "secondary",
        "group-item": ""
      }, {
        default: _withCtx(() => _cache[0] || (_cache[0] = [
          _createTextVNode(
            " Knapp 1 i lista ",
            -1
            /* CACHED */
          )
        ])),
        _: 1,
        __: [0]
      })
    ]),
    _createElementVNode2("li", null, [
      _createVNode($setup["FButton"], {
        variant: "secondary",
        "group-item": ""
      }, {
        default: _withCtx(() => _cache[1] || (_cache[1] = [
          _createTextVNode(
            " Knapp 2 i lista ",
            -1
            /* CACHED */
          )
        ])),
        _: 1,
        __: [1]
      })
    ])
  ]);
}
exampleComponent.render = render3;
setup({
  rootComponent: exampleComponent,
  selector: "#example-397fb8"
});
export {
  render3 as render
};
