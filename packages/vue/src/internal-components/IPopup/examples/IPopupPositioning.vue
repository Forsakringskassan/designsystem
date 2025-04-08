<script>
import { defineComponent } from "vue";
import { fitInsideArea, clamp, Placement } from "../IPopupUtils";

const SPACING = 10;

export default defineComponent({
    name: "IPopupPositioning",
    data() {
        return {
            constraint: "viewport",
            drag: null,
        };
    },
    computed: {
        areaElement() {
            switch (this.constraint) {
                case "combo":
                    return this.$refs.area;
                case "viewport":
                    return document.body;
                case "container":
                    return this.$refs.area;
                default:
                    return undefined;
            }
        },
        viewportElement() {
            switch (this.constraint) {
                case "combo":
                    return document.documentElement;
                case "viewport":
                    return document.documentElement;
                case "container":
                    return undefined;
                default:
                    return undefined;
            }
        },
    },
    mounted() {
        document.addEventListener("mouseup", this.onMouseUp);
        document.addEventListener("mousemove", this.onMouseMove);
        this.$nextTick().then(() => {
            this.updatePosition();
        });
    },
    destroy() {
        document.removeEventListener("mouseup", this.onMouseUp);
        document.removeEventListener("mousemove", this.onMouseMove);
    },
    methods: {
        onChangeConstraint() {
            const { anchor: anchorElement } = this.$refs;
            anchorElement.style.top = "10px";
            anchorElement.style.left = "10px";
        },
        onMouseDown(event) {
            const { anchor: anchorElement } = this.$refs;
            const { clientX, clientY } = event;
            this.drag = [anchorElement.offsetLeft - clientX, anchorElement.offsetTop - clientY];
        },
        onMouseUp() {
            this.drag = null;
            this.updatePosition();
        },
        onMouseMove(event) {
            if (!this.drag) {
                return;
            }
            event.preventDefault();
            const { anchor: anchorElement, area: areaElement } = this.$refs;
            const { clientX, clientY } = event;
            const area = areaElement.getBoundingClientRect();
            const anchor = anchorElement.getBoundingClientRect();
            const left = clamp(
                clientX + this.drag[0],
                SPACING,
                area.width - anchor.width - SPACING - 2,
            );
            const top = clamp(
                clientY + this.drag[1],
                SPACING,
                area.height - anchor.height - SPACING - 2,
            );
            anchorElement.style.left = `${left}px`;
            anchorElement.style.top = `${top}px`;
            this.updatePosition();
        },
        updatePosition() {
            if (!this.drag) {
                return;
            }
            const { anchor, target } = this.$refs;
            const area = this.areaElement;
            const viewport = this.viewportElement;
            if (!anchor) {
                return;
            }
            const result = fitInsideArea({
                area,
                anchor,
                target,
                viewport,
                spacing: SPACING,
            });

            if (result.placement === Placement.Fallback) {
                target.classList.add("pos-target--inline");
                target.style.removeProperty("left");
                target.style.removeProperty("top");
            } else {
                target.classList.remove("pos-target--inline");
                target.style.left = `${result.x}px`;
                target.style.top = `${result.y}px`;
            }

            target.innerText = `Popup (${result.placement})`;
        },
    },
});
</script>

<template>
    <div class="wrapper">
        <label for="constraint"> Begränsa till: </label>
        <select id="constraint" v-model="constraint" @change="onChangeConstraint">
            <option value="viewport">Viewport</option>
            <option value="container">Container</option>
            <option value="combo">Viewport + container</option>
        </select>
        <p>Dra <i>ankaret</i> med hjälp av musen.</p>
        <div ref="area" class="area">
            <div ref="anchor" class="pos-anchor" @mousedown="onMouseDown">Ankare</div>
            <div ref="target" class="pos-target">Popup</div>
        </div>
    </div>
</template>

<style>
.wrapper {
    position: relative;
}

.area {
    margin-top: 1rem;
    height: 400px;
    border: 1px dashed grey;
    position: relative;
}

.pos-anchor {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75px;
    height: 75px;
    top: 10px;
    left: 10px;
    color: #000;
    background: rgb(200, 200, 255);
    border: 1px solid rgb(0, 0, 0);
    cursor: move;
    user-select: none;
    z-index: 1;
}

.pos-target {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 250px;
    max-width: calc(100% - 20px);
    top: 100px;
    left: 25px;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(0, 0, 0);
    z-index: 1;
}

.pos-target--inline {
    position: static;
}
</style>
