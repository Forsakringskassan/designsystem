import { type App, type DirectiveBinding, type Plugin } from "vue";
import { formatNumber } from "./formatters";

const formatters = {
    number: formatNumber,
};
function removeObsoleteClasses(el: HTMLElement): void {
    el.classList.forEach((it: string) => {
        if (it.startsWith("formatter--")) {
            el.classList.remove(it);
        }
    });
}

/**
 * FormatPlugin: A Vue directive plugin for formatting text based on a provided format definition.
 *
 * @public
 */
export const FormatPlugin: Plugin = {
    install(app: App) {
        app.directive(
            "format",
            (el: HTMLElement, { value, arg }: DirectiveBinding) => {
                const formatter = formatters[arg as keyof typeof formatters];
                if (formatter) {
                    removeObsoleteClasses(el);
                    formatter(el, value);
                }
            },
        );
    },
};
