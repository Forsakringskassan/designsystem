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

// virtual-entry:virtual:packages/vue/src/components/FCard/examples/FCardValidationExample.vue:FCardValidationExample-9d641e.js
import { defineComponent as _defineComponent } from "vue";
import { ValidationService } from "@fkui/logic";
import { useTemplateRef } from "vue";
import { FCard, FIcon, FValidationForm, getElementFromVueRef } from "@fkui/vue";
import { normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, resolveDirective as _resolveDirective, withCtx as _withCtx, createBlock as _createBlock, withDirectives as _withDirectives, Fragment as _Fragment } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FCardValidationExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const cardRef = useTemplateRef("card");
    const focusRef = useTemplateRef("focus");
    function setInvalid() {
      ValidationService.setError(getElementFromVueRef(cardRef.value), "Uppgifter saknas");
      ValidationService.validateElement(getElementFromVueRef(cardRef.value));
    }
    function setValid() {
      ValidationService.resetState(getElementFromVueRef(cardRef.value));
      ValidationService.validateElement(getElementFromVueRef(cardRef.value));
    }
    const __returned__ = { cardRef, focusRef, setInvalid, setValid, get FCard() {
      return FCard;
    }, get FIcon() {
      return FIcon;
    }, get FValidationForm() {
      return FValidationForm;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = { class: "button-group" };
var _hoisted_2 = {
  class: "button button-group__item button--tertiary button--medium button--align-text",
  type: "button"
};
var _hoisted_3 = {
  id: "focus",
  ref: "focus",
  class: "button button-group__item button--tertiary button--medium button--align-text",
  type: "button"
};
var _hoisted_4 = {
  key: 0,
  class: "sr-only"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _createVNode($setup["FValidationForm"], { "use-error-list": false }, {
        default: _withCtx(() => [
          _withDirectives((_openBlock(), _createBlock($setup["FCard"], {
            ref: "card",
            "focus-ref": $setup.focusRef
          }, {
            header: _withCtx(({ headingSlotClass }) => [
              _createElementVNode(
                "h3",
                {
                  class: _normalizeClass(headingSlotClass)
                },
                "Arbete",
                2
                /* CLASS */
              )
            ]),
            default: _withCtx(() => [..._cache[0] || (_cache[0] = [
              _createElementVNode(
                "p",
                null,
                "Arbetsgivare",
                -1
                /* CACHED */
              ),
              _createElementVNode(
                "p",
                null,
                [
                  _createTextVNode(" Gatan 1 "),
                  _createElementVNode("br"),
                  _createTextVNode(" 123 45 Staden "),
                  _createElementVNode("br"),
                  _createTextVNode(" Sverige ")
                ],
                -1
                /* CACHED */
              ),
              _createElementVNode(
                "p",
                null,
                [
                  _createElementVNode("label", { class: "label" }, " Telefonnummer "),
                  _createElementVNode("span", null, " 0109999999 ")
                ],
                -1
                /* CACHED */
              )
            ])]),
            footer: _withCtx(({ hasError }) => [
              _createElementVNode("div", _hoisted_1, [
                _createElementVNode("button", _hoisted_2, [
                  _createVNode($setup["FIcon"], { name: "trashcan" }),
                  _cache[1] || (_cache[1] = _createElementVNode(
                    "span",
                    null,
                    " Ta bort ",
                    -1
                    /* CACHED */
                  ))
                ]),
                _createElementVNode(
                  "button",
                  _hoisted_3,
                  [
                    _createVNode($setup["FIcon"], { name: "pen" }),
                    _createElementVNode("span", null, [
                      _cache[2] || (_cache[2] = _createTextVNode(
                        " \xC4ndra ",
                        -1
                        /* CACHED */
                      )),
                      hasError ? (_openBlock(), _createElementBlock("span", _hoisted_4, " p\xE5 kortet, det inneh\xE5ller fel ")) : _createCommentVNode("v-if", true)
                    ])
                  ],
                  512
                  /* NEED_PATCH */
                )
              ])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["focus-ref"])), [
            [_directive_validation]
          ]),
          _cache[3] || (_cache[3] = _createElementVNode(
            "button",
            {
              type: "submit",
              class: "button button--primary"
            },
            "Simulera inskick av formul\xE4r",
            -1
            /* CACHED */
          ))
        ]),
        _: 1
        /* STABLE */
      }),
      _createElementVNode("button", {
        type: "button",
        class: "button button-group__item button--tertiary button--large",
        "data-test": "set-invalid",
        onClick: $setup.setInvalid
      }, " Markera kort som felaktigt "),
      _createElementVNode("button", {
        type: "button",
        class: "button button-group__item button--tertiary button--large",
        "data-test": "set-valid",
        onClick: $setup.setValid
      }, " Markera kort som giltigt ")
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-9d641e"
});
export {
  render
};
