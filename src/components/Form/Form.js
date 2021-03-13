import React, {useState} from 'react'

const Form = ({getCityName}) => {

    const [name, setName] = useState("")

    const handleChange = (event) =>{
        let value = event.target.value;
        setName(value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        getCityName(name);
    }

    return (
        <div className="form__container">
            <form onSubmit={handleSubmit}>
                <div className="form__group">
                    <input 
                        name="city" 
                        type="text" 
                        placeholder='Enter a city'
                        value={name}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    <button type="submit"><i className="fas fa-search" /></button>
                </div>
            </form>
        </div>
    )
}

export default Form
