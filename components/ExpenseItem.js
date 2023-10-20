import {View, Text, Pressable, StyleSheet} from 'react-native'
import { GlobalStyles } from '../constants/style'
import { getFormattedDate } from '../util/date'
import { useNavigation } from '@react-navigation/native'

export const ExpenseItem = ({id, description, amount, date}) => {
    function expenseHandler (){
        navigation.navigate('ManageExpenses',{
            expenseId: id
        }) 
    }
    const navigation = useNavigation();
    return (
    <Pressable onPress={expenseHandler} style={({pressed})=> pressed && styles.pressed}>
        <View style={styles.expenseItem}>
            <View >
            <Text style={[styles.description,styles.textBase]}>{description}</Text>
            <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
            </View>
            <View style={styles.amountContainer}>
            <Text style={styles.amount}>${amount.toFixed(2)}</Text>
            </View>
    </View>
    </Pressable> 
  )
}

const styles = StyleSheet.create({
    expenseItem:{
        padding:12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowOffset: { width: 1, height: 1},
        shadowRadius: 4,
        shadowOpacity: 0.4
    },
    textBase:{
        color: GlobalStyles.colors.primary50
    },
    description:{
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold',
        minWidth: 50
    },
    pressed:{
        opacity: 0.75
    }
})
