import React from 'react';
import { Container, Row, Col } from 'reactstrap'

import NavBar from './NavBar'

import './Styles.css'

function Home(props) {
    return (
        <div>
            <NavBar/>
            <Container className="themed-container" fluid={true}>
                <Row className="WhiteBoard">
                    <Col md="10">Whiteboard</Col>
                    <Col md="2">Users</Col>
                </Row>
                <Row>
                    <Col>footer</Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;