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

// virtual-entry:virtual:packages/vue/src/components/FRadioField/examples/FRadioFieldLiveExample.vue:FRadioFieldLiveExample-579322.js
import { defineComponent } from "vue";
import { DateFormat, FDate } from "@fkui/date";
import { FCheckboxField, FFieldset, FRadioField, FSelectField, FTooltip } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, createElementVNode as _createElementVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var todaysDate = FDate.now().toString(DateFormat.ISO8601);
var exampleComponent = defineComponent({
  name: "FRadioFieldLiveExample",
  components: { LiveExample, FCheckboxField, FFieldset, FRadioField, FSelectField },
  data() {
    return {
      isHorizontal: false,
      isBorder: false,
      isPreselected: false,
      isDisabled: false,
      isRequired: false,
      tooltipVisible: false,
      descriptionVisible: false,
      showDetails: "never"
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
                    <f-tooltip
                        screen-reader-text="L\xE4s mer om Bor det barn som har fyllt 18 \xE5r i bostaden?"
                        header-tag="h2"
                    >
                        <template #header> Bor det barn som har fyllt 18 \xE5r i bostaden? </template>
                        <template #body>
                            H\xE4r svarar du p\xE5 om du har ett eller flera barn som fyllt 18 i din
                            bostad. Alla personer som fyllt 18 idag (${todaysDate}) eller tidigare
                            p\xE5 \xE5ret ber\xE4knas med i denna grupp.
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
                        H\xE4r svarar du p\xE5 om du har ett eller flera barn som fyllt 18 i din bostad.
                    </span>
                </template>
            `
      );
      return this.descriptionVisible ? template : "";
    },
    showDetailsAttr() {
      if (this.showDetails === "never") {
        return "";
      } else {
        return `show-details="${this.showDetails}"`;
      }
    },
    details() {
      const template = (
        /* HTML */
        `
                <template #details>
                    H\xE4r svarar du p\xE5 om du har ett eller flera barn som fyllt 18 i din bostad.
                </template>
            `
      );
      return this.showDetails !== "never" ? template : "";
    },
    radioFields() {
      return (
        /* HTML */
        `
                <f-radio-field v-model="modelValue" :value="true">
                    Ja, det bor barn \xF6ver 18 \xE5r d\xE4r ${this.details}
                </f-radio-field>
                <f-radio-field v-model="modelValue" :value="false" ${this.disabled}>
                    Nej, inga barn \xF6ver 18 \xE5r bor d\xE4r ${this.details}
                </f-radio-field>
            `
      );
    },
    horizontal() {
      return this.isHorizontal ? "horizontal" : "";
    },
    border() {
      return this.isBorder ? "border" : "";
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
                <f-fieldset
                    name="barn-over-18"
                    ${this.horizontal}
                    ${this.required}
                    ${this.border}
                    ${this.showDetailsAttr}
                >
                    <template #label> Bor det barn som har fyllt 18 \xE5r i bostaden? </template>
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
  const _component_f_select_field = _resolveComponent("f-select-field");
  const _component_live_example = _resolveComponent("live-example");
  return _openBlock(), _createBlock(_component_live_example, {
    components: _ctx.components,
    template: _ctx.template,
    livedata: _ctx.livedata
  }, {
    default: _withCtx(() => [
      _createVNode(_component_f_fieldset, { name: "radio-orientation" }, {
        label: _withCtx(() => [..._cache[9] || (_cache[9] = [
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
            default: _withCtx(() => [..._cache[10] || (_cache[10] = [
              _createTextVNode(
                " Vertikalt (standard)",
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
            default: _withCtx(() => [..._cache[11] || (_cache[11] = [
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
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.isBorder,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.isBorder = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[12] || (_cache[12] = [
          _createTextVNode(
            " Ram ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.isPreselected,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.isPreselected = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[13] || (_cache[13] = [
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
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.isDisabled = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[14] || (_cache[14] = [
          _createTextVNode(
            " Inaktiverad radioknapp ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.isRequired,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.isRequired = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[15] || (_cache[15] = [
          _createTextVNode(
            " Obligatoriskt val ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_fieldset, { name: "radio-label" }, {
        label: _withCtx(() => [..._cache[16] || (_cache[16] = [
          _createTextVNode(
            " Etiketten ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.tooltipVisible,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.tooltipVisible = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[17] || (_cache[17] = [
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
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.descriptionVisible = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[18] || (_cache[18] = [
              _createTextVNode(
                " Hj\xE4lptext ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_select_field, {
            modelValue: _ctx.showDetails,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.showDetails = $event)
          }, {
            label: _withCtx(() => [..._cache[19] || (_cache[19] = [
              _createTextVNode(
                " Ut\xF6kad etikett ",
                -1
                /* CACHED */
              )
            ])]),
            default: _withCtx(() => [
              _cache[20] || (_cache[20] = _createElementVNode(
                "option",
                { value: "never" },
                "Nej",
                -1
                /* CACHED */
              )),
              _cache[21] || (_cache[21] = _createElementVNode(
                "option",
                { value: "always" },
                "Utvidgad text",
                -1
                /* CACHED */
              )),
              _cache[22] || (_cache[22] = _createElementVNode(
                "option",
                { value: "when-selected" },
                "Expanderbar text",
                -1
                /* CACHED */
              ))
            ]),
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
  selector: "#example-579322"
});
export {
  render
};
