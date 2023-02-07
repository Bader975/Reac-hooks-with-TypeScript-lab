import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Effect from './Effect'

function Post() {
    const [firestName , setFirestName] = React.useState("")
    const [lastName , setLastName] = React.useState("")
    const [email , setEmail] = React.useState("")
    const [number, setNumber] = React.useState<any>()
const api = "https://63e223f43e12b1937638a4ed.mockapi.io/login"

const navigate = useNavigate()
const PostData = ()=>{
    if(firestName.length >=3 &&lastName.length>=3 ){
        axios.post(api,{
            firestName,
            lastName,
            email,
            number
        })
        axios.get("https://63e223f43e12b1937638a4ed.mockapi.io/login")
        navigate("/show")
    }else{
        alert("Please write correct information")
    }

}
  return (
    <div className="login">
        <h1> بيانات التواصل</h1>
        <input placeholder='الاسم الاول' onChange={e =>{setFirestName(e.target.value)}}></input>
        <input placeholder=' اسم العائلة' onChange={e =>{setLastName(e.target.value)}}></input>
        <input placeholder=' البريد الاكتروني' onChange={e =>{setEmail(e.target.value)}}></input>
        <input placeholder='رقم التواصل' onChange={e =>{setNumber(e.target.value)}}></input>
        <button onClick={PostData}>تسجيل البيانات</button>
        <Effect/>
    </div>

  )
}

export default Post