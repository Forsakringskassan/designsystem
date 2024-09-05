import { type NavigationMenuItem } from "../navigation-menu-item";

function generateExampleLabelsAndRoutes(
    nbRoutes: number,
): NavigationMenuItem[] {
    const res = [];
    for (let i = 0; i < nbRoutes; i++) {
        res.push({ label: `label${i + 1}`, route: `ROUTE_${i + 1}` });
    }
    return res;
}

export const routes = generateExampleLabelsAndRoutes(10);
