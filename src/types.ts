export type Post = {
    id: number,
    title: "string",
    body: "string",
    tags: string[],
    reactions: number,
    userId: number
}

interface IGenre {
    [key: string]: string
}

export const Genre: IGenre = {
    mystery: "#3B3486",
    love: "#61764B",
    fiction: "#9A1663",
    crime: "#2192FF",
    classic:"#937DC2"
}

