import { useState } from 'react'
import './Box.scss'
import './App.css' 
import Box from './Box'

function App() {
  
  const [boxTop, setBoxTop] = useState(0);
  const [boxLeft, setBoxLeft] = useState(0);
 

  return (
    <div className = "App">
    <Box 
    boxTop={boxTop}
    boxLeft={boxLeft}/>
  <div className="buttons">
    <button onClick={()=>{ setBoxTop(boxTop-50)}}>UP</button>
    <button onClick={()=>{ setBoxTop(boxTop+50)}}>DOWN</button>
    <button onClick={()=>{ setBoxLeft(boxLeft-50)}}>LEFT</button>
    <button onClick={()=>{ setBoxLeft(boxLeft + 50)}}>RIGHT</button>
  </div>
    </div>
  )
}

export default App
