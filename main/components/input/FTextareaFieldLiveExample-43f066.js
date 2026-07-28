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

// virtual-entry:virtual:packages/vue/src/components/FTextareaField/examples/FTextareaFieldLiveExample.vue:FTextareaFieldLiveExample-43f066.js
import { defineComponent } from "vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import {
  FCheckboxField,
  FFieldset,
  FRadioField,
  FSelectField,
  FTextareaField,
  FTooltip
} from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, createElementVNode as _createElementVNode, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FTextareaFieldLiveExample",
  components: { LiveExample, FCheckboxField, FFieldset, FRadioField, FSelectField },
  data() {
    return {
      isDisabled: false,
      heightMode: "fixed",
      customWarning: false,
      tooltipVisible: false,
      descriptionVisible: true,
      rows: "",
      maxRows: ""
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
    isAutoResize() {
      return this.heightMode === "auto";
    },
    isResizable() {
      return this.heightMode === "resizable";
    },
    resizable() {
      return this.isResizable ? "resizable" : "";
    },
    autoResize() {
      return this.isAutoResize ? "auto-resize" : "";
    },
    customRows() {
      return this.rows ? `rows="${this.rows}"` : "";
    },
    customMaxRows() {
      return this.isAutoResize && this.maxRows ? `:max-rows="${this.maxRows}"` : "";
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
                    ${this.customMaxRows}
                    ${this.disabled}
                    ${this.resizable}
                    ${this.autoResize}
                >
                    <template #default> Ber\xE4tta om dig sj\xE4lv </template>
                    ${this.tooltip} ${this.description}
                </f-textarea-field>
            `
      );
    }
  },
  watch: {
    heightMode(value) {
      if (value !== "auto" && (this.rows === "1" || this.rows === "2")) {
        this.rows = "";
      }
    }
  }
});
var _hoisted_1 = {
  key: 0,
  value: "1"
};
var _hoisted_2 = {
  key: 1,
  value: "2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_radio_field = _resolveComponent("f-radio-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  const _component_f_select_field = _resolveComponent("f-select-field");
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_live_example = _resolveComponent("live-example");
  return _openBlock(), _createBlock(_component_live_example, {
    components: _ctx.components,
    template: _ctx.template,
    livedata: _ctx.livedata
  }, {
    default: _withCtx(() => [
      _createVNode(_component_f_fieldset, { name: "height-settings" }, {
        label: _withCtx(() => [..._cache[9] || (_cache[9] = [
          _createTextVNode(
            " H\xF6jd ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_f_radio_field, {
            modelValue: _ctx.heightMode,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.heightMode = $event),
            value: "fixed"
          }, {
            default: _withCtx(() => [..._cache[10] || (_cache[10] = [
              _createTextVNode(
                " Fast ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_radio_field, {
            modelValue: _ctx.heightMode,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.heightMode = $event),
            value: "resizable"
          }, {
            default: _withCtx(() => [..._cache[11] || (_cache[11] = [
              _createTextVNode(
                " Justerbar ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_radio_field, {
            modelValue: _ctx.heightMode,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.heightMode = $event),
            value: "auto"
          }, {
            default: _withCtx(() => [..._cache[12] || (_cache[12] = [
              _createTextVNode(
                " Automatisk ",
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
      _createVNode(_component_f_select_field, {
        modelValue: _ctx.rows,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.rows = $event)
      }, {
        label: _withCtx(() => [..._cache[13] || (_cache[13] = [
          _createTextVNode(
            " Antal rader ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _ctx.isAutoResize ? (_openBlock(), _createElementBlock("option", _hoisted_1, "1")) : _createCommentVNode("v-if", true),
          _ctx.isAutoResize ? (_openBlock(), _createElementBlock("option", _hoisted_2, "2")) : _createCommentVNode("v-if", true),
          _cache[14] || (_cache[14] = _createElementVNode(
            "option",
            { value: "3" },
            "3",
            -1
            /* CACHED */
          )),
          _cache[15] || (_cache[15] = _createElementVNode(
            "option",
            { value: "" },
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
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _ctx.isAutoResize ? (_openBlock(), _createBlock(_component_f_select_field, {
        key: 0,
        modelValue: _ctx.maxRows,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.maxRows = $event)
      }, {
        label: _withCtx(() => [..._cache[18] || (_cache[18] = [
          _createTextVNode(
            " Max antal rader ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _cache[19] || (_cache[19] = _createElementVNode(
            "option",
            { value: "" },
            "Ingen maxh\xF6jd",
            -1
            /* CACHED */
          )),
          _cache[20] || (_cache[20] = _createElementVNode(
            "option",
            { value: "3" },
            "3",
            -1
            /* CACHED */
          )),
          _cache[21] || (_cache[21] = _createElementVNode(
            "option",
            { value: "4" },
            "4",
            -1
            /* CACHED */
          )),
          _cache[22] || (_cache[22] = _createElementVNode(
            "option",
            { value: "5" },
            "5",
            -1
            /* CACHED */
          )),
          _cache[23] || (_cache[23] = _createElementVNode(
            "option",
            { value: "6" },
            "6",
            -1
            /* CACHED */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])) : _createCommentVNode("v-if", true),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.customWarning,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.customWarning = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[24] || (_cache[24] = [
          _createTextVNode(
            " Egen varningstext ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.isDisabled,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.isDisabled = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[25] || (_cache[25] = [
          _createTextVNode(
            " Inaktiv ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_fieldset, { name: "checkbox-label" }, {
        label: _withCtx(() => [..._cache[26] || (_cache[26] = [
          _createTextVNode(
            " Etikett ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.tooltipVisible,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.tooltipVisible = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[27] || (_cache[27] = [
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
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.descriptionVisible = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[28] || (_cache[28] = [
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
  selector: "#example-43f066"
});
export {
  render
};
