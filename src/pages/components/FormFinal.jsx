import './FormFinal.css';

const returnData = {

}

function FormFinal({data}) {
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
        <h4>preço</h4>
    </div>
  )
}

export default FormFinal