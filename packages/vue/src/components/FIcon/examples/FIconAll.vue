<script lang="ts">
import { defineComponent } from "vue";
import { type IconPackage } from "@fkui/icon-lib-default";
import { FDataTable, FTableColumn, FIcon } from "@fkui/vue";

interface IconEntry {
    id: string;
    namn: string;
    library: string;
}

function importDefault<T extends object>(m: { default: T } | T): T {
    return "default" in m ? m.default : m;
}

async function importIcons(): Promise<IconPackage> {
    /* @ts-expect-error technical debt: the module target supports this in practice but it seems to pick up the wrong config, need to investigate further */
    return importDefault(await import(process.env.DOCS_ICON_LIB)); // eslint-disable-line no-undef -- for similar reasons, this script is primarly for browser but `process.env` will be available during compilation
}

function decamelize(value: string): string {
    return value.replace(/([A-Z])/g, (_, ch) => `-${ch.toLowerCase()}`);
}

const iconsPromise = importIcons();

export default defineComponent({
    name: "FIconAll",
    components: { FDataTable, FTableColumn, FIcon },
    data() {
        return {
            allIcons: [] as IconEntry[],
        };
    },
    async mounted() {
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
        this.allIcons = Object.entries(icons).flatMap(([name, entry]) => {
            const library = decamelize(name);
            return entry.metadata.map((icon) => ({
                id: icon.key,
                namn: icon.name,
                library,
            }));
        });
    },
});
</script>

<template>
    <f-data-table :rows="allIcons" :striped="true" key-attribute="id">
        <template #caption>
            <span> Ikoner </span>
        </template>
        <template #default="{ row }">
            <f-table-column title="Ikon" type="text">
                <f-icon :name="row.namn" :library="row.library"></f-icon>
            </f-table-column>
            <f-table-column title="Ikonnamn" type="text">
                {{ row.namn }}
            </f-table-column>
            <f-table-column title="Ikon-bibliotek" type="text">
                {{ row.library }}
            </f-table-column>
        </template>
    </f-data-table>
</template>
