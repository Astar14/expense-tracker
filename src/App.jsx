import "./App.css";
import Expense from "./component/Expense";
import Navbar from "./component/Navbar";
import Buttons from "./component/Buttons";
import ExpenseTable from "./component/ExpenseTable";
import pencil from "./assets/pencil.svg";
import { useEffect, useState } from "react";
import expense from "./assets/expense.svg";
import Chart from "./component/Chart";
import PieChart from "./component/PieChart";

function App() {
  const [budget, setBudget] = useState(10000);
  const [expenseAmount, setExpenseAmount] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState(expenseAmount);

  const handleBudget = (newBudget) => {
    setBudget(newBudget);
  };

  useEffect(() => {
    setFilteredExpenses(expenseAmount);
  }, [expenseAmount]);

  const handleExpenseAmount = (newExpense) => {
    setExpenseAmount((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const totalExpense = expenseAmount.reduce(
    (acc, curr) => acc + (curr.amount || 0),
    0
  );

  return (
    <>
      <Navbar />
      <div className="main-container">
        <Expense budget={"Your Budget"} amount={budget} img={pencil} />
        <Expense budget={"Your Expense"} amount={totalExpense} img={expense} />
        <Expense
          budget={"Reamaining budget"}
          amount={budget - totalExpense}
          img={pencil}
        />
      </div>

      <Buttons
        handleBudget={handleBudget}
        handleExpenseAmount={handleExpenseAmount}
        expenses={expenseAmount}
        setFilteredExpenses={setFilteredExpenses}
      />
       <div className="chart-container">
        <div className="pie-chart">
          <PieChart filteredExpenses={filteredExpenses} />
        </div>
        <div className="bar-graph">
          <Chart filteredExpenses={filteredExpenses} />
        </div>
      </div>
      <ExpenseTable
        expenseAmount={expenseAmount}
        filteredExpenses={filteredExpenses}
        setExpenseAmount={setExpenseAmount}
      />
    </>
  );
}

export default App;
