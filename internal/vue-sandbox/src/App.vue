<script setup lang="ts">
import { FPageExpandablePanel, FPageLayout } from "@fkui/vue";
</script>

<template>
    <f-page-layout layout="three-column">
        <template #header> [header] </template>
        <template #left>
            <f-page-expandable-panel>
                <template #header> [panel header] </template>
                <template #default>
                    <p>[panel content]</p>
                    <p>[panel content]</p>
                    <p>[panel content]</p>
                </template>
                <template #footer> [panel footer] </template>
            </f-page-expandable-panel>
        </template>
        <template #right>
            <f-page-expandable-panel>
                <template #header> [panel header] </template>
                <template #default>
                    <p>[panel content]</p>
                    <p>[panel content]</p>
                    <p>[panel content]</p>
                </template>
                <template #footer> [panel footer] </template>
            </f-page-expandable-panel>
        </template>
        <template #content>
            <!-- [html-validate-disable-next no-inline-style -- for testing only]-->
            <div style="padding: 0.5rem">
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum mauris non urna faucibus
                    porta. Aenean euismod rutrum finibus. Morbi ultricies, augue ut volutpat dictum, nisi quam consequat
                    mauris, lacinia aliquam lacus ante et arcu. In non justo dui. Ut dui leo, commodo ut odio at,
                    ultrices imperdiet enim. Fusce dolor lacus, gravida eget dui sed, dictum elementum magna. Quisque
                    blandit egestas ultricies. Cras ultricies eget eros ultrices blandit. Interdum et malesuada fames ac
                    ante ipsum primis in faucibus. Praesent in justo ultrices nunc efficitur mattis at vel lorem.
                    Maecenas rhoncus felis tincidunt dui faucibus, nec rhoncus tellus mollis. Phasellus vitae magna
                    turpis. Etiam in mattis mi. Duis at justo finibus, tristique lacus nec, lobortis dui.
                </p>
                <p>
                    Ut placerat consectetur pretium. Proin luctus neque vitae consequat pellentesque. Aliquam arcu arcu,
                    auctor ac ipsum aliquet, bibendum pretium est. Integer sit amet mattis dolor, quis volutpat justo.
                    Curabitur eu tempus nibh. Aliquam erat volutpat. Phasellus tincidunt suscipit nulla a viverra. Cras
                    nec felis ut dolor malesuada congue vitae a neque.
                </p>
                <p>
                    Vivamus tortor quam, dignissim at aliquet ut, tristique id orci. Nulla fringilla nulla est, quis
                    tempor risus fermentum non. Ut id ullamcorper tellus. Donec lacinia condimentum neque, eget varius
                    mi convallis vitae. Nullam ante turpis, egestas ac nibh ut, pretium rutrum metus. Aenean non tellus
                    nulla. Duis ornare tempor tristique. Etiam tempus nec nisl quis varius. Pellentesque lacinia a
                    sapien quis ultricies.
                </p>
                <p>
                    Donec ut egestas dui. Donec purus nulla, aliquam sed auctor vitae, porta non quam. Nam eros arcu,
                    tempus a nisi ac, scelerisque cursus diam. Mauris sodales magna at diam semper efficitur. Ut
                    hendrerit urna vitae massa bibendum pretium. Proin bibendum tortor in nulla maximus, eget laoreet
                    ipsum ornare. Mauris rutrum massa vel enim imperdiet consequat. Phasellus convallis nunc est, vel
                    tristique mi sollicitudin sit amet. Aliquam auctor id metus nec interdum. Nam eget sem sed nunc
                    egestas pretium.
                </p>
                <p>
                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce vitae quam sapien. Etiam gravida
                    accumsan enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus. In lobortis lobortis pharetra. Curabitur diam sem, posuere nec iaculis vel, convallis sed
                    augue. Etiam vel urna id lectus lacinia volutpat. Phasellus nec bibendum ex. Nullam magna nibh,
                    ultrices sit amet felis fringilla, iaculis ultricies justo. Nulla viverra aliquet turpis, quis
                    hendrerit sapien elementum at. Nunc bibendum in nisl sed blandit. Integer tincidunt augue nec arcu
                    lacinia tristique. Aenean id mauris venenatis, blandit ligula a, consequat ante. Fusce aliquam mi
                    sed rutrum posuere. Morbi congue lorem est, elementum suscipit mi ullamcorper vitae. Quisque non
                    iaculis leo.
                </p>
            </div>
        </template>
        <template #footer> [footer] </template>
    </f-page-layout>
</template>

<style>
body {
    margin: 0;
    padding: 0;
}
</style>
