import { ElementIdService } from "@fkui/logic";
import { config, enableAutoUnmount } from "@vue/test-utils";
import { afterEach } from "vitest";

config.global.config.warnHandler = (msg, _instance, trace) => {
    throw new Error(`Vue warning: ${msg}\n${trace}`);
};

// Enable auto unmount for Vue Test Utils
enableAutoUnmount(afterEach);

// Reset ElementIdService after each test for stable results
afterEach(() => {
    ElementIdService.reset();
});
