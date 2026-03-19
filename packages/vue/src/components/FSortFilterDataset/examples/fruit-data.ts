/**
 * @internal
 */
export interface FruitData {
    id: string;
    name: string;
    origin: string;
    description: string;
}

/**
 * @internal
 */
export const fruits: FruitData[] = [
    {
        id: "1",
        name: "Äpple",
        origin: "Sverige",
        description:
            "Rund, ofta röd eller grön frukt med söt eller syrlig smak.",
    },
    {
        id: "2",
        name: "Banan",
        origin: "Colombia",
        description: "Lång, gul frukt med mjukt och sött fruktkött.",
    },
    {
        id: "3",
        name: "Vattenmelon",
        origin: "Spanien",
        description:
            "Stor, rund frukt med grönt skal och saftigt, rött fruktkött.",
    },
    {
        id: "4",
        name: "Grapefrukt",
        origin: "Turkiet",
        description:
            "Stor, rund citrusfrukt med tjockt skal och saftig, syrlig smak.",
    },
];
