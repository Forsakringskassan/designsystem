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

// virtual-entry:virtual:packages/vue/src/components/FLoader/examples/FLoaderLiveExample.vue:FLoaderLiveExample-f6ba78.js
import { defineComponent } from "vue";
import { FLoader, FCheckboxField } from "@fkui/vue";
import { createElement, LiveExample } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, createElementVNode as _createElementVNode, toDisplayString as _toDisplayString } from "vue";
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
      english: false
    };
  },
  computed: {
    language() {
      return this.english ? "en" : void 0;
    }
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
        if (this.english) {
          this.customText = false;
        }
      }
    },
    customText: {
      immediate: false,
      handler() {
        if (this.customText) {
          this.english = false;
        }
      }
    }
  },
  methods: {
    components() {
      return { FLoader };
    },
    toggleLoader() {
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, this.loaderTime * 1e3);
    },
    template() {
      const { show, overlay, delay, focusOnOverlay, language } = this;
      return createElement(
        "f-loader",
        {
          show,
          overlay,
          delay,
          language,
          ":focusOnOverlay": focusOnOverlay ? void 0 : "false"
        },
        this.customText ? "En alternativ text" : ""
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
        default: _withCtx(() => [..._cache[6] || (_cache[6] = [
          _createTextVNode(
            " F\xF6rdr\xF6jd ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.customText,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.customText = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[7] || (_cache[7] = [
          _createTextVNode(
            " Alternativ text ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.english,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.english = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[8] || (_cache[8] = [
          _createTextVNode(
            " Engelsk text ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.overlay,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.overlay = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[9] || (_cache[9] = [
          _createTextVNode(
            " Overlay ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _ctx.overlay ? (_openBlock(), _createBlock(_component_f_checkbox_field, {
        key: 0,
        modelValue: _ctx.focusOnOverlay,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.focusOnOverlay = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[10] || (_cache[10] = [
          _createTextVNode(
            " Fokusera p\xE5 meddelande ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])) : _createCommentVNode("v-if", true),
      _createElementVNode("button", {
        class: "button button--primary button--medium",
        type: "button",
        onClick: _cache[5] || (_cache[5] = ($event) => _ctx.toggleLoader())
      }, " Visa "),
      _createElementVNode(
        "p",
        null,
        "Laddningsindikatorn visas i " + _toDisplayString(_ctx.loaderTime) + " sekunder.",
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
  selector: "#example-f6ba78"
});
export {
  render
};
