import React, { useState } from "react";
// node.js library that concatenates classes (strings)
//import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
import './radialbar.css';
// react plugin used to create charts
//import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  //CardHeader,
  CardBody,
  CardTitle,
  //NavItem,
  //NavLink,
  //Nav,
  //Progress,
  //Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  //chartExample1,
  //chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7 mr--71" fluid>
      <div className="cl-sm-12">
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0 mr-40">
            <img className="headerimg"
              alt="..."
                src={
                  require("../assets/img/theme/header-4.png")
                    .default}
            />
            <span className="textcentered">Welcome back, Clarence</span>
            <span className="text2">Ta-da! You're up to date. &#129395;</span>
            <img className="man"
              alt="..."
                src={
                  require("../assets/img/theme/Group 9.png")
                    .default}
            />
          </Col>
        </Row>
        </div>
        &nbsp;
        <Row>
              <Col lg="6" xl="3">
                <h1>Events</h1>
              </Col>
              <Col lg="6" xl="3">

              </Col>
              <Col lg="6" xl="3">
                
              </Col>
              <Col lg="6" xl="3">
                
              </Col>
            </Row>
        <div className="cl-sm-12">
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="9">
            <img className="headerimg2"
              alt="..."
                src={
                  require("../assets/img/theme/3000434.png")
                    .default}
            />
            <div className="objtopright">
                    <Button className="btnborderradius"
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      SCIENCE
                    </Button>
            </div>
            <a href="#" class="leftarrow NPnext">&#129044;</a>
            <span className="textcenteredleft"><b>Youth Talent & <br/>Education</b></span>
            <span className="textcenteredright"><b>May,20</b></span>
            <a href="#" class="rightarrow NPprevious">&#129046;</a>
          </Col>
          <Col xl="3">
            <Row>
            <span className="textblah">EVENTS TODAY</span>
            <span className="textgrey">___________________________________</span>
            </Row>
            &nbsp;
            <Row>
                <Card className="card-stats mb-4 mb-xl-0 shadow">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h6"
                          className="text-muted mb-0"
                        >
                          
                        </CardTitle>
                        <div className="icon icon-shape text-white rounded-circle shadow">
                          <a href="#">
                            <img
                              alt="..."
                              src={
                              require("../assets/img/theme/thumbnail.png")
                                .default}
                            />
                          </a>
                          </div>
                        </div>
                        <Col className="col-auto">
                        <span className="textgrey2">10:30AM</span><br/>
                        <span className="textblah2">Webinar: the basics of..</span>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                </Row>
            <Row>
                <Card className="card-stats mb-4 mb-xl-0 shadow">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h6"
                          className="text-muted mb-0"
                        >
                          
                        </CardTitle>
                        <div className="icon icon-shape text-white rounded-circle shadow">
                        <a href="#">
                            <img
                              alt="..."
                              src={
                              require("../assets/img/theme/thumbnail.png")
                                .default}
                            />
                          </a>  
                          </div>
                        </div>
                        <Col className="col-auto">
                        <span className="textgrey">2:15PM</span><br/>
                        <span className="textblah">Team Building Activity &#128293;</span>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                </Row>
            </Col>
        </Row>
        </div>
        &nbsp;
        <Row>
              <Col lg="12" xl="3">
                <h1>Activity 
                <span className="textgrey">__________________________________________________________________________________________________________________________________________________________________________________________________________________________
                </span></h1>
              </Col>
              <Col lg="6" xl="3">

              </Col>
              <Col lg="6" xl="3">
                
              </Col>
              <Col lg="6" xl="3">
                
              </Col>
            </Row>
            <Row>
                <Card className="card-stats2 shadow">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h6"
                          className="text-muted mb-0"
                        >
                          
                        </CardTitle>
                        <div className="icon icon-shape text-white rounded-circle">
                          <a href="#">
                            <img className="man3"
                              alt="..."
                              src={
                              require("../assets/img/theme/ic-followers.png")
                                .default}
                            />
                          </a>
                          </div>
                        </div>
                        <Col>

                        <p className="text22">You have new 5 followers including <a href="#">Kathyn Crawford</a> and <a href="#">Piper Shaw</a></p>

                      </Col>
                      <div className="icon icon-shape text-white rounded-circle">
                        <a href="#">
                            <img className="man2"
                              alt="..."
                              src={
                              require("../assets/img/theme/ArrowRotate.png")
                                .default}
                            />
                        </a>
                          </div>
                    </Row>
                  </CardBody>
                </Card>
                </Row>
                &nbsp;
              <Row>
                <Card className="card-stats2 shadow">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h6"
                          className="text-muted mb-0"
                        >
                          
                        </CardTitle>
                        <div className="icon icon-shape text-white rounded-circle">
                          <a href="#">
                            <img className="man3"
                              alt="..."
                              src={
                              require("../assets/img/theme/ic-events.png")
                                .default}
                            />
                          </a>
                          </div>
                        </div>
                        <Col>

                        <p className="text23">3 new events were added to your calender</p>

                      </Col>
                      <div className="icon icon-shape text-white rounded-circle">
                        <a href="#">
                            <img className="man2"
                              alt="..."
                              src={
                              require("../assets/img/theme/ArrowRotate.png")
                                .default}
                            />
                        </a>
                          </div>
                    </Row>
                  </CardBody>
                </Card>
              </Row>
              &nbsp;
            <Row>
                <Card className="card-stats2 shadow">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h6"
                          className="text-muted mb-0"
                        >
                          
                        </CardTitle>
                        <div className="icon icon-shape text-white rounded-circle">
                          <a href="#">
                            <img className="man3"
                              alt="..."
                              src={
                              require("../assets/img/theme/ic-assignments.png")
                                .default}
                            />
                          </a>
                          </div>
                        </div>
                        <Col>

                        <p className="text24">You have 3 pending readings to complete &#129299;</p>

                      </Col>
                      <div className="icon icon-shape text-white rounded-circle">
                        <a href="#">
                            <img className="man2"
                              alt="..."
                              src={
                              require("../assets/img/theme/ArrowRotate.png")
                                .default}
                            />
                        </a>
                          </div>
                    </Row>
                  </CardBody>
                </Card>
            </Row>


        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="cardbg shadow">
              <CardBody className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="textcent2">Progress Overview</h3>
                  </div>
                </Row>
                <div><a href="#">
                <div class="pie-wrapper progress-half radialrow">
                  <span class="label">40<em>%</em></span>
                  <div class="pie">
                    <div class="left-side half-circle"></div>
                    <div class="right-side half-circle"></div>
                  </div>  
                </div>
                </a>
                </div>
              </CardBody>
              <Card className="cardbg2 center">
              <CardBody className="border-0">
                <Row className="align-items-center">
                  <Col>
                    <div className="col">
                      <h3 className="textcrd20">20</h3>
                      <h4 className="textcrdhours">hours</h4>
                    </div>
                  </Col>
                  <Col>
                    <div className="col">
                      <h3 className="textcrd30">30</h3>
                      <h4 className="textcrdhours">hours</h4>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            </Card>
          </Col>

          <Col className="mb-5 mb-xl-0" sm="4">
            <Row>
            <span className="textund">EVENTS TODAY</span>
            <span className="textundline">_____________________________________________________________________________________________</span>
            </Row>

            <Row>
                <Card className="cardund shadow">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h6"
                          className="text-muted mb-0"
                        > 
                        </CardTitle>
                        </div>
                        <div className="col">
                        <span className="textundcard">Total Webinars</span>
                        <span className="textund9">9</span>
                      </div>
                    </Row>
                  </CardBody>
                </Card>

                <Card className="cardund2 shadow">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h6"
                          className="text-muted mb-0"
                        > 
                        </CardTitle>
                        </div>
                        <div className="col">
                        <span className="textundcard">Pending Assignments</span>
                        <span className="textund9">0</span>
                      </div>
                    </Row>
                  </CardBody>
                </Card>

                <Card className="cardund3 shadow">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h6"
                          className="text-muted mb-0"
                        > 
                        </CardTitle>
                        </div>
                        <div className="col">
                        <span className="textundcard">Total Units</span>
                        <span className="textund9">5</span>
                      </div>
                    </Row>
                  </CardBody>
                </Card>
            </Row>

            <Row>
              <Card className="cardundund2 shadow">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h6"
                            className="text-muted mb-0"
                          > 
                          </CardTitle>
                          </div>
                          <div className="col">
                          <span className="textundcardline2">Total<br/>Readings</span>
                          <span className="textund14">14</span>
                        </div>
                      </Row>
                    </CardBody>
                </Card>

                <Card className="cardundund shadow2">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h6"
                            className="text-muted mb-0"
                          > 
                          </CardTitle>
                          </div>
                          <div className="col">
                          <span className="textundcardline25">Total<br/>Videos</span>
                          <span className="textund5">5</span>
                        </div>
                      </Row>
                    </CardBody>
                </Card>
              </Row>
              <Row>
                <div className="icon icon-shape">
                  <img className="headerimg3"
                    alt="..."
                    src={
                      require("../assets/img/theme/Ovelyellow.png")
                      .default}
                  />        
                </div>
                <div className="textbottom">
                  <span><b>Confirm your account details</b> Please confirm your email and phone number &#128560;</span>
                </div>
              </Row>
            </Col>
        </Row>
        
      </Container>
    </>
  );
};

export default Index;
