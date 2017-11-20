import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as contactActions from '../actions/contactViewActions';
import urlParamsDispatcher from '../utils/urlParamsDispatcher';
import ContactViewComponent from '../components/contactView';

class ContactView extends React.Component {
  componentDidMount() {
    this.props.actions.loadContact();
  }
  render() {
    return (
      <ContactViewComponent {...this.props} />
    );
  }
}

ContactView.propTypes = {
  actions: React.PropTypes.shape({
    loadContact: React.PropTypes.function
  })
};

function mapStateToProps(state) {
  return {
    detailed: state.getIn(['contactView', 'detailed']).toJS()
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(contactActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(urlParamsDispatcher(ContactView));
