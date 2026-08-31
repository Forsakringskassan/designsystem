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

// virtual-entry:virtual:packages/vue/src/components/FRadioField/examples/FRadioFieldLiveExample.vue:FRadioFieldLiveExample-c57167.js
import { defineComponent } from "vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { FCheckboxField, FFieldset, FRadioField, FTooltip } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FRadioFieldLiveExample",
  components: { LiveExample, FCheckboxField, FFieldset, FRadioField },
  data() {
    return {
      isHorizontal: false,
      isPreselected: false,
      isDisabled: false,
      isRequired: false,
      tooltipVisible: false,
      descriptionVisible: false
    };
  },
  computed: {
    livedata() {
      return {
        modelValue: this.isPreselected || void 0
      };
    },
    components() {
      return {
        FFieldset,
        FRadioField,
        FTooltip
      };
    },
    tooltip() {
      const template = (
        /* HTML */
        `
                <template #tooltip>
                    <f-tooltip screen-reader-text="L\xE4s mer om ers\xE4ttning fr\xE5n utlandet">
                        <template #body>
                            Om du redan f\xE5r ers\xE4ttning fr\xE5n ett annat land f\xF6r samma period kan du
                            inte f\xE5 full ers\xE4ttning fr\xE5n Sverige.
                        </template>
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
                    <span :class="descriptionClass">
                        Till exempel a-kassa, sjukpenning eller f\xF6r\xE4ldrapenning fr\xE5n n\xE5got annat
                        land \xE4n Sverige.
                    </span>
                </template>
            `
      );
      return this.descriptionVisible ? template : "";
    },
    radioFields() {
      return (
        /* HTML */
        `
                <f-radio-field v-model="modelValue" :value="true"> Ja </f-radio-field>
                <f-radio-field v-model="modelValue" :value="false" ${this.disabled}>
                    Nej
                </f-radio-field>
            `
      );
    },
    horizontal() {
      return this.isHorizontal ? "horizontal" : "";
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
                <f-fieldset name="ersattning-fran-utlandet" ${this.horizontal} ${this.required}>
                    <template #label> F\xE5r du ers\xE4ttning fr\xE5n utlandet? </template>
                    ${this.tooltip} ${this.description}
                    <template #default> ${this.radioFields} </template>
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
      _createVNode(_component_f_fieldset, { name: "radio-orientation" }, {
        label: _withCtx(() => [..._cache[7] || (_cache[7] = [
          _createTextVNode(
            " Placering ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_f_radio_field, {
            modelValue: _ctx.isHorizontal,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.isHorizontal = $event),
            value: false
          }, {
            default: _withCtx(() => [..._cache[8] || (_cache[8] = [
              _createTextVNode(
                " Vertikalt ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_radio_field, {
            modelValue: _ctx.isHorizontal,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.isHorizontal = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[9] || (_cache[9] = [
              _createTextVNode(
                " Horisontellt ",
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
      _createVNode(_component_f_fieldset, { name: "radio-options" }, {
        label: _withCtx(() => [..._cache[10] || (_cache[10] = [
          _createTextVNode(
            " Egenskaper ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.isPreselected,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.isPreselected = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[11] || (_cache[11] = [
              _createTextVNode(
                " F\xF6rvald radioknapp ",
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
            default: _withCtx(() => [..._cache[12] || (_cache[12] = [
              _createTextVNode(
                " Inaktiverad radioknapp ",
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
      _createVNode(_component_f_fieldset, { name: "radio-label" }, {
        label: _withCtx(() => [..._cache[13] || (_cache[13] = [
          _createTextVNode(
            " Etikett ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.tooltipVisible,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.tooltipVisible = $event),
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
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.descriptionVisible = $event),
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
      }),
      _createVNode(_component_f_fieldset, { name: "radio-validation" }, {
        label: _withCtx(() => [..._cache[16] || (_cache[16] = [
          _createTextVNode(
            " Validering ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.isRequired,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.isRequired = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[17] || (_cache[17] = [
              _createTextVNode(
                " Obligatoriskt val ",
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
  selector: "#example-c57167"
});
export {
  render
};
