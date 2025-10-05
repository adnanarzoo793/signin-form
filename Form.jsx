import React, { useState } from 'react'

const Form = () => {
    const [name,setname]=useState();
     const [email,setemail]=useState();
      const [pass,setpass]=useState();
       const [conpass,setcon]=useState();

    const handleSubmit=(event)=>{
        event.preventDefault();
        if(name && email && pass && conpass){
            alert("Sign up successfully submit")
            if(pass===conpass){
                 alert("Sign up successfully submit")
            }else{
                 alert("Password and confrom password must be same")
            }
        }else{
            alert("All Field all mandatory")
        }
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p className='heading'>Sign up</p>
        <div>
            <p className='fieldName'>Name</p>
            <input type="text" onChange={(event)=>setname(event.target.value)}/>
            <p className={name? "data":"nodata"}>{name? "":"Name is required"}</p>
        </div>
        <div>
            <p className='fieldName'>Email</p>
            <input type="email"  onChange={(event)=>setemail(event.target.value)}/>
            <p className={email? "data":"nodata"}>{email? "":"Email is required"}</p>
        </div>
        <div>
            <p className='fieldName'>Password</p>
            <input type="password"  onChange={(event)=>setpass(event.target.value)}/>
            <p className={pass? "data":"nodata"}>{pass? "":"Password is required"}</p>
        </div>
        <div>
            <p className='fieldName'>Confrom Password</p>
            <input type="password"  onChange={(event)=>setcon(event.target.value)}/>
            <p className={conpass? "data":"nodata"}>{conpass? "":"Confrom password is required"}</p>
        </div>
        <div>
            <button>Sign Up</button>
        </div>
      </form>
    </>
  )
}

export default Form
