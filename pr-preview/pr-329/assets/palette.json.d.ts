
export interface SassVariable {
    name: string;
    value: string;
    group: string;
    comment: string;
}

export interface VariableGroup {
    name: string
    variables: SassVariable[];
}

declare const value: VariableGroup[];
export default value;
