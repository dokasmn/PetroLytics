
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

async function getMarkers(){
    return new Promise ((resolve,reject)=>{
        resolve({
            "position01": [-4.9180855555,-37.2246447222],
            "position02": [-5.4182733333,-37.6441955555],
            "position03": [-11.0525608333,-37.1452891666],
            "position04": [-9.9879955555,-38.6765558333]
        })
        reject({"erro":"erro"})
    })
}


const insertMarkers = async function (data : any){
    console.log(data);
    Object.values(data).forEach((element) => {
       console.log(element) 
    });
    return 0;
}

insertMarkers(await getMarkers())

export default Map;