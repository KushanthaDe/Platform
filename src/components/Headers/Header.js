import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const Header = () => {
  return (
    <>
      <div className="header bg-gradient-bg pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <h1>Dashboard</h1>
              </Col>
              <Col lg="6" xl="3">

              </Col>
              <Col lg="6" xl="3">
                
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0 shadow">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h6"
                          className="text-muted mb-0"
                        >
                          Currently Learning
                        </CardTitle>
                        <span className="h3 font-weight-bold mb-0">English</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape text-white rounded-circle shadow">
                        <a href="#">
                        <img
                        alt="..."
                        src={
                          require("../../assets/img/theme/ss2.png")
                            .default}
                        />
                        </a>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
