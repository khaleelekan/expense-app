import {View, StyleSheet, Alert} from 'react-native'
import {Input} from './Input'
import { useState } from 'react'
import { Button } from '../../../UI/Button'
import { getFormattedDate } from '../../../util/date'

export const ExpenseForm = ({submitLabel, onCancel,onSubmit, defaultValues}) => {
    const [inputValues, setInputValues] = useState({
        amount: defaultValues ? defaultValues.amount.toString() :'',
        date: defaultValues? getFormattedDate(defaultValues.date) : '',
        description: defaultValues ? defaultValues.description : ''
    });

    const amountIsValid = !isNaN(expenseData.amount)&& expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0 ;

    if (amountIsValid || dateIsValid || descriptionIsValid){
        Alert.alert('Invalid inputs, check Inputs')
        return ;
    }

    function inputChangeHandler (inputIdentifier, enteredValue){
        setInputValues((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: enteredValue
            }
        })
    }
    function submitHandler (){

        const expenseData = {
            amount: +inputValues.amount,
            date: new Date(inputValues.date),
            description: inputValues.description
        };
        onSubmit(expenseData);
    }
    return(
        <View>
            <Input label='Amount' textConfig={{
                keyboardType: 'decimal-pad',
                onChangeText: inputChangeHandler.bind(this, 'amount') ,
                value: inputValues.amount,
            }}/>
            <Input label='Date' textConfig={{
                placeholder: 'YYYY-MM-DD',
                maxLength: 10,
                onChangeText: inputChangeHandler.bind(this, 'date') ,
                value: inputValues.date,
            }}/>
            <Input label='Description' 
                textConfig={{
                mulitline: true,
                onChangeText: inputChangeHandler.bind(this, 'description') ,
                value: inputValues.description,
            }}/>
             <View style={styles.buttons}>
        <Button style={styles.button} mode ='flat' onPress={onCancel}>cancel</Button>
        <Button  style={styles.button} onPress={submitHandler}>{submitLabel}</Button>
      </View>
        </View>
    )
}

const styles =StyleSheet.create({
    buttons:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      button:{
        flex: 1
      },
})