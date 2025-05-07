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

// virtual-entry:virtual:docs/components/input/examples/ComboboxExample.vue:ComboboxExample-d198c5.js
import { defineComponent } from "vue";
import { FFieldset, FCheckboxField, FTooltip, FTextField } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "ComboboxLiveExample",
  components: { LiveExample, FFieldset, FCheckboxField },
  data() {
    return {
      tooltipVisible: false,
      descriptionVisible: false,
      isDisabled: false,
      isRequired: false,
      showInline: false,
      allowArbitrary: false
    };
  },
  computed: {
    components() {
      return {
        FFieldset,
        FCheckboxField,
        FTooltip,
        FTextField
      };
    },
    livedata() {
      return {
        valtLand: "",
        land: [
          "Abchazien",
          "Afghanistan",
          "Albanien",
          "Algeriet",
          "Amerikanska Samoa",
          "Amerikas f\xF6renta stater (USA)",
          "Andorra",
          "Angola",
          "Anguilla",
          "Antarktis",
          "Antigua och Barbuda",
          "Argentina",
          "Armenien",
          "Aruba",
          "Australien",
          "Azerbajdzjan",
          "Bahamas",
          "Bahrain",
          "Bangladesh",
          "Barbados",
          "Belgien",
          "Belize",
          "Benin",
          "Bermuda",
          "Bhutan",
          "Bolivia",
          "Bonaire, Sint Eustatius och Saba",
          "Bosnien och Hercegovina",
          "Botswana",
          "Bouvet\xF6n",
          "Brasilien",
          "Brittiska territoriet i Indiska oceanen",
          "Brunei",
          "Bulgarien",
          "Burkina Faso",
          "Burundi",
          "Cayman\xF6arna",
          "Centralafrikanska republiken",
          "Chile",
          "Colombia",
          "Cook\xF6arna",
          "Costa Rica",
          "Curacao",
          "Cypern",
          "Danmark",
          "Djibouti",
          "Dominica",
          "Dominikanska republiken",
          "Ecuador",
          "Egypten",
          "Ekvatorialguinea",
          "El Salvador",
          "Elfenbenskusten",
          "England och Wales",
          "Eritrea",
          "Estland",
          "Etiopien",
          "Falklands\xF6arna",
          "Fiji",
          "Filippinerna",
          "Finland",
          "Frankrike",
          "Franska Guyana",
          "Franska Polynesien",
          "Franska sydterritorierna",
          "F\xE4r\xF6arna",
          "F\xF6renade Arabemiraten",
          "F\xF6renta staternas mindre \xF6ar i Oceanien och V\xE4stindien",
          "Gabon",
          "Gambia",
          "Georgien",
          "Ghana",
          "Grekland",
          "Grenada",
          "Gr\xF6nland",
          "Guadeloupe",
          "Guam",
          "Guatemala",
          "Guinea",
          "Guinea-Bissau",
          "Guyana",
          "Haiti",
          "Heard- och McDonalds\xF6arna",
          "Honduras",
          "Hong Kong",
          "Indien",
          "Indonesien",
          "Irak",
          "Iran",
          "Irland",
          "Island",
          "Isle of Man",
          "Israel",
          "Italien",
          "Jamaica",
          "Japan",
          "Jersey",
          "Jordanien",
          "Jul\xF6n i Indiska oceanen",
          "Jungfru\xF6arna (Storbritannien)",
          "Jungfru\xF6arna (USA)",
          "Kambodja",
          "Kamerun",
          "Kanada",
          "Kap Verde",
          "Kazakstan",
          "Kenya",
          "Kina",
          "Kirgizistan",
          "Kiribati",
          "Komorerna",
          "Kongo-Brazzaville",
          "Kongo-Kinhasa",
          "Kroatien",
          "Kuba",
          "Kuwait",
          "Laos",
          "Lesotho",
          "Lettland",
          "Libanon",
          "Liberia",
          "Libyen",
          "Liechtenstein",
          "Litauen",
          "Luxemburg",
          "Macao",
          "Madagaskar",
          "Makedonien",
          "Malawi",
          "Malaysia",
          "Maldiverna",
          "Mali",
          "Malta",
          "Marocko",
          "Marshall\xF6arna",
          "Martinique",
          "Mauretanien",
          "Mauritius",
          "Mayotte",
          "Mexiko",
          "Mikronesien",
          "Mo\xE7ambique",
          "Moldavien",
          "Monaco",
          "Mongoliet",
          "Montenegro",
          "Montserrat",
          "Myanmar",
          "Nagorno-Karabach",
          "Namibia",
          "Nauru",
          "Nederl\xE4nderna",
          "Nepal",
          "Nicaragua",
          "Niger",
          "Nigeria",
          "Nordcypern",
          "Nordirland",
          "Nordkorea",
          "Nordmarianerna",
          "Norfolk\xF6n",
          "Norge",
          "Nya Zeeland",
          "Oman",
          "Pakistan",
          "Palau",
          "Palestina",
          "Panama",
          "Papua Nya Guinea",
          "Paraguay",
          "Peru",
          "Pitcairn\xF6arna",
          "Polen",
          "Portugal",
          "Purto Rico",
          "Qatar",
          "R\xE9union",
          "Rum\xE4nien",
          "Rwanda",
          "Ryssland",
          "Saint Barth\xE9lemy",
          "Saint Kitts och Nevis",
          "Saint Lucia",
          "Saint Martin (Frankrike)",
          "Saint Vincent och Grenadinerna",
          "Salomon\xF6arna",
          "Samoa",
          "San Marino",
          "S\xE3o Tom\xE9 och Pr\xEDncipe",
          "Saudiarabien",
          "Schweiz",
          "Senegal",
          "Serbien",
          "Seychellerna",
          "Sierra Leone",
          "Singapore",
          "Skottland",
          "Slovakien",
          "Slovenien",
          "Somalia",
          "Somaliland",
          "Spanien",
          "Sri Lanka",
          "Storbritannien",
          "Sudan",
          "Surinam",
          "Svalbard och Jan Mayen",
          "Swaziland",
          "Sverige",
          "Sydafrika",
          "Sydkorea",
          "Sydossetien",
          "Sydsudan",
          "Syrien",
          "Tadzjikistan",
          "Taiwan",
          "Tanzania",
          "Tchad",
          "Thailand",
          "Tjeckien",
          "Togo",
          "Tokelau",
          "Tonga",
          "Transnistrien",
          "Trinidad och Tobago",
          "Tunisien",
          "Turkiet",
          "Turkmenistan",
          "Turks- och Caicos\xF6arna",
          "Tuvalu",
          "Tyskland",
          "Uganda",
          "Ukraina",
          "Ungern",
          "Uruguay",
          "Uzbekistan",
          "Wallis- och Futuna\xF6arna",
          "Vanuatu",
          "Vatikanstaten",
          "Venezuela",
          "Vietnam",
          "Vitryssland",
          "V\xE4stsahara",
          "Yemen",
          "Zambia",
          "Zimbabwe",
          "\xC5land",
          "\xD6sterrike",
          "\xD6sttimor"
        ]
      };
    },
    tooltip() {
      const template = (
        /* HTML */
        `
                <template #tooltip>
                    <f-tooltip screen-reader-text="L\xE4s mer h\xE4r" header-tag="h2">
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
                <template #description="{ descriptionClass }">
                    <span :class="descriptionClass"> Hj\xE4lptext </span>
                </template>
            `
      );
      return this.descriptionVisible ? template : "";
    },
    inline() {
      const template = (
        /* HTML */
        ` inline`
      );
      return this.showInline ? template : "";
    },
    disabled() {
      return this.isDisabled ? "disabled" : "";
    },
    required() {
      return this.isRequired ? ".required" : "";
    },
    arbitrary() {
      return this.allowArbitrary ? "" : ".allowList='{ allowList: { list: land } }'";
    },
    validation() {
      if (!this.required && this.allowArbitrary) {
        return "";
      }
      return `v-validation${this.required}${this.arbitrary}`;
    },
    template() {
      return (
        /* HTML */
        `
                <f-text-field
                    v-model="valtLand"
                    ${this.disabled}
                    ${this.inline}
                    ${this.validation}
                    maxlength="100"
                    :options="land"
                >
                    <template #default> V\xE4lj land </template>
                    ${this.tooltip} ${this.description}
                </f-text-field>
            `
      );
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  const _component_live_example = _resolveComponent("live-example");
  return _openBlock(), _createBlock(_component_live_example, {
    components: _ctx.components,
    template: _ctx.template,
    livedata: _ctx.livedata
  }, {
    default: _withCtx(() => [
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.isRequired,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.isRequired = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[6] || (_cache[6] = [
          _createTextVNode(" Obligatoriskt f\xE4lt ")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.isDisabled,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.isDisabled = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[7] || (_cache[7] = [
          _createTextVNode(" Inaktivt f\xE4lt ")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.allowArbitrary,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.allowArbitrary = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[8] || (_cache[8] = [
          _createTextVNode(" Till\xE5t fritext ")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_fieldset, { name: "label-settings" }, {
        label: _withCtx(() => _cache[9] || (_cache[9] = [
          _createTextVNode(" Etiketten ")
        ])),
        default: _withCtx(() => [
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.descriptionVisible,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.descriptionVisible = $event),
            value: true
          }, {
            default: _withCtx(() => _cache[10] || (_cache[10] = [
              _createTextVNode(" Hj\xE4lptext ")
            ])),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.tooltipVisible,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.tooltipVisible = $event),
            value: true
          }, {
            default: _withCtx(() => _cache[11] || (_cache[11] = [
              _createTextVNode(" Tooltip ")
            ])),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.showInline,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.showInline = $event),
            value: true
          }, {
            default: _withCtx(() => _cache[12] || (_cache[12] = [
              _createTextVNode(" Inline ")
            ])),
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
  selector: "#example-d198c5"
});
export {
  render
};
