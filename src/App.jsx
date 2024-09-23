
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

   const[Principle , setprinciple]= useState("")
   const[rate , setrate]=useState("")
   const[year , setyear]=useState("")
   const[interest , setinterest]=useState(0)
   const[isprinciple , setisprinciple]=useState(true)
   const[israte , setisrate]=useState(true)
   const[isyear , setisyear]=useState(true)


   

   const validate=(e)=>{
       console.log(e.target.name);
       console.log(e.target.value);

       
       console.log(e.target.value.match('^[0-9]*$'));

       if(!!e.target.value.match('^[0-9]*$')){

        if(e.target.name=='principle'){

          setprinciple(e.target.value)
          setisprinciple(true)
        }
        else if(e.target.name=='rate'){

          setrate(e.target.value)
          setisrate(true)

        }
        else{

          setyear(e.target.value)
          setisyear(true)
        }




       }
       else{

        if(e.target.name=='principle'){

          setprinciple(e.target.value)
          setisprinciple(false)
        }
        else if(e.target.name=='rate'){

          setrate(e.target.value)
          setisrate(false)

        }
        else{

          setyear(e.target.value)
          setisyear(false)
        }

       }


       
   }

   const resethandle = ()=>{
    console.log("inside the function");
    
    setprinciple("")
    setrate("")
    setyear("")
    setisprinciple(true)
    setisrate(true)
    setisyear(true)
   }

   const Calcul=()=>{
    setinterest((Principle*rate*year)/100)
   }


  return (
    <>
    <div style={{height:'100vh'}} className='bg-dark w-100 d-flex justify-content-center align-items-center'>
      <div style={{width:'500px'}} className='p-5 bg-light rounded'>
      <h1>Simple Interest App</h1>
      <p>Calculate your interest easily</p>
      <div style={{height:'150px'}} className='bg-warning rounded d-flex justify-content-center align-items-center flex-column'>
        <h1>₹{interest}</h1>
        <p>Total Simple Interest</p>
      </div>
      <div>
        <div className="my-3"><TextField name='principle' value={Principle} onChange={(e)=>validate(e)} id="outlined-basic" label="₹ Principle amount" variant="outlined" className='w-100' />
        {!isprinciple &&   <span className='text-danger'>invalid input</span> }
        
        </div>
        <div className="mb-3"><TextField name='rate' value={rate} onChange={(e)=>validate(e)} id="outlined-basic" label="Rate of interest (p.a)%" variant="outlined" className='w-100'/>
        {!israte &&   <span className='text-danger'>invalid input</span> }

        </div>
        <div className="mb-3"><TextField name='year' value={year} onChange={(e)=>validate(e)}  id="outlined-basic" label="Year (yr)" variant="outlined" className='w-100'/>
        {!isyear &&   <span className='text-danger'>invalid input</span> }


        </div>
        
        </div>
        <div className='mb-3 d-flex justify-content-between'> 
          <Button style={{width:'190px', height:'60px'}} onClick={Calcul} variant="contained" color='success' disabled={isprinciple && israte && isyear ? false : true}>Calculate</Button>
        <Button style={{width:'190px', height:'60px'}}   variant="outlined" onClick={resethandle}>Reset</Button>
        </div>
       
      </div>
     
     </div>
    </>
  )
}

export default App
