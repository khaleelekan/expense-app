import {View, StyleSheet} from 'react-native'
import { ExpenseSummary } from './ExpenseSummary'
import { ExpensesList } from './ExpensesList'
import { GlobalStyles } from '../../constants/style'



export const ExpenseOutput = ({expenses , expensesPeriod}) => {
  return (
    <View style={styles.container}>
    <ExpenseSummary expenses={expenses} periodName={expensesPeriod}/>
    <ExpensesList expenses={expenses}/>
    
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:24,
        backgroundColor: GlobalStyles.colors.primary700
    }
})