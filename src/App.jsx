import React from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  return (
    <div className=" bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen flex items-center justify-center container mx-auto p-8 max-w-2xl">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Expense Tracker</h1>
        <ExpenseForm />
        <ExpenseList />
      </div>
    </div>
  );
}

export default App;
