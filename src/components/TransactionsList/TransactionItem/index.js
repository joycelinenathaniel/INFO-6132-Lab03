import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import { MaterialIcons } from '@expo/vector-icons';

export default function TransactionsItem({ id, name, location, cost, date, navigation }) {
    return (
        <Pressable onPress={() => navigation.navigate('TransactionDetails', { id, name, location, cost, date })}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    {name}
                </Text>
                <View style={styles.costContainer}>
                    <Text style={styles.title}>
                        ${cost.toFixed(2)}
                    </Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </View>
            </View >
        </Pressable>
    );
}