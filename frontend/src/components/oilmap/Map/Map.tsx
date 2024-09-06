
// libs
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { StyledMap } from './Map.styles';
import 'leaflet/dist/leaflet.css'; 

import React from "react";
// import "rc-tabs/assets/index.css";
import "leaflet/dist/leaflet.css";
// import "./styles.css";


const Map = () => {
    return (
        <StyledMap>
            <MapContainer center={[-23.5505, -46.6333]} zoom={11} style={{ height: "100vh" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[-23.5505, -46.6333]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </StyledMap>
    );
}

export default Map;