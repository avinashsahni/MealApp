// its make a favourites meal array if its not exist in local storage
if (localStorage.getItem("favouriteSection") == null) {
    localStorage.setItem("favouriteSection", JSON.stringify([]));
}

// its fetch meals from api and return it
async function fetchMealsFromApi(url,value) {
    const response=await fetch(`${url+value}`);
    const meals=await response.json();
    return meals;
}


// its show's all meals card in main acording to search input value
function showMealList(){
    let inputValue = document.getElementById("my-search").value;
    let arr=JSON.parse(localStorage.getItem("favouriteSection"));
    let url="https://www.themealdb.com/api/json/v1/1/search.php?s=";
    let html = "";
    let meals=fetchMealsFromApi(url,inputValue);
    meals.then(data=>{
        if (data.meals) {
            data.meals.forEach((element) => {
                let isFav=false;
                for (let index = 0; index < arr.length; index++) {
                    if(arr[index]==element.idMeal){
                        isFav=true;
                    }
                }

                //if meal is in the favorite list

                if (isFav) {
                    html += `
                <div id="card" class="card mb-3" style="width: 20rem;">
                    <img src="${element.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.strMeal}</h5>
                        <div class="d-flex justify-content-between mt-5">
                            <button type="button" class="btn btn-success" onclick="showMealDetails(${element.idMeal})">More info</button>
                            <button id="main${element.idMeal}" class="btn btn-danger active" onclick="addRemoveToFavList(${element.idMeal})" style="border-radius:50%">remove</button>
                        </div>
                    </div>
                </div>
                `; //else, if it's not in favorite list
                } else {
                    html += `
                <div id="card" class="card mb-3" style="width: 20rem;">
                    <img src="${element.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.strMeal}</h5>
                        <div class="d-flex justify-content-between mt-5">
                            <button type="button" class="btn btn-success" onclick="showMealDetails(${element.idMeal})">More info</button>
                            <button id="main${element.idMeal}" class="btn btn-danger" onclick="addRemoveToFavList(${element.idMeal})" style="border-radius:12%">Fav</i></button>
                        </div>
                    </div>
                </div>
                `;
                }  
            });

            //if the searched meal is not found in mealDB Api
            //and image will be shown
        } else {
            html += `
            <div class="page-wrap d-flex flex-row align-items-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-12 text-center">
                            <span class="display-1 d-block">404</span>
                            <div class="mb-4 lead">
                                The meal you are looking for was not found.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }
        document.getElementById("main").innerHTML = html;
    });
}



//its shows full meal details in main after clicking on detail button
async function showMealDetails(id) {
    let url="https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
    let html="";
    await fetchMealsFromApi(url,id).then(data=>{
        html += `
          <div id="meal-details" class="mb-5">
            <div id="meal-header" class="d-flex justify-content-around flex-wrap">
              <div id="meal-thumbail">
                <img class="mb-2" src="${data.meals[0].strMealThumb}" alt="" srcset="">
              </div>
              <div id="details">
                <h3>${data.meals[0].strMeal}</h3>
                <h6>Category : ${data.meals[0].strCategory}</h6>
                <h6>Area : ${data.meals[0].strArea}</h6>
              </div>
            </div>
            <div id="meal-instruction" class="mt-3">
              <h5 class="text-center">Instruction :</h5>
              <p>${data.meals[0].strInstructions}</p>
            </div>
            <div class="text-center">
              <a href="${data.meals[0].strYoutube}" target="_blank" class="btn btn-outline-light mt-3">Watch Video</a>
            </div>
          </div>
        `;
    });
    document.getElementById("main").innerHTML=html;
}



// its shows all favourites meals in favourites body
async function showFavMealList() {
    let arr=JSON.parse(localStorage.getItem("favouriteSection"));
    let url="https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
    let html="";

     //when favorite list is empty
     //it will load the text below
    if (arr.length==0) {
        html += `
            <div class="page-wrap d-flex flex-row align-items-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-12 text-center">
                            <span class="display-1 d-block">Sorry</span>
                            <div class="mb-4 lead">
                                Your favourite section is empty.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
    } else {
        for (let index = 0; index < arr.length; index++) {
            await fetchMealsFromApi(url,arr[index]).then(data=>{
                html += `
                <div id="card" class="card mb-3" style="width: 20rem;">
                    <img src="${data.meals[0].strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data.meals[0].strMeal}</h5>
                        <div class="d-flex justify-content-between mt-5">
                            <button type="button" class="btn btn-success" onclick="showMealDetails(${data.meals[0].idMeal})">More info</button>
                            <button id="main${data.meals[0].idMeal}" class="btn btn-danger active" onclick="addRemoveToFavList(${data.meals[0].idMeal})" style="border-radius:12%"></i>X</button>
                        </div>
                    </div>
                </div>
                `;
            });   
        }
    }
    document.getElementById("favourites-body").innerHTML=html;
}


//its adds and remove meals to favourite section
function addRemoveToFavList(id) {
    let arr=JSON.parse(localStorage.getItem("favouriteSection"));
    let contain=false;
    for (let index = 0; index < arr.length; index++) {
        if (id==arr[index]) {
            contain=true;
        }
    }
    if (contain) {
        let number = arr.indexOf(id);
        arr.splice(number, 1);
        alert("your meal removed from your favourite section :(");
    } else {
        arr.push(id);
        alert("your meal added to your favourite section :)");
    }
    localStorage.setItem("favouriteSection",JSON.stringify(arr));
    showMealList();
    showFavMealList();
}