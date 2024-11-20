import {useState} from 'react'

/* Remember the conpent name must be uppercase
Invoke useState inside the function not outside
Dont call hooks conditionally */

export const UseStateBasics = () => {
    
    const [text, setText] = useState("Random Title")

    //Function to change the text
    const handleClick = () => {
        if(text === "Random Title") {
            setText("Hello Idiots!")
        } else if(text === "Hello Idiots!")  {
            setText("Impossible!")
        } else if(text === "Impossible!") {
            setText("What are you doing?")
        } else if(text === "What are you doing?")  {
            setText("Random Title")
        }
    
    }
  return (
    <>
        <h1>{text}</h1>
        <button className="btn" onClick={handleClick}> Change Title</button>
    </>
  )
}

export default UseStateBasics