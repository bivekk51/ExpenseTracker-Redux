import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeExpense } from '../features/expenses/expensesSlice';

const ExpenseList = () => {
    const expenses = useSelector((state) => state.expenses.items);
    const dispatch = useDispatch();

    return (
        <div className="space-y-4">
            {expenses.map((expense) => (
                <div key={expense.id} className="flex justify-between items-center p-2 border rounded">
                    <div>
                        <p className="text-lg">{expense.name}</p>
                        <p className="text-gray-500">${expense.amount}</p>
                    </div>
                    <button
                        onClick={() => dispatch(removeExpense(expense.id))}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ExpenseList;
