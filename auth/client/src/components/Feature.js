import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Feature extends Component {
  render() {
    return <h3>This is the Feature!</h3>;
  }
}

export default requireAuth(Feature);
