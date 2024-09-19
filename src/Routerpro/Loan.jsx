import React, {useState} from "react";


export default function Loan(){
 const [lamount, setlamount] = useState('');
 const [rate, setrate] = useState('');
 const [monthpay, setmonth] = useState('');
 const [total, settotal] = useState('');

 function reset(){
    setlamount('');
    setrate('');
    setmonth('');
    settotal('');
 }
 function loan(){
    const loans=(lamount / monthpay + rate)
    settotal(loans)
    

 }

 return(
    <div style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"}}>
        <section style={{width:"500px",height:"450px",border:"none",textAlign:"center",padding:"25px",borderRadius:"35px" ,boxShadow:"2px 2px 20px ",background:"linear-gradient(45deg, #4f1919, #ff3333)"}}>
            <h1 style={{fontSize:"35px"}}>Loan Calculator</h1>
            <div>
                <label  style={{fontSize:"17px",fontWeight:"600"}}>Loan Amount</label><br/>
                <input style={{width:"350px",height:"30px",borderRadius:"25px",paddingLeft:"15px",marginTop:"10px",marginBottom:"20px",background:"Transparent"}} type="text" value={lamount} onChange={(e) => setlamount(e.target.value)}/>
            </div>
            <div>
                <label>Interest Rate</label><br/>
                <input style={{width:"350px",height:"30px",borderRadius:"25px",paddingLeft:"15px",marginTop:"10px",marginBottom:"20px",background:"Transparent"}} type="text" value={rate} onChange={(e) => setrate(e.target.value)}/>
            </div>
            <div>
                <label>Number of Months</label><br/>
                <input style={{width:"350px",height:"30px",borderRadius:"25px",paddingLeft:"15px",marginTop:"10px",marginBottom:"20px",background:"Transparent"}} type="text" value={monthpay} onChange={(e) => setmonth(e.target.value)}/>
            </div>
            <div>
                <button style={{width:"100px",height:"30px",borderRadius:"25px",marginRight:"15px",cursor:"pointer",border:"none"}} onClick={loan}>Calculate</button>
                <button style={{width:"100px",height:"30px",borderRadius:"25px",marginRight:"15px",cursor:"pointer",border:"none"}} onClick={reset}>Reset</button>
            </div>
            <p>EMI:<br/>{total}</p>
        </section>
    </div>


 )

}