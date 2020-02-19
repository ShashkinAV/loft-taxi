import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import mapboxgl from 'mapbox-gl';
import { MapForm } from './MapForm';
import { getRoute, fetchRouteRequest } from '../../modules/route';
import { drawRoute } from './drawRoute';

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
      lng: 30.33661,
      lat: 59.94024,
      zoom: 9.5,
    };
    this.map = null;
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const { route } = this.props;

      if (this.map.getLayer('route')) {
        this.map.flyTo({
          center: [this.state.lng, this.state.lat],
          zoom: this.state.zoom,
        });
        this.map.removeLayer('route');
        this.map.removeSource('route');
      }
      if (route && route.length) {
        drawRoute(this.map, route);
      }
    }
  }

  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.mapContainer}>
        <div ref={this.mapRef} className={classes.map}/>
        <MapForm/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  route: getRoute(state),
});

const mapDispatchToProps = { fetchRouteRequest };

export const Map = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MapComponent));