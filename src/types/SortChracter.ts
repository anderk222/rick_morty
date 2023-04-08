export interface Characters {
    data: Data;
}

export interface Data {
    characters: CharactersClass;
}

export interface CharactersClass {
    results: SortCharacter[];
    info:    Info;
}

export interface Info {
    count: number;
    pages: number;
    next:  number;
    prev:  null;
}

export interface SortCharacter {
    id:    string;
    name:  string;
    image: string;
}
