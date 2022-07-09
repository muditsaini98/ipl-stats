import React from "react";
import { data } from "../matches";
import { Container, Tabs, Table, Tab } from "react-bootstrap";

const seasons = () => {

  for (var key in data){
    data.sort((a, b) => a - b);
  }
  console.log(key)


  return (
    <div>
      <Container>
        <Tabs
          defaultActiveKey="2017"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="2008" title="2008">
            <Container>
              <Table striped bordered responsive>
                <thead>
                  <tr>
                    <th scope="col">SEASON</th>
                    <th scope="col">DATE</th>
                    <th scope="col">TEAM 1</th>
                    <th scope="col">TEAM 2</th>
                    <th scope="col">WINNER</th>
                    <th scope="col">WIN BY RUNS</th>
                    <th scope="col">WIN BY WICKETS</th>
                    <th scope="col">PLAYER OF THE MATCH</th>
                    <th scope="col">CITY</th>
                    <th scope="col">VENUE</th>
                  </tr>
                </thead>
                {data.map((value, index) => {
                  return (
                    <>
                      {value.season === 2008 ? (
                        <tbody>
                          <tr key={index}>
                            <td>{value.season}</td>
                            <td>{value.date}</td>
                            <td>{value.team1}</td>
                            <td>{value.team2}</td>
                            <td>{value.winner}</td>
                            <td>{value.win_by_runs}</td>
                            <td>{value.win_by_wickets}</td>
                            <td>{value.player_of_match}</td>
                            <td>{value.city}</td>
                            <td>{value.venue}</td>
                          </tr>
                        </tbody>
                      ) : null}
                    </>
                  );
                })}
              </Table>
            </Container>
          </Tab>
          <Tab eventKey="2009" title="2009">
            {/* <Sonnet /> */}
            <Container>
              <Table striped bordered responsive>
                <thead>
                  <tr>
                    <th scope="col">SEASON</th>
                    <th scope="col">DATE</th>
                    <th scope="col">TEAM 1</th>
                    <th scope="col">TEAM 2</th>
                    <th scope="col">WINNER</th>
                    <th scope="col">WIN BY RUNS</th>
                    <th scope="col">WIN BY WICKETS</th>
                    <th scope="col">PLAYER OF THE MATCH</th>
                    <th scope="col">CITY</th>
                    <th scope="col">VENUE</th>
                  </tr>
                </thead>
                {data.map((value, index) => {
                  return (
                    <>
                      {value.season === 2009 ? (
                        <tbody>
                          <tr key={index}>
                            <td>{value.season}</td>
                            <td>{value.date}</td>
                            <td>{value.team1}</td>
                            <td>{value.team2}</td>
                            <td>{value.winner}</td>
                            <td>{value.win_by_runs}</td>
                            <td>{value.win_by_wickets}</td>
                            <td>{value.player_of_match}</td>
                            <td>{value.city}</td>
                            <td>{value.venue}</td>
                          </tr>
                        </tbody>
                      ) : null}
                    </>
                  );
                })}
              </Table>
            </Container>
          </Tab>
          <Tab eventKey="2010" title="2010">
            <Container>
              <Table striped bordered responsive>
                <thead>
                  <tr>
                    <th scope="col">SEASON</th>
                    <th scope="col">DATE</th>
                    <th scope="col">TEAM 1</th>
                    <th scope="col">TEAM 2</th>
                    <th scope="col">WINNER</th>
                    <th scope="col">WIN BY RUNS</th>
                    <th scope="col">WIN BY WICKETS</th>
                    <th scope="col">PLAYER OF THE MATCH</th>
                    <th scope="col">CITY</th>
                    <th scope="col">VENUE</th>
                  </tr>
                </thead>
                {data.map((value, index) => {
                  return (
                    <>
                      {value.season === 2010 ? (
                        <tbody>
                          <tr key={index}>
                            <td>{value.season}</td>
                            <td>{value.date}</td>
                            <td>{value.team1}</td>
                            <td>{value.team2}</td>
                            <td>{value.winner}</td>
                            <td>{value.win_by_runs}</td>
                            <td>{value.win_by_wickets}</td>
                            <td>{value.player_of_match}</td>
                            <td>{value.city}</td>
                            <td>{value.venue}</td>
                          </tr>
                        </tbody>
                      ) : null}
                    </>
                  );
                })}
              </Table>
            </Container>
          </Tab>
          <Tab eventKey="2011" title="2011">
            <Container>
              <Table striped bordered responsive>
                <thead>
                  <tr>
                    <th scope="col">SEASON</th>
                    <th scope="col">DATE</th>
                    <th scope="col">TEAM 1</th>
                    <th scope="col">TEAM 2</th>
                    <th scope="col">WINNER</th>
                    <th scope="col">WIN BY RUNS</th>
                    <th scope="col">WIN BY WICKETS</th>
                    <th scope="col">PLAYER OF THE MATCH</th>
                    <th scope="col">CITY</th>
                    <th scope="col">VENUE</th>
                  </tr>
                </thead>
                {data.map((value, index) => {
                  return (
                    <>
                      {value.season === 2011 ? (
                        <tbody>
                          <tr key={index}>
                            <td>{value.season}</td>
                            <td>{value.date}</td>
                            <td>{value.team1}</td>
                            <td>{value.team2}</td>
                            <td>{value.winner}</td>
                            <td>{value.win_by_runs}</td>
                            <td>{value.win_by_wickets}</td>
                            <td>{value.player_of_match}</td>
                            <td>{value.city}</td>
                            <td>{value.venue}</td>
                          </tr>
                        </tbody>
                      ) : null}
                    </>
                  );
                })}
              </Table>
            </Container>
          </Tab>
          <Tab eventKey="2012" title="2012">
            <Container>
              <Table striped bordered responsive>
                <thead>
                  <tr>
                    <th scope="col">SEASON</th>
                    <th scope="col">DATE</th>
                    <th scope="col">TEAM 1</th>
                    <th scope="col">TEAM 2</th>
                    <th scope="col">WINNER</th>
                    <th scope="col">WIN BY RUNS</th>
                    <th scope="col">WIN BY WICKETS</th>
                    <th scope="col">PLAYER OF THE MATCH</th>
                    <th scope="col">CITY</th>
                    <th scope="col">VENUE</th>
                  </tr>
                </thead>
                {data.map((value, index) => {
                  return (
                    <>
                      {value.season === 2012 ? (
                        <tbody>
                          <tr key={index}>
                            <td>{value.season}</td>
                            <td>{value.date}</td>
                            <td>{value.team1}</td>
                            <td>{value.team2}</td>
                            <td>{value.winner}</td>
                            <td>{value.win_by_runs}</td>
                            <td>{value.win_by_wickets}</td>
                            <td>{value.player_of_match}</td>
                            <td>{value.city}</td>
                            <td>{value.venue}</td>
                          </tr>
                        </tbody>
                      ) : null}
                    </>
                  );
                })}
              </Table>
            </Container>
          </Tab>
          <Tab eventKey="2013" title="2013">
            <Container>
              <Table striped bordered responsive>
                <thead>
                  <tr>
                    <th scope="col">SEASON</th>
                    <th scope="col">DATE</th>
                    <th scope="col">TEAM 1</th>
                    <th scope="col">TEAM 2</th>
                    <th scope="col">WINNER</th>
                    <th scope="col">WIN BY RUNS</th>
                    <th scope="col">WIN BY WICKETS</th>
                    <th scope="col">PLAYER OF THE MATCH</th>
                    <th scope="col">CITY</th>
                    <th scope="col">VENUE</th>
                  </tr>
                </thead>
                {data.map((value, index) => {
                  return (
                    <>
                      {value.season === 2013 ? (
                        <tbody>
                          <tr key={index}>
                            <td>{value.season}</td>
                            <td>{value.date}</td>
                            <td>{value.team1}</td>
                            <td>{value.team2}</td>
                            <td>{value.winner}</td>
                            <td>{value.win_by_runs}</td>
                            <td>{value.win_by_wickets}</td>
                            <td>{value.player_of_match}</td>
                            <td>{value.city}</td>
                            <td>{value.venue}</td>
                          </tr>
                        </tbody>
                      ) : null}
                    </>
                  );
                })}
              </Table>
            </Container>
          </Tab>
          <Tab eventKey="2014" title="2014">
            <Container>
              <Table striped bordered responsive>
                <thead>
                  <tr>
                    <th scope="col">SEASON</th>
                    <th scope="col">DATE</th>
                    <th scope="col">TEAM 1</th>
                    <th scope="col">TEAM 2</th>
                    <th scope="col">WINNER</th>
                    <th scope="col">WIN BY RUNS</th>
                    <th scope="col">WIN BY WICKETS</th>
                    <th scope="col">PLAYER OF THE MATCH</th>
                    <th scope="col">CITY</th>
                    <th scope="col">VENUE</th>
                  </tr>
                </thead>
                {data.map((value, index) => {
                  return (
                    <>
                      {value.season === 2014 ? (
                        <tbody>
                          <tr key={index}>
                            <td>{value.season}</td>
                            <td>{value.date}</td>
                            <td>{value.team1}</td>
                            <td>{value.team2}</td>
                            <td>{value.winner}</td>
                            <td>{value.win_by_runs}</td>
                            <td>{value.win_by_wickets}</td>
                            <td>{value.player_of_match}</td>
                            <td>{value.city}</td>
                            <td>{value.venue}</td>
                          </tr>
                        </tbody>
                      ) : null}
                    </>
                  );
                })}
              </Table>
            </Container>
          </Tab>
          <Tab eventKey="2015" title="2015">
            <Container>
              <Table striped bordered responsive>
                <thead>
                  <tr>
                    <th scope="col">SEASON</th>
                    <th scope="col">DATE</th>
                    <th scope="col">TEAM 1</th>
                    <th scope="col">TEAM 2</th>
                    <th scope="col">WINNER</th>
                    <th scope="col">WIN BY RUNS</th>
                    <th scope="col">WIN BY WICKETS</th>
                    <th scope="col">PLAYER OF THE MATCH</th>
                    <th scope="col">CITY</th>
                    <th scope="col">VENUE</th>
                  </tr>
                </thead>
                {data.map((value, index) => {
                  return (
                    <>
                      {value.season === 2015 ? (
                        <tbody>
                          <tr key={index}>
                            <td>{value.season}</td>
                            <td>{value.date}</td>
                            <td>{value.team1}</td>
                            <td>{value.team2}</td>
                            <td>{value.winner}</td>
                            <td>{value.win_by_runs}</td>
                            <td>{value.win_by_wickets}</td>
                            <td>{value.player_of_match}</td>
                            <td>{value.city}</td>
                            <td>{value.venue}</td>
                          </tr>
                        </tbody>
                      ) : null}
                    </>
                  );
                })}
              </Table>
            </Container>
          </Tab>
          <Tab eventKey="2016" title="2016">
            {/* <Sonnet /> */}
            <Container>
              <Table striped bordered responsive>
                <thead>
                  <tr>
                    <th scope="col">SEASON</th>
                    <th scope="col">DATE</th>
                    <th scope="col">TEAM 1</th>
                    <th scope="col">TEAM 2</th>
                    <th scope="col">WINNER</th>
                    <th scope="col">WIN BY RUNS</th>
                    <th scope="col">WIN BY WICKETS</th>
                    <th scope="col">PLAYER OF THE MATCH</th>
                    <th scope="col">CITY</th>
                    <th scope="col">VENUE</th>
                  </tr>
                </thead>
                {data.map((value, index) => {
                  return (
                    <>
                      {value.season === 2016 ? (
                        <tbody>
                          <tr key={index}>
                            <td>{value.season}</td>
                            <td>{value.date}</td>
                            <td>{value.team1}</td>
                            <td>{value.team2}</td>
                            <td>{value.winner}</td>
                            <td>{value.win_by_runs}</td>
                            <td>{value.win_by_wickets}</td>
                            <td>{value.player_of_match}</td>
                            <td>{value.city}</td>
                            <td>{value.venue}</td>
                          </tr>
                        </tbody>
                      ) : null}
                    </>
                  );
                })}
              </Table>
            </Container>
          </Tab>
          <Tab eventKey="2017" title="2017">
            <Container>
              <Table striped bordered responsive>
                <thead>
                  <tr>
                    <th scope="col">SEASON</th>
                    <th scope="col">DATE</th>
                    <th scope="col">TEAM 1</th>
                    <th scope="col">TEAM 2</th>
                    <th scope="col">WINNER</th>
                    <th scope="col">WIN BY RUNS</th>
                    <th scope="col">WIN BY WICKETS</th>
                    <th scope="col">PLAYER OF THE MATCH</th>
                    <th scope="col">CITY</th>
                    <th scope="col">VENUE</th>
                  </tr>
                </thead>
                {data.map((value, index) => {
                  return (
                    <>
                      {value.season === 2017 ? (
                        <tbody>
                          <tr key={index}>
                            <td>{value.season}</td>
                            <td>{value.date}</td>
                            <td>{value.team1}</td>
                            <td>{value.team2}</td>
                            <td>{value.winner}</td>
                            <td>{value.win_by_runs}</td>
                            <td>{value.win_by_wickets}</td>
                            <td>{value.player_of_match}</td>
                            <td>{value.city}</td>
                            <td>{value.venue}</td>
                          </tr>
                        </tbody>
                      ) : null}
                    </>
                  );
                })}
              </Table>
            </Container>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default seasons;
