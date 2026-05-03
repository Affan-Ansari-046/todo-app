import { CirclePlus } from 'lucide-react'
import React from 'react'

const Add = ({addTask}) => {
  return (
    <>
    <div className='add-button'>
        <button
        onClick={addTask}
        ><CirclePlus/></button>
    </div>
    </>
  )
}

export default Add
