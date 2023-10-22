import {View, Text,StyleSheet} from 'react-native'
import { ExpenseSummary } from './ExpenseSummary'
import { ExpensesList } from './ExpensesList'
import { GlobalStyles } from '../../constants/style'



export const ExpenseOutput = ({expenses , expensesPeriod, fallback}) => {
  let content = <Text style={styles.infoText}>{fallback}</Text>
  if (expenses.length > 0){
    content = <ExpensesList expenses={expenses}/>
  }else{
    content = <Text style={styles.infoText}>{fallback}</Text>
  }
  return (
    <View style={styles.container}>
    <ExpenseSummary expenses={expenses} periodName={expensesPeriod}/>
    {content}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:24,
        backgroundColor: GlobalStyles.colors.primary700
    },
    infoText:{
      color: 'white',
      textAlign: 'center',
      fontSize: 16,
      marginTop: 32
    }
})