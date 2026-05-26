// noinspection JSUnusedGlobalSymbols

export interface Award {
    id: number;
    title: string;
    organization: string;
    year: string;
}

export const awardsData: Award[] = [
    { id: 1, title: "Best Driving School", organization: "City Awards", year: "2023" },
    { id: 2, title: "Safety Excellence", organization: "Road Safety Org", year: "2024" },
    { id: 3, title: "Top Rated Instructor", organization: "Driving Pro", year: "2023" },
];
