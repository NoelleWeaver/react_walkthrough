import {useState} from 'react'

const UseStateObject = () => {

    const [person, setPerson] = useState({
        name: 'Peter',
        age: 24,
        message: 'Peter Cottontail is coming for you...'
    })

    // const [name,setName] = useState('peter')
    // const [age, setAge] = useState(24)
    // const [message, setMessage] = useState('random message')

    const changeMessage = () => {
        setPerson({...person, message: 'New message'})
    } 
  return (
    <>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h4>{person.message}</h4>
        <button className="btn" onClick={changeMessage}>
            Change Message
        </button>
    </>
  )
}

export default UseStateObject