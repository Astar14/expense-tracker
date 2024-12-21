import React from "react";
import { useState, useEffect } from "react";

const AddExpense = ({
  expenseToggle,
  setExpenseToggle,
  handleExpenseAmount,
  updatedExpense,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [date, setDate] = useState("");
  const [selectValue, setSelectValue] = useState("choose");
  const [expenseAmount, setExpenseAmount] = useState("");

  useEffect(() => {
    if (updatedExpense && expenseToggle) {
      setInputValue(updatedExpense.name || "");
      setDate(updatedExpense.date || "");
      setSelectValue(updatedExpense.category || "choose");
      setExpenseAmount(updatedExpense.amount || "");
    }
  }, [updatedExpense, expenseToggle]);

  const closePopUp = () => {
    setExpenseToggle(false);
  };

  const addExpenses = () => {
    if (inputValue && date && selectValue && expenseAmount) {
      const newExpense = {
        id: updatedExpense ? updatedExpense.id : Date.now(),
        name: inputValue,
        date,
        category: selectValue,
        amount: parseInt(expenseAmount),
      };
      handleExpenseAmount(newExpense);
      setInputValue("");
      setDate("");
      setSelectValue("choose");
      setExpenseAmount("");
      closePopUp();
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <>
      {expenseToggle ? (
        <>
          <div className="overlay" onClick={closePopUp}></div>
          <div className="add-expense-popup">
            <h2>{updatedExpense ? "Edit Expense" : "Add Expense"}</h2>
            <div className="border"></div>
            <button className="cross-icon" onClick={closePopUp}>
              X
            </button>
            <p>Expense Name</p>
            <input
              type="text"
              placeholder="Expense Name"
              value={inputValue || ""}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <p>Date</p>
            <input
              type="date"
              value={date || ""}
              onChange={(e) => setDate(e.target.value)}
            />
            <p>Category</p>
            <select
              value={selectValue || "choose"}
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <option value="choose">Choose Category</option>
              <option value="food">Food and drinks</option>
              <option value="groceries">Groceries</option>
              <option value="travel">Travel</option>
              <option value="health">Health</option>
            </select>
            <p>Amount</p>
            <input
              type="text"
              placeholder="Enter Amount"
              value={expenseAmount || ""}
              onChange={(e) => setExpenseAmount(e.target.value)}
            />
            <button onClick={addExpenses}>
              {updatedExpense ? "Update Expense" : "Add Expense"}
            </button>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default AddExpense;
