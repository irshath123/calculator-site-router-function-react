import React from "react";
import { Outlet,Link } from "react-router-dom";
import './Style.css';


export default function Home(){
    return(
        <div>
            
            <ul>
                <li><Link to="/Bmi">BMI Calculator</Link></li>
                <li><Link to="/Loan">Loan Calculator</Link></li>
                <li><Link to="/Ppf">PPF Calculator</Link></li>
                <li><Link to="/Simplecal">Simple Calculator</Link></li>
                <li><Link to="/Currencyconverter">Currency Converter</Link></li>
                </ul>
                <h1 className="cal">Calculators</h1>
                <Outlet/>
        </div>
    )
}