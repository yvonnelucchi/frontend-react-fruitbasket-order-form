import React from 'react';
import './App.css';
import { useForm } from "react-hook-form";
import logo from './assets/screenshot-logo.png';



function App() {
    const [counterAardbei, setCounterAardbei] = React.useState(0);
    const [counterBanaan, setCounterBanaan] = React.useState(0);
    const [counterAppels, setCounterAppels] = React.useState(0);
    const [counterKiwis, setCounterKiwis] = React.useState(0);
    const { register, formState: { errors}, handleSubmit, watch } = useForm();
    const onSubmit = data => console.log(data);
    const selectedReferrer = watch('frequentionHolder');


    function resetCounter() {
        setCounterAardbei(0);
        setCounterBanaan(0);
        setCounterAppels(0);
        setCounterKiwis(0);
    }

    return (
        <>
            <img src={logo} alt={"Fruitmand bezorgservice"}/>
            <h1>Fruitmand bezorgservice</h1>
            <div className={"aardbeien"}>
                <h2>🍓 Aardbeien:
                    <button onClick={() => setCounterAardbei(counterAardbei - 1)}>-</button>
                    {counterAardbei}
                    <button onClick={() => setCounterAardbei(counterAardbei + 1)}>+</button>
                    {counterAardbei === -1 && <p>U kunt niet minder dan 0 bestellen</p>}
                </h2>
            </div>

            <div className={"bananen"}>
                <h2>🍌 Bananen:
                    <button onClick={() => setCounterBanaan(counterBanaan - 1)}>-</button>
                    {counterBanaan}
                    <button onClick={() => setCounterBanaan(counterBanaan + 1)}>+</button>
                    {counterBanaan === -1 && <p>U kunt niet minder dan 0 bestellen</p>}
                </h2>
            </div>

            <div className={"appels"}>
                <h2>🍏 Appels:
                    <button onClick={() => setCounterAppels(counterAppels - 1)}>-</button>
                    {counterAppels}
                    <button onClick={() => setCounterAppels(counterAppels + 1)}>+</button>
                    {counterAppels === -1 && <p>U kunt niet minder dan 0 bestellen</p>}
                </h2>
            </div>

            <div className={"Kiwis"}>
                <h2>🥝 Kiwi's:
                    <button onClick={() => setCounterKiwis(counterKiwis - 1)}>-</button>
                    {counterKiwis}
                    <button onClick={() => setCounterKiwis(counterKiwis + 1)}>+</button>
                    {counterKiwis === -1 && <p>U kunt niet minder dan 0 bestellen</p>}
                </h2>
            </div>

            <button onClick={() => resetCounter()}>reset</button>
            <br/>

            {/*contactformulier*/}

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name" id="firstName">Naam</label>
                <br/>
                <input placeholder="Voornaam"
                       {...register("firstName", {required: true})}/>
                        {errors.firstName?.type === 'required' && "Voornaam is verplicht"}

                <br/>

                <label htmlFor="lastName" id="lastNameId">Achternaam</label>
                <br/>
                <input placeholder="Achternaam"
                       {...register("lastName", {required: true})}/>
                       {errors.lastName?.type === 'required' && "Achternaam is verplicht"}

                <br/>

                <label htmlFor="age" id="ageId">Leeftijd</label>
                <br/>
                <input type="number" placeholder="Leeftijd" name="age" id="age"
                       {...register("age", {required: true, min: 18})}/>
                        {errors.age?.type === 'required' && "Leeftijd is verplicht"}

                <br/>

                <label htmlFor="postcode" id="postcode">Postcode</label>
                <br/>
                <input placeholder="Postcode"
                       {...register("postcode", {required: true})}/>
                {errors.postCode?.type === 'required' && "Postcode is verplicht"}

                <br/>

                <label htmlFor="huisnummer" id="huisnummer">Huisnummer(zonder toevoegingen)</label>
                <br/>
                <input placeholder="huisnummer"
                       {...register("huisnummer", {required:true})}/>
                {errors.huisnummer?.type === 'required' && "Huisnummer is verplicht"}

                <br/>

                <div className="frequentionHolder">
                    <h2>Bezorgfrequentie</h2>
                    <label htmlFor="everyWeek" id="everyWeek"><input type="radio" id="everyWeek" value="everyWeek" name="frequention"
                           {...register("frequentionHolder", {required: true})}/>Iedere week
                    </label>

                    <br/>

                    <label htmlFor="everyOtherWeek" id="everyOtherWeek"><input type="radio" id="everyOtherWeek" value="everyOtherWeek" name="frequention"
                           {...register("frequentionHolder", {required: true})}/>Om de week
                    </label>

                    <br/>

                    <label htmlFor="everyMonth" id="everyMonth"><input type="radio" id="everyMonth" value="everyMonth" name="frequention"
                           {...register("frequentionHolder", {required: true})}/>Elke maand
                    </label>

                    <br/>

                    <label htmlFor="other" id="other"><input type="radio" id="other" value="other" name="frequention"
                           {...register("frequentionHolder", {required: true})}/>Anders

                    {selectedReferrer === 'other' && (
                        <input
                            type="text"
                            {...register("andersField", { required: true })}
                        />
                    )}
                    </label>

                </div>
            <br/>

            <label htmlFor="comments"><textarea placeholder="Geef hier uw opmerkingen" name="comments" id="comments" cols="30" rows="10"
                {...register("comments")}/>
            </label>
            <br/>

            <input type="checkbox" name="terms-and-conditions" id="terms-and-conditions"{...register("termsAndConditions", {required: true})}/>
            <label htmlFor="terms-and-conditions" id="termsAndConditions">Ik ga akkoord met de voorwaarden</label>
            <br/>
            {errors.termsAndConditions?.type === 'required' && "Akkoord is verplicht"}
            <br/>

            <input type="submit"/>

        </form>
        </>
    );
}

export default App;