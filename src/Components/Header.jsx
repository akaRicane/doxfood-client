import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header class="mdl-layout__header">
            <div className='header'>
                <div class="mdl-layout__header-row">
                    {/* <!-- Title --> */}
                    <span class="mdl-layout-title">DOX<sup>Food</sup></span>
                    {/* <!-- Add spacer, to align navigation to the right --> */}
                    <div class="mdl-layout-spacer"></div>
                    {/* <!-- Navigation. We hide it in small screens. --> */}
                    <nav class="mdl-navigation mdl-layout--large-screen-only">
                        <a class="mdl-navigation__link" href=""><NavLink to='/doxfood-client/'>
                    <span>&#127968;</span>
                </NavLink></a>
                        <a class="mdl-navigation__link" href=""><NavLink to='/doxfood-client/list'>
                    <span>	&#128218;</span>
                </NavLink></a>
                        <a class="mdl-navigation__link" href=""><NavLink to='/doxfood-client/new'>
                    <span>&#127381;</span>
                </NavLink></a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;