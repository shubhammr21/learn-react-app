import React, { useState } from "react"
import "./ExpenseForm.css"

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("")
  const [enteredAmount, setEnteredAmount] = useState("")
  const [enteredDate, setEnteredDate] = useState("")
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: ""
  // })

  const titleChangeHandler = event => {
    // console.log(event.target.value)
    setEnteredTitle(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })
    // setUserInput(prevState => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value
    //   }
    // })
  }
  const amountChangeHandler = event => {
    // console.log(event.target.value)
    setEnteredAmount(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // })
    // setUserInput(prevState => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value
    //   }
    // })
  }
  const dateChangeHandler = event => {
    // console.log(event.target.value)
    setEnteredDate(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // })
    // setUserInput(prevState => {
    //   return {
    //     ...prevState,
    //     enteredDate: event.target.value
    //   }
    // })
  }

  const submitHandler = event => {
    event.preventDefault()
    // console.log(enteredTitle, enteredAmount, enteredDate)
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    console.log(expenseData)
    setEnteredTitle("")
    setEnteredAmount("")
    setEnteredDate("")
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={enteredDate}
            min="2021-01-01"
            max="2022-12-01"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  )
}

export default ExpenseForm
