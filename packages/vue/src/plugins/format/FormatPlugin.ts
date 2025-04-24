import { type App, type DirectiveBinding, type Plugin } from "vue";
import {
    formatBankgiro,
    formatDate,
    formatDateFull,
    formatDateLong,
    formatDateRange,
    formatNumber,
    formatOrganisationsnummer,
    formatPersonnummer,
    formatPlusgiro,
    formatPostnummer,
    formatText,
} from "./formatters";

const formatters = {
    bankgiro: formatBankgiro,
    "date-full": formatDateFull,
    "date-long": formatDateLong,
    "date-range": formatDateRange,
    date: formatDate,
    number: formatNumber,
    orgnr: formatOrganisationsnummer,
    pnr: formatPersonnummer,
    plusgiro: formatPlusgiro,
    postnummer: formatPostnummer,
    text: formatText,
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
