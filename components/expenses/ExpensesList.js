import {View ,FlatList} from 'react-native'
import { ExpenseItem } from '../ExpenseItem'

export const ExpensesList = ({expenses}) => {
    function renderItem (itemData){
        return <ExpenseItem {...itemData.item}/>
    }
  return (
   <View>
    <FlatList data={expenses} renderItem={renderItem}
    keyExtractor={(item)=> item.id}/>
   </View>
  )
}
