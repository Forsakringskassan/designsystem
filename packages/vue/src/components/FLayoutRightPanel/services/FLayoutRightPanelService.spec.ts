import { FLayoutRightPanelService } from "./FLayoutRightPanelService";

it("should emit open event", () => {
    const listener = jest.fn();
    FLayoutRightPanelService.on("open", listener);
    FLayoutRightPanelService.open();
    expect(listener).toHaveBeenCalled();
});

it("should emit openDialog event with title as argument", () => {
    const listener = jest.fn();
    FLayoutRightPanelService.on("open-dialog", listener);
    FLayoutRightPanelService.openDialog("some title");
    expect(listener.mock.calls[0][0]).toMatchInlineSnapshot(`"some title"`);
});

it("should emit close event", () => {
    const listener = jest.fn();
    FLayoutRightPanelService.on("close", listener);
    FLayoutRightPanelService.close();
    expect(listener).toHaveBeenCalled();
});

it("should restore focus when calling close", () => {
    window.document.body.innerHTML = /* HTML */ `
        <button id="button1"></button>
        <button id="button2"></button>
    `;
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");

    button1?.focus();
    expect(window.document.activeElement).toBe(button1);

    FLayoutRightPanelService.open();
    button2?.focus();
    expect(window.document.activeElement).toBe(button2);

    FLayoutRightPanelService.close();
    expect(window.document.activeElement).toBe(button1);
});
