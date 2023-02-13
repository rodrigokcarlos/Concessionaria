import React, { Component } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import './Corpo.css';
import {FiSend} from 'react-icons/fi';
import { GrFormNext, GrFormPrevious} from 'react-icons/gr';
import PessoalForm from './components/PessoalForm';
import VeiculoForm from './components/VeiculoForm';
import FormForm from './components/FormForm';
import TipoVeiculo from './components/TipoVeiculo';
import Steps from './components/Steps';
import FormFinal from './components/FormFinal';
import './Vender.css';
import './components/Form.css';

//hooks
import { useForm } from './hooks/useForm';
import { useState } from 'react';

const formTemplate = {
  name: '',
  email: '',
  tipo: '',
  marca: '',
  modelo: '',
  ano: '',
  km: '',
  cor: '',
  foto: '',
};

export default function Home() {

  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return {...prev, [key]: value};
    })
  }

  const formComponents = [ 
  <FormForm data={data} />, 
  <PessoalForm data={data} updateFieldHandler={updateFieldHandler} />, 
  <TipoVeiculo data={data} updateFieldHandler={updateFieldHandler} />, 
  <VeiculoForm data={data} updateFieldHandler={updateFieldHandler} />, 
  <FormFinal data={data} />
  ];

  const {currentStep, currentComponent, changeStep, isLastStep, firstStep} = useForm(formComponents);

    return (
      <div className='divisao'>
        <Header/>
        <div className="corpo">
          <div className="form-container">
            <Steps currentStep={currentStep} />
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
                    <span>Vender</span>
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