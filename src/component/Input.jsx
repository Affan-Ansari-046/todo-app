import React from 'react'

const Input = ({input , setInput}) => {
  return (
    <>
    <div className='task-enter'>
        <input 
        type='text' 
        placeholder='Enter Task'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
    </div>
    </>
  )
}

export default Input
