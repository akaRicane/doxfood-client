import React from 'react';
import { Link } from 'react-router-dom';

const Tile = ({ spot }) => {

    const [spotInfos, setSpotInfos] = React.useState({});

    React.useEffect(() => {
        if (spot !== undefined) {
            setSpotInfos(spot)
        }
    }, [spot]);

    return (
        <div className='tile'>
            <div className='tile-text'>
                <h3>{spotInfos.name} ({spotInfos.food}  /  {spotInfos.vegetarian})</h3>
            </div>
            <div className='tile-text'>
                <h3>{spotInfos.rate}</h3>
            </div>
            <div className='tile-text'>
                <Link to={'/doxfood-client/edit/'} state={{infos: spotInfos}}>edit</Link>
            </div>
        </div>
    );
};

export default Tile;