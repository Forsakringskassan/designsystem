<script setup lang="ts">
import { computed, ref } from "vue";
import {
    type TableColumn,
    FSelectField,
    FTable,
    defineTableColumns,
    useDatasetRef,
} from "@fkui/vue";

type Status = "Utkast" | "Godkänd";
type Permission = "Läs" | "Redigera" | "Admin";

interface Row {
    id: string;
    name: string;
    status: Status;
}

interface ActionConfig {
    label: string | ((row: Row) => string);
    icon?: string;
    statuses: readonly Status[];
    permissions: readonly Permission[];
    onClick(row: Row): void;
}

const statuses: Status[] = ["Utkast", "Godkänd"];
const permission = ref<Permission>("Redigera");

const actionConfig: ActionConfig[] = [
    {
        label(row: Row) {
            return row.status === "Utkast" ? "Visa utkast" : "Visa beslut";
        },
        icon: "search",
        statuses: ["Utkast", "Godkänd"],
        permissions: ["Läs", "Redigera", "Admin"],
        onClick(row) {
            const message =
                row.status === "Utkast"
                    ? `Visa utkast för ${row.name}`
                    : `Visa beslut för ${row.name}`;
            window.alert(message);
        },
    },
    {
        label: "Skicka in",
        icon: "pen",
        statuses: ["Utkast"],
        permissions: ["Redigera", "Admin"],
        onClick(row) {
            window.alert(`Skicka in ${row.name}`);
        },
    },
    {
        label: "Redigera",
        icon: "pen",
        statuses: ["Utkast"],
        permissions: ["Redigera", "Admin"],
        onClick(row) {
            window.alert(`Redigera ${row.name}`);
        },
    },
    {
        label: "Ta bort",
        icon: "trashcan",
        statuses: ["Utkast", "Godkänd"],
        permissions: ["Admin"],
        onClick(row) {
            window.alert(`Ta bort ${row.name}`);
        },
    },
];

const rows = useDatasetRef<Row>([
    {
        id: "1",
        name: "Exampel A",
        status: "Godkänd",
    },
    {
        id: "2",
        name: "Exampel B",
        status: "Godkänd",
    },
    {
        id: "3",
        name: "Exampel C",
        status: "Utkast",
    },
]);

const columns = computed<Array<TableColumn<Row>>>(() =>
    defineTableColumns<Row>([
        {
            type: "text",
            header: "Name",
            key: "name",
        },
        {
            type: "select",
            header: "Status",
            key: "status",
            options: statuses,
            label(row) {
                return `Välj status för ${row.name}`;
            },
        },
        {
            type: "menu",
            header: "Åtgärd",
            text(row) {
                return `Visa åtgärder för rad ${row.id}`;
            },
            actions(row) {
                return actionConfig
                    .filter((action) => isForStatus(action, row))
                    .filter((action) => isAllowed(action))
                    .map((action) => ({
                        label: action.label,
                        icon: action.icon,
                        onClick() {
                            action.onClick(row);
                        },
                    }));
            },
        },
    ]),
);

function isForStatus(action: ActionConfig, row: Row): boolean {
    return action.statuses.includes(row.status);
}

function isAllowed(action: ActionConfig): boolean {
    return action.permissions.includes(permission.value);
}
</script>

<template>
    <h2>Dynamisk kontextmeny</h2>
    <p>
        I detta exempel visas hur åtgärder i en kontextmeny kan anpassas per rad beroende på status
        och behörighet.
    </p>
    <ul>
        <li>Ändra status i tabellen för att se hur tillgängliga åtgärder uppdateras.</li>
        <li>Byt behörighet under tabellen för att visa eller dölja olika åtgärder.</li>
        <li>Vissa åtgärder använder dynamiska etiketter beroende på radens innehåll.</li>
        <li>Samma menykolumn kan därför visa olika alternativ för olika saker.</li>
    </ul>

    <f-table :rows :columns />

    <f-select-field v-model="permission">
        <template #label>Behörighet</template>
        <option value="Läs">Läs</option>
        <option value="Redigera">Redigera</option>
        <option value="Admin">Admin</option>
    </f-select-field>
</template>
