import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import './Corpo.css';
import './Contatos.css';

export default class Contatos extends Component {
    render() {
      return (
        <div>
          <Header/>
            <div className="corpo">
              <div className="Contatos">
                  <form>
                      <label>
                          Nome
                          <input />
                      </label>

                      <label>
                          E-mail
                          <input />
                      </label>
                      <label>

                      <label>
                          Telefone
                          <input />
                      </label>

                          Estado
                          <input />
                      </label>

                      <label>
                          Cidade
                          <input />
                      </label>
                  </form>
              </div>
            </div>
          <Footer/>
        </div>
      )
    }
  }