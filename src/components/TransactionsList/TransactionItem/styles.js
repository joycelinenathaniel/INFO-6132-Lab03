import { StyleSheet,  Platform } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        flex: 1,
    },
    costContainer: {
        flexDirection: 'row',
        alignItem: 'center',
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
        fontWeight: '700',
        fontSize: 24,
    },
});