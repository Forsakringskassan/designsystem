// docs/src/setup.ts
import { createApp, h } from "vue";
import {
  ErrorPlugin,
  FErrorHandlingApp,
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
  app.use(ErrorPlugin);
  app.use(ValidationPlugin);
  app.use(TestPlugin);
  app.use(TranslationPlugin);
  app.mount(selector);
  setRunningContext(app);
}

// virtual-entry:virtual:src/components/FTable/examples/FTableColumnLiveExample.vue:FTableColumnLiveExample-8b66f5.js
import { defineComponent } from "vue";
import { FDate } from "@fkui/date";
import {
  FCheckboxField,
  FFieldset,
  FRadioField,
  FSelectField,
  getHTMLElementFromVueRef
} from "@fkui/vue";
import {
  FTable,
  defineTableColumns as defineTableColumnsFunc
} from "@fkui/vue-labs";
import { LiveExample } from "@forsakringskassan/docs-live-example";

// src/components/FTable/table-column.ts
import { ref as ref3, toRef } from "vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableAnchor.vue?type=script
import { defineComponent as _defineComponent } from "vue";
import { computed, useTemplateRef } from "vue";
var ITableAnchor_default = /* @__PURE__ */ _defineComponent({
  __name: "ITableAnchor",
  props: {
    column: { type: Object, required: true },
    row: { type: null, required: true }
  },
  setup(__props, { expose: __expose }) {
    const targetElement = useTemplateRef("target");
    const renderAnchor = computed(() => {
      return __props.column.enabled(__props.row) && __props.column.value(__props.row) !== null;
    });
    const expose = { tabstopEl: targetElement };
    __expose(expose);
    const __returned__ = { targetElement, renderAnchor, expose };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableAnchor.vue?type=template
import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var _hoisted_1 = {
  key: 0,
  class: "table-ng__cell table-ng__cell--anchor"
};
var _hoisted_2 = ["href"];
var _hoisted_3 = {
  key: 1,
  ref: "target",
  tabindex: "-1",
  class: "table-ng__cell"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.renderAnchor ? (_openBlock(), _createElementBlock("td", _hoisted_1, [
    _createElementVNode("a", {
      ref: "target",
      class: "anchor anchor--block",
      target: "_blank",
      href: $props.column.href,
      tabindex: "-1"
    }, _toDisplayString($props.column.value($props.row)), 9, _hoisted_2)
  ])) : (_openBlock(), _createElementBlock(
    "td",
    _hoisted_3,
    null,
    512
    /* NEED_PATCH */
  ));
}

// src/components/FTable/ITableAnchor.vue
ITableAnchor_default.render = render;
ITableAnchor_default.__file = "src/components/FTable/ITableAnchor.vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableButton.vue?type=script
import { defineComponent as _defineComponent2 } from "vue";
import { computed as computed2, useTemplateRef as useTemplateRef2 } from "vue";
import { assertRef } from "@fkui/logic";
import { FIcon } from "@fkui/vue";
var ITableButton_default = /* @__PURE__ */ _defineComponent2({
  __name: "ITableButton",
  props: {
    column: { type: Object, required: true },
    row: { type: null, required: true }
  },
  setup(__props, { expose: __expose }) {
    const buttonElement = useTemplateRef2("button");
    const tdElement = useTemplateRef2("td");
    function onClickButton() {
      assertRef(buttonElement);
      buttonElement.value.tabIndex = 0;
      if (__props.column.onClick) {
        __props.column.onClick(__props.row);
      }
    }
    const renderButton = computed2(() => {
      return __props.column.enabled(__props.row) && __props.column.value(__props.row) !== null;
    });
    const expose = { tabstopEl: renderButton.value ? buttonElement : tdElement };
    __expose(expose);
    const __returned__ = { buttonElement, tdElement, onClickButton, renderButton, expose, get FIcon() {
      return FIcon;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableButton.vue?type=template
import { openBlock as _openBlock2, createBlock as _createBlock, createCommentVNode as _createCommentVNode2, toDisplayString as _toDisplayString2, createElementVNode as _createElementVNode2, createElementBlock as _createElementBlock2 } from "vue";
var _hoisted_12 = {
  key: 0,
  class: "table-ng__cell table-ng__cell--button"
};
var _hoisted_22 = { class: "sr-only" };
var _hoisted_32 = {
  key: 1,
  ref: "td",
  tabindex: "-1",
  class: "table-ng__cell"
};
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.renderButton ? (_openBlock2(), _createElementBlock2("td", _hoisted_12, [
    _createElementVNode2(
      "button",
      {
        ref: "button",
        class: "icon-button",
        type: "button",
        tabindex: "-1",
        onClick: $setup.onClickButton
      },
      [
        $props.column.icon ? (_openBlock2(), _createBlock($setup["FIcon"], {
          key: 0,
          name: $props.column.icon
        }, null, 8, ["name"])) : _createCommentVNode2("v-if", true),
        _createElementVNode2(
          "span",
          _hoisted_22,
          _toDisplayString2($props.column.value($props.row)),
          1
          /* TEXT */
        )
      ],
      512
      /* NEED_PATCH */
    )
  ])) : (_openBlock2(), _createElementBlock2(
    "td",
    _hoisted_32,
    null,
    512
    /* NEED_PATCH */
  ));
}

// src/components/FTable/ITableButton.vue
ITableButton_default.render = render2;
ITableButton_default.__file = "src/components/FTable/ITableButton.vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableCheckbox.vue?type=script
import { defineComponent as _defineComponent3 } from "vue";
import { computed as computed3, useTemplateRef as useTemplateRef3 } from "vue";
var ITableCheckbox_default = /* @__PURE__ */ _defineComponent3({
  __name: "ITableCheckbox",
  props: {
    column: { type: Object, required: true },
    row: { type: null, required: true }
  },
  setup(__props, { expose: __expose }) {
    const targetElement = useTemplateRef3("target");
    const ariaLabel = computed3(() => {
      const value = __props.column.label(__props.row);
      return value.length > 0 ? value : void 0;
    });
    function onChange(e) {
      const checked = e.target.checked;
      __props.column.update(__props.row, checked, !checked);
    }
    const expose = { tabstopEl: targetElement };
    __expose(expose);
    const __returned__ = { targetElement, ariaLabel, onChange, expose };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableCheckbox.vue?type=template
import { createElementVNode as _createElementVNode3, openBlock as _openBlock3, createElementBlock as _createElementBlock3 } from "vue";
var _hoisted_13 = {
  key: 0,
  class: "table-ng__cell table-ng__cell--checkbox"
};
var _hoisted_23 = ["checked", "aria-label"];
var _hoisted_33 = {
  key: 1,
  ref: "target",
  tabindex: "-1",
  class: "table-ng__cell table-ng__cell--checkbox"
};
var _hoisted_4 = ["checked", "aria-label"];
function render3(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.column.editable($props.row) ? (_openBlock3(), _createElementBlock3("td", _hoisted_13, [
    _createElementVNode3("input", {
      ref: "target",
      checked: $props.column.value($props.row),
      type: "checkbox",
      "aria-label": $setup.ariaLabel,
      tabindex: "-1",
      onChange: $setup.onChange
    }, null, 40, _hoisted_23)
  ])) : (_openBlock3(), _createElementBlock3(
    "td",
    _hoisted_33,
    [
      _createElementVNode3("input", {
        checked: $props.column.value($props.row),
        type: "checkbox",
        "aria-label": $setup.ariaLabel
      }, null, 8, _hoisted_4)
    ],
    512
    /* NEED_PATCH */
  ));
}

// src/components/FTable/ITableCheckbox.vue
ITableCheckbox_default.render = render3;
ITableCheckbox_default.__file = "src/components/FTable/ITableCheckbox.vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableRadio.vue?type=script
import { defineComponent as _defineComponent4 } from "vue";
import { computed as computed4, useTemplateRef as useTemplateRef4 } from "vue";
import { assertRef as assertRef2 } from "@fkui/logic";
var ITableRadio_default = /* @__PURE__ */ _defineComponent4({
  __name: "ITableRadio",
  props: {
    column: { type: Object, required: true },
    row: { type: null, required: true }
  },
  setup(__props, { expose: __expose }) {
    const inputElement = useTemplateRef4("input");
    const ariaLabel = computed4(() => {
      const value = __props.column.label(__props.row);
      return value.length > 0 ? value : void 0;
    });
    function onChange(_e) {
      assertRef2(inputElement);
      __props.column.update(__props.row, inputElement.value.checked, !inputElement.value.checked);
    }
    const expose = { tabstopEl: inputElement };
    __expose(expose);
    const __returned__ = { inputElement, ariaLabel, onChange, expose };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableRadio.vue?type=template
import { createElementVNode as _createElementVNode4, openBlock as _openBlock4, createElementBlock as _createElementBlock4 } from "vue";
var _hoisted_14 = { class: "table-ng__cell table-ng__cell--radio" };
var _hoisted_24 = ["checked", "aria-label"];
function render4(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock4(), _createElementBlock4("td", _hoisted_14, [
    _createElementVNode4("input", {
      ref: "input",
      type: "radio",
      checked: $props.column.value($props.row),
      "aria-label": $setup.ariaLabel,
      tabindex: "-1",
      onChange: $setup.onChange
    }, null, 40, _hoisted_24)
  ]);
}

// src/components/FTable/ITableRadio.vue
ITableRadio_default.render = render4;
ITableRadio_default.__file = "src/components/FTable/ITableRadio.vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableRowheader.vue?type=script
import { defineComponent as _defineComponent5 } from "vue";
var ITableRowheader_default = /* @__PURE__ */ _defineComponent5({
  __name: "ITableRowheader",
  props: {
    row: { type: null, required: true },
    column: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableRowheader.vue?type=template
import { toDisplayString as _toDisplayString3, openBlock as _openBlock5, createElementBlock as _createElementBlock5 } from "vue";
function render5(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock5(), _createElementBlock5(
    "th",
    {
      ref: "th",
      class: "table-ng__cell table-ng__cell--rowheader",
      scope: "row"
    },
    _toDisplayString3($props.column.value($props.row)),
    513
    /* TEXT, NEED_PATCH */
  );
}

// src/components/FTable/ITableRowheader.vue
ITableRowheader_default.render = render5;
ITableRowheader_default.__file = "src/components/FTable/ITableRowheader.vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableSelect.vue?type=script
import { defineComponent as _defineComponent6 } from "vue";
import { computed as computed5, nextTick, ref, useTemplateRef as useTemplateRef5, watchEffect } from "vue";
import { ElementIdService, assertRef as assertRef3, assertSet } from "@fkui/logic";
import { FIcon as FIcon2, IComboboxDropdown } from "@fkui/vue";

// src/components/FTable/start-stop-edit.ts
import { inject } from "vue";
var stopEditKey = /* @__PURE__ */ Symbol();
function useStartStopEdit() {
  const stopEdit = inject(stopEditKey, () => Promise.resolve());
  return { stopEdit };
}

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableSelect.vue?type=script
var ITableSelect_default = /* @__PURE__ */ _defineComponent6({
  __name: "ITableSelect",
  props: {
    row: { type: null, required: true },
    column: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const editing = ref(false);
    const editRef = useTemplateRef5("edit");
    const { stopEdit } = useStartStopEdit();
    const viewValue = ref(__props.column.value(__props.row));
    const ariaLabel = computed5(() => {
      const value = __props.column.label(__props.row);
      return value.length > 0 ? value : void 0;
    });
    async function onCellKeyDown(e) {
      if (e.code === "Enter" || e.code === "NumpadEnter") {
        startEditing(e);
      }
    }
    async function onCellClick(e) {
      if (editing.value) {
        return;
      }
      startEditing(e);
    }
    async function startEditing(e) {
      assertRef3(editRef);
      e.preventDefault();
      editing.value = true;
      await nextTick();
      editRef.value.tabIndex = 0;
      editRef.value.focus();
      openSelected("first");
    }
    async function onDropdownSelect(value) {
      assertRef3(editRef);
      assertSet(stopEdit);
      close();
      submit();
      viewValue.value = value;
      stopEdit(editRef.value, "enter");
    }
    function onDropdownClose() {
      assertRef3(editRef);
      assertSet(stopEdit);
      stopEdit(editRef.value, "escape");
    }
    const dropdownId = ElementIdService.generateElementId();
    const dropdownIsOpen = ref(false);
    const activeOptionId = ElementIdService.generateElementId();
    const activeOption = ref(null);
    watchEffect(async () => {
      if (!editRef.value) {
        return;
      }
      if (activeOption.value) {
        editRef.value.setAttribute("aria-activedescendant", activeOptionId);
      } else {
        editRef.value.removeAttribute("aria-activedescendant");
      }
    });
    async function openSelected(fallback = null) {
      dropdownIsOpen.value = true;
      await nextTick();
      if (viewValue.value) {
        activeOption.value = viewValue.value;
      } else if (fallback === "first") {
        activeOption.value = __props.column.options[0];
      } else if (fallback === "last") {
        activeOption.value = __props.column.options[__props.column.options.length - 1];
      } else {
        activeOption.value = null;
      }
      editRef.value?.focus();
    }
    function close() {
      dropdownIsOpen.value = false;
      activeOption.value = null;
    }
    function setNextOption() {
      if (activeOption.value) {
        const index = __props.column.options.indexOf(activeOption.value);
        if (index === __props.column.options.length - 1) {
          activeOption.value = __props.column.options[0];
        } else {
          activeOption.value = __props.column.options[index + 1];
        }
      } else {
        activeOption.value = __props.column.options[0];
      }
    }
    function setPreviousOption() {
      if (activeOption.value) {
        const index = __props.column.options.indexOf(activeOption.value);
        if (index === 0) {
          activeOption.value = __props.column.options[__props.column.options.length - 1];
        } else {
          activeOption.value = __props.column.options[index - 1];
        }
      } else {
        activeOption.value = __props.column.options[__props.column.options.length - 1];
      }
    }
    async function onEditKeyDown(e) {
      assertRef3(editRef);
      assertSet(stopEdit);
      switch (e.code) {
        case "Escape":
          e.preventDefault();
          cancel();
          stopEdit(editRef.value, "escape");
          break;
        case "Enter":
        case "NumpadEnter":
          e.preventDefault();
          submit();
          if (activeOption.value) {
            viewValue.value = activeOption.value;
          }
          close();
          stopEdit(editRef.value, "enter");
          break;
        case "Tab":
          e.preventDefault();
          cancel();
          stopEdit(editRef.value, e.shiftKey ? "shift-tab" : "tab");
          break;
        case "ArrowDown":
          e.preventDefault();
          if (dropdownIsOpen.value) {
            setNextOption();
          } else {
            openSelected("first");
          }
          break;
        case "ArrowUp":
          e.preventDefault();
          if (dropdownIsOpen.value) {
            setPreviousOption();
          } else {
            openSelected("last");
          }
          break;
        default:
          break;
      }
    }
    async function onEditBlur() {
      if (editing.value) {
        assertSet(stopEdit);
        assertRef3(editRef);
        dropdownIsOpen.value = false;
        editing.value = false;
        await nextTick();
        stopEdit(editRef.value, "blur");
      }
    }
    async function submit() {
      editing.value = false;
      await nextTick();
    }
    function cancel() {
      assertSet(stopEdit);
      assertRef3(editRef);
      stopEdit(editRef.value, "escape");
    }
    const __returned__ = { editing, editRef, stopEdit, viewValue, ariaLabel, onCellKeyDown, onCellClick, startEditing, onDropdownSelect, onDropdownClose, dropdownId, dropdownIsOpen, activeOptionId, activeOption, openSelected, close, setNextOption, setPreviousOption, onEditKeyDown, onEditBlur, submit, cancel, get FIcon() {
      return FIcon2;
    }, get IComboboxDropdown() {
      return IComboboxDropdown;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableSelect.vue?type=template
import { toDisplayString as _toDisplayString4, createElementVNode as _createElementVNode5, createVNode as _createVNode, vShow as _vShow, withDirectives as _withDirectives, withModifiers as _withModifiers, openBlock as _openBlock6, createElementBlock as _createElementBlock6 } from "vue";
var _hoisted_15 = { class: "table-ng__editable" };
var _hoisted_25 = { class: "table-ng__editable__text" };
var _hoisted_34 = ["aria-controls", "aria-label"];
var _hoisted_42 = {
  key: 1,
  tabindex: "-1",
  class: "table-ng__cell table-ng__cell--static"
};
function render6(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.column.editable($props.row) ? (_openBlock6(), _createElementBlock6(
    "td",
    {
      key: 0,
      class: "table-ng__cell table-ng__cell--selectable",
      tabindex: "-1",
      onKeydown: $setup.onCellKeyDown,
      onClick: _withModifiers($setup.onCellClick, ["stop"])
    },
    [
      _withDirectives(_createElementVNode5(
        "div",
        _hoisted_15,
        [
          _createElementVNode5(
            "span",
            _hoisted_25,
            _toDisplayString4($setup.viewValue),
            1
            /* TEXT */
          ),
          _createVNode($setup["FIcon"], {
            name: "pen",
            class: "table-ng__editable__icon"
          })
        ],
        512
        /* NEED_PATCH */
      ), [
        [_vShow, !$setup.editing]
      ]),
      _withDirectives(_createElementVNode5("div", {
        ref: "edit",
        role: "combobox",
        tabindex: "-1",
        "aria-expanded": "",
        "aria-controls": $setup.dropdownId,
        "aria-autocomplete": "list",
        class: "table-ng__editable",
        "aria-label": $setup.ariaLabel,
        onClick: _cache[0] || (_cache[0] = _withModifiers(() => {
        }, ["stop"])),
        onDblclick: _cache[1] || (_cache[1] = _withModifiers(() => {
        }, ["prevent"])),
        onKeydown: _withModifiers($setup.onEditKeyDown, ["stop"]),
        onFocusout: $setup.onEditBlur
      }, _toDisplayString4($setup.viewValue), 41, _hoisted_34), [
        [_vShow, $setup.editing]
      ]),
      _withDirectives(_createVNode($setup["IComboboxDropdown"], {
        id: "dropdownId",
        "is-open": $setup.dropdownIsOpen,
        options: $props.column.options,
        "active-option": $setup.activeOption,
        "active-option-id": $setup.activeOptionId,
        "input-node": $setup.editRef,
        onSelect: $setup.onDropdownSelect,
        onClose: $setup.onDropdownClose
      }, null, 8, ["is-open", "options", "active-option", "active-option-id", "input-node"]), [
        [_vShow, $setup.editing]
      ])
    ],
    32
    /* NEED_HYDRATION */
  )) : (_openBlock6(), _createElementBlock6(
    "td",
    _hoisted_42,
    _toDisplayString4($props.column.value($props.row)),
    1
    /* TEXT */
  ));
}

// src/components/FTable/ITableSelect.vue
ITableSelect_default.render = render6;
ITableSelect_default.__file = "src/components/FTable/ITableSelect.vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableText.vue?type=script
import { defineComponent as _defineComponent7 } from "vue";
import { computed as computed6, onMounted, ref as ref2, useTemplateRef as useTemplateRef6 } from "vue";
import { ValidationService as ValidationService2, assertRef as assertRef4 } from "@fkui/logic";
import { FIcon as FIcon3 } from "@fkui/vue";

// src/components/FTable/input-validators.ts
import { ValidationService } from "@fkui/logic";

// src/components/FTable/input-fields-config.ts
import {
  formatNumber,
  formatPersonnummer,
  formatPostalCode,
  parseBankAccountNumber,
  parseBankgiro,
  parseClearingNumber,
  parseDate,
  parseNumber,
  parseOrganisationsnummer,
  parsePersonnummer,
  parsePlusgiro
} from "@fkui/logic";
var inputFieldConfig = {
  "text:personnummer": {
    formatter(value) {
      return formatPersonnummer(parsePersonnummer(value));
    },
    parser(value) {
      return parsePersonnummer(value);
    },
    validationConfig: {
      maxLength: { length: 20 },
      personnummerFormat: {},
      personnummerLuhn: {}
    },
    attributes: () => [
      { name: "inputmode", value: "numeric" },
      { name: "maxlength", value: "23" }
    ]
  },
  "text:bankAccountNumber": {
    formatter(value) {
      return value;
    },
    parser(value) {
      return parseBankAccountNumber(value);
    },
    validationConfig: {
      bankAccountNumber: {}
    },
    attributes: () => [
      { name: "inputmode", value: "numeric" },
      { name: "maxlength", value: "40" }
    ]
  },
  "text:bankgiro": {
    formatter(value) {
      return parseBankgiro(value);
    },
    parser(value) {
      return parseBankgiro(value);
    },
    validationConfig: {
      maxLength: { length: 9 },
      bankgiro: {}
    },
    attributes: () => [
      { name: "inputmode", value: "numeric" },
      { name: "maxlength", value: "40" }
    ]
  },
  "text:clearingNumber": {
    formatter(value) {
      return parseClearingNumber(value.trim());
    },
    parser(value) {
      return parseClearingNumber(value.trim());
    },
    validationConfig: {
      clearingNumber: {}
    },
    attributes: () => [
      { name: "inputmode", value: "numeric" },
      { name: "maxlength", value: "16" }
    ]
  },
  "text:currency": {
    formatter(value) {
      return formatNumber(value);
    },
    parser(value) {
      return parseNumber(value);
    },
    validationConfig: {
      currency: {},
      integer: {}
    },
    attributes: () => [
      { name: "inputmode", value: "numeric" },
      { name: "maxlength", value: "20" }
    ]
  },
  "text:date": {
    formatter(value) {
      return parseDate(value);
    },
    parser(value) {
      return parseDate(value);
    },
    validationConfig: {
      date: {}
    },
    attributes: () => [{ name: "type", value: "text" }]
  },
  "text:email": {
    formatter(value) {
      return value;
    },
    parser(value) {
      return value;
    },
    validationConfig: {
      email: {},
      maxLength: { length: 80 }
    },
    attributes: () => [
      { name: "type", value: "email" },
      { name: "maxlength", value: "80" }
    ]
  },
  "text:number": {
    formatter(value) {
      return formatNumber(value, this.decimals ?? 2);
    },
    parser(value) {
      return parseNumber(value, this.decimals ?? 2);
    },
    validationConfig: {
      number: {}
    },
    attributes: () => [
      { name: "inputmode", value: "numeric" },
      { name: "maxlength", value: "20" }
    ]
  },
  "text:organisationsnummer": {
    formatter(value) {
      return parseOrganisationsnummer(value);
    },
    parser(value) {
      return parseOrganisationsnummer(value);
    },
    validationConfig: {
      maxLength: { length: 11 },
      organisationsnummer: {}
    },
    attributes: () => [
      { name: "inputmode", value: "numeric" },
      { name: "maxlength", value: "20" }
    ]
  },
  "text:percent": {
    formatter(value) {
      return formatNumber(value, this.decimals ?? 2);
    },
    parser(value) {
      return parseNumber(value, this.decimals ?? 2);
    },
    validationConfig: {
      percent: {},
      minValue: { minValue: 0 },
      maxValue: { maxValue: 999 }
    },
    attributes: (decimals) => {
      return [
        {
          name: "inputmode",
          value: decimals ? "decimal" : "numeric"
        },
        { name: "maxlength", value: "10" }
      ];
    }
  },
  "text:phoneNumber": {
    formatter(value) {
      return value;
    },
    parser(value) {
      return value;
    },
    validationConfig: {
      maxLength: { length: 80 },
      phoneNumber: {}
    },
    attributes: () => [
      { name: "maxlength", value: "80" },
      { name: "type", value: "tel" }
    ]
  },
  "text:plusgiro": {
    formatter(value) {
      return parsePlusgiro(value);
    },
    parser(value) {
      return parsePlusgiro(value);
    },
    validationConfig: {
      maxLength: { length: 11 },
      plusgiro: {}
    },
    attributes: () => [
      { name: "inputmode", value: "numeric" },
      { name: "maxlength", value: "16" }
    ]
  },
  "text:postalCode": {
    formatter(value) {
      return formatPostalCode(value.trim());
    },
    parser(value) {
      return formatPostalCode(value.trim());
    },
    validationConfig: {
      maxLength: { length: 13 },
      postalCode: {}
    },
    attributes: () => [
      { name: "inputmode", value: "numeric" },
      { name: "maxlength", value: "15" }
    ]
  },
  text: {
    formatter(value) {
      return value;
    },
    parser(value) {
      return value;
    },
    validationConfig: {},
    attributes: () => []
  }
};

// src/components/FTable/input-validators.ts
function addInputValidators(inputElement, type, decimals) {
  ValidationService.addValidatorsToElement(
    inputElement,
    inputFieldConfig[type].validationConfig,
    true
  );
  const options = decimals ? { decimals } : void 0;
  const attributes = inputFieldConfig[type].attributes(options);
  for (const { name, value } of attributes) {
    inputElement.setAttribute(name, value);
  }
  ValidationService.validateElement(inputElement);
}

// src/components/FTable/is-alphanumeric.ts
function isAlphanumeric(e) {
  return e.key.length === 1 && !e.ctrlKey && !e.metaKey;
}

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableText.vue?type=script
var ITableText_default = /* @__PURE__ */ _defineComponent7({
  __name: "ITableText",
  props: {
    row: { type: null, required: true },
    column: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const model = ref2("");
    const inEdit = ref2(false);
    const validity = ref2({
      isValid: true,
      validationMessage: "",
      validityMode: "INITIAL"
    });
    const hasError = computed6(() => validity.value.validityMode === "ERROR");
    const divClasses = computed6(() => {
      return {
        "table-ng__editable": true,
        "table-ng__editable__numeric": __props.column.tnum
      };
    });
    const wrapperClasses = computed6(() => {
      return {
        "table-ng__cell": true,
        "table-ng__cell--text": true,
        "table-ng__cell--valid": !hasError.value,
        "table-ng__cell--error": hasError.value,
        "table-ng__cell--align-left": __props.column.align === "left",
        "table-ng__cell--align-right": __props.column.align === "right"
      };
    });
    const staticClasses = computed6(() => {
      return {
        "table-ng__cell": true,
        "table-ng__cell--static": true,
        "table-ng__cell--align-left": __props.column.align === "left",
        "table-ng__cell--align-right": __props.column.align === "right"
      };
    });
    const inputClasses = computed6(() => {
      return {
        foobar: true,
        "table-ng__textedit": true
      };
    });
    const ariaLabel = computed6(() => {
      const value = __props.column.label(__props.row);
      return value.length > 0 ? value : void 0;
    });
    const tdElement = useTemplateRef6("td");
    const viewElement = useTemplateRef6("view");
    const inputElement = useTemplateRef6("input");
    const { stopEdit } = useStartStopEdit();
    onMounted(() => {
      if (inputElement.value) {
        addInputValidators(inputElement.value, __props.column.type);
        ValidationService2.addValidatorsToElement(inputElement.value, __props.column.validation);
      }
    });
    function onStartEdit(modelValue) {
      if (inEdit.value) {
        return;
      }
      inEdit.value = true;
      assertRef4(tdElement);
      assertRef4(inputElement);
      const { width } = tdElement.value.getBoundingClientRect();
      model.value = modelValue;
      tdElement.value.style.setProperty("width", `${String(width)}px`);
      inputElement.value.tabIndex = 0;
      inputElement.value.focus();
    }
    function onStopEdit(options) {
      const { reason } = options;
      inEdit.value = false;
      assertRef4(inputElement);
      inputElement.value.tabIndex = -1;
      stopEdit(inputElement.value, reason);
    }
    function onClickCell(event) {
      assertRef4(tdElement);
      if (tdElement.value.contains(event.target)) {
        const value = __props.column.value(__props.row);
        onStartEdit(value);
      }
    }
    function onViewingKeydown(event) {
      if (isAlphanumeric(event)) {
        event.stopPropagation();
        onStartEdit("");
      }
      if (event.key === "Enter") {
        event.stopPropagation();
        const value = __props.column.value(__props.row);
        onStartEdit(value);
      }
    }
    function onEditingKeydown(event) {
      assertRef4(viewElement);
      assertRef4(inputElement);
      event.stopPropagation();
      if (event.key === "Enter") {
        event.preventDefault();
        const oldValue = __props.column.value(__props.row);
        const newValue = model.value;
        __props.column.update(__props.row, newValue, oldValue);
        model.value = "";
        onStopEdit({ reason: "enter" });
      }
      if (event.key === "Escape") {
        event.preventDefault();
        model.value = "";
        onStopEdit({ reason: "escape" });
      }
      if (event.key === "Tab") {
        event.preventDefault();
        const oldValue = __props.column.value(__props.row);
        const newValue = model.value;
        __props.column.update(__props.row, newValue, oldValue);
        model.value = "";
        onStopEdit({ reason: event.shiftKey ? "shift-tab" : "tab" });
      }
    }
    function onKeydown(event) {
      const editing = document.activeElement === inputElement.value;
      if (editing) {
        onEditingKeydown(event);
      } else {
        onViewingKeydown(event);
      }
    }
    function onBlur() {
      inEdit.value = false;
      assertRef4(tdElement);
      tdElement.value.style.removeProperty("width");
      const isDirty = model.value !== "";
      if (isDirty) {
        const oldValue = __props.column.value(__props.row);
        const newValue = model.value;
        __props.column.update(__props.row, newValue, oldValue);
      }
    }
    function onValidity(event) {
      const { isValid, validationMessage, validityMode } = event.detail;
      validity.value = { isValid, validationMessage, validityMode };
    }
    const __returned__ = { model, inEdit, validity, hasError, divClasses, wrapperClasses, staticClasses, inputClasses, ariaLabel, tdElement, viewElement, inputElement, stopEdit, onStartEdit, onStopEdit, onClickCell, onViewingKeydown, onEditingKeydown, onKeydown, onBlur, onValidity, get FIcon() {
      return FIcon3;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableText.vue?type=template
import { toDisplayString as _toDisplayString5, createElementVNode as _createElementVNode6, vModelText as _vModelText, normalizeClass as _normalizeClass, withDirectives as _withDirectives2, openBlock as _openBlock7, createBlock as _createBlock2, withModifiers as _withModifiers2, createElementBlock as _createElementBlock7 } from "vue";
var _hoisted_16 = ["aria-label"];
function render7(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.column.editable($props.row) ? (_openBlock7(), _createElementBlock7(
    "td",
    {
      key: 0,
      ref: "td",
      tabindex: "-1",
      class: _normalizeClass($setup.wrapperClasses),
      onClick: _withModifiers2($setup.onClickCell, ["stop"]),
      onKeydown: $setup.onKeydown
    },
    [
      _createElementVNode6(
        "div",
        {
          class: _normalizeClass($setup.divClasses)
        },
        [
          _createElementVNode6(
            "span",
            {
              ref: "view",
              class: "table-ng__editable__text"
            },
            _toDisplayString5($props.column.value($props.row)),
            513
            /* TEXT, NEED_PATCH */
          ),
          _withDirectives2(_createElementVNode6("input", {
            ref: "input",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.model = $event),
            class: _normalizeClass($setup.inputClasses),
            type: "text",
            maxlength: "40",
            tabindex: "-1",
            "aria-label": $setup.ariaLabel,
            onBlur: $setup.onBlur,
            onValidity: $setup.onValidity
          }, null, 42, _hoisted_16), [
            [_vModelText, $setup.model]
          ]),
          $setup.hasError ? (_openBlock7(), _createBlock2($setup["FIcon"], {
            key: 0,
            name: "error",
            class: "table-ng__editable__icon"
          })) : (_openBlock7(), _createBlock2($setup["FIcon"], {
            key: 1,
            name: "pen",
            class: "table-ng__editable__icon"
          }))
        ],
        2
        /* CLASS */
      )
    ],
    34
    /* CLASS, NEED_HYDRATION */
  )) : (_openBlock7(), _createElementBlock7(
    "td",
    {
      key: 1,
      ref: "td",
      tabindex: "-1",
      class: _normalizeClass($setup.staticClasses)
    },
    _toDisplayString5($props.column.value($props.row)),
    3
    /* TEXT, CLASS */
  ));
}

// src/components/FTable/ITableText.vue
ITableText_default.render = render7;
ITableText_default.__file = "src/components/FTable/ITableText.vue";

// src/components/FTable/get-update-fn.ts
import { isSet } from "@fkui/logic";

// src/components/FTable/table-column.ts
function defaultTnumValue(type) {
  const tnumTypes = [
    "text:bankAccountNumber",
    "text:bankgiro",
    "text:clearingNumber",
    "text:currency",
    "text:number",
    "text:organisationsnummer",
    "text:percent",
    "text:personnummer",
    "text:phoneNumber",
    "text:plusgiro",
    "text:postalCode"
  ];
  return tnumTypes.includes(type);
}
function isTextColumn(column) {
  if (!column.type) {
    return false;
  }
  return column.type.startsWith("text");
}
function isEnableColumn(column) {
  if (!column.type) {
    return false;
  }
  return column.type === "anchor" || column.type === "button";
}
function isEditableColumn(column) {
  if (!column.type) {
    return false;
  }
  return column.type === "checkbox" || isTextColumn(column) || column.type === "select";
}

// src/components/FTable/examples/stringify-object.ts
function stringifyValue(value) {
  if (Array.isArray(value)) {
    const joinedValues = value.map((it) => `'${String(it)}'`).join(", ");
    return `[${joinedValues}]`;
  }
  if (typeof value === "function") {
    return value.toString().split(`"`).join("'");
  }
  if (typeof value === "string") {
    return `'${value}'`;
  }
  return String(value);
}
function stringifyObject(obj) {
  const props = Object.keys(obj).map(
    (key) => `${key}: ${stringifyValue(obj[key])}`
  );
  return `{ ${props.join(", ")} }`;
}

// virtual-entry:virtual:src/components/FTable/examples/FTableColumnLiveExample.vue:FTableColumnLiveExample-8b66f5.js
import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode7, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode2, openBlock as _openBlock8, createBlock as _createBlock3, createCommentVNode as _createCommentVNode6, toDisplayString as _toDisplayString6 } from "vue";
var columnData = {
  checkbox: {
    type: "checkbox",
    header: "Kryssruta",
    key: "value"
  },
  radio: {
    type: "radio",
    header: "Radioknapp",
    key: "value"
  },
  "text:currency": {
    type: "text:currency",
    header: "Valuta",
    key: "value"
  },
  "text:number": {
    type: "text:number",
    decimals: 3,
    header: "Numeriskt, tre decimaler",
    key: "value"
  },
  "text:percent": {
    type: "text:percent",
    decimals: 2,
    header: "Procent, tv\xE5 decimaler",
    key: "value"
  },
  text: {
    type: "text",
    header: "Fritext",
    key: "value"
  },
  "text:bankAccountNumber": {
    type: "text:bankAccountNumber",
    header: "Kontonummer",
    key: "value"
  },
  "text:bankgiro": {
    type: "text:bankgiro",
    header: "Bankgiro",
    key: "value"
  },
  "text:clearingNumber": {
    type: "text:clearingNumber",
    header: "Clearingnummer",
    key: "value"
  },
  "text:email": {
    type: "text:email",
    header: "Mejladress",
    key: "value"
  },
  "text:organisationsnummer": {
    type: "text:organisationsnummer",
    header: "Organisationsnummer",
    key: "value"
  },
  "text:personnummer": {
    type: "text:personnummer",
    header: "Personnummer",
    key: "value"
  },
  "text:phoneNumber": {
    type: "text:phoneNumber",
    header: "Telefonnummer",
    key: "value"
  },
  "text:plusgiro": {
    type: "text:plusgiro",
    header: "Plusgiro",
    key: "value"
  },
  "text:postalCode": {
    type: "text:postalCode",
    header: "Postnummer",
    key: "value"
  },
  rowheader: {
    type: "rowheader",
    header: "Radrubrik",
    key: "value"
  },
  anchor: {
    type: "anchor",
    header: "L\xE4nk",
    value: () => "value",
    href: "#"
  },
  button: {
    type: "button",
    header: "Knapp",
    value: () => "value",
    icon: "bell"
  },
  select: {
    type: "select",
    header: "Dropplista",
    key: "value",
    options: ["Foo", "Bar", "Baz"]
  },
  "text:date": {
    type: "text:date",
    header: "Datum",
    key: "value"
  }
};
var rowData = {
  checkbox: [true, false],
  radio: [true, false],
  "text:currency": [3453455, 1e4],
  "text:number": [5.4, 10.5],
  "text:percent": [9.987, 51],
  text: ["Six seven", "Skibidi"],
  "text:bankAccountNumber": ["12345678", "1234567890123456"],
  "text:bankgiro": ["999-9996", "9999-9997"],
  "text:clearingNumber": ["5678", "5678-1"],
  "text:email": ["sixseven@example.net", "skibidi@example.net"],
  "text:organisationsnummer": ["9999999999", "9999999999"],
  "text:personnummer": ["19120211-9150", "19970131-2390"],
  "text:phoneNumber": ["12345678901234567", "123456789012345678"],
  "text:plusgiro": ["11111119", "9999996"],
  "text:postalCode": ["37324", "93222"],
  "text:date": [FDate.now().toString(), FDate.now().addDays(1).toString()],
  rowheader: ["Six seven", "Skibidi"],
  anchor: ["Six seven", "Skibidi"],
  button: ["Six seven", "Skibidi"],
  select: ["Foo"]
};
function getColumn(options) {
  const { columnType, description, tnum, align, enabled, editable } = options;
  const column = { ...columnData[columnType] };
  if (description) {
    column.description = "Formatbeskrivning";
  }
  if (tnum !== void 0 && isTextColumn(column)) {
    column.tnum = tnum;
  }
  if (align !== void 0 && isTextColumn(column)) {
    column.align = align;
  }
  if (editable !== void 0 && isEditableColumn(column)) {
    column.editable = editable;
  }
  if (enabled !== void 0 && isEnableColumn(column)) {
    column.enabled = enabled;
  }
  return column;
}
function getRows(options) {
  const { columnType } = options;
  return rowData[columnType].map((it, index) => ({ id: index + 1, value: it }));
}
var exampleComponent = defineComponent({
  name: "FTableColumnLiveExample",
  components: { LiveExample, FSelectField, FFieldset, FCheckboxField, FRadioField },
  data() {
    return {
      columnType: "text",
      textType: "text",
      descriptionChecked: false,
      tnum: false,
      align: "left",
      editableChecked: true,
      enabledChecked: true
    };
  },
  computed: {
    livemethods() {
      return {
        defineTableColumns: defineTableColumnsFunc
      };
    },
    components() {
      return { FTable };
    },
    tnumSupport() {
      return this.columnType === "text";
    },
    alignSupport() {
      return this.columnType === "text";
    },
    defaultTNUM() {
      return defaultTnumValue(this.textType);
    },
    defaultAlign() {
      if (this.columnType === "text") {
        return ["text:currency", "text:number", "text:percent"].includes(this.textType) ? "right" : "left";
      }
      return "left";
    },
    alignLeftText() {
      return this.defaultAlign === "left" ? "V\xE4nster (default)" : "V\xE4nster";
    },
    alignRightText() {
      return this.defaultAlign === "right" ? "H\xF6ger (default)" : "H\xF6ger";
    },
    tnumOffText() {
      return !this.defaultTNUM ? "Av (default)" : "Av";
    },
    tnumOnText() {
      return this.defaultTNUM ? "P\xE5 (default)" : "P\xE5";
    },
    enabledSupport() {
      return ["anchor", "button"].includes(this.columnType);
    },
    editableSupport() {
      return ["checkbox", "select", "text"].includes(this.columnType);
    },
    normalizedKey() {
      return this.columnType === "text" ? this.textType : this.columnType;
    },
    columns() {
      const column = getColumn({
        columnType: this.normalizedKey,
        description: this.descriptionChecked,
        tnum: this.tnumSupport && this.tnum !== this.defaultTNUM ? this.tnum : void 0,
        align: this.alignSupport && this.align !== this.defaultAlign ? this.align : void 0,
        editable: this.editableSupport ? this.editableChecked : void 0,
        enabled: this.enabledSupport ? this.enabledChecked : void 0
      });
      return `defineTableColumns([${stringifyObject(column)}])`;
    },
    rows() {
      const rows = getRows({ columnType: this.normalizedKey });
      const stringified = rows.map((it) => stringifyObject(it)).join(", ");
      return `[${stringified}]`;
    },
    template() {
      return `<f-table :columns="${this.columns}" :rows="${this.rows}"></f-table>`;
    }
  },
  mounted() {
    this.limitTableWidth();
  },
  updated() {
    this.limitTableWidth();
  },
  methods: {
    limitTableWidth() {
      const root = getHTMLElementFromVueRef(this.$el);
      const table = root.querySelector("table");
      if (table) {
        table.style.width = "300px";
      }
    },
    onTextTypeChange() {
      this.align = this.defaultAlign;
      this.tnum = this.defaultTNUM;
    }
  }
});
function render8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_select_field = _resolveComponent("f-select-field");
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_f_radio_field = _resolveComponent("f-radio-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  const _component_live_example = _resolveComponent("live-example");
  return _openBlock8(), _createBlock3(_component_live_example, {
    components: _ctx.components,
    template: _ctx.template,
    livemethods: _ctx.livemethods
  }, {
    default: _withCtx(() => [
      _createVNode2(_component_f_select_field, {
        modelValue: _ctx.columnType,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.columnType = $event)
      }, {
        label: _withCtx(() => [..._cache[9] || (_cache[9] = [
          _createTextVNode(
            " Kolumntyp ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _cache[10] || (_cache[10] = _createElementVNode7(
            "option",
            { value: "text" },
            "Text",
            -1
            /* CACHED */
          )),
          _cache[11] || (_cache[11] = _createElementVNode7(
            "option",
            { value: "checkbox" },
            "Kryssruta",
            -1
            /* CACHED */
          )),
          _cache[12] || (_cache[12] = _createElementVNode7(
            "option",
            { value: "radio" },
            "Radioknapp",
            -1
            /* CACHED */
          )),
          _cache[13] || (_cache[13] = _createElementVNode7(
            "option",
            { value: "rowheader" },
            "Radrubrik",
            -1
            /* CACHED */
          )),
          _cache[14] || (_cache[14] = _createElementVNode7(
            "option",
            { value: "anchor" },
            "L\xE4nk",
            -1
            /* CACHED */
          )),
          _cache[15] || (_cache[15] = _createElementVNode7(
            "option",
            { value: "button" },
            "Knapp",
            -1
            /* CACHED */
          )),
          _cache[16] || (_cache[16] = _createElementVNode7(
            "option",
            { value: "select" },
            "Dropplista",
            -1
            /* CACHED */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _ctx.columnType === "text" ? (_openBlock8(), _createBlock3(_component_f_select_field, {
        key: 0,
        modelValue: _ctx.textType,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.textType = $event),
        onChange: _ctx.onTextTypeChange
      }, {
        label: _withCtx(() => [..._cache[17] || (_cache[17] = [
          _createTextVNode(
            " Texttyp ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _cache[18] || (_cache[18] = _createElementVNode7(
            "option",
            { value: "text" },
            "Fritext",
            -1
            /* CACHED */
          )),
          _cache[19] || (_cache[19] = _createElementVNode7(
            "option",
            { value: "text:bankgiro" },
            "Bankgiro",
            -1
            /* CACHED */
          )),
          _cache[20] || (_cache[20] = _createElementVNode7(
            "option",
            { value: "text:clearingNumber" },
            "Clearingnummer",
            -1
            /* CACHED */
          )),
          _cache[21] || (_cache[21] = _createElementVNode7(
            "option",
            { value: "text:bankAccountNumber" },
            "Kontonummer",
            -1
            /* CACHED */
          )),
          _cache[22] || (_cache[22] = _createElementVNode7(
            "option",
            { value: "text:email" },
            "Mejladress",
            -1
            /* CACHED */
          )),
          _cache[23] || (_cache[23] = _createElementVNode7(
            "option",
            { value: "text:number" },
            "Numeriskt",
            -1
            /* CACHED */
          )),
          _cache[24] || (_cache[24] = _createElementVNode7(
            "option",
            { value: "text:organisationsnummer" },
            "Organisationsnummer",
            -1
            /* CACHED */
          )),
          _cache[25] || (_cache[25] = _createElementVNode7(
            "option",
            { value: "text:personnummer" },
            "Personnummer",
            -1
            /* CACHED */
          )),
          _cache[26] || (_cache[26] = _createElementVNode7(
            "option",
            { value: "text:plusgiro" },
            "Plusgiro",
            -1
            /* CACHED */
          )),
          _cache[27] || (_cache[27] = _createElementVNode7(
            "option",
            { value: "text:postalCode" },
            "Postnummer",
            -1
            /* CACHED */
          )),
          _cache[28] || (_cache[28] = _createElementVNode7(
            "option",
            { value: "text:percent" },
            "Procent",
            -1
            /* CACHED */
          )),
          _cache[29] || (_cache[29] = _createElementVNode7(
            "option",
            { value: "text:phoneNumber" },
            "Telefonnummer",
            -1
            /* CACHED */
          )),
          _cache[30] || (_cache[30] = _createElementVNode7(
            "option",
            { value: "text:currency" },
            "Valuta",
            -1
            /* CACHED */
          )),
          _cache[31] || (_cache[31] = _createElementVNode7(
            "option",
            { value: "text:date" },
            "Datum",
            -1
            /* CACHED */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "onChange"])) : _createCommentVNode6("v-if", true),
      _ctx.editableSupport ? (_openBlock8(), _createBlock3(_component_f_checkbox_field, {
        key: 1,
        modelValue: _ctx.editableChecked,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.editableChecked = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[32] || (_cache[32] = [
          _createTextVNode(
            "Redigerbar",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])) : _createCommentVNode6("v-if", true),
      _ctx.enabledSupport ? (_openBlock8(), _createBlock3(_component_f_checkbox_field, {
        key: 2,
        modelValue: _ctx.enabledChecked,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.enabledChecked = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[33] || (_cache[33] = [
          _createTextVNode(
            "Enabled",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])) : _createCommentVNode6("v-if", true),
      _ctx.alignSupport ? (_openBlock8(), _createBlock3(_component_f_fieldset, {
        key: 3,
        name: "align"
      }, {
        label: _withCtx(() => [..._cache[34] || (_cache[34] = [
          _createTextVNode(
            " Justering ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode2(_component_f_radio_field, {
            modelValue: _ctx.align,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.align = $event),
            value: "left"
          }, {
            default: _withCtx(() => [
              _createTextVNode(
                _toDisplayString6(_ctx.alignLeftText),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode2(_component_f_radio_field, {
            modelValue: _ctx.align,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.align = $event),
            value: "right"
          }, {
            default: _withCtx(() => [
              _createTextVNode(
                _toDisplayString6(_ctx.alignRightText),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      })) : _createCommentVNode6("v-if", true),
      _ctx.tnumSupport ? (_openBlock8(), _createBlock3(_component_f_fieldset, {
        key: 4,
        name: "tnum"
      }, {
        label: _withCtx(() => [..._cache[35] || (_cache[35] = [
          _createTextVNode(
            " TNUM ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode2(_component_f_radio_field, {
            modelValue: _ctx.tnum,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.tnum = $event),
            value: false
          }, {
            default: _withCtx(() => [
              _createTextVNode(
                _toDisplayString6(_ctx.tnumOffText),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode2(_component_f_radio_field, {
            modelValue: _ctx.tnum,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.tnum = $event),
            value: true
          }, {
            default: _withCtx(() => [
              _createTextVNode(
                _toDisplayString6(_ctx.tnumOnText),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      })) : _createCommentVNode6("v-if", true),
      _createVNode2(_component_f_fieldset, { name: "rubrik" }, {
        label: _withCtx(() => [..._cache[36] || (_cache[36] = [
          _createTextVNode(
            " Rubriken ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode2(_component_f_checkbox_field, {
            modelValue: _ctx.descriptionChecked,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.descriptionChecked = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[37] || (_cache[37] = [
              _createTextVNode(
                " Formatbeskrivning ",
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
  }, 8, ["components", "template", "livemethods"]);
}
exampleComponent.render = render8;
setup({
  rootComponent: exampleComponent,
  selector: "#example-8b66f5"
});
export {
  render8 as render
};
