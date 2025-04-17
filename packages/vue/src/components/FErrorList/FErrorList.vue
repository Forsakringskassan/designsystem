<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { type ErrorItem } from "../../types";
import { FIcon } from "../FIcon";
import { hasSlot } from "../../utils";
import { IFlex, IFlexItem } from "../../internal-components/IFlex";
import { type BeforeNavigate } from "./BeforeNavigate";
import { focusError } from "./focus-error";

export default defineComponent({
    name: "FErrorList",
    components: { FIcon, IFlex, IFlexItem },
    props: {
        /**
         * List of errors of type `ErrorItem`.
         * If element id is unspecified, no link will be rendered.
         * If element with id don't exist on navigation, an exception is thrown.
         */
        items: {
            type: Array as PropType<ErrorItem[]>,
            required: true,
        },
        /**
         * Display bullets in list.
         */
        bullets: {
            type: Boolean,
            required: false,
            default: false,
        },
        /**
         * Optional callback for performing actions before navigation.
         */
        beforeNavigate: {
            type: Function as PropType<BeforeNavigate>,
            required: false,
            default(): BeforeNavigate {
                return () => {
                    /* do nothing */
                };
            },
        },
    },
    computed: {
        hasTitleSlot(): boolean {
            return hasSlot(this, "title");
        },
    },
    methods: {
        liClasses(errorItem: ErrorItem): string[] {
            const classes = [];
            if (!this.bullets && errorItem.id) {
                classes.push("error-list__link");
            }

            return classes;
        },
        async onClickItem(item: ErrorItem) {
            await this.beforeNavigate(item);
            focusError(item);
        },
    },
});
</script>

<template>
    <div class="error-list">
        <i-flex>
            <i-flex-item v-if="hasTitleSlot" shrink>
                <f-icon class="error-list__icon" name="error"></f-icon>
            </i-flex-item>
            <!-- use a space as separator to get same width FLabel which uses an actual space -->
            <i-flex-item v-if="hasTitleSlot" shrink>&nbsp;</i-flex-item>
            <i-flex-item grow>
                <div v-if="hasTitleSlot">
                    <!-- @slot Optional title shown above the errorlist. No icon is shown if no title is set -->
                    <slot name="title"></slot>
                </div>
                <ul class="error-list__list error-list--list-style-none">
                    <li v-for="item in items" :key="item.id" :class="liClasses(item)">
                        <a v-if="item.id" href="javascript:" @click.prevent="onClickItem(item)">
                            <template v-if="bullets">
                                <span class="error-list__bullet" aria-hidden="true"></span>
                                <span class="error-list__link">{{ item.title }}</span>
                            </template>
                            <template v-else>{{ item.title }}</template>
                        </a>
                        <template v-else>
                            <template v-if="bullets">
                                <span class="error-list__bullet" aria-hidden="true"></span>
                                <span>{{ item.title }}</span>
                            </template>
                            <template v-else>{{ item.title }}</template>
                        </template>
                    </li>
                </ul>
            </i-flex-item>
        </i-flex>
    </div>
</template>
