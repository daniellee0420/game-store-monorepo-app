
![Logo](https://github.com/nphivu414/game-store-monorepo-app/blob/7ddad62ae62de05ee2b6b45c0f30b9669c25f542/game-store.jpg)

    
# Game Store Monorepo

A full-stack web app built with NestJS and ReactJS that helps you find and discover over 500,000+ video games on your device. Powered by RAWG API.


## Authors

- [@nphivu414](https://github.com/nphivu414)
<p>
    <a href="https://www.buymeacoffee.com/nphivu414" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
</p>

## Built With

 - [Nx](https://nx.dev/)
 - [NestJS](https://nestjs.com/)
 - [ReactJS](https://reactjs.org/)
 - [Apollo GraphQL](https://www.apollographql.com/)
 - [RAWG Video Games Database API](https://rawg.io/apidocs)



## Screenshots

|  |  |  |  |
| :-------- | :------- | :------------------------- | :------------------------- |
| ![App Screenshot](https://github.com/nphivu414/game-store-monorepo-app/blob/master/assets/mono-game-store1.png) | ![App Screenshot](https://github.com/nphivu414/game-store-monorepo-app/blob/master/assets/mono-game-store2.png) | ![App Screenshot](https://github.com/nphivu414/game-store-monorepo-app/blob/master/assets/mono-game-store3.png) | ![App Screenshot](https://github.com/nphivu414/game-store-monorepo-app/blob/master/assets/mono-game-store4.png) |

  
## Demo

[Game store on Netlify](https://mono-game-store.netlify.app/)

  
## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/nphivu414/game-store-monorepo-app.git
   ```
2. Install dependencies
   ```sh
   yarn install
   ```
    
## Run Locally

1. Go to the project directory

```bash
  cd game-store-monorepo-app
```

2. Start the NodeJS server

```bash
  yarn nx serve nestjs-app
```

3. Start the ReactJS web app

```bash
  yarn nx serve web-app
```

4. Start exploring GraphQL Playground at http://localhost:3333/graphql and Game Store Web App at http://localhost:4200/
## GRAPHQL API Reference

#### Get a list of games


```
query allGames {
    allGames(page: 1, pageSize: 5) {
        nextPage
        results {
            id
            name
            backgroundImage
            rating
        }
    }
}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `number` | A page number within the paginated result set. |
| `pageSize` | `number` | Number of results to return per page. |
| `date` | `string` | Filter by a release date, for example: `2010-01-01,2018-12-31`. |
| `genres` | `string` | Filter by genres, for example: `4,51` or `action,indie`. |
| `tags` | `string` | Filter by tags, for example: `31,7` or `singleplayer,multiplayer`. |
| `publishers` | `string` | Filter by publishers, for example: `354,20987` or `electronic-arts,microsoft-studios`. |
| `search` | `string` | Search by names |

#### Get a list of games that are part of the same series.

```
query gameSeries {
    gameSeries(page: 1, pageSize: 5) {
        nextPage
        results {
            id
            name
            backgroundImage
            rating
        }
    }
}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `number` | A page number within the paginated result set. |
| `pageSize` | `number` | Number of results to return per page. |
| `id` | `number` | Game ID. |

#### Get details of the game.

```
query gameDetails {
    gameDetails(id: 3498) {
        id
        name
        backgroundImage
        rating
        platforms {
            platform {
            id
            name
            image
            imageBackground
            }
            releasedAt
        }
    }
}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `number` | Game ID. |

#### Get a list of video game genres.

```
query allGenres {
    allGenres(page: 1, pageSize: 10) {
        nextPage
        results {
            id
            name
            thumbnailImage
            games {
                id
                name
            }
        }
    }
}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `number` | A page number within the paginated result set. |
| `pageSize` | `number` | Number of results to return per page. |

#### Get a list of video game tags.

```
query allTags {
    allTags(page: 1, pageSize: 10) {
        nextPage
        results {
            id
            name
            thumbnailImage
            games {
                id
                name
            }
        }
    }
}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `number` | A page number within the paginated result set. |
| `pageSize` | `number` | Number of results to return per page. |

#### Get a list of video game publishers.

```
query allPublishers {
    allPublishers(page: 1, pageSize: 10) {
        nextPage
        results {
            id
            name
            thumbnailImage
            games {
                id
                name
            }
        }
    }
}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `number` | A page number within the paginated result set. |
| `pageSize` | `number` | Number of results to return per page. |

  
