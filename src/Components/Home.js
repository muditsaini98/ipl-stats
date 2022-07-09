import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import MatchPlayed from "./MatchPlayed";
import MatchWin from "./MatchWin";

const Home = () => {

    return (
        <div>
            <Container>
                <Row>
                    <Col style={{ textAlign: "left", marginTop: "1em", marginBottom: "2em" }}>
                        The Indian Premier League (IPL), also officially known as TATA IPL for sponsorship reasons, is a professional men's Twenty20 cricket league, contested by ten teams based out of seven Indian cities and three Indian states. The league was founded by the Board of Control for Cricket in India (BCCI) in 2007. It is usually held between March and May of every year and has an exclusive window in the ICC Future Tours Programme.<br />

                        The IPL is the most-attended cricket league in the world and in 2014 was ranked sixth by average attendance among all sports leagues. In 2010, the IPL became the first sporting event in the world to be broadcast live on YouTube. The brand value of the IPL in 2019 was ₹47,500 crore (US$6.2 billion), according to Duff & Phelps. According to BCCI, the 2015 IPL season contributed ₹1,150 crore (US$150 million) to the GDP of the Indian economy. The 2020 IPL season set a massive viewership record with 31.57 million average impressions and with an overall consumption increase of 23 per cent from the 2019 season.
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <MatchPlayed />
                        <Alert variant="light">
                            Number of matches played by each team in all seasons
                        </Alert>
                    </Col>
                    <Col>
                        <MatchWin />
                        <Alert variant="light">
                            Number of matches win by each team in all seasons
                        </Alert>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
