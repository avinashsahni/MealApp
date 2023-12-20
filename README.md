Meal App
This is a simple web application that allows users to search for meals and manage their favorite meals. The application uses the MealDB API to fetch meal data and provides features to add/remove meals from the user's favorite section.

Table of Contents
Getting Started
Features
Code Overview
Usage
Contributing
License
Getting Started
To get started with the Meal App, simply clone the repository and open the index.html file in a web browser.# MealApp

Features
Search Meals: Users can search for meals using the search bar, and the application displays the matching meals dynamically.

Meal Details: Users can view detailed information about a specific meal, including its category, area, instructions, and a link to watch a video (if available).

Favorite Section: The application has a favorite section where users can add or remove meals from their list of favorites.

Code Overview
Favourite Meal Array Initialization
The code checks if the favouriteSection array exists in the local storage. If not, it initializes an empty array.

![image](https://github.com/avinashsahni/MealApp/assets/5916632/6b47eaac-5970-4889-a8ab-6742b11d08fa)

Fetch Meals from API
The fetchMealsFromApi function asynchronously fetches meals from the MealDB API based on a given URL and search value.
![image](https://github.com/avinashsahni/MealApp/assets/5916632/7d6bfe4a-ba73-491b-b836-ad23abd99a59)

Show Meals List
The showMealList function dynamically displays meal cards in the main section based on the search input value. It also handles adding and removing meals from the favorite section.

![image](https://github.com/avinashsahni/MealApp/assets/5916632/74616837-576a-4cb5-a5d4-e3c608052168)

Show Favorite Meal List
The showFavMealList function displays all favorite meals in the favorite section.
![image](https://github.com/avinashsahni/MealApp/assets/5916632/d66c0e24-4b31-4eef-af79-e7997e9d101b)


Meal App
This is a simple web application that allows users to search for meals and manage their favorite meals. The application uses the MealDB API to fetch meal data and provides features to add/remove meals from the user's favorite section.

Table of Contents
Getting Started
Features
Code Overview
Usage
Contributing
License
Getting Started
To get started with the Meal App, simply clone the repository and open the index.html file in a web browser.

bash
Copy code
git clone <repository-url>
cd <repository-directory>
Features
Search Meals: Users can search for meals using the search bar, and the application displays the matching meals dynamically.

Meal Details: Users can view detailed information about a specific meal, including its category, area, instructions, and a link to watch a video (if available).

Favorite Section: The application has a favorite section where users can add or remove meals from their list of favorites.

Code Overview
Favourite Meal Array Initialization
The code checks if the favouriteSection array exists in the local storage. If not, it initializes an empty array.

javascript
Copy code
if (localStorage.getItem("favouriteSection") == null) {
    localStorage.setItem("favouriteSection", JSON.stringify([]));
}
Fetch Meals from API
The fetchMealsFromApi function asynchronously fetches meals from the MealDB API based on a given URL and search value.

javascript
Copy code
async function fetchMealsFromApi(url, value) {
    // ... fetch logic ...
}
Show Meals List
The showMealList function dynamically displays meal cards in the main section based on the search input value. It also handles adding and removing meals from the favorite section.

javascript
Copy code
function showMealList() {
    // ... display logic ...
}

// ...

function addRemoveToFavList(id) {
    // ... add/remove logic ...
}
Show Favorite Meal List
The showFavMealList function displays all favorite meals in the favorite section.

javascript
Copy code
async function showFavMealList() {
    // ... display logic ...
}
Usage
Open the index.html file in a web browser.
Use the search bar to search for meals.
Click on the "More info" button to view detailed information about a meal.
Click on the "Fav" button to add a meal to the favorites or the "X" button to remove it.




