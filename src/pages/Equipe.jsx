import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import './Corpo.css';
import './Contatos.css';
import './Equipe.css';
import Rod from '../assets/rod.jpeg';
import Lud from '../assets/lu.jpeg';
import Wes from '../assets/Wes.jpg';

export default class Equipe extends Component {
    render() {
      return (
        <div className='divisao'>
          <Header/>
            <div className="corpo">
              <div className="corpo-card">
                <div className="card">
                    <img className='fotos' src={Rod} alt="Avatar"/>
                    <div className="container"></div>
                    <h4><b>Rodrigo Carlos</b></h4> 
                    <p>Co-facilitador</p> 
                </div>
                  <div className="card"> 
                      <img className='fotos' src={Lud} alt="Avatar"/>
                      <div className="container"></div>
                      <h4><b>Luis Roberto</b></h4> 
                      <p>Colaborador</p> 
                  </div>
                  <div className="card"> 
                      <img className='fotos' src={Wes} alt="Avatar"/>
                      <div className="container"></div>
                      <h4><b>Wesley da Silva</b></h4> 
                      <p>Gestor de Conhecimento</p> 
                  </div>
                </div>
            </div>
        
          <Footer/>
        </div>
        )
    }
}