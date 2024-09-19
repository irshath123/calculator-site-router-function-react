





import { Routes, Route } from "react-router-dom";
import Home from "./Routerpro/Home";
import Bmical from "./Routerpro/Bmi";
import PPf from "./Routerpro/Ppf";
import Loan from "./Routerpro/Loan";
import SImpleinterest from "./Routerpro/Simplecal";
import Currencyc from "./Routerpro/Currencyconverter";
















function App() {
  return (
    <div className="App">
      <header className="App-header">

        
       <Routes>
         <Route path="/" element={<Home/>} >
        
         <Route path="/bmi" element={<Bmical/>} />
         <Route path="/ppf" element={<PPf/>} />
         <Route path="/loan" element={<Loan/>} />
         <Route path="/simplecal" element={<SImpleinterest/>} />
         <Route path="/currencyconverter" element={<Currencyc/>} />
         </Route>
       </Routes>  


      

    


        
       

 
       

      </header>
    </div>
  );
}

export default App;
