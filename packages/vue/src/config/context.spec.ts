import { expect, it } from "vitest";
import { getRunningContext } from "./context";

it("should throw error if calling instance is without FKUI context", () => {
    expect.assertions(1);
    expect(() => getRunningContext({})).toThrow(
        "Application running context is unset. Call `setRunningContext(app)` after `app = createApp(..)`.",
    );
});
