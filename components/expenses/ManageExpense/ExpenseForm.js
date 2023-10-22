import {View, StyleSheet} from 'react-native'
import {Input} from './Input'


export const ExpenseForm = () => {

    function amountChangeHandler (){

    }
    return(
        <View>
            <Input label='Amount' textConfig={{
                keyboardType: 'decimal-pad',
                onChangeText: amountChangeHandler,
            }}/>
            <Input label='Date' textConfig={{
                placeholder: 'YYYY-MM-DD',
                maxLength: 10,
                onChangeText: () => {}
            }}/>
            <Input label='Description' textConfig={{
                mulitline: true,
            }}/>
        </View>
    )
}