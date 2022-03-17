import React from "react"
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"

const App = () => {
  const expenses = [
    {
      date: new Date(2021, 2, 28),
      title: "Item 1",
      amount: 291.23
    },
    {
      date: new Date(2021, 2, 28),
      title: "Item 2",
      amount: 291.23
    },
    {
      date: new Date(2021, 2, 28),
      title: "Item 3",
      amount: 291.23
    },
    {
      date: new Date(2021, 2, 28),
      title: "Item 4",
      amount: 291.23
    }
  ]
  const addExpenseHandler = expense => {
    console.log(expense)
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
