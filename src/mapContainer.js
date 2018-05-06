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
      style={style} zoom={14}
      initialCenter={{
            lat: 43.6532,
            lng: -79.3832
          }}
          onClick={this.onMapClicked}>

        <Marker onClick={this.onMarkerClick}
                name={"Women's Habitat"}
                position={{lat: 43.6011776,
                lng: -79.5078087}}/>

      <Marker onClick={this.onMarkerClick}
              name={"Nellie's Administration"}
              position={{lat: 43.6593677,
              lng: -79.3502875}} />

              <Marker onClick={this.onMarkerClick}
                      name={"Red Door Family Shelter"}
                      position={{lat: 43.656403,
                      lng: -79.3401427}} />

                      <Marker onClick={this.onMarkerClick}
                              name={"Sistering\n Serving:45\n Capacity: 50"}
                              position={{lat: 43.6614163,
                              lng: -79.4309733}} />
                              <Marker onClick={this.onMarkerClick}
                                      name={"Street Haven at The Crossroads"}
                                      position={{lat: 43.6592425,
                                      lng: -79.3746183}} />
                                      <Marker onClick={this.onMarkerClick}
                                              name={"Covenant House Toronto"}
                                              position={{lat: 43.6593677,
                                              lng: -79.3502875}} />
                                              <Marker onClick={this.onMarkerClick}
                                                      name={"North York Women's Shelter"}
                                                      position={{lat: 43.6593677,
                                                      lng: -79.3502875}} />
                                                      <Marker onClick={this.onMarkerClick}
                                                              name={"Bethlehem United Shelter"}
                                                              position={{lat: 43.6593677,
                                                              lng: -79.3502875}} />
                                                              <Marker onClick={this.onMarkerClick}
                                                                      name={"Eva's Satellite"}
                                                                      position={{lat: 43.6593677,
                                                                      lng: -79.3502875}} />




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
