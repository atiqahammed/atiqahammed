import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function NavLinks() {
    return (
        <Fragment>
            <div className="nav-links">
                <a href="https://github.com/atiqahammed">Github</a>
                <a href="https://www.facebook.com/atiq.ahammed.shamim.pramanik/">Facebook</a>
                <a href="https://www.linkedin.com/in/atiq-ahammed/">LinkedIn</a>
                <Link to='/gallery'>Gallery</Link>
            </div>
        </Fragment>
    );
}

export default NavLinks;