import React, { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import Subscribe from './Subscribe';

function NewEmail(){
    return (
        <div className="my-2 border-gray border-top border-bottom p-2 newEmail">
            <div className="d-flex justify-content-between align-items-center">
                <div className="mr-md-4">
                    Enjoy what you're reading? Sign up for our newsletter.
                </div>
                <Subscribe navBar = {false}/>
            </div>
        </div>
    )
}

function EmptyMid({children}){
    return (
        <div className="my-2 border-gray border-top border-bottom p-2 newEmail">
            {children}
        </div>
    )  
}

export {NewEmail, EmptyMid}