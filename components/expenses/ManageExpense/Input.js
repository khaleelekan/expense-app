import {View, StyleSheet, TextInput} from 'react-native'

export const Input = ({label, textConfig}) => {
    return(
        <View>
            <Text>{label}</Text>
            <TextInput {...textConfig}/>
        </View>
    )
}