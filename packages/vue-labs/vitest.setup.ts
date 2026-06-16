import { ElementIdService } from "@fkui/logic";
import { enableAutoUnmount } from "@vue/test-utils";
import { afterEach } from "vitest";

// Enable auto unmount for Vue Test Utils
enableAutoUnmount(afterEach);

// Reset ElementIdService after each test for stable results
afterEach(() => {
    ElementIdService.reset();
});
