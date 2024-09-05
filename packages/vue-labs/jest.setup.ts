import { enableAutoUnmount } from "@vue/test-utils";
import { ElementIdService } from "@fkui/logic";

enableAutoUnmount(afterEach);

afterEach(() => {
    /* reset id generation to ensure we get a stable result no matter which/what
     * order tests are run */
    ElementIdService.reset();
});
