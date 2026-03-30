<script setup lang="ts"></script>

<template>
    <nav class="top-nav">
        <RouterLink to="/">Navigation</RouterLink>
        <RouterLink to="/sort">SortFilter</RouterLink>
        <span class="test-label"> | Endast för testning</span>
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
.test-label {
    margin-left: auto;
    color: var(--fkds-color-text-inverted);
}
</style>
