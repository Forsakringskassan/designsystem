<script setup lang="ts">
import { computed, defineComponent, h, ref } from "vue";
import { FPageLayout, FResizePane, FDetailsPanel, useDetailsPanel, useResize } from "../components";

interface Item {
    name: string;
    age: number;
}

const AwesomePanel = FDetailsPanel<Item>;
const awesomePanelApi = useDetailsPanel("awesome");

const awesomeItem: Item = {
    name: "Kalle Anka",
    age: 62,
};

const open = ref(false);
const enabled = ref(true);
const visible = ref(true);

const MenuPanel = defineComponent({
    setup(_props, { slots }) {
        useResize({
            enabled: open,
            visible,
        });
        return () => h("div", slots.default?.());
    },
});

function toggle(): void {
    open.value = !open.value;
}
</script>

<template>
    <f-page-layout layout="three-column">
        <template #left>
            <f-resize-pane min="10%" max="50%" initial="25%" overlay :offset="50">
                <menu-panel>
                    <template v-if="open"> opened <button type="button" @click="toggle">&lt;&lt;</button> </template>
                    <template v-else>
                        <div style="width: 50px">
                            <button type="button" @click="toggle">&gt;&gt;</button>
                        </div>
                    </template>
                </menu-panel>
            </f-resize-pane>
        </template>
        <template #right>
            <f-resize-pane min="10%" max="50%" initial="25%" overlay>
                <awesome-panel name="awesome">
                    <template #default="{ item }">
                        <div class="content">
                            <p>Panel</p>
                            <pre>{{ JSON.stringify(item, null, 2) }}</pre>
                        </div>
                    </template>
                </awesome-panel>
            </f-resize-pane>
        </template>
        <template #content>
            <div class="content">
                <p>Huvudyta</p>
                <p>Drag i handtaget för att ändra storlek.</p>

                <button type="button" class="button button--secondary" @click="awesomePanelApi.open(awesomeItem)">
                    Öppna
                </button>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget tempus neque. Nunc blandit ante
                    vitae massa feugiat accumsan. Cras efficitur sem sed cursus fringilla. Donec non est sit amet dui
                    rutrum dignissim. Maecenas accumsan est et placerat lacinia. Duis ut mauris interdum sapien
                    convallis aliquet quis gravida urna. Praesent dolor eros, pellentesque in luctus at, vulputate a
                    metus. Sed ac pretium enim, sed porta magna. Pellentesque tincidunt lectus vitae vehicula hendrerit.
                    Morbi gravida arcu vitae faucibus elementum.
                </p>

                <p>
                    Donec ac varius purus, in consectetur arcu. Pellentesque tincidunt accumsan tortor. Morbi ac egestas
                    urna. Integer laoreet feugiat risus, a fermentum purus eleifend vitae. Donec ac nibh nec enim
                    aliquet malesuada a sed turpis. Praesent dapibus nisi nisi, nec congue augue condimentum quis. Duis
                    vel hendrerit est. Fusce accumsan laoreet tincidunt. Curabitur nec magna mollis, tincidunt nulla eu,
                    hendrerit orci. Aliquam imperdiet euismod gravida. Sed odio ipsum, hendrerit at sapien ac, maximus
                    posuere mauris. Ut maximus sem odio, sit amet interdum nulla bibendum ac. Interdum et malesuada
                    fames ac ante ipsum primis in faucibus. Curabitur dignissim tempor fringilla. Mauris odio nibh,
                    commodo eu rhoncus semper, scelerisque at ipsum. Sed aliquet turpis et nibh pellentesque venenatis.
                </p>

                <p>
                    Vivamus eu nisl nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel tortor
                    molestie, luctus erat vel, luctus sapien. Curabitur justo risus, porttitor non eros id, sodales
                    rhoncus diam. Curabitur ac lorem vitae dui eleifend consectetur ac finibus diam. Fusce orci est,
                    tempor at mauris non, porttitor porttitor odio. Sed fermentum vitae ipsum non tincidunt. In varius
                    nisi quis risus porttitor consequat. Cras tempor eu orci eget consectetur. Mauris eu bibendum nulla.
                </p>

                <p>
                    Sed id nibh gravida, varius nisl sit amet, sodales odio. Nullam in ipsum erat. Donec pharetra,
                    ligula a tincidunt tincidunt, diam dui placerat massa, et posuere tortor leo sit amet lectus.
                    Vivamus a pretium ligula. Mauris id sodales leo. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia curae; Vestibulum eget convallis elit, id elementum massa.
                    Integer facilisis est ac aliquam semper. Nullam dictum, ex ut rhoncus bibendum, ante mauris finibus
                    nisl, a rhoncus neque augue ac diam. Duis imperdiet quam mi, a vestibulum ex faucibus sit amet.
                </p>

                <p>
                    Sed id lacus dolor. Donec ut urna ut risus faucibus laoreet. Vestibulum hendrerit venenatis egestas.
                    Nulla eget elementum dui, ac dictum ligula. Sed in ante erat. Praesent consequat, ante sit amet
                    scelerisque egestas, sapien nibh hendrerit nulla, in molestie quam enim a nisl. Interdum et
                    malesuada fames ac ante ipsum primis in faucibus. Aenean interdum risus enim, a laoreet est
                    vulputate id.
                </p>
            </div>
        </template>
    </f-page-layout>
</template>

<style scope>
html,
body {
    margin: 0;
    padding: 0;
}

.content {
    padding: 1rem;
}
</style>
