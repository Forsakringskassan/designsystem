import { configLogic } from "@fkui/logic";
import { type FKUIConfig, FKUIConfigButtonOrder } from "./FKUIConfig";

let popupContainer: string | HTMLElement = document.body;
let production = true;

/**
 * @public
 */
export const config: FKUIConfig = {
    buttonOrder: FKUIConfigButtonOrder.RIGHT_TO_LEFT,
    teleportTarget: document.body,

    get popupContainer(): HTMLElement {
        if (typeof popupContainer === "string") {
            const element = document.querySelector<HTMLElement>(popupContainer);
            if (!element) {
                throw new Error(
                    `Failed to find popupContainer element from selector "${popupContainer}"`,
                );
            }
            return element;
        } else {
            return popupContainer;
        }
    },

    set popupContainer(value: string | HTMLElement) {
        popupContainer = value;
    },

    set production(value: boolean) {
        production = value;
        configLogic.production = value;
    },
    get production(): boolean {
        return production;
    },
};
