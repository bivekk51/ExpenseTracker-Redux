import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../features/expenses/expensesSlice';

const ExpenseForm = () => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addExpense({ id: Date.now(), name, amount }));
        setName('');
        setAmount('');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
            <div>
                <label className="block text-gray-700">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Expense name"
                />
            </div>
            <div>
                <label className="block text-gray-700">Amount</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Expense amount"
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                Add Expense
            </button>
        </form>
    );
};

export default ExpenseForm;
