import {View, StyleSheet, Alert,Text} from 'react-native'
import {Input} from './Input'
import { useState } from 'react'
import { Button } from '../../../UI/Button'
import { getFormattedDate } from '../../../util/date'
import { GlobalStyles } from '../../../constants/style'

export const ExpenseForm = ({submitLabel, onCancel,onSubmit, defaultValues}) => {
    const [inputs, setInputs] = useState({
        amount: {value:defaultValues ? defaultValues.amount.toString() :'',
                 isValid: !!defaultValues
              },
        date: {value:defaultValues? getFormattedDate(defaultValues.date) : '',
               isValid: !!defaultValues},
        description:{ value:defaultValues ? defaultValues.description : '',
                     isValid: !!defaultValues}
    });

   

    function inputChangeHandler (inputIdentifier, enteredValue){
        setInputs((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: {value: enteredValue,
                isValid: true}
            }
        })
    }
    function submitHandler (){
        const amountIsValid = !isNaN(inputs.amount.value)&& inputs.amount.value > 0;
        const dateIsValid = inputs.date.value.toString() !== 'Invalid Date';
        const descriptionIsValid = inputs.description.value.trim().length > 0 ;
    
        if (!amountIsValid || !dateIsValid || !descriptionIsValid){
            // Alert.alert('Invalid inputs, check Inputs')\
            setInputs((curInputs)=>{
                return{
                    amount:{value: curInputs.amount.value, isValid: amountIsValid},
                    date:{value: curInputs.date.value, isValid: dateIsValid},
                    description:{
                        value: curInputs.description.value, 
                        isValid: descriptionIsValid
                    },
                }
            }) 
        } 

        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value
        };
        onSubmit(expenseData);
    }
    const formisInValid = !inputs.amount.isValid ||
                          !inputs.date.isValid || 
                          !inputs.description.isValid;
    return(
        <View>
            <Input label='Amount' textConfig={{
                keyboardType: 'decimal-pad',
                onChangeText: inputChangeHandler.bind(this, 'amount') ,
                value: inputs.amount.value,
            }}
            invalid={!inputs.amount.isValid}/>
            <Input label='Date' textConfig={{
                placeholder: 'YYYY-MM-DD',
                maxLength: 10,
                onChangeText: inputChangeHandler.bind(this, 'date') ,
                value: inputs.date.value,
            }}
            invalid={!inputs.date.isValid}/>
            <Input label='Description' 
                textConfig={{
                multiline: true,
                onChangeText: inputChangeHandler.bind(this, 'description') ,
                value: inputs.description.value,
            }}
            invalid={!inputs.description.isValid}/>
            {formisInValid &&
             (<Text style={styles.errorText}>The inputs were incorrect, check your data</Text>)}
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
      errorText: {
        textAlign: 'center',
        color: GlobalStyles.colors.error500,
        margin: 8
      },
      button:{
        flex: 1
      },
})