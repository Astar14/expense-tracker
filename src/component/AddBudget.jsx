import React, { useState } from "react";
import Expense from "./Expense";
import AddExpense from "./AddExpense";

const AddBudget = ({ toggle, setToggle, handleBudget }) => {
  const [budgetValue, setBudgetValue] = useState("");

  const closePopUp = () => {
    setToggle(false);
  };

  const handleChange = (e) => {
    setBudgetValue(e.target.value);
  };

  const submitBudget = () => {
    handleBudget(budgetValue);
    setBudgetValue("");
    closePopUp();
  };

  return (
    <>
      {toggle ? (
        <>
          <div className="overlay" onClick={closePopUp}></div>
          <div className="add-budget-popup">
            <h2>Add Budget</h2>
            <div className="border"></div>
            <button className="cross-icon" onClick={closePopUp}>
              X
            </button>
            <p>Amount</p>
            <input
              type="text"
              placeholder="Enter amount"
              onChange={handleChange}
              value={budgetValue}
            />
            <button onClick={submitBudget}>Submit Budget</button>
          </div>
        </>
      ) : (
        ""
      )}
      <AddExpense closePopUp={closePopUp} />
    </>
  );
};

export default AddBudget;
