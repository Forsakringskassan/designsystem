import { type ComponentPublicInstance } from "vue";

/**
 * @public
 */
export class ErrorData {
    public error: Error;
    public vm: ComponentPublicInstance | null;
    public info: string;

    public constructor(
        error: Error,
        vm: ComponentPublicInstance | null,
        info: string,
    ) {
        this.error = error;
        this.vm = vm;
        this.info = info;
    }
}
