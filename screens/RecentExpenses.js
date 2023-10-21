import {View, StyleSheet,Text} from 'react-native'
import { ExpenseOutput } from '../components/expenses/ExpenseOutput'
import { useContext } from 'react'
import { ExpenseCreateContext } from '../store/expense-context'
import { getDateMinusDays } from '../util/date'

export const RecentExpenses = () => {
  const expenseCtx = useContext(ExpenseCreateContext);
  const recentExpenses = expenseCtx.expense.filter((expense)=>{
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  })
  return (
   <ExpenseOutput expenses={recentExpenses}
   expensesPeriod='last 7 days'/>
  )
}

const styles = StyleSheet.create({
    
})