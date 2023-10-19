import {View, StyleSheet} from 'react-native'
import { ExpenseSummary } from './ExpenseSummary'
import { ExpensesList } from './ExpensesList'
import { GlobalStyles } from '../../constants/style'

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

export const ExpenseOutput = ({expenses , expensesPeriod}) => {
  return (
    <View style={styles.container}>
    <ExpenseSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
    <ExpensesList expenses={DUMMY_EXPENSES}/>
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