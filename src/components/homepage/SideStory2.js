import React from 'react'

export default function SideStory2(props) {
  const storyName = props.storyName;
  const authorName = props.authorName;
  return (
    <div className='d-flex my-2'>
        <a href={props.storyLink}><img src={props.src} style={{width: "10vw"}} className="me-2"/></a>
        <div>
            <h4><a href={props.storyLink}>{storyName}</a></h4>
            <div>{authorName}</div>
        </div>
        <hr></hr>
    </div>
  )
}
