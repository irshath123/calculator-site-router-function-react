import React, {useState} from "react";

export default function Bmical(){
    const [weight, setweight] = useState('');
    const [height, setheight] = useState('');
    const [bmi, setbmi] = useState('');
    const [message, setmessage] = useState('');

      function calculatebmi(){
        if (weight > 0 && height > 0){
            const heightinmeters = height / 100;
            const bmi = (weight / (heightinmeters * heightinmeters));
            setbmi(bmi);
            setmessage(getbmimessage(bmi));
        }
        else{
            setmessage('Please enter the valid weight and height');
        }
      };

      const getbmimessage = (bmi) => {
        if (bmi < 18.5){
            return 'Underweight';
            }
            else if (bmi >= 18.5 && bmi < 25){
                return 'Normal weight';
                }
                else if (bmi >= 25 && bmi < 30){
                    return 'Overweight';
                    }
                    else{
                        return 'Obese';
                        }

      }
      function reset(){
        setweight('');
        setheight('');
        setbmi('');
        setmessage('');
      }
    return(
        <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",}}>
          
            <section style={{width:"500px",height:"450px",border:"none",textAlign:"center",padding:"25px",borderRadius:"50px" ,boxShadow:"2px 2px 20px ",display:"flex",flexDirection:"column",justifyContent:"center",background: "linear-gradient(45deg, #4f1919, #ff3333)"}}>
            <h1>Body Mass Index Calculator</h1>
                <div>
                 <label style={{fontSize:"17px",fontWeight:"600"}}>Weight -Kg:</label>
                 <input style={{width:"350px",height:"30px",borderRadius:"25px",paddingLeft:"15px",marginTop:"10px",marginBottom:"20px",background:"Transparent"}} type="text" value={weight} onChange={(e)=> setweight(e.target.value)}/> 
                </div>
                <div>
                    <label style={{fontSize:"17px",fontWeight:"600"}}>Height -cm:</label>
                    <input style={{width:"350px",height:"30px",borderRadius:"25px",paddingLeft:"15px",marginTop:"10px",marginBottom:"20px",background:"Transparent"}} type="text" value={height} onChange={(e)=> setheight(e.target.value)}/>
                </div>
                <div>
                    <button style={{width:"100px",height:"30px",borderRadius:"25px",marginRight:"15px",cursor:"pointer",border:"none"}} onClick={calculatebmi}>Calculate</button>
                    <button style={{width:"100px",height:"30px",borderRadius:"25px",marginRight:"15px",cursor:"pointer",border:"none"}} onClick={reset}>Reset</button>
                    </div>

            </section>
            <section style={{width:"500px",height:"450px",border:"none",textAlign:"center",padding:"25px",borderRadius:"50px" ,boxShadow:"2px 2px 20px ",marginLeft:"50px",display:"flex",flexDirection:"column",justifyContent:"center",background: "linear-gradient(45deg, #4f1919, #ff3333)"}}>
               <h2>Your BMI: {bmi}</h2> 
                <h2>{message}</h2>
            </section>

        </div>
    );



}