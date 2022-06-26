import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div>
            <NavLink to='/doxfood-client/'>
                    <h3>DOXFOOD</h3>
                </NavLink>
            </div>
            <div className='text'>
                <NavLink to='/doxfood-client/'>
                    <span>🏠 </span>
                </NavLink>
                <NavLink to='/doxfood-client/list'>
                    <span>📚</span>
                </NavLink>
                <NavLink to='/doxfood-client/new'>
                    <span>🆕</span>
                </NavLink>
            </div>
        </div>
    );
};

export default Header;