import React from 'react'
import Map from '../componet/Map'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import axios from 'axios'

import FeatherIcon from 'feather-icons-react';
import MapFormAdd from './../componet/MapFormAdd'
import { Container, Row, Col, Modal, Card, Button } from 'react-bootstrap';

export default function Quartiers() {
    const animatedComponents = makeAnimated();
    const [show, setShow] = React.useState(false);
    

    return (
        <main className="content">
        <div className="container-fluid p-0">

            <h1 className="h3 mb-3">Gestion des quartiers</h1>

            <div className="row">
                <div className="col-12 col-lg-12" >
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Default Map</h5>
                            <h6 className="card-subtitle text-muted">Displays the default road map view.</h6>
                        </div>
                    </div>
                    <Container>
                        <Row>
                            <Col xs={12} md={3}>
                            <Card>
                                <Card.Header>
                                    <Button variant="primary" size="lg" block onClick={() => setShow(true)}>
                                        <FeatherIcon icon="map" /><FeatherIcon icon="plus" />
                                    </Button>
                                </Card.Header>
                                <Card.Body>
                                
                                <Select className="py-2"
                                    placeholder="Gouvernorat ..."
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    options={[]}
                                />
                                <Select className="py-2"
                                    placeholder="Commune ..."
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    options={[]}
                                />
                                <Select className="py-2"
                                    placeholder="Municipalite ..."
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    options={[]}
                                />	
                                	   
                                </Card.Body>
                            </Card>
                            </Col>
                            <Col xs={12} md={9} >
                            <Card>
                                <Card.Header>
                    
                                </Card.Header>
                                <Card.Body>
                                    <Map />
                                </Card.Body>
                            </Card>
                            </Col>
                        </Row>
                   </Container>         
                </div> 
            </div>

        </div>

        <Modal
        show={show}
        size="lg"
        onHide={() => setShow(false)}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Ajouter Quartier
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
         <MapFormAdd />
        </Modal.Body>
      </Modal>

    </main>
    )
}
