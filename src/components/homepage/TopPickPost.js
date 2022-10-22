import React from 'react';
import {useNavigate} from "react-router-dom"

export default function TopPickPost(props) {
  const navigate = useNavigate();
  return (
    <>
    <div className='d-flex'>
        <img src={props.src} style={{width: "40vw", objectFit: "contain"}}></img>
        <div className='px-5' style={{width: "100%"}}>
            <h1 className='text-bold' style={{cursor: "pointer"}} onClick={()=>{navigate("/stories")}}
            >Brief title titlet title title dahdsifhai</h1>
            <div style={{lineBreak: "anywhere"}}>Brief intro adsfaodfaoifghapshfaiushgoidfhapodhfasugfsoigfhpauihfapugiegfpiuahfapufaoirjfaohfrpauroaiujaifdhadifuawfjavpapearjanvjzncpghpiearngakjfnovnairgepigfvkfvndskjbsirsnvkjcjrgeiurgaeivga</div>
            <div className='d-flex justify-content-end'>by author</div>
        </div>
        
    </div>
    <hr/>
    </>
    
  )
}
