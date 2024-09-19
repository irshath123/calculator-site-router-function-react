import React, {useState} from "react";
import './Cur.css';

export default function Currencyc(){

    const exchangeRates ={
        USD:1.0,
        EUR:0.92,
        GBP:0.77,
        CAD:1.37,
        JPY:156.71,
        AUD:1.50,
        IND:83.67,
        MYR:4.68,
        
    }
    const [amount, setAmount] = useState(0);
    const [currency1, setCurrency1] = useState("USD");
    const [currency2, setCurrency2] = useState("EUR");
    const [convert,setconvert] = useState(0);

    const convertCurrency = () => {
        const rate = exchangeRates[currency2] / exchangeRates[currency1];
        setconvert(rate * amount);

    };

    const reset = () =>{
        setAmount(0);
        setconvert(0)
    
    }
   
   


    return(
        <div className="irs">
            
            <div className="container">
            <h1>Convert Currency</h1>
                <input type="text" value={amount} placeholder="Enter Currency Value" onChange={ (e) => setAmount(e.target.value)}/>
                <select value={currency1} onChange={ (e) => setCurrency1(e.target.value)}>
                   {Object.keys(exchangeRates).map((currency) => (
                    <option key={currency} value={currency}>{currency}</option>
                    
                   ))}
                </select>
                <span> to </span>
                <select value={currency2} onChange={(e) => setCurrency2(e.target.value)}>
                    {Object.keys(exchangeRates).map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                        ))}
                        </select>
                        <button onClick={convertCurrency}>Convert</button>
                        <button onClick={reset}>Reset</button>
            </div>
            
            <div className="irs2">convert amount: {convert.toFixed(2)} {currency2} </div>
        </div>
    );

};