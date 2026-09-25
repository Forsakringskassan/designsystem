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

// virtual-entry:virtual:packages/vue/src/components/FRadioField/examples/FRadioFieldApiExample.vue:FRadioFieldApiExample-e0018e.js
import { defineComponent as _defineComponent } from "vue";
import { computed, ref, watch } from "vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { FCheckboxField, FFieldset, FRadioField, FSelectField, FTooltip } from "@fkui/vue";
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, createElementVNode as _createElementVNode } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FRadioFieldApiExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const isHorizontal = ref(false);
    const isBorder = ref(false);
    const isPreselected = ref(false);
    const isDisabled = ref(false);
    const tooltipVisible = ref(false);
    const descriptionVisible = ref(false);
    const showDetails = ref("never");
    watch(isHorizontal, (horizontal) => {
      if (horizontal) {
        isBorder.value = false;
      }
    });
    const components = computed(() => {
      return {
        FFieldset,
        FRadioField,
        FTooltip
      };
    });
    const livedata = computed(() => {
      return {
        modelValue: isPreselected.value ? 1 : void 0
      };
    });
    const tooltip = computed(() => {
      if (!tooltipVisible.value) {
        return "";
      }
      return (
        /* HTML */
        `
        <template #tooltip>
            <f-tooltip header-tag="h3" screen-reader-text="L\xE4s mer om tooltipen">
                <template #header> Rubrik </template>
                <template #body> Text </template>
            </f-tooltip>
        </template>
    `
      );
    });
    const description = computed(() => {
      if (!descriptionVisible.value) {
        return "";
      }
      return (
        /* HTML */
        `
        <template #description="{ descriptionClass }">
            <span :class="descriptionClass"> Hj\xE4lptext </span>
        </template>
    `
      );
    });
    const detailsAttribute = computed(() => {
      if (showDetails.value === "never") {
        return "";
      }
      return `show-details="${showDetails.value}"`;
    });
    const details = computed(() => {
      if (showDetails.value === "never") {
        return "";
      }
      return (
        /* HTML */
        ` <template #details> Utvidgad text </template> `
      );
    });
    const radioFields = computed(() => {
      const disabled = isDisabled.value ? "disabled" : "";
      return (
        /* HTML */
        `
        <f-radio-field v-model="modelValue" :value="1"> Label 1 ${details.value} </f-radio-field>
        <f-radio-field v-model="modelValue" :value="2" ${disabled}>
            Label 2 ${details.value}
        </f-radio-field>
    `
      );
    });
    const template = computed(() => {
      const horizontal = isHorizontal.value ? "horizontal" : "";
      const border = isBorder.value ? "border" : "";
      return (
        /* HTML */
        `
        <f-fieldset name="radio-api-example" ${horizontal} ${border} ${detailsAttribute.value}>
            <template #label> Etikettrubrik </template>
            ${tooltip.value} ${description.value}
            <template #default> ${radioFields.value} </template>
        </f-fieldset>
    `
      );
    });
    const __returned__ = { isHorizontal, isBorder, isPreselected, isDisabled, tooltipVisible, descriptionVisible, showDetails, components, livedata, tooltip, description, detailsAttribute, details, radioFields, template, get LiveExample() {
      return LiveExample;
    }, get FCheckboxField() {
      return FCheckboxField;
    }, get FFieldset() {
      return FFieldset;
    }, get FRadioField() {
      return FRadioField;
    }, get FSelectField() {
      return FSelectField;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["LiveExample"], {
    components: $setup.components,
    template: $setup.template,
    livedata: $setup.livedata
  }, {
    default: _withCtx(() => [
      _createVNode($setup["FFieldset"], { name: "radio-orientation" }, {
        label: _withCtx(() => [..._cache[8] || (_cache[8] = [
          _createTextVNode(
            " Placering ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode($setup["FRadioField"], {
            modelValue: $setup.isHorizontal,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.isHorizontal = $event),
            value: false
          }, {
            default: _withCtx(() => [..._cache[9] || (_cache[9] = [
              _createTextVNode(
                " Vertikalt (standard) ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode($setup["FRadioField"], {
            modelValue: $setup.isHorizontal,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.isHorizontal = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[10] || (_cache[10] = [
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
      _createVNode($setup["FFieldset"], { name: "radio-properties" }, {
        label: _withCtx(() => [..._cache[11] || (_cache[11] = [
          _createTextVNode(
            " Egenskaper ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          !$setup.isHorizontal ? (_openBlock(), _createBlock($setup["FCheckboxField"], {
            key: 0,
            modelValue: $setup.isBorder,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.isBorder = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[12] || (_cache[12] = [
              _createTextVNode(
                " Inramade alternativ ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])) : _createCommentVNode("v-if", true),
          _createVNode($setup["FCheckboxField"], {
            modelValue: $setup.isPreselected,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.isPreselected = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[13] || (_cache[13] = [
              _createTextVNode(
                " F\xF6rvalt alternativ ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode($setup["FCheckboxField"], {
            modelValue: $setup.isDisabled,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.isDisabled = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[14] || (_cache[14] = [
              _createTextVNode(
                " Inaktiverat alternativ ",
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
      _createVNode($setup["FFieldset"], { name: "radio-content" }, {
        label: _withCtx(() => [..._cache[15] || (_cache[15] = [
          _createTextVNode(
            " Inneh\xE5ll ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode($setup["FCheckboxField"], {
            modelValue: $setup.tooltipVisible,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.tooltipVisible = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[16] || (_cache[16] = [
              _createTextVNode(
                " Tooltip ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode($setup["FCheckboxField"], {
            modelValue: $setup.descriptionVisible,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.descriptionVisible = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[17] || (_cache[17] = [
              _createTextVNode(
                " Hj\xE4lptext ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode($setup["FSelectField"], {
            modelValue: $setup.showDetails,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.showDetails = $event)
          }, {
            label: _withCtx(() => [..._cache[18] || (_cache[18] = [
              _createTextVNode(
                " Utvidgad text ",
                -1
                /* CACHED */
              )
            ])]),
            default: _withCtx(() => [
              _cache[19] || (_cache[19] = _createElementVNode(
                "option",
                { value: "never" },
                "Ingen",
                -1
                /* CACHED */
              )),
              _cache[20] || (_cache[20] = _createElementVNode(
                "option",
                { value: "always" },
                "Alltid synlig",
                -1
                /* CACHED */
              )),
              _cache[21] || (_cache[21] = _createElementVNode(
                "option",
                { value: "when-selected" },
                "N\xE4r alternativet \xE4r valt",
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
  selector: "#example-e0018e"
});
export {
  render
};
