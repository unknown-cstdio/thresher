import React from 'react'

export default function ProjectStory2(props) {
  const projectName = props.projectName;
  return (
    <>
        <div className='row'>
            <div className='col-7' style={{borderRight: "1px solid gray"}}>
                <h5>Top Pic Stories:</h5>
                {props.storyPics.map((story)=> {return <div key={Math.random()}>{story}</div>})}
            </div>
            <div className='col-5 px-4'>
                <h4>{projectName}</h4>
                <img src={props.projectPic} style={{width: "25vw"}}></img>
                <div>Brief project intro</div>
                <div>authors: balablaalabla</div>
            </div>
        </div>
        <hr/>
    </>
    
  )
}