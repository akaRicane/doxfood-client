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
        <tr>
            <td class="mdl-data-table__cell--non-numeric">{spotInfos.name}</td>
            <td class="mdl-data-table__cell--non-numeric">{spotInfos.food}</td>
            <td class="mdl-data-table__cell--non-numeric">{spotInfos.vegetarian}</td>
            <td class="mdl-data-table__cell--non-numeric">{spotInfos.rate}</td>
            <td class="mdl-data-table__cell--non-numeric"><Link to={'/doxfood-client/edit/'} state={{ infos: spotInfos }}>&#x270E;</Link></td>
        </tr>
    );
};

export default Tile;