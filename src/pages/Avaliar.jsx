import React, { Component } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import './Corpo.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="corpo">
          <div className="cardAvaliar">
            <form action="" className="avaliar"></form>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}