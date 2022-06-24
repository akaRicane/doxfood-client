import axios from "axios";

// const SERVER_ADDR = "https://rocky-wildwood-62155.herokuapp.com/";
const SERVER_ADDR = "http://127.0.0.1:5000/";

/* --------------------------------- CREATE --------------------------------- */
export const addNewSpot = (newEntry) => {
    console.log('Query to add entry to server ...');
    // console.log(newEntry)
    axios.get(SERVER_ADDR + 'create', { "params": { "spot": newEntry } }, 'no-cors')
        .then(res => {
            console.log("Added to database: " + res.data);
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
        setRestaurantsList(res.data);
    })
    .catch(err => {
        console.log("... server request failed !");
        console.log(err);
    });
};

/* ----------------------------- GET INFOS BY ID ---------------------------- */
export const fetchSpotInfos = (spotId, setSpot) => {
    console.log('Query to fetch restaurant infos to server ...');
    console.log(spotId)
    axios.get(SERVER_ADDR + 'fetch', { params: { id: spotId } }, 'no-cors')
        .then(res => {
            console.log("Fetch restaurant: " + res.data.restaurant);
            setSpot(res.data.restaurant);
        })
        .catch(err => {
            console.log("... server request failed !");
            console.log(err);
        });

};

/* ------------------------------- EDIT BY ID ------------------------------- */
export const editSpotInfos = (spotId, newEntry) => {
    console.log('Query to edit restaurant infos to server ...');
    // alert("Query not implemented yet ...")
    axios.get(SERVER_ADDR + 'edit', { params: { id: spotId, newSpot: newEntry } }, 'no-cors')
        .then(res => {
            console.log("Editted restaurant: " + res.data);
        })
        .catch(err => {
            console.log("... server request failed !");
            console.log(err);
        });
};

/* ------------------------------ FIND MATCHING ----------------------------- */
export const findSpots = (foodChoice, priceChoice, distanceChoice, setFoundSpots) => {
    console.log('Query to find spots to server ...');
    axios.get(SERVER_ADDR + 'find', { params: { "food": foodChoice, "price": priceChoice, "distance": distanceChoice } }, 'no-cors')
        .then(res => {
            console.log(res)
            const spotsList = res.data;
            if (spotsList.length === 0) {
                alert("No spots found with queried params");
            }
            else {
                console.log(spotsList);
                setFoundSpots(spotsList);
            }
        })
        .catch(err => {
            console.log("... server request failed !");
            console.log(err);
        });
};