// import react
import { useContext} from 'react'

// import library
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

// import leaflet css
import 'leaflet/dist/leaflet.css';

// import GlobalContext
import GlobalContext from '../context/GlobalContext';

function MyComponent( {position} ) {
  const map = useMap()
  map.setView([position.geocode.latitude - 0.500, position.geocode.longitude], 7)
  return null
}

function Maps() {

  const { offices, selectOffice, setSelectOffice } = useContext(GlobalContext)

  return (
    <MapContainer center={[-8.6523,115.2184]} zoom={5} className=" visible z-0">
      {
        selectOffice && <MyComponent position={selectOffice} />
      }
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      {
        offices.map((marker, index) => (
          
          <Marker 
            key={index} 
            title={marker.city} 
            position={[marker.geocode.latitude, marker.geocode.longitude]}
            eventHandlers={{
              click: () => {
                setSelectOffice(marker)
              }
            }}
          >  
            <Popup keepInView>
              <h2>
                Kantor cabang {marker.city}
              </h2>
            </Popup>
          </Marker>
        ))
      }
    </MapContainer>
  )
}

export default Maps