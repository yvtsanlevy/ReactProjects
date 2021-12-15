import React ,{useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [entredTitle , setEntredTitle] = useState('');
  const [entredAmount , setEntredAmount] = useState('');
  const [entredDate , setEntredDate] = useState('');
  
  const titleCangeHendler = (event) => {
    //   console.log(event.target.value);
    setEntredTitle(event.target.value);
  };
  const amountCangeHendler = (event) => {
    //   console.log(event.target.value);
    setEntredAmount(event.target.value);
  };
  const dateCangeHendler = (event) => {
    //   console.log(event.target.value);
    setEntredDate(event.target.value);
  };
  const submitHandler = (event) =>{
      event.preventDefault();
      const expenseData = {
          title : entredTitle,
          amount : +entredAmount,
          date : new Date(entredDate)
      };
      props.onSaveExpenseData(expenseData);
      setEntredTitle('');
      setEntredAmount('');
      setEntredDate('');

    
  }
  return (
    <form onSubmit = {submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value ={entredTitle} onChange ={titleCangeHendler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min = "0.01" step = "0.01" value={entredAmount} onChange ={amountCangeHendler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date"  min = "2019-01-01" max = "2022-12-31" value={entredDate} onChange ={dateCangeHendler}/>
        </div>

        <div className = 'new-expense__actions'>
            <button type = "submit">Add Expense</button>
            </div>
      </div>
      
    </form>
  );
};

export default ExpenseForm;
