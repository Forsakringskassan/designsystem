import type {
    FDialogueTreeOption,
    FDialogueTreeQuestion,
    FDialogueTreeSubQuestion,
} from "@fkui/vue";

function generateOption(label: string): FDialogueTreeOption {
    return {
        label: label,
        question: {
            label: "Är du anställd på ett konsult eller bemanningsföretag?",
            options: [
                {
                    label: "Ja, det är jag",
                    question: {
                        label: `Om din anställning`,
                        userData: {
                            label: "formA",
                        },
                    },
                },
                {
                    label: "Nej",
                    question: {
                        label: "Om din anställning",
                        userData: {
                            label: "formB",
                        },
                    },
                },
            ],
        },
    };
}

function generateQuestion(): FDialogueTreeQuestion {
    return {
        label: "Var är du anställd?",
        options: [
            generateOption("I Sverige"),
            generateOption("Utanför Sverige"),
        ],
    };
}

export function exampleDialogTree(): FDialogueTreeSubQuestion {
    return {
        label: "Vad vill du lägga till?",
        options: [
            {
                label: "Anställning",
                question: generateQuestion(),
            },
            {
                label: "Enskild firma eller handelsbolag",
                question: generateQuestion(),
            },
            {
                label: "Aktiebolag",
                question: generateQuestion(),
            },
        ],
    };
}
