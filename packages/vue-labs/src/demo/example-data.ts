import { FDate } from "@fkui/date";

export interface FruitItem {
    id: string;
    product: string;
    quantity: number;
    price: number;
}

export interface Address {
    address: string;
    zipcode: string;
    city: string;
}

export const enum OrderStatus {
    PENDING = 0,
    CONFIRMED = 1,
    PROCESSING = 2,
    INTRANSIT = 3,
    DELIVERED = 4,
    CANCELLED = -1,
}

export interface FruitOrder {
    id: string;
    status: OrderStatus;
    invoice: number | null;
    orderedAt: FDate;
    shippedAt: FDate | null;
    invoicedAt: FDate | null;
    customerId: number;
    name: string;
    orderflode: string;
    foljsesedel: boolean;
    avisering: boolean;
    edi: string | null;
    tracking: string | null;
    paid: boolean;
    shippingAddress: Address;
    billingAddress: Address;
    items: FruitItem[];
    notes: string[];
    expanded: [true];
}

export function statusString(status: OrderStatus): string {
    switch (status) {
        case OrderStatus.PENDING:
            return "Inkommen";
        case OrderStatus.CONFIRMED:
            return "Bekräftad";
        case OrderStatus.PROCESSING:
            return "Plockas";
        case OrderStatus.INTRANSIT:
            return "På väg";
        case OrderStatus.DELIVERED:
            return "Levererad";
        case OrderStatus.CANCELLED:
            return "Makulerad";
    }
}

function createPRNG(seed: number): () => number {
    return () => {
        seed |= 0;
        seed = (seed + 0x9e3779b9) | 0;
        let t = seed ^ (seed >>> 16);
        t = Math.imul(t, 0x21f0aaad);
        t = t ^ (t >>> 15);
        t = Math.imul(t, 0x735a2d97);
        /* eslint-disable-next-line sonarjs/no-dead-store, sonarjs/no-nested-assignment -- as is */
        return ((t = t ^ (t >>> 15)) >>> 0) / 4294967296;
    };
}

const baseDate = FDate.fromIso("2025-09-10");
let lastDate = baseDate;

function createOrder(
    order: Partial<FruitOrder> & Pick<FruitOrder, "id" | "status">,
): FruitOrder {
    const n = parseInt(order.id, 10) - 1000;
    const rng = createPRNG(n);
    const orderedAt = lastDate.addDays(-Math.ceil(rng() * 5));
    const shippedAt =
        order.status >= OrderStatus.INTRANSIT
            ? orderedAt.addDays(Math.floor(rng() * 3))
            : null;
    const invoicedAt = order.status >= OrderStatus.DELIVERED ? shippedAt : null;
    const invoice = invoicedAt ? 7242 + n : null;
    const tracking = shippedAt
        ? `14${(Math.round(rng() * n * 123456789) % 100000000).toFixed().padStart(9, "0")}CS`
        : null;
    const foljsesedel = rng() > 0.2;
    const avisering = rng() > 0.2;
    lastDate = orderedAt;
    return {
        invoice,
        orderedAt,
        shippedAt,
        invoicedAt,
        customerId: customers["Kalle Anka"].customerId,
        name: customers["Kalle Anka"].name,
        orderflode: orderflode[Math.round(rng() * 2 + 1) as 1 | 2 | 3],
        foljsesedel,
        avisering,
        edi: `1001${order.id}`,
        tracking,
        items: [],
        paid: invoicedAt ? true : false,
        notes: [],
        expanded: [true],
        ...order,

        shippingAddress: {
            address: "Ankeborgsvägen 1",
            zipcode: "12345",
            city: "Ankeborg",
            ...order.shippingAddress,
        },

        billingAddress: {
            address: "Ankeborgsvägen 1",
            zipcode: "12345",
            city: "Ankeborg",
            ...order.shippingAddress,
            ...order.billingAddress,
        },
    };
}

const customers = {
    "Kalle Anka": {
        customerId: 5382,
        name: "Kalle Anka",
        address: "Paradisäppelvägen 123",
    },
    "Joakim von Anka": {
        customerId: 8365,
        name: "Joakim von Anka",
        address: "Pengabingegränd 2",
    },
    "Knatte Anka": {
        customerId: 5387,
        name: "Knatte Anka",
        address: "Skogsstigen 3",
    },
    "Fnatte Anka": {
        customerId: 5388,
        name: "Fnatte Anka",
        address: "Äventyrsgatan 4",
    },
    "Tjatte Anka": {
        customerId: 5389,
        name: "Tjatte Anka",
        address: "Ankeborgsvägen 5",
    },
    "Kajsa Anka": {
        customerId: 1743,
        name: "Kajsa Anka",
        address: "Andeborgsgatan 7",
    },
    "Musse Pigg": {
        customerId: 9375,
        name: "Musse Pigg",
        address: "Mussevägen 9",
    },
    "Mimmi Pigg": {
        customerId: 9377,
        name: "Mimmi Pigg",
        address: "Andeborgsvägen 8",
    },
    Långben: {
        customerId: 4212,
        name: "Långben",
        address: "Långbengatan 10",
    },
} satisfies Record<
    string,
    { customerId: number; name: string; address: string }
>;

const orderflode = {
    1: "ACME",
    2: "Standard",
    3: "Ekonomi",
};

const orders: FruitOrder[] = [
    createOrder({
        ...customers["Kalle Anka"],
        id: "1001",
        status: OrderStatus.PENDING,
        items: [
            { id: "1a", product: "Äpple", quantity: 5, price: 4.5 },
            { id: "1b", product: "Banan", quantity: 3, price: 6 },
        ],
        shippingAddress: {
            address: "Ankeborgsvägen 1",
            zipcode: "12345",
            city: "Ankeborg",
        },
        billingAddress: {
            address: "Ankeborgsvägen 1",
            zipcode: "12345",
            city: "Ankeborg",
        },
        notes: ["Lämna vid dörren"],
    }),
    createOrder({
        ...customers["Joakim von Anka"],
        id: "1002",
        status: OrderStatus.CONFIRMED,
        items: [
            { id: "2a", product: "Apelsin", quantity: 4, price: 5 },
            { id: "2b", product: "Mango", quantity: 2, price: 15 },
            { id: "2c", product: "Päron", quantity: 6, price: 7 },
        ],
        shippingAddress: {
            address: "Pengabingegränd 2",
            zipcode: "12345",
            city: "Ankeborg",
        },
        notes: ["Ring på klockan"],
    }),
    createOrder({
        ...customers["Knatte Anka"],
        id: "1003",
        status: OrderStatus.CONFIRMED,
        items: [
            { id: "3a", product: "Vindruvor", quantity: 1, price: 30 },
            { id: "3b", product: "Kiwi", quantity: 5, price: 8 },
        ],
        shippingAddress: {
            address: "Skogsstigen 3",
            zipcode: "12345",
            city: "Ankeborg",
        },
        notes: ["Levererad till brevlådan"],
    }),
    createOrder({
        ...customers["Fnatte Anka"],
        id: "1004",
        status: OrderStatus.PROCESSING,
        items: [
            { id: "4a", product: "Ananas", quantity: 1, price: 25 },
            { id: "4b", product: "Banan", quantity: 6, price: 6 },
        ],
        shippingAddress: {
            address: "Äventyrsgatan 4",
            zipcode: "12345",
            city: "Ankeborg",
        },
        notes: ["Vill ha kvitto"],
    }),
    createOrder({
        ...customers["Tjatte Anka"],
        id: "1005",
        status: OrderStatus.INTRANSIT,
        items: [
            { id: "5a", product: "Citron", quantity: 3, price: 4 },
            { id: "5b", product: "Lime", quantity: 3, price: 5 },
            { id: "5c", product: "Mango", quantity: 1, price: 15 },
        ],
        shippingAddress: {
            address: "Ankeborgsvägen 5",
            zipcode: "12345",
            city: "Ankeborg",
        },
        notes: ["Känslig för starka dofter"],
    }),
    createOrder({
        ...customers["Joakim von Anka"],
        id: "1006",
        status: OrderStatus.INTRANSIT,
        items: [{ id: "6a", product: "Äpple", quantity: 10, price: 4.5 }],
        shippingAddress: {
            address: "Pengabingegränd 10",
            zipcode: "12345",
            city: "Ankeborg",
        },
    }),
    createOrder({
        ...customers["Kajsa Anka"],
        id: "1007",
        status: OrderStatus.INTRANSIT,
        items: [
            { id: "7a", product: "Banan", quantity: 6, price: 6 },
            { id: "7b", product: "Apelsin", quantity: 3, price: 5 },
        ],
        shippingAddress: {
            address: "Andeborgsgatan 7",
            zipcode: "12345",
            city: "Ankeborg",
        },
    }),
    createOrder({
        ...customers["Mimmi Pigg"],
        id: "1008",
        status: OrderStatus.DELIVERED,
        items: [
            { id: "8a", product: "Päron", quantity: 2, price: 7 },
            { id: "8b", product: "Kiwi", quantity: 4, price: 8 },
        ],
        shippingAddress: {
            address: "Andeborgsvägen 8",
            zipcode: "12345",
            city: "Ankeborg",
        },
    }),
    createOrder({
        ...customers["Musse Pigg"],
        id: "1009",
        status: OrderStatus.DELIVERED,
        items: [{ id: "9a", product: "Ananas", quantity: 1, price: 25 }],
        shippingAddress: {
            address: "Mussevägen 9",
            zipcode: "12345",
            city: "Ankeborg",
        },
    }),
    createOrder({
        ...customers["Långben"],
        id: "1010",
        status: OrderStatus.DELIVERED,
        items: [{ id: "10a", product: "Citron", quantity: 5, price: 4 }],
        shippingAddress: {
            address: "Långbengatan 10",
            zipcode: "12345",
            city: "Ankeborg",
        },
    }),
    createOrder({
        ...customers["Kajsa Anka"],
        id: "1011",
        status: OrderStatus.CANCELLED,
        items: [
            { id: "11a", product: "Äpple", quantity: 3, price: 4.5 },
            { id: "11b", product: "Mango", quantity: 1, price: 15 },
        ],
        shippingAddress: {
            address: "Andeborgsgatan 11",
            zipcode: "12345",
            city: "Ankeborg",
        },
    }),
    createOrder({
        ...customers["Kalle Anka"],
        id: "1012",
        status: OrderStatus.DELIVERED,
        items: [
            { id: "12a", product: "Päron", quantity: 6, price: 7 },
            { id: "12b", product: "Kiwi", quantity: 3, price: 8 },
        ],
        shippingAddress: {
            address: "Ankeborgsvägen 12",
            zipcode: "12345",
            city: "Ankeborg",
        },
    }),
    createOrder({
        ...customers["Mimmi Pigg"],
        id: "1013",
        status: OrderStatus.DELIVERED,
        items: [{ id: "13a", product: "Banan", quantity: 2, price: 6 }],
        shippingAddress: {
            address: "Andeborgsvägen 13",
            zipcode: "12345",
            city: "Ankeborg",
        },
    }),
    createOrder({
        ...customers["Knatte Anka"],
        id: "1014",
        status: OrderStatus.DELIVERED,
        items: [{ id: "14a", product: "Citron", quantity: 4, price: 4 }],
        shippingAddress: {
            address: "Skogsstigen 14",
            zipcode: "12345",
            city: "Ankeborg",
        },
        notes: ["Lämna i brevlådan"],
    }),
    createOrder({
        ...customers["Tjatte Anka"],
        id: "1015",
        status: OrderStatus.DELIVERED,
        items: [
            { id: "15a", product: "Apelsin", quantity: 5, price: 5 },
            { id: "15b", product: "Mango", quantity: 2, price: 15 },
        ],
        shippingAddress: {
            address: "Ankeborgsvägen 15",
            zipcode: "12345",
            city: "Ankeborg",
        },
    }),
    createOrder({
        ...customers["Fnatte Anka"],
        id: "1016",
        status: OrderStatus.DELIVERED,
        items: [{ id: "16a", product: "Äpple", quantity: 6, price: 4.5 }],
        shippingAddress: {
            address: "Äventyrsgatan 16",
            zipcode: "12345",
            city: "Ankeborg",
        },
    }),
    createOrder({
        ...customers["Musse Pigg"],
        id: "1017",
        status: OrderStatus.DELIVERED,
        items: [
            { id: "17a", product: "Kiwi", quantity: 3, price: 8 },
            { id: "17b", product: "Vindruvor", quantity: 2, price: 30 },
        ],
        shippingAddress: {
            address: "Mussevägen 17",
            zipcode: "12345",
            city: "Ankeborg",
        },
    }),
    createOrder({
        ...customers["Långben"],
        id: "1018",
        status: OrderStatus.DELIVERED,
        items: [{ id: "18a", product: "Ananas", quantity: 2, price: 25 }],
        shippingAddress: {
            address: "Långbengatan 18",
            zipcode: "12345",
            city: "Ankeborg",
        },
        notes: ["Ingen kontakt med hunden"],
    }),
    createOrder({
        ...customers["Tjatte Anka"],
        id: "1019",
        status: OrderStatus.DELIVERED,
        items: [
            { id: "19a", product: "Citron", quantity: 1, price: 4 },
            { id: "19b", product: "Lime", quantity: 2, price: 5 },
        ],
        shippingAddress: {
            address: "Ankeborgsvägen 19",
            zipcode: "12345",
            city: "Ankeborg",
        },
    }),
    createOrder({
        ...customers["Knatte Anka"],
        id: "1020",
        status: OrderStatus.DELIVERED,
        items: [{ id: "20a", product: "Mango", quantity: 3, price: 15 }],
        shippingAddress: {
            address: "Skogsstigen 20",
            zipcode: "12345",
            city: "Ankeborg",
        },
    }),
    createOrder({
        ...customers["Mimmi Pigg"],
        id: "1021",
        status: OrderStatus.DELIVERED,
        items: [
            { id: "21a", product: "Äpple", quantity: 4, price: 4.5 },
            { id: "21b", product: "Banan", quantity: 5, price: 6 },
        ],
        shippingAddress: {
            address: "Andeborgsvägen 21",
            zipcode: "12345",
            city: "Ankeborg",
        },
        notes: ["Ring innan leverans"],
    }),
    createOrder({
        ...customers["Kalle Anka"],
        id: "1022",
        status: OrderStatus.DELIVERED,
        items: [
            { id: "22a", product: "Mango", quantity: 2, price: 15 },
            { id: "22b", product: "Kiwi", quantity: 6, price: 8 },
        ],
        shippingAddress: {
            address: "Ankeborgsvägen 22",
            zipcode: "12345",
            city: "Ankeborg",
        },
        notes: ["Lämna hos grannen om ingen är hemma"],
    }),
    createOrder({
        ...customers["Fnatte Anka"],
        id: "1023",
        status: OrderStatus.DELIVERED,
        items: [
            { id: "23a", product: "Citron", quantity: 3, price: 4 },
            { id: "23b", product: "Lime", quantity: 2, price: 5 },
        ],
        shippingAddress: {
            address: "Äventyrsgatan 23",
            zipcode: "12345",
            city: "Ankeborg",
        },
        notes: ["Extra noggrant packad"],
    }),
    createOrder({
        ...customers["Tjatte Anka"],
        id: "1024",
        status: OrderStatus.DELIVERED,
        items: [{ id: "24a", product: "Apelsin", quantity: 5, price: 5 }],
        shippingAddress: {
            address: "Ankeborgsvägen 24",
            zipcode: "12345",
            city: "Ankeborg",
        },
        notes: ["Leverera mellan 10-12"],
    }),
    createOrder({
        ...customers["Knatte Anka"],
        id: "1025",
        status: OrderStatus.DELIVERED,
        items: [
            { id: "25a", product: "Vindruvor", quantity: 2, price: 30 },
            { id: "25b", product: "Kiwi", quantity: 1, price: 8 },
        ],
        shippingAddress: {
            address: "Skogsstigen 25",
            zipcode: "12345",
            city: "Ankeborg",
        },
    }),
    createOrder({
        ...customers["Musse Pigg"],
        id: "1026",
        status: OrderStatus.DELIVERED,
        items: [
            { id: "26a", product: "Ananas", quantity: 1, price: 25 },
            { id: "26b", product: "Banan", quantity: 4, price: 6 },
        ],
        shippingAddress: {
            address: "Mussevägen 26",
            zipcode: "12345",
            city: "Ankeborg",
        },
        notes: ["Ring när ni är utanför"],
    }),
    createOrder({
        ...customers["Mimmi Pigg"],
        id: "1027",
        status: OrderStatus.DELIVERED,
        items: [{ id: "27a", product: "Mango", quantity: 3, price: 15 }],
        shippingAddress: {
            address: "Långbengatan 27",
            zipcode: "12345",
            city: "Ankeborg",
        },
        notes: ["Kontakta via telefon om försening"],
    }),
    createOrder({
        ...customers["Kajsa Anka"],
        id: "1028",
        status: OrderStatus.DELIVERED,
        items: [
            { id: "28a", product: "Citron", quantity: 2, price: 4 },
            { id: "28b", product: "Lime", quantity: 3, price: 5 },
        ],
        shippingAddress: {
            address: "Andeborgsgatan 28",
            zipcode: "12345",
            city: "Ankeborg",
        },
    }),
    createOrder({
        ...customers["Mimmi Pigg"],
        id: "1029",
        status: OrderStatus.DELIVERED,
        items: [{ id: "29a", product: "Äpple", quantity: 6, price: 4.5 }],
        shippingAddress: {
            address: "Andeborgsvägen 29",
            zipcode: "12345",
            city: "Ankeborg",
        },
        notes: ["Lämna vid entrén"],
    }),
    createOrder({
        ...customers["Kalle Anka"],
        id: "1030",
        status: OrderStatus.DELIVERED,
        items: [
            { id: "30a", product: "Banan", quantity: 5, price: 6 },
            { id: "30b", product: "Apelsin", quantity: 4, price: 5 },
        ],
        shippingAddress: {
            address: "Ankeborgsvägen 30",
            zipcode: "12345",
            city: "Ankeborg",
        },
        notes: ["Leverera innan lunch"],
    }),
];

export default orders;
