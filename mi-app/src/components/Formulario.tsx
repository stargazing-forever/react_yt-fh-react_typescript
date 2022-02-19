import React from 'react'
import useForm from '../hooks/useForm'


interface FormData {
    name: string,
    age: number,
    profession: string,
}
const Formulario = () => {

    const {formValues, handleChange} = useForm<FormData>({
        name: '',
        age: NaN,
        profession: ''
    });

    const {name, age, profession} = formValues;
    return (
        <div>
            <form autoComplete='off'>
                <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input 
                        type="text" 
                        className='form-control' 
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className='form-label'>Age</label>
                    <input 
                        type="number" 
                        className='form-control' 
                        name='age'
                        value={age}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className='form-label'>Profession</label>
                    <input 
                        type="text" 
                        className='form-control' 
                        name="profession"
                        value={profession}
                        onChange={handleChange}
                    />
                </div>
            </form>

            <pre className='px-3 py-3' style={{border:"1px solid gray"}}>
                {
                    JSON.stringify(formValues, null, 3)
                }
            </pre>




            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}

export default Formulario
