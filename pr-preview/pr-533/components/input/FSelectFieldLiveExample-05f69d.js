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

// virtual-entry:virtual:packages/vue/src/components/FSelectField/examples/FSelectFieldLiveExample.vue:FSelectFieldLiveExample-05f69d.js
import { defineComponent } from "vue";
import { FFieldset, FCheckboxField, FTooltip, FSelectField } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FSelectFieldLiveExample",
  components: { LiveExample, FFieldset, FCheckboxField },
  data() {
    return {
      tooltipVisible: false,
      descriptionVisible: false,
      isDisabled: false,
      isRequired: false,
      showInline: false
    };
  },
  computed: {
    components() {
      return {
        FFieldset,
        FCheckboxField,
        FTooltip,
        FSelectField
      };
    },
    livedata() {
      return {
        selectfieldtest: ""
      };
    },
    tooltip() {
      const template = (
        /* HTML */
        `
                <template #tooltip>
                    <f-tooltip screen-reader-text="L\xE4s mer h\xE4r" header-tag="h1">
                        <template #header> Header </template>
                        <template #body> Body </template>
                    </f-tooltip>
                </template>
            `
      );
      return this.tooltipVisible ? template : "";
    },
    description() {
      const template = (
        /* HTML */
        `
                <template #description="{ descriptionClass }">
                    <span :class="descriptionClass"> Hj\xE4lptext </span>
                </template>
            `
      );
      return this.descriptionVisible ? template : "";
    },
    inline() {
      const template = (
        /* HTML */
        ` inline`
      );
      return this.showInline ? template : "";
    },
    options() {
      return (
        /* HTML */
        `
                <option disabled hidden value="">V\xE4lj\u2026</option>
                <option value="1">Alternativ 1</option>
                <option value="2">Alternativ 2</option>
                <option value="3">Alternativ 3</option>
                <option value="4">Alternativ 4</option>
                <option value="5">Alternativ 5</option>
                <option value="6">Alternativ 6</option>
                <option value="7">Alternativ 7</option>
            `
      );
    },
    disabled() {
      return this.isDisabled ? "disabled" : "";
    },
    required() {
      return this.isRequired ? "v-validation.required" : "";
    },
    template() {
      return (
        /* HTML */
        `
                <f-select-field
                    id="dropplista"
                    v-model="selectfieldtest"
                    ${this.required}
                    ${this.disabled}
                    ${this.inline}
                >
                    <template #label> Etikett rubrik </template>
                    ${this.tooltip} ${this.description} ${this.options}
                </f-select-field>
            `
      );
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  const _component_live_example = _resolveComponent("live-example");
  return _openBlock(), _createBlock(_component_live_example, {
    components: _ctx.components,
    template: _ctx.template,
    livedata: _ctx.livedata
  }, {
    default: _withCtx(() => [
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.isRequired,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.isRequired = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[5] || (_cache[5] = [
          _createTextVNode(
            " Obligatoriskt f\xE4lt ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.isDisabled,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.isDisabled = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[6] || (_cache[6] = [
          _createTextVNode(
            " Inaktivt f\xE4lt ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_fieldset, { name: "SelectField-label" }, {
        label: _withCtx(() => [..._cache[7] || (_cache[7] = [
          _createTextVNode(
            " Etiketten ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.descriptionVisible,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.descriptionVisible = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[8] || (_cache[8] = [
              _createTextVNode(
                " Hj\xE4lptext ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.tooltipVisible,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.tooltipVisible = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[9] || (_cache[9] = [
              _createTextVNode(
                " Tooltip ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.showInline,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.showInline = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[10] || (_cache[10] = [
              _createTextVNode(
                " Inline ",
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
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["components", "template", "livedata"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-05f69d"
});
export {
  render
};
