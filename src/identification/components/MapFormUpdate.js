import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { Container, Card, Button, Modal } from 'react-bootstrap';
import { MapContainer , TileLayer, FeatureGroup, Polygon } from "react-leaflet";
import { EditControl } from "react-leaflet-draw"
import axios from 'axios'

export default function MapFormAdd({ quartier }) {

    const editQuartier = async () => {
        /*console.log(mapLayers);
		 try {
			const url =`http://localhost:4000/api/v1/quartiers/`;
			const res = await axios({
				headers: {'Authorization': `Bearer ${localStorage.getItem('tokenARRU')}`},
			  	method: 'post',
			  	url,
                data:{ quartiers: mapLayers }
			});

			if (res.status === 201) {
				console.log(res.data);
                window.location.replace('/Quartiers');
			}

			} catch (err) {
				console.log(err);
			}*/
	}

   
    
    const _onEdited = (e) => {
        //console.log(e);
        const {
            layers: { _layers },
        } = e;

        console.log(Object.values(_layers));
    };

    const multiPolygon = (limites) => {
        let polys = [];
        for(const limite of limites){
          polys.push([limite.lat, limite.lng]);
        }
    
        return polys;
      }

    return (
        <React.Fragment>
        <Container>
                
                    <Card>
                        <Card.Body>
                            <MapContainer  center={[34.886917, 9.537499]} zoom={7} >
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">
                                OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            
                            <FeatureGroup>
                                <EditControl
                                position='topright'
                                onEdited={_onEdited}
                                click={(e) => console.log(e)}
                                draw={{
                                    rectangle: false,
                                    circle: false,
                                    circlemarker: false,
                                    marker: false,
                                    polyline: false
                                }}
                                />

                            </FeatureGroup>

                            <Polygon enableEdit pathOptions={{ color: 'blue' }}  positions={multiPolygon(quartier.latlngs)}>
                                
                            </Polygon>
                                
                            </MapContainer >
                        </Card.Body>
                    </Card> : ""
                
                    <Card>
                        <Card.Body>
                            <Button variant="primary" size="lg" onClick={editQuartier} block>
                                Enregistrer
                            </Button> 
                        </Card.Body>
                    </Card>

        </Container>

        </React.Fragment>
    )
}
