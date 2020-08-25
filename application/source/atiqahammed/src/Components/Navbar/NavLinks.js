import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

function NavLinks() {
    return (
        <Fragment>
            <div className="nav-links">
                <NavLink exact activeClassName='nav-active' to='/'>About</NavLink>
                <NavLink activeClassName='nav-active' to='/contact'>Contact</NavLink>
                <NavLink activeClassName='nav-active' to='/gallery'>Gallery</NavLink>
            </div>
        </Fragment>
    );
}

export default NavLinks;