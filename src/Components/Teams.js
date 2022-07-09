import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import TeamDetails from './TeamDetails';

const Teams = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <TeamDetails team={"Pune Warriors"} />
                </Col>
                <Col>
                    <TeamDetails team={"Deccan Chargers"} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <TeamDetails team={"Rajasthan Royals"}/>
                </Col>
                <Col>
                    <TeamDetails team={"Kochi Tuskers Kerala"} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <TeamDetails team={"Sunrisers Hyderabad"} />
                </Col>
                <Col>
                    <TeamDetails team={"Mumbai Indians"} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <TeamDetails team={"Rising Pune Supergiant"} />
                </Col>
                <Col>
                    <TeamDetails team={"Gujarat Lions"} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <TeamDetails team={"Kolkata Knight Riders"} />
                </Col>
                <Col>
                    <TeamDetails team={"Kings XI Punjab"} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <TeamDetails team={"Delhi Daredevils"} />
                </Col>
                <Col>
                    <TeamDetails team={"Royal Challengers Bangalore"} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <TeamDetails team={"Chennai Super Kings"} />
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}

export default Teams