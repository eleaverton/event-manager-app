import React from "react";
import { compose, withProps, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";
const google = window.google;



const NewMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDWIH4itMkNd8-WdG9gFoS9dbysNMVFUKI&callback=initMap",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `300px`, width: `300px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    center: { lat: 29.7221625, lng: -95.3924962 },
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={props.location}

  >

    <Marker
      position={{ lat: props.location.lat, lng: props.location.lng }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoBox
        onCloseClick={props.onToggleOpen}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
      >
        <div style={{ backgroundColor: `green`, opacity: 0.85, padding: `12px` }}>
          <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
            {props.title}
          </div>
        </div>
      </InfoBox>}
    </Marker>
  </GoogleMap>
);

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NewMap location={this.props.location} title = {this.props.title}/>
    )
  }
}




export default Map;
