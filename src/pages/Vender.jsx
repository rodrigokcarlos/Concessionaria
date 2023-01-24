import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import './Corpo.css';
import { Link } from "react-router-dom";
import {FiSend} from 'react-icons/fi';
import { GrFormNext, GrFormPrevious} from 'react-icons/gr';
import PessoalForm from './components/PessoalForm';
import VeiculoForm from './components/VeiculoForm';

//hooks
import { useForm } from './hooks/useForm';

export default function Home() {

  const formComponents = [ <PessoalForm/>, <VeiculoForm/>];

  const {currentStep, currentComponent, changeStep, isLastStep, firstStep} = useForm(formComponents);

    return (
      <div className='divisao'>
        <Header/>
        <div className="corpo">
          <div className="form-container">
            <h2>

            Para vender seu carro nossos parceiros precisam avaliá-lo primeiro!
            </h2>
            <p>
            Como realizar a avaliação:
            Informar dados para contato
            Informar dados do veículo
            Enviar Algumas Fotos do seu carro
            </p>

            <Link to="/avaliar"><button>Avaliar</button></Link>
            <p>etapas</p>
            <form onSubmit={(e) => changeStep(currentStep +1, e)}>
              <div className="inputs-container">{currentComponent}</div>
              <div className="actions">
                {!firstStep && (
                  <button type="button" onClick={() => changeStep(currentStep -1)}>
                    <GrFormPrevious/>
                    <span>Voltar</span>
                  </button>)}
                {!isLastStep ? (
                  <button type='submit'>
                    <span>Avançar</span>
                    <GrFormNext/>
                  </button>
                ):(
                  <button type='submit'>
                    <span>Enviar</span>
                    <FiSend/>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
        <Footer/>
      </div>
    )
}