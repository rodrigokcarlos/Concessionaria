import React from 'react';
import './Form.css'

const PessoalForm = () => {
  return (
    <div>
        <div className="form-control">
          <label htmlFor="name">Nome:</label>
          <input 
          type="text" 
          name='text'
          id='name'
          placeholder='Digite o seu nome'
          required
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail:</label>
          <input 
          type="email" 
          name='email'
          id='email'
          placeholder='Digite o seu e-mail'
          required
          />
        </div>
    </div>
  )
}

export default PessoalForm