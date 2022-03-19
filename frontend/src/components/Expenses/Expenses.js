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
  const filteredExpenses = props.items.filter(
    item => item.date.getFullYear().toString() === filteredYear
  )

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.length === 0 ? (
        <p>No Expenses Found!</p>
      ) : (
        filteredExpenses.map(expense => (
          <ExpenseItem {...expense} key={expense.id} />
        ))
      )}
    </Card>
  )
}

export default Expenses
