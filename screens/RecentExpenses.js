import {View, StyleSheet,Text} from 'react-native'
import { ExpenseOutput } from '../components/expenses/ExpenseOutput'

export const RecentExpenses = () => {
  return (
   <ExpenseOutput expensesPeriod='last 7 days'/>
  )
}

const styles = StyleSheet.create({
    
})