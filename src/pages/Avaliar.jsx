import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import './Corpo.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="corpo"> Avaliar</div>
        <Footer/>
      </div>
    )
  }
}