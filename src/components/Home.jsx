import React from 'react';
import { Container, Row, Col } from 'reactstrap'

import Users from './Users'
import WhiteBoard from './Whiteboard'

import './Styles.css'

const Home = (props) => {
    return (
        <div>
            <Container className="themed-container" fluid={true}>
                <Row className="WhiteBoard">
                    <WhiteBoard />
                    <Users/>
                </Row>
                <Row>
                    <Col>footer</Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;