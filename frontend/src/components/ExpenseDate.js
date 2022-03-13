import "./ExpenseDate.css"

function ExpenseDate(props) {
  //   const itemDate = props.date.toLocaleString("default", {
  //     month: "long",
  //     day: "2-digit",
  //     year: "numeric"
  //   })
  const month = props.date.toLocaleString("en-US", { month: "long" })
  const day = props.date.toLocaleString("en-US", { day: "2-digit" })
  const year = props.date.toLocaleString("en-US", { year: "numeric" })
  return (
    <div className="expense-date">
      {/* <div className="expense-date__date">{itemDate}</div> */}
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  )
}

export default ExpenseDate
