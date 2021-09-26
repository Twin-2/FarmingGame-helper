import { useState } from 'react';

function Form(props) {
    const [crop, setCrop] = useState('hay');
    const [acres, setAcres] = useState(0);
    const [roll, setRoll] = useState(0);

    const formSubmit = (e) => {
        e.preventDefault();
        let formData = { crop, acres, roll }
        props.formSubmit(formData)
    }

    return (
        <section>
            <form onSubmit={(e) => formSubmit(e)}>
                <select onChange={(e) => setCrop(e.target.value)}>
                    <option value='hay'>Hay</option>
                    <option value='grain'>Grain</option>
                    <option value='fruit'>Fruit</option>
                    <option value='cows'>Cows</option>
                </select>
                <label >
                    <span>Acres</span>
                    <input onChange={(e) => setAcres(e.target.value)} type='text' name='Acres' placeholder='acres' />
                    <span>Roll</span>
                    <input onChange={(e) => setRoll(e.target.value)} type='number' placeholder='roll' />
                </label>

                <input type='submit' />
            </form>
        </section>
    )

}

export default Form



