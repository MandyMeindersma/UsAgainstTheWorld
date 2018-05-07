import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };


  render() {
      const style = {
        width: '290px',
        height: '250px'
    }
    return (
      <Map google={this.props.google}
      style={style} zoom={12}
      initialCenter={{
            lat: 43.6532,
            lng: -79.3832
          }}
          onClick={this.onMapClicked}>

                      <Marker onClick={this.onMarkerClick}
                              name={"Sistering\n Serving: 45\n Capacity: 50"}
                              position={{lat: 43.6614163,
                              lng: -79.4309733}} />
                              <Marker onClick={this.onMarkerClick}
                                      name={"Fred Victor\n Serving: 56\n Capacity: 67"}
                                      position={{lat: 43.652517,
                                      lng: -79.373900}} />
                                      <Marker onClick={this.onMarkerClick}
                                              name={"Better Living Center\n Serving: 106\n Capacity: 120"}
                                              position={{lat: 43.631936,
                                              lng: -79.420778}} />


        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyD23VhZQRJDKE88Zp-yDAFYwyfrZc1itKw")
})(MapContainer)
