export interface FruitItem {
    id: string;
    product: string;
    quantity: number;
    price: number;
}

export type FruitDeliveryStatus = "Behandlas" | "På väg" | "Levererad";
export const fruitDeliveryOptions: FruitDeliveryStatus[] = [
    "Behandlas",
    "På väg",
    "Levererad",
];

export interface FruitOrder {
    id: string;
    customer: string;
    date: string;
    paid: boolean;
    delivery: FruitDeliveryStatus;
    items: FruitItem[];
}

export const orders: FruitOrder[] = [
    {
        id: "1",
        customer: "Kalle Anka",
        date: "2025-09-01",
        paid: true,
        delivery: "Levererad",
        items: [
            { id: "1a", product: "Äpple", quantity: 5, price: 4.5 },
            { id: "1b", product: "Banan", quantity: 3, price: 6 },
        ],
    },
    {
        id: "2",
        customer: "Joakim von Anka",
        date: "2025-09-02",
        paid: false,
        delivery: "Behandlas",
        items: [
            { id: "2a", product: "Apelsin", quantity: 4, price: 5 },
            { id: "2b", product: "Mango", quantity: 2, price: 15 },
            { id: "2c", product: "Päron", quantity: 6, price: 7 },
        ],
    },
    {
        id: "3",
        customer: "Knatte Anka",
        date: "2025-09-03",
        paid: true,
        delivery: "På väg",
        items: [
            { id: "3a", product: "Vindruvor", quantity: 1, price: 30 },
            { id: "3b", product: "Kiwi", quantity: 5, price: 8 },
        ],
    },
    {
        id: "4",
        customer: "Fnatte Anka",
        date: "2025-09-04",
        paid: false,
        delivery: "Behandlas",
        items: [
            { id: "4a", product: "Ananas", quantity: 1, price: 25 },
            { id: "4b", product: "Banan", quantity: 6, price: 6 },
        ],
    },
    {
        id: "5",
        customer: "Tjatte Anka",
        date: "2025-09-05",
        paid: true,
        delivery: "På väg",
        items: [
            { id: "5a", product: "Citron", quantity: 3, price: 4 },
            { id: "5b", product: "Lime", quantity: 3, price: 5 },
            { id: "5c", product: "Mango", quantity: 1, price: 15 },
        ],
    },
];
