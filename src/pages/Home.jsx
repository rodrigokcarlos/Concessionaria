import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../Header';
import Footer from '../Footer';
import './Corpo.css';
import './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="corpo">
          <div className="corpoMsg">
            <Carousel pause="hover" controls={false}>
              <Carousel.Item interval={1500}>
                <img
                  className='d-block w-100'
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
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
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
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
