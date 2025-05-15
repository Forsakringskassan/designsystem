// docs/src/setup.ts
import { createApp, h } from "vue";
import {
  ErrorPlugin,
  FErrorHandlingApp,
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
  app.mount(selector);
}

// virtual-entry:virtual:packages/vue/src/components/FLoader/examples/FLoaderLiveExample.vue:FLoaderLiveExample-a1458d.js
import { defineComponent } from "vue";
import { FLoader, FCheckboxField } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, toDisplayString as _toDisplayString, createElementVNode as _createElementVNode } from "vue";
var exampleComponent = defineComponent({
  name: "FLoaderLiveExample",
  components: {
    FCheckboxField,
    LiveExample
  },
  data() {
    return {
      loaderTime: 10,
      show: false,
      overlay: false,
      delay: false,
      customText: false,
      focusOnOverlay: true,
      language: false
    };
  },
  watch: {
    overlay: {
      immediate: false,
      handler() {
        if (!this.overlay) {
          this.focusOnOverlay = true;
        }
      }
    },
    language: {
      immediate: false,
      handler() {
        if (this.language) {
          this.customText = false;
        }
      }
    },
    customText: {
      immediate: false,
      handler() {
        if (this.language) {
          this.language = false;
        }
      }
    }
  },
  methods: {
    components() {
      return { FLoader };
    },
    showLoader() {
      return this.show ? "show" : "";
    },
    showOverlay() {
      return this.overlay ? "overlay" : "";
    },
    showDelayed() {
      return this.delay ? "delay" : "";
    },
    showCustomText() {
      return this.customText ? "En alternativ text" : "";
    },
    showFocusOnOverlay() {
      return this.focusOnOverlay ? "" : ':focusOnOverlay="false"';
    },
    useEnglish() {
      return this.language ? 'language="en"' : "";
    },
    toggleLoader() {
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, this.loaderTime * 1e3);
    },
    template() {
      return (
        /* HTML */
        `
                <f-loader
                    ${this.showLoader()}
                    ${this.showOverlay()}
                    ${this.showDelayed()}
                    ${this.showFocusOnOverlay()}
                    ${this.useEnglish()}
                >
                    ${this.showCustomText()}
                </f-loader>
            `
      );
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_live_example = _resolveComponent("live-example");
  return _openBlock(), _createBlock(_component_live_example, {
    components: _ctx.components(),
    template: _ctx.template()
  }, {
    default: _withCtx(() => [
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.delay,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.delay = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[6] || (_cache[6] = [
          _createTextVNode(" F\xF6rdr\xF6jd ")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.customText,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.customText = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[7] || (_cache[7] = [
          _createTextVNode(" Alternativ text ")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.language,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.language = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[8] || (_cache[8] = [
          _createTextVNode(" Engelsk text ")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.overlay,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.overlay = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[9] || (_cache[9] = [
          _createTextVNode(" Overlay ")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _ctx.overlay ? (_openBlock(), _createBlock(_component_f_checkbox_field, {
        key: 0,
        modelValue: _ctx.focusOnOverlay,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.focusOnOverlay = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[10] || (_cache[10] = [
          _createTextVNode(" Fokusera p\xE5 meddelande ")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])) : _createCommentVNode("v-if", true),
      _createElementVNode(
        "button",
        {
          class: "button button--primary button--small",
          type: "button",
          onClick: _cache[5] || (_cache[5] = ($event) => _ctx.toggleLoader())
        },
        " Visa laddningsindikator i " + _toDisplayString(_ctx.loaderTime) + " sekunder ",
        1
        /* TEXT */
      )
    ]),
    _: 1
    /* STABLE */
  }, 8, ["components", "template"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-a1458d"
});
export {
  render
};
