import React from 'react';

import Dropdown from './Dropdown';
import Map from '../API/Map';
import { openGMaps, openWebsite } from '../Utils/utils';

import { OPTIONS_FOOD, OPTIONS_RATE, OPTIONS_VEGETARIAN } from '../Constants/constants';
import { DEFAULT_ADDRESS, DEFAULT_COORDINATES, DEFAULT_PINMAP } from '../Constants/default';

const Editor = ({ spot, handleSubmitEdittedSpot }) => {

    const [name, setName] = React.useState(spot.name);
    const [distance, setDistance] = React.useState(spot.distance);
    const [food, setFood] = React.useState(spot.food);
    const [vegetarian, setVegetarian] = React.useState(spot.vegetarian);
    const [price, setPrice] = React.useState(spot.price);
    const [rate, setRate] = React.useState(spot.rate);
    const [website, setWebsite] = React.useState(spot.website);
    const [deal, setDeal] = React.useState(spot.deal);
    const [address, setAddress] = React.useState(DEFAULT_ADDRESS);
    const [coordinates, setCoordinates] = React.useState(DEFAULT_COORDINATES);
    const [pinMap, setPinMap] = React.useState(DEFAULT_PINMAP);

    const updateAddressCallback = React.useCallback((item, value) => {
        var currentAddress = address;
        switch (item) {
            case "streetNum":
                currentAddress.streetNum = value;
                break;
            case "street":
                currentAddress.street = value;
                break;
            case "city":
                currentAddress.city = value;
                break;
            default:
                break;
        }
        setAddress(currentAddress);
    }, [address]);

    const updateCoordinatesCallback = React.useCallback((item, value) => {
        var currentCoords = coordinates;
        switch (item) {
            case "lon":
                currentCoords.lon = value;
                break;
            case "lat":
                currentCoords.lat = value;
                break;
            default:
                break;
        }
        setCoordinates(currentCoords);
    }, [coordinates]);

    const updatePinMapCallback = React.useCallback((item, value) => {
        var currentPin = pinMap;
        switch (item) {
            case "label":
                currentPin.label = value;
                break;
            case "lon":
                currentPin.coordinates.lon = value;
                break;
            case "lat":
                currentPin.coordinates.lat = value;
                break;
            default:
                break;
        }
        setPinMap(currentPin);
    }, [pinMap]);

    React.useEffect(() => {
        if (spot.name !== undefined) {
            setName(spot.name);
            setVegetarian(spot.vegetarian);
            setFood(spot.food);
            setPrice(spot.price);
            setDistance(spot.distance);
            setRate(spot.rate);
            setWebsite(spot.website);
            setDeal(spot.deal);
            updateAddressCallback("streetNum", spot.address.streetNum);
            updateAddressCallback("street", spot.address.street);
            updateAddressCallback("city", spot.address.city);
            updateCoordinatesCallback("lon", spot.coordinates.lon);
            updateCoordinatesCallback("lat", spot.coordinates.lat);
            updatePinMapCallback("label", spot.name);
            updatePinMapCallback("lon", spot.coordinates.lon);
            updatePinMapCallback("lat", spot.coordinates.lat);
        }
        // eslint-disable-next-line
    }, [spot, updateAddressCallback, updateCoordinatesCallback, updatePinMapCallback])

    const handleNameInput = (event) => { setName(event.target.value); }
    const handleVegetarianDP = (event) => { setVegetarian(event.target.value) };
    const handleFoodDP = (event) => { setFood(event.target.value); };
    const handlePriceInput = (event) => { setPrice(event.target.value); }
    const handleDistanceInput = (event) => { setDistance(event.target.value); }
    const handleRateDP = (event) => { setRate(event.target.value); };

    const handleWebsiteInput = (event) => { setWebsite(event.target.value); }
    const handleOpenWebsiteBtn = () => { openWebsite(website); }
    const handleDealInput = (event) => { setDeal(event.target.value); }

    const handleStreetNum = (event) => { updateAddressCallback("streetNum", event.target.value); };
    const handleStreet = (event) => { updateAddressCallback("street", event.target.value); };
    const handleCity = (event) => { updateAddressCallback("city", event.target.value); };
    const handleLongitude = (event) => { updateCoordinatesCallback("lon", event.target.value); };
    const handleLatitude = (event) => { updateCoordinatesCallback("lat", event.target.value); };
    const handleCheckGMapsBtn = () => { openGMaps(address); };

    const submitButton = () => {
        const newEntry = {
            name: name,
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
        handleSubmitEdittedSpot(newEntry);
    }

    return (
        <div className='module'>
            <div className='col' class="mdl-cell">
                <table>
                    <tbody>
                        <tr key={"name"}>
                            <td>Name</td>
                            <td><input onChange={(event) => handleNameInput(event)} defaultValue={name} /></td>
                        </tr>
                        <tr key={"food"}>
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
                        <tr key={"vege"}>
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
                        <tr key={"price"}>
                            <td>Price</td>
                            <td><input type='range' min='5' max='100' onChange={(event) => handlePriceInput(event)} value={price} /></td>
                            <td>{price} €</td>
                        </tr>
                        <tr key={"distance"}>
                            <td>Distance</td>
                            <td><input type='range' min='0' max='30' onChange={(event) => handleDistanceInput(event)} value={distance} /></td>
                            <td>{distance} min</td>
                        </tr>
                        <tr key={"rate"}>
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
                        <tr key={"website"}>
                            <td>Website</td>
                            <td><input defaultValue={website} onChange={(event) => handleWebsiteInput(event)} /></td>
                            <td><button onClick={() => handleOpenWebsiteBtn()}>Open</button></td>
                        </tr>
                        <tr key={"deals"}>
                            <td>Best deals</td>
                            <td><input onChange={(event) => handleDealInput(event)} defaultValue={deal}/></td>
                        </tr>
                        <tr><td><h1> </h1></td></tr>
                        <tr>
                            <td>#</td>
                            <td><input onChange={(event) => handleStreetNum(event)} defaultValue={address.streetNum} /></td>
                        </tr>
                        <tr>
                            <td>Street</td>
                            <td><input onChange={(event) => handleStreet(event)} defaultValue={address.street} /></td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td><input onChange={(event) => handleCity(event)} defaultValue={address.city} /></td>
                        </tr>
                        <tr height='20'></tr>
                        <tr>
                            <td></td>
                            <td><button onClick={() => handleCheckGMapsBtn()}>Check coordinates</button> </td>
                        </tr>
                        <tr>
                            <td>Lon</td>
                            <td><input onChange={(event) => handleLongitude(event)} defaultValue={coordinates.lon} /></td>
                        </tr>
                        <tr>
                            <td>Lat</td>
                            <td><input onChange={(event) => handleLatitude(event)} defaultValue={coordinates.lat} /></td>
                        </tr>
                        <tr height='50'></tr>
                        <tr>
                            <td>
                                <button onClick={() => { submitButton() }}>Save !</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Map pinList={pinMap} />
        </div>
    );
};

export default Editor;