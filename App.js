import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AllExpenses } from './screens/AllExpenses';
import { RecentExpenses } from './screens/RecentExpenses';
import { ManageExpenses } from './screens/ManageExpenses';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpenseOverview (){
  return(
    <BottomTabs.Navigator>
    <BottomTabs.Screen name='Recent expenses'
    component={RecentExpenses}/>
    <BottomTabs.Screen name='All expenses'
    component={AllExpenses}/>
  </BottomTabs.Navigator>
  )
}
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
    <NavigationContainer>
      <Stack.Navigator>
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
