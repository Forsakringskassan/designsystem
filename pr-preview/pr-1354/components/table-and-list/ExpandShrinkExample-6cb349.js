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

// virtual-entry:virtual:docs/components/table-and-list/examples/ExpandShrinkExample.vue:ExpandShrinkExample-6cb349.js
import { defineComponent as _defineComponent } from "vue";
import { computed, ref } from "vue";
import { FDataTable, FSelectField, FTableColumn } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "ExpandShrinkExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const a = ref("");
    const b = ref("");
    const c = ref("shrink");
    const rows = [{ a: "lorem ipsum", b: "dolor sit amet", c: 4711 }];
    const components = { FDataTable, FTableColumn };
    const livedata = { rows };
    const template = computed(() => {
      return (
        /* HTML */
        `
        <f-data-table :rows>
            <template #default="{ row }">
                <f-table-column
                    title="Kolumn A"
                    type="text"
                    v-format:text="row.a"
                    ${a.value}
                ></f-table-column>
                <f-table-column
                    title="Kolumn B"
                    type="text"
                    v-format:text="row.b"
                    ${b.value}
                ></f-table-column>
                <f-table-column
                    title="Kolumn C"
                    type="numeric"
                    v-format:number="row.c"
                    ${c.value}
                ></f-table-column>
            </template>
        </f-data-table>
    `
      );
    });
    const __returned__ = { a, b, c, rows, components, livedata, template, get FSelectField() {
      return FSelectField;
    }, get LiveExample() {
      return LiveExample;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["LiveExample"], {
    template: $setup.template,
    components: $setup.components,
    livedata: $setup.livedata
  }, {
    default: _withCtx(() => [
      _createVNode($setup["FSelectField"], {
        modelValue: $setup.a,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.a = $event)
      }, {
        label: _withCtx(() => [..._cache[3] || (_cache[3] = [
          _createTextVNode(
            " Kolumn A ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [..._cache[4] || (_cache[4] = [
          _createElementVNode(
            "option",
            { value: "" },
            "Standard",
            -1
            /* CACHED */
          ),
          _createElementVNode(
            "option",
            { value: "expand" },
            "Expand",
            -1
            /* CACHED */
          ),
          _createElementVNode(
            "option",
            { value: "shrink" },
            "Shrink",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode($setup["FSelectField"], {
        modelValue: $setup.b,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.b = $event)
      }, {
        label: _withCtx(() => [..._cache[5] || (_cache[5] = [
          _createTextVNode(
            " Kolumn B ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [..._cache[6] || (_cache[6] = [
          _createElementVNode(
            "option",
            { value: "" },
            "Standard",
            -1
            /* CACHED */
          ),
          _createElementVNode(
            "option",
            { value: "expand" },
            "Expand",
            -1
            /* CACHED */
          ),
          _createElementVNode(
            "option",
            { value: "shrink" },
            "Shrink",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode($setup["FSelectField"], {
        modelValue: $setup.c,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.c = $event)
      }, {
        label: _withCtx(() => [..._cache[7] || (_cache[7] = [
          _createTextVNode(
            " Kolumn C ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [..._cache[8] || (_cache[8] = [
          _createElementVNode(
            "option",
            { value: "" },
            "Standard",
            -1
            /* CACHED */
          ),
          _createElementVNode(
            "option",
            { value: "expand" },
            "Expand",
            -1
            /* CACHED */
          ),
          _createElementVNode(
            "option",
            { value: "shrink" },
            "Shrink",
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
  }, 8, ["template"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-6cb349"
});
export {
  render
};
