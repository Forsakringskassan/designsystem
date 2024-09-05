import { type TranslateFunction } from "@fkui/logic";

export function getAltLogoText(
    hasRouterLink: boolean,
    routerLinkLabel: string,
    t: TranslateFunction,
): string {
    const srStdLogoAltText = t(
        "fkui.page-header.logo.alt-text",
        "Försäkringskassan",
    );
    const srStdRouterLinkLabel = t(
        "fkui.page-header.router.link.label",
        "gå till startsidan",
    );
    if (hasRouterLink && routerLinkLabel !== "") {
        return `${srStdLogoAltText} ${routerLinkLabel}`;
    } else if (hasRouterLink) {
        return `${srStdLogoAltText}, ${srStdRouterLinkLabel}`;
    } else {
        return srStdLogoAltText;
    }
}
