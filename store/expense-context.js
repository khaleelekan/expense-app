import {createContext} from 'react'


export const ExpenseCreateContext = createContext({
    expense: [],
    addExpense: ({description, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description,amount, date}) => {}
}); 
