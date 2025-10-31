import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Wrapper from './Wrapper'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Wrapper color="purple">
          <h1>Hello World</h1>
       </Wrapper>

          <Wrapper>
          <h1>Hello World</h1>
           <h3 style={{color:"green"}}>Technology excites me</h3>
       </Wrapper>
    </>
  )
}

export default App
