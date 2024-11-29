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
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    components: { FTextField: import_vue4.FTextField, FValidationForm: import_vue4.FValidationForm, FOutputField: import_vue4.FOutputField },
    data() {
      return {
        valdRas: "",
        valtNamn: "",
        namn: [
          "Bamse",
          "Kira",
          "Bosse",
          "Hugo",
          "Milton",
          "Maja",
          "Milou",
          "Stina",
          "Rex",
          "Nelson",
          "Greta",
          "Elvis",
          "Simba",
          "Molly",
          "Sixten",
          "Svante",
          "Charlie",
          "Lexie",
          "Ozzy",
          "Max",
          "Dino"
        ],
        raser: [
          "Affenpinscher",
          "Afghan Hound",
          "Aidi",
          "Airedale Terrier",
          "Akbash Dog",
          "Akita",
          "Alano Espa\xF1ol",
          "Alaskan Klee Kai",
          "Alaskan Malamute",
          "Alpine Dachsbracke",
          "Alpine Spaniel",
          "American Bulldog",
          "American Cocker Spaniel",
          "American Eskimo Dog",
          "American Foxhound",
          "American Hairless Terrier",
          "American Pit Bull Terrier",
          "American Staffordshire Terrier",
          "American Water Spaniel",
          "Anglo-Fran\xE7ais de Petite V\xE9nerie",
          "Appenzeller Sennenhund",
          "Ariege Pointer",
          "Ariegeois",
          "Armant",
          "Armenian Gampr dog",
          "Artois Hound",
          "Australian Cattle Dog",
          "Australian Kelpie",
          "Australian Shepherd",
          "Australian Silky Terrier",
          "Australian Stumpy Tail Cattle Dog",
          "Australian Terrier",
          "Azawakh",
          "Bakharwal Dog",
          "Barbet",
          "Basenji",
          "Basque Shepherd Dog",
          "Basset Art\xE9sien Normand",
          "Basset Bleu de Gascogne",
          "Basset Fauve de Bretagne",
          "Basset Hound",
          "Bavarian Mountain Hound",
          "Beagle",
          "Beagle-Harrier",
          "Bearded Collie",
          "Beauceron",
          "Bedlington Terrier",
          "Belgian Shepherd Dog (Groenendael)",
          "Belgian Shepherd Dog (Laekenois)",
          "Belgian Shepherd Dog (Malinois)",
          "Bergamasco Shepherd",
          "Berger Blanc Suisse",
          "Berger Picard",
          "Berner Laufhund",
          "Bernese Mountain Dog",
          "Billy",
          "Black and Tan Coonhound",
          "Black and Tan Virginia Foxhound",
          "Black Norwegian Elkhound",
          "Black Russian Terrier",
          "Bloodhound",
          "Blue Lacy",
          "Blue Paul Terrier",
          "Boerboel",
          "Bohemian Shepherd",
          "Bolognese",
          "Border Collie",
          "Border Terrier",
          "Borzoi",
          "Boston Terrier",
          "Bouvier des Ardennes",
          "Bouvier des Flandres",
          "Boxer",
          "Boykin Spaniel",
          "Bracco Italiano",
          "Braque d'Auvergne",
          "Braque du Bourbonnais",
          "Braque du Puy",
          "Braque Francais",
          "Braque Saint-Germain",
          "Brazilian Terrier",
          "Briard",
          "Briquet Griffon Vend\xE9en",
          "Brittany",
          "Broholmer",
          "Bruno Jura Hound",
          "Bucovina Shepherd Dog",
          "Bull and Terrier",
          "Bull Terrier (Miniature)",
          "Bull Terrier",
          "Bulldog",
          "Bullenbeisser",
          "Bullmastiff",
          "Bully Kutta",
          "Burgos Pointer",
          "Cairn Terrier",
          "Canaan Dog",
          "Canadian Eskimo Dog",
          "Cane Corso",
          "Cardigan Welsh Corgi",
          "Carolina Dog",
          "Carpathian Shepherd Dog",
          "Catahoula Cur",
          "Catalan Sheepdog",
          "Caucasian Shepherd Dog",
          "Cavalier King Charles Spaniel",
          "Central Asian Shepherd Dog",
          "Cesky Fousek",
          "Cesky Terrier",
          "Chesapeake Bay Retriever",
          "Chien Fran\xE7ais Blanc et Noir",
          "Chien Fran\xE7ais Blanc et Orange",
          "Chien Fran\xE7ais Tricolore",
          "Chien-gris",
          "Chihuahua",
          "Chilean Fox Terrier",
          "Chinese Chongqing Dog",
          "Chinese Crested Dog",
          "Chinese Imperial Dog",
          "Chinook",
          "Chippiparai",
          "Chow Chow",
          "Cierny Sery",
          "Cimarr\xF3n Uruguayo",
          "Cirneco dell'Etna",
          "Clumber Spaniel",
          "Combai",
          "Cordoba Fighting Dog",
          "Coton de Tulear",
          "Cretan Hound",
          "Croatian Sheepdog",
          "Cumberland Sheepdog",
          "Curly Coated Retriever",
          "Cursinu",
          "C\xE3o da Serra de Aires",
          "C\xE3o de Castro Laboreiro",
          "C\xE3o Fila de S\xE3o Miguel",
          "Dachshund",
          "Dalmatian",
          "Dandie Dinmont Terrier",
          "Danish Swedish Farmdog",
          "Deutsche Bracke",
          "Doberman Pinscher",
          "Dogo Argentino",
          "Dogo Cubano",
          "Dogue de Bordeaux",
          "Drentse Patrijshond",
          "Drever",
          "Dunker",
          "Dutch Shepherd Dog",
          "Dutch Smoushond",
          "East Siberian Laika",
          "East-European Shepherd",
          "Elo",
          "English Cocker Spaniel",
          "English Foxhound",
          "English Mastiff",
          "English Setter",
          "English Shepherd",
          "English Springer Spaniel",
          "English Toy Terrier (Black &amp; Tan)",
          "English Water Spaniel",
          "English White Terrier",
          "Entlebucher Mountain Dog",
          "Estonian Hound",
          "Estrela Mountain Dog",
          "Eurasier",
          "Field Spaniel",
          "Fila Brasileiro",
          "Finnish Hound",
          "Finnish Lapphund",
          "Finnish Spitz",
          "Flat-Coated Retriever",
          "Formosan Mountain Dog",
          "Fox Terrier (Smooth)",
          "French Bulldog",
          "French Spaniel",
          "Galgo Espa\xF1ol",
          "Gascon Saintongeois",
          "German Longhaired Pointer",
          "German Pinscher",
          "German Shepherd",
          "German Shorthaired Pointer",
          "German Spaniel",
          "German Spitz",
          "German Wirehaired Pointer",
          "Giant Schnauzer",
          "Glen of Imaal Terrier",
          "Golden Retriever",
          "Gordon Setter",
          "Gran Mast\xEDn de Bor\xEDnquen",
          "Grand Anglo-Fran\xE7ais Blanc et Noir",
          "Grand Anglo-Fran\xE7ais Blanc et Orange",
          "Grand Anglo-Fran\xE7ais Tricolore",
          "Grand Basset Griffon Vend\xE9en",
          "Grand Bleu de Gascogne",
          "Grand Griffon Vend\xE9en",
          "Great Dane",
          "Great Pyrenees",
          "Greater Swiss Mountain Dog",
          "Greek Harehound",
          "Greenland Dog",
          "Greyhound",
          "Griffon Bleu de Gascogne",
          "Griffon Bruxellois",
          "Griffon Fauve de Bretagne",
          "Griffon Nivernais",
          "Hamiltonst\xF6vare",
          "Hanover Hound",
          "Hare Indian Dog",
          "Harrier",
          "Havanese",
          "Hawaiian Poi Dog",
          "Himalayan Sheepdog",
          "Hokkaido",
          "Hovawart",
          "Huntaway",
          "Hygenhund",
          "Ibizan Hound",
          "Icelandic Sheepdog",
          "Indian pariah dog",
          "Indian Spitz",
          "Irish Red and White Setter",
          "Irish Setter",
          "Irish Terrier",
          "Irish Water Spaniel",
          "Irish Wolfhound",
          "Istrian Coarse-haired Hound",
          "Istrian Shorthaired Hound",
          "Italian Greyhound",
          "Jack Russell Terrier",
          "Jagdterrier",
          "J\xE4mthund",
          "Kai Ken",
          "Kaikadi",
          "Kanni",
          "Karelian Bear Dog",
          "Karst Shepherd",
          "Keeshond",
          "Kerry Beagle",
          "Kerry Blue Terrier",
          "King Charles Spaniel",
          "King Shepherd",
          "Kintamani",
          "Kishu",
          "Komondor",
          "Kooikerhondje",
          "Koolie",
          "Korean Jindo Dog",
          "Kromfohrl\xE4nder",
          "Kumaon Mastiff",
          "Kur\u012B",
          "Kuvasz",
          "Kyi-Leo",
          "Labrador Husky",
          "Labrador Retriever",
          "Lagotto Romagnolo",
          "Lakeland Terrier",
          "Lancashire Heeler",
          "Landseer",
          "Lapponian Herder",
          "Large M\xFCnsterl\xE4nder",
          "Leonberger",
          "Lhasa Apso",
          "Lithuanian Hound",
          "Longhaired Whippet",
          "L\xF6wchen",
          "Mahratta Greyhound",
          "Maltese",
          "Manchester Terrier",
          "Maremma Sheepdog",
          "McNab",
          "Mexican Hairless Dog",
          "Miniature American Shepherd",
          "Miniature Australian Shepherd",
          "Miniature Fox Terrier",
          "Miniature Pinscher",
          "Miniature Schnauzer",
          "Miniature Shar Pei",
          "Molossus",
          "Montenegrin Mountain Hound",
          "Moscow Watchdog",
          "Moscow Water Dog",
          "Mountain Cur",
          "Mucuchies",
          "Mudhol Hound",
          "Mudi",
          "Neapolitan Mastiff",
          "New Zealand Heading Dog",
          "Newfoundland",
          "Norfolk Spaniel",
          "Norfolk Terrier",
          "Norrbottenspets",
          "North Country Beagle",
          "Northern Inuit Dog",
          "Norwegian Buhund",
          "Norwegian Elkhound",
          "Norwegian Lundehund",
          "Norwich Terrier",
          "Old Croatian Sighthound",
          "Old Danish Pointer",
          "Old English Sheepdog",
          "Old English Terrier",
          "Old German Shepherd Dog",
          "Olde English Bulldogge",
          "Otterhound",
          "Pachon Navarro",
          "Paisley Terrier",
          "Pandikona",
          "Papillon",
          "Parson Russell Terrier",
          "Patterdale Terrier",
          "Pekingese",
          "Pembroke Welsh Corgi",
          "Perro de Presa Canario",
          "Perro de Presa Mallorquin",
          "Peruvian Hairless Dog",
          "Petit Basset Griffon Vend\xE9en",
          "Petit Bleu de Gascogne",
          "Phal\xE8ne",
          "Pharaoh Hound",
          "Phu Quoc ridgeback dog",
          "Picardy Spaniel",
          "Plott Hound",
          "Podenco Canario",
          "Pointer (dog breed)",
          "Polish Greyhound",
          "Polish Hound",
          "Polish Hunting Dog",
          "Polish Lowland Sheepdog",
          "Polish Tatra Sheepdog",
          "Pomeranian",
          "Pont-Audemer Spaniel",
          "Poodle",
          "Porcelaine",
          "Portuguese Podengo",
          "Portuguese Pointer",
          "Portuguese Water Dog",
          "Posavac Hound",
          "Pra\u017Esk\xFD Krysa\u0159\xEDk",
          "Pudelpointer",
          "Pug",
          "Puli",
          "Pumi",
          "Pungsan Dog",
          "Pyrenean Mastiff",
          "Pyrenean Shepherd",
          "Rafeiro do Alentejo",
          "Rajapalayam",
          "Rampur Greyhound",
          "Rastreador Brasileiro",
          "Rat Terrier",
          "Ratonero Bodeguero Andaluz",
          "Redbone Coonhound",
          "Rhodesian Ridgeback",
          "Rottweiler",
          "Rough Collie",
          "Russell Terrier",
          "Russian Spaniel",
          "Russian tracker",
          "Russo-European Laika",
          "Sabueso Espa\xF1ol",
          "Saint-Usuge Spaniel",
          "Sakhalin Husky",
          "Saluki",
          "Samoyed",
          "Sapsali",
          "Schapendoes",
          "Schillerst\xF6vare",
          "Schipperke",
          "Schweizer Laufhund",
          "Schweizerischer Niederlaufhund",
          "Scotch Collie",
          "Scottish Deerhound",
          "Scottish Terrier",
          "Sealyham Terrier",
          "Segugio Italiano",
          "Seppala Siberian Sleddog",
          "Serbian Hound",
          "Serbian Tricolour Hound",
          "Shar Pei",
          "Shetland Sheepdog",
          "Shiba Inu",
          "Shih Tzu",
          "Shikoku",
          "Shiloh Shepherd Dog",
          "Siberian Husky",
          "Silken Windhound",
          "Sinhala Hound",
          "Skye Terrier",
          "Sloughi",
          "Slovak Cuvac",
          "Slovakian Rough-haired Pointer",
          "Small Greek Domestic Dog",
          "Small M\xFCnsterl\xE4nder",
          "Smooth Collie",
          "South Russian Ovcharka",
          "Southern Hound",
          "Spanish Mastiff",
          "Spanish Water Dog",
          "Spinone Italiano",
          "Sporting Lucas Terrier",
          "St. Bernard",
          "St. John's water dog",
          "Stabyhoun",
          "Staffordshire Bull Terrier",
          "Standard Schnauzer",
          "Stephens Cur",
          "Styrian Coarse-haired Hound",
          "Sussex Spaniel",
          "Swedish Lapphund",
          "Swedish Vallhund",
          "Tahltan Bear Dog",
          "Taigan",
          "Talbot",
          "Tamaskan Dog",
          "Teddy Roosevelt Terrier",
          "Telomian",
          "Tenterfield Terrier",
          "Thai Bangkaew Dog",
          "Thai Ridgeback",
          "Tibetan Mastiff",
          "Tibetan Spaniel",
          "Tibetan Terrier",
          "Tornjak",
          "Tosa",
          "Toy Bulldog",
          "Toy Fox Terrier",
          "Toy Manchester Terrier",
          "Toy Trawler Spaniel",
          "Transylvanian Hound",
          "Treeing Cur",
          "Treeing Walker Coonhound",
          "Trigg Hound",
          "Tweed Water Spaniel",
          "Tyrolean Hound",
          "Vizsla",
          "Volpino Italiano",
          "Weimaraner",
          "Welsh Sheepdog",
          "Welsh Springer Spaniel",
          "Welsh Terrier",
          "West Highland White Terrier",
          "West Siberian Laika",
          "Westphalian Dachsbracke",
          "Wetterhoun",
          "Whippet",
          "White Shepherd",
          "Wire Fox Terrier",
          "Wirehaired Pointing Griffon",
          "Wirehaired Vizsla",
          "Yorkshire Terrier",
          "\u0160arplaninac"
        ]
      };
    },
    methods: {
      onSubmit() {
        alert("Sparar");
      },
      onCancel() {
        alert("Avbryt");
        this.valdRas = "";
        this.valtNamn = "";
      }
    }
  });
  var _hoisted_1 = { class: "col" };
  var _hoisted_2 = { class: "row" };
  var _hoisted_3 = { class: "col col--sm-12 col--md-4 col--lg-3" };
  var _hoisted_4 = {
    key: 0,
    class: "row"
  };
  var _hoisted_5 = { class: "button-group" };
  var _hoisted_6 = { class: "space" };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_text_field = (0, import_vue5.resolveComponent)("f-text-field");
    const _component_f_output_field = (0, import_vue5.resolveComponent)("f-output-field");
    const _component_f_validation_form = (0, import_vue5.resolveComponent)("f-validation-form");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
      import_vue5.Fragment,
      null,
      [
        (0, import_vue5.createVNode)(_component_f_validation_form, { onSubmit: _ctx.onSubmit }, {
          "error-message": (0, import_vue5.withCtx)(() => _cache[3] || (_cache[3] = [
            (0, import_vue5.createTextVNode)(" Oj, du har gl\xF6mt fylla i n\xE5got. G\xE5 till: ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createElementVNode)("div", _hoisted_1, [
              _cache[9] || (_cache[9] = (0, import_vue5.createElementVNode)(
                "div",
                { class: "row" },
                [
                  (0, import_vue5.createElementVNode)("h1", null, "Vi beh\xF6ver mer information om din hund")
                ],
                -1
                /* HOISTED */
              )),
              (0, import_vue5.createElementVNode)("div", _hoisted_2, [
                (0, import_vue5.createElementVNode)("div", _hoisted_3, [
                  (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
                    id: "breed",
                    modelValue: _ctx.valdRas,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.valdRas = $event),
                    maxlength: "100",
                    options: _ctx.raser
                  }, {
                    default: (0, import_vue5.withCtx)(() => _cache[4] || (_cache[4] = [
                      (0, import_vue5.createTextVNode)("V\xE4lj hundens ras")
                    ])),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue", "options"])), [
                    [
                      _directive_validation,
                      { allowList: { list: _ctx.raser } },
                      void 0,
                      {
                        required: true,
                        allowList: true
                      }
                    ]
                  ]),
                  (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
                    id: "name",
                    modelValue: _ctx.valtNamn,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.valtNamn = $event),
                    maxlength: "100",
                    options: _ctx.namn
                  }, {
                    default: (0, import_vue5.withCtx)(() => _cache[5] || (_cache[5] = [
                      (0, import_vue5.createTextVNode)("Fyll i hundens namn")
                    ])),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue", "options"])), [
                    [
                      _directive_validation,
                      void 0,
                      void 0,
                      { required: true }
                    ]
                  ]),
                  _ctx.valtNamn && _ctx.valdRas ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", _hoisted_4, [
                    _cache[7] || (_cache[7] = (0, import_vue5.createElementVNode)(
                      "h2",
                      null,
                      "St\xE4mmer informationen nedan?",
                      -1
                      /* HOISTED */
                    )),
                    (0, import_vue5.createVNode)(_component_f_output_field, {
                      id: "result",
                      for: "breed name"
                    }, {
                      label: (0, import_vue5.withCtx)(() => _cache[6] || (_cache[6] = [
                        (0, import_vue5.createTextVNode)(" Info om din hund ")
                      ])),
                      default: (0, import_vue5.withCtx)(() => [
                        (0, import_vue5.createTextVNode)(
                          " " + (0, import_vue5.toDisplayString)(`Hunden ${_ctx.valtNamn} \xE4r av rasen ${_ctx.valdRas}`),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])) : (0, import_vue5.createCommentVNode)("v-if", true)
                ])
              ]),
              (0, import_vue5.createElementVNode)("div", _hoisted_5, [
                _cache[8] || (_cache[8] = (0, import_vue5.createElementVNode)(
                  "button",
                  {
                    type: "submit",
                    class: "button button-group__item button--primary button--large"
                  },
                  " Spara ",
                  -1
                  /* HOISTED */
                )),
                (0, import_vue5.createElementVNode)("button", {
                  type: "button",
                  class: "button button-group__item button--secondary button--large",
                  onClick: _cache[2] || (_cache[2] = (...args) => _ctx.onCancel && _ctx.onCancel(...args))
                }, " Avbryt ")
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onSubmit"]),
        (0, import_vue5.createElementVNode)(
          "pre",
          _hoisted_6,
          (0, import_vue5.toDisplayString)({ valdRas: _ctx.valdRas, valtNamn: _ctx.valtNamn }),
          1
          /* TEXT */
        )
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#ComboboxExample"
  });
})();
