import {View, StyleSheet,Text} from 'react-native'
import { ExpenseOutput } from '../components/expenses/ExpenseOutput'
import { useContext, useEffect, useState } from 'react'
import { ExpenseCreateContext } from '../store/expense-context'
import { getDateMinusDays } from '../util/date'
import { fetchExpenses } from '../util/http'
import { LoadingOverlay } from '../UI/LoadingOverlay'
import { ErrorOverlay } from '../UI/ErrorOverLay'

export const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [error , setError] = useState();
  const expenseCtx = useContext(ExpenseCreateContext);
  
  useEffect(()=>{
    async function getExpenses(){
      setIsFetching(true)
      try{
        const expenses = await fetchExpenses()
        expenseCtx.setExpense(expenses)
      }
      catch (error){
        setError('Could not fetch data')
      }
      setIsFetching(false)
    }
   getExpenses()
  },[]); 

  function errorHandler(){
    setError (null) 
  }
  if (error && !isFetching){
    return <ErrorOverlay message={error} onConfirm={errorHandler}/>
  }

  if (isFetching){
    return <LoadingOverlay />
  }
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