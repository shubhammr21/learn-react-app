import Expenses from "./components/Expenses"
function App() {
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
  return (
    <div>
      <h2>App Element</h2>
      <Expenses items={expenses} />
    </div>
  )
}

export default App
