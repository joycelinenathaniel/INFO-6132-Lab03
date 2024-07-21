import { View, Text } from 'react-native';
import styles from './styles';

export default function TransactionDetails({ route }) {
    const { id, name, location, cost, date } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text.title}>
                    {name}
                </Text>
                <Text style={styles.text.location}>
                    {location} | {date}
                </Text>
            </View>
            <Text style={styles.text.cost}>
                ${cost.toFixed(2)}
            </Text>
        </View >
    );
}