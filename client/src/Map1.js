import React from "react";

const google = window.google;


const Cynthia_Woods_Mitchell_Pavilion = {
  lat: 30.161593,
  lng: -95.466217
};

class Map1 extends React.Component {
  constructor() {
    super();
   
  }
  
  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: Cynthia_Woods_Mitchell_Pavilion,
      zoom: 14
    });
  }
  
  
  render() {


      return (
      <div>
        
        <div className="map" ref="map" ></div>
      </div>
    );
  }
}

export default Map1;


