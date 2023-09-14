import {useState, useEffect} from 'react'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css";

function ControlPresupuesto({gastos, setGastos, presupuesto, setPresupuesto, setisValidPresupuesto}) {

    const [porsentaje, setPorsentaje] = useState(0)
    const [disponible, setDisponioble] = useState(0)
    const [gastodo, setGastado] = useState(0)

useEffect( () => {
    const totalGastodo = gastos.reduce((total, gasto) => gasto.cantidad+ total, 0)
    const totalDisponible = presupuesto - totalGastodo;

    const nuevoPorsentaje = (((presupuesto - totalDisponible)/ presupuesto * 100).toFixed(2))
    
    setDisponioble(totalDisponible)
    setGastado(totalGastodo)

    setTimeout(() => {
    setPorsentaje(nuevoPorsentaje)
    }, 1000)
}, [gastos]) 


    const formatearCantidad = (cantidad) =>  {
        return cantidad.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD'
        })
    }

    function determinarColorPorcentaje(porcentaje) {
        if (porcentaje > 90) return 'red';
        if (porcentaje > 70) return 'orange';
        if (porcentaje < 0) return 'orange';
        return "#3B82F6";
    }

    const handleResetApp = () =>{
        const resultado = confirm('¿Desea resetear la app?')
        if (resultado){
        setGastos([])
        setPresupuesto(0)
        setisValidPresupuesto(false)
        }
    }


  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>

        <div>
            <CircularProgressbar

                styles={buildStyles({
                    pathColor: determinarColorPorcentaje(porsentaje),
                    trailColor: '#F5F5F5',
                    textColor: determinarColorPorcentaje(porsentaje)

                })}

                value={porsentaje}
                text={`${porsentaje}% Gastado`}
            />

    
        </div>

        <div className='contenido-presupuesto'>
            <button className='reset-app' type='button' onClick={handleResetApp}>
                Resetear app
            </button>
            <p>
                <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
            </p>

            <p className={`${disponible < 0 ? 'negativo': ''}`}>
                <span >Disponible: </span> {formatearCantidad(disponible)}
            </p>

            <p>
                <span>Gastado: </span> {formatearCantidad(gastodo)}
            </p>
        </div>

    </div>
  )
}

export default ControlPresupuesto