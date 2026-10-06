<script setup lang="ts">
import { h, onMounted } from "vue";
import { type IconPackage } from "@fkui/icon-lib-default";
import { FIcon, FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";

interface IconEntry {
    id: string;
    namn: string;
    library: string;
}

function importDefault<T extends object>(m: T | { default: T }): T {
    return "default" in m ? m.default : m;
}

async function importIcons(): Promise<IconPackage> {
    return importDefault(await import(process.env.DOCS_ICON_LIB ?? "@fkui/icon-lib-default"));
}

function decamelize(value: string): string {
    return value.replaceAll(/([A-Z])/g, (_, ch: string) => `-${ch.toLowerCase()}`);
}

const iconsPromise = importIcons();
const rows = useDatasetRef<IconEntry>([]);
const columns = defineTableColumns<IconEntry>([
    {
        header: "Ikon",
        render(row) {
            return h("td", { class: "table-ng__cell table-ng__cell--static" }, [
                h(FIcon, { name: row.namn, library: row.library }),
            ]);
        },
    },
    { type: "text", header: "Ikonnamn", key: "namn" },
    { type: "text", header: "Ikon-bibliotek", key: "library" },
]);

onMounted(async () => {
    /*
        FKUI supports rendering of an icon package other than `@fkui/icon-lib-default`.
        The icon package must be based on `@fkui/icon-lib-builder`.

        Set env variable `DOCS_ICON_LIB` to desired icon package and make sure that the package is installed during build.
        This is typically done in your CI/CD setup.

        The imported icon package libraries are returned as:
        f
        fSocial
        fFiletypes
        ...
        But needs to be converted to the format of "f", "f-social", "f-filetypes".
    */
    const icons = await iconsPromise;
    rows.value = Object.entries(icons).flatMap(([name, entry]) => {
        const library = decamelize(name);
        return entry.metadata.map((icon) => ({
            id: icon.key,
            namn: icon.name,
            library,
        }));
    });
});
</script>

<template>
    <f-table :rows :columns striped>
        <template #caption>
            <span> Ikoner </span>
        </template>
    </f-table>
</template>
