export {
    type AlertScreenReaderOptions,
    alertScreenReader,
} from "./alert-screen-reader";

import { createScreenReaderWrapper } from "./alert-screen-reader";

if (typeof document !== "undefined") {
    createScreenReaderWrapper({ assertive: false });
}
