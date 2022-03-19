import React, { useState } from "react"
import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter"

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState("2022")
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map(expense => (
        <ExpenseItem {...expense} key={expense.id} />
      ))}
    </Card>
  )
}

export default Expenses
