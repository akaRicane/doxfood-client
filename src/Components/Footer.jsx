import React from 'react';

import { AppContext } from '../App';

const Footer = () => {

    const context = React.useContext(AppContext);

    return (
        <footer className='footer' class="mdl-mini-footer">
            <div class="mdl-mini-footer__left-section">
                <div class="mdl-logo">DOX<sup>Food</sup></div>
                <ul class="mdl-mini-footer__link-list">
                    <li><a href="#">{context.restaurantsList.length} restaurants in dB !</a></li>
                    <li><a href="https://github.com/akaRicane" target="_blank">Contribute to the code on Github<img></img></a></li>
                </ul>
            </div>
            
        </footer>
    );
};

export default Footer;