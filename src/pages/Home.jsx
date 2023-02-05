import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from './components/Header';
import Footer from './components/Footer';
import './Corpo.css';
import './Home.css';
import fotinha from '../assets/ccce.jpg';
import fotinha2 from '../assets/foto2.jpeg';



export default class Home extends Component {
  render() {
    return (
      <div className='divisao'>
        <Header/>
        <div className="corpo">
          <div className="corpoMsg">
            <Carousel pause="hover" controls={false}>
              <Carousel.Item interval={1500}>
                <img
                  className='d-block w-100'
                  src={fotinha}
                  alt="Image One"
                  />
                  <Carousel.Caption>
                    <p>Carros</p>
                    <p>Seminovos a um clique!</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img
                  className='d-block w-100'
                  src={fotinha2}
                  alt="Image Two"
                  />
                <Carousel.Caption>
                  <p>Avaliamos seu Carro</p>
                  <p>sem sair de casa!</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
