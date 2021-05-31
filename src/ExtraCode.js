// // import React, { useState } from "react";
// //
// // function Fruit(props){
// //     const [count, setCount] = useState(0);
// //
// //
// // function increaseNumber(){
// //     setCount(count + 1)
// // }
// //
// // function decreaseNumber(){
// //     setCount(count -1)
// // }
// // // Dit kan ervoor zorgen dat je niet minder dan 0 kan bestellen.
// // // function increment(){
// // //     if(count === -1) {
// // //         setCount(count + 1);
// // //     }
// // // }
// //
// //
// //     return(
// //         <section id="props.fruitName">
// //             <label>{props.fruitImg}{props.fruitName}
// //             <button id="minus" onClick={decreaseNumber}>-</button>
// //             <span>{count}</span>
// //             <button id="plus" onClick={increaseNumber}>+</button>
// //             {count === -1 && <p>U kunt niet minder dan 0 bestellen</p>}
// //             </label>
// //         </section>
// //
// // )
// // }
// //
// // export default Fruit;
//
//
//
// // import React from "react";
// // import {useForm} from "react-hook-form";
// // import logo from "./assets/screenshot-logo.png";
// //
// // function App() {
// //     const [counterAardbei, setCounterAardbei] = React.useState(0);
// //     const [counterBanaan, setCounterBanaan] = React.useState(0);
// //     const [counterAppels, setCounterAppels] = React.useState(0);
// //     const [counterKiwis, setCounterKiwis] = React.useState(0);
// //     const {handleSubmit} = useForm();
// //     const onSubmit = data => console.log(data);
// //
// //
// //     function resetCounter() {
// //         setCounterAardbei(0);
// //         setCounterBanaan(0);
// //         setCounterAppels(0);
// //         setCounterKiwis(0);
// //     }
// //
// //     return (
// //         <>
// //             <img src={logo} alt={"Fruitmand bezorgservice"}/>
// //             {/*<h1>Fruitmand bezorgservice</h1>*/}
// //             <div className={"aardbeien"}>
// //                 <h2>🍓 Aardbeien:
// //                     <button onClick={() => setCounterAardbei(counterAardbei - 1)}>-</button>
// //                     {counterAardbei}
// //                     <button onClick={() => setCounterAardbei(counterAardbei + 1)}>+</button>
// //                 </h2>
// //             </div>
// //
// //             <div className={"bananen"}>
// //                 <h2>🍌 Bananen:
// //                     <button onClick={() => setCounterBanaan(counterBanaan - 1)}>-</button>
// //                     {counterBanaan}
// //                     <button onClick={() => setCounterBanaan(counterBanaan + 1)}>+</button>
// //                 </h2>
// //             </div>
// //
// //             <div className={"appels"}>
// //                 <h2>🍏 Appels:
// //                     <button onClick={() => setCounterAppels(counterAppels - 1)}>-</button>
// //                     {counterAppels}
// //                     <button onClick={() => setCounterAppels(counterAppels + 1)}>+</button>
// //                 </h2>
// //             </div>
// //
// //             <div className={"Kiwis"}>
// //                 <h2>🥝 Kiwi's:
// //                     <button onClick={() => setCounterKiwis(counterKiwis - 1)}>-</button>
// //                     {counterKiwis}
// //                     <button onClick={() => setCounterKiwis(counterKiwis + 1)}>+</button>
// //                 </h2>
// //             </div>
// //
// //             <button onClick={() => resetCounter()}>reset</button>
// //         </>
// //     );
// // }
//
//
//
//
//
// import React from "react";
//
// // <br/>
// //
// // <form>
// //     <label htmlFor="name">Naam</label>
// //     <input id="name" name="name" type="text"/>
// //     <br/>
// //
// //     <label htmlFor="Achternaam">Achternaam</label>
// //     <input id="lastname" name="lastname" type="text"/>
// //     <br/>
// //
// //     <label htmlFor="Leeftijd">Leeftijd</label>
// //     <input id="age" name="age" type="text"/>
// //     <br/>
// //
// //     <label htmlFor="Postcode">Postcode</label>
// //     <input id="postalcode" name="postalcode" type="text"/>
// //
// //
// //
// //     <div className="frequentionHolder">
// //         <h2>Bezorgfrequentie</h2>
// //         <label htmlFor="everyWeek">
// //             <input type="radio" id="everyWeek" name="frequention"/> Iedere week
// //         </label>
// //         <br/>
// //         <label htmlFor="everyOtherWeek">
// //             <input type="radio" id="everyOtherWeek" name="frequention"/> Om de week
// //         </label>
// //         <br/>
// //         <label htmlFor="everyMonth">
// //             <input type="radio" id="everyMonth" name="frequention"/> Iedere maand
// //         </label>
// //         <br/>
// //         <label htmlFor="other">
// //             <input type="radio" id="other" name="frequention"/> Anders
// //         </label>
// //     </div>
// //     <br/>
// //
// //     <label htmlFor="comments">Opmerkingen
// //         <br/>
// //         <textarea name="comments" id="comments" cols="30" rows="10">
// //                 </textarea>
// //     </label>
// //     <br/>
// //
// //     <label htmlFor="terms-and-conditions">
// //         <input
// //             type="checkbox"
// //             name="terms-and-conditions"
// //             id="terms-and-conditions"
// //
// //         />Ik ga akkoord met deze voorwaarden
// //     </label>
// //     <br/>
// //
// //     <input type="submit"/>
// // </form>
// // </>


// {/*<select {...register("gender")}>*/}
// {/*    <option value="female">female</option>*/}
// {/*    <option value="male">male</option>*/}
// {/*    <option value="other">other</option>*/}
// {/*</select>*/}
//
// {/*<label htmlFor="name">Naam</label>*/}
// {/*<input id="name" name="name" type="text"/>*/}
// <br/>
// {/*<label htmlFor="Achternaam">Achternaam</label>*/}
// {/*<input id="lastname" name="lastname" type="text"/>*/}

// <label htmlFor="Leeftijd">Leeftijd</label>
// <input id="age" name="age" type="text"/>