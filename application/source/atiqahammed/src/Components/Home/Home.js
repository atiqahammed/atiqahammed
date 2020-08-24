import React, { Fragment } from 'react';
import grtteingImage from '../../stuffs/img/Hi.png';
import About from './About';

function Home(props) {
    return (
        <Fragment>
            <div class="container">
                <div class="row">
                    <div class="col"></div>
                    <div class="col-8 pt-100">
                        <div>
                            <About />
                        </div>
                        
                    </div>
                    <div class="col"></div>
                </div>
            </div>

            
        </Fragment>
    );
}

export default Home;