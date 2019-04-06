import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Testing from './components/body/testing';
import Home from './components/body/home';
import AddNote from './components/body/addnotepage';
import EditPage from './components/body/editnotepage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/addnotepage" component={AddNote}/>
          <Route path="/editnotepage/:id" component={EditPage}/>
          <Route path="/testingpage" component={Testing} />
        </Switch>
        
        <Footer />
      </div>
    );
  }
}

export default App;
