import React, { useState } from "react"
import AddUser from "./components/Users/AddUser"
import UsersList from "./components/Users/UsersList"

function App() {
  const [usersData, setUsersData] = useState([])

  const addUserDataHandler = user => {
    setUsersData(prevUsersData => {
      return [...prevUsersData, user]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserDataHandler} />
      <UsersList users={usersData} />
    </div>
  )
}

export default App
