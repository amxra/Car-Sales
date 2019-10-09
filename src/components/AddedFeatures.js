import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../state/actionCreators';

import AddedFeature from './AddedFeature';

export const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
    </div>
  );
};



export default connect(
  state => state,
  actionCreators,
)(AddedFeatures);
