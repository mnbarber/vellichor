import { useState } from 'react'
import './App.css'
import PostForm from './components/PostForm/PostForm.jsx'

function App() {

  return (
    <>
      <div className='header'>
        <h1>vellichor</h1>
      </div>
      <div className='main'>
        <p>a digital journal</p>
      </div>

    <PostForm />
    </>
  )
}

export default App
