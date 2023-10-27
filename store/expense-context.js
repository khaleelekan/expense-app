import {createContext, useReducer} from 'react'
import { fetchExpenses } from '../util/http';


export const ExpenseCreateContext = createContext({
    expense: [],
    addExpense: ({description, amount, date}) => {},
    setExpense: (expenses)=> {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description,amount, date}) => {}
}); 

function expenseReducer (state, action){
    switch(action.type){
        case 'ADD':
            return [action.payload, ...state]
        case 'SET':
            const inverted = action.payload.reverse()
            return inverted;
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
            );
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state;
    }
}

function ExpenseContextProvider ({children}) {
    const [expenseState, dispatch] = useReducer(expenseReducer, []);

    function addExpense(expenseData){
        dispatch({ type: 'ADD', payload: expenseData})
    }
    function setExpense (expenses){
        dispatch({type: 'SET', payload: expenses})
    }

    function deleteExpense(id){
        dispatch({ type: 'DELETE', payload: id})
    }
    function updateExpense (id, expenseState){
        dispatch({ type: 'UPDATE', payload: id , expenseState})
    }

    const value = {
        expense: expenseState,
        addExpense: addExpense,
        setExpense: setExpense,
        updateExpense: updateExpense,
        deleteExpense: deleteExpense
    }

    return <ExpenseCreateContext.Provider value={value}>
        {children}
    </ExpenseCreateContext.Provider>
}

export default ExpenseContextProvider