import React from "react"
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"

const App = () => {
  const expenses = [
    {
      id: Math.random().toString(),
      date: new Date(2022, 2, 28),
      title: "Item 1",
      amount: 291.23
    },
    {
      id: Math.random().toString(),
      date: new Date(2022, 2, 28),
      title: "Item 2",
      amount: 291.23
    },
    {
      id: Math.random().toString(),
      date: new Date(2022, 2, 28),
      title: "Item 3",
      amount: 291.23
    },
    {
      id: Math.random().toString(),
      date: new Date(2022, 2, 28),
      title: "Item 4",
      amount: 291.23
    }
  ]
  const addExpenseHandler = expense => {
    console.log(expense)
    expenses.push(expense)
    console.log(expenses)
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
