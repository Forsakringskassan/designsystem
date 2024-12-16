"use strict";
(() => {
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });

  // docs/src/setup.ts
  var import_vue = __require("vue");
  var import_vue2 = __require("@fkui/vue");
  function setup(options) {
    const { rootComponent, selector } = options;
    const app = (0, import_vue.createApp)({
      render() {
        return (0, import_vue.h)(import_vue2.FErrorHandlingApp, { defaultComponent: rootComponent });
      }
    });
    (0, import_vue2.setRunningContext)(app);
    app.use(import_vue2.ErrorPlugin, {
      captureWarnings: true,
      logToConsole: true
    });
    app.use(import_vue2.ValidationPlugin);
    app.use(import_vue2.TestPlugin);
    app.use(import_vue2.TranslationPlugin);
    app.mount(selector);
  }

  // virtual-entry:./docs/components/input/examples/ComboboxExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_docs_live_example = __require("@forsakringskassan/docs-live-example");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "ComboboxLiveExample",
    components: { LiveExample: import_docs_live_example.LiveExample, FFieldset: import_vue4.FFieldset, FCheckboxField: import_vue4.FCheckboxField },
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
          FFieldset: import_vue4.FFieldset,
          FCheckboxField: import_vue4.FCheckboxField,
          FTooltip: import_vue4.FTooltip,
          FTextField: import_vue4.FTextField
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
                    <f-tooltip screen-reader-text="L\xE4s mer h\xE4r">
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
    const _component_f_checkbox_field = (0, import_vue5.resolveComponent)("f-checkbox-field");
    const _component_f_fieldset = (0, import_vue5.resolveComponent)("f-fieldset");
    const _component_live_example = (0, import_vue5.resolveComponent)("live-example");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_live_example, {
      components: _ctx.components,
      template: _ctx.template,
      livedata: _ctx.livedata
    }, {
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.isRequired,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.isRequired = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[6] || (_cache[6] = [
            (0, import_vue5.createTextVNode)(" Obligatoriskt f\xE4lt ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.isDisabled,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.isDisabled = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[7] || (_cache[7] = [
            (0, import_vue5.createTextVNode)(" Inaktivt f\xE4lt ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.allowArbitrary,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.allowArbitrary = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[8] || (_cache[8] = [
            (0, import_vue5.createTextVNode)(" Till\xE5t fritext ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_fieldset, { name: "label-settings" }, {
          label: (0, import_vue5.withCtx)(() => _cache[9] || (_cache[9] = [
            (0, import_vue5.createTextVNode)(" Etiketten ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createVNode)(_component_f_checkbox_field, {
              modelValue: _ctx.descriptionVisible,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.descriptionVisible = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[10] || (_cache[10] = [
                (0, import_vue5.createTextVNode)(" Hj\xE4lptext ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createVNode)(_component_f_checkbox_field, {
              modelValue: _ctx.tooltipVisible,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.tooltipVisible = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[11] || (_cache[11] = [
                (0, import_vue5.createTextVNode)(" Tooltip ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createVNode)(_component_f_checkbox_field, {
              modelValue: _ctx.showInline,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.showInline = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[12] || (_cache[12] = [
                (0, import_vue5.createTextVNode)(" Inline ")
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
    selector: "#ComboboxExample"
  });
})();
