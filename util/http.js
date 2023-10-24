import axios from "axios";
export function storeExpense (expenseData){
    axios.post('https://expense-react-native-6be76-default-rtdb.firebaseio.com/expenses.json',
    expenseData)
}