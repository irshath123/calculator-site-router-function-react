import React,{useState} from "react";


export default function PPf(){
    const [investment,setinvestment] = useState('');
    const [time,settime] = useState('');
    const [ratee,setratee] = useState('');
    const [int,setint] = useState('');
    const [amount,setamount] = useState('');

    const interest=ratee/100
    const totalinvestment = investment*time

    function reset(){
        setinvestment('');
        settime('');
        setratee('');
        setint('');
        setamount('');

    }
    function calcu(){
   
    const maturity= investment*(((Math.pow((1+interest),time)-1)/interest)*(1+interest)); 
    setamount(maturity.toFixed(2));
    const totalintrst= maturity-totalinvestment
    setint(totalintrst.toFixed(2));

    }
    
 return(
    <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
        <section style={{width:"500px",height:"450px",border:"none",textAlign:"center",padding:"25px",borderRadius:"50px" ,boxShadow:"2px 2px 20px ",background: "linear-gradient(45deg, #4f1919, #ff3333)"}}>
        <h1 style={{fontSize:"35px"}}>PPF Calculator</h1>
        <div>
        <label  style={{fontSize:"17px",fontWeight:"600"}} for="investment"></label>
        <input style={{width:"350px",height:"30px",borderRadius:"25px",paddingLeft:"15px",marginTop:"10px",marginBottom:"20px",background:"Transparent"}} type="text" id="investment" placeholder="Enter Investment" onChange={(e)=> setinvestment(e.target.value)}/>
        </div>
        <div>
            <label for="time"></label>
            <input style={{width:"350px",height:"30px",borderRadius:"25px",paddingLeft:"15px",marginTop:"10px",marginBottom:"20px",background:"Transparent"}} type="text" id="time" placeholder="Enter Year" onChange={(e)=> settime(e.target.value)}/>
        </div>
        <div>
            <label for="rate"></label>
            <input style={{width:"350px",height:"30px",borderRadius:"25px",paddingLeft:"15px",marginTop:"10px",marginBottom:"20px",background:"Transparent"}} type="text" id="rate" placeholder="Enter Rate" onChange={(e)=> setratee(e.target.value)}/>
        </div>
        <div>
            <button style={{width:"100px",height:"30px",borderRadius:"25px",marginRight:"15px",cursor:"pointer",border:"none"}} onClick={calcu}>Calculate</button>
            <button style={{width:"100px",height:"30px",borderRadius:"25px",marginRight:"15px",cursor:"pointer",border:"none"}} onClick={reset}>Reset</button>
        </div>
        
        </section>
        
        <section style={{width:"500px",height:"450px",border:"none",textAlign:"center",padding:"25px",borderRadius:"70px" ,boxShadow:"2px 2px 20px ",marginLeft:"50px",background:"linear-gradient(45deg, #4f1919, #ff3333)",display:"flex",flexDirection:"column",justifyContent:"center"}}>
            
            <h2>Result</h2>
            <p>Invested Amount</p>
            <p>{investment}</p>
            <p>Interest Earned</p>
            <p>{int}</p>
            <p>Maturity Values</p>
            <p>{amount}</p>
            
        </section>
      
    </div>
 )
}

