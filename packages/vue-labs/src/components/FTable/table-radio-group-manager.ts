import { type InjectionKey, inject, reactive } from "vue";

interface TableRadioGroupManagerState {
    activeRadioIds: Record<string, symbol>;
}

/**
 * @internal
 */
export interface TableRadioGroupManager {
    activeRadioIds: TableRadioGroupManagerState["activeRadioIds"];
    getRadioGroupName: (group: string | symbol) => string;
    setActiveRadio: (groupName: string, radioId: symbol) => void;
}

/**
 * @internal
 */
export function createTableRadioGroupManager(): TableRadioGroupManager {
    const state = reactive<TableRadioGroupManagerState>({
        activeRadioIds: {},
    });
    const radioGroupNames = new Map<symbol, string>();
    let radioGroupNameCounter = 0;

    function getRadioGroupName(group: string | symbol): string {
        if (typeof group === "string") {
            return group;
        }

        const existingGroupName = radioGroupNames.get(group);
        if (existingGroupName) {
            return existingGroupName;
        }

        radioGroupNameCounter += 1;
        const groupName = `active-radio-${radioGroupNameCounter}`;
        radioGroupNames.set(group, groupName);
        return groupName;
    }

    function setActiveRadio(groupName: string, radioId: symbol): void {
        state.activeRadioIds[groupName] = radioId;
    }

    return {
        activeRadioIds: state.activeRadioIds,
        getRadioGroupName,
        setActiveRadio,
    };
}

const fallbackTableRadioGroupManager = createTableRadioGroupManager();

/**
 * @internal
 */
export const tableRadioGroupManagerKey =
    Symbol() as InjectionKey<TableRadioGroupManager>;

/**
 * @internal
 */
export function useTableRadioGroupManager(): TableRadioGroupManager {
    return inject(tableRadioGroupManagerKey, fallbackTableRadioGroupManager);
}
