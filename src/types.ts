export type Post = {
    id: number,
    title: "string",
    body: "string",
    tags: string[],
    reactions: number,
    userId: number
}


// export type Genre = ["mystery", "love", "fiction", "crime", "classic"]
export enum Genre {
    mystery = "red",
    love = "blue",
    fiction = "yellow",
    crime = "orange",
    classic = "green"
}

