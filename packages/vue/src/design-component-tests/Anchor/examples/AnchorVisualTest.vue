<script setup lang="ts">
import { computed } from "vue";
import { FIcon } from "@fkui/vue";

const { discrete } = defineProps<{ discrete: boolean }>();

const discreteClass = computed(() => (discrete ? "anchor--discrete" : undefined));
</script>

<template>
    <div id="visual-wrapper">
        <div>
            <a class="anchor anchor--block" :class="discreteClass" href="#"> Anchor block </a>
        </div>
        <br />
        <div>
            <a class="anchor anchor--block" :class="discreteClass" href="#">
                <f-icon name="pdf"></f-icon> Anchor block
            </a>
        </div>
        <br />
        <div>
            <a class="anchor anchor--block" :class="discreteClass" href="#">
                Anchor block <f-icon name="new-window"></f-icon>
            </a>
        </div>
        <br />
        <div>
            <a class="anchor anchor--block" :class="discreteClass" href="#">
                Anchor block with long text that will line break.
            </a>
        </div>
        <br />
        <p>
            Paragraph with anchor. Lorem
            <a class="anchor" :class="discreteClass" href="#">ipsum dolor sit</a> amet, consectetur
            elit.
        </p>
    </div>
</template>
