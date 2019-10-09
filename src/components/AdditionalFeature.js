import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';


export const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={e => props.removeFeature(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(
  state => state,
  actionCreators,
)(AdditionalFeature);