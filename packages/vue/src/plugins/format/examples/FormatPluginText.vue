<script setup>
const myText = "24 december";
</script>

<template>
    <span>Julafton inträffar den <span v-format:text="myText"></span> varje år.</span>
    <br />
    <span
        >Julafton inträffar den
        <strong v-format:text><span class="red">24 december</span></strong>
        varje år.
    </span>
</template>
<style>
.red {
    color: red;
}
</style>
