import { View, Text } from 'react-native';
import styles from './styles';

export default function Summary({ transactions, navigation }) {
    //Calculate the number of transactions 
    const transactionsCount = transactions.length;

    //Calculate the total costs for the items in the transactions list
    const balance = transactions.reduce((accumulator, currentTransaction) => accumulator + currentTransaction.cost, 0);

    //Sort list from lowest to highest transactions to identify the highest and lowest spending items
    const transactionsSorted = transactions.sort((a, b) => a.cost - b.cost);
    const highSpending = transactionsSorted[transactionsCount - 1]
    const lowSpending = transactionsSorted[0]

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.text.bold}>Transactions:</Text>
                <Text style={styles.text}> {transactionsCount}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text.bold}>Balance:</Text>
                <Text style={styles.text}> ${balance}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text.bold}>High Spending:</Text>
                <Text style={styles.text}> {highSpending.name} - ${highSpending.cost}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text.bold}>Low Spending:</Text>
                <Text style={styles.text}> {lowSpending.name} - ${lowSpending.cost}</Text>
            </View>
        </View>
    );
}