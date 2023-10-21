import {createContext, useReducer} from 'react'


export const ExpenseCreateContext = createContext({
    expense: [],
    addExpense: ({description, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description,amount, date}) => {}
}); 

function expenseReducer (state, action){
    switch(action.type){
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{...action.payload, id: id }, ...state]
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
    const [expenseState, dispatch] = useReducer(expenseReducer);

    function addExpense(expenseData){
        dispatch({ type: 'ADD', payload: expenseData})
    }

    function deleteExpense(id){
        dispatch({ type: 'DELETE', payload: id})
    }
    function updateExpense (id,expenseData){
        dispatch({ type: 'UPDATE', payload: id , expenseData})
    }

    return <ExpenseContext.Provider>
        {children}
    </ExpenseContext.Provider>
}

export default ExpenseContextProvider