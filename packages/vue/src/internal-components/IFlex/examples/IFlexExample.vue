<script>
import { defineComponent } from "vue";
import { IFlex, IFlexItem, FIcon } from "@fkui/vue";

export default defineComponent({
    name: "IFlexExample",
    components: { FIcon, IFlex, IFlexItem },
});
</script>

<template>
    <div>
        <i-flex gap="1x">
            <i-flex-item shrink align="center">
                <f-icon name="bell" library="f"></f-icon>
            </i-flex-item>
            <i-flex-item grow>
                <h2>Rubrik med ikon</h2>
            </i-flex-item>
        </i-flex>
    </div>
</template>
