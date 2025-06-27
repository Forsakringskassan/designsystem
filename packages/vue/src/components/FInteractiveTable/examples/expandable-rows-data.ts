const rows = [
    {
        id: "1",
        name: "Utbetalning",
        date: "2023-09-27",
        sum: 1200,
        beskrivning: "Första utbetalning",
        myExpandableRow: [
            {
                id: "1a",
                name: "Barnbidrag",
                date: "2023-09-25",
                sum: 200,
            },
            {
                id: "1b",
                name: "Övrig ersättning",
                date: "2023-09-27",
                sum: 1000,
            },
        ],
    },
    {
        id: "2",
        name: "Utbetalning",
        date: "2023-12-25",
        sum: 1000,
        beskrivning: "Andra utbetalning",
        myExpandableRow: [
            {
                id: "2a",
                name: "Barnbidrag",
                date: "2023-12-25",
                sum: 1000,
            },
        ],
    },
    {
        id: "3",
        name: "Återbäring",
        date: "2025-05-06",
        sum: 123456789,
        beskrivning: "Tredje utbetalning",
        myExpandableRow: [
            {
                id: "3a",
                name: "Skatten",
                date: "2025-05-01",
                sum: -10000,
            },
        ],
    },
];

/* --- cut below --- */
export default rows;
