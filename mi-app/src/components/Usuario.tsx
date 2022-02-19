import React, { useState } from 'react'

interface User {
    uid?: number,
    name?: string,
}

const Usuario = () => {

    const [user, setUser] = useState<User>({});

    const login = (): void => {
        setUser({
            uid: 24,
            name: 'Huder'
        })
    }

    const user2: User = {
        uid: 34,
        name: 'Jael'
    }


    return (
        <div>
            <h3>Usuario</h3>
            <button
                onClick={login}
                className='btn btn-outline-primary'
            >
                Login
            </button>
            <button
                type='button'
                onClick={() => setUser({})}
                className=' ms-3 btn btn-outline-warning'
            >Clear</button>
        <pre>
            {
                Object.keys((user)).length ? 
                JSON.stringify(user,null,3) :
                'No existe usuario'
            }
        </pre>
        </div>

    )
}

export default Usuario
