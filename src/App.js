import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0
  }
  setProgress = (progress) =>{
    this.setState({progress: progress})
  }
  render() {
   return (
      <Router>
      <NavBar title = "NewsMonkey"/>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      /> 
      <Switch>
          <Route exact path="/">
           <News setProgress = {this.setProgress} apiKey={this.apiKey} key="general"   country="in" category="general" />
          </Route>
          <Route exact path="/business">
           <News setProgress = {this.setProgress} apiKey={this.apiKey} key="business"   country="in" category="business" newstitle="Business"/>
          </Route>
          <Route exact path="/entertainment">
           <News setProgress = {this.setProgress} apiKey={this.apiKey} key="entertainment"  country="in" category="entertainment" newstitle="Entertainment"/>
          </Route>
          <Route exact path="/sports">
           <News setProgress = {this.setProgress} apiKey={this.apiKey} key="sports"   country="in" category="sports" newstitle="Sports"/>
          </Route>
          <Route exact path="/technology">
           <News setProgress = {this.setProgress} apiKey={this.apiKey} key="technology"   country="in" category="technology" newstitle="Technology"/>
          </Route>
          <Route exact path="/science">
           <News setProgress = {this.setProgress} apiKey={this.apiKey} key="science"   country="in" category="science" newstitle="Science"/>
          </Route>
          <Route exact path="/health">
           <News setProgress = {this.setProgress} apiKey={this.apiKey} key="health"   country="in" category="health" newstitle="Health"/>
          </Route>
        </Switch>
      
      </Router>
    )
  }
}

