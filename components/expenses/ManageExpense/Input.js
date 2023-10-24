import {View, Text,StyleSheet, TextInput} from 'react-native'
import { GlobalStyles } from '../../../constants/style'

export const Input = ({label, textConfig, invalid}) => {

    const inputStyle = [styles.input];
    
    if (textConfig && textConfig.multiline){
        inputStyle.push(styles.inputMultiline)
    }
    if (invalid){
        inputStyle.push(styles.invalidInput)
    }
    return(
        <View style={styles.container}>
            <Text style={[styles.label && styles.invalidLabel]}>{label}</Text>
            <TextInput style={inputStyle} {...textConfig}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 4,
        marginVertical: 8
    },
    label:{
        color: GlobalStyles.colors.primary100,
        fontSize: 12,
        marginBottom: 4
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        color: GlobalStyles.colors.primary700,
        padding: 6,
        borderRadius:8,
        fontSize: 18
    },
    inputMultiline:{
        minHeight: 100,
        textAlignVertical: 'top'
    },
    invalidLabel:{
        color: GlobalStyles.colors.error500
    },
    invalidInput:{
        backgroundColor: GlobalStyles.error50
    }
})