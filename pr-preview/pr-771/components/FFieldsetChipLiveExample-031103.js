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

// virtual-entry:virtual:packages/vue/src/components/FFieldset/examples/FFieldsetChipLiveExample.vue:FFieldsetChipLiveExample-031103.js
import { defineComponent } from "vue";
import { FCheckboxField, FFieldset, FRadioField, FTooltip } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FFieldsetLiveExample",
  components: { LiveExample, FRadioField, FFieldset, FCheckboxField },
  data() {
    return {
      type: "radio",
      isHorizontal: false,
      tooltipVisible: false,
      descriptionVisible: false,
      isDisabled: false,
      isRequired: false
    };
  },
  computed: {
    components() {
      return {
        FTooltip,
        FFieldset,
        FCheckboxField,
        FRadioField
      };
    },
    livedata() {
      return {
        choices: []
      };
    },
    tooltip() {
      const template = (
        /* HTML */
        `
                <template #tooltip>
                    <f-tooltip screen-reader-text="L\xE4s mer om Broschyrer" header-tag="h2">
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
    componentType() {
      return `f-${this.type}-field`;
    },
    choices() {
      return (
        /* HTML */
        `
                <${this.componentType}
                    v-model="choices"
                    value="Ett alternativ"
                >
                    Ett alternativ
                </${this.componentType}>

                <${this.componentType}
                    v-model="choices"
                    value="Alternativ 2"
                >
                    Alternativ 2
                </${this.componentType}>

                <${this.componentType}
                    v-model="choices"
                    value="Ytterligare alternativ"
                >
                    Ytterligare alternativ
                </${this.componentType}>

                <${this.componentType}
                    v-model="choices"
                    value="Sista"
                    ${this.disabled}
                >
                    Sista
                </${this.componentType}>
            `
      );
    },
    disabled() {
      return this.isDisabled ? "disabled" : "";
    },
    required() {
      return this.isRequired ? "v-validation.required" : "";
    },
    horizontal() {
      return this.isHorizontal ? "horizontal" : "";
    },
    template() {
      return (
        /* HTML */
        `
                <f-fieldset name="chips" chip ${this.required} ${this.horizontal}>
                    <template #label> Etikett-rubrik </template>
                    ${this.tooltip} ${this.description} ${this.choices}
                </f-fieldset>
            `
      );
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_radio_field = _resolveComponent("f-radio-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_live_example = _resolveComponent("live-example");
  return _openBlock(), _createBlock(_component_live_example, {
    components: _ctx.components,
    template: _ctx.template,
    livedata: _ctx.livedata
  }, {
    default: _withCtx(() => [
      _createVNode(_component_f_fieldset, { name: "type" }, {
        label: _withCtx(() => [..._cache[7] || (_cache[7] = [
          _createTextVNode(
            " Typ ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_f_radio_field, {
            modelValue: _ctx.type,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.type = $event),
            value: "radio"
          }, {
            default: _withCtx(() => [..._cache[8] || (_cache[8] = [
              _createTextVNode(
                " Enkelval (radioknappar)",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_radio_field, {
            modelValue: _ctx.type,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.type = $event),
            value: "checkbox"
          }, {
            default: _withCtx(() => [..._cache[9] || (_cache[9] = [
              _createTextVNode(
                " Flerval (kryssrutor)",
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
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.isHorizontal,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.isHorizontal = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[10] || (_cache[10] = [
          _createTextVNode(
            " Horisontell layout ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.isDisabled,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.isDisabled = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[11] || (_cache[11] = [
          _createTextVNode(
            " Inaktiverad ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.isRequired,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.isRequired = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[12] || (_cache[12] = [
          _createTextVNode(
            " Obligatorisk ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_fieldset, { name: "checkbox-label" }, {
        label: _withCtx(() => [..._cache[13] || (_cache[13] = [
          _createTextVNode(
            " Etiketten ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.tooltipVisible,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.tooltipVisible = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[14] || (_cache[14] = [
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
            modelValue: _ctx.descriptionVisible,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.descriptionVisible = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[15] || (_cache[15] = [
              _createTextVNode(
                " Hj\xE4lptext ",
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
  selector: "#example-031103"
});
export {
  render
};
