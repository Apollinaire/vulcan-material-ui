import React from 'react';
import FormsyMuiInput from '../formsy-mui/FormsyMuiInput';
import { replaceComponent } from 'meteor/vulcan:core';

class UrlComponent extends React.PureComponent {
    render(){
      const {refFunction, inputProperties, ...properties} = this.props;
      return <FormsyMuiInput ref={refFunction} {...inputProperties} type='url'/>;
    }
}
replaceComponent('FormComponentUrl', UrlComponent);
