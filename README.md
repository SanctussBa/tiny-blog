# Tiny Blog | React | Typescript | Front-End

## Screenshots of this app:

![](https://github.com/SanctussBa/tiny-blog/blob/master/screenshot1.jpg?raw=true)
![](https://github.com/SanctussBa/tiny-blog/blob/master/screenshot2.jpg?raw=true)

## What is this project about?

* This application is using fake posts from dummyjson API - "https://dummyjson.com/posts". User can read posts divided by genre.
* This project serves as React, TypeScript learning project.

## Important Feature
- Data display by genre is dynamic. Meaning, to add another Section just need to add new line in code with new section. 
In types.ts file:
```Typescript
export const Genre: IGenre = {
    mystery: "#3B3486",
    love: "#61764B",
    fiction: "#9A1663",
    crime: "#2192FF",
    classic:"#937DC2"
    // add new section here
}

```

## What technologies were used?

* This `Front-End` application using `React` with `TypeScript`
* 3rd party API for posts - `"https://dummyjson.com/posts"`


## How you can clone and run this project?

From your command line, first clone this repo:

```
# Clone this repo
>>> git clone https://github.com/SanctussBa/tiny-blog

# Go into the repository
>>> cd .\tiny-blog\

# Remove current origin repository
>>> git remote remove origin

```


### Run React App

1. Go into `TinyBlog/blog/` directory
2. Install all packages and dependancies
```
>>> npm i
```
3. Start application
```
>>> npm start
```

App should be running by its own. If it is not running Open http://localhost:3000 to view it in the browser.
