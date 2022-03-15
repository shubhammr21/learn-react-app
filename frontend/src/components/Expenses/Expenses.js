import React from "react"
import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"

const Expenses = props => {
  return (
    <Card className="expenses">
      {props.items.map(expense => (
        <ExpenseItem {...expense} key={Math.random()} />
      ))}
    </Card>
  )
}

export default Expenses
