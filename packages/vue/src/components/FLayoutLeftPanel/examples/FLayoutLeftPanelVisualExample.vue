<script setup lang="ts">
import { FLayoutApplicationTemplate, FLayoutLeftPanel } from "@fkui/vue";
</script>

<template>
    <f-layout-application-template>
        <template #header>
            <!-- [html-validate-disable-next no-inline-style] -->
            <div style="background-color: green; color: white"><a href="#">[sidhuvud]</a></div>
        </template>

        <template #top-navigation>
            <!-- [html-validate-disable-next no-inline-style] -->
            <div style="background-color: lightgray"><a href="#">[toppnavigering]</a></div>
        </template>

        <f-layout-left-panel>
            <template #heading>
                <h3>Header</h3>
            </template>

            <template #content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </template>

            <template #default>
                <div class="container-fluid">
                    <h1>Header</h1>
                    <p>Lorem ipsum.</p>
                </div>
            </template>
        </f-layout-left-panel>

        <template #footer>
            <!-- [html-validate-disable-next no-inline-style] -->
            <div style="background-color: green; color: white; text-align: center">
                <a href="#">[sidfot]</a>
            </div>
        </template>
    </f-layout-application-template>
</template>
