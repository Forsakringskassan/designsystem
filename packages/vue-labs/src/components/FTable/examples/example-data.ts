export interface FruitItem {
    id: string;
    product: string;
    quantity: number;
    price: number;
}

export interface FruitCustomer {
    name: string;
    address: string;
}

export interface FruitDelivery {
    status: string;
    address: string;
    orderDate: string;
    deliveryDate: string;
    notes: string;
}

export type FruitDeliveryStatus = "Behandlas" | "På väg" | "Levererad";
export const fruitDeliveryOptions: FruitDeliveryStatus[] = [
    "Behandlas",
    "På väg",
    "Levererad",
];

export interface FruitOrder {
    id: string;
    customer: FruitCustomer;
    paid: boolean;
    delivery: FruitDelivery;
    items: FruitItem[];
}

export const orders: FruitOrder[] = [
    {
        id: "1",
        customer: { name: "Kalle Anka", address: "Ankeborgsvägen 1" },
        items: [
            { id: "1a", product: "Äpple", quantity: 5, price: 4.5 },
            { id: "1b", product: "Banan", quantity: 3, price: 6 },
        ],
        paid: true,
        delivery: {
            status: "Levererad",
            address: "Ankeborgsvägen 1",
            orderDate: "2025-09-01",
            deliveryDate: "2025-09-02",
            notes: "Lämna vid dörren",
        },
    },
    {
        id: "2",
        customer: { name: "Joakim von Anka", address: "Pengabingegränd 2" },
        items: [
            { id: "2a", product: "Apelsin", quantity: 4, price: 5 },
            { id: "2b", product: "Mango", quantity: 2, price: 15 },
            { id: "2c", product: "Päron", quantity: 6, price: 7 },
        ],
        paid: false,
        delivery: {
            status: "På väg",
            address: "Pengabingegränd 2",
            orderDate: "2025-09-02",
            deliveryDate: "",
            notes: "Ring på klockan",
        },
    },
    {
        id: "3",
        customer: { name: "Knatte Anka", address: "Skogsstigen 3" },
        items: [
            { id: "3a", product: "Vindruvor", quantity: 1, price: 30 },
            { id: "3b", product: "Kiwi", quantity: 5, price: 8 },
        ],
        paid: true,
        delivery: {
            status: "Levererad",
            address: "Skogsstigen 3",
            orderDate: "2025-09-03",
            deliveryDate: "2025-09-05",
            notes: "Levererad till brevlådan",
        },
    },
    {
        id: "4",
        customer: { name: "Fnatte Anka", address: "Äventyrsgatan 4" },
        items: [
            { id: "4a", product: "Ananas", quantity: 1, price: 25 },
            { id: "4b", product: "Banan", quantity: 6, price: 6 },
        ],
        paid: false,
        delivery: {
            status: "Behandlas",
            address: "Äventyrsgatan 4",
            orderDate: "2025-09-04",
            deliveryDate: "",
            notes: "Vill ha kvitto",
        },
    },
    {
        id: "5",
        customer: { name: "Tjatte Anka", address: "Ankeborgsvägen 5" },
        items: [
            { id: "5a", product: "Citron", quantity: 3, price: 4 },
            { id: "5b", product: "Lime", quantity: 3, price: 5 },
            { id: "5c", product: "Mango", quantity: 1, price: 15 },
        ],
        paid: true,
        delivery: {
            status: "På väg",
            address: "Ankeborgsvägen 5",
            orderDate: "2025-09-05",
            deliveryDate: "",
            notes: "Känslig för starka dofter",
        },
    },
    {
        id: "6",
        customer: { name: "Farbror Joakim", address: "Pengabingegränd 10" },
        items: [{ id: "6a", product: "Äpple", quantity: 10, price: 4.5 }],
        paid: true,
        delivery: {
            status: "Levererad",
            address: "Pengabingegränd 10",
            orderDate: "2025-09-06",
            deliveryDate: "2025-09-07",
            notes: "",
        },
    },
    {
        id: "7",
        customer: { name: "Kajsa Anka", address: "Andeborgsgatan 7" },
        items: [
            { id: "7a", product: "Banan", quantity: 6, price: 6 },
            { id: "7b", product: "Apelsin", quantity: 3, price: 5 },
        ],
        paid: false,
        delivery: {
            status: "Behandlas",
            address: "Andeborgsgatan 7",
            orderDate: "2025-09-06",
            deliveryDate: "",
            notes: "",
        },
    },
    {
        id: "8",
        customer: { name: "Mimmi", address: "Andeborgsvägen 8" },
        items: [
            { id: "8a", product: "Päron", quantity: 2, price: 7 },
            { id: "8b", product: "Kiwi", quantity: 4, price: 8 },
        ],
        paid: true,
        delivery: {
            status: "På väg",
            address: "Andeborgsvägen 8",
            orderDate: "2025-09-07",
            deliveryDate: "",
            notes: "",
        },
    },
    {
        id: "9",
        customer: { name: "Musse Pigg", address: "Mussevägen 9" },
        items: [{ id: "9a", product: "Ananas", quantity: 1, price: 25 }],
        paid: false,
        delivery: {
            status: "Behandlas",
            address: "Mussevägen 9",
            orderDate: "2025-09-07",
            deliveryDate: "",
            notes: "",
        },
    },
    {
        id: "10",
        customer: { name: "Långben", address: "Långbengatan 10" },
        items: [{ id: "10a", product: "Citron", quantity: 5, price: 4 }],
        paid: true,
        delivery: {
            status: "Levererad",
            address: "Långbengatan 10",
            orderDate: "2025-09-08",
            deliveryDate: "2025-09-09",
            notes: "",
        },
    },
    {
        id: "11",
        customer: { name: "Kajsa Anka", address: "Andeborgsgatan 11" },
        items: [
            { id: "11a", product: "Äpple", quantity: 3, price: 4.5 },
            { id: "11b", product: "Mango", quantity: 1, price: 15 },
        ],
        paid: false,
        delivery: {
            status: "På väg",
            address: "Andeborgsgatan 11",
            orderDate: "2025-09-08",
            deliveryDate: "",
            notes: "",
        },
    },
    {
        id: "12",
        customer: { name: "Kalle Anka", address: "Ankeborgsvägen 12" },
        items: [
            { id: "12a", product: "Päron", quantity: 6, price: 7 },
            { id: "12b", product: "Kiwi", quantity: 3, price: 8 },
        ],
        paid: true,
        delivery: {
            status: "Levererad",
            address: "Ankeborgsvägen 12",
            orderDate: "2025-09-09",
            deliveryDate: "2025-09-10",
            notes: "",
        },
    },
    {
        id: "13",
        customer: { name: "Mimmi", address: "Andeborgsvägen 13" },
        items: [{ id: "13a", product: "Banan", quantity: 2, price: 6 }],
        paid: false,
        delivery: {
            status: "Behandlas",
            address: "Andeborgsvägen 13",
            orderDate: "2025-09-09",
            deliveryDate: "",
            notes: "",
        },
    },
    {
        id: "14",
        customer: { name: "Knatte Anka", address: "Skogsstigen 14" },
        items: [{ id: "14a", product: "Citron", quantity: 4, price: 4 }],
        paid: true,
        delivery: {
            status: "På väg",
            address: "Skogsstigen 14",
            orderDate: "2025-09-10",
            deliveryDate: "",
            notes: "Lämna i brevlådan",
        },
    },
    {
        id: "15",
        customer: { name: "Tjatte Anka", address: "Ankeborgsvägen 15" },
        items: [
            { id: "15a", product: "Apelsin", quantity: 5, price: 5 },
            { id: "15b", product: "Mango", quantity: 2, price: 15 },
        ],
        paid: true,
        delivery: {
            status: "Levererad",
            address: "Ankeborgsvägen 15",
            orderDate: "2025-09-10",
            deliveryDate: "2025-09-11",
            notes: "",
        },
    },
    {
        id: "16",
        customer: { name: "Fnatte Anka", address: "Äventyrsgatan 16" },
        items: [{ id: "16a", product: "Äpple", quantity: 6, price: 4.5 }],
        paid: false,
        delivery: {
            status: "Behandlas",
            address: "Äventyrsgatan 16",
            orderDate: "2025-09-11",
            deliveryDate: "",
            notes: "",
        },
    },
    {
        id: "17",
        customer: { name: "Musse Pigg", address: "Mussevägen 17" },
        items: [
            { id: "17a", product: "Kiwi", quantity: 3, price: 8 },
            { id: "17b", product: "Vindruvor", quantity: 2, price: 30 },
        ],
        paid: true,
        delivery: {
            status: "På väg",
            address: "Mussevägen 17",
            orderDate: "2025-09-11",
            deliveryDate: "",
            notes: "",
        },
    },
    {
        id: "18",
        customer: { name: "Långben", address: "Långbengatan 18" },
        items: [{ id: "18a", product: "Ananas", quantity: 2, price: 25 }],
        paid: false,
        delivery: {
            status: "Behandlas",
            address: "Långbengatan 18",
            orderDate: "2025-09-12",
            deliveryDate: "",
            notes: "Ingen kontakt med hunden",
        },
    },
    {
        id: "19",
        customer: { name: "Tjatte Anka", address: "Ankeborgsvägen 19" },
        items: [
            { id: "19a", product: "Citron", quantity: 1, price: 4 },
            { id: "19b", product: "Lime", quantity: 2, price: 5 },
        ],
        paid: true,
        delivery: {
            status: "Levererad",
            address: "Ankeborgsvägen 19",
            orderDate: "2025-09-12",
            deliveryDate: "2025-09-13",
            notes: "",
        },
    },
    {
        id: "20",
        customer: { name: "Knatte Anka", address: "Skogsstigen 20" },
        items: [{ id: "20a", product: "Mango", quantity: 3, price: 15 }],
        paid: false,
        delivery: {
            status: "På väg",
            address: "Skogsstigen 20",
            orderDate: "2025-09-13",
            deliveryDate: "",
            notes: "",
        },
    },
    {
        id: "21",
        customer: { name: "Mimmi", address: "Andeborgsvägen 21" },
        items: [
            { id: "21a", product: "Äpple", quantity: 4, price: 4.5 },
            { id: "21b", product: "Banan", quantity: 5, price: 6 },
        ],
        paid: true,
        delivery: {
            status: "Levererad",
            address: "Andeborgsvägen 21",
            orderDate: "2025-09-14",
            deliveryDate: "2025-09-15",
            notes: "Ring innan leverans",
        },
    },
    {
        id: "22",
        customer: { name: "Kalle Anka", address: "Ankeborgsvägen 22" },
        items: [
            { id: "22a", product: "Mango", quantity: 2, price: 15 },
            { id: "22b", product: "Kiwi", quantity: 6, price: 8 },
        ],
        paid: false,
        delivery: {
            status: "På väg",
            address: "Ankeborgsvägen 22",
            orderDate: "2025-09-14",
            deliveryDate: "",
            notes: "Lämna hos grannen om ingen är hemma",
        },
    },
    {
        id: "23",
        customer: { name: "Fnatte Anka", address: "Äventyrsgatan 23" },
        items: [
            { id: "23a", product: "Citron", quantity: 3, price: 4 },
            { id: "23b", product: "Lime", quantity: 2, price: 5 },
        ],
        paid: true,
        delivery: {
            status: "Behandlas",
            address: "Äventyrsgatan 23",
            orderDate: "2025-09-15",
            deliveryDate: "",
            notes: "Extra noggrant packad",
        },
    },
    {
        id: "24",
        customer: { name: "Tjatte Anka", address: "Ankeborgsvägen 24" },
        items: [{ id: "24a", product: "Apelsin", quantity: 5, price: 5 }],
        paid: false,
        delivery: {
            status: "Behandlas",
            address: "Ankeborgsvägen 24",
            orderDate: "2025-09-15",
            deliveryDate: "",
            notes: "Leverera mellan 10-12",
        },
    },
    {
        id: "25",
        customer: { name: "Knatte Anka", address: "Skogsstigen 25" },
        items: [
            { id: "25a", product: "Vindruvor", quantity: 2, price: 30 },
            { id: "25b", product: "Kiwi", quantity: 1, price: 8 },
        ],
        paid: true,
        delivery: {
            status: "Levererad",
            address: "Skogsstigen 25",
            orderDate: "2025-09-16",
            deliveryDate: "2025-09-17",
            notes: "",
        },
    },
    {
        id: "26",
        customer: { name: "Musse Pigg", address: "Mussevägen 26" },
        items: [
            { id: "26a", product: "Ananas", quantity: 1, price: 25 },
            { id: "26b", product: "Banan", quantity: 4, price: 6 },
        ],
        paid: false,
        delivery: {
            status: "På väg",
            address: "Mussevägen 26",
            orderDate: "2025-09-16",
            deliveryDate: "",
            notes: "Ring när ni är utanför",
        },
    },
    {
        id: "27",
        customer: { name: "Långben", address: "Långbengatan 27" },
        items: [{ id: "27a", product: "Mango", quantity: 3, price: 15 }],
        paid: true,
        delivery: {
            status: "Levererad",
            address: "Långbengatan 27",
            orderDate: "2025-09-17",
            deliveryDate: "2025-09-18",
            notes: "Kontakta via telefon om försening",
        },
    },
    {
        id: "28",
        customer: { name: "Kajsa Anka", address: "Andeborgsgatan 28" },
        items: [
            { id: "28a", product: "Citron", quantity: 2, price: 4 },
            { id: "28b", product: "Lime", quantity: 3, price: 5 },
        ],
        paid: false,
        delivery: {
            status: "Behandlas",
            address: "Andeborgsgatan 28",
            orderDate: "2025-09-17",
            deliveryDate: "",
            notes: "",
        },
    },
    {
        id: "29",
        customer: { name: "Mimmi", address: "Andeborgsvägen 29" },
        items: [{ id: "29a", product: "Äpple", quantity: 6, price: 4.5 }],
        paid: true,
        delivery: {
            status: "Levererad",
            address: "Andeborgsvägen 29",
            orderDate: "2025-09-18",
            deliveryDate: "2025-09-19",
            notes: "Lämna vid entrén",
        },
    },
    {
        id: "30",
        customer: { name: "Kalle Anka", address: "Ankeborgsvägen 30" },
        items: [
            { id: "30a", product: "Banan", quantity: 5, price: 6 },
            { id: "30b", product: "Apelsin", quantity: 4, price: 5 },
        ],
        paid: false,
        delivery: {
            status: "På väg",
            address: "Ankeborgsvägen 30",
            orderDate: "2025-09-18",
            deliveryDate: "",
            notes: "Leverera innan lunch",
        },
    },
];
