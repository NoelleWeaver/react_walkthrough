import {useState} from 'react'
import {data} from '../../data'

export const UseStateArray = () => {
    const [people, setPeople] = useState(data)

    const removeItem = (id) => {
        let newPeople = people.filter((person)=> person.id !== id)
        setPeople(newPeople)
    }

  return (
    <>
        {people.map((person) => {
            const {id, name} = person
            return(
                <div className="item">
                    <h4>{name}</h4>
                    <button onClick={() => removeItem(id)}>Remove</button>
                </div>
            )

        })}

        <button className="btn" onClick={() => setPeople([])}>Clear Items</button>
    </>
  )
}
export default UseStateArray