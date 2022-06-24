import React from 'react';
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
            <h1 className='text'>Edit {spot.name} infos</h1>
            <Editor spot={spot} handleSubmitEdittedSpot={handleSubmitEdittedSpot} />
        </div>
    );
};

export default EditRestaurants;