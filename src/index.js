import React, { Component } from "react";
import { connect } from "react-redux";
// import GoogleMapReact from 'google-map-react';
import {
  GoogleMap,
  LoadScript,
  MarkerClusterer,
  Marker,
  InfoWindow
} from "@react-google-maps/api";

import IconImg from "../../assets/images/group-6-copy-2.png";
import Icon3 from "../../assets/images/group-9.png";
import Icon2 from "../../assets/images/group-8-copy-2.png";
import MarkerIcon1 from "../../assets/images/maker.png";

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.googleMap = React.createRef();
    this.markerClusterer = React.createRef();

    this.state = {
      center: {
        lat: -28.024,
        lng: 140.887
      },
      zoom: 3,
      isOpen: false,
      showInfoIndex: -1
    };
    this.onZoomChanged = this.onZoomChanged.bind(this);
    // this.handleToggleOpen = this.handleToggleOpen.bind(this);
    this.handleToggleClose = this.handleToggleClose.bind(this);
  }

  componentDidMount() {
    // useless when user already logged
  }

  onZoomChanged(e) {
    const lat = this.markerClusterer.current.state.markerClusterer.activeMap
      .getCenter()
      .lat();
    const lng = this.markerClusterer.current.state.markerClusterer.activeMap
      .getCenter()
      .lng();

    this.setState({
      center: { lat, lng }
    });
    console.log("onzoomchanged", this.googleMap.current.state.map.getCenter());
    console.log(
      "AAAAAA",
      this.markerClusterer.current.state.markerClusterer.activeMap
        .getCenter()
        .lat()
    );
  }

  handleToggleClose(e, i) {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
      // showInfoIndex: -1,
    });
  }

  handleToggleOpen(e, i, location) {
    console.log("AAAAAA", this.googleMap.current.state.map.getCenter());
    this.setState({
      isOpen: true,
      showInfoIndex: i
      // center: location,
    });
  }

  render() {
    const styles = [
      {
        textColor: "transparent",
        url: Icon3,
        height: 50,
        width: 50
        // fillColor: 'green',
      },
      {
        textColor: "transparent",
        url: Icon3,
        height: 50,
        width: 50,
        fillColor: "red"
      },
      {
        textColor: "transparent",
        url: Icon3,
        height: 50,
        width: 50,
        fillColor: "blue"
      },
      {
        textColor: "transparent",
        url: Icon3,
        height: 50,
        width: 50,
        fillColor: "blue"
      }
    ];

    const styles1 = [
      {
        textColor: "transparent",
        url: IconImg,
        height: 50,
        width: 50
        // fillColor: 'green',
      }
    ];
    const styles2 = [
      {
        textColor: "transparent",
        url: Icon2,
        height: 50,
        width: 50
        // fillColor: 'green',
      }
    ];
    const { zoom, isOpen, showInfoIndex, center } = this.state;
    return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyCRYB3F0Ljg5SO96OcVro16Pc5KeJEarH4"
      >
        <GoogleMap
          id="marker-example"
          mapContainerStyle={{
            height: "400px",
            width: "800px"
          }}
          zoom={zoom}
          // onZoomChanged={this.onZoomChanged()}
          onZoomChanged={e => this.onZoomChanged(e)}
          // mapTypeId='satellite'
          ref={this.googleMap}
          center={center}
        >
          <MarkerClusterer
            styles={styles2}
            ref={this.markerClusterer}
            options={{
              imagePath:
                "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
            }}
          >
            {clusterer3 =>
              [
                {
                  lat: -41.270634,
                  lng: 173.283966,
                  icon: MarkerIcon1,
                  key: 12,
                  info: "AAAA"
                },
                {
                  lat: -38.685692,
                  lng: 176.070206,
                  icon: MarkerIcon1,
                  key: 13,
                  info: "BBBB"
                }
              ].map((location, i) => (
                <Marker
                  key={location.key}
                  position={location}
                  clusterer={clusterer3}
                  icon={location.icon}
                  onClick={e =>
                    this.handleToggleOpen(e, location.key, location)
                  }
                  onFocus={e =>
                    this.handleToggleOpen(e, location.key, location)
                  }
                  onMouseOver={e =>
                    this.handleToggleOpen(e, location.key, location)
                  }
                  // onBlur={e => this.handleToggleClose(e, location.key, location)}
                  // onMouseOut={e => this.handleToggleClose(e, location.key, location)}
                >
                  {isOpen && showInfoIndex === location.key && (
                    <InfoWindow
                      key={location.key}
                      onCloseClick={() => this.handleToggleClose(i)}
                      position={location}
                      options={{ pixelOffset: { height: -40, width: 0 } }}
                    >
                      <div>
                        <h1>{location.info}</h1>
                        <a target="_blank" href="https://www.google.com">
                          google.com
                        </a>
                      </div>
                    </InfoWindow>
                  )}
                </Marker>
              ))
            }
          </MarkerClusterer>
          <MarkerClusterer
            styles={styles2}
            // marker={marker}
            options={{
              imagePath:
                "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
            }}
          >
            {clusterer4 =>
              [
                {
                  lat: -33.727111,
                  lng: 150.371124,
                  icon: MarkerIcon1,
                  key: 1,
                  info: "CCCC"
                },
                {
                  lat: -33.848588,
                  lng: 151.209834,
                  icon: MarkerIcon1,
                  key: 2,
                  info: "DDDD"
                }
              ].map((location, i) => (
                // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
                <Marker
                  key={location.key}
                  position={location}
                  clusterer={clusterer4}
                  onClick={e =>
                    this.handleToggleOpen(e, location.key, location)
                  }
                >
                  {isOpen && showInfoIndex === location.key && (
                    <InfoWindow
                      key={location.key}
                      onCloseClick={() => this.handleToggleClose(i)}
                      position={location}
                      options={{ pixelOffset: { height: -40, width: 0 } }}
                    >
                      <div>
                        <h1>{location.info}</h1>
                      </div>
                    </InfoWindow>
                  )}
                </Marker>
              ))
            }
          </MarkerClusterer>
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default connect(
  null,
  null
)(SignIn);
