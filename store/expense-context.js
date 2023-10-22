import {createContext, useReducer} from 'react'

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2023-10-19')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2023-1-19')
    },
    {
        id: 'e3',
        description: 'bananas',
        amount: 5.99,
        date: new Date('2023-2-9')
    },
    {
        id: 'e4',
        description: 'e book',
        amount: 4.99,
        date: new Date('2023-4-8')
    },
    {
        id: 'e5',
        description: 'another book',
        amount: 3.99,
        date: new Date('2023-3-9')
    },
]

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
    const [expenseState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

    function addExpense(expenseData){
        dispatch({ type: 'ADD', payload: expenseData})
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
        updateExpense: updateExpense,
        deleteExpense: deleteExpense
    }

    return <ExpenseCreateContext.Provider value={value}>
        {children}
    </ExpenseCreateContext.Provider>
}

export default ExpenseContextProvider