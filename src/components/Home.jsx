import React from 'react';
import { Container, Row, Col } from 'reactstrap'

import NavBar from './NavBar'
import WhiteBoard from './Whiteboard'

import './Styles.css'

function Home(props) {
    return (
        <div>
            <Container className="themed-container" fluid={true}>
                <Row className="WhiteBoard">
                    <WhiteBoard/>
                    Users
                </Row>
                <Row>
                    <Col>footer</Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;