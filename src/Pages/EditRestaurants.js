import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { editSpotInfos } from '../API/toServer';
import { buildAlertMsg } from '../Utils/utils';

import Editor from '../Components/Editor';

const EditRestaurants = () => {

    let location = useLocation();
    const [spot, setSpot] = React.useState({})

    React.useEffect(() => {
        setSpot(location.state.infos)
        // eslint-disable-next-line
    }, [])

    const handleSubmitEdittedSpot = (newEntry) => {
        if (window.confirm(buildAlertMsg(newEntry, 'edit'))) {
            editSpotInfos(spot.id, newEntry);
        }
        else {
            console.log("Abort save")
        }
    }

    return (
        <div className='edit'>
            <div>
                <h1 className='text'>Edit {spot.name} infos</h1>
                <NavLink to='/doxfood-client/list'><span>Back to list</span></NavLink>
            </div>
            <Editor spot={spot} handleSubmitEdittedSpot={handleSubmitEdittedSpot} />
        </div>
    );
};

export default EditRestaurants;