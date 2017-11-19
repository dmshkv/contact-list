import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { lifecycle } from 'recompose';
import isEqual from 'lodash/isEqual';

import { urlParamsUpdate } from '../actions/routeActions';

export default function urlParamsDispatcher(WrappedComponent) {
  const UrlParamsDispatcher = props => <WrappedComponent {...props} />;
  return compose(
    connect(() => ({}), { urlParamsUpdate }),
    withRouter,
    lifecycle({
      componentWillMount() {
        this.props.urlParamsUpdate(this.props.match.params);
      },
      componentWillReceiveProps(newProps) {
        if (!isEqual(this.props.match.params, newProps.match.params)) {
          this.props.urlParamsUpdate(newProps.match.params);
        }
      }
    })
  )(UrlParamsDispatcher);
}
