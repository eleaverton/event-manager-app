import React from "react";

const google = window.google;
const Cockrell_Butterfly_Center = {
  lat: 29.7221625,
  lng: -95.3924962,
};


class Map1 extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: Cockrell_Butterfly_Center,
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
