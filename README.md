# Movie Search App using OMDB API and VueJs
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### App Description
The challenge was to recreate the image below with the omdb api https://www.omdbapi.com/:
![Alt text](src/assets/ombd-challenge-mockup.png.JPG?raw=true "Challenge")

The main challenge in terms of logic here was implementing the year range filter because the challenge asks for a year range while the api only supports filtering based on one year.
Intersection Api has been used here to display only 10 records to the users at a time and load more results as the user scrolls the left side list.

The user types in a movie/series title, optionally selects filters in the top
section of this display, which then filters the list of movies that are listed on the left-hand
column. On selecting an entry, the full details for the movie/series is displayed in the
main (RHS) section of this display. There is also a “Watchlist”
functionality, where a user can select add/remove a specific title from a list of saved
titles.

### Screenshots
Initial State
![Alt text](src/assets/Initial%20State.JPG?raw=true "Initial State")

Left Side After Search
![Alt text](src/assets/Left%20Side.JPG?raw=true "Left Side")

Right Side after a reacord from the left side is clicked
![Alt text](src/assets/All%20Content.JPG?raw=true "Right Side")

Filters in action
![Alt text](src/assets/Filters.JPG?raw=true "Filters")

Watchlist
![Alt text](src/assets/Wishlisted%20Movies.JPG?raw=true "Watchlist")


![Alt text](src/assets/Wishlist.JPG?raw=true "Watchlist2")



