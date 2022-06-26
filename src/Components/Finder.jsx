import React from 'react';
import { Link } from 'react-router-dom';

import Dropdown from './Dropdown';
import Map from '../API/Map';

import { findSpots } from '../API/toServer';

import { OPTIONS_FOOD, OPTIONS_PRICE, OPTIONS_DISTANCE, OPTIONS_VEGETARIAN_FINDER } from '../Constants/constants';
import { DEFAULT_FOOD_CHOICE, DEFAULT_PRICE_CHOICE, DEFAULT_DISTANCE_CHOICE, DEFAULT_VEGETARIAN_CHOICE_FINDER, DEFAULT_PINMAP } from '../Constants/default';

const Finder = () => {

    const [foundSpots, setFoundSpots] = React.useState([]);
    const [foodChoice, setFoodChoice] = React.useState(DEFAULT_FOOD_CHOICE);
    const [priceChoice, setPriceChoice] = React.useState(DEFAULT_PRICE_CHOICE);
    const [distanceChoice, setDistanceChoice] = React.useState(DEFAULT_DISTANCE_CHOICE);
    const [vegetarianChoice, setVegetarianChoice] = React.useState(DEFAULT_VEGETARIAN_CHOICE_FINDER);
    const [pinList, setPinList] = React.useState(DEFAULT_PINMAP);

    React.useEffect(() => {
        if (foundSpots.length > 0) {
            var pinBuffer = [];
            foundSpots.forEach(spot => {
                var pin = {
                    label: spot.name,
                    coordinates: spot.coordinates,
                    website: spot.website
                }
                pinBuffer.push(pin);
            })
            setPinList(pinBuffer);
        }
        else {
            setPinList(DEFAULT_PINMAP);
        }
    }, [foundSpots])

    const handleFoodDP = (event) => { setFoodChoice(event.target.value); };
    const handlePriceDP = (event) => { setPriceChoice(event.target.value); };
    const handleDistanceDP = (event) => { setDistanceChoice(event.target.value); };
    const handleVegetarianDP = (event) => { setVegetarianChoice(event.target.value); };
    const handleFindBtn = () => { findSpots(foodChoice, priceChoice, distanceChoice, vegetarianChoice, setFoundSpots); };

    return (
        <div className='module'>
            <div className='col'>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h3>Where to eat ?</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>Food</td>
                            <td>
                                <Dropdown
                                    label=""
                                    options={OPTIONS_FOOD}
                                    value={foodChoice}
                                    onChange={handleFoodDP}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>
                                <Dropdown
                                    label=""
                                    options={OPTIONS_PRICE}
                                    value={priceChoice}
                                    onChange={handlePriceDP}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Distance</td>
                            <td>
                                <Dropdown
                                    label=""
                                    options={OPTIONS_DISTANCE}
                                    value={distanceChoice}
                                    onChange={handleDistanceDP}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Vegetarian</td>
                            <td>
                                <Dropdown
                                    label=""
                                    options={OPTIONS_VEGETARIAN_FINDER}
                                    value={vegetarianChoice}
                                    onChange={handleVegetarianDP}
                                />
                            </td>
                        </tr>
                        <tr><td><h1> </h1></td></tr>
                        <tr>
                            <td>
                                <button onClick={() => { handleFindBtn() }}>See results</button>
                            </td>
                        </tr>
                        <tr><td><h1> </h1></td></tr>
                        {
                            foundSpots.map((spot, idx) => {
                                return (
                                    <tr key={"tr-" + idx}><td key={"td-" + idx}>
                                        <Link to={'/doxfood-client/edit/'} state={{ infos: spot }}>{spot.name}  ({spot.food})</Link>
                                    </td></tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <Map pinList={pinList} />
        </div>
    );
};

export default Finder;