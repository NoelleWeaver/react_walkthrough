import {useState, useEffect} from 'react'

//CLean Up Functions

const UseEffectCleanUp = () => {
   const [size, setSize] = useState(window.innerWidth)

   const checkSize = () =>{
    setSize(window.innerWidth)
   }

   useEffect(() =>{
    console.log("Use Effect")
        window.addEventListener("resize", checkSize)
        return () => {
            console.log("Cleanup")
            window.removeEventListener("resize", checkSize)
        }
   })

   console.log("renderComponent")
    return (
        <>
            <h1>Window Size: </h1>
            <h2>{size} px</h2>
        </>
    )
}

export default UseEffectCleanUp