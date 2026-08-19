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

// virtual-entry:virtual:packages/vue/src/components/FCheckboxField/examples/FCheckboxFieldLiveExample.vue:FCheckboxFieldLiveExample-e60a86.js
import { defineComponent } from "vue";
import { FFieldset, FCheckboxField, FTooltip, FSelectField } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, createElementVNode as _createElementVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FCheckboxFieldLiveExample",
  components: { LiveExample, FFieldset, FCheckboxField, FSelectField },
  data() {
    return {
      tooltipVisible: false,
      descriptionVisible: false,
      isDisabled: false,
      isRequired: false,
      isBorder: false,
      showDetails: "never"
    };
  },
  computed: {
    components() {
      return {
        FFieldset,
        FCheckboxField,
        FTooltip
      };
    },
    livedata() {
      return {
        brochures: []
      };
    },
    tooltip() {
      const template = (
        /* HTML */
        `
                <template #tooltip>
                    <f-tooltip screen-reader-text="L\xE4s mer om Broschyrer" header-tag="h2">
                        <template #header> Broschyrer </template>
                        <template #body>
                            H\xE4r v\xE4ljer du om du vill ha broschyrer eller faktablad och vilka omr\xE5den
                            du \xE4r intresserad av. Broschyrer inneh\xE5ller \xF6vergripande information och
                            faktablad inneh\xE5ller mer detaljerad information.
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
                        H\xE4r v\xE4ljer du om du vill ha broschyrer eller faktablad
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
    checkboxes() {
      return (
        /* HTML */
        `
                <f-checkbox-field
                    v-model="brochures"
                    value="Till alla som v\xE4ntar eller just f\xE5tt barn"
                >
                    Till alla som v\xE4ntar eller just f\xE5tt barn ${this.details}
                </f-checkbox-field>

                <f-checkbox-field v-model="brochures" value="Till alla barnfamiljer">
                    Till alla barnfamiljer ${this.details}
                </f-checkbox-field>

                <f-checkbox-field
                    v-model="brochures"
                    value="R\xE4tt beslut och r\xE4tt ers\xE4ttning"
                    ${this.disabled}
                >
                    R\xE4tt beslut och r\xE4tt ers\xE4ttning ${this.details}
                </f-checkbox-field>
            `
      );
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
                    id="broschyrer-tooltip"
                    name="broschyrer-tooltip"
                    ${this.required}
                    ${this.border}
                    ${this.showDetailsAttr}
                >
                    <template #label> Broschyrer </template>
                    ${this.tooltip} ${this.description}
                    <template #default> ${this.checkboxes} </template>
                </f-fieldset>
            `
      );
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_f_select_field = _resolveComponent("f-select-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  const _component_live_example = _resolveComponent("live-example");
  return _openBlock(), _createBlock(_component_live_example, {
    components: _ctx.components,
    template: _ctx.template,
    livedata: _ctx.livedata
  }, {
    default: _withCtx(() => [
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.isDisabled,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.isDisabled = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[6] || (_cache[6] = [
          _createTextVNode(" Inaktiverad ")
        ])),
        _: 1,
        __: [6]
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.isRequired,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.isRequired = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[7] || (_cache[7] = [
          _createTextVNode(" Obligatorisk ")
        ])),
        _: 1,
        __: [7]
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.isBorder,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.isBorder = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[8] || (_cache[8] = [
          _createTextVNode(" Ram ")
        ])),
        _: 1,
        __: [8]
      }, 8, ["modelValue"]),
      _createVNode(_component_f_fieldset, { name: "checkbox-label" }, {
        label: _withCtx(() => _cache[9] || (_cache[9] = [
          _createTextVNode(" Etiketten ")
        ])),
        default: _withCtx(() => [
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.tooltipVisible,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.tooltipVisible = $event),
            value: true
          }, {
            default: _withCtx(() => _cache[10] || (_cache[10] = [
              _createTextVNode(" Tooltip ")
            ])),
            _: 1,
            __: [10]
          }, 8, ["modelValue"]),
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.descriptionVisible,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.descriptionVisible = $event),
            value: true
          }, {
            default: _withCtx(() => _cache[11] || (_cache[11] = [
              _createTextVNode(" Hj\xE4lptext ")
            ])),
            _: 1,
            __: [11]
          }, 8, ["modelValue"]),
          _createVNode(_component_f_select_field, {
            modelValue: _ctx.showDetails,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.showDetails = $event)
          }, {
            label: _withCtx(() => _cache[12] || (_cache[12] = [
              _createTextVNode(" Ut\xF6kad etikett ")
            ])),
            default: _withCtx(() => [
              _cache[13] || (_cache[13] = _createElementVNode(
                "option",
                { value: "never" },
                "Nej",
                -1
                /* HOISTED */
              )),
              _cache[14] || (_cache[14] = _createElementVNode(
                "option",
                { value: "always" },
                "Utvidgad text",
                -1
                /* HOISTED */
              )),
              _cache[15] || (_cache[15] = _createElementVNode(
                "option",
                { value: "when-selected" },
                "Expanderbar text",
                -1
                /* HOISTED */
              ))
            ]),
            _: 1,
            __: [13, 14, 15]
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
  selector: "#example-e60a86"
});
export {
  render
};
