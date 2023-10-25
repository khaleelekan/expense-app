import axios from "axios";

const URL = 'https://expense-react-native-6be76-default-rtdb.firebaseio.com/'
export function storeExpense (expenseData){
    axios.post(URL +'expenses.json', expenseData)
}

export async function fetchExpenses (){
   const response = await axios.get(URL + '/expenses.json')

   const expenses = [];
 
   for ( const key in response.data){
    const expenseObj = {
        id: key,
        amount: response.data[key].amount,
        date: new Date(response.data[key].date),
        description: response.date[key].description
    };
    expenses.push(expenseObj);
   }
   return expenses;
}