import React from 'react';
import FormsyMuiInput from '../formsy-mui/FormsyMuiInput';
import { replaceComponent } from 'meteor/vulcan:core';


class Default extends React.PureComponent {
  render() {
    const {refFunction, inputProperties, ...properties} = this.props;
    return <FormsyMuiInput {...inputProperties} ref= {refFunction}/>;
  }
}

replaceComponent('FormComponentDefault', Default);
