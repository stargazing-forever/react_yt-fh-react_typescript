import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleCount = (number: number = 1): void => {
        setCounter(counter + number);
    }
    return (
        <div className='mb-5'>
            <h3>Counter</h3>
            <p>count: { counter}</p>
            <button
                type="button"
                className='btn btn-outline-primary'
                onClick={() => handleCount()}
            >
                +1
            </button>

            <button
                type="button"
                className='btn btn-outline-danger'
                onClick={() => setCounter(0)}
            >
                reset
            </button>

            <button
                type="button"
                className='btn btn-outline-primary'
                onClick={() => handleCount(-1)}
            >
                -1
            </button>

        </div>
    )
}

export default Counter
