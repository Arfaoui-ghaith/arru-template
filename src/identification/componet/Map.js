import React from "react";
import { MapContainer , Marker, Popup, TileLayer,FeatureGroup, Polygon, Tooltip } from "react-leaflet";
import { EditControl } from "react-leaflet-draw"

import "./map.css";

export default function Map() {
  const multiPolygon = [
    [
      [51.51, -0.12],
      [51.51, -0.13],
      [51.53, -0.13],
    ],
    [
      [51.51, -0.05],
      [51.51, -0.07],
      [51.53, -0.07],
    ],
  ]
  
  return (
    <MapContainer  center={[33.886917, 9.537499]} zoom={6}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FeatureGroup>
        <EditControl
          position='topright'
          onCreated={(e) => console.log(e)}
          onEditStart={(e) => console.log(e.layers)}
          draw={{
            rectangle: false
          }}
        />
        
      </FeatureGroup>
   
      <Marker position={[36.25313319699069,9.613037109375002]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Polygon pathOptions={{ color: 'purple' }} positions={multiPolygon}>
      <Tooltip sticky>sticky Tooltip for Polygon</Tooltip>
    </Polygon>
    </MapContainer >
  );
}
