import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AllExpenses } from './screens/AllExpenses';
import { RecentExpenses } from './screens/RecentExpenses';
import { ManageExpenses } from './screens/ManageExpenses';
import { GlobalStyles } from './constants/style';
import {Ionicons} from '@expo/vector-icons'
import { IconButton } from './UI/iconButton';
import ExpenseContextProvider from './store/expense-context';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpenseOverview (){
  return(
    <BottomTabs.Navigator screenOptions={({navigation})=>({
        headerStyle:{backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({tintColor}) => {
          return (<IconButton icon='add' size={24} 
          color={tintColor} onPress={()=>{
            navigation.navigate('ManageExpenses')
          }}/>)
        }
      })}>
    <BottomTabs.Screen name='Recent expenses'
    component={RecentExpenses}
    options={
      {title : 'Recent Expenses',
       tabBarLabel: 'Recent',
       tabBarIcon: ({color, size}) => (<Ionicons name='time' 
       size={size} color={color}/>)
      }
    }/>
    <BottomTabs.Screen name='All expenses'
    component={AllExpenses}
    options={
      {title : 'All Expenses',
       tabBarLabel: 'All',
       tabBarIcon: ({color, size}) => (<Ionicons name='calendar' 
       size={size} color={color}/>)
      }} />
  </BottomTabs.Navigator>
  )
}
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpenseContextProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
         headerStyle: {backgroundColor:GlobalStyles.colors.primary500},
         headerTintColor: 'white'
        }}
      >
        <Stack.Screen name='expense overview'
        component={ExpenseOverview} options={{headerShown: false}}/>
        <Stack.Screen name='ManageExpenses'
        component={ManageExpenses} options={{
          presentation: 'modal'
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </ExpenseContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
