export interface City {
    name: string;
    country: string;
    subcountry: string;
    geonameid: number;
}

const cities = [
    {
        name: "Umeå",
        country: "Sweden",
        subcountry: "Västerbotten",
        geonameid: 602150,
    },
    {
        name: "Skellefteå",
        country: "Sweden",
        subcountry: "Västerbotten",
        geonameid: 602913,
    },
    {
        name: "Piteå",
        country: "Sweden",
        subcountry: "Norrbotten",
        geonameid: 603570,
    },
    {
        name: "Luleå",
        country: "Sweden",
        subcountry: "Norrbotten",
        geonameid: 604490,
    },
    {
        name: "Kiruna",
        country: "Sweden",
        subcountry: "Norrbotten",
        geonameid: 605155,
    },
    {
        name: "Boden",
        country: "Sweden",
        subcountry: "Norrbotten",
        geonameid: 606531,
    },
    {
        name: "Ystad",
        country: "Sweden",
        subcountry: "Skåne",
        geonameid: 2662149,
    },
    {
        name: "Visby",
        country: "Sweden",
        subcountry: "Gotland",
        geonameid: 2662689,
    },
    {
        name: "Växjö",
        country: "Sweden",
        subcountry: "Kronoberg",
        geonameid: 2663536,
    },
    {
        name: "Västervik",
        country: "Sweden",
        subcountry: "Kalmar",
        geonameid: 2664203,
    },
    {
        name: "Västerås",
        country: "Sweden",
        subcountry: "Västmanland",
        geonameid: 2664454,
    },
    {
        name: "Värnamo",
        country: "Sweden",
        subcountry: "Jönköping",
        geonameid: 2664855,
    },
    {
        name: "Varberg",
        country: "Sweden",
        subcountry: "Halland",
        geonameid: 2664996,
    },
    {
        name: "Vänersborg",
        country: "Sweden",
        subcountry: "Västra Götaland",
        geonameid: 2665171,
    },
    {
        name: "Vallentuna",
        country: "Sweden",
        subcountry: "Stockholm",
        geonameid: 2665452,
    },
    {
        name: "Uppsala",
        country: "Sweden",
        subcountry: "Uppsala",
        geonameid: 2666199,
    },
    {
        name: "Upplands Väsby",
        country: "Sweden",
        subcountry: "Stockholm",
        geonameid: 2666238,
    },
    {
        name: "Uddevalla",
        country: "Sweden",
        subcountry: "Västra Götaland",
        geonameid: 2666670,
    },
    {
        name: "Tumba",
        country: "Sweden",
        subcountry: "Stockholm",
        geonameid: 2667094,
    },
    {
        name: "Tullinge",
        country: "Sweden",
        subcountry: "Stockholm",
        geonameid: 2667109,
    },
    {
        name: "Trollhättan",
        country: "Sweden",
        subcountry: "Västra Götaland",
        geonameid: 2667303,
    },
    {
        name: "Trelleborg",
        country: "Sweden",
        subcountry: "Skåne",
        geonameid: 2667402,
    },
    {
        name: "Täby",
        country: "Sweden",
        subcountry: "Stockholm",
        geonameid: 2669772,
    },
    {
        name: "Sundsvall",
        country: "Sweden",
        subcountry: "Västernorrland",
        geonameid: 2670781,
    },
    {
        name: "Sundbyberg",
        country: "Sweden",
        subcountry: "Stockholm",
        geonameid: 2670879,
    },
    {
        name: "Stockholm",
        country: "Sweden",
        subcountry: "Stockholm",
        geonameid: 2673730,
    },
    {
        name: "Solna",
        country: "Sweden",
        subcountry: "Stockholm",
        geonameid: 2675397,
    },
    {
        name: "Sollentuna",
        country: "Sweden",
        subcountry: "Stockholm",
        geonameid: 2675408,
    },
    {
        name: "Södertälje",
        country: "Sweden",
        subcountry: "Stockholm",
        geonameid: 2676176,
    },
    {
        name: "Skövde",
        country: "Sweden",
        subcountry: "Västra Götaland",
        geonameid: 2677234,
    },
    {
        name: "Skara",
        country: "Sweden",
        subcountry: "Västra Götaland",
        geonameid: 2678210,
    },
    {
        name: "Sandviken",
        country: "Sweden",
        subcountry: "Gävleborg",
        geonameid: 2680075,
    },
    {
        name: "Råsunda",
        country: "Sweden",
        subcountry: "Stockholm",
        geonameid: 2683034,
    },
    {
        name: "Partille",
        country: "Sweden",
        subcountry: "Västra Götaland",
        geonameid: 2684395,
    },
    {
        name: "Östersund",
        country: "Sweden",
        subcountry: "Jämtland",
        geonameid: 2685750,
    },
    {
        name: "Östermalm",
        country: "Sweden",
        subcountry: "Stockholm",
        geonameid: 2685828,
    },
    {
        name: "Oskarshamn",
        country: "Sweden",
        subcountry: "Kalmar",
        geonameid: 2686162,
    },
    {
        name: "Örnsköldsvik",
        country: "Sweden",
        subcountry: "Västernorrland",
        geonameid: 2686469,
    },
    {
        name: "Örebro",
        country: "Sweden",
        subcountry: "Örebro",
        geonameid: 2686657,
    },
    {
        name: "Nyköping",
        country: "Sweden",
        subcountry: "Södermanland",
        geonameid: 2687700,
    },
    {
        name: "Norrtälje",
        country: "Sweden",
        subcountry: "Stockholm",
        geonameid: 2688250,
    },
    {
        name: "Norrköping",
        country: "Sweden",
        subcountry: "Östergötland",
        geonameid: 2688368,
    },
    {
        name: "Nässjö",
        country: "Sweden",
        subcountry: "Jönköping",
        geonameid: 2690170,
    },
    {
        name: "Nacka",
        country: "Sweden",
        subcountry: "Stockholm",
        geonameid: 2690580,
    },
    {
        name: "Motala",
        country: "Sweden",
        subcountry: "Östergötland",
        geonameid: 2690960,
    },
    {
        name: "Mölndal",
        country: "Sweden",
        subcountry: "Västra Götaland",
        geonameid: 2691459,
    },
    {
        name: "Märsta",
        country: "Sweden",
        subcountry: "Stockholm",
        geonameid: 2692475,
    },
    {
        name: "Malmö",
        country: "Sweden",
        subcountry: "Skåne",
        geonameid: 2692969,
    },
    {
        name: "Lund",
        country: "Sweden",
        subcountry: "Skåne",
        geonameid: 2693678,
    },
    {
        name: "Linköping",
        country: "Sweden",
        subcountry: "Östergötland",
        geonameid: 2694762,
    },
    {
        name: "Lidköping",
        country: "Sweden",
        subcountry: "Västra Götaland",
        geonameid: 2696329,
    },
    {
        name: "Lidingö",
        country: "Sweden",
        subcountry: "Stockholm",
        geonameid: 2696334,
    },
    {
        name: "Lerum",
        country: "Sweden",
        subcountry: "Västra Götaland",
        geonameid: 2696503,
    },
    {
        name: "Landskrona",
        country: "Sweden",
        subcountry: "Skåne",
        geonameid: 2697720,
    },
    {
        name: "Kungsbacka",
        country: "Sweden",
        subcountry: "Halland",
        geonameid: 2698729,
    },
    {
        name: "Kungälv",
        country: "Sweden",
        subcountry: "Västra Götaland",
        geonameid: 2698739,
    },
    {
        name: "Kristinehamn",
        country: "Sweden",
        subcountry: "Värmland",
        geonameid: 2699282,
    },
    {
        name: "Kristianstad",
        country: "Sweden",
        subcountry: "Skåne",
        geonameid: 2699310,
    },
    {
        name: "Köping",
        country: "Sweden",
        subcountry: "Västmanland",
        geonameid: 2699791,
    },
    {
        name: "Katrineholm",
        country: "Sweden",
        subcountry: "Södermanland",
        geonameid: 2701223,
    },
    {
        name: "Karlstad",
        country: "Sweden",
        subcountry: "Värmland",
        geonameid: 2701680,
    },
    {
        name: "Karlskrona",
        country: "Sweden",
        subcountry: "Blekinge",
        geonameid: 2701713,
    },
    {
        name: "Karlskoga",
        country: "Sweden",
        subcountry: "Örebro",
        geonameid: 2701715,
    },
    {
        name: "Karlshamn",
        country: "Sweden",
        subcountry: "Blekinge",
        geonameid: 2701727,
    },
    {
        name: "Kalmar",
        country: "Sweden",
        subcountry: "Kalmar",
        geonameid: 2702261,
    },
    {
        name: "Jönköping",
        country: "Sweden",
        subcountry: "Jönköping",
        geonameid: 2702979,
    },
    {
        name: "Jakobsberg",
        country: "Sweden",
        subcountry: "Stockholm",
        geonameid: 2703396,
    },
    {
        name: "Huskvarna",
        country: "Sweden",
        subcountry: "Jönköping",
        geonameid: 2704136,
    },
    {
        name: "Huddinge",
        country: "Sweden",
        subcountry: "Stockholm",
        geonameid: 2704620,
    },
    {
        name: "Helsingborg",
        country: "Sweden",
        subcountry: "Skåne",
        geonameid: 2706767,
    },
    {
        name: "Hässleholm",
        country: "Sweden",
        subcountry: "Skåne",
        geonameid: 2707399,
    },
    {
        name: "Härnösand",
        country: "Sweden",
        subcountry: "Västernorrland",
        geonameid: 2707684,
    },
    {
        name: "Haninge",
        country: "Sweden",
        subcountry: "Stockholm",
        geonameid: 2707953,
    },
    {
        name: "Halmstad",
        country: "Sweden",
        subcountry: "Halland",
        geonameid: 2708365,
    },
    {
        name: "Göteborg",
        country: "Sweden",
        subcountry: "Västra Götaland",
        geonameid: 2711537,
    },
    {
        name: "Gävle",
        country: "Sweden",
        subcountry: "Gävleborg",
        geonameid: 2712414,
    },
    {
        name: "Gamla Uppsala",
        country: "Sweden",
        subcountry: "Uppsala",
        geonameid: 2712993,
    },
    {
        name: "Falun",
        country: "Sweden",
        subcountry: "Dalarna",
        geonameid: 2715459,
    },
    {
        name: "Falköping",
        country: "Sweden",
        subcountry: "Västra Götaland",
        geonameid: 2715568,
    },
    {
        name: "Falkenberg",
        country: "Sweden",
        subcountry: "Halland",
        geonameid: 2715573,
    },
    {
        name: "Eslöv",
        country: "Sweden",
        subcountry: "Skåne",
        geonameid: 2715946,
    },
    {
        name: "Eskilstuna",
        country: "Sweden",
        subcountry: "Södermanland",
        geonameid: 2715953,
    },
    {
        name: "Enköping",
        country: "Sweden",
        subcountry: "Uppsala",
        geonameid: 2716166,
    },
    {
        name: "Bromma",
        country: "Sweden",
        subcountry: "Stockholm",
        geonameid: 2719111,
    },
    {
        name: "Borlänge",
        country: "Sweden",
        subcountry: "Dalarna",
        geonameid: 2720383,
    },
    {
        name: "Borås",
        country: "Sweden",
        subcountry: "Västra Götaland",
        geonameid: 2720501,
    },
    {
        name: "Boo",
        country: "Sweden",
        subcountry: "Stockholm",
        geonameid: 2721259,
    },
    {
        name: "Årsta",
        country: "Sweden",
        subcountry: "Stockholm",
        geonameid: 2725201,
    },
    {
        name: "Ängelholm",
        country: "Sweden",
        subcountry: "Skåne",
        geonameid: 2725901,
    },
    {
        name: "Alingsås",
        country: "Sweden",
        subcountry: "Västra Götaland",
        geonameid: 2726756,
    },
    {
        name: "Åkersberga",
        country: "Sweden",
        subcountry: "Stockholm",
        geonameid: 2727234,
    },
    {
        name: "Majorna",
        country: "Sweden",
        subcountry: "Västra Götaland",
        geonameid: 6619708,
    },
];

export interface NestedCity {
    name: string;
    children?: NestedCity[];
}

const map = new Map<string, NestedCity[]>();
cities.forEach((item) => {
    const key = item.subcountry;
    const collection = map.get(key);
    if (!collection) {
        map.set(key, [item]);
    } else {
        collection.push(item);
    }
});

export const nestedCities: NestedCity[] = Array.from(map).map(
    ([name, children]) => ({ name, children }),
);
