<script setup>
const myText = "24 december";
</script>

<template>
    <span>Julafton inträffar den <span v-format:text="myText" class="red"></span> varje år.</span>
</template>
<style>
.red {
    color: red;
}
</style>
