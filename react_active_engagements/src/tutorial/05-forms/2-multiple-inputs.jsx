import {useState} from 'react'


const ControlledInputs = () => {
    const [person, setPerson] = useState([{firstName: '', email: '', age:''}])
    const [people, setPeople] = useState([])

    const handleChange = (e) => {
        const name = e.target.name 
        const value = e.target.value
        setPerson({...person, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(person.firstName && person.email && person.age){
            const newPerson = {...person, id: new Date().getTime().toString()}
            setPeople([...people, newPerson])
            setPerson({firstName: '', email: '', age:''})
        }
    }

  return (
    <>
        <article className="form">
            <form >
                <div className="form-control">
                    <label htmlFor="firstName">Name: </label>
                    <input 
                    type="text" 
                    name="firstName" 
                    id="firstName" 
                    value={person.firstName}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email: </label>
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={person.email}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="age">age: </label>
                    <input 
                    type="age" 
                    name="age" 
                    id="age" 
                    value={person.age}
                    onChange={handleChange}
                    />
                </div>
                <button className="btn" type="submit" onClick={handleSubmit}>Add Person</button>
            </form>
        </article>
        <article>
            {people.map((person)=>{
                const {id, firstName, email, age} = person
                return(
                    <div className="item" key={id}>
                        <h4>{firstName}</h4>
                        <p>{email}</p>
                        <p>{age} years old</p>
                    </div>
                )
            })}
        </article>
    </>
  )
}

export default ControlledInputs