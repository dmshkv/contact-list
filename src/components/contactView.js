import React from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function ContactViewComponent({ detailed }) {
  return (
    <div>
      <div className="contact__header">
        <h4>{detailed.name}</h4>
      </div>
      <div className="contact__body">
        {detailed.phone}
        <br />
        {detailed.email}
      </div>
      <div className="contact__history">
        <hr />
        {detailed.history.map((call, index) => {
          return (
            <div key={index} className="row">
              <div className="col-sm-5">{moment(call.time).format('MMM Do, h:mm')}</div>
              <div className="col-sm-5">{capitalizeFirstLetter(call.type)} call</div>
              <div className="col-sm-2">{call.duration}</div>
            </div>
          );
        })}
      </div>
      <div className="contact__back">
        <hr />
        <Link to="/contacts">Back</Link>
      </div>
    </div>
  );
}

ContactViewComponent.propTypes = {
  detailed: React.PropTypes.shape({
    id: React.PropTypes.number,
    name: React.PropTypes.string,
    phone: React.PropTypes.string,
    email: React.PropTypes.string,
    history: React.PropTypes.arrayOf(React.PropTypes.object)
  })
};

export default ContactViewComponent;
