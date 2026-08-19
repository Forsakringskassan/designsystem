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

// virtual-entry:virtual:packages/vue/src/components/FButton/examples/FButtonListExample.vue:FButtonListExample-33dbdd.js
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
     * Type of button, can be one of:
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
     * Button size, can be one of:
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
     * Name of an icon to display on the left side of the button.
     */
    iconLeft: {
      type: String,
      default: void 0
    },
    /**
     * Name of an icon to display on the right side of the button.
     */
    iconRight: {
      type: String,
      default: void 0
    },
    /**
     * Icon library to use.
     */
    iconLibrary: {
      type: String,
      required: false,
      default: "f"
    },
    /**
     * Tertiary button style, used in conjunction with button variant `tertiary`.
     * Can be one of:
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
     * Align button text and icon with content above or below.
     * Used in conjunction with button variant `tertiary`.
     */
    alignText: {
      type: Boolean
    },
    /**
     *
     * Enable full width on mobile for sizes `small` and `medium`, always active for button size `large`.
     */
    mobileFullWidth: {
      type: Boolean
    },
    /**
     * The default behavior of the button. Possible values are:
     * - `submit`
     * - `reset`
     * - `button`
     */
    type: {
      type: String,
      default: "button",
      validator(value) {
        return ["submit", "reset", "button"].includes(value);
      }
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const originalAttrs = useAttrs();
    const { inflight, fn: onClick } = useInflight(originalAttrs.onClick);
    const attrs = { ...originalAttrs, onClick };
    const hasIconLeft = computed(() => {
      return Boolean(props.iconLeft);
    });
    const hasIconRight = computed(() => {
      return Boolean(props.iconRight);
    });
    const hasIcon = computed(() => {
      return hasIconLeft.value || hasIconRight.value;
    });
    const buttonClass = computed(() => {
      const classes = ["button", `button--${props.variant}`, `button--${props.size}`];
      if (props.variant === "tertiary" && props.alignText) {
        classes.push(`button--align-text`);
      }
      if (props.variant === "tertiary") {
        classes.push(`button--tertiary--${props.tertiaryStyle}`);
      }
      if (props.variant === "tertiary" && !hasIcon.value) {
        classes.push(`button--tertiary--underline`);
      }
      if (props.mobileFullWidth && props.size !== "large") {
        classes.push(`button--full-width`);
      }
      if (inflight.value) {
        classes.push(`button__inflight`);
      }
      return classes;
    });
    const __returned__ = { props, originalAttrs, inflight, onClick, attrs, hasIconLeft, hasIconRight, hasIcon, buttonClass, get FIcon() {
      return FIcon_default2;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FButton/FButton.vue?type=template
import { openBlock as _openBlock2, createBlock as _createBlock, createCommentVNode as _createCommentVNode2, Fragment as _Fragment2, createElementBlock as _createElementBlock2, renderSlot as _renderSlot2, createElementVNode as _createElementVNode2, mergeProps as _mergeProps2 } from "vue";
var _hoisted_12 = ["type", "disabled"];
var _hoisted_22 = {
  key: 1,
  class: "spinner--before"
};
var _hoisted_3 = {
  key: 3,
  class: "spinner--after"
};
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock2(), _createElementBlock2("button", _mergeProps2({
    type: $props.type,
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
          class: "button__icon button__spinner"
        })) : $setup.props.iconLeft ? (_openBlock2(), _createBlock($setup["FIcon"], {
          key: 1,
          class: "button__icon",
          name: $setup.props.iconLeft,
          library: $setup.props.iconLibrary
        }, null, 8, ["name", "library"])) : _createCommentVNode2("v-if", true)
      ],
      64
      /* STABLE_FRAGMENT */
    )) : _createCommentVNode2("v-if", true),
    !$setup.hasIcon ? (_openBlock2(), _createElementBlock2("span", _hoisted_22, [
      $setup.inflight ? (_openBlock2(), _createBlock($setup["FIcon"], {
        key: 0,
        name: "circle-notch-solid",
        class: "button__icon button__spinner"
      })) : _createCommentVNode2("v-if", true)
    ])) : _createCommentVNode2("v-if", true),
    _createCommentVNode2("\n        @slot Slot for text to display in the button.\n        "),
    _createElementVNode2("span", null, [
      _renderSlot2(_ctx.$slots, "default")
    ]),
    $setup.hasIconRight ? (_openBlock2(), _createElementBlock2(
      _Fragment2,
      { key: 2 },
      [
        $setup.inflight ? (_openBlock2(), _createBlock($setup["FIcon"], {
          key: 0,
          name: "circle-notch-solid",
          class: "button__icon button__spinner"
        })) : $setup.props.iconRight ? (_openBlock2(), _createBlock($setup["FIcon"], {
          key: 1,
          class: "button__icon",
          name: $setup.props.iconRight,
          library: $setup.props.iconLibrary
        }, null, 8, ["name", "library"])) : _createCommentVNode2("v-if", true)
      ],
      64
      /* STABLE_FRAGMENT */
    )) : _createCommentVNode2("v-if", true),
    !$setup.hasIcon ? (_openBlock2(), _createElementBlock2("span", _hoisted_3)) : _createCommentVNode2("v-if", true)
  ], 16, _hoisted_12);
}

// packages/vue/src/components/FButton/FButton.vue
FButton_default.render = render2;
FButton_default.__file = "packages/vue/src/components/FButton/FButton.vue";
var FButton_default2 = FButton_default;

// virtual-entry:virtual:packages/vue/src/components/FButton/examples/FButtonListExample.vue:FButtonListExample-33dbdd.js
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, createElementVNode as _createElementVNode3, openBlock as _openBlock3, createElementBlock as _createElementBlock3 } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent2({
  __name: "FButtonListExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { FButton: FButton_default2 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_13 = { class: "button-list no-marker" };
function render3(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock3(), _createElementBlock3("ul", _hoisted_13, [
    _createElementVNode3("li", null, [
      _createVNode($setup["FButton"], {
        variant: "tertiary",
        "icon-left": "success"
      }, {
        default: _withCtx(() => [..._cache[0] || (_cache[0] = [
          _createTextVNode(
            " Knapp 1 i lista ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      })
    ]),
    _createElementVNode3("li", null, [
      _createVNode($setup["FButton"], {
        variant: "tertiary",
        "icon-left": "cross"
      }, {
        default: _withCtx(() => [..._cache[1] || (_cache[1] = [
          _createTextVNode(
            " Knapp 2 i lista ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      })
    ]),
    _createElementVNode3("li", null, [
      _createVNode($setup["FButton"], {
        variant: "tertiary",
        "icon-left": "pen"
      }, {
        default: _withCtx(() => [..._cache[2] || (_cache[2] = [
          _createTextVNode(
            " Knapp 3 i lista ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      })
    ])
  ]);
}
exampleComponent.render = render3;
setup({
  rootComponent: exampleComponent,
  selector: "#example-33dbdd"
});
export {
  render3 as render
};
