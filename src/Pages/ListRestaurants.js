import React from 'react';

import { AppContext } from '../App';
import Tile from '../Components/Tile.jsx'

import { requestRestaurantsList } from '../API/toServer';

const ListRestaurants = () => {

    const context = React.useContext(AppContext);

    React.useEffect(() => {
        requestRestaurantsList(context.setRestaurantsList);
        // eslint-disable-next-line
    }, [])

    return (
        <div className='list'>
            <h1>Restaurants list</h1>
            <table class="mdl-data-table mdl-js-data-table mdl-data-table mdl-shadow--2dp">
                <thead>
                    <tr>
                        <th class="mdl-data-table__cell--non-numeric">Name</th>
                        <th class="mdl-data-table__cell--non-numeric">Food</th>
                        <th class="mdl-data-table__cell--non-numeric">Vege ?</th>
                        <th>Rating</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        context.restaurantsList.map((spot, idx) => {
                            return (
                                <Tile key={"tile-" + idx} spot={spot} />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ListRestaurants;