import {useState, useEffect} from 'react'

function Filtros({filtro, setFiltro}) {
  return (
    <div className='filtros sombra contenedor'>
        <form action="">
            <div className='campo'>
                <label>Filtrar gastos</label>
                <select value={filtro} onChange={e => setFiltro(e.target.value) }>
                        <option value="">--Todas las Categoterias--</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">comida</option>
                        <option value="casa">casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filtros