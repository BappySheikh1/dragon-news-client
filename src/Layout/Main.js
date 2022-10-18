import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RigthSideNav from '../Shared/RigthSideNav/RigthSideNav';
import Footer from '../Shared/Footer/Footer'


const Main = () => {
    return (
        <div>
            <Header />
        <Container>
            <Row>
                <Col lg='2'>
                 
                  <LeftSideNav />
                </Col>
                <Col lg='7'>
                  <Outlet />
                </Col>
                <Col lg='3'>
                 <h2>Right Side Nav </h2>
                 <RigthSideNav />
                </Col>
            </Row>
        </Container>
        <Footer />
        </div>
    );
};

export default Main;