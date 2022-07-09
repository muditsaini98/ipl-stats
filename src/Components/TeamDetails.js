import React, { useState } from 'react'
import {data} from "../matches"
import { Container, Card, Button, Modal, Form, Row, Col  } from "react-bootstrap";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const TeamDetails = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let arr = [];
    for (var key in data) {
        if (data[key].team1 === props.team || data[key].team2 === props.team) {
            arr.push(props.team)
        }
    }
    const match = arr.length
    let arr1 = [];
    for (key in data) {
        if (data[key].winner === props.team ) {
            arr1.push(props.team)
        }
    }
    const wins = arr1.length
   
    let arr2 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].toss_decision === "bat") {
            arr2.push(props.team)
        }
    }
    const bat = arr2.length
    let arr3 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].toss_decision === "field") {
            arr3.push(props.team)
        }
    }
    const field = arr3.length



    let arrCity = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Kolkata" ) {
            arrCity.push("Kolkata")
        }
    }
    const Kolkata = arrCity.length
    let arrCity1 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Delhi" ) {
            arrCity1.push("Delhi")
        }
    }
    const Delhi = arrCity1.length
    let arrCity2 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Mumbai" ) {
            arrCity2.push("Mumbai")
        }
    }
    const Mumbai = arrCity2.length
    let arrCity3 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Kochi" ) {
            arrCity3.push("Kochi")
        }
    }
    const Kochi = arrCity3.length
    let arrCity4 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Hyderabad" ) {
            arrCity4.push("Hyderabad")
        }
    }
    const Hyderabad = arrCity4.length
    let arrCity5 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Chennai" ) {
            arrCity5.push("Chennai")
        }
    }
    const Chennai = arrCity5.length
    let arrCity6 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Jaipur" ) {
            arrCity6.push("Jaipur")
        }
    }
    const Jaipur = arrCity6.length
    let arrCity7 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Chandigarh" ) {
            arrCity7.push("Chandigarh")
        }
    }
    const Chandigarh = arrCity7.length
    let arrCity8 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Bangalore" ) {
            arrCity8.push("Bangalore")
        }
    }
    const Bangalore = arrCity8.length
    let arrCity9 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Dharamsala" ) {
            arrCity9.push("Dharamsala")
        }
    }
    const Dharamsala = arrCity9.length
    let arrCity10 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Nagpur" ) {
            arrCity10.push("Nagpur")
        }
    }
    const Nagpur = arrCity10.length
    let arrCity11 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Ahmedabad" ) {
            arrCity11.push("Ahmedabad")
        }
    }
    const Ahmedabad = arrCity11.length
    let arrCity12 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Cuttack" ) {
            arrCity12.push("Cuttack")
        }
    }
    const Cuttack = arrCity12.length
    let arrCity13 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Visakhapatnam" ) {
            arrCity13.push("Visakhapatnam")
        }
    }
    const Visakhapatnam = arrCity13.length
    let arrCity14 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Raipur" ) {
            arrCity14.push("Raipur")
        }
    }
    const Raipur = arrCity14.length
    let arrCity15 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Rajkot" ) {
            arrCity15.push("Rajkot")
        }
    }
    const Rajkot = arrCity15.length
    let arrCity16 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Ranchi" ) {
            arrCity16.push("Ranchi")
        }
    }
    const Ranchi = arrCity16.length
    let arrCity17 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Abu Dhabi" ) {
            arrCity17.push("Abu Dhabi")
        }
    }
    const AbuDhabi = arrCity17.length
    let arrCity18 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Sharjah" ) {
            arrCity18.push("Sharjah")
        }
    }
    const Sharjah = arrCity18.length
    let arrCity19 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Cape Town" ) {
            arrCity19.push("Cape Town")
        }
    }
    const CapeTown = arrCity19.length
    let arrCity20 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Port Elizabeth" ) {
            arrCity20.push("Port Elizabeth")
        }
    }
    const PortElizabeth = arrCity20.length
    let arrCity21 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Durban" ) {
            arrCity21.push("Durban")
        }
    }
    const Durban = arrCity21.length
    let arrCity22 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Centurion" ) {
            arrCity22.push("Centurion")
        }
    }
    const Centurion = arrCity22.length
    let arrCity23 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Johannesburg" ) {
            arrCity23.push("Johannesburg")
        }
    }
    const Johannesburg = arrCity23.length
    let arrCity24 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Kimberley" ) {
            arrCity24.push("Kimberley")
        }
    }
    const Kimberley = arrCity24.length
    let arrCity25 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Bloemfontein" ) {
            arrCity25.push("Bloemfontein")
        }
    }
    const Bloemfontein = arrCity25.length
    let arrCity26 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Pune" ) {
            arrCity26.push("Pune")
        }
    }
    const Pune = arrCity26.length
    let arrCity27 = [];
    for (key in data) {
        if ((data[key].team1 === props.team || data[key].team2 === props.team) && data[key].city === "Indore" ) {
            arrCity27.push("Indore")
        }
    }
    const Indore = arrCity27.length

    return (
        <Container>
            <Modal centered show={show} backdrop="static" size="lg" onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.team}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <fieldset disabled>
                            <Row>
                            <Col>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="disabledTextInput">Total match played</Form.Label>
                                <Form.Control id="disabledTextInput" placeholder={match} value={match} />
                            </Form.Group>
                            </Col>
                            <Col>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="disabledTextInput">Number of wins</Form.Label>
                                <Form.Control id="disabledTextInput" placeholder={wins} value={wins} />
                            </Form.Group>
                            </Col>
                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="disabledTextInput">Bat to Field ratio</Form.Label>
                                <Form.Control id="disabledTextInput" placeholder={`${bat} : ${field}`} value={`${bat} : ${field}`} />
                            </Form.Group>
                        </fieldset>
                    </Form>
                    <Form.Label htmlFor="disabledTextInput">No. of matches played in different cities</Form.Label>
                    <Pie data={{
                        // data = {
                            labels: ['Kolkata', 'Chennai', 'Delhi', 'Mumbai', 'Kochi', 'Hyderabad', 'Jaipur', 'Chandigarh', 'Bangalore', 'Dharamsala','Nagpur', 'Ahmedabad', 'Cuttack', 'Visakhapatnam', 'Raipur', 'Rajkot', 'Ranchi', 'Abu Dhabi', 'Sharjah', 'Cape Town', 'Port Elizabeth', 'Durban', 'Centurion', 'Johannesburg', 'Kimberley', 'Bloemfontein', 'Pune', 'Indore'],
                            datasets: [
                              {
                                label: 'Match Played',
                                data: [Kolkata, Chennai, Delhi, Mumbai, Kochi, Hyderabad, Jaipur, Chandigarh, Bangalore, Dharamsala, Nagpur, Ahmedabad, Cuttack,Visakhapatnam, Raipur, Rajkot, Ranchi, AbuDhabi, Sharjah, CapeTown, PortElizabeth, Durban, Centurion, Johannesburg, Kimberley, Bloemfontein, Pune, Indore],
                                backgroundColor: [
                                  'rgba(255, 99, 132, 0.5)',
                                  'rgba(54, 162, 235, 0.5)',
                                  'rgba(255, 206, 86, 0.5)',
                                  'rgba(75, 192, 192, 0.5)',
                                  'rgba(153, 102, 255, 0.5)',
                                  'rgba(255, 159, 64, 0.5)',
                                  'rgba(99, 99, 132, 0.5)',
                                  'rgba(54, 252, 235, 0.5)',
                                  'rgba(86, 206, 86, 0.5)',
                                  'rgba(153, 192, 192, 0.5)',
                                  'rgba(192, 102, 255, 0.5)',
                                  'rgba(235, 159, 64, 0.5)',
                                  'rgba(64, 206, 86, 0.5)',
                                  'rgba(13, 12, 192, 0.5)',
                                  'rgba(19, 199, 255, 0.5)',
                                  'rgba(235, 19, 64, 0.5)',
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)',
                                    'rgba(99, 99, 132, 1)',
                                    'rgba(54, 252, 235, 1)',
                                    'rgba(86, 206, 86, 1)',
                                    'rgba(153, 192, 192, 1)',
                                    'rgba(192, 102, 255, 1)',
                                    'rgba(235, 159, 64, 1)',
                                    'rgba(64, 206, 86, 1)',
                                    'rgba(13, 12, 192, 1)',
                                    'rgba(19, 199, 255, 1)',
                                    'rgba(235, 19, 64, 1)',
                                ],
                                borderWidth: 1,
                              },
                            ],
                    }}
                    />
                </Modal.Body>
            </Modal>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>{props.team}</Card.Title>
                    <Button variant="primary" onClick={handleShow}>See Details</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default TeamDetails