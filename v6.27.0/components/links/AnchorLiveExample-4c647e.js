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

// virtual-entry:virtual:packages/vue/src/design-component-tests/Anchor/examples/AnchorLiveExample.vue:AnchorLiveExample-4c647e.js
import { defineComponent } from "vue";
import { FCheckboxField, FFieldset, FIcon, FRadioField, FSelectField } from "@fkui/vue";
import { LiveExample, createElement } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, createElementVNode as _createElementVNode, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode } from "vue";
var exampleComponent = defineComponent({
  name: "AnchorLiveExample",
  components: { LiveExample, FCheckboxField, FFieldset, FRadioField, FSelectField },
  data() {
    return {
      linkType: "standard",
      isDiscrete: false,
      fileType: "pdf"
    };
  },
  computed: {
    isDocument() {
      return this.linkType === `document`;
    },
    components() {
      return { FIcon };
    },
    content() {
      const text = "L\xE4nktext";
      const icon = this.fileType;
      switch (this.linkType) {
        case "standard":
          return [text];
        case "document":
          return [`<f-icon name="${icon}"></f-icon>`, text];
        case "external":
          return [
            text,
            `<f-icon name="new-window"></f-icon>`,
            `<span class="sr-only">\xF6ppnas i ny flik</span>`
          ];
        default:
          return [text];
      }
    },
    template() {
      const { isDiscrete } = this;
      const isExternal = this.linkType === "external";
      return createElement(
        "a",
        {
          class: ["anchor", "anchor--block", isDiscrete ? "anchor--discrete" : void 0],
          href: isExternal ? "https://example.net/" : "#",
          target: isExternal ? "_blank" : void 0
        },
        this.content
      );
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_radio_field = _resolveComponent("f-radio-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  const _component_f_select_field = _resolveComponent("f-select-field");
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_live_example = _resolveComponent("live-example");
  return _openBlock(), _createBlock(_component_live_example, {
    components: _ctx.components,
    template: _ctx.template
  }, {
    default: _withCtx(() => [
      _createVNode(_component_f_fieldset, { name: "radio-link-type" }, {
        label: _withCtx(() => [..._cache[5] || (_cache[5] = [
          _createTextVNode(
            " Typ av l\xE4nk ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_f_radio_field, {
            modelValue: _ctx.linkType,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.linkType = $event),
            value: "standard"
          }, {
            default: _withCtx(() => [..._cache[6] || (_cache[6] = [
              _createTextVNode(
                " Standard ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_radio_field, {
            modelValue: _ctx.linkType,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.linkType = $event),
            value: "document"
          }, {
            default: _withCtx(() => [..._cache[7] || (_cache[7] = [
              _createTextVNode(
                " Dokument ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_radio_field, {
            modelValue: _ctx.linkType,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.linkType = $event),
            value: "external"
          }, {
            default: _withCtx(() => [..._cache[8] || (_cache[8] = [
              _createTextVNode(
                " Ny flik ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      _ctx.isDocument ? (_openBlock(), _createBlock(_component_f_select_field, {
        key: 0,
        modelValue: _ctx.fileType,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.fileType = $event)
      }, {
        label: _withCtx(() => [..._cache[9] || (_cache[9] = [
          _createTextVNode(
            " Filtyp ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _cache[10] || (_cache[10] = _createElementVNode(
            "option",
            { value: "pdf" },
            "PDF",
            -1
            /* CACHED */
          )),
          _cache[11] || (_cache[11] = _createElementVNode(
            "option",
            { value: "doc" },
            "Doc",
            -1
            /* CACHED */
          )),
          _cache[12] || (_cache[12] = _createElementVNode(
            "option",
            { value: "pic" },
            "Bild",
            -1
            /* CACHED */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])) : _createCommentVNode("v-if", true),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.isDiscrete,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.isDiscrete = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[13] || (_cache[13] = [
          _createTextVNode(
            " Diskret l\xE4nk ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["components", "template"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-4c647e"
});
export {
  render
};
