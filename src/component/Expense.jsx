import React from "react";

const Expense = (props) => {
  return (
    <>
      <div className="budget-container">
        <div className="my-budget">
          <p>{props.budget}</p>
          <h1>
            <span>&#8377;</span>
            {props.amount}/m
          </h1>
        </div>
        <div className="icon">
          <img src={props.img} alt="" />
        </div>
      </div>
    </>
  );
};

export default Expense;
