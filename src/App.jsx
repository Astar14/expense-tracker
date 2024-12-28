import "./App.css";
import Expense from "./component/Expense";
import Navbar from "./component/Navbar";
import Buttons from "./component/Buttons";
import ExpenseTable from "./component/ExpenseTable";
import pencil from "./assets/pencil.svg";
import { useEffect, useState } from "react";
import expense from "./assets/expense.svg";


function App() {
  const [budget, setBudget] = useState(10000);
  const [expenseAmount, setExpenseAmount] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState(expenseAmount);
  const [activeButton, setActiveButton] = useState("")

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
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
       
      <ExpenseTable
        expenseAmount={expenseAmount}
        filteredExpenses={filteredExpenses}
        setExpenseAmount={setExpenseAmount}
        setActiveButton={setActiveButton}    
      />
    </>
  );
}

export default App;
