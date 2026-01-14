import { type Ref, nextTick, ref } from "vue";
import { type PopupError } from "./PopupEror";

export function usePopupError(): {
    onPopupError: (popupError: PopupError) => Promise<void>;
    onClosePopupError: (popupError: PopupError) => void;
    errorAnchor: Ref<HTMLElement | undefined>;
    errorArrowAnchor: Ref<HTMLElement | undefined>;
    errorMessage: Ref<string | undefined>;
    activeErrorAnchor: Ref<HTMLElement | undefined>;
} {
    const errorAnchor = ref<HTMLElement | undefined>(undefined);
    const errorArrowAnchor = ref<HTMLElement | undefined>(undefined);
    const errorMessage = ref<string | undefined>(undefined);
    const activeErrorAnchor = ref<HTMLElement | undefined>(undefined);

    async function onPopupError(popupError: PopupError): Promise<void> {
        const { anchor, arrowAnchor, hasFocus, hasHover, inEdit } = popupError;
        if (!anchor || !arrowAnchor) {
            return;
        }

        if (inEdit) {
            onClosePopupError(popupError);
            return;
        }

        if (hasFocus || hasHover) {
            await open(popupError);
        } else {
            onClosePopupError(popupError);
        }
    }

    async function open(popupError: PopupError): Promise<void> {
        const { message, anchor, arrowAnchor } = popupError;
        if (!anchor || !arrowAnchor) {
            return;
        }
        activeErrorAnchor.value = undefined;
        errorMessage.value = message;
        errorAnchor.value = anchor;
        errorArrowAnchor.value = arrowAnchor;

        await nextTick();
        activeErrorAnchor.value = anchor;
    }

    function onClosePopupError(popupError: PopupError | undefined): void {
        if (!popupError) {
            return;
        }
        const { anchor } = popupError;
        //Verify that close event is from currently visible erroPopup
        if (anchor?.isSameNode(errorAnchor.value ?? null)) {
            activeErrorAnchor.value = undefined;
        }
    }

    return {
        onPopupError,
        onClosePopupError,
        errorAnchor,
        errorArrowAnchor,
        errorMessage,
        activeErrorAnchor,
    };
}
