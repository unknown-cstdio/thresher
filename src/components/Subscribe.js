import React, { useState, useRef} from 'react';
import { db } from '../firebase/firebase'

import { addDoc, collection } from 'firebase/firestore';
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios';

export default function Subscribe(props) {

    const captchaRef = useRef(null)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [submit, setSubmit] = useState("Subscribe")

    const rootpath = window.location.protocol + window.location.hostname;
    const midpath = "/.netlify/functions/index"

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmit(
            <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
        const token = captchaRef.current.getValue()
        captchaRef.current.reset()
        console.log(token)
        
        if(email.length <= 0 || firstName.length <= 0 || lastName.length <= 0){
            alert("Inputs can not be empty!")
            return
        }

        if(token.length <= 0){
            alert("Please complete reCAPTCHA")
            return
        }

        await axios.post(process.env.REACT_APP_API_URL + "/post", {token})
            .then(res =>  {
                if(res.data == "Human"){
                     const collectionRef = collection(db, "signUp")
                    addDoc(collectionRef, {email: email, FirstName: firstName, LastName: lastName})
                    // alert("Submitt Success")
                    setFirstName("")
                    setLastName("")
                    setEmail("")
                } else {
                    alert("Failed reCAPTCHA")
                }
            })
            .catch((error) => {
                alert("Something went wrong")
                console.log(error);
            })
        setSubmit("Success!")
        setTimeout(()=>{
            setSubmit("Subscribe")
        }, 2000)
        
    }

  return (
    <>
        <button type = "button" className={'btn mx-2 ' + `${props.navBar ? "btn-outline-light" : "btn-secondary"}`} data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Subscribe</button>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header border-0">
                    <h5 className="modal-title ps-2" id="staticBackdropLabel">Subscribe for better experience.</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form className='px-2' onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label className="form-label mb-0">First Name</label>
                            <input className='form-control' type="text" onChange={(e) => {setFirstName(e.target.value)}} value={firstName}></input>
                        </div>

                        <div className='mb-3'>
                            <label className="form-label mb-0">Last Name</label>
                            <input className='form-control' type="text" onChange={(e) => {setLastName(e.target.value)}} value={lastName}></input>
                        </div>

                        <div className='mb-3'>
                            <label className="form-label mb-0">Email</label>
                            <input className='form-control' type="email" onChange={(e) => {setEmail(e.target.value)}} value={email}></input>
                        </div>
                        
                        <ReCAPTCHA 
                            sitekey={process.env.REACT_APP_SITE_KEY}
                            ref={captchaRef}
                            />

                        <div className='d-flex justify-content-end my-3'>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary ms-2">{submit}</button>
                        </div>
                        
                    </form>
                    
                </div>
                </div>
            </div>
        </div>
    </>
    
  )
}
