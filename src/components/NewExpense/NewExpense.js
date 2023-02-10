import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);
  const saveExpenseDataHandler = function (data) {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setDisplayForm(false);
  };
  const displayFormHandler = (e) => {
    setDisplayForm(true);
  };
  const displayNone = () => {
    setDisplayForm(false);
  };

  return (
    <div className="new-expense">
      {!displayForm && (
        <button onClick={displayFormHandler}>Add New Expense</button>
      )}
      {displayForm && (
        <ExpenseForm
          onCancel={displayNone}
          onSaveExpenseData={saveExpenseDataHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};
export default NewExpense;
