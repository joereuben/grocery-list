import React from 'react'

export default function InputArea({updateText}) {
    
    const handleSubmit = (e)=>{
        e.preventDefault()
    }

  return (
    <div>
      <form action="" >
        <input type="text" name="" id="" onChange={(e)=> updateText(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
