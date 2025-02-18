<script setup lang="ts">
import { FBadge } from "@fkui/vue";
</script>

<template>
    <div>
        <f-badge v-test="'my-badge-not-inverted'" :status="'info'" :inverted="false"> My Not Inverted Badge </f-badge>
    </div>
    <div>
        <f-badge v-test="'my-badge-inverted'" :status="'info'" :inverted="true"> My Inverted Badge </f-badge>
    </div>
</template>
