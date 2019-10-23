import React from "react";
import { Card, Container, Row, Col, Button, Image } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import Navigation from "../../tools/Navigation";

import placeholder from "../images/placeholder.jpg";

/* props:


- image url (image)
- title (name)
-

*/

const IndividualProject = props => {
  return (
    <div>
      <Navigation />
      <Container
        fluid
        style={{ padding: "2rem", display: "flex", justifyContent: "center" }}
      >
        <Row>
          <Col sm={12} md={6}>
            <Image src={placeholder} fluid />
          </Col>
          <Col sm={12} md={6} style={{ maxWidth: "800px" }}>
            <Card className="individual-project-card">
              <Card.Body
                className="individual-project-card"
                style={{ padding: "1rem" }}
              >
                <Card.Title style={{ padding: 0 }} className="title">
                  fMRI Disease Detection
                </Card.Title>
                <Card.Text>
                    {" "}
                    <Container>
                      <Row>
                        <b> Team: </b>Varun Nair, Hang Yang, Morris Greenberg, Ram Gollupudy
                      </Row>
                      <Row style={{ padding: "1rem 0 1rem 0" }}>
                        <b> Abstract: </b> 
                        Functional Magnetic Resonance Imaging, or fMRI, has emerged as a powerful tool in studying the function of brain regions. However, using data analysis techniques on fMRI data to predict the onset of neurodegenerative and mental illnesses has been challenging, largely due to the shortage of high-quality labeled data and the difficulty of extracting meaningful features. In this project, we utilize the Human Connectome Project, which contains a dataset of fMRI data labeled with the behavioral states of healthy subjects. By applying modern deep learning techniques on this dataset, we hope to build a classifier with strong predictive power on classifying behavioral states whose features contain significant correlations to a variety of neurodegenerative and mental illnesses.
                      </Row>
                    </Container>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
       
      </Container>
    </div>
  );
};

export default IndividualProject;
