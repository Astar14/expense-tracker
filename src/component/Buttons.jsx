import React, { useState } from "react";
import food from "../assets/searchicon.svg";
import groceries from "../assets/groceries.svg";
import travel from "../assets/travel.svg";
import health from "../assets/health.svg";
import AddBudget from "./AddBudget";
import AddExpense from "./AddExpense";
import { IoSearchOutline } from "react-icons/io5";

const Buttons = ({handleBudget, handleExpenseAmount, expenses, setFilteredExpenses}) => {
  const [toggle, setToggle] = useState(false);
  const [expenseToggle, setExpenseToggle] = useState(false)

  const addBudget = () => {
    setToggle(!toggle);
  };

  const addExpense = () => {
     setExpenseToggle(!expenseToggle)
  }

  const handleCategoryChange = (category) => {
    let filteredExpenses = expenses.filter((expense) => expense.category === category)
     setFilteredExpenses(filteredExpenses)
  }

  const handleAllExpenses = () => {
    setFilteredExpenses(expenses)
  }

  return (
    <>
      <div className="search-bar">
        <div className="search-bar-two">
        <IoSearchOutline className="search-icon"/>
        <input type="text" id="" placeholder="search" />
        </div>
        
        <button className="button" onClick={handleAllExpenses}>
          <img src={groceries} alt="" /> All Expenses
        </button>
        <button className="button" onClick={()=>handleCategoryChange("food")}>
          <img src={food} alt="" /> Food & Drinks
        </button>
        <button className="button" onClick={()=>handleCategoryChange("groceries")}>
          <img src={groceries} alt="" /> Groceries
        </button>
        <button className="button" onClick={()=>handleCategoryChange("travel")}>
          {" "}
          <img src={travel} alt="" /> Travel
        </button>
        <button className="button" onClick={()=>handleCategoryChange("health")}>
          {" "}
          <img src={health} alt="" /> Health
        </button>
        <button
          className="add-budget"
          onClick={addBudget}
        >
          <span style={{ fontSize: "22px", marginRight: "2px" }}>+</span>Add
          Budget
        </button>
        <AddBudget toggle={toggle} setToggle={setToggle} handleBudget={handleBudget}  />
        <button className="add-expense" onClick={addExpense}>
          <span style={{ fontSize: "22px", marginRight: "2px" }}>+</span> Add
          Expenses
        </button>
      </div>
      <AddExpense expenseToggle={expenseToggle} setExpenseToggle={setExpenseToggle} handleExpenseAmount={handleExpenseAmount} />
    </>
  );
};

export default Buttons;
