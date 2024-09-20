import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { StyledMap } from './Map.styles';
import 'leaflet/dist/leaflet.css'; 
import React from 'react';

// Function to return marker coordinates
const getMarkers = () => {
    return {
        "Cauan": [-4.9180855555, -37.2246447222],
        "Pedro": [-5.4182733333, -37.6441955555],
        "Ruan": [-11.0525608333, -37.1452891666],
        "Paluski": [-9.9879955555, -38.6765558333]
    };
};

const Map: React.FC = () => {
    const markers = getMarkers();
    return (
        <StyledMap>
            <MapContainer center={[-23.5505, -46.6333]} zoom={4} style={{ width:"60rem", height: "100vh" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {Object.entries(markers).map(([name, position], index) => (
                    <Marker key={index} position={position as [number, number]}>
                        <Popup>
                            {name}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </StyledMap>
    );
}

export default Map;
