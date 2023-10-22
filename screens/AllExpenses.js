import {View, StyleSheet,Text} from 'react-native'
import { ExpenseOutput } from '../components/expenses/ExpenseOutput'
import { useContext } from 'react'
import { ExpenseCreateContext } from '../store/expense-context'

export const AllExpenses = () => {
  const expenseCtx = useContext(ExpenseCreateContext)
  return (
    <ExpenseOutput expenses={expenseCtx.expense} 
    expensesPeriod='All'
    fallback={'add new expense'}/>
  )
}

const styles = StyleSheet.create({
    
})