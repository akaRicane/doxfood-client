import React from 'react';
import { Link } from 'react-router-dom';

const Tile = ({ spot }) => {

    const [spotInfos, setSpotInfos] = React.useState({});
    const [spotId, setSpotId] = React.useState({});

    React.useEffect(() => {
        if (spot !== undefined) {
            setSpotId(spot._id)
            const infos = spot
            console.log(infos)
            setSpotInfos(infos)
        }
    }, [spot]);

    return (
        <div className='tile'>
            <div className='tile-text'>
                <h3>{spotInfos.name} ({spotInfos.food})</h3>
            </div>
            <div className='tile-text'>
                <h3>{spotInfos.rate}</h3>
            </div>
            <div className='tile-text'>
                <Link to='/doxfood-client/edit/spotId' state={{id: spotId, name: spotInfos.name}}>edit</Link>
            </div>
        </div>
    );
};

export default Tile;