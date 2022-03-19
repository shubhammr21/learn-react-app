import React, { useState } from "react"
import Button from "../UI/Button"
import Card from "../UI/Card"
import ErrorModal from "../UI/ErrorModal"
import styles from "./AddUser.module.css"

const AddUser = props => {
  const [username, setUsername] = useState("")
  const [age, setAge] = useState("")
  const [error, setError] = useState()

  const usernameChangeHandler = event => {
    setUsername(event.target.value)
  }

  const ageChangeHandler = event => {
    setAge(event.target.value)
  }

  const addUserHandler = event => {
    event.preventDefault()
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input!",
        message: "Please enter a valid username and age!"
      })
      return
    }
    if (+age < 1 || +age > 99) {
      setError({
        title: "Invalid age!",
        message: "Please enter a valid age (0 < age < 99)!"
      })
      return
    }
    props.onAddUser({ name: username, age: +age, id: Math.random.toString() })
    setUsername("")
    setAge("")
  }

  const errorHandler = () => setError(null)

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card classes={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={username}
            type="text"
            id="username"
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            value={age}
            type="number"
            id="age"
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  )
}

export default AddUser
