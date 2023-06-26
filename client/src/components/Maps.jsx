// import React from 'react'

// import library
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// import leaflet css
import 'leaflet/dist/leaflet.css';

// markers
const markers = [
  {
    geocode: [48.86, 2.3522],
    popUp: "Hello, I am pop up 1"
  },
  {
    geocode: [48.85, 2.3522],
    popUp: "Hello, I am pop up 2"
  },
  {
    geocode: [48.855, 2.34],
    popUp: "Hello, I am pop up 3"
  }
];

function Maps() {
  return (
    <MapContainer center={[48.8566, 2.3533]} zoom={13} className=" visible z-0">
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      {
        markers.map((marker, index) => (
          <Marker key={index} position={marker.geocode}>
            <Popup>
              <h2>{marker.popUp}</h2>
            </Popup>

          </Marker>
        ))
      }
    </MapContainer>
  )
}

export default Maps