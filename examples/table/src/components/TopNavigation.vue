<script setup lang="ts"></script>

<template>
    <nav class="top-nav">
        <RouterLink to="/">Hem</RouterLink>
        <RouterLink to="/sorttable">SortFilterTable</RouterLink>
    </nav>
</template>

<style scoped>
.top-nav {
    display: flex;
    gap: 1rem;
    background: var(--fkds-color-header-background-primary);
    padding: 1rem;
}

.top-nav a {
    color: var(--fkds-color-text-inverted);
}
</style>
