import {useState} from 'react'

export const ButtonActiveEngagement = () => {
    
    const [status, setTrue] = useState(true)
    const [value, setValue] = useState(0)
    //Function to change the text
    const handleClick = () => {
        setValue(value+1)
        setTrue(!status)
    }
  return (
    <>
        <h1>{status ? "true" : "false"}</h1>
        <h1>{value}</h1>
        <button className="btn" onClick={handleClick} style={{background: status ? "green" : "red"}}>Change Status</button>
    </>
  )
}

export default ButtonActiveEngagement