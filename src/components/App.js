import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ItemList} />
      <Route path="/items/:id" component={ItemDetail} />
    </Switch>
  );
}

export default App;


