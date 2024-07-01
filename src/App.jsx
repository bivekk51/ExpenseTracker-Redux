import React from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Expense Tracker</h1>
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}

export default App;
