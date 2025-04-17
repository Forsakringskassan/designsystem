<script>
import { defineComponent } from "vue";
import { IAnimateExpand } from "@fkui/vue";

export default defineComponent({
    namne: "IAnimateExpandRecommended",
    components: { IAnimateExpand },
    data() {
        return {
            isExpanded: false,
            isAnimated: true,
            useVShow: false,
            hasOpacity: true,
            style: "height: 200px; background: hotpink",
            callbackInfo: "",
            contentDivInDOM: false,
        };
    },
    methods: {
        beforeAnimationCallback() {
            console.log("Before animation callback");
            this.callbackInfo = "Before animation callback";
        },
        afterAnimationCallback() {
            console.log("After animation callback");
            this.callbackInfo = "After animation callback";

            setTimeout(() => {
                this.contentDivInDOM = this.$el.contains(this.$refs["content-div"]);
            });
        },
    },
});
</script>

<template>
    <div>
        <button type="button" @click="isExpanded = !isExpanded">Öppna/stäng animering</button>
        <label><input v-model="isAnimated" type="checkbox" /> Animera</label>
        <label><input v-model="hasOpacity" type="checkbox" /> Opacitet</label>
        <label><input v-model="useVShow" type="checkbox" /> Use v-show instead of v-if</label>
        <select v-model="style" aria-label="Höjd">
            <option value="height: 200px; background: hotpink">200px höjd</option>
            <option value="height: 600px; background: cyan">600px höjd</option>
            <option value="height: 1200px; background: yellow">1200px höjd</option>
        </select>
        <pre>Callback: {{ callbackInfo }}</pre>
        <pre>Finns innehålls-div i DOM: {{ contentDivInDOM }}</pre>

        <i-animate-expand
            :expanded="isExpanded"
            :opacity="hasOpacity"
            :animate="isAnimated"
            :use-v-show="useVShow"
            :before-animation="beforeAnimationCallback"
            :after-animation="afterAnimationCallback"
        >
            <!-- [html-validate-disable-next no-inline-style] -->
            <div ref="content-div" :style="style">Ett animerat innehåll kan visas här.</div>
        </i-animate-expand>
    </div>
</template>

<style>
input,
select {
    margin-left: 20px;
}
</style>
