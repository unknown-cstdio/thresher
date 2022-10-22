import React from 'react'
import SideStory3 from './SideStory3'

export default function SideStoryGroup(props) {
  return (
    <div>
        {
            props.groups.map((story, idx)=>{
                return <div key={idx} className="d-flex align-items-center">
                    <h5 className='px-2'>{idx + 1}</h5>
                    {story}
                </div>
            })
        }
    </div>
  )
}
