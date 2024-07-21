import { StyleSheet,  Platform } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1,
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    text: {
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
        fontWeight: '200',
        fontSize: 20,
        bold: {
            fontWeight: '700',
            fontSize: 20,
        }
    },
});