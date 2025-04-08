<script>
import { defineComponent } from "vue";
import { FPageHeader } from "@fkui/vue";

export default defineComponent({
    name: "FPageHeaderCustomLogo",
    components: { FPageHeader },
});
</script>

<template>
    <f-page-header>
        Exempelapplikation
        <template #right> Namn Namnsson </template>
        <template #logo>
            <span class="my-own-logos" aria-label="Annan logotyp" role="img"> </span>
        </template>
    </f-page-header>
</template>

<style>
.my-own-logos {
    display: inline-block;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-position: center;
    padding: 0.8rem;
    min-width: 12.6rem;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='39'><rect fill='lightgrey' x='0' y='0' width='100%' height='100%'/></svg>");
    border: 2px solid yellow;
}
@media only screen and (max-width: 639px) {
    .my-own-logos {
        min-width: 0.8rem;
        width: 0.8rem;
        padding: 0.8rem;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='134' height='150'><rect fill='grey' x='0' y='0' width='100%' height='100%'/></svg>");
        border: 2px solid red;
    }
}
</style>
