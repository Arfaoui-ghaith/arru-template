import React from "react";
import { MapContainer , Marker, Popup, TileLayer, Polygon, Tooltip, LayersControl, 
  withLeaflet } from "react-leaflet";
import { Container, Button } from 'react-bootstrap';
import axios from 'axios';
import { SearchControl, OpenStreetMapProvider } from 'react-leaflet-geosearch'

import "./map.css";

const {BaseLayer} = LayersControl;

const prov = OpenStreetMapProvider();
const GeoSearchControlElement = withLeaflet(SearchControl);

export default function Map() {
  const [quartiers, setQuartiers] = React.useState([]);

  const fetchQuartiers = async () => {
		try {
			const url ='http://localhost:4000/api/v1/quartiers/';
			const res = await axios({
				headers: {'Authorization': `Bearer ${localStorage.getItem('tokenARRU')}`},
			  	method: 'get',
			  	url,
			});
	
			console.log(res.data.projets);

			if (res.status === 200) {
				setQuartiers(res.data.quartiers);
			}

      console.log(quartiers);

			} catch (err) {
				console.log(err);
			}
	}

  const deleteQuartier = async (id) => {
		try {
			const url =`http://localhost:4000/api/v1/quartiers/${id}`;
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
      polys.push([limite.iat, limite.ing]);
    }

    return polys;
    
  }

    React.useEffect(() => {
        fetchQuartiers();
    },[]);
  
  return (
    <Container>
    <MapContainer  center={[34.886917, 9.537499]} zoom={7}>
      <LayersControl>
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
      
      <GeoSearchControlElement provider={prov} showMarker= {true} showPopup={false} popupFormat={({ query, result }) => result.label} 
                  maxMarkers={3}  retainZoomLevel= {false}  animateZoom= {true} autoClose= {false}  
                  searchLabel={'Enter address, please'} keepResult= {true} />
   
      {
      quartiers.map((quartier) => (
            <Marker position={[quartier.iat,quartier.ing]}>
              <Popup>
                Projet: {quartier.projet_nom} <br />
                Nom: {quartier.nom} <br />
                <Button variant="danger" size="lg" block onClick={() => deleteQuartier(quartier.id)}>
                    Delete
                </Button>
              </Popup>
            </Marker>
        ))
      }
    
    
    { 
    quartiers.map((quartier) => ( 
    <Polygon pathOptions={{ color: 'blue' }} positions={multiPolygon(quartier.limites)}>
      <Tooltip sticky>sticky Tooltip for Polygon</Tooltip>
    </Polygon> ))
    }
    
    
    </MapContainer>
    </Container>
  );
}
