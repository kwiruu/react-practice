import { useState, useEffect } from 'react';

export const ControlledForm = () => {
    const [nameInputError, setNameInputError] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [hairColor, setHairColor] = useState('');

    useEffect(() => {
        if(name.length < 2){
            setNameInputError('Name must be at least 2 characters long');
        }else{
            setNameInputError('Valid');
        }
    }, [name, age, hairColor]);

    return(
        <form>
            <p>{nameInputError}</p>
            <input 
            name="name" 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            />

            <input
            name="age"
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            />

            <input
            name="hairColor"
            type="text"
            placeholder="Hair Color"
            value={hairColor}
            onChange={(e) => setHairColor(e.target.value)}
            />

            <button>Submit</button>
        </form>
    )
}   