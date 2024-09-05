import { EventBus } from "../../../utils/event-bus";

/**
 * @public
 */
export type FLayoutRightPanelContentEvent = "close" | "open-dialog" | "open";

/**
 * @public
 */
export interface FLayoutRightPanelInteface {
    open(): void;
    openDialog(title: string): void;
    close(): void;
    on(event: FLayoutRightPanelContentEvent, callback: () => void): void;
    off(event: FLayoutRightPanelContentEvent, callback: () => void): void;
}

/**
 * This service used to open and close the secondary panel.
 * The service has on/off methods to listen to these events
 * that is used internally by the layout components.
 *
 * @internal
 */
class FRightPanelServiceImpl implements FLayoutRightPanelInteface {
    private focusedElementBeforeOpenining: Element | null = null;

    public open(): void {
        this.focusedElementBeforeOpenining = window.document.activeElement;
        this.emit("open");
    }

    public openDialog(title: string): void {
        this.focusedElementBeforeOpenining = window.document.activeElement;
        this.emit("open-dialog", title);
    }

    public close(): void {
        this.emit("close");
        if (this.focusedElementBeforeOpenining) {
            (this.focusedElementBeforeOpenining as HTMLElement).focus();
        }
    }

    public on(
        event: FLayoutRightPanelContentEvent,
        callback: () => void,
    ): void {
        EventBus.$on(`application-layout:${event}`, callback);
    }

    public off(
        event: FLayoutRightPanelContentEvent,
        callback: () => void,
    ): void {
        EventBus.$off(`application-layout:${event}`, callback);
    }

    private emit(event: FLayoutRightPanelContentEvent, arg?: unknown): void {
        EventBus.$emit(`application-layout:${event}`, arg);
    }
}

/**
 * @public
 */
export const FLayoutRightPanelService: FLayoutRightPanelInteface =
    new FRightPanelServiceImpl();
