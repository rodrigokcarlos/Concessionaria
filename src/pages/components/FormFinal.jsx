import './FormFinal.css';
import React, { Component, useEffect} from 'react'

const returnData = {

}

function FormFinal({data}) {
    let tabelaFipe = 0;
    function precoCarro() {
        const vendeHatch = 80000;
        const vendeSedan = 100000;
        const vendeSUV = 120000;
        const kmCarro = data.km;
        const anoCarro = data.ano;
        const anoAtual = 2023;
    
        const calculaAno = anoAtual - anoCarro;
        const precoAno = calculaAno * 1000;
        

        if(data.tipo === 'Hatch'){
            tabelaFipe = vendeHatch - kmCarro - precoAno;
        }
        if(data.tipo === 'Sedan'){
            tabelaFipe = vendeSedan - kmCarro - precoAno;
        }
        if(data.tipo === 'SUV'){
            tabelaFipe = vendeSUV - kmCarro - precoAno;
        }
    
      }

      useEffect(() =>{
        precoCarro();
      }, []);
  return (
    <div className='final-container'>
        <h2>{data.name}, Falta pouco...</h2>
        <p>Para concluir a venda de seu veículo clique no botão de Vender abaixo.</p>
        <p className='review-data'>
            <span>Marca: {data.marca}</span>
        </p>
        <p className='review-data'>
            <span>Modelo: {data.modelo}</span>
        </p>
        <p className='review-data'>
            <span>ano: {data.ano}</span>
        </p>
        <p className='review-data'>
            <span>Km: {data.km}</span>
        </p>
        <h3>Seu veículo está avaliado em:</h3>
        <h4>{tabelaFipe}</h4>
    </div>
  )
}

export default FormFinal