import { StatusBar } from 'expo-status-bar';
import Summary from './src/components/Summary';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import uuid from 'react-native-uuid';
import TransactionsStack from './src/components/TransactionsStack';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  const [transactions, setTransactions] = useState([
    {
      id: uuid.v4(),
      name: "Hollister",
      location: "London, ON",
      cost: 128.32,
      date: "07/14/24"
    },
    {
      id: uuid.v4(),
      name: "Sephora",
      location: "Toronto, ON",
      cost: 78.90,
      date: "07/04/24"
    },
    {
      id: uuid.v4(),
      name: "Tim Hortons",
      location: "St. Thomas, ON",
      cost: 4.39,
      date: "06/02/24"
    },
    {
      id: uuid.v4(),
      name: "Coffee Culture",
      location: "London, ON",
      cost: 12.00,
      date: "05/24/24"
    },
    {
      id: uuid.v4(),
      name: "Dairy Queen",
      location: "London, ON",
      cost: 20.34,
      date: "03/04/24"
    },
  ]);

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator>
        <Tab.Screen
          name='Transactions'
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              const name = focused
                ? 'list-circle'
                : 'list-circle-outline';
              return (
                <Ionicons
                  name={name}
                  size={size}
                  color={color}
                />
              )
            }
          }}
        >
          {(props) => (
            <TransactionsStack
              {...props}
              transactions={transactions}
            />
          )}
        </Tab.Screen>
        <Tab.Screen
          name='Summary'
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              const name = focused
                ? 'receipt'
                : 'receipt-outline';
              return (
                <Ionicons
                  name={name}
                  size={size}
                  color={color}
                />
              )
            }
          }}>
          {(props) => (
            <Summary
              {...props}
              transactions={transactions}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}