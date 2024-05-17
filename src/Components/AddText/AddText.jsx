import React from 'react'
import { useState  } from 'react'
import Draggable from 'react-draggable'

export default function Text() {
  const [editMode , setEditMode] = useState(false)
  const [value , setValue] = useState('Click to go for it')

  return (
         <Draggable>
            {
                editMode ? (<input className='form-control mb-2' placeholder='Create ! what you want...' onDoubleClick={(e) =>setEditMode(false)} onChange={(e) => setValue(e.target.value)}/>)
                         : (
                            <div className='d-flex align-items-center border-bottom pb-2 my-3'>
                                <h5 className='text-white' onDoubleClick={(e) => setEditMode(true)}>{value}</h5>
                            </div>
                           )
            }
         </Draggable>
  )
}
