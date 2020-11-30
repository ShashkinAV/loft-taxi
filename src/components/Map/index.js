import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import { withStyles } from '@material-ui/styles';


mapboxgl.accessToken = 'pk.eyJ1IjoiY2hvdGluZWMiLCJhIjoiY2s1dXIxbDEyMDNqazNybGwzcTBydmdybyJ9.E0ZzR-BquMw7y5WGatf6XQ';

const styles = theme => ({
  mapContainer: {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
  },
  map: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0
  }
});

class MapComponent extends Component {
  mapRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [37.6155600, 55.7522200],
      zoom: 15
    });

    map.on(('load'), () => {
      // Insert the layer beneath any symbol layer.
      let layers = map.getStyle().layers

      let labelLayerId
      for (let i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
          labelLayerId = layers[i].id
          break
        }
      }

      map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
          'fill-extrusion-color': '#aaa',

          // use an 'interpolate' expression to add a smooth transition effect to the
          // buildings as the user zooms in
          'fill-extrusion-height': [
            'interpolate', ['linear'], ['zoom'],
            15, 0,
            15.05, ['get', 'height']
          ],
          'fill-extrusion-base': [
            'interpolate', ['linear'], ['zoom'],
            15, 0,
            15.05, ['get', 'min_height']
          ],
          'fill-extrusion-opacity': .6
        }
      }, labelLayerId)
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.mapContainer}>
        <div ref={this.mapRef} className={classes.map} />
      </div>
    );
  }
}

export const Map = withStyles(styles)(MapComponent);
