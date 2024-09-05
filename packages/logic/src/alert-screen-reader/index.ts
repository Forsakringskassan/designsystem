export {
    alertScreenReader,
    type AlertScreenReaderOptions,
} from "./alert-screen-reader";

import { createScreenReaderWrapper } from "./alert-screen-reader";

if (typeof document !== "undefined") {
    createScreenReaderWrapper({ assertive: false });
}
