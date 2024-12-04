import {useState, useEffect} from 'react'

//By default useEffect runs after every render

const UseEffectBasics = () => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        console.log("Call Use-Effect")
        if (value > 0){
            document.title=`New Messages: (${value})`
        }
    }, )
    
    console.log("rendering Component")
  return (
    <>
        <h1>{value}</h1>
        <button className="btn" onClick={()=>{setValue(value + 1)}}>Click Me</button>
    </>
  )
}

export default UseEffectBasics