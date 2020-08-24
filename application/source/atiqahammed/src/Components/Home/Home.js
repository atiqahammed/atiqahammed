import React, { Fragment } from 'react';
import About from './About';

function Home(props) {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col-8 pt-100">
                        <div>
                            <About />
                        </div>
                        
                    </div>
                    <div className="col"></div>
                </div>
            </div>

            
        </Fragment>
    );
}

export default Home;