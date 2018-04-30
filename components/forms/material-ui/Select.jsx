import React from 'react';
import FormsyMuiSelect from '../formsy-mui/FormsyMuiSelect';
import { replaceComponent } from 'meteor/vulcan:core';
import withStyles from 'material-ui/styles/withStyles';

const styles = {
  root:{
    marginRight:'48px'
  },
  formInput: {}, //added this to avoid material-ui warnings
  counterWithHelper: {},
  counterWithoutHelper: {},
  clearButton: {},
  halfWidthLeft: {},
  halfWidthRight: {},
}

class SelectComponent extends React.PureComponent {
  render(){
    const {refFunction, inputProperties, classes, ...properties} = this.props;
    return <FormsyMuiSelect ref={refFunction} className={classes.root} {...inputProperties} native={true}/>;
  }
}


replaceComponent('FormComponentSelect', SelectComponent, [withStyles,styles]);
