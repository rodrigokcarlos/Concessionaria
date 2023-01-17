import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import './Corpo.css';
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="corpo">
          <div className="vender">
            Para vender seu carro nossos parceiros precisam avaliá-lo primeiro!
            Como realizar a avaliação:
            Informar dados para contato
            Informar dados do veículo
            Enviar Algumas Fotos do seu carro

            Seu carro será avaliado dentro de até 3 dias e você receberá o contato de um Consultor.

            <Link to="/avaliar"><button>Avaliar</button></Link>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}