import {useState, useEffect} from 'react'

const url = 'https://api.github.com/users/NoelleWeaver'
const MultipleReturns = () => {
    //Webpage state changes: You can use these to setup your own loading screens progress bars...etc as well as a custom error component for wrong pages or permissions.
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [user, setUser] = useState('default-user')

    useEffect(() => {
        fetch(url)
        .then((resp) => {
            if(resp.status >= 200 && resp.status <=299){
                return resp.json()
            }
            else{
                setIsLoading(false)
                setIsError(true)
                throw new Error(resp.statusText)
            }
        })
        .then((user) => {
            const {login} = user
            setUser(login)
            setIsLoading(false)
        })
        .catch((error) => {
            console.error('Error:', error)
        })
    })


    if(isLoading){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    if(isError){
        return(
            <div>
                <h1>Error...</h1>
            </div>
        )
    }


  return (
    <div>
        <h1>{user}</h1>
    </div>
  )
}

export default MultipleReturns