import UserCard from './UserCard'
import { useEffect, useState } from 'react'

const uppercase = word => word.charAt(0).toUpperCase() + word.slice(1)

const UserList = () => {
  const [ state, setState ] = useState({
      data: [],
      nextPage: 0,
  })

  const loadData = async () => {
    const endpoint = `https://randomuser.me/api/?nat=us&results=${10}&page=${state.page}`

    try {
      const res = await fetch(endpoint)
      const json = await res.json()
      setState({
        ...state,
        data: [...state.data, ...json.results],
        nextPage: state.nextPage + 1,
      })
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    loadData()
  }, []) // eslint-disable-line


  if (!state.data.length) {
    return null
  }

  return (
    <div>
      <div>
        {state.data.map(data => (
          <UserCard
              key={data.id.value}
              pic={data.picture.large}
              name={uppercase(data.name.first) + " " + uppercase(data.name.last)}
              location={data.location.city + ", " + uppercase(data.location.state)}
              phone={data.phone}
          />
        ))}
      </div>
      <button
        style={{
          borderRadius: 25,
        }}
        onClick={e => {
          loadData()
        }}
      >
        Load More Users
      </button>
    </div>
  )
}

export default UserList