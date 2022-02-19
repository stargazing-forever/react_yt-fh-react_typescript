
import React, { useEffect, useRef, useState } from 'react'

type TimerArgs = {
    milisegundos: number
}
const Timer = ({milisegundos }:TimerArgs) => {

    const [timer, setTimer] = useState<number>(0);

    const ref = useRef<NodeJS.Timer>();

    useEffect(() => {

        ref.current && clearInterval(ref.current)

        ref.current = setInterval(()=>{
            setTimer( t => t + 1)
        },milisegundos)
        
    }, [milisegundos])

    const stop = (): void => {
        if(ref.current){
            clearInterval(ref.current);
        }
    }

    return (
        <div className=" mt-3">
            <h3>timer: {timer}</h3>
            <button
                type="button"
                className='btn btn-outline-secondary'
                onClick={ stop }
            >pause/resume</button>
        </div>
    )
}

export default Timer
