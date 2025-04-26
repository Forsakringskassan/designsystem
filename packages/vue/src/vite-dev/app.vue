<script setup lang="ts">
import { ref } from "vue";
import { FTextField } from "../components";

const namn = ref("World");
</script>

<template>
    <div class="container2">
        <div class="w-wizard">
            <div class="w-wizard-step">
                <div class="line-1"></div>
                <div class="foo">
                    <div class="icon2">1</div>
                    <div class="line-2"></div>
                </div>
                <div class="line-3"></div>
                <div class="step-count">Steg 1 av 3</div>
                <div class="title">Rubrik 1 Rubrik 1 Rubrik 1</div>
                <div class="content">
                    <p>Innehåll</p>
                    <p>Innehåll</p>
                    <p>Innehåll</p>
                    <p>Innehåll</p>
                    <p>Innehåll</p>
                    <p>Innehåll</p>
                </div>
            </div>
            <div class="w-wizard-step">
                <div class="line-1"></div>
                <div class="foo">
                    <div class="icon2">2</div>
                    <div class="line-2"></div>
                </div>
                <div class="line-3"></div>
                <div class="step-count">Steg 2 av 3</div>
                <div class="title">Rubrik 2 Rubrik 2 Rubrik 2 Rubrik 2</div>
                <div class="content">
                    <p>Innehåll</p>
                    <p>Innehåll</p>
                    <p>Innehåll</p>
                    <p>Innehåll</p>
                    <p>Innehåll</p>
                    <p>Innehåll</p>
                </div>
            </div>
            <div class="w-wizard-step">
                <div class="line-1"></div>
                <div class="foo">
                    <div class="icon2">3</div>
                    <div class="line-2"></div>
                </div>
                <div class="line-3"></div>
                <div class="step-count">Steg 3 av 3</div>
                <div class="title">Rubrik 3 Rubrik 3 Rubrik 3 Rubrik 3 Rubrik 3</div>
                <div class="content">
                    <p>Innehåll</p>
                    <p>Innehåll</p>
                    <p>Innehåll</p>
                    <p>Innehåll</p>
                    <p>Innehåll</p>
                    <p>Innehåll</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.container2 {
    background: cyan;
    padding: 3rem;
    max-width: 50%;
}

.w-wizard-step {
    display: grid;
    background: lightgreen;
    padding-left: 0.5lh;
    grid-template:
        "line-1 step-count" min-content
        "foo title" min-content
        "content content" 1fr
        / min-content 1fr;

    &:first-of-type {
        .line-1 {
            display: none;
        }
    }

    &:last-of-type {
        .line-2,
        .line-3 {
            display: none;
        }
    }

    @media (width >= 640px) {
        grid-template:
            "line-1 step-count" min-content
            "foo title" min-content
            "line-3 content" 1fr
            / min-content 1fr;
    }

    .icon2 {
        grid-area: icon;
        font-size: 1.125rem;
        border: 1px solid black;
        border-radius: 50%;
        width: 1lh;
        height: 1lh;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        left: -50%;
    }

    .line-1,
    .line-2,
    .line-3 {
        border-left: 3px solid hotpink;
    }

    .line-1 {
        grid-area: line-1;
        border-color: #ff0000;
    }

    .line-2 {
        grid-area: line-2;
        border-color: #ff0077;
    }

    .line-3 {
        grid-area: line-3;
        border-color: #ff00ff;
    }

    .foo {
        grid-area: foo;
        display: flex;
        flex-direction: column;

        .line-2 {
            flex-grow: 1;
        }
    }

    .step-count {
        grid-area: step-count;
    }

    .title {
        grid-area: title;

        font-size: 1.125rem;
        font-weight: 900;
    }

    .content {
        grid-area: content;
    }
}
</style>
