import React, { Component } from 'react'
import  {BrowserRouter,Route}   from 'react-router-dom'
import App from '../components/App';

const HomePage =()=> (
    <div>Home page</div>
);
const ProductPage =()=> (
    <div>product page</div>
);

const ContactPage =()=> (
    <div>contact page</div>
);

const routes = (
    <BrowserRouter>
    <Route exact path='/' component={HomePage}></Route>
    <Route path='/contact' component={ContactPage}></Route>
    <Route path='/products' component={ProductPage}></Route>

    </BrowserRouter>
);

export class AppRouter extends Component {
  render() {
    return (
      <div>AppRouter</div>
    )
  }
}

export default AppRouter