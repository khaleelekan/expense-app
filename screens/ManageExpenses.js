import { useLayoutEffect } from 'react';
import {View, StyleSheet,Text} from 'react-native'
import { IconButton } from '../UI/iconButton';
import { GlobalStyles } from '../constants/style';
import { Button } from '../UI/Button';

export const ManageExpenses = ({route, navigation}) => {
  const editExpense = route.params?.expenseId;
  const isEditing = !!editExpense;

useLayoutEffect(( )=>{
  navigation.setOptions({
    title: isEditing ? 'Edit Expenses' : 'Manage Expenses'}
  )
},[navigation, isEditing]);

function deleteExpense (){
  navigation.goBack();
}
function cancelHandler() {
  navigation.goBack();
}

function confirmHandler (){
  navigation.goBack();
}

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode ='flat' onPress={cancelHandler}>cancel</Button>
        <Button  style={styles.button} onPress={confirmHandler}>{isEditing ? 'update' : 'Add'}</Button>
      </View>
        {isEditing && (
          <View style={styles.deleteContainer}>
          <IconButton icon='trash' size={36} 
          color={GlobalStyles.colors.error500} onPress={deleteExpense}/>
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
    buttons:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    button:{
      flex: 1
    },
    deleteContainer: {
      marginTop: 16,
      paddingTop: 8,
      borderTopWidth: 2,
      borderTopColor: GlobalStyles.colors.primary200,
      alignItems: 'center'
    },
   
})