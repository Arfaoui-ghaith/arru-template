import React from "react";
import { MapContainer , Marker, Popup, TileLayer, Polygon, Tooltip, LayersControl, ZoomControl} from "react-leaflet";
import { Container, Button, Row, Col, Modal } from 'react-bootstrap';
import axios from 'axios';
import FeatherIcon from 'feather-icons-react';
import "./map.css";
import MapFormUpdate from './MapFormUpdate';
const {BaseLayer} = LayersControl;


export default function Map() {
  const [quartiers, setQuartiers] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);
  const [quartier, setQuartier] = React.useState({});

  const fetchQuartiers = async () => {
		try {
			const url ='https://priqh2.herokuapp.com/api/v1/quartiers/';
			const res = await axios({
				headers: {'Authorization': `Bearer ${localStorage.getItem('tokenARRU')}`},
			  	method: 'get',
			  	url,
			});
	
			console.log(res.data.quartiers);

			if (res.status === 200) {
				setQuartiers(res.data.quartiers);
			}

      console.log(quartiers);

			} catch (err) {
				console.log(err);
			}
	}

  const deleteQuartier = async (id) => {
    console.log(id);
		try {
			const url =`https://priqh2.herokuapp.com/api/v1/quartiers/${id}`;
			const res = await axios({
				headers: {'Authorization': `Bearer ${localStorage.getItem('tokenARRU')}`},
			  	method: 'delete',
			  	url,
			});

      console.log(res.data);

			if (res.status === 203) {
				window.location.replace('/Quartiers');
			}

			} catch (err) {
				console.log(err);
			}
	}

  const multiPolygon = (limites) => {
    let polys = [];
    for(const limite of limites){
      polys.push([limite.lat, limite.lng]);
    }

    return polys;
    
  }

    React.useEffect(() => {
        fetchQuartiers();
    },[]);
  
  return (
    <Container>
    <MapContainer  center={[34.886917, 9.537499]} zoom={7} zoomControl={false}>
      <LayersControl position="bottomright">
        <BaseLayer checked name="osm">
          <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </BaseLayer>
        <BaseLayer name="satellite">
          <TileLayer
          attribution='&copy; <a href="server.arcgisonline.com">arcgisonline Maps</a> contributors'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
        </BaseLayer>
      </LayersControl>
      <ZoomControl position="bottomleft" zoomInText="+" zoomOutText="-" />
    
   
      {
      quartiers.map((quartier, index) => (
            <Marker position={[quartier.center.lat,quartier.center.lng]} key={index}>
              <Popup>
                Zone d'intervention: {quartier.zone_intervention.nom_fr} <br />
                Nom: {quartier.nom_fr} <br />
                <Row className="justify-content-md-center">
                  <Col md="auto">
                  <Button variant="danger" onClick={() => { setQuartier(quartier); setShow(true)}}>
                      <FeatherIcon icon="trash" />
                  </Button>
              
                  <Button variant="success" onClick={() => { setQuartier(quartier); setShowEdit(true)}}>
                    <FeatherIcon icon="edit" />
                  </Button>
                  </Col>
                </Row>
              </Popup>
            </Marker>
        ))
      }
    
    
    { 
    quartiers.map((quartier, index) => ( 
    <Polygon key={index} pathOptions={{ color: 'blue' }} positions={multiPolygon(quartier.latlngs)}>
      <Tooltip sticky>sticky Tooltip for Polygon</Tooltip>
    </Polygon> ))
    }
    
    </MapContainer>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header>
          <Modal.Title>Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want delete {quartier.nom_fr}!</Modal.Body>
          <Modal.Footer>
          <Button variant="danger" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => { deleteQuartier(quartier.id) }}>
            Save Changes
          </Button>
          </Modal.Footer>
        </Modal>

        <Modal
        show={showEdit}
        size="lg"
        onHide={() => setShowEdit(false)}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton >
          <Modal.Title id="example-custom-modal-styling-title">
            Modifier Quartier
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
         <MapFormUpdate quartier={quartier}/>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
