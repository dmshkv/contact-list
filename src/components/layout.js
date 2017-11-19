import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContactList from '../containers/contactList';
import ContactView from '../containers/contactView';

function Layout() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4 col-sm-offset-4">
          <Switch>
            <Route path="/contacts" component={ContactList} />
            <Route path="/contact/:id" component={ContactView} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Layout;

