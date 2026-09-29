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

// virtual-entry:virtual:packages/vue/src/components/FCalendar/examples/FCalendarSelectDays.vue:FCalendarSelectDays-4539bb.js
import { defineComponent as _defineComponent } from "vue";
import { ref, shallowRef } from "vue";
import { FDate } from "@fkui/date";
import { FCalendar, FCalendarDay, FMessageBox } from "@fkui/vue";
import { normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, withCtx as _withCtx, createVNode as _createVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FCalendarSelectDays",
  setup(__props, { expose: __expose }) {
    __expose();
    const month = shallowRef(FDate.fromIso("2022-10-01"));
    const min = shallowRef(FDate.fromIso("2020-10-01"));
    const max = shallowRef(FDate.fromIso("2029-12-31"));
    const selecting = ref([]);
    const selected = ref([]);
    function onSelecting(days) {
      selecting.value = days;
    }
    function onSelect(days) {
      selecting.value = [];
      const add = days.filter((day) => !selected.value.includes(day));
      const remove = add.length > 0 ? [] : days;
      selected.value = selected.value.filter((day) => !remove.includes(day)).concat(add);
    }
    function isSelecting(date) {
      return selecting.value.includes(date.toString());
    }
    function isSelected(date) {
      return selected.value.includes(date.toString());
    }
    const __returned__ = { month, min, max, selecting, selected, onSelecting, onSelect, isSelecting, isSelected, get FCalendar() {
      return FCalendar;
    }, get FCalendarDay() {
      return FCalendarDay;
    }, get FMessageBox() {
      return FMessageBox;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = { "data-test": "days-array" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("div", null, [
    _createVNode($setup["FMessageBox"], { type: "info" }, {
      default: _withCtx(({ headingSlotClass }) => [
        _createElementVNode(
          "h2",
          {
            class: _normalizeClass(headingSlotClass)
          },
          "Exemplet \xE4r p\xE5g\xE5ende poc av flerval",
          2
          /* CLASS */
        ),
        _cache[1] || (_cache[1] = _createElementVNode(
          "p",
          null,
          " Det \xE4r inte testat i n\xE5gon st\xF6rre utstr\xE4ckning, men \xE4r t\xE4nkt att kunna anv\xE4ndas p\xE5 n\xE5gra olika s\xE4tt: ",
          -1
          /* CACHED */
        )),
        _cache[2] || (_cache[2] = _createElementVNode(
          "ul",
          null,
          [
            _createElementVNode("li", null, " Dra med musen fr\xE5n en dag till en annan. Samtliga dagar blir markerade som ing\xE5r i omr\xE5det (med undantag om alla dagar redan \xE4r markerade, d\xE5 blir de avmarkerade) "),
            _createElementVNode("li", null, " Klicka p\xE5 en dag, den blir vald. Klicka p\xE5 en annan dag samtidigt som du trycker ned SHIFT-knappen. Dagar d\xE4remellan blir markerade. "),
            _createElementVNode("li", null, " Tabba in till en kalenderdag. H\xE5ll inne SHIFT-knappen och f\xF6rflytta dig med piltangenterna i kalendern. Sl\xE4pp SHIFT-knappen p\xE5 \xF6nskad dag. Dagar d\xE4remellan blir markerade. ")
          ],
          -1
          /* CACHED */
        ))
      ]),
      _: 1
      /* STABLE */
    }),
    _createVNode($setup["FCalendar"], {
      modelValue: $setup.month,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.month = $event),
      "min-date": $setup.min,
      "max-date": $setup.max,
      onSelecting: $setup.onSelecting,
      onSelect: $setup.onSelect
    }, {
      default: _withCtx(({ date, isFocused }) => [
        _createVNode($setup["FCalendarDay"], {
          "data-test": "multiple-days",
          day: date,
          focused: isFocused,
          selecting: $setup.isSelecting(date),
          selected: $setup.isSelected(date)
        }, null, 8, ["day", "focused", "selecting", "selected"])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "min-date", "max-date"]),
    _createElementVNode(
      "span",
      _hoisted_1,
      "Valda dagar: " + _toDisplayString($setup.selected),
      1
      /* TEXT */
    )
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-4539bb"
});
export {
  render
};
