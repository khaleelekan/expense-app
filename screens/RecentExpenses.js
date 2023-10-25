import {View, StyleSheet,Text} from 'react-native'
import { ExpenseOutput } from '../components/expenses/ExpenseOutput'
import { useContext, useEffect } from 'react'
import { ExpenseCreateContext } from '../store/expense-context'
import { getDateMinusDays } from '../util/date'
import { fetchExpenses } from '../util/http'

export const RecentExpenses = () => {
  const expenseCtx = useContext(ExpenseCreateContext);

  useEffect(()=>{
    async function getExpenses(){
      const expenses = await fetchExpenses()
    }
   getExpenses()
  },[]);
  const recentExpenses = expenseCtx.expense.filter((expense)=>{
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  })
  return (
   <ExpenseOutput expenses={recentExpenses}
   expensesPeriod='last 7 days'
   fallback='no recent expenses added'/>
  )
}

const styles = StyleSheet.create({
    
})