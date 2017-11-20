import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as contactActions from '../actions/contactListActions';
import urlParamsDispatcher from '../utils/urlParamsDispatcher';

import ContactListComponent from '../components/contactList';

class ContactList extends React.Component {
  componentDidMount() {
    this.props.actions.loadContacts();
  }
  render() {
    return <ContactListComponent {...this.props} />;
  }
}

ContactList.propTypes = {
  actions: React.PropTypes.shape({
    loadContacts: React.PropTypes.function
  })
};

function mapStateToProps(state) {
  return {
    contacts: state.getIn(['contactList', 'contacts']).toJS()
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(contactActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(urlParamsDispatcher(ContactList));
