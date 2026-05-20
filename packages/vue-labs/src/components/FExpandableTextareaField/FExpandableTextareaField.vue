<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { FTextareaField } from "@fkui/vue";

export default defineComponent({
    name: "FExpandableTextareaField",
    extends: FTextareaField,
    emits: ["input", "update:modelValue"],
    data(): {
        animationFrameId: number | undefined;
        observedWidth: number | undefined;
        resizeHandler: (() => void) | undefined;
        resizeObserver: ResizeObserver | undefined;
    } {
        return {
            animationFrameId: undefined,
            observedWidth: undefined,
            resizeHandler: undefined,
            resizeObserver: undefined,
        };
    },
    computed: {
        attrs(): Record<string, unknown> {
            return {
                rows: 1,
                ...this.$attrs,
                value: this.modelValue,
                maxlength: this.maxlength,
            };
        },
        textareaClass(): string[] {
            return ["textarea-field__textarea", "textarea-field__resize--none", "expandable-textarea-field__textarea"];
        },
    },
    mounted() {
        this.scheduleResize({ repeat: 2 });
        this.observeTextareaResize();
    },
    updated() {
        this.scheduleResize();
    },
    beforeUnmount() {
        if (this.animationFrameId) {
            window.cancelAnimationFrame(this.animationFrameId);
        }
        if (this.resizeHandler) {
            window.removeEventListener("resize", this.resizeHandler);
        }
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    },
    methods: {
        onInput(event: Event): void {
            if (event.target instanceof HTMLTextAreaElement) {
                this.resizeTextarea();
                this.$emit("update:modelValue", event.target.value);
                this.$emit("input", event.target.value);
            }
        },
        scheduleResize(options: { repeat?: number } = {}): void {
            const repeat = options.repeat ?? 0;

            if (this.animationFrameId) {
                window.cancelAnimationFrame(this.animationFrameId);
            }

            this.animationFrameId = window.requestAnimationFrame(() => {
                this.animationFrameId = undefined;
                this.resizeTextarea();

                if (repeat > 0) {
                    this.scheduleResize({ repeat: repeat - 1 });
                }
            });
        },
        resizeTextarea(): void {
            const textarea = this.$el.querySelector("textarea") as HTMLTextAreaElement | null;

            if (!textarea) {
                return;
            }

            const style = window.getComputedStyle(textarea);
            const borderHeight =
                (Number.parseFloat(style.borderTopWidth) || 0) + (Number.parseFloat(style.borderBottomWidth) || 0);

            textarea.style.height = "auto";
            textarea.style.overflowY = "hidden";
            textarea.style.height = `${textarea.scrollHeight + borderHeight}px`;
        },
        observeTextareaResize(): void {
            const textarea = this.$el.querySelector("textarea") as HTMLTextAreaElement | null;

            if (!textarea) {
                return;
            }

            this.observedWidth = textarea.getBoundingClientRect().width;

            if (typeof ResizeObserver === "undefined") {
                this.resizeHandler = () => {
                    this.scheduleResize({ repeat: 2 });
                };
                window.addEventListener("resize", this.resizeHandler);
                return;
            }

            this.resizeObserver = new ResizeObserver(() => {
                const currentWidth = textarea.getBoundingClientRect().width;

                if (currentWidth === this.observedWidth) {
                    return;
                }

                this.observedWidth = currentWidth;
                this.scheduleResize({ repeat: 2 });
            });
            this.resizeObserver.observe(textarea);
        },
    },
});
</script>
