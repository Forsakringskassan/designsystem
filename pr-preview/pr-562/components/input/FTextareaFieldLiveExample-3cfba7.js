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

// virtual-entry:virtual:packages/vue/src/components/FTextareaField/examples/FTextareaFieldLiveExample.vue:FTextareaFieldLiveExample-3cfba7.js
import { defineComponent } from "vue";
import { FCheckboxField, FFieldset, FSelectField, FTextareaField, FTooltip } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, createElementVNode as _createElementVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FListLiveExample",
  components: { LiveExample, FCheckboxField, FFieldset, FSelectField },
  data() {
    return {
      isDisabled: false,
      isResizable: false,
      customWarning: false,
      tooltipVisible: false,
      descriptionVisible: true,
      rows: "4"
    };
  },
  computed: {
    components() {
      return {
        FTextareaField,
        FTooltip
      };
    },
    livedata() {
      return {
        about: ""
      };
    },
    disabled() {
      return this.isDisabled ? "disabled" : "";
    },
    resizable() {
      return this.isResizable ? "resizable" : "";
    },
    customRows() {
      if (this.rows === "4") {
        return "";
      } else {
        return `rows="${this.rows}"`;
      }
    },
    customCharLeft() {
      return this.customWarning ? `characters-left-warning="Endast %charactersLeft% tecken kvar"` : "";
    },
    tooltip() {
      const template = (
        /* HTML */
        `
                <template #tooltip>
                    <f-tooltip screen-reader-text="Text f\xF6r sk\xE4rml\xE4sare" header-tag="h2">
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
                <template #description="{ descriptionClass, formatDescriptionClass }">
                    <span :class="descriptionClass"> En inte allt f\xF6r utf\xF6rlig ber\xE4ttelse </span>
                    <span :class="formatDescriptionClass"> (max 100 tecken) </span>
                </template>
            `
      );
      return this.descriptionVisible ? template : "";
    },
    template() {
      return (
        /* HTML */
        `
                <f-textarea-field
                    v-model="about"
                    :maxlength="100"
                    :soft-limit="20"
                    ${this.customCharLeft}
                    ${this.customRows}
                    ${this.disabled}
                    ${this.resizable}
                >
                    <template #default> Ber\xE4tta om dig sj\xE4lv </template>
                    ${this.tooltip} ${this.description}
                </f-textarea-field>
            `
      );
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  const _component_f_select_field = _resolveComponent("f-select-field");
  const _component_live_example = _resolveComponent("live-example");
  return _openBlock(), _createBlock(_component_live_example, {
    components: _ctx.components,
    template: _ctx.template,
    livedata: _ctx.livedata
  }, {
    default: _withCtx(() => [
      _createVNode(_component_f_fieldset, { name: "checkbox-label" }, {
        label: _withCtx(() => _cache[6] || (_cache[6] = [
          _createTextVNode(" Etiketten ")
        ])),
        default: _withCtx(() => [
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.tooltipVisible,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.tooltipVisible = $event),
            value: true
          }, {
            default: _withCtx(() => _cache[7] || (_cache[7] = [
              _createTextVNode(" Tooltip ")
            ])),
            _: 1,
            __: [7]
          }, 8, ["modelValue"]),
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.descriptionVisible,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.descriptionVisible = $event),
            value: true
          }, {
            default: _withCtx(() => _cache[8] || (_cache[8] = [
              _createTextVNode(" Hj\xE4lptext ")
            ])),
            _: 1,
            __: [8]
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      _createVNode(_component_f_fieldset, { name: "settings" }, {
        label: _withCtx(() => _cache[9] || (_cache[9] = [
          _createTextVNode(" Inst\xE4llningar ")
        ])),
        default: _withCtx(() => [
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.isDisabled,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.isDisabled = $event),
            value: true
          }, {
            default: _withCtx(() => _cache[10] || (_cache[10] = [
              _createTextVNode(" Inaktiv ")
            ])),
            _: 1,
            __: [10]
          }, 8, ["modelValue"]),
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.isResizable,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.isResizable = $event),
            value: true
          }, {
            default: _withCtx(() => _cache[11] || (_cache[11] = [
              _createTextVNode(" Justerbar storlek ")
            ])),
            _: 1,
            __: [11]
          }, 8, ["modelValue"]),
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.customWarning,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.customWarning = $event),
            value: true
          }, {
            default: _withCtx(() => _cache[12] || (_cache[12] = [
              _createTextVNode(" Egen varningstext ")
            ])),
            _: 1,
            __: [12]
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      _createVNode(_component_f_select_field, {
        modelValue: _ctx.rows,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.rows = $event)
      }, {
        label: _withCtx(() => _cache[13] || (_cache[13] = [
          _createTextVNode(" Antal rader ")
        ])),
        default: _withCtx(() => [
          _cache[14] || (_cache[14] = _createElementVNode(
            "option",
            { value: "3" },
            "3",
            -1
            /* CACHED */
          )),
          _cache[15] || (_cache[15] = _createElementVNode(
            "option",
            { value: "4" },
            "4 (standard)",
            -1
            /* CACHED */
          )),
          _cache[16] || (_cache[16] = _createElementVNode(
            "option",
            { value: "5" },
            "5",
            -1
            /* CACHED */
          )),
          _cache[17] || (_cache[17] = _createElementVNode(
            "option",
            { value: "6" },
            "6",
            -1
            /* CACHED */
          ))
        ]),
        _: 1,
        __: [14, 15, 16, 17]
      }, 8, ["modelValue"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["components", "template", "livedata"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-3cfba7"
});
export {
  render
};
