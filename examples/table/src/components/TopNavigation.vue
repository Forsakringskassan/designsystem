<script setup lang="ts"></script>

<template>
    <nav class="top-nav">
        <span class="test-label">⚠️ Endast för intern testning</span>
        <div class="nav-links">
            <router-link class="anchor anchor--block" :to="{ name: 'FTableNavigationExample' }"
                >Navigation</router-link
            >
            <router-link class="anchor anchor--block" :to="{ name: 'FTableSortFilterExample' }"
                >SortFilter</router-link
            >
            <router-link
                class="anchor anchor--block"
                :to="{ name: 'FTableSortFilterPaginationExample' }"
                >Pagination (SortFilter)</router-link
            >
            <router-link
                class="anchor anchor--block"
                :to="{ name: 'FTableDynamicContextmenuExample' }"
                >ContextMenu</router-link
            >
            <router-link class="anchor anchor--block" :to="{ name: 'FTableColumnLiveExample' }"
                >ColumnTypes</router-link
            >
            <router-link class="anchor anchor--block" :to="{ name: 'FTableCrudDatasetExample' }"
                >Crud</router-link
            >
            <router-link class="anchor anchor--block" :to="{ name: 'FTableInputFieldsExample' }"
                >InputField</router-link
            >
        </div>
    </nav>
</template>

<style scoped>
.top-nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: var(--fkds-color-header-background-primary);
    padding: 1rem;
}

.test-label {
    width: 100%;
    background: var(--fkds-color-background-secondary);
    border: 1px solid var(--fkds-color-border-primary);
    border-radius: 4px;
    color: var(--fkds-color-text-primary);
    font-weight: bold;
    text-align: center;
    white-space: nowrap;
}

.nav-links {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.top-nav .anchor {
    color: var(--fkds-color-text-inverted);
    text-decoration-color: var(--fkds-color-text-inverted);
}
</style>
