import { reactive } from "vue";

interface RadioId {
    id: symbol;
    setData: (radioId: symbol) => void;
}

/**
 * @internal
 */
export const activeRadioStore = reactive<RadioId>({
    id: Symbol("active-radio"),
    setData(radioId: symbol) {
        this.id = radioId;
    },
});
