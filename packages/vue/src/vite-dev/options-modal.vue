<template>
    <f-confirm-modal is-open>
        <template #content>
            <p>{{ $t('asdf', 'default text') }}</p>
        </template>
    </f-confirm-modal>
</template>

<script lang="ts">
import { FConfirmModal } from ".."

export default {
    components: { FConfirmModal },
}
</script>
