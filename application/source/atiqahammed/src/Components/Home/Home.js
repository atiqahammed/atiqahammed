import React, { Fragment } from 'react';
import grtteingImage from '../../stuffs/img/Hi.png';

function Home(props) {
    return (
        <Fragment>
            <div className="d-flex justify-content-center">
				<img src={grtteingImage} className='img-fluid' alt='Hi, I am Atiq Ahammed'></img>
			</div>
        </Fragment>
    );
}

export default Home;