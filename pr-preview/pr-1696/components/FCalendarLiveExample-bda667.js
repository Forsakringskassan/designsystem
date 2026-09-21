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

// virtual-entry:virtual:packages/vue/src/components/FCalendar/examples/FCalendarLiveExample.vue:FCalendarLiveExample-bda667.js
import { defineComponent } from "vue";
import { FDate } from "@fkui/date";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { FCalendar, FCalendarDay, FCheckboxField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FCalendarLiveExample",
  components: {
    LiveExample,
    FCheckboxField
  },
  data() {
    return {
      enableYearSelector: false
    };
  },
  computed: {
    livedata() {
      return {
        month: FDate.fromIso("2022-10-01"),
        min: FDate.fromIso("2020-01-01"),
        max: FDate.fromIso("2029-01-30")
      };
    },
    components() {
      return {
        FCalendar,
        FCalendarDay
      };
    },
    template() {
      return (
        /* HTML */
        `
                <f-calendar v-model="month" :min-date="min" :max-date="max" ${this.yearSelector}>
                    <template #default="{ date, isFocused }">
                        <f-calendar-day :day="date" :focused="isFocused" />
                    </template>
                </f-calendar>
            `
      );
    },
    yearSelector() {
      return this.enableYearSelector ? "year-selector" : "";
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_live_example = _resolveComponent("live-example");
  return _openBlock(), _createBlock(_component_live_example, {
    components: _ctx.components,
    template: _ctx.template,
    livedata: _ctx.livedata
  }, {
    default: _withCtx(() => [
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.enableYearSelector,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.enableYearSelector = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[1] || (_cache[1] = [
          _createTextVNode(
            " Visa \xE5rsv\xE4ljare ",
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
  }, 8, ["components", "template", "livedata"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-bda667"
});
export {
  render
};
