<script lang="ts">
import { defineComponent } from "vue";
import { IFlex, IFlexItem } from "../../internal-components/IFlex";
import { getElementFromVueRef } from "../../utils";
import { FIcon } from "../FIcon";

const EVENTS = ["online", "offline"];

export default defineComponent({
    name: "FOffline",
    components: {
        FIcon,
        IFlex,
        IFlexItem,
    },
    data() {
        return {
            isOnline: navigator.onLine || false,
            role: "none",
            shouldNotRead: true,
        };
    },
    created() {
        EVENTS.forEach((event) => {
            /* eslint-disable-next-line @typescript-eslint/unbound-method -- technical debt */
            window.addEventListener(event, this.updateOnlineStatus);
        });
    },
    beforeUnmount() {
        EVENTS.forEach((event) => {
            /* eslint-disable-next-line @typescript-eslint/unbound-method -- technical debt */
            window.removeEventListener(event, this.updateOnlineStatus);
        });
    },
    mounted() {
        document.body.prepend(getElementFromVueRef(this.$refs.offline));
    },
    methods: {
        updateOnlineStatus(event: Event) {
            switch (event.type) {
                case "online":
                    this.shouldNotRead = false;
                    this.isOnline = true;
                    break;
                case "offline":
                    this.shouldNotRead = true;
                    this.isOnline = false;
                    break;
                /* eslint-disable-next-line sonarjs/no-duplicated-branches -- technical debt */
                default:
                    this.shouldNotRead = true;
                    this.isOnline = false;
                    break;
            }
            this.role = "alert";
        },
    },
});
</script>

<template>
    <div ref="offline" class="offline__wrapper" :role>
        <div v-if="!isOnline" class="offline">
            <i-flex gap="2x">
                <i-flex-item class="offline__icon" shrink align="center">
                    <span class="icon-stack icon-stack--error">
                        <f-icon name="triangle"></f-icon>
                        <f-icon name="alert"></f-icon>
                    </span>
                </i-flex-item>

                <i-flex-item class="offline_content" grow align="center">
                    <p class="offline__content">
                        <!-- @slot Slot for customizing text message. -->
                        <slot> Det verkar som att du inte har någon internetuppkoppling just nu </slot>
                    </p>
                </i-flex-item>
            </i-flex>
        </div>
        <span v-show="isOnline" class="sr-only" :aria-hidden="shouldNotRead ? 'true' : undefined">
            Din internetuppkoppling fungerar igen
        </span>
    </div>
</template>
