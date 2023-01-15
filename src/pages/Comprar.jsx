import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import './Corpo.css';
import './Comprar.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SpeedIcon from '@mui/icons-material/Speed';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="corpo">
          <div className='corpoGrid'>
            <div className="comprarEsq">alo</div>
            <div className="comprarDir">
              <div className="comprarTitulo">Seminovos SUV</div>
              <div className="comprarCarros">
                <div className="cardCarros">
                  <img src='../assets/download.png' alt=""/>
                  <span className="cimaNomeCarro">Renegade</span>
                  <span className="cimaMarcaCarro">Jeep</span>
                  <span className="meioPreco">R$ 88.900,00</span>
                  <span className="meioKm"><SpeedIcon/>&nbsp; 45 Km</span>
                  <span className="meioAno"><CalendarMonthIcon/>&nbsp; 2020</span>
                  <button className="baixoBotao">Comprar</button>
                </div>
              </div>
            </div>
          </div></div>
        <Footer/>
      </div>
    )
  }
}