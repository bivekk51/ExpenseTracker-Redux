import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeExpense } from '../features/expenses/expensesSlice';

const ExpenseList = () => {
    const expenses = useSelector((state) => state.expenses.items);
    const dispatch = useDispatch();

    return (
        <div className="mt-6 space-y-4">
            {expenses.map((expense) => (
                <div key={expense.id} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md">
                    <div>
                        <p className="text-xl font-semibold">{expense.name}</p>
                        <p className="text-gray-600">${expense.amount}</p>
                    </div>
                    <button
                        onClick={() => dispatch(removeExpense(expense.id))}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ExpenseList;
