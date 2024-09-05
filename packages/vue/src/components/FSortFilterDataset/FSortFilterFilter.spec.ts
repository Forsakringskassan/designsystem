import { filter } from "./FSortFilterFilter";

const data = [
    { text: "aAc", year: 2020 },
    { text: "aba", year: 2021 },
    { text: "Aab", year: 2022 },
    { text: "bbb", year: 2023 },
];

function toString(result: typeof data): string {
    return result.map((i) => `${i.text} ${i.year}`).join(", ");
}

it.each`
    searchString     | expected                                    | description
    ${""}            | ${"aAc 2020, aba 2021, Aab 2022, bbb 2023"} | ${"match all when empty search string"}
    ${"   "}         | ${"aAc 2020, aba 2021, Aab 2022, bbb 2023"} | ${"match all when search string containering spaces"}
    ${"not-in-data"} | ${""}                                       | ${"match nothing"}
    ${"a"}           | ${"aAc 2020, aba 2021, Aab 2022"}           | ${"find all items including 'a'"}
    ${"A"}           | ${"aAc 2020, aba 2021, Aab 2022"}           | ${"should be caseinsensitive"}
    ${" A "}         | ${"aAc 2020, aba 2021, Aab 2022"}           | ${"should trim searchstring"}
    ${"20"}          | ${"aAc 2020, aba 2021, Aab 2022, bbb 2023"} | ${"should match number"}
    ${"a 20"}        | ${"aAc 2020, aba 2021, Aab 2022"}           | ${"should match items containing both search terms"}
    ${"bB 20"}       | ${"bbb 2023"}                               | ${"should match item containing both search terms"}
`("should $description", ({ searchString, expected }) => {
    const result = filter(data, ["text", "year"], searchString);
    expect(toString(result)).toEqual(expected);
});
