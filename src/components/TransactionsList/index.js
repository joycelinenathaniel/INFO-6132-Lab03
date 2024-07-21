import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import TransactionsItem from './TransactionItem';

export default function TransactionsList({transactions, navigation}) {

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                {transactions.map((transaction, index) => {
                    return (
                        <TransactionsItem
                            key={index}
                            id={transaction.id}
                            name={transaction.name}
                            location={transaction.location}
                            cost={transaction.cost}
                            date={transaction.date}
                            navigation={navigation}
                        />
                    )
                })}
            </ScrollView>
        </View>
    );
}