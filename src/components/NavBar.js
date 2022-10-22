import React, {useEffect, useState} from 'react';
import logoWhite from "../images/logoWhite.png";
import fullLogoWhite from "../images/fullLogoWhite.png";
import {useNavigate, useLocation} from "react-router-dom";
import Subscribe from './Subscribe';

export default function NavBar() {
    const router = useNavigate()
    const location = useLocation()
    const [homePage, setHomePage] = useState(true)
    useEffect(()=>{
        if (location.pathname.includes("story")){
            setHomePage(false)
        } else{
            setHomePage(true)
        }
    }, [location])

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-black roboto">
            <div className="container-fluid">
                <a className="navbar-brand ps-3" href="/">
                    <img src={logoWhite} alt="Logo" style={{width: "25px"}}></img>
                </a>

              
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li> */}
                        { homePage ?
                            <form className="d-flex" role="search">
                                {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-light" type="submit">
                                    <i className="bi bi-search"></i>
                                </button> */}
                            </form>
                                
                            :
                            <div style={{marginLeft: "35vw", cursor:"pointer"}} className="text-center" onClick={()=>router("/")}>
                                <img src={fullLogoWhite} alt="Logo" style={{width: "11vw"}}></img>
                                <div className='nav-text'>RICE UNIVERSITY'S STUDENT NEWSPAPER — SINCE 1916</div>
                            </div>
                            
                            }
                    </ul>
                    <div className='d-flex align-items-center'>
                        {/* <a href='https://www.ricethresher.org/plugin/feeds/firehose' target="_blank">
                            <i className="bi bi-rss-fill fs-5 mx-2 text-white"></i>
                        </a> */}
                        <a href='https://www.facebook.com/TheRiceThresher/' target="_blank">
                            <i className="bi bi-facebook text-white fs-5 mx-2" style={{cursor: "pointer"}}></i>
                        </a>
                        <a href='https://twitter.com/TheRiceThresher' target="_blank">
                            <i className="bi bi-twitter fs-5 text-white mx-1" style={{cursor: "pointer"}}></i>
                        </a>
                        <a href='https://www.instagram.com/ricethresher/' target="_blank">
                            <i className="bi bi-instagram fs-5 text-white mx-2"></i>
                        </a>
                        
                        <Subscribe navBar = {true}/>
                    </div>
                
                </div>
                
            </div>
        </nav>
    </div>
  )
}
