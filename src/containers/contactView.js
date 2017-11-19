import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import moment from 'moment';

import * as contactActions from '../actions/contactViewActions';
import urlParamsDispatcher from '../utils/urlParamsDispatcher';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class ContactView extends React.Component {
  componentDidMount() {
    this.props.actions.loadContact();
  }
  render() {
    return (
      <div>
        <div className="contact__header">
          <h4>{this.props.detailed.name}</h4>
        </div>
        <div className="contact__body">
          {this.props.detailed.phone}
          <br />
          {this.props.detailed.email}
        </div>
        <div className="contact__history">
          <hr />
          {this.props.detailed.history.map((call, index) => {
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
}

ContactView.propTypes = {
  detailed: React.PropTypes.shape({
    id: React.PropTypes.number,
    name: React.PropTypes.string,
    phone: React.PropTypes.string,
    email: React.PropTypes.string,
    history: React.PropTypes.arrayOf(React.PropTypes.object)
  }),
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
