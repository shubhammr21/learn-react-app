import React, { useState } from "react"
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"

const DUMMY_EXPENSED = [
  {
    id: Math.random().toString(),
    date: new Date(2022, 1, 28),
    title: "Item 1",
    amount: 291.23
  },
  {
    id: Math.random().toString(),
    date: new Date(2022, 2, 18),
    title: "Item 2",
    amount: 291.23
  },
  {
    id: Math.random().toString(),
    date: new Date(2022, 2, 8),
    title: "Item 3",
    amount: 291.23
  },
  {
    id: Math.random().toString(),
    date: new Date(2022, 4, 9),
    title: "Item 4",
    amount: 291.23
  }
]
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSED)
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => [expense, ...prevExpenses])
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
