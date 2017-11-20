import React from 'react';
import { Link } from 'react-router-dom';

function ContactListComponent({ contacts }) {
  return (
    <div>
      <div className="contacts__header">
        <h4>Contacts</h4>
      </div>
      <div className="contacts__list">
        <div className="list-group">
          {contacts.map((contact) => {
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

ContactListComponent.propTypes = {
  contacts: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default ContactListComponent;
