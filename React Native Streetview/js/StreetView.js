import React from "react";
import PropTypes from "prop-types";
import { View, requireNativeComponent } from "react-native";

const propTypes = {
  ...View.propTypes,

  // Center point
  coordinate: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    // Search radius (meters) around coordinate.
    radius: PropTypes.number,
  }),
  pov: PropTypes.shape({
    tilt: PropTypes.number.isRequired,
    bearing: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }),
  // Allowing user gestures (panning, zooming)
  allGesturesEnabled: PropTypes.bool,

  heading: PropTypes.number,

  onError: PropTypes.func,
  onSuccess: PropTypes.func,
};

class StreetView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <NSTStreetView {...this.props} />;
  }
}

StreetView.propTypes = propTypes;

const cfg = {
  nativeOnly: {
    onError: true,
    onSuccess: true,
  },
};

module.exports = requireNativeComponent("NSTStreetView", StreetView, cfg);
