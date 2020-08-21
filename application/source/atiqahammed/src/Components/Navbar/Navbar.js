import React, { Fragment } from 'react';
import './Navbar.css';
import NavIcon from './NavIcon';
import NavButton from './NavButton';
import NavLinks from './NavLinks';

function Navbar(props) {
    return (
        <Fragment>
            <div className="nav">
                <NavIcon />
                <NavButton />
                <NavLinks />
            </div>
        </Fragment>
    );
}

export default Navbar;