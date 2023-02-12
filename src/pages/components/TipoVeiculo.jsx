import React from 'react'
import hatch from '../../assets/hatch.svg';
import sedan from '../../assets/sedan.svg';
import suv from '../../assets/suv.svg';

export default function TipoVeiculo() {
  return (
    <div className='tipoForm'>
      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio" value='Hatch' name='tipo' required/>
          <img src={hatch} alt="" />
          <p>Hatch</p>
        </label>
        <label className="radio-container">
          <input type="radio" value='Sedan' name='tipo' required/>
          <img src={sedan} alt="" />
          <p>Sedan</p>
        </label>
        <label className="radio-container">
          <input type="radio" value='SUV' name='tipo' required/>
          <img src={suv} alt="" />
          <p>SUV</p>
        </label>
      </div>
    </div>
  )
}