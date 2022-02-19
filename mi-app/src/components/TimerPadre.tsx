import React, { useState } from 'react'
import Timer from './Timer';

const TimerPadre = () => {

    const [milisegundos, setMilisegundos] = useState<number>(1000);

    return (
        <div className='mb-3'>
            <h3>Timer Padre</h3>
            <p>milisegundos asignado: {milisegundos}</p>
            <button 
                type="button" 
                className="btn btn-outline-primary me-3"
                onClick={() => setMilisegundos(1000)}
            >
                1000
            </button>
            <button 
                type="button" 
                className="btn btn-outline-primary"
                onClick={()=> setMilisegundos(2000)}
            >
                2000
            </button>
            <Timer milisegundos={milisegundos} />
        </div>
    )
}

export default TimerPadre
