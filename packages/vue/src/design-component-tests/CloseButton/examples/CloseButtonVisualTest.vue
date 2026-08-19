<script setup lang="ts">
import { FIcon } from "@fkui/vue";
</script>

<template>
    <!-- [html-validate-disable-next no-inline-style] -->
    <div id="visual-wrapper" style="background-color: lightgray">
        <span>Size default</span>
        <div>
            <button class="close-button" type="button">
                <span> Stäng </span>
                <f-icon aria-hidden="true" class="button__icon" name="close" />
            </button>
        </div>

        <span>Size default, inverted</span>
        <div>
            <button class="close-button close-button--inverted" type="button">
                <span> Stäng </span>
                <f-icon aria-hidden="true" class="button__icon" name="close" />
            </button>
        </div>

        <span>Size small</span>
        <div>
            <button class="close-button close-button--small" type="button">
                <span> Stäng </span>
                <f-icon aria-hidden="true" class="button__icon" name="close" />
            </button>
        </div>

        <span>Size small, inverted</span>
        <div>
            <button class="close-button close-button--small close-button--inverted" type="button">
                <span> Stäng </span>
                <f-icon aria-hidden="true" class="button__icon" name="close" />
            </button>
        </div>
    </div>
</template>
