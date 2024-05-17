import React, { useState , createRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { exportComponentAsJPEG } from 'react-component-export-image'
import Text from '../AddText/AddText'

export default function Edit() {
    const [params] = useSearchParams()
    const [count , setCount] = useState(0)
    const memeRef = createRef()

    const AddText = ()=>{
         setCount(count + 1)
    }

  return (
     <div className='d-flex justify-content-center align-items-center ' style={{height:'calc(100vh - 80px)'}}>
        <div>
        <div className='d-flex' ref={memeRef}>
           <img src={params.get("url")} width={'250px'}/>
           <div className={count && 'ms-4'}>
           {
              Array(count).fill(0).map((text) => (
                 <Text/>
              ))
           }
           </div>
        </div>   
         <div className='d-grid shadow'>
             <button className='btn btn-primary my-3' onClick={AddText}>Add Text</button>
             <button className='btn btn-success' onClick={(e) => exportComponentAsJPEG(memeRef)}>Save</button>
         </div>
        </div>
     </div>
  )
}
