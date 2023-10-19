import {View, StyleSheet,Text} from 'react-native'
import { ExpenseOutput } from '../components/expenses/ExpenseOutput'

export const AllExpenses = () => {
  return (
    <ExpenseOutput expensesPeriod='All'/>
  )
}

const styles = StyleSheet.create({
    
})