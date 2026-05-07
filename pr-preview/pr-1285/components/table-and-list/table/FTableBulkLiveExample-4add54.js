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

// virtual-entry:virtual:packages/vue/src/components/FTable/docs/FTableBulkLiveExample.vue:FTableBulkLiveExample-4add54.js
import { defineComponent as _defineComponent } from "vue";
import { computed, ref, watch } from "vue";
import {
  FButton,
  FCheckboxField,
  FPaginateDataset,
  FPaginator,
  FSortFilterDataset,
  FTable,
  defineTableColumns,
  removeDatasetRows,
  useDatasetRef,
  useModal
} from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var actionsTemplate = (
  /* HTML */
  `
    <div class="button-group">
        <f-button variant="secondary" @click="onRemoveSelectedRows">Ta bort valda frukt(er)</f-button>
        <f-button variant="secondary" @click="onRestoreRows">\xC5terst\xE4ll</f-button>
    </div>
`
);
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FTableBulkLiveExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const data = [
      {
        namn: "Apelsin",
        land: "Spanien"
      },
      {
        namn: "Banan",
        land: "Columbia"
      },
      {
        namn: "\xC4pple",
        land: "Sverige"
      },
      {
        namn: "P\xE4ron",
        land: "Italien"
      }
    ];
    const columns = defineTableColumns([
      {
        type: "text",
        header: "Frukt",
        key: "namn"
      },
      {
        type: "text",
        header: "Land",
        key: "land"
      }
    ]);
    const sortableAttributes = { namn: "Frukt", land: "Land" };
    const itemsPerPage = ref(3);
    const rows = useDatasetRef([...data]);
    const selectedRows = ref([]);
    const useSortFilter = ref(false);
    const usePagination = ref(false);
    const components = {
      FTable,
      FSortFilterDataset,
      FPaginateDataset,
      FPaginator,
      FButton
    };
    const livedata = {
      rows,
      columns,
      sortableAttributes,
      itemsPerPage,
      selectedRows
    };
    const { confirmModal } = useModal();
    const livemethods = {
      async onRemoveSelectedRows() {
        if (selectedRows.value.length === 0) {
          return;
        }
        const confirmed = await confirmModal({
          heading: "Ta bort frukt(er)",
          content: "\xC4r du s\xE4ker att du vill ta bort valda frukt(er)?",
          confirm: "Ja, ta bort",
          dismiss: "Nej, beh\xE5ll"
        });
        if (confirmed) {
          removeDatasetRows(rows, selectedRows);
        }
      },
      onRestoreRows() {
        rows.value = [...data];
      }
    };
    function tableTemplate(rowsRef) {
      const rowsTemplate = rowsRef ? `:rows="${rowsRef}"` : `:rows`;
      return (
        /* HTML */
        `<f-table
        ${rowsTemplate}
        :columns
        selectable="multi"
        v-model:selected-rows="selectedRows"
    ></f-table>`
      );
    }
    function sortFilterTemplate() {
      return (
        /* HTML */
        `
        <f-sort-filter-dataset :data="rows" :sortable-attributes>
            <template #default="{ sortFilterResult }"> ${tableTemplate("sortFilterResult")} </template>
        </f-sort-filter-dataset>
    `
      );
    }
    function paginationTemplate(itemsRef) {
      const itemsTemplate = itemsRef ? `:items="${itemsRef}"` : `:items="rows"`;
      return (
        /* HTML */
        `
        <f-paginate-dataset ${itemsTemplate} :items-per-page>
            <template #default="{ items: currentPageItems }">
                ${tableTemplate("currentPageItems")}
                <f-paginator />
            </template>
        </f-paginate-dataset>
    `
      );
    }
    function sortFilterPaginationTemplate() {
      return (
        /* HTML */
        `
        <f-sort-filter-dataset :data="rows" :sortable-attributes>
            <template #default="{ sortFilterResult }"> ${paginationTemplate("sortFilterResult")} </template>
        </f-sort-filter-dataset>
    `
      );
    }
    const template = computed(() => {
      let resolvedTemplate;
      if (useSortFilter.value) {
        if (usePagination.value) {
          resolvedTemplate = sortFilterPaginationTemplate();
        } else {
          resolvedTemplate = sortFilterTemplate();
        }
      } else if (usePagination.value) {
        resolvedTemplate = paginationTemplate();
      } else {
        resolvedTemplate = tableTemplate();
      }
      return [resolvedTemplate, actionsTemplate].join("\n");
    });
    watch(template, () => {
      rows.value = [...data];
    });
    const __returned__ = { data, columns, sortableAttributes, itemsPerPage, rows, selectedRows, useSortFilter, usePagination, components, livedata, confirmModal, livemethods, actionsTemplate, tableTemplate, sortFilterTemplate, paginationTemplate, sortFilterPaginationTemplate, template, get FCheckboxField() {
      return FCheckboxField;
    }, get LiveExample() {
      return LiveExample;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["LiveExample"], {
    components: $setup.components,
    template: $setup.template,
    livedata: $setup.livedata,
    livemethods: $setup.livemethods
  }, {
    default: _withCtx(() => [
      _createVNode($setup["FCheckboxField"], {
        modelValue: $setup.useSortFilter,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.useSortFilter = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[2] || (_cache[2] = [
          _createTextVNode(
            " Datam\xE4ngdsortering ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode($setup["FCheckboxField"], {
        modelValue: $setup.usePagination,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.usePagination = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[3] || (_cache[3] = [
          _createTextVNode(
            " Paginering ",
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
  selector: "#example-4add54"
});
export {
  render
};
