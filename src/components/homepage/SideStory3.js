import React from 'react'

export default function SideStory3(props) {
  return (
    <div>
        <div className='d-flex my-2'>
            <div className='px-2'>
                <div>Title title title into into intro intro</div>
                <div>by author</div>
            </div>
            <img src={props.src} style={{width: "7vw"}} className="me-2"/>
        </div>
        <hr/>
    </div>
    
  )
}
