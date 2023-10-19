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

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpenseOverview (){
  return(
    <BottomTabs.Navigator screenOptions={
      {
        headerStyle:{backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}>
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
    <NavigationContainer>
      <Stack.Navigator 
      >
        <Stack.Screen name='expense overview'
        component={ExpenseOverview} options={{headerShown: false}}/>
        <Stack.Screen name='manage expenses'
        component={ManageExpenses}/>
      </Stack.Navigator>
    </NavigationContainer>
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
