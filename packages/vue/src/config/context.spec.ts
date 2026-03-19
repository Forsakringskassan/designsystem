import { MaybeWithFKUIContext, getRunningContext } from "./context";

it("should throw error if calling instance is without FKUI context", () => {
    expect.assertions(1);
    expect(() => getRunningContext({} as MaybeWithFKUIContext)).toThrow(
        "Application running context is unset. Call `setRunningContext(app)` after `app = createApp(..)`.",
    );
});
