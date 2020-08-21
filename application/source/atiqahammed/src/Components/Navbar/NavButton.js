import React, { Fragment } from 'react';

function NavButton(props) {
    return (
        <Fragment>
            <div className="nav-btn">
                <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
        </Fragment>
    );
}

export default NavButton;