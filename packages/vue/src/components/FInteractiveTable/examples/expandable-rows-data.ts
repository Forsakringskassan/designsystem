const rows = [
    {
        id: "1",
        name: "Utbetalning",
        date: "2023-09-27",
        sum: 1200,
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
        myExpandableRow: [
            {
                id: "2a",
                name: "Barnbidrag",
                date: "2023-12-25",
                sum: 1000,
            },
        ],
    },
];

/* --- cut below --- */
export default rows;
