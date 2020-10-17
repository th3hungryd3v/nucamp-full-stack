import React, { useState } from 'react'


const RightSidebar = (props)=>{

  const [isOpen,setIsOpen] = useState(false)
  return (
    <div className={`outer ${isOpen ? 'right-open':''}`} style={{display:'flex'}}>
      <div className='right-sidebar-tab' style={{marginTop:150}} onClick={()=>setIsOpen(!isOpen)}>
        O<br/>R<br/>D <br/>E<br/>R
      </div>
      <div className={`right-side-bar text-center`} >
        <h4 style={{marginTop:100,}}>Your Order</h4>
      </div>
    </div>
  )
}

export default RightSidebar