import { useContext, useLayoutEffect } from 'react';
import {View, StyleSheet,Text} from 'react-native'
import { IconButton } from '../UI/iconButton';
import { GlobalStyles } from '../constants/style';
import { ExpenseCreateContext } from '../store/expense-context';
import { ExpenseForm } from '../components/expenses/ManageExpense/ExpenseForm';
import { deleteExpenses, storeExpense, updateExpenses } from '../util/http';

export const ManageExpenses = ({route, navigation}) => {
  const expenseCtx =  useContext(ExpenseCreateContext)
  const editExpenseId = route.params?.expenseId;
  const isEditing = !!editExpenseId;

  const selectedExpense = expenseCtx.expense.find(
    (expense)=> expense.id == editExpenseId);

useLayoutEffect(( )=>{
  navigation.setOptions({
    title: isEditing ? 'Edit Expenses' : 'Manage Expenses'}
  )
},[navigation, isEditing]);

  async function deleteExpenseHandler (){
  deleteExpenses (editExpenseId);
  expenseCtx.deleteExpense(editExpenseId)
  navigation.goBack();
}
function cancelHandler() {
  navigation.goBack();
}

async function confirmHandler (expenseData){
 if(isEditing){
  expenseCtx.updateExpense( editExpenseId,expenseData);
  updateExpenses(editExpenseId,expenseData)
 }else{
  const id = await storeExpense(expenseData);
  expenseCtx.addExpense({...expenseData , id: id})
 }
  navigation.goBack();
}

  return (
    <View style={styles.container}>
      <ExpenseForm submitLabel={isEditing? 'Update' : 'Add'} 
      onCancel={cancelHandler} onSubmit={confirmHandler}
      defaultValues={selectedExpense}/>
        {isEditing && (
          <View style={styles.deleteContainer}>
          <IconButton icon='trash' size={36} 
          color={GlobalStyles.colors.error500} onPress={deleteExpenseHandler}/>
        </View>
        )}
    </View>
  )
  }
const styles = StyleSheet.create({
    container:{
      flex:1,
      padding: 24,
      backgroundColor: GlobalStyles.colors.primary800
    },
    deleteContainer: {
      marginTop: 16,
      paddingTop: 8,
      borderTopWidth: 2,
      borderTopColor: GlobalStyles.colors.primary200,
      alignItems: 'center'
    },
   
})