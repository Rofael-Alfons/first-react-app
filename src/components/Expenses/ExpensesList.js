import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((items) => (
        <ExpenseItem
          key={items.id}
          title={items.title}
          amount={items.amount}
          date={items.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
};
export default ExpensesList;
