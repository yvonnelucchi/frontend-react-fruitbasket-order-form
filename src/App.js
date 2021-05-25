import React from 'react';
import './App.css';
import { useState } from 'react';
// import { useForm } from 'react-hook-form';


function App() {
    const [formName, setFormName] = useState('');
    const [formAge, setFormAge] = useState('');
    const [formReferrer, setFormReferrer] = useState('anders');
    const [formComments, setFormComments] = useState('');
    const [checkedTerms, toggleCheckedTerms] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formComments, formReferrer, formAge, formName);
    }
    function sendForm() {
        console.log(`Het bericht: "${formComments}" is succesvol verzonden.`);
        setSubmitted(true);
    }

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>








        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Gegevens</legend>

                <label htmlFor="details-name">
                    Voornaam
                    <input
                        type="text"
                        name="name"
                        id="details-name"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                    />
                </label>
                <p> </p>
                <label htmlFor="details-age">
                    Leeftijd
                    <input
                        type="number"
                        name="age"
                        id="details-age"
                        value={formAge}
                        onChange={(e) => setFormAge(parseInt(e.target.value))}
                    />
                </label>
                <p> </p>
                <label htmlFor="referrer">
                    Bezorgfrequentie
                    {/*<select*/}
                    {/*    // name="found-trough"*/}
                    {/*    // id="referrer"*/}
                    {/*    // value={formReferrer}*/}
                    {/*    // onChange={(e) => setFormReferrer(e.target.value)}*/}
                    {/*>*/}
                        <option value="iedereWeek">Iedere week</option>
                        <option value="omDeWeek">Om de week</option>
                        <option value="IedereMaand">Iedere maand</option>
                        <option value="anders">Anders</option>
                    {/*</select>*/}
                </label>

                <label htmlFor="recipe-comments">
                    <p>Opmerkingen</p>
                    <textarea
                        name="comments"
                        id="recipe-comments"
                        rows="4"
                        cols="40"
                        className={formComments.length > 100 ? 'input-error' : ''}
                        value={formComments}
                        onChange={(e) => setFormComments(e.target.value)}
                    >
                    </textarea>
                    {formComments.length > 20 && <p className="error-message">Dit bericht is te lang!</p>}
                </label>
                <label htmlFor="terms-and-conditions">
                    <input
                        type="checkbox"
                        name="terms-and-conditions"
                        id="terms-and-conditions"
                        checked={checkedTerms}
                        onChange={() => toggleCheckedTerms(!checkedTerms)}
                    />
                    ik ga akkoord met de algemene voorwaarden
                </label>
                <p> </p>

                <button
                    type="submit"
                    disabled={!checkedTerms}
                    onClick={sendForm}
                    >
                    Verzend
                </button>
            </fieldset>
        </form>


    </>
  );
}

export default App;
