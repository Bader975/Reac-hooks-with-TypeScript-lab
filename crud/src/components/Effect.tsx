import React from "react";
import axios from 'axios';

function effect() {
    const [data , setData] =React.useState<any[]>([])
    React.useEffect(() => {
   axios.get("https://63e223f43e12b1937638a4ed.mockapi.io/login").then(res=> {
    
   console.log(res.data)
   setData(res.data)
   })
    },[])

    const DeleteItam= (id:any)=>{
        console.log(id);
        axios.delete(`https://63e223f43e12b1937638a4ed.mockapi.io/login/${id}`).then(res=>{
            setData(data.filter((del)=>{
            console.log(res);
            return del.id!=id
    })
      )  })
        
    }
    return (
        <>
   
        {data.map((item:any)=>
          <>
           <ul>
    <p key={item.id}>
        {"مرحبا : "+item.firestName + " " +item.lastName}
    </p>
    <p key={item.id}>
        {"البريد المسجل  :"+" "+ item.email}
    </p>
    <p key={item.id}>
        {"الرقم المسجل : "+ " " + item.number}

    </p>
    <button onClick={()=> {DeleteItam(item.id)}}>Delete</button>
    </ul>
          </>
        )}
        
      </>
    )
  }
  
  export default effect;