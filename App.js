// React imports
import { useState, useEffect } from "react";

// Navigation imports
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens & components imports
import TransactionsNav from "./pages/TransactionsNav";
import LoadingScreen from "./pages/LoadingScreen";
import SummaryScreen from "./pages/summery/SummaryScreen";

// Styling imports
import Ionicons from '@expo/vector-icons/Ionicons';

// Placeholders
import placeholderData from "./constants/TransactionManager"

const Tab = createBottomTabNavigator()

export default function App() {

  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const sortedData = placeholderData.sort((a,b) => {return new Date(a.date).getTime() - new Date(b.date).getTime()})
    setData(sortedData)
    setLoading(false)
  },[])

  if(loading){
    return(
      <LoadingScreen/>
    )
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Transactions"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen 
        name="Transactions"
        children={() => <TransactionsNav transactions={data} />}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="bar-chart-sharp"
              size={size}
              color={color}
            />
          )
        }}
        />
        <Tab.Screen 
        name="Summary"
        children={() => <SummaryScreen transactions={data}/>}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="logo-electron"
              size={size}
              color={color}
            />
          )
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}