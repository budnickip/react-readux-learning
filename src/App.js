/* eslint-disable no-lone-blocks */
import React from 'react';
import './App.css';
import MoviesContainer from './app/movies/components/MoviesContainer'
import MoviesForm from './app/movies/components/MoviesForm'

/* import { createStore, bindActionCreators } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import { movieActions } from './app/movies/duck'
import { actorActions } from './app/actors/duck'


const store = createStore(rootReducer, composeWithDevTools())
window.store = store

store.dispatch(actorActions.add('Franek Kimono'))
store.dispatch(actorActions.update(0, 'Patryk Budnicki'))

const actorsActions = bindActionCreators({addActor, deleteActor, updateActor, resetActor}, store.dispatch)

actorsActions.addActor('Katarzyna Mazurek')  */

function App() {
  return (
    <div className="App">
      <MoviesContainer />
      <MoviesForm />
    </div>
  );
}

export default App;
