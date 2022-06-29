import React from 'react';
import Finder from '../Components/Finder';

import { AppContext } from '../App';
import { requestRestaurantsList } from '../API/toServer';

const FindRestaurants = () => {

    const context = React.useContext(AppContext);

    React.useEffect(() => {
        requestRestaurantsList(context.setRestaurantsList);
        // eslint-disable-next-line
    }, [context.setRestaurantsList])

    return (
        <div className='home'>
            <h1 className='text'>Home</h1>
            <Finder />
        </div>
    );
};

export default FindRestaurants;