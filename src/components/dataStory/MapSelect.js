import React from 'react'

export default function MapSelect(props) {
  return (
    <div style={{width: "100%"}} className="justify-content-center row">
        
        {props.type == 1 ?
        <div className='col-md-6 col-12'>
            <select className="form-select" aria-label="Default select example" onChange={(e)=>{props.setStat(e.target.value)}}>
                <option value={1}>Percentage of residents having Bachelor's Degrees</option>
                <option value={2}>Percentage of residents that are Non-hispanic Whites</option>
                <option value={3}>Median houshold income (dollars)</option>
            </select>
        </div>
        
        :
        <div className='col-md-6 col-12'>
            <select className="form-select" aria-label="Default select example" onChange={(e)=>{props.setStat(e.target.value)}}>
                <option value={4}>Median gross rent (dollars)</option>
                <option value={5}>Median home value (dollars)</option>
            </select>
        </div>
        }
        
    </div>
  )
}
