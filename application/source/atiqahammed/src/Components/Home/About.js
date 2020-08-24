import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

function About(props) {
    return (
        <Fragment>
            
			<Card style={{ width: '100%' }}>
				<Card.Body>
					<Card.Title>About</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">Hi, I am Atiq Ahammed</Card.Subtitle>
					<Card.Text>
						After earning my BSSE in Software Engineering from the Institute of Information Technology of the University of Dhaka, I entered the software development world to explore my passion for codding. Currently, I work as a Software Engineer for NuArca, where I'm responsible for software development.
					</Card.Text>
					<Card.Link href="#">Card Link</Card.Link>
					<Card.Link href="#">Another Link</Card.Link>
				</Card.Body>
			</Card>
            
        </Fragment>
    );
}

export default About;