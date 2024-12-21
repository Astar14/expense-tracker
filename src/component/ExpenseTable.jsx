import React, { useState } from "react";
import AddExpense from "./AddExpense";
import DeleteModal from "./DeleteModal";
import PieChart from "./PieChart";
import Chart from "./Chart";

const ExpenseTable = ({
  expenseAmount,
  setExpenseAmount,
  filteredExpenses,
  setActiveButton,
}) => {
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [updatedValue, setUpdatedValue] = useState(null);
  const [expenseToggle, setExpenseToggle] = useState(false);

  console.log(expenseAmount);

  const handleEditing = (expense) => {
    setUpdatedValue(expense);
    setExpenseToggle(true);
  };

  const handleDelete = (expense) => {
    setUpdatedValue(expense);
    setDeleteToggle(!deleteToggle);
  };

  const handleExpenseAmount = (expense) => {
    if (updatedValue) {
      const updatedItems = expenseAmount.map((item) =>
        item.id === updatedValue.id ? expense : item
      );
      setExpenseAmount(updatedItems);
    } else {
      setExpenseAmount([...expenseAmount, expense]);
    }
    setUpdatedValue(null);
    setExpenseToggle(false);
    setActiveButton("")
  };

  const deleteItem = (id) => {
    const updatedItems = expenseAmount.filter((expense) => expense.id !== id);
    setExpenseAmount(updatedItems);
    setActiveButton("");
    setDeleteToggle(false);
  };

  return (
    <>
      {filteredExpenses?.length > 0 ? (
        <>
          <div className="chart-container">
            <div className="pie-chart">
              <PieChart filteredExpenses={filteredExpenses} />
            </div>
            <div className="bar-graph">
              <Chart filteredExpenses={filteredExpenses} />
            </div>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Sr.</th>
                  <th>Expense</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                {filteredExpenses.map((expense, index) => (
                  <tr key={expense.id}>
                    <td>{index + 1}</td>
                    <td>{expense.name || "N/A"}</td>
                    <td>{expense.category}</td>
                    <td>{expense.amount || 0}</td>
                    <td>
                      <button
                        className="edit"
                        onClick={() => handleEditing(expense)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete"
                        onClick={() => handleDelete(expense)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <AddExpense
            expenseToggle={expenseToggle}
            setExpenseToggle={setExpenseToggle}
            updatedExpense={updatedValue}
            handleExpenseAmount={handleExpenseAmount}
          />
          <DeleteModal
            deleteToggle={deleteToggle}
            setDeleteToggle={setDeleteToggle}
            updatedExpense={updatedValue}
            deleteItem={deleteItem}
          />
        </>
      ) : (
        <h1 style={{ textAlign: "center", marginTop: "25px", color: "red" }}>
          No expenses available
        </h1>
      )}
    </>
  );
};

export default ExpenseTable;
