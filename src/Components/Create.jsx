import React from 'react';

import Dropdown from './Dropdown';
import Map from '../API/Map';
import { updateAddress, updateCoordinates, openGMaps, openWebsite } from '../Utils/utils';

import { OPTIONS_FOOD, OPTIONS_RATE, OPTIONS_VEGETARIAN } from '../Constants/constants';
import {
    DEFAULT_NAME, DEFAULT_DISTANCE, DEFAULT_FOOD, DEFAULT_COORDINATES,
    DEFAULT_ISVEGE, DEFAULT_ADDRESS, DEFAULT_PRICE, DEFAULT_RATE
} from '../Constants/default';

const Create = ({ handleSubmitNewSpot }) => {

    const [nameInput, setNameInput] = React.useState(DEFAULT_NAME);
    const [distance, setDistance] = React.useState(DEFAULT_DISTANCE);
    const [food, setFood] = React.useState(DEFAULT_FOOD);
    const [vegetarian, setVegetarian] = React.useState(DEFAULT_ISVEGE);
    const [price, setPrice] = React.useState(DEFAULT_PRICE);
    const [rate, setRate] = React.useState(DEFAULT_RATE);
    const [website, setWebsite] = React.useState("");
    const [deal, setDeal] = React.useState("add deal in edit");
    const [address, setAddress] = React.useState(DEFAULT_ADDRESS);
    const [coordinates, setCoordinates] = React.useState(DEFAULT_COORDINATES);

    const handleNameInput = (event) => { setNameInput(event.target.value); }
    const handleVegetarianDP = (event) => { setVegetarian(event.target.value) };
    const handleFoodDP = (event) => { setFood(event.target.value); };
    const handlePriceInput = (event) => { setPrice(event.target.value); }
    const handleDistanceInput = (event) => { setDistance(event.target.value); }
    const handleRateDP = (event) => { setRate(event.target.value); };
    const handleWebsiteInput = (event) => { setWebsite(event.target.value); }
    const handleOpenWebsiteBtn = () => { openWebsite(website); }
    const handleDealInput = (event) => { setDeal(event.target.value); }

    const handleStreetNum = (event) => { updateAddress("streetNum", event.target.value, address, setAddress); };
    const handleStreet = (event) => { updateAddress("street", event.target.value, address, setAddress); };
    const handleCity = (event) => { updateAddress("city", event.target.value, address, setAddress); };
    const handleCheckGMapsBtn = () => { openGMaps(address); };

    const handleCoordinatesInput = (event) => {
        const lonLat = event.target.value;
        console.log(lonLat);
        const longitude = lonLat.split(",").at(0);
        const latitude = lonLat.split(",").at(1);
        console.log(longitude, latitude)
        updateCoordinates("lon", longitude, coordinates, setCoordinates);
        updateCoordinates("lat", latitude, coordinates, setCoordinates);
    }

    const submitButton = () => {
        const newEntry = {
            name: nameInput,
            food: food,
            vegetarian: vegetarian,
            price: price,
            distance: distance,
            rate: rate,
            website: website,
            deal: deal,
            address: address,
            coordinates: coordinates
        }
        handleSubmitNewSpot(newEntry);
    }

    return (
        <div className='module'>
            <div className='col' class="mdl-cell">
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td><input onChange={(event) => handleNameInput(event)} /></td>
                        </tr>
                        <tr>
                            <td>Food</td>
                            <td>
                                <Dropdown
                                    label=" "
                                    options={OPTIONS_FOOD}
                                    value={food}
                                    onChange={handleFoodDP}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Vege</td>
                            <td>
                                <Dropdown
                                    label=" "
                                    options={OPTIONS_VEGETARIAN}
                                    value={vegetarian}
                                    onChange={handleVegetarianDP}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td><input type='range' min='5' max='40' onChange={(event) => handlePriceInput(event)} /></td>
                            <td>{price} €</td>
                        </tr>
                        <tr>
                            <td>Distance</td>
                            <td><input type='range' min='0' max='30' onChange={(event) => handleDistanceInput(event)} /></td>
                            <td>{distance} min</td>
                        </tr>
                        <tr>
                            <td>Rate</td>
                            <td>
                                <Dropdown
                                    label=" "
                                    options={OPTIONS_RATE}
                                    value={rate}
                                    onChange={handleRateDP}
                                />
                            </td>
                        </tr>
                        <tr><td><h1> </h1></td></tr>
                        <tr>
                            <td>Website</td>
                            <td><input onChange={(event) => handleWebsiteInput(event)} /></td>
                            <td><button onClick={() => handleOpenWebsiteBtn()}>Open</button></td>
                        </tr>
                        <tr>
                            <td>Best deals</td>
                            <td><input onChange={(event) => handleDealInput(event)} /></td>
                        </tr>
                        <tr><td><h1> </h1></td></tr>
                        <tr>
                            <td>#</td>
                            <td><input onChange={(event) => handleStreetNum(event)} /></td>
                        </tr>
                        <tr>
                            <td>Street</td>
                            <td><input onChange={(event) => handleStreet(event)} /></td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td><input onChange={(event) => handleCity(event)} placeholder='Boulogne-Billancourt' /></td>
                        </tr>
                        <tr height='20'></tr>
                        <tr>
                            <td></td>
                            <td><button onClick={() => handleCheckGMapsBtn()}>Check coordinates</button> </td>
                        </tr>
                        <tr>
                            <td>Coordinates</td>
                            <td><input onChange={(event) => handleCoordinatesInput(event)} /></td>
                        </tr>
                        <tr height='50'></tr>
                        <tr>
                            <td>
                                <button onClick={() => { submitButton() }}>Submit !</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Map />
        </div>
    );
};

export default Create;