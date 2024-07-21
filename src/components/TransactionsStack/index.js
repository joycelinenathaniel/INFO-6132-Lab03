import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsList from '../TransactionsList';
import TransactionDetails from '../TransactionsList/TransactionItem/TransactionDetails';

const Stack = createStackNavigator();

export default function TransactionsStack({ transactions, navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="TransactionsList"
                options={({ navigation }) => ({
                    title: 'Transactions'
                })}
            >
                {(props) => (
                    <TransactionsList
                        {...props}
                        transactions={transactions}
                    />
                )}
            </Stack.Screen>
            <Stack.Screen name="TransactionDetails">
                {(props) => (
                    <TransactionDetails
                        {...props}
                        transactions={transactions}
                    />
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );
}