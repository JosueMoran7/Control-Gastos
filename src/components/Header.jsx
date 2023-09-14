import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

function Header({presupuesto, setPresupuesto, isValidPresupuesto, setisValidPresupuesto, gastos, setGastos}) {
  return (
    <header><h1>Planificador de gastos</h1>
    
    {isValidPresupuesto? (
        <ControlPresupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        gastos={gastos}
        setGastos={setGastos}
        setisValidPresupuesto={setisValidPresupuesto}
        
        />
    ): (
        <NuevoPresupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setisValidPresupuesto={setisValidPresupuesto}
        /> 
    )}
    
   
    </header>
        
  )
}

export default Header