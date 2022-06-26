import axios from "axios";

const SERVER_ADDR = "https://rocky-wildwood-62155.herokuapp.com/";
// const SERVER_ADDR = "http://127.0.0.1:5000/";

/* --------------------------------- CREATE --------------------------------- */
export const addNewSpot = (newEntry) => {
    console.log('Query to add entry to server ...');
    const password = prompt("Password", "");
    axios.get(SERVER_ADDR + 'create', { "params": { "spot": newEntry, "token": password } }, 'no-cors')
        .then(res => {
            if (res.data === "UNAUTHORIZED") {
                alert("UNAUTHORIZED to create new restaurant")
            }
            else {
                alert("Added to database: " + res.data);
            }
        })
        .catch(err => {
            console.log("... server request failed !");
            console.log(err);
        });
};

/* ---------------------------------- LIST ---------------------------------- */
export const requestRestaurantsList = (setRestaurantsList) => {
    console.log('Request restaurants list to server ...');
    axios.get(SERVER_ADDR + "list", 'no-cors')
        .then(res => {
            console.log("Restaurants list is loaded ! (found " + res.data.length + ")");
            var formattedRestaurantsList = [];
            for (const resRestaurant of res.data) {
                const formattedRestaurant = {
                    id: resRestaurant.id,
                    name: resRestaurant.name,
                    food: resRestaurant.food,
                    vegetarian: resRestaurant.vegetarian,
                    price: resRestaurant.price,
                    distance: resRestaurant.distance,
                    rate: resRestaurant.rate,
                    website: resRestaurant.website,
                    deal: resRestaurant.deal,
                    address: {
                        streetNum: resRestaurant.streetNum,
                        street: resRestaurant.street,
                        city: resRestaurant.city,
                    },
                    coordinates: {
                        lon: resRestaurant.longitude,
                        lat: resRestaurant.latitude
                    }
                }
                formattedRestaurantsList.push(formattedRestaurant)
            }
            setRestaurantsList(formattedRestaurantsList);
        })
        .catch(err => {
            console.log("... server request failed !");
            console.log(err);
        });
};

/* ------------------------------- EDIT BY ID ------------------------------- */
export const editSpotInfos = (spotId, newEntry) => {
    console.log('Query to edit restaurant infos to server ...');
    const password = prompt("Password", "");
    axios.get(SERVER_ADDR + 'edit', { params: { id: spotId, newSpot: newEntry, "token": password } }, 'no-cors')
        .then(res => {
            if (res.data === "UNAUTHORIZED") {
                alert("UNAUTHORIZED to edit restaurant")
            }
            else {
                alert("Editted restaurant: " + res.data);
            }
        })
        .catch(err => {
            console.log("... server request failed !");
            console.log(err);
        });
};

/* ------------------------------ FIND MATCHING ----------------------------- */
export const findSpots = (foodChoice, priceChoice, distanceChoice, vegetarianChoice, setFoundSpots) => {
    console.log('Query to find spots to server ...');
    axios.get(SERVER_ADDR + 'find', { params: {
        "food": foodChoice,
        "price": priceChoice,
        "distance": distanceChoice,
        "vegetarianChoice": vegetarianChoice
    } }, 'no-cors')
        .then(res => {
            const spotsList = res.data;
            if (spotsList.length === 0) {
                alert("No spots found with queried params");
            }
            else {
                var formattedRestaurantsList = [];
                for (const resRestaurant of res.data) {
                    const formattedRestaurant = {
                        id: resRestaurant.id,
                        name: resRestaurant.name,
                        food: resRestaurant.food,
                        vegetarian: resRestaurant.vegetarian,
                        price: resRestaurant.price,
                        distance: resRestaurant.distance,
                        rate: resRestaurant.rate,
                        website: resRestaurant.website,
                        deal: resRestaurant.deal,
                        address: {
                            streetNum: resRestaurant.streetNum,
                            street: resRestaurant.street,
                            city: resRestaurant.city,
                        },
                        coordinates: {
                            lon: resRestaurant.longitude,
                            lat: resRestaurant.latitude
                        }
                    }
                    formattedRestaurantsList.push(formattedRestaurant)
                }
                setFoundSpots(formattedRestaurantsList);
            }
        })
        .catch(err => {
            console.log("... server request failed !");
            console.log(err);
        });
};