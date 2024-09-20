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
    app.use(import_vue2.ErrorPlugin);
    app.use(import_vue2.ValidationPlugin);
    app.use(import_vue2.TestPlugin);
    app.use(import_vue2.TranslationPlugin);
    app.mount(selector);
    app.config.warnHandler = (msg, vm, trace) => {
      console.warn(`Warning:`, msg, trace);
      throw new Error(msg);
    };
  }

  // virtual-entry:./packages/vue/src/internal-components/IPopup/examples/IPopupPositioning.vue
  var import_vue3 = __require("vue");

  // packages/vue/src/internal-components/IPopup/IPopupUtils.ts
  function clamp(value, min, max) {
    return Math.max(Math.min(value, max), min);
  }
  function getCandidates(anchor, target, clippedArea, spacing, candidateOrder) {
    const dw = target.width - anchor.width;
    const a = {
      placement: "A" /* A */,
      x: anchor.x,
      y: anchor.y + anchor.height + spacing,
      width: target.width,
      height: target.height,
      direction: 1 /* Vertical */
    };
    const b = {
      placement: "B" /* B */,
      x: anchor.x - dw,
      y: anchor.y + anchor.height + spacing,
      width: target.width,
      height: target.height,
      direction: 1 /* Vertical */
    };
    const c = {
      placement: "C" /* C */,
      x: anchor.x,
      y: anchor.y - target.height - spacing,
      width: target.width,
      height: target.height,
      direction: 1 /* Vertical */
    };
    const d = {
      placement: "D" /* D */,
      x: anchor.x - dw,
      y: anchor.y - target.height - spacing,
      width: target.width,
      height: target.height,
      direction: 1 /* Vertical */
    };
    const e = {
      placement: "E" /* E */,
      x: anchor.x + anchor.width + spacing,
      y: anchor.y + anchor.height / 2 - target.height / 2,
      width: target.width,
      height: target.height,
      direction: 0 /* Horizontal */
    };
    const f = {
      placement: "F" /* F */,
      x: anchor.x - (target.width + spacing),
      y: anchor.y + anchor.height / 2 - target.height / 2,
      width: target.width,
      height: target.height,
      direction: 0 /* Horizontal */
    };
    const g = {
      placement: "G" /* G */,
      x: anchor.x + anchor.width + spacing,
      y: clippedArea.y + spacing,
      width: target.width,
      height: target.height,
      direction: 2 /* Both */
    };
    const h2 = {
      placement: "H" /* H */,
      x: anchor.x - (target.width + spacing),
      y: clippedArea.y + spacing,
      width: target.width,
      height: target.height,
      direction: 2 /* Both */
    };
    const i = {
      placement: "I" /* I */,
      x: clippedArea.x + (clippedArea.width - target.width) / 2,
      y: clippedArea.y + (clippedArea.height - target.height) / 2,
      width: target.width,
      height: target.height,
      direction: 3 /* None */
    };
    if (candidateOrder === "IPopupError" /* IPopupError */) {
      return [b, a, d, c, e, f, f, f, f];
    } else {
      return [a, b, c, d, e, f, g, h2, i];
    }
  }
  function isInside(outer, inner, spacing) {
    const isHorizontalDirection = inner.direction === 0 /* Horizontal */ || inner.direction === 2 /* Both */;
    const xSpacing = isHorizontalDirection ? spacing : 0;
    const isVerticalDirection = inner.direction === 1 /* Vertical */ || inner.direction === 2 /* Both */;
    const ySpacing = isVerticalDirection ? spacing : 0;
    const ax = [inner.x, inner.x + inner.width];
    const ay = [inner.y, inner.y + inner.height];
    const bx = [outer.x + xSpacing, outer.x + outer.width - xSpacing];
    const by = [outer.y + ySpacing, outer.y + outer.height - ySpacing];
    if (ax[0] < bx[0] || ax[1] > bx[1]) {
      return false;
    }
    if (ay[0] < by[0] || ay[1] > by[1]) {
      return false;
    }
    return true;
  }
  function isElementOptions(options) {
    return options.target instanceof HTMLElement;
  }
  function clipRect(src, clip) {
    if (!clip) {
      return src;
    }
    const x = Math.max(src.x, clip.x);
    const y = Math.max(src.y, clip.y);
    const width = Math.min(src.x + src.width, clip.x + clip.width) - x;
    const height = Math.min(src.y + src.height, clip.y + clip.height) - y;
    return { x, y, width, height };
  }
  function getAbsolutePosition(src) {
    if (!src) {
      return void 0;
    }
    const isRoot = src.isSameNode(document.documentElement);
    if (isRoot) {
      return {
        x: window.pageXOffset,
        y: window.pageYOffset,
        width: src.clientWidth,
        height: src.clientHeight
      };
    }
    const rect = src.getBoundingClientRect();
    return {
      x: Math.floor(rect.left + window.pageXOffset),
      y: Math.floor(rect.top + window.pageYOffset),
      width: Math.floor(rect.width),
      height: Math.floor(rect.height)
    };
  }
  function fitInsideArea(options) {
    if (isElementOptions(options)) {
      const {
        area: areaElement,
        anchor: anchorElement,
        target: targetElement,
        viewport: viewportElement,
        spacing: spacing2,
        candidateOrder
      } = options;
      const area2 = getAbsolutePosition(areaElement);
      const anchor2 = getAbsolutePosition(anchorElement);
      const target2 = getAbsolutePosition(targetElement);
      const viewport2 = getAbsolutePosition(viewportElement);
      const result = fitInsideArea({
        area: area2,
        target: target2,
        anchor: anchor2,
        viewport: viewport2,
        spacing: spacing2,
        candidateOrder
      });
      const offset = targetElement.offsetParent?.getBoundingClientRect();
      if (!offset) {
        return result;
      }
      return {
        ...result,
        x: result.x - (offset.left + window.pageXOffset),
        y: result.y - (offset.top + window.pageYOffset)
      };
    }
    const { anchor, target, area, viewport, spacing } = options;
    const clippedArea = clipRect(area, viewport);
    const candidates = getCandidates(
      anchor,
      target,
      clippedArea,
      spacing,
      options.candidateOrder
    );
    const index = candidates.findIndex(
      (it) => isInside(clippedArea, it, spacing)
    );
    if (index >= 0) {
      const match = candidates[index];
      return { x: match.x, y: match.y, placement: match.placement };
    }
    return {
      ...getFallbackPosition(anchor, target, clippedArea, spacing),
      placement: "Fallback" /* Fallback */
    };
  }
  function getFallbackPosition(anchor, target, clippedArea, spacing) {
    const x = anchor.x - (target.width + spacing);
    const y = anchor.y + anchor.height + spacing;
    if (x >= clippedArea.x) {
      return {
        x,
        y
      };
    } else {
      return {
        x: clippedArea.x + spacing,
        y
      };
    }
  }

  // virtual-entry:./packages/vue/src/internal-components/IPopup/examples/IPopupPositioning.vue
  var import_vue4 = __require("vue");
  var SPACING = 10;
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "IPopupPositioning",
    data() {
      return {
        constraint: "viewport",
        drag: null
      };
    },
    computed: {
      areaElement() {
        switch (this.constraint) {
          case "combo":
            return this.$refs.area;
          case "viewport":
            return document.body;
          case "container":
            return this.$refs.area;
          default:
            return void 0;
        }
      },
      viewportElement() {
        switch (this.constraint) {
          case "combo":
            return document.documentElement;
          case "viewport":
            return document.documentElement;
          case "container":
            return void 0;
          default:
            return void 0;
        }
      }
    },
    mounted() {
      document.addEventListener("mouseup", this.onMouseUp);
      document.addEventListener("mousemove", this.onMouseMove);
      this.$nextTick().then(() => {
        this.updatePosition();
      });
    },
    destroy() {
      document.removeEventListener("mouseup", this.onMouseUp);
      document.removeEventListener("mousemove", this.onMouseMove);
    },
    methods: {
      onChangeConstraint() {
        const { anchor: anchorElement } = this.$refs;
        anchorElement.style.top = "10px";
        anchorElement.style.left = "10px";
      },
      onMouseDown(event) {
        const { anchor: anchorElement } = this.$refs;
        const { clientX, clientY } = event;
        this.drag = [anchorElement.offsetLeft - clientX, anchorElement.offsetTop - clientY];
      },
      onMouseUp() {
        this.drag = null;
        this.updatePosition();
      },
      onMouseMove(event) {
        if (!this.drag) {
          return;
        }
        event.preventDefault();
        const { anchor: anchorElement, area: areaElement } = this.$refs;
        const { clientX, clientY } = event;
        const area = areaElement.getBoundingClientRect();
        const anchor = anchorElement.getBoundingClientRect();
        const left = clamp(
          clientX + this.drag[0],
          SPACING,
          area.width - anchor.width - SPACING - 2
        );
        const top = clamp(
          clientY + this.drag[1],
          SPACING,
          area.height - anchor.height - SPACING - 2
        );
        anchorElement.style.left = `${left}px`;
        anchorElement.style.top = `${top}px`;
        this.updatePosition();
      },
      updatePosition() {
        if (!this.drag) {
          return;
        }
        const { anchor, target } = this.$refs;
        const area = this.areaElement;
        const viewport = this.viewportElement;
        if (!anchor) {
          return;
        }
        const result = fitInsideArea({
          area,
          anchor,
          target,
          viewport,
          spacing: SPACING
        });
        if (result.placement === "Fallback" /* Fallback */) {
          target.classList.add("pos-target--inline");
          target.style.removeProperty("left");
          target.style.removeProperty("top");
        } else {
          target.classList.remove("pos-target--inline");
          target.style.left = `${result.x}px`;
          target.style.top = `${result.y}px`;
        }
        target.innerText = `Popup (${result.placement})`;
      }
    }
  });
  var _hoisted_1 = { class: "wrapper" };
  var _hoisted_2 = /* @__PURE__ */ (0, import_vue4.createElementVNode)(
    "label",
    null,
    " Begr\xE4nsa till: ",
    -1
    /* HOISTED */
  );
  var _hoisted_3 = /* @__PURE__ */ (0, import_vue4.createElementVNode)(
    "option",
    { value: "viewport" },
    "Viewport",
    -1
    /* HOISTED */
  );
  var _hoisted_4 = /* @__PURE__ */ (0, import_vue4.createElementVNode)(
    "option",
    { value: "container" },
    "Container",
    -1
    /* HOISTED */
  );
  var _hoisted_5 = /* @__PURE__ */ (0, import_vue4.createElementVNode)(
    "option",
    { value: "combo" },
    "Viewport + container",
    -1
    /* HOISTED */
  );
  var _hoisted_6 = /* @__PURE__ */ (0, import_vue4.createElementVNode)(
    "p",
    null,
    [
      /* @__PURE__ */ (0, import_vue4.createTextVNode)("Dra "),
      /* @__PURE__ */ (0, import_vue4.createElementVNode)("i", null, "ankaret"),
      /* @__PURE__ */ (0, import_vue4.createTextVNode)(" med hj\xE4lp av musen.")
    ],
    -1
    /* HOISTED */
  );
  var _hoisted_7 = {
    ref: "area",
    class: "area"
  };
  var _hoisted_8 = {
    ref: "target",
    class: "pos-target"
  };
  function render(_ctx, _cache) {
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("div", _hoisted_1, [
      _hoisted_2,
      (0, import_vue4.createTextVNode)(),
      (0, import_vue4.withDirectives)((0, import_vue4.createElementVNode)(
        "select",
        {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.constraint = $event),
          onChange: _cache[1] || (_cache[1] = (...args) => _ctx.onChangeConstraint && _ctx.onChangeConstraint(...args))
        },
        [
          _hoisted_3,
          (0, import_vue4.createTextVNode)(),
          _hoisted_4,
          (0, import_vue4.createTextVNode)(),
          _hoisted_5
        ],
        544
        /* NEED_HYDRATION, NEED_PATCH */
      ), [
        [import_vue4.vModelSelect, _ctx.constraint]
      ]),
      (0, import_vue4.createTextVNode)(),
      _hoisted_6,
      (0, import_vue4.createTextVNode)(),
      (0, import_vue4.createElementVNode)(
        "div",
        _hoisted_7,
        [
          (0, import_vue4.createElementVNode)(
            "div",
            {
              ref: "anchor",
              class: "pos-anchor",
              onMousedown: _cache[2] || (_cache[2] = (...args) => _ctx.onMouseDown && _ctx.onMouseDown(...args))
            },
            "Ankare",
            544
            /* NEED_HYDRATION, NEED_PATCH */
          ),
          (0, import_vue4.createTextVNode)(),
          (0, import_vue4.createElementVNode)(
            "div",
            _hoisted_8,
            "Popup",
            512
            /* NEED_PATCH */
          )
        ],
        512
        /* NEED_PATCH */
      )
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#IPopupPositioning"
  });
})();
