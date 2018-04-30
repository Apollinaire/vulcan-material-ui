import React from 'react';
import FormsyMuiInput from '../formsy-mui/FormsyMuiInput';
import { replaceComponent } from 'meteor/vulcan:core';

class TextareaComponent extends React.PureComponent {
  render(){
    const {refFunction, inputProperties, ...properties} = this.props;
    return <FormsyMuiInput ref={refFunction} multiline={true} rows={properties.rows? properties.rows : 2} rowsMax={10} {...inputProperties}/>;
  }
}

replaceComponent('FormComponentTextarea', TextareaComponent);
