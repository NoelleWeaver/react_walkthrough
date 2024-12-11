import {useState} from 'react'


//short-circuit evaluation AKA Ternary in returns
const ShortCircuit = () => {
    const [text, setText] = useState('My Love Sabrina')
    const [isError, setIsError] = useState(false)
    const firstValue = text || "Hello World!"
    const secondValue = text && "Hello World!"

  return (
    <>
        <h1>{firstValue}</h1>
        <h1>Value: {secondValue}</h1>
        {/* {if(true){console.log("HAHAHA")}} */}
        {/* <h1>{text || 'John Doe'}</h1> */}
        <button className="btn" onClick={()=> setIsError(!isError)}>Toggle Error</button>
        {isError && <h1>Error...Brain Lost</h1>}
        {isError ? (<p>There is an Error Please Help</p>) : (<div><h2>There is no error</h2></div>)}
        <button className="btn" onClick={()=> setText("")}>Change Me</button>
    </>
  )
}

export default ShortCircuit