import React from 'react';
import Counter from './components/Counter';
import Formulario from './components/Formulario';
import TimerPadre from './components/TimerPadre';
import Usuario from './components/Usuario';


function App() {
  return (
    <>
      <h1 className='text-info'>React + Typescript!</h1>
      <hr />

      <h2 className='text-success'>useState</h2>
      <Counter />
      <Usuario />
      <hr />

      <h2 className='text-success'>useEffect + useRef</h2>
      <TimerPadre />
      <hr />
      <h2 className='text-success'>CustomHook</h2>
      <Formulario />

      
    </>
  );
}

export default App;
