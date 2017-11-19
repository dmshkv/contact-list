import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as contactActions from '../actions/contactListActions';
import urlParamsDispatcher from '../utils/urlParamsDispatcher';

class ContactList extends React.Component {
  componentDidMount() {
    this.props.actions.loadContacts();
  }
  render() {
    return (
      <div>
        <div className="contacts__header">
          <h4>Contacts</h4>
        </div>
        <div className="contacts__list">
          <div className="list-group">
            {this.props.contacts.map((contact) => {
              return (<Link to={`/contact/${contact.id}`} className="list-group-item" key={contact.id}>
                <span className="badge">{contact.calls}</span>
                {contact.name}
              </Link>);
            })}
          </div>
        </div>
        {/* <div className="contacts__pagination"></div> */}
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: React.PropTypes.arrayOf(React.PropTypes.object),
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
