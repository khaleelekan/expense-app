import {View, StyleSheet} from 'react-native'
import {Input} from './Input'
import { useState } from 'react'


export const ExpenseForm = () => {
    const [inputValues, setInputValues] = useState({
        amount: '',
        date: '',
        description: ''
    })

    function inputChangeHandler (inputIdentifier, enteredValue){
        setInputValues((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: enteredValue
            }
        })
    }
    return(
        <View>
            <Input label='Amount' textConfig={{
                keyboardType: 'decimal-pad',
                onChangeText: inputChangeHandler(this, 'amount') ,
                value: inputValues.amount,
            }}/>
            <Input label='Date' textConfig={{
                placeholder: 'YYYY-MM-DD',
                maxLength: 10,
                onChangeText: inputChangeHandler(this, 'date') ,
                value: inputValues.date,
            }}/>
            <Input label='Description' 
                textConfig={{
                mulitline: true,
                onChangeText: inputChangeHandler(this, 'description') ,
                value: inputValues.description,
            }}/>
        </View>
    )
}