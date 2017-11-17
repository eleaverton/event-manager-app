import React from "react";

const google = window.google;

// const ARC_DE_TRIOMPHE_POSITION = {
//   lat: 48.873947,
//   lng: 2.295038
// };

const Cynthia_Woods_Mitchell_Pavilion = {
  lat: 30.161593,
  lng: -95.466217
};

class Map1 extends React.Component {
  constructor() {
    super();
    // this.panToArcDeTriomphe = this.panToArcDeTriomphe.bind(this);
  }
  
  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: Cynthia_Woods_Mitchell_Pavilion,
      zoom: 14
    });
  }
  
  // panToArcDeTriomphe() {
  //   console.log(this)
  //   this.map.panTo(ARC_DE_TRIOMPHE_POSITION);
  // }
  
  render() {


    //<button onClick={this.panToArcDeTriomphe}>Go to Arc De Triomphe</button>
    return (
      <div>
        
        <div className="map" ref="map" ></div>
      </div>
    );
  }
}

export default Map1;


