import {useState} from 'react'
import Child from './Child'

const Parent=()=>{
const[color,setColor]=useState('')
const[sendingColor,setSendingColor]=useState('')
const func=(color)=>{
  setColor(color)
}
const colorSet=()=>{
  setSendingColor('green')
}

  return (
    <div>
   <h1>This is Parent </h1>
   <div> 
     <button onClick={colorSet} style={{backgroundColor:color}}>
       parent button</button>
       </div>
    <Child pa={func} sendingColor={sendingColor} />

    </div>
  )
}

export default Parent 