<script setup lang="ts">
import { useTranslate, FConfirmModal } from "..";

const $t = useTranslate();
</script>

<template>
    <f-confirm-modal is-open>
        <template #content>
            <p>{{ $t('asdf', 'default text') }}</p>
        </template>
    </f-confirm-modal>
</template>
