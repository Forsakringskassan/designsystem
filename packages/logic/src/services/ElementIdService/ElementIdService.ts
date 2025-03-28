import { ElementIdServiceInterface } from "./ElementIdServiceInterface";

class ElementIdServiceImpl implements ElementIdServiceInterface {
    private elementIdMap = new Map<string, { count: number }>();

    public generateElementId(prefix = "fkui"): string {
        const id = this.nextId(prefix);
        if (document.getElementById(id) === null) {
            return id;
        }
        return this.generateElementId(prefix);
    }

    private nextId(prefix: string): string {
        let elementIdWithPadding = String(this.getIdFromMap(prefix));
        while (elementIdWithPadding.length < 4) {
            elementIdWithPadding = `0${elementIdWithPadding}`;
        }
        return `${prefix}-vue-element-${elementIdWithPadding}`;
    }

    private getIdFromMap(prefix: string): number {
        const elementId = this.elementIdMap.get(prefix);

        if (!elementId) {
            this.elementIdMap.set(prefix, { count: 1 });
            return 1;
        }
        elementId.count++;
        return elementId.count;
    }

    public reset(): void {
        this.elementIdMap = new Map();
    }
}

/**
 * @public
 */
export const ElementIdService: ElementIdServiceInterface =
    /* @__PURE__ */
    new ElementIdServiceImpl();
