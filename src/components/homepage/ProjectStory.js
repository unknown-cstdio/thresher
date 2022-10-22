import React from 'react'

export default function ProjectStory(props) {
  const projectName = props.projectName;
  const projectDesc1 = props.projectDesc1;
  const projectDesc2 = props.projectDesc2;
  return (
    <>
      <div className='row'>
      <h2 className='text-center'><a href={props.projectLink}>{projectName}</a></h2>
        <div className='col-lg-5'>
        <a href={props.projectLink}><img src={props.projectPic} style={{width: "100%"}}></img></a>
            <div>{projectDesc1}</div>
            <br></br><div>{projectDesc2}</div>
        </div>
        <div className='col-lg-7'>
            {props.storyPics.map((story)=> {return <div key={Math.random()}>{story}</div>})}
        </div>
      </div>
      <hr/>
    </>
   
  )
}
