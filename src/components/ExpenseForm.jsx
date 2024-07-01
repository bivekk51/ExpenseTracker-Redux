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
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-gray-700">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 p-2 w-full border rounded"
                />
            </div>
            <div>
                <label className="block text-gray-700">Amount</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="mt-1 p-2 w-full border rounded"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Add Expense
            </button>
        </form>
    );
};

export default ExpenseForm;
