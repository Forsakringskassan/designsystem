<script lang="ts">
import { defineComponent } from "vue";
import { FCheckboxField, FFieldset, FIcon, FTextField, FWizard, FWizardStep } from "@fkui/vue";

interface Frukt {
    value: string;
    text: string;
}

interface Fruktkorg {
    id: number;
    namn: string;
    valdaFrukter: Frukt[];
}

export default defineComponent({
    name: "WizardExample",
    components: { FWizard, FWizardStep, FTextField, FIcon, FFieldset, FCheckboxField },
    data() {
        return {
            current: undefined as string | undefined,
            visible: true,
            fruktkorgar: [] as Fruktkorg[],
            n: 1,
            frukter: [
                { value: "BANAN", text: "Banan 🍌" },
                { value: "ÄPPLE", text: "Äpple 🍏" },
                { value: "MANDARIN", text: "Mandarin 🍊" },
                { value: "ANANAS", text: "Ananas 🍍" },
                { value: "VATTENMELON", text: "Vattenmelon 🍉" },
                { value: "ANDRA_FRUKTER", text: "Andra frukter" },
            ],
        };
    },
    methods: {
        addBasket() {
            this.fruktkorgar.push({
                id: this.n++,
                namn: "",
                valdaFrukter: [],
            });
        },
        removeBasket(item: Fruktkorg) {
            const index = this.fruktkorgar.findIndex((it) => it.id === item.id);
            if (index >= 0) {
                this.fruktkorgar.splice(index, 1);
            }
        },
        onBeforeNext(): void {
            console.log("Här kanska man anropar backend för att kontrollera något?");
        },
        onCompleted() {
            alert("Tack för din beställning! 🙏 Applikationsspecifik logik tar det vidare.");
        },
        onCancel() {
            alert(
                "Avbryt anropat av användaren. Applikationsspecifik logik tar hand om eventuell bekräftelse.",
            );
        },
    },
});
</script>

<template>
    <div>
        <f-wizard
            v-model="current"
            header-tag="h2"
            disable-initial-focus
            @completed="onCompleted"
            @cancel="onCancel"
        >
            <f-wizard-step key="fruktkorg-antal" v-test="'myOrderStep'" title="Min beställning">
                <h3>Fruktkorg</h3>
                <button type="button" class="button button--tertiary" @click="addBasket">
                    <f-icon class="button__icon" name="plus" /> Lägg till fruktkorg
                </button>
            </f-wizard-step>

            <f-wizard-step
                v-for="item in fruktkorgar"
                :key="'fruktkorg-' + item.id"
                :title="'Frukt korg ' + item.id"
                :data-test="'fruitBasketStep-' + item.id"
            >
                <f-text-field
                    v-model="item.namn"
                    v-validation.required.maxLength="{ maxLength: { length: 100 } }"
                >
                    Namn på presentkort
                </f-text-field>

                <f-fieldset id="frukt-checkbox-group" v-validation.required>
                    <template #label> Vad ska ingå i din fruktkorg? </template>

                    <f-checkbox-field
                        v-for="frukt in frukter"
                        :key="frukt.value"
                        v-model="item.valdaFrukter"
                        :value="frukt.value"
                    >
                        {{ frukt.text }}
                    </f-checkbox-field>
                </f-fieldset>

                <button type="button" class="button button--tertiary" @click="removeBasket(item)">
                    <f-icon name="trashcan" /> Ta bort fruktkorg
                </button>
            </f-wizard-step>

            <f-wizard-step
                key="baz"
                v-test="'myInfoStep'"
                title="Mina uppgifter"
                :before-next="onBeforeNext"
            >
                <p>Min adress</p>
            </f-wizard-step>
        </f-wizard>

        <!-- [html-validate-disable-next no-inline-style] -->
        <p style="margin-top: 30px">
            Ett steg kan öppnas programatiskt, t.ex. man klickar 'ändra' i ett granska-steg.
            <button type="button" @click="current = 'baz'">Öppna sista steget</button>
        </p>
        <pre>v-model: {{ current }}</pre>
    </div>
</template>
